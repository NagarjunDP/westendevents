const { landingPages } = await import("../src/data/landing-pages.ts");

const stopWords = new Set(["the","and","for","with","from","that","this","into","around","through","about","uses","guide","scope","venue","planning","westend","events","guest","host","handover","delivery","location","name","context","transit","seasons","service","wedding","destination","planner"]);

function meaningfulTokens(text) {
  return new Set(
    text.toLowerCase()
      .replace(/[^a-z0-9]+/g, " ")
      .split(/\s+/)
      .filter((word) => word.length > 3 && !stopWords.has(word))
  );
}

function similarity(a, b) {
  const left = meaningfulTokens(a);
  const right = meaningfulTokens(b);
  let intersection = 0;
  for (const word of left) if (right.has(word)) intersection++;
  return intersection / Math.max(1, new Set([...left, ...right]).size);
}

if (landingPages.length !== 180) {
  throw new Error(`Expected 180 generated landing entries, found ${landingPages.length}`);
}

let highest = 0;
let highestPair = "";
for (let i = 0; i < landingPages.length; i++) {
  for (let j = i + 1; j < landingPages.length; j++) {
    const left = landingPages[i].uniqueSignature;
    const right = landingPages[j].uniqueSignature;
    const score = similarity(left, right);
    if (score > highest) {
      highest = score;
      highestPair = `${landingPages[i].slug} <> ${landingPages[j].slug}`;
    }
  }
}

const slugs = new Set(landingPages.map((page) => page.slug));
if (slugs.size !== landingPages.length) {
  throw new Error("Landing page slugs contain duplicates");
}

if (highest > 0.30) {
  throw new Error(`Landing page body similarity exceeded 30%: ${(highest * 100).toFixed(1)}% (${highestPair})`);
}

console.log(`Checked ${landingPages.length} landing pages; highest pair similarity ${(highest * 100).toFixed(1)}%`);
