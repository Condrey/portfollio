import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn, myName } from "@/lib/utils";
import { Message, useChat } from "ai/react";
import { Bot, SendHorizontal, Trash, User, XIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { Button } from "./ui/button";
import { H2 } from "./ui/heading";
import { Input } from "./ui/input";
import { Badge, badgeVariants } from "./ui/badge";
interface props {
  open: boolean;
  onClose: () => void;
}

export default function AIChatBox({ open, onClose }: props) {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setMessages,
    isLoading,
    error,
  } = useChat();

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  const lastMessageIsByUser = messages[messages.length - 1]?.role === "user";
  const isThinking = lastMessageIsByUser && isLoading;
  return (
    <div
      className={cn(
        "bottom-0 right-0 z-50 w-full max-w-[500px] p-4 xl:right-36",
        open ? "fixed" : "hidden",
      )}
    >
      <div className="flex items-center justify-between gap-2 rounded border bg-background p-2">
        <H2>Personal AI</H2>
        <Button
          className="mb-1 ms-auto rounded-full"
          variant={"secondary"}
          size={"icon"}
          onClick={onClose}
        >
          <XIcon size={30} className="transition-all hover:rotate-90" />
        </Button>
      </div>
      <div className="flex h-[600px] flex-col rounded border bg-background">
        <div className="mt-4 h-full overflow-y-auto px-4" ref={scrollRef}>
          {!error &&
            messages.map((message) => {
              return <ChatMessage message={message} key={message.id} />;
            })}
          {isThinking && (
            <ChatMessage
              message={{
                id: "isThinking",
                role: "assistant",
                content: "Thinking...",
              }}
            />
          )}
          {error && (
            <ChatMessage
              message={{
                id: "isError",
                role: "assistant",
                content: "I am down, try again!",
              }}
            />
          )}
          <div
            className={cn(
              !error || messages.length === 0
                ? "mx-auto flex h-full w-full max-w-[300px] flex-col items-center justify-center gap-4 text-center"
                : "hidden",
            )}
          >
            <Bot size={50} className="text-primary" />
            <p>{`Hi there! ask me anything about ${myName}`}</p>
            <p className="text-xs text-foreground/50">
              I will give you all the answers basing on this website.
            </p>

            <div className="flex w-full flex-wrap gap-2 *:p-2">
              <Badge variant={"secondary"}>📸 Do you have any hobbies?</Badge>
              <Badge variant={"secondary"}>🏃🏻‍♂️ ⚽ List your skills?</Badge>
              <Badge variant={"secondary"}>
                📚 What is Your Educational Background?
              </Badge>
              <Badge variant={"secondary"}>
                🔥 What projects are you currently working on?
              </Badge>
            </div>
          </div>
        </div>
        <form action="" onSubmit={handleSubmit} className="m-4 flex gap-1">
          <Button
            size={"icon"}
            variant={"ghost"}
            className="flex-none rounded-full"
            title="Clear chat"
            type="reset"
          >
            <Trash size={25} className="transition-all" />
          </Button>
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Say something..."
            ref={inputRef}
          />
          <Button
            size={"icon"}
            className="flex-none rounded-full"
            disabled={input.length === 0}
            title="Submit message"
            type="submit"
          >
            <SendHorizontal size={25} className="transition-all" />
          </Button>
        </form>
      </div>
    </div>
  );
}

interface Props2 {
  message: Message;
}

function ChatMessage({ message: { role, content } }: Props2) {
  const isAiMessage = role === "assistant";
  return (
    <div
      className={cn(
        "mb-4 flex items-center rounded p-4",
        isAiMessage
          ? "me-5 justify-start bg-secondary text-secondary-foreground"
          : "ms-5 justify-end bg-primary text-primary-foreground",
      )}
    >
      <div className="w-full *:mx-2">
        <Bot
          size={35}
          className={cn(!isAiMessage ? "hidden" : "float-left text-primary")}
        />

        <Avatar className={cn(isAiMessage ? "hidden" : "float-right")}>
          <AvatarFallback>
            <User />
          </AvatarFallback>
        </Avatar>

        <ReactMarkdown
          components={{
            a: ({ node, ref, ...props }) => (
              <Link
                {...props}
                href={props.href ?? ""}
                className={cn(
                  badgeVariants({ variant: "outline" }),
                  "text-blue-800",
                )}
              />
            ),
            p: ({ node, ...props }) => (
              <p {...props} className="mt-3 first:mt-0" />
            ),
            ul: ({ node, ...props }) => (
              <ul
                {...props}
                className="mt-3 list-inside list-disc first:mt-0"
              />
            ),
            li: ({ node, ...props }) => <li {...props} className="mt-1" />,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
