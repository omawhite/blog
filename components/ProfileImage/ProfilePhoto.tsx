import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

export interface ProfilePhotoProps {
  /**
   * The URL of the profile image to display
   */
  src?: string;
  /**
   * Alt text for the image
   */
  alt?: string;
  /**
   * Size of the profile photo
   */
  size?: "sm" | "md" | "lg" | "xl";
  /**
   * Additional CSS classes
   */
  className?: string;
}

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-16 w-16",
  xl: "h-24 w-24",
};

export function ProfilePhoto({
  src,
  alt = "Profile photo",
  size = "md",
  className,
}: ProfilePhotoProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Use fallback image if no src provided or if image failed to load
  const imageSrc = !src || imageError ? "/images/profile-fallback.jpg" : src;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-full bg-muted",
        sizeClasses[size],
        className,
      )}
    >
      <Image
        src={imageSrc}
        alt={alt}
        fill
        className={cn(
          "object-cover transition-opacity duration-200",
          imageLoaded ? "opacity-100" : "opacity-0",
        )}
        onLoad={() => setImageLoaded(true)}
        onError={() => {
          setImageError(true);
          setImageLoaded(true);
        }}
        sizes={`${size === "sm" ? "32" : size === "md" ? "48" : size === "lg" ? "64" : "96"}px`}
      />
    </div>
  );
}
