"use client";

import { Streamdown } from "streamdown";
import { code } from "@streamdown/code";
import type { Attachment } from "@/lib/types/chat";
import { AttachmentThumbnail } from "./AttachmentThumbnail";

interface ChatMessageProps {
  id: string;
  role: "user" | "assistant";
  content: string;
  attachments?: Attachment[];
  isStreaming?: boolean;
  onAttachmentClick?: (attachment: Attachment) => void;
}

export function ChatMessage({
  role,
  content,
  attachments,
  isStreaming = false,
  onAttachmentClick,
}: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 ${
          isUser ? "bg-heading text-white" : "bg-white text-text shadow-sm"
        }`}
      >
        {/* Attachment display for user messages */}
        {isUser && attachments && attachments.length > 0 && (
          <div className="mb-2 flex flex-wrap gap-2">
            {attachments.map((attachment) => (
              <button
                key={attachment.id}
                onClick={() => onAttachmentClick?.(attachment)}
                className="h-20 w-20 overflow-hidden rounded-lg transition-opacity hover:opacity-80"
              >
                <AttachmentThumbnail
                  attachment={attachment}
                  size="md"
                  className={isUser ? "" : "bg-white/10"}
                />
              </button>
            ))}
          </div>
        )}

        {role === "assistant" ? (
          <Streamdown plugins={{ code }} isAnimating={isStreaming}>
            {content || " "}
          </Streamdown>
        ) : (
          <p className="whitespace-pre-wrap">{content}</p>
        )}
      </div>
    </div>
  );
}
