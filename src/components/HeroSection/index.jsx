import React, { useState } from "react";
import Logo from "@/assets/logo-lGLL0Zb0.png";
import { Input } from "@/components/ui/input";
import { DialogAuth } from "@/components/DialogAuth";
function HeroSection({ handleSearch, search, setSearch }) {
  return (
    <div>
      <div className="text-center mt-10 mb-8">
        <h1 className="hero-title text-3xl sm:text-6xl font-semibold sm:leading-[4rem] text-gray-700">
          Your own <span className="text-primary">blogging</span> platform.
        </h1>
        <p className="my-6 sm:my-8 max-w-2xl mx-auto max-sm:text-xs text-gray-500">
          This is your space to think out loud, to share what matters, and to
          write without filters. Whether it's one word or a thousand, your story
          starts right here.
        </p>
        <form className="flex bg-card justify-between items-center max-w-lg max-sm:scale-75 mx-auto border border-gray-300 rounded overflow-hidden">
          <Input
            placeholder="Enter search title..."
            className="w-full pl-4 h-9 bg-transparent outline-none border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground text-base md:text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></Input>
          <button
            onClick={handleSearch}
            value={search}
            type="submit"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-9 bg-primary text-white px-8 py-2 m-1.5 rounded transition-all hover:cursor-pointer hover:bg-blue-600 focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default HeroSection;
