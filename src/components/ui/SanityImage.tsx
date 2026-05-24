"use client";

import Image from "next/image";
import { urlFor } from "@/lib/sanity";

interface SanityImageProps {
  image: any;
  alt: string;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  fill?: boolean;
}

export default function SanityImage({
  image,
  alt,
  className = "",
  priority = false,
  width,
  height,
  fill = false,
}: SanityImageProps) {
  if (!image) return null;

  const builder = urlFor(image);
  const imageUrl = fill ? builder.url() : builder.width(width || 800).url();

  if (fill) {
    return (
      <Image
        src={imageUrl}
        alt={alt}
        fill
        className={`object-cover ${className}`}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={width || 800}
      height={height || 600}
      className={className}
      priority={priority}
    />
  );
}
