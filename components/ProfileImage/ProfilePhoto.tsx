"use client";

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
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
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
  "2xl": "h-32 w-32",
  "3xl": "h-40 w-40",
  "4xl": "h-48 w-48",
};

const sizePixels = {
  sm: "32",
  md: "48",
  lg: "64",
  xl: "96",
  "2xl": "128",
  "3xl": "160",
  "4xl": "192",
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
        sizes={`${sizePixels[size]}px`}
      />
    </div>
  );
}
