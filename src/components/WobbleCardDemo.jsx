"use client";
import React from "react";
import { WobbleCard } from "./Ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px] relative">
        <div className="max-w-xs p-4">
          <h2 className="text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Gippity AI powers the entire universe
          </h2>
          <p className="mt-4 text-left text-base text-neutral-200">
            With over 100,000 monthly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <img
          src="/linear.webp"
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
          width={500}
          height={500}
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] relative">
        <div className="p-4">
          <h2 className="max-w-xs text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            No shirt, no shoes, no weapons.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base text-neutral-200">
            If someone yells “stop!”, goes limp, or taps out, the fight is over.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] relative">
        <div className="max-w-sm p-4">
          <h2 className="text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Signup for blazing-fast cutting-edge state of the art Gippity AI
            wrapper today!
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base text-neutral-200">
            With over 100,000 monthly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <img
          src="/linear.webp"
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
          width={500}
          height={500}
        />
      </WobbleCard>
    </div>
  );
}
