import type { Metadata } from "next";
import { getClient } from "@/lib/sanity";
import { caseStudiesQuery } from "@/lib/queries";
import CasesClient from "./CasesClient";

export const metadata: Metadata = {
  title: "案例",
  description: "看看我做过的一些独立站项目，每个都是定制开发。",
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
