"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const contractAddress = "89787978979878968";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
<main className="relative min-h-screen flex flex-col items-center justify-center text-white">     {/* Replace the Static Patriotic Background div with this */}
<div className="fixed inset-0 z-0 pointer-events-none">
  <div className="absolute inset-0">
    <Image
      src="/bgDONALD.gif"
      alt="Background"
      fill
      className="object-cover"
      priority
    />
  </div>
  {/* Keep the patriotic overlay */}
  <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,0,0,0.1)_25%,transparent_25%,transparent_75%,rgba(255,0,0,0.1)_75%,rgba(255,0,0,0.1)),linear-gradient(45deg,rgba(0,0,255,0.1)_25%,transparent_25%,transparent_75%,rgba(0,0,255,0.1)_75%,rgba(0,0,255,0.1))] bg-[length:50px_50px] opacity-10"></div>
  {/* Add a slight dark overlay to ensure text readability */}
  <div className="absolute inset-0 bg-black/30"></div>
</div>
      {/* Header */}
      <div className="fixed top-0 z-50 w-full backdrop-blur-sm">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-3">
          <button
            onClick={copyToClipboard}
            className={clsx(
              "px-4 py-2 rounded-lg transition-all duration-200",
              "hover:text-white hover:bg-slate-500/20",
              copied && "bg-green-500/20"
            )}
          >
            <strong>
              {copied ? "Copied!" : `Contract Address: ${contractAddress}`}
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

      {/* Main Content */}
      <div className={clsx(
        "relative z-10 flex flex-col items-center justify-center space-y-8 px-4 text-center mt-20",
        "transition-all duration-1000 transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}>
        <h1 className="text-5xl font-bold mb-4">$TRUMPGPT</h1>
        
        <p className="max-w-xl text-xl mb-8">
          The greatest AI, folks. Absolutely tremendous. Nobody does AI like we do, believe me.
        </p>

        <Link 
          href="/chatwithme"
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-black border-2 border-white rounded-lg hover:bg-gray-900 hover:border-gray-300 transition-all duration-200 hover:ring-2 hover:ring-red-500/20"
        >
          Chat with Trump
        </Link>

        {/* Features/Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="backdrop-blur-sm bg-black/20 p-6 rounded-lg border border-white/10">
            <h3 className="text-xl font-bold mb-2">Tremendous AI</h3>
            <p>The smartest AI you've ever seen, folks. Everyone says so.</p>
          </div>
          <div className="backdrop-blur-sm bg-black/20 p-6 rounded-lg border border-white/10">
            <h3 className="text-xl font-bold mb-2">Huge Knowledge</h3>
            <p>We know things. The best things. All the important things.</p>
          </div>
          <div className="backdrop-blur-sm bg-black/20 p-6 rounded-lg border border-white/10">
            <h3 className="text-xl font-bold mb-2">Making AI Great</h3>
            <p>We're bringing AI back, bigger and better than ever before.</p>
          </div>
        </div>
      </div>
    </main>
  );
}