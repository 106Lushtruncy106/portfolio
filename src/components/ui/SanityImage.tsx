import Image from "next/image";
import { urlFor } from "@/lib/sanity";

interface SanityImageProps {
  image: any;
  alt: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
}

export default function SanityImage({
  image,
  alt,
  className = "",
  priority = false,
  fill = false,
}: SanityImageProps) {
  if (!image) return null;

  const imageUrl = urlFor(image).url();

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
      width={800}
      height={600}
      className={className}
      priority={priority}
    />
  );
}
