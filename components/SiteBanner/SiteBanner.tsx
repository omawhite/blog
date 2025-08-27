"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

const siteBannerVariants = cva(
  "relative w-full px-4 py-3 text-sm font-medium text-center border-b",
  {
    variants: {
      variant: {
        info: "bg-blue-50 text-blue-900 border-blue-200",
        warning: "bg-yellow-50 text-yellow-900 border-yellow-200",
        success: "bg-green-50 text-green-900 border-green-200",
        error: "bg-red-50 text-red-900 border-red-200",
        neutral: "bg-gray-50 text-gray-900 border-gray-200",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  },
);

export interface SiteBannerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof siteBannerVariants> {
  message: string;
  dismissible?: boolean;
  onDismiss?: () => void;
}

export function SiteBanner({
  message,
  variant,
  dismissible = false,
  onDismiss,
  className,
  ...props
}: SiteBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  return (
    <div className={cn(siteBannerVariants({ variant }), className)} {...props}>
      <div className="flex items-center justify-center">
        <span className="flex-1">{message}</span>
        {dismissible && (
          <button
            type="button"
            onClick={handleDismiss}
            className="ml-4 p-1 rounded-full hover:bg-black/10 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current"
            aria-label="Dismiss banner"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
