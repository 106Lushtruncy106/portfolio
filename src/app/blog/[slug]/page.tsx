import type { Metadata } from "next";
import { getClient } from "@/lib/sanity";
import { postBySlugQuery } from "@/lib/queries";
import PostDetailClient from "./PostDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

const sanityClient = getClient();

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const data = await sanityClient.fetch(postBySlugQuery, { slug });
    if (!data) return { title: "Post Not Found" };
    return {
      title: data.title,
      description: data.excerpt,
    };
  } catch {
    return { title: "Blog Post" };
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  let post = null;
  try {
    post = await sanityClient.fetch(postBySlugQuery, { slug });
  } catch {
    post = null;
  }

  return <PostDetailClient post={post} />;
}
