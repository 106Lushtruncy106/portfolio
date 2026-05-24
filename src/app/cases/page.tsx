import type { Metadata } from "next";
import { getClient } from "@/lib/sanity";
import { caseStudiesQuery } from "@/lib/queries";
import CasesClient from "./CasesClient";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Explore my portfolio of custom-built websites and web applications.",
};

async function getCases() {
  try {
    const client = getClient();
    return await client.fetch(caseStudiesQuery);
  } catch {
    return [];
  }
}

export default async function CasesPage() {
  const cases = await getCases();

  return <CasesClient cases={cases} />;
}
