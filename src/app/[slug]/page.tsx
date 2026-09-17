import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSEOSlugs, getSEOPageBySlug } from "@/data/seo-pages";
import { LandingPageLayout } from "@/components/seo/LandingPageLayout";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSEOSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSEOPageBySlug(slug);

  if (!page) {
    return {
      title: "Page Not Found | Westend Events",
      description: "The requested event page could not be found."
    };
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: page.canonicalUrl
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: page.canonicalUrl,
      siteName: "Westend Events",
      images: [
        {
          url: page.galleryImages?.[0]?.url || page.gallery?.[0]?.src || "/205A4188.jpg",
          width: 1200,
          height: 630,
          alt: page.targetKeyword
        }
      ],
      locale: "en_IN",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: [page.galleryImages?.[0]?.url || page.gallery?.[0]?.src || "/205A4188.jpg"]
    }
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const page = getSEOPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return <LandingPageLayout data={page} />;
}
