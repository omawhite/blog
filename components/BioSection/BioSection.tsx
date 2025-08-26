import type { DefaultTypedEditorState } from "@payloadcms/richtext-lexical";
import { RichText } from "@payloadcms/richtext-lexical/react";

import { cn } from "@/lib/utils";

export interface BioSectionProps {
  bioData: DefaultTypedEditorState | null | undefined;
  className?: string;
}

export function BioSection({ bioData, className }: BioSectionProps) {
  if (!bioData) return null;

  return (
    <div className={cn("bio", className)}>
      <RichText data={bioData} />
    </div>
  );
}
