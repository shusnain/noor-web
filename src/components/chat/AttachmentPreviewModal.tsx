"use client";

import { X, FileText } from "lucide-react";
import type { Attachment } from "@/lib/types/chat";

interface AttachmentPreviewModalProps {
  attachment: Attachment;
  onClose: () => void;
}

export function AttachmentPreviewModal({
  attachment,
  onClose,
}: AttachmentPreviewModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <X className="h-6 w-6" />
      </button>
      <div
        className="max-h-[90vh] max-w-[90vw] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {attachment.type === "image" ? (
          <img
            src={attachment.data}
            alt={attachment.name}
            className="max-h-[85vh] rounded-lg object-contain"
          />
        ) : attachment.preview ? (
          <img
            src={attachment.preview}
            alt={attachment.name}
            className="max-h-[85vh] rounded-lg object-contain"
          />
        ) : (
          <div className="flex flex-col items-center justify-center rounded-lg bg-white p-12">
            <FileText className="h-16 w-16 text-stone-400" />
            <p className="mt-4 text-lg font-medium text-stone-700">
              {attachment.name}
            </p>
            <p className="mt-1 text-sm text-stone-500">PDF document</p>
          </div>
        )}
        <p className="mt-2 text-center text-sm text-white/70">
          {attachment.name}
        </p>
      </div>
    </div>
  );
}
