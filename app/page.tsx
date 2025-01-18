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
      <div className="fixed top-0 z-50 w-full">
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

      {/* Main Content */}
      <div className={clsx(
        "relative z-10 flex flex-col items-center justify-center space-y-8 px-4 text-center mt-20",
        "transition-all duration-1000 transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}>
        <h1 className="text-5xl font-bold mb-4">$TRUMPGPT</h1>
        
        <p className="max-w-xl text-xl mb-8">
THE GREATEST AI, FOLKS. ABSOLUTELY TREMENDOUS. NOBODY DOES AI LIKE WE DO, BELIEVE ME.        </p>

        <Link 
          href="/chatwithme"
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border-2 border-white hover:bg-white hover:bg-opacity-25  hover:border-gray-300 transition-all duration-200 hover:ring-2 hover:ring-red-500/20"
        >
          CHAT WITH TRUMP
        </Link>

        {/* Features/Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-[80%]">
          <div className="">
            <h3 className="text-xl font-bold mb-2">TREMENDOUS AI</h3>
            <p>THE SMARTEST AI YOU'VE EVER SEEN, FOLKS. EVERYONE SAYS SO.</p>
          </div>
          <div className="">
            <h3 className="text-xl font-bold mb-2">HUGE KNOWLEDGE</h3>
            <p>WE KNOW THINGS. THE BEST THINGS. ALL THE IMPORTANT THINGS.</p>
          </div>
          <div className="">
            <h3 className="text-xl font-bold mb-2">MAKING AI GREAT AGAIN</h3>
            <p>WE'RE BRINGING AI BACK, BIGGER AND BETTER THAN EVER BEFORE.</p>
          </div>
        </div>
      </div>
    </main>
  );
}