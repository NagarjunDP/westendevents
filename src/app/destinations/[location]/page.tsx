import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { LocalBusinessSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";

const lonavlaData = {
  serviceCategory: "Premium",
  hook: "Our home turf — most experience, fastest response, largest portfolio.",
  details: "As a Lonavla-based company, this is our home turf. We have executed hundreds of weddings at iconic venues like Della Resorts, Dukes Retreat, Fariyas, and Aamby Valley. Just a 90 to 120-minute drive from Mumbai or Pune, Lonavla offers the perfect hill-station and monsoon aesthetic for your big day, and nobody knows these venues better than we do.",
  mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711153123!2d73.32551573215284!3d18.75133658514104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be801098bdf8145%3A0x696b4a60a5e28658!2sLonavla%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  faqs: [
    { question: "How much does a destination wedding in Lonavla cost?", answer: "The cost varies, but typical luxury weddings start from ₹15 Lakhs for decor and production. Because we own all our inventory (JBL VRX, cold pyros), we provide better value by eliminating middleman markups." },
    { question: "Do you have tie-ups with resorts in Lonavla?", answer: "Yes, being locally based, we work closely with top-tier resorts like Della, Fariyas, and Dukes Retreat to ensure smooth logistics." },
    { question: "Is Lonavla a good choice for NRI weddings?", answer: "Absolutely. It's incredibly accessible from Mumbai International Airport (BOM) via the Expressway, requiring no domestic flight transfers for your international guests." }
  ]
};

const locationContent: Record<string, any> = {
  lonavla: lonavlaData,
  lonavala: lonavlaData,
  khopoli: {
    serviceCategory: "Resort-Wedding",
    hook: "Resort-wedding specialists for large-capacity, spectacular events.",
    details: "Khopoli is ideal for large-scale, lavish resort weddings. We specialize in transforming expansive lawns at properties like the Radisson Blu Resort & Spa into breathtaking wedding venues. Its immediate proximity to the Mumbai-Pune Expressway makes it a highly convenient yet secluded destination.",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60322.957242503254!2d73.3082531980004!3d18.825133334237887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8060db93574ed%3A0xc6222b9fdfde7257!2sKhopoli%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000001!5m2!1sen!2sin",
    faqs: [
      { question: "Why choose Khopoli for a destination wedding?", answer: "Khopoli offers large resort properties capable of hosting 500+ guests with massive lawns, perfect for our grand decor and SFX setups." },
      { question: "How far is Khopoli from Mumbai?", answer: "Khopoli is approximately a 1.5 to 2-hour drive from Mumbai, making logistics very simple." },
      { question: "Can you provide heavy sound systems in Khopoli?", answer: "Yes, our in-house JBL VRX line arrays are perfect for large outdoor resort events in Khopoli, ensuring concert-level audio." }
    ]
  },
  karjat: {
    serviceCategory: "Riverside & Farmhouse",
    hook: "Riverside & farmhouse destination wedding experts.",
    details: "For couples looking for an intimate, nature-immersed wedding, Karjat offers stunning riverside venues and expansive farmhouses. We provide specialized mandap setups, intricate floral entry pathways, custom stage fabrication, and professional lighting that beautifully complements Karjat's natural greenery.",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120610.7497120392!2d73.23838276646877!3d18.91618386187841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7fb053d2bb0c3%3A0x8bd50ecf6af0a3d4!2sKarjat%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000002!5m2!1sen!2sin",
    faqs: [
      { question: "Do you provide mandap decorators in Karjat?", answer: "Yes, we handle complete mandap decoration, stage setup, and floral pathways using our in-house inventory." },
      { question: "Are special effects possible at Karjat farmhouse venues?", answer: "Yes, we regularly deploy cold pyros, dry ice, and paper blasts at Karjat venues, adhering to local safety guidelines." },
      { question: "Do you offer full event management in Karjat?", answer: "Yes, from decor and sound to artist booking and guest logistics, we offer full event management." }
    ]
  },
  pune: {
    serviceCategory: "Corporate & City",
    hook: "Corporate event management and premium city weddings.",
    details: "In Pune, we excel at both large-scale corporate offsites and premium city weddings. Whether you are hosting a tech-conference requiring flawless AV and JBL VRX sound, or a lavish wedding at a luxury city hotel, our Pune operations are highly streamlined for professional execution.",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711153123!2d73.7925!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000003!5m2!1sen!2sin",
    faqs: [
      { question: "Do you manage corporate offsites in Pune?", answer: "Yes, while weddings are our primary focus, we have a dedicated vertical for managing corporate events, conferences, and offsites in Pune." },
      { question: "Can you provide anchors and artists for Pune events?", answer: "Absolutely. We manage a roster of professional anchors, live bands, and performers suitable for both weddings and corporate events." },
      { question: "What AV equipment do you provide?", answer: "We deploy industry-standard JBL VRX sound systems, LED walls, and intelligent lighting." }
    ]
  },
  mumbai: {
    serviceCategory: "Premium City",
    hook: "Premium city weddings and easy access for NRI/foreign guests.",
    details: "Mumbai is the gateway for our international and NRI clients. We handle high-end city weddings across Mumbai's 5-star properties. For destination weddings, Mumbai serves as the perfect staging ground where we coordinate airport logistics for foreign guests arriving at BOM, before transferring them to venues in Lonavla or beyond.",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.64332400326!2d72.74109848419612!3d19.082522320491873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000004!5m2!1sen!2sin",
    faqs: [
      { question: "Do you coordinate airport pickups for foreign guests at Mumbai airport?", answer: "Yes, we handle complete hospitality logistics including luxury transfers from Chhatrapati Shivaji Maharaj International Airport (BOM)." },
      { question: "Can you plan a 5-star hotel wedding in Mumbai?", answer: "Yes, we provide full decor, production, and event management for luxury hotel weddings in Mumbai." },
      { question: "Do you travel from Lonavla for Mumbai events?", answer: "Yes, our central Lonavla warehouse is easily accessible to Mumbai, allowing us to deploy our in-house equipment efficiently." }
    ]
  },
  mahabaleshwar: {
    serviceCategory: "Mountain Aesthetic",
    hook: "Mountain and strawberry-valley aesthetic destination weddings.",
    details: "Mahabaleshwar offers a pristine, cool-climate setting perfect for summer and winter destination weddings. Our team designs visual-driven aesthetics that complement the mountain backdrops, utilizing our in-house lighting and decor to highlight the natural beauty of the strawberry valleys.",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30366.140702660166!2d73.6425!3d17.9239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2655313cba1eb%3A0x242d59adcc609592!2sMahabaleshwar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000005!5m2!1sen!2sin",
    faqs: [
      { question: "Is Mahabaleshwar a good destination wedding location?", answer: "Yes, it offers excellent weather year-round and stunning natural backdrops, making it highly photogenic." },
      { question: "Do you handle logistics from Pune/Mumbai to Mahabaleshwar?", answer: "Yes, we manage all guest transportation and logistics up the mountain." },
      { question: "What decor works best in Mahabaleshwar?", answer: "We recommend rustic, floral, and fairy-light intensive decor that blends with the mountain resort aesthetic." }
    ]
  },
  igatpuri: {
    serviceCategory: "Off-beat Luxury",
    hook: "Lakeside, monsoon, and off-beat luxury weddings.",
    details: "Positioned as the 'hidden gem' alternative to Lonavla, Igatpuri provides incredible lakeside and monsoon-soaked vistas with less commercial crowding. We specialize in transforming these off-beat luxury resorts into spectacular wedding venues with zero logistical hiccups.",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30018.577901594955!2d73.535!3d19.696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd9e7b231eb93d%3A0xbccaa70512f461ed!2sIgatpuri%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000006!5m2!1sen!2sin",
    faqs: [
      { question: "Why Igatpuri over Lonavla?", answer: "Igatpuri is perfect for couples wanting a more secluded, less commercialized natural setting, especially during the monsoons." },
      { question: "Can you provide a DJ and SFX in Igatpuri?", answer: "Yes, our full JBL sound setup and SFX team travels directly to your Igatpuri venue." },
      { question: "Are there good luxury resorts in Igatpuri?", answer: "Yes, there are several premium wellness retreats and lakeside resorts perfect for intimate to medium-sized weddings." }
    ]
  },
  udaipur: {
    serviceCategory: "Royal Palace",
    hook: "Royal palace weddings designed for the international elite.",
    details: "For our NRI and foreign clients seeking the ultimate Indian royal experience, Udaipur is the pinnacle. We coordinate grand heritage hotel and lake palace weddings, managing the intricate logistics required for international guests while delivering unparalleled regal opulence and heavy special effects.",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115291.68532454593!2d73.626!3d24.585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56550a14411%3A0xdbd8c28455b868b0!2sUdaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000007!5m2!1sen!2sin",
    faqs: [
      { question: "Do you plan weddings for NRIs in Udaipur?", answer: "Yes, Udaipur is a primary destination for our NRI clients seeking a royal Indian wedding experience." },
      { question: "Can you handle international guest logistics in Udaipur?", answer: "Absolutely. We manage domestic transfers from Delhi/Mumbai, hotel blocking, and local hospitality." },
      { question: "What kind of SFX do you use for royal weddings?", answer: "We frequently deploy safe, low-smoke pyrotechnics, grand fireworks (where permitted), and dramatic lighting to highlight heritage architecture." }
    ]
  },
  jaipur: {
    serviceCategory: "Heritage Fort",
    hook: "Pink City royal wedding production.",
    details: "Jaipur offers majestic forts and sprawling heritage properties. We provide heavy wedding production—including massive floral mandaps, grand entries with professional artists, and spectacular fireworks displays—that match the monumental scale of Pink City weddings.",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.3825624767!2d75.7873!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000008!5m2!1sen!2sin",
    faqs: [
      { question: "Are fireworks allowed at Jaipur palace weddings?", answer: "Regulations vary by specific heritage property, but we navigate these rules and provide compliant, breathtaking pyro and SFX solutions." },
      { question: "Can you arrange traditional Rajasthani entertainment?", answer: "Yes, through our artist management wing, we arrange authentic folk dancers, musicians, and regal processions." },
      { question: "How early should we book a Jaipur wedding?", answer: "Given high international demand, we recommend booking 9 to 12 months in advance." }
    ]
  },
  goa: {
    serviceCategory: "Beach Destination",
    hook: "Beach destination weddings focused on NRIs and foreigners.",
    details: "Goa combines tropical beach vibes with luxury 5-star hospitality. Perfect for NRI couples, we design stunning beachside mandaps, coordinate sunset pheras, and execute high-energy after-parties with premium sound systems and over-water fireworks.",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d492476.3533470295!2d73.743!3d15.299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba106336b741%3A0xeaf887ff62f34092!2sGoa!5e0!3m2!1sen!2sin!4v1700000000009!5m2!1sen!2sin",
    faqs: [
      { question: "Do you plan beach weddings in Goa for foreigners?", answer: "Yes, Goa is highly popular for our international clients looking for a relaxed yet luxurious Indian wedding." },
      { question: "Can you set up a mandap directly on the beach?", answer: "Yes, we specialize in weather-resistant, beautiful beachside decor setups that comply with local coastal regulations." },
      { question: "Do you provide DJs and sound for Goa beach parties?", answer: "Absolutely. Our JBL VRX sound systems ensure your beach and after-parties have incredible, clear audio." }
    ]
  }
};

const validLocations = Object.keys(locationContent);

export function generateStaticParams() {
  return validLocations.map((location) => ({
    location,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ location: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const loc = resolvedParams.location.toLowerCase();
  const data = locationContent[loc];
  
  if (!data) return { title: "Not Found" };
  const locationName = loc.charAt(0).toUpperCase() + loc.slice(1);

  return {
    title: `${data.serviceCategory} Destination Wedding Planners in ${locationName} | Westend Events`,
    description: `Westend Events is your luxury destination wedding planner in ${locationName}. ${data.hook} In-house decor, sound, and SFX.`,
  };
}

export default async function LocationPage({ params }: { params: Promise<{ location: string }> }) {
  const resolvedParams = await params;
  const loc = resolvedParams.location.toLowerCase();
  
  if (!validLocations.includes(loc)) {
    notFound();
  }

  const data = locationContent[loc];
  const locationName = loc.charAt(0).toUpperCase() + loc.slice(1);

  return (
    <>
      <LocalBusinessSchema location={locationName} />
      <FAQSchema faqs={data.faqs} />

      <div className="pt-32 pb-24 bg-[var(--color-brand-ivory)] min-h-screen px-4">
        <div className="container mx-auto">
          
          <SectionHeading 
            title={`${data.serviceCategory} Destination Wedding Planners in ${locationName}`} 
            subtitle={data.hook}
          />
          
          <div className="mt-8 mb-12 max-w-4xl mx-auto text-center font-sans text-gray-700 text-lg border-l-4 border-[var(--color-brand-gold)] pl-6 text-left">
            <p><strong>Direct Answer:</strong> Looking for the best wedding decorators and planners in {locationName}? Westend Events provides complete in-house luxury production, including decor, JBL VRX sound, and special effects for destination weddings in {locationName}.</p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-[var(--color-brand-gold)]/20 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl font-bold text-[var(--color-brand-maroon)] mb-6">
                  Why Choose Westend Events for Your {locationName} Wedding?
                </h2>
                <p className="font-sans text-gray-700 leading-relaxed mb-6">
                  {data.details}
                </p>
                <div className="space-y-3 mt-8 font-sans font-medium">
                  <h4 className="text-[var(--color-brand-purple)] text-lg">Explore Our Services:</h4>
                  <ul className="list-disc pl-5 text-[var(--color-brand-gold)]">
                    <li><Link href="/services/decor" className="hover:text-[var(--color-brand-maroon)] transition-colors">Luxury Wedding Decor in {locationName}</Link></li>
                    <li><Link href="/services/sound-sfx" className="hover:text-[var(--color-brand-maroon)] transition-colors">Sound & Special Effects in {locationName}</Link></li>
                    <li><Link href="/services/anchors-artists" className="hover:text-[var(--color-brand-maroon)] transition-colors">Anchors & Artists Booking</Link></li>
                  </ul>
                </div>
              </div>
              
              <div className="w-full h-80 bg-gray-200 rounded-xl overflow-hidden relative border-4 border-[var(--color-brand-gold)]/20 shadow-inner">
                 <iframe 
                   src={data.mapSrc} 
                   width="100%" 
                   height="100%" 
                   style={{ border: 0 }} 
                   allowFullScreen={false} 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                   className="absolute inset-0"
                 ></iframe>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="primary" size="lg">Plan Your {locationName} Wedding</Button>
            </div>
          </div>

          <div className="mt-20 max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-center text-[var(--color-brand-charcoal)] mb-10">
              Frequently Asked Questions about {locationName}
            </h2>
            <div className="space-y-6">
              {data.faqs.map((faq: any, index: number) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="font-serif text-xl font-bold text-[var(--color-brand-maroon)] mb-3">{faq.question}</h3>
                  <p className="font-sans text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
