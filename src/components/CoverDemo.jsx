import React from "react";
import { Cover } from "./Ui/cover";

export function CoverDemo() {
  return (
    <div className="relative z-20 py-2">
      <h1 className="font-sans  text-7xl font-bold max-w-7xl mx-auto text-center mt-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white leading-snug">
        <Cover>My Projects</Cover>
      </h1>
    </div>
  );
}
