"use client";

import AIChatBox from "@/components/ai-chat-box";
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";
import { useState } from "react";

export default function AIChatBoxButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2"
      >
        <Bot size={24} /> <span>AI Chat</span>
      </Button>
      <AIChatBox open={open} onClose={() => setOpen(!open)} />
    </>
  );
}
