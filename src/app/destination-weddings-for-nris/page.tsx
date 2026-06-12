import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQSchema, BreadcrumbListSchema } from "@/components/seo/SchemaMarkup";
import { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Destination Wedding Planner in India for NRIs | Westend Events",
  description: "Lonavla-based luxury Indian wedding production company for international clients. We handle end-to-end planning, airport logistics, hotels, and decor for NRIs.",
  keywords: "destination wedding planner India for foreigners, NRI wedding planner Maharashtra, Indian wedding planner for foreigners Lonavla, best wedding planners in India for NRIs near Pune, luxury Indian wedding production company for international clients",
};

export default function NRIWeddingsPage() {
  const faqs = [
    {
      question: "Can foreigners get married in India easily?",
      answer: "Yes, foreigners can get married in India. While there are specific legal registrations under the Special Marriage Act requiring a 30-day notice period if marrying legally in India, many couples choose to do the legal paperwork in their home country and host the lavish traditional or white wedding ceremony in India."
    },
    {
      question: "How far in advance should NRIs plan an Indian destination wedding?",
      answer: "We recommend starting the planning process 9 to 12 months in advance. This allows ample time for your international guests to arrange visas, book flights, and for us to secure premium heritage or hill-station venues."
    },
    {
      question: "Do you coordinate hotels and airport transfers for international guests?",
      answer: "Absolutely. We manage complete hospitality logistics, including luxury bus or private car transfers from Chhatrapati Shivaji Maharaj International Airport (BOM) in Mumbai or Pune Airport, straight to your destination venue in Lonavla, Udaipur, or Goa."
    }
  ];

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "NRI & Foreigner Destination Weddings", item: "/destination-weddings-for-nris" }
  ];

  return (
    <>
      <BreadcrumbListSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} />
      
      <div className="pt-32 pb-24 bg-[var(--color-brand-ivory)] min-h-screen px-4">
        <div className="container mx-auto max-w-5xl">
          
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-brand-maroon)] font-bold mb-6">
              Destination Wedding Planning in India for NRIs & Foreign Couples
            </h1>
            <p className="font-sans text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto border-l-4 border-[var(--color-brand-gold)] pl-6 text-left">
              Westend Events is a premium Indian wedding production company specializing in seamless destination weddings for Non-Resident Indians (NRIs) and international couples. Based in Lonavla (near Mumbai), we execute flawless luxury events pan-India.
            </p>
          </div>

          {/* Logistics Section */}
          <div className="bg-white p-10 rounded-3xl shadow-md border border-[var(--color-brand-gold)]/20 mb-16">
            <SectionHeading title="Why Plan Your Indian Wedding Near Mumbai or Pune?" />
            <div className="mt-8 font-sans text-gray-700 text-lg space-y-4">
              <p>
                When hosting international guests, logistics are everything. Destinations like Lonavla, Karjat, and Khopoli offer the perfect blend of exotic Indian hill-station beauty and practical accessibility.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-800 font-medium">
                <li><strong>International Airport Access:</strong> Just 90-120 minutes via expressway from Mumbai (BOM) International Airport.</li>
                <li><strong>No Domestic Connections Needed:</strong> Unlike Udaipur or Goa which often require a connecting domestic flight from major hubs, your guests can drive straight from the international terminal to the venue.</li>
                <li><strong>Weather & Scenery:</strong> Incredible monsoon aesthetics and pleasant winter climates ideal for outdoor pheras or white wedding ceremonies.</li>
              </ul>
            </div>
          </div>

          {/* Services Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[var(--color-brand-gold)]/10">
              <h3 className="font-serif text-2xl text-[var(--color-brand-purple)] font-bold mb-4">What We Handle End-to-End</h3>
              <ul className="space-y-3 font-sans text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-brand-gold)]">✓</span>
                  Time-zone friendly communication via WhatsApp & Zoom
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-brand-gold)]">✓</span>
                  Complete hospitality desk & hotel block booking
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-brand-gold)]">✓</span>
                  Airport transfers and guest logistics
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-brand-gold)]">✓</span>
                  In-house luxury decor & JBL VRX Sound production
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-brand-gold)]">✓</span>
                  Vendor coordination (Mehendi, Makeup, Catering)
                </li>
              </ul>
            </div>
            <div className="bg-[var(--color-brand-maroon)] text-white p-8 rounded-2xl shadow-sm flex flex-col justify-center text-center">
              <h3 className="font-serif text-2xl font-bold mb-4">Start Planning From Abroad</h3>
              <p className="font-sans mb-6">Our team is available across time zones to make your dream Indian wedding a reality.</p>
              <Button variant="primary" className="mx-auto w-full max-w-xs bg-[var(--color-brand-gold)] hover:bg-white hover:text-[var(--color-brand-maroon)]">
                WhatsApp Us Now
              </Button>
            </div>
          </div>

          {/* Circuit Comparison */}
          <div className="mb-16">
            <SectionHeading title="Choosing Your Indian Wedding Destination" subtitle="Hill Station vs. Royal Heritage vs. Beach" />
            <div className="mt-10 overflow-x-auto">
              <table className="w-full text-left border-collapse bg-white rounded-xl shadow-sm overflow-hidden">
                <thead>
                  <tr className="bg-[var(--color-brand-charcoal)] text-white font-sans">
                    <th className="p-4 border-b border-gray-700">Feature</th>
                    <th className="p-4 border-b border-gray-700">Hill Stations (Lonavla/Mahabaleshwar)</th>
                    <th className="p-4 border-b border-gray-700">Royal Heritage (Udaipur/Jaipur)</th>
                    <th className="p-4 border-b border-gray-700">Beach (Goa)</th>
                  </tr>
                </thead>
                <tbody className="font-sans text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-bold">Vibe</td>
                    <td className="p-4">Nature, Valleys, Monsoons, Exclusive Resorts</td>
                    <td className="p-4">Palaces, Forts, Traditional Regal Opulence</td>
                    <td className="p-4">Relaxed, Tropical, Sunsets, Party Atmosphere</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-bold">Logistics for NRIs</td>
                    <td className="p-4">Easiest (Direct drive from Mumbai BOM)</td>
                    <td className="p-4">Moderate (Requires domestic flight to DEL/BOM then UDR/JAI)</td>
                    <td className="p-4">Moderate (Domestic flight to GOI/GOX)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold">Westend Events Capability</td>
                    <td className="p-4">Our Home Turf - In-house inventory</td>
                    <td className="p-4">Full pan-India execution team available</td>
                    <td className="p-4">Full pan-India execution team available</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQs */}
          <div>
            <SectionHeading title="Frequently Asked Questions by NRIs" />
            <div className="mt-10 space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-serif text-xl text-[var(--color-brand-maroon)] font-bold mb-3">{faq.question}</h4>
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
