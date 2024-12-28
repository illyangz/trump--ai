"use client";

import { useRef, useState } from "react";
import { useChat } from "ai/react";
import clsx from "clsx";
import {
  LoadingCircle,
  SendIcon,
  UserIcon,
} from "./icons";
import Textarea from "react-textarea-autosize";
import Image from "next/image";

const examples = [
  "What do you think about immigration?","What do you think about climate change?","What is your relationship with Russia?","How do you define your presidency?",

];

export default function Chat() {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const [copyStatus, setCopyStatus] = useState("Buy $DTT");

  const { messages, input, setInput, handleSubmit, isLoading } = useChat({
    onResponse: (response) => {
      if (response.status === 429) {
        window.alert("You have reached your request limit for the day.");
        return;
      }
    },
  });

 const handleCopy = () => {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    // Use modern Clipboard API
    navigator.clipboard.writeText("your-memecoin-address-here")
      .then(() => {
        setCopyStatus("Copied!");
        setTimeout(() => setCopyStatus("Let's Make America Great Again"), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy address:", err);
      });
  } else {
    // Fallback for older browsers
    const textarea = document.createElement("textarea");
    textarea.value = "your-memecoin-address-here";
    textarea.style.position = "fixed"; // Prevent scrolling to the bottom
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      const successful = document.execCommand("copy");
      if (successful) {
        setCopyStatus("Copied!");
        setTimeout(() => setCopyStatus("Let's Make America Great Again"), 2000);
      } else {
        console.error("Fallback copy failed.");
      }
    } catch (err) {
      console.error("Fallback copy error:", err);
    }
    document.body.removeChild(textarea);
  }
};


  const disabled = isLoading || input.length === 0;

  return (
    <main className="flex flex-col items-center justify-between pb-40">
      <div
        className={clsx(
          "fixed top-0 z-50 flex w-full justify-between bg-white px-5 py-2 shadow-md sm:relative sm:bg-transparent sm:shadow-none"
        )}
      >
        <a
          href="/"
          target="_blank"
          className="rounded-lg p-2 transition-colors duration-200 hover:bg-stone-100 sm:bottom-auto"
        >
         
        </a>
        <a
          onClick={handleCopy}
          className="cursor-pointer rounded-lg p-2 transition-colors duration-200 hover:bg-stone-100 sm:bottom-auto"
        >
          <strong>{copyStatus}</strong>
        </a> 
        <a href="/"><Image 
            src="/trumpy.png"
            alt="trump"
            width={56}
            height={56}
          /></a>
      </div>
      {messages.length > 0 ? (
        messages.map((message, i) => (
          <div
            key={i}
            className={clsx(
              "flex w-full items-center justify-center border-b border-gray-200 py-8",
              message.role === "user" ? "bg-white" : "bg-gray-100",
            )}
          >
            <div className="flex w-full max-w-screen-md items-start space-x-4 px-5 sm:px-0">
              <div
                className={clsx(
                  message.role === "assistant"
                    ? "bg-white"
                    : "bg-black p-1.5 text-white",
                )}
              >
                {message.role === "user" ? (
                  <UserIcon />
                ) : (
                  <Image
                     src="/trumpy.png"
                     alt="trump"
                     width={36}
                     height={36}
                  />
                )}
              </div>
              <div className="prose prose-p:leading-relaxed mt-1 w-full break-words">
                {message.content}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="border-gray-200sm:mx-0 mx-5 mt-20 max-w-screen-md rounded-md border sm:w-full">
          <div className="flex flex-col space-y-4 p-7 sm:p-10">
            <Image
              src="/trumpy.png"
              alt="trump"
              width={40}
              height={40}
              className="h-20 w-20"
            />
            <h1 className="text-lg font-semibold text-black">
              Hi, I'm Donald Trump's Terminal
            </h1>
            <p className="text-gray-500">
Those who dare to dream, dare to win. What are you waiting for? Let's Make America Great Again!            </p>
          </div>
          <div className="flex flex-col space-y-4 border-t border-gray-200 bg-gray-50 p-7 sm:p-10">
            {examples.map((example, i) => (
              <button
                key={i}
                className="rounded-md border border-gray-200 bg-white px-5 py-3 text-left text-sm text-gray-500 transition-all duration-75 hover:border-black hover:text-gray-700 active:bg-gray-50"
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
      <div className="fixed bottom-0 flex w-full flex-col items-center space-y-3 bg-gradient-to-b from-transparent via-gray-100 to-gray-100 p-5 pb-3 sm:px-0">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="relative w-full max-w-screen-md rounded-xl border border-gray-200 bg-white px-4 pb-2 pt-3 shadow-lg sm:pb-3 sm:pt-4"
        >
          <Textarea
            ref={inputRef}
            tabIndex={0}
            required
            rows={1}
            autoFocus
            placeholder="Send a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                formRef.current?.requestSubmit();
                e.preventDefault();
              }
            }}
            spellCheck={false}
            className="w-full pr-10 focus:outline-none"
          />
          <button
            className={clsx(
              "absolute inset-y-0 right-3 my-auto flex h-8 w-8 items-center justify-center rounded-md transition-all",
              disabled
                ? "cursor-not-allowed bg-white"
                : "bg-green-500 hover:bg-green-600",
            )}
            disabled={disabled}
          >
            {isLoading ? (
              <LoadingCircle />
            ) : (
              <SendIcon
                className={clsx(
                  "h-4 w-4",
                  input.length === 0 ? "text-gray-300" : "text-white",
                )}
              />
            )}
          </button>
        </form>
        <p className="text-center text-xs text-gray-400">
          Built and fine-tuned
         
          on President Trump's literary works..
        </p>
      </div>
    </main>
  );
}
