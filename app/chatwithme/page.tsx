"use client";

import { useRef, useState, useEffect } from "react";
import { useChat } from "ai/react";
import clsx from "clsx";
import { LoadingCircle, UserIcon } from "../icons";
import Textarea from "react-textarea-autosize";
import Image from "next/image";
import Link from "next/link";

const examples = [
 ""
];

export default function Chat() {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const contractAddress = "89787978979878968";

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

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const disabled = isLoading || input.length === 0;

  return (
    <main className="relative flex flex-col items-center justify-between min-h-screen text-[white] bg-black">

      {/* Header */}
       <div className="fixed top-0 z-50 w-full">
              <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-3">
                <button
                  onClick={copyToClipboard}
                  className={clsx(
                    "px-4 py-2 rounded-lg transition-all duration-200",
                    "hover:text-white hover:bg-slate-500/20",
                    copied && "bg-slate-500/20"
                  )}
                >
                  <strong>
                    {copied ? "COPIED!" : `CA: ${contractAddress}`}
                  </strong>
                </button>
                <a
                  href="https://x.com/TRUMPGPTDOTMEME"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg hover:text-white hover:bg-slate-500/20 transition-all duration-200"
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
  src="/bgDONALD.gif"
  alt="Trump AI"
  width={96}
  height={96}
  className="rounded-full ring-4 ring-gray-500/50 shadow-lg shadow-red-500/20"
  unoptimized
/>
                    )}
                  </div>
                  <div className="prose prose-invert prose-red flex-grow">
                    <p className="text-[white] leading-relaxed">{message.content}</p>
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
  src="/bgDONALD.gif"
  alt="Trump AI"
  width={96}
  height={96}
  className="rounded-full ring-4 ring-gray-500/50 shadow-lg shadow-red-500/20"
  unoptimized
/>
  <h1 className="text-3xl font-bold text-center text-[white]">
    $TRUMPGPT 
  </h1>
  <p className="text-[white] text-center max-w-md text-lg">
TRUMPGPT IS A GPT MODEL TRAINED ON TRUMP'S MEDIA TRANSCRIPTS. CHAT WITH THE PRESIDENT OF THE UNITED STATES OF AMERICA!  </p>
  <div
    className={clsx(
      "flex flex-wrap justify-center gap-3 max-w-2xl",
      "backdrop-blur-sm p-4" // Add these styles for the blurry, semi-transparent background
    )}
  >
    {examples.map((example, i) => (
      <button
        key={i}
        className={clsx(
          "px-4 py-2",
          "text-[white] transition-all duration-200"
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
  placeholder="SEND A MESSAGE..."
  value={input}
  onChange={(e) => setInput(e.target.value)}
  spellCheck={false}
  className={clsx(
    "w-full px-4 py-3",
    "text-md font-medium text-white border-2 border-white hover:bg-white hover:bg-opacity-25 hover:border-gray-300 transition-all duration-200 hover:ring-2 hover:ring-red-500/20",
    "bg-transparent outline-none resize-none"  // Added these to remove scrollbar and match button
  )}
  rows={1}
  required
/>
            <button
              className={clsx(
                "ml-5 px-10 py-3",
                "text-md font-medium text-white border-2 border-white hover:bg-white hover:bg-opacity-25  hover:border-gray-300 transition-all duration-200 hover:ring-2 hover:ring-red-500/20"

                
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
