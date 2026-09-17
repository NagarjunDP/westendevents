import { allSEOPages } from "../src/data/seo-pages";

console.log("=========================================");
console.log("WESTEND EVENTS — SEO SYSTEM AUDIT");
console.log("=========================================\n");

let errors: string[] = [];
let warnings: string[] = [];

// 1. Total Page Count Check
console.log(`Total Programmatic Pages Registered: ${allSEOPages.length}`);
if (allSEOPages.length < 60) {
  errors.push(`Page count is below expected minimum 60 (found ${allSEOPages.length})`);
}

// 2. Uniqueness Checks
const slugs = new Set<string>();
const titles = new Set<string>();
const descriptions = new Set<string>();
const h1s = new Set<string>();
const allSlugsList = new Set(allSEOPages.map((p) => p.slug));

allSEOPages.forEach((page, index) => {
  // Check Slug
  if (slugs.has(page.slug)) {
    errors.push(`Duplicate slug detected: "${page.slug}" at page index ${index}`);
  }
  slugs.add(page.slug);

  // Check Title
  if (titles.has(page.metaTitle)) {
    errors.push(`Duplicate metaTitle detected: "${page.metaTitle}" in slug "${page.slug}"`);
  }
  titles.add(page.metaTitle);

  // Check Description
  if (descriptions.has(page.metaDescription)) {
    errors.push(`Duplicate metaDescription detected: "${page.metaDescription}" in slug "${page.slug}"`);
  }
  descriptions.add(page.metaDescription);

  // Check H1
  if (h1s.has(page.h1)) {
    errors.push(`Duplicate H1 detected: "${page.h1}" in slug "${page.slug}"`);
  }
  h1s.add(page.h1);

  // 3. Word Count Approximation (handles both schemas)
  const searchIntent = (page as unknown as { searchIntentSummary?: string }).searchIntentSummary ?? "";
  let fullText = `${page.h1} ${page.heroBadge} ${page.heroIntro} ${page.localSummary} ${searchIntent} ${page.timelineTitle ?? ""} `;

  if (page.distanceInfo) {
    fullText += `${page.distanceInfo.fromMumbai ?? ""} ${page.distanceInfo.fromPune ?? ""} ${page.distanceInfo.nearestTransit ?? ""} `;
  }

  (page.quickMetrics ?? []).forEach((m) => {
    fullText += `${m.label} ${m.value} `;
  });
  (page.empanelledVenues ?? []).forEach((v) => {
    fullText += `${v.name} ${v.type} ${v.highlight} ${v.guestCapacity} `;
  });
  // Schema A: serviceFeatures
  (page.serviceFeatures ?? []).forEach((s) => {
    fullText += `${s.title} ${s.description} `;
  });
  // Schema B: serviceBreakdown
  (page.serviceBreakdown ?? []).forEach((s) => {
    fullText += `${s.title} ${s.description} `;
  });
  // Schema A: pricingSignal.packages
  (page.pricingSignal?.packages ?? []).forEach((p) => {
    fullText += `${p.tierName} ${p.startingPrice} ${p.bestFor} ${(p.inclusions ?? []).join(" ")} `;
  });
  // Schema B: pricingPackages
  (page.pricingPackages ?? []).forEach((p) => {
    fullText += `${p.name} ${p.startingPrice} ${p.guestCount} ${(p.deliverables ?? []).join(" ")} `;
  });
  // Timeline
  (page.timeline ?? []).forEach((t) => {
    fullText += `${t.step} ${t.phase} ${t.duration} ${t.description} `;
  });
  // Why Choose Us
  ((page as unknown as { whyChooseUs?: { title: string; description: string }[] }).whyChooseUs ?? []).forEach((w) => {
    fullText += `${w.title} ${w.description} `;
  });
  // FAQs — handle both answer formats
  (page.faqs ?? []).forEach((f) => {
    fullText += `${f.question} ${f.answer ?? ""} ${f.directAnswer ?? ""} ${f.detailedAnswer ?? ""} `;
  });
  if (page.caseStudy) {
    fullText += `${page.caseStudy.headline} ${page.caseStudy.story} `;
    if (typeof page.caseStudy.testimonial === "object" && page.caseStudy.testimonial) {
      fullText += `${page.caseStudy.testimonial.quote ?? ""} ${page.caseStudy.testimonial.clientName ?? ""} `;
    } else if (typeof page.caseStudy.testimonial === "string") {
      fullText += `${page.caseStudy.testimonial} `;
    }
  }
  // Schema A: gallery
  (page.gallery ?? []).forEach((g) => {
    fullText += `${g.alt} ${g.caption ?? ""} `;
  });
  // Schema B: galleryImages
  (page.galleryImages ?? []).forEach((g) => {
    fullText += `${g.alt} ${g.category} `;
  });

  const wordCount = fullText.trim().split(/\s+/).length;
  if (wordCount < 800) {
    warnings.push(`Page "${page.slug}" word count is ${wordCount} (target is >= 800)`);
  }

  // 4. Content Richness
  if ((page.faqs ?? []).length < 5) {
    errors.push(`Page "${page.slug}" has fewer than 5 FAQs (found ${(page.faqs ?? []).length})`);
  }
  // Gallery check (either schema)
  const galleryCount = (page.gallery ?? []).length + (page.galleryImages ?? []).length;
  if (galleryCount < 6) {
    errors.push(`Page "${page.slug}" has fewer than 6 gallery images (found ${galleryCount})`);
  }
  if ((page.empanelledVenues ?? []).length < 3) {
    errors.push(`Page "${page.slug}" has fewer than 3 empanelled venues (found ${(page.empanelledVenues ?? []).length})`);
  }
  // Pricing check (either schema)
  const pricingCount =
    (page.pricingSignal?.packages ?? []).length + (page.pricingPackages ?? []).length;
  if (pricingCount < 2) {
    errors.push(`Page "${page.slug}" has fewer than 2 pricing packages (found ${pricingCount})`);
  }

  // 5. Internal Links Validation (warnings only)
  const allRelated = [
    ...(page.relatedServiceSlugs ?? []),
    ...(page.nearbyLocationSlugs ?? []),
  ];
  allRelated.forEach((relSlug) => {
    if (!allSlugsList.has(relSlug)) {
      warnings.push(`Broken link: "${page.slug}" → "${relSlug}" (not registered)`);
    }
  });
});

console.log("\n--- AUDIT RESULTS ---");
console.log(`Checked ${allSEOPages.length} pages.`);
console.log(`Unique Slugs: ${slugs.size}`);
console.log(`Unique Titles: ${titles.size}`);
console.log(`Unique Meta Descriptions: ${descriptions.size}`);
console.log(`Unique H1s: ${h1s.size}`);

// Separate word count warnings from link warnings
const wordCountWarnings = warnings.filter((w) => w.includes("word count"));
const linkWarnings = warnings.filter((w) => w.includes("Broken link"));

if (wordCountWarnings.length > 0) {
  console.log(`\n⚠️  Word count warnings (${wordCountWarnings.length}):`);
  wordCountWarnings.forEach((w) => console.log(`  - ${w}`));
} else {
  console.log("\n✅ Word count target (>= 800 words): 100% Passed!");
}

if (linkWarnings.length > 0) {
  console.log(`\n⚠️  Unregistered cross-links (${linkWarnings.length}) — may be intentional for future pages:`);
  linkWarnings.forEach((w) => console.log(`  - ${w}`));
}

if (errors.length > 0) {
  console.log(`\n❌ Errors Found (${errors.length}):`);
  errors.forEach((e) => console.log(`  - ${e}`));
  process.exit(1);
} else {
  console.log("\n✅ Zero Hard Errors! SEO Data Integrity Verified.");
  console.log("   - 0 duplicate titles");
  console.log("   - 0 duplicate descriptions");
  console.log("   - 0 duplicate H1s");
  console.log("   - All schema, FAQ, and venue constraints satisfied.\n");
  process.exit(0);
}
