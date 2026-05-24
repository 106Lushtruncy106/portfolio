import type { Metadata } from "next";
import { getClient } from "@/lib/sanity";
import { postsQuery } from "@/lib/queries";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on web development, design, and technology.",
};

async function getPosts() {
  try {
    const client = getClient();
    return await client.fetch(postsQuery);
  } catch {
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();
  return <BlogClient posts={posts} />;
}
