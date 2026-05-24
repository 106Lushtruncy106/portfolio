import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const getProjectId = () =>
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder";
const getDataset = () =>
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

function createSanityClient() {
  return createClient({
    projectId: getProjectId(),
    dataset: getDataset(),
    apiVersion: "2024-01-01",
    useCdn: true,
    perspective: "published",
  });
}

export function getClient() {
  return createSanityClient();
}

export function urlFor(source: any) {
  return imageUrlBuilder(createSanityClient()).image(source);
}
