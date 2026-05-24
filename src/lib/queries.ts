export const profileQuery = `*[_type == "profile"][0]`;

export const caseStudiesQuery = `*[_type == "caseStudy"] | order(featured desc, _createdAt desc){
  _id,
  title,
  slug,
  coverImage,
  client,
  industry,
  services,
  techStack,
  duration,
  overview,
  featured
}`;

export const caseStudyBySlugQuery = `*[_type == "caseStudy" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  coverImage,
  client,
  industry,
  services,
  techStack,
  duration,
  overview,
  challenge,
  solution,
  results,
  "images": images[],
  testimonial,
  liveUrl,
  featured
}`;

export const postsQuery = `*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  slug,
  coverImage,
  publishedAt,
  excerpt,
  tags,
  readingTime
}`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  coverImage,
  publishedAt,
  excerpt,
  body,
  tags,
  readingTime
}`;

export const featuredCasesQuery = `*[_type == "caseStudy" && featured == true] | order(_createdAt desc){
  _id,
  title,
  slug,
  coverImage,
  client,
  industry,
  overview,
  featured
}`;
