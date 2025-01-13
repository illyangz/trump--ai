"use client";

import { useRef, useState, useEffect } from "react";
import { useChat } from "ai/react";
import clsx from "clsx";
import { LoadingCircle, UserIcon } from "./icons";
import Textarea from "react-textarea-autosize";
import Image from "next/image";

const examples = [
  "What do you think about immigration?",
  "What do you think about climate change?",
  "What is your relationship with Russia?",
  "How do you define your presidency?",
];

export default function Chat() {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const { messages, input, setInput, handleSubmit, isLoading } = useChat({
    onResponse: (response) => {
      if (response.status === 429) {
        window.alert("You have reached your request limit for the day.");
        return;
      }
    },
  });

  useEffect(() => {
    setIsVisible(true);
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const disabled = isLoading || input.length === 0;

  return (
    <main className="relative flex flex-col items-center justify-between min-h-screen bg-[#9e111145]  text-[red] ">
      {/* Static Patriotic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,0,0,0.1)_25%,transparent_25%,transparent_75%,rgba(255,0,0,0.1)_75%,rgba(255,0,0,0.1)),linear-gradient(45deg,rgba(0,0,255,0.1)_25%,transparent_25%,transparent_75%,rgba(0,0,255,0.1)_75%,rgba(0,0,255,0.1))] bg-[length:50px_50px] opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-black to-black"></div>
      </div>

      {/* Header */}
      <div className="fixed top-0 z-50 w-full backdrop-blur-sm">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-3">
          <a
            className="px-4 py-2 bg-red-600/10 rounded-lg hover:text-red-500 hover:bg-red-600/20 transition-all duration-200"
          >
            <strong>Buy $TAI</strong>
          </a>
          <a
            href="https://x.com/TrumpAIonSolana"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-red-600/10 rounded-lg hover:text-red-500 hover:bg-red-600/20 transition-all duration-200"
          >
            <strong>X</strong>
          </a>
        </div>
      </div>

      {/* Messages Container */}
      <div className="relative z-10 w-full flex-grow overflow-y-auto mt-16 pb-24">
        {messages.length > 0 ? (
          <div className="max-w-screen-lg mx-auto">
            {messages.map((message, i) => (
              <div
                key={i}
                className={clsx(
                  "animate-fadeIn transition-all duration-30 py-6 pl-1",
                  message.role === "user"
                )}
              >
                <div className="max-w-3xl mx-auto flex items-start space-x-4 px-4">
                  <div
                    className={clsx(
                      "flex-shrink-0 rounded-lg p-1",
                      message.role === "assistant"
                    )}
                  >
                    {message.role === "user" ? (
                      <UserIcon />
                    ) : (
                      <Image
                        src="/trump-ai.png"
                        alt="Trump AI"
                        width={32}
                        height={32}
                        className="rounded-full ring-2 ring-red-500/50"
                      />
                    )}
                  </div>
                  <div className="prose prose-invert prose-red flex-grow">
                    <p className="text-[red] leading-relaxed">{message.content}</p>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        ) : (
          <div
  className={clsx(
    "flex flex-col items-center justify-center mt-20 space-y-6 px-4",
    "transition-all duration-700 transform",
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  )}
>
  <Image
    src="/trump-ai.png"
    alt="Trump AI"
    width={96}
    height={96}
    className="rounded-full ring-4 ring-red-500/50 shadow-lg shadow-red-500/20"
  />
  <h1 className="text-3xl font-bold text-center text-[red]">
    Trump's Artificial Intelligence
  </h1>
  <p className="text-[red] text-center max-w-md text-lg">
    Those who dare to dream, dare to win. What are you waiting for?
    Buy $TAI & Let's Make America Great Again!
  </p>
  <div
    className={clsx(
      "flex flex-wrap justify-center gap-3 max-w-2xl",
      "backdrop-blur-sm rounded-lg p-4" // Add these styles for the blurry, semi-transparent background
    )}
  >
    {examples.map((example, i) => (
      <button
        key={i}
        className={clsx(
          "px-4 py-2",
          "text-[red] hover:bg-red-900/30 transition-all duration-200"
        )}
        onClick={() => {
          setInput(example);
          inputRef.current?.focus();
        }}
      >
        {example}
      </button>
    ))}
  </div>
</div>

        )}
      </div>

      {/* Input Form */}
      <div className="fixed bottom-0 left-0 right-0 z-20 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto p-4">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="relative flex items-center"
          >
            <Textarea
              ref={inputRef}
              placeholder="Send a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              spellCheck={false}
              className={clsx(
                "w-full bg-black text-[red] px-4 py-3",
                "border border-red-500/50 focus:border-red-500",
                "focus:ring-2 focus:ring-red-500/20 focus:outline-none",
                "placeholder:text-[red] resize-none"
              )}
              rows={1}
              required
            />
            <button
              className={clsx(
                "ml-5 px-10 py-3",
                " bg-black text-[red] border border-red-500/50 hover:border-red-500",
                "hover:ring-2 hover:ring-red-500/20 focus:outline-none ",
                
              )}
            >
             SEND
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
