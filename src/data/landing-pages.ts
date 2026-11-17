export interface LandingPage {
  slug: string;
  location: "Lonavala" | "Pune" | "Khandala" | "Karjat" | "Mahabaleshwar" | "Alibaug";
  service: string;
  title: string;
  metaDescription: string;
  h1: string;
  introParagraph1: string;
  introParagraph2: string;
  faqs: { question: string; answer: string }[];
  benefits: string[];
  nearbyLocations: string[];
  uniqueSignature: string;
}

const locations = [
  {
    name: "Lonavala",
    slug: "lonavala",
    context: "hill resorts and lakeside lawns near Tiger Point and the Mumbai-Pune Expressway",
    seasons: "green monsoon months and cool winter evenings",
    transit: "approximately 90 minutes from Mumbai and 65 km from central Pune",
  },
  {
    name: "Pune",
    slug: "pune",
    context: "city hotels, banquet halls and contemporary venues across Koregaon Park, Kharadi and Bavdhan",
    seasons: "pleasant winter calendars and indoor-ready summer and monsoon plans",
    transit: "served from Pune International Airport and the city railway and metro connections",
  },
  {
    name: "Khandala",
    slug: "khandala",
    context: "valley-view resorts, heritage clubs and private terraces along the mountain ridge",
    seasons: "dramatic monsoon scenery and crisp dry-season evenings",
    transit: "close to Mumbai-Pune Expressway exits and Khandala railway station",
  },
  {
    name: "Karjat",
    slug: "karjat",
    context: "riverside farmhouses, independent villas and spacious resort properties in the Sahyadri foothills",
    seasons: "lush monsoons and mild winter celebration weather",
    transit: "well connected by the Mumbai suburban rail line and road links from Navi Mumbai",
  },
  {
    name: "Mahabaleshwar",
    slug: "mahabaleshwar",
    context: "mountain resorts, valley-facing lawns and strawberry-country properties around Panchgani",
    seasons: "cool summers, misty mornings and clear autumn evenings",
    transit: "reached by road from Pune and Mumbai, with onward transport coordinated to the hill venue",
  },
  {
    name: "Alibaug",
    slug: "alibaug",
    context: "beach resorts, seaside villas and coastal lawns near Mandwa and Revdanda",
    seasons: "warm beach weather, post-monsoon sunsets and sheltered winter afternoons",
    transit: "reachable by road from Navi Mumbai or ferry connections from South Mumbai",
  },
] as const;

const services = [
  { slug: "wedding-planner", name: "Wedding Planner", scope: "guest hospitality, vendor coordination, wedding timelines and complete on-ground execution" },
  { slug: "destination-wedding-planner", name: "Destination Wedding Planner", scope: "travel coordination, multi-day programming, guest movement and venue-led production" },
  { slug: "luxury-wedding-planner", name: "Luxury Wedding Planner", scope: "bespoke design direction, premium hospitality, custom fabrication and discreet guest service" },
  { slug: "wedding-decorator", name: "Wedding Decorator", scope: "mandap, stage, floral styling, lighting concepts and weather-responsive venue dressing" },
  { slug: "intimate-wedding-planner", name: "Intimate Wedding Planner", scope: "close-family formats, measured guest counts, personal ceremonies and refined dining" },
  { slug: "monsoon-wedding-planner", name: "Monsoon Wedding Planner", scope: "covered structures, drainage planning, backup power, humidity-safe decor and rain contingencies" },
  { slug: "sangeet-planner", name: "Sangeet Planner", scope: "performances, stage choreography, family entrances, sound cues and energetic hospitality" },
  { slug: "mehendi-planner", name: "Mehendi Planner", scope: "artist coordination, colourful lounges, floral details and relaxed daytime hospitality" },
  { slug: "haldi-planner", name: "Haldi Planner", scope: "sun-safe daytime design, easy-clean surfaces, floral colour stories and close-guest rituals" },
  { slug: "engagement-planner", name: "Engagement Planner", scope: "ring ceremony choreography, intimate stage styling, dining and family hospitality" },
  { slug: "reception-planner", name: "Reception Planner", scope: "formal welcomes, stage reveals, speeches, dinner pacing and evening production" },
  { slug: "proposal-planner", name: "Proposal Planner", scope: "private venue selection, discreet setup, photography timing and a personal reveal" },
  { slug: "corporate-offsite-planner", name: "Corporate Offsite Planner", scope: "agenda design, leadership sessions, team activities, meals and transfer coordination" },
  { slug: "conference-planner", name: "Conference Planner", scope: "stage, projection, directional sound, registration, speaker support and technical rehearsals" },
  { slug: "team-outing-planner", name: "Team Outing Planner", scope: "group itineraries, resort activities, shared meals and organised on-time departures" },
  { slug: "leadership-retreat-planner", name: "Leadership Retreat Planner", scope: "private breakout settings, executive hospitality, facilitated sessions and secure operations" },
  { slug: "product-launch-planner", name: "Product Launch Planner", scope: "brand reveal, exhibition design, media handling, AV cues and guest demonstrations" },
  { slug: "corporate-gala-planner", name: "Corporate Gala Planner", scope: "award transitions, formal dining, stage direction and premium evening entertainment" },
  { slug: "award-ceremony-planner", name: "Award Ceremony Planner", scope: "nominee management, trophy reveals, audience cues and polished broadcast-style staging" },
  { slug: "exhibition-planner", name: "Exhibition Planner", scope: "booth flow, wayfinding, registration, brand displays and technical presentation support" },
  { slug: "family-celebration-planner", name: "Family Celebration Planner", scope: "multi-generational guest comfort, themed dining and warm personal hosting" },
  { slug: "anniversary-planner", name: "Anniversary Planner", scope: "memory-led decor, family performances, photography and intimate guest hospitality" },
  { slug: "birthday-planner", name: "Birthday Planner", scope: "age-appropriate entertainment, cake presentation, seating, decor and guest activities" },
  { slug: "milestone-birthday-planner", name: "Milestone Birthday Planner", scope: "personal storytelling, premium staging, dining experiences and curated celebration moments" },
  { slug: "baby-shower-planner", name: "Baby Shower Planner", scope: "gentle daytime decor, comfortable seating, games, dining and thoughtful family moments" },
  { slug: "naming-ceremony-planner", name: "Naming Ceremony Planner", scope: "traditional ritual support, family seating, floral decor and measured cultural hospitality" },
  { slug: "pre-wedding-shoot-planner", "name": "Pre-Wedding Shoot Planner", scope: "location recce, permit planning, styling support, lighting and day-of shoot logistics" },
  { slug: "wedding-photography-planner", name: "Wedding Photography Planner", scope: "shoot schedules, couple portraits, ceremony coverage and coordinated venue movement" },
  { slug: "sound-production-planner", name: "Sound and Production Planner", scope: "JBL sound systems, stage truss, LED visuals, lighting, power and technical crew" },
  { slug: "private-dining-planner", name: "Private Dining Planner", scope: "curated menus, table styling, service pacing, guest welcome and intimate ambience" },
] as const;

const nearbyByLocation: Record<string, string[]> = {
  Lonavala: ["khandala", "pune", "karjat"],
  Pune: ["lonavala", "lavasa", "karjat"],
  Khandala: ["lonavala", "pune", "karjat"],
  Karjat: ["lonavala", "khandala", "pune"],
  Mahabaleshwar: ["pune", "lonavala", "panchgani"],
  Alibaug: ["pune", "lonavala", "mumbai"],
};

export const landingPages: LandingPage[] = locations.flatMap((location, locationIndex) =>
  services.map((service, serviceIndex) => {
    const slug = `${service.slug}-${location.slug}-westend`;
    const title = `${service.name} in ${location.name} | Westend Events`;
    const metaDescription = `Plan a ${service.name.toLowerCase()} in ${location.name} with Westend Events. Bespoke decor, production, hospitality and local venue coordination.`;

    return {
      slug,
      location: location.name,
      service: service.name,
      title: title.length <= 60 ? title : `${service.name} in ${location.name}`,
      metaDescription: metaDescription.length <= 155 ? metaDescription : `Plan ${service.name.toLowerCase()} in ${location.name} with Westend Events. Local decor, production and hospitality.`,
      h1: `${service.name} in ${location.name}`,
      introParagraph1: `${service.name} in ${location.name} requires a clear brief covering ${service.scope}. The venue review documents guest count, arrival, host priorities, dining or programme flow, technical access and handover. For ${location.name}, ${location.context} and ${location.seasons} keep decisions visible and avoid last-minute substitutions.`,
      introParagraph2: `${location.context}. ${location.seasons} guide the timetable, guest comfort and shelter. ${location.transit} establishes supplier and guest call times. Westend Events coordinates approvals, setup zones, operating cues and final handover around the chosen property and the confirmed service scope.`,
      faqs: [
        { question: `How early should we plan ${service.name.toLowerCase()} in ${location.name}?`, answer: `For popular ${location.name} dates, begin 6 to 12 months ahead. Shorter timelines are possible for simple formats after a venue and vendor availability check.` },
        { question: `Can Westend Events manage the full ${location.name} venue setup?`, answer: `Yes. We coordinate decor, production, hospitality, suppliers and on-site operations, with scope confirmed clearly in the proposal.` },
        { question: `Do you provide decor and sound as in-house services?`, answer: `Selected decor, fabrication, lighting, sound and production items are handled through our owned inventory and production team. External specialists are only added when the brief requires them.` },
        { question: `How do weather and season affect ${service.name.toLowerCase()}?`, answer: `${location.seasons} influence shade, shelter, power, flooring and guest comfort. We design suitable covered areas and documented weather backups.` },
        { question: `What is the next step for a ${location.name} booking?`, answer: `Share your date, approximate guest count, preferred venue and event format. We will assess availability and propose a practical first planning meeting.` },
      ],
      benefits: [
        `One coordinated plan for ${service.scope}`,
        `Venue-aware logistics for ${location.context}`,
        `An on-site production lead covering setup, cues and final handover`,
      ],
      nearbyLocations: nearbyByLocation[location.name].filter((name) => name !== location.slug),
      uniqueSignature: `L${locationIndex + 1}S${serviceIndex + 1}`,
    };
  })
);
