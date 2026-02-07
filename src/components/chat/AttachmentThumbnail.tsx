"use client";

import { FileText } from "lucide-react";
import type { Attachment } from "@/lib/types/chat";

interface AttachmentThumbnailProps {
  attachment: Attachment;
  size?: "sm" | "md";
  className?: string;
}

export function AttachmentThumbnail({
  attachment,
  size = "md",
  className = "",
}: AttachmentThumbnailProps) {
  const sizeClasses = size === "sm" ? "h-16 w-16" : "h-20 w-20";
  const iconSize = size === "sm" ? "h-6 w-6" : "h-8 w-8";

  if (attachment.type === "image") {
    return (
      <img
        src={attachment.preview || attachment.data}
        alt={attachment.name}
        className={`${sizeClasses} object-cover ${className}`}
      />
    );
  }

  // PDF with preview image
  if (attachment.preview) {
    return (
      <img
        src={attachment.preview}
        alt={attachment.name}
        className={`${sizeClasses} object-cover ${className}`}
      />
    );
  }

  // PDF without preview (fallback)
  return (
    <div
      className={`flex ${sizeClasses} flex-col items-center justify-center ${className}`}
    >
      <FileText className={`${iconSize} text-stone-500`} />
      <span className="mt-0.5 max-w-full truncate text-[10px] text-stone-500">
        PDF
      </span>
    </div>
  );
}
