import type { Metadata } from "next";
import { getClient } from "@/lib/sanity";
import { caseStudyBySlugQuery } from "@/lib/queries";
import CaseDetailClient from "./CaseDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

const sanityClient = getClient();

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const data = await sanityClient.fetch(caseStudyBySlugQuery, { slug });
    if (!data) return { title: "Case Study Not Found" };
    return {
      title: data.title,
      description: data.overview,
    };
  } catch {
    return { title: "Case Study" };
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  let caseStudy = null;
  try {
    caseStudy = await sanityClient.fetch(caseStudyBySlugQuery, { slug });
  } catch {
    caseStudy = null;
  }

  return <CaseDetailClient caseStudy={caseStudy} />;
}
