"use client";
import React from "react";
import { WobbleCard } from "./Ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px] relative">
        <div className="max-w-xs p-4">
          <h2 className="text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            BroBroBroBroBroB roBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBro
            BroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBr
            BroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBro
            BroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroB
            roBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBro
          </h2>
          <p className="mt-4 text-left text-base text-neutral-200">
            BroBroBroBroBroB roBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBro
            BroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBr
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
            BroBroBroBroBroB roBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBro
            BroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBr{" "}
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base text-neutral-200">
            BroBroBroBroBroB roBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBro
            BroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBr
          </p>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] relative">
        <div className="max-w-sm p-4">
          <h2 className="text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            BroBroBroBroBroB roBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBro
            BroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBr
            BroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBro
            BroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroB
            roBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBro
            BroBroBroBroBroB roBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBro
            BroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBr
            BroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBro
            BroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroB
            roBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroB
            roBroBroBroBroBroBroBroBroBr oBroBroBroBroBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBro
            BroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBr
            BroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBro
            BroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroB
            roBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroB
            roBroBroBroBroBroBroBroBroBr oBroBroBroBroBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBro
            BroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBr
            BroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBro
            BroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroB
            roBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroB
            roBroBroBroBroBroBroBroBroBr oBroBroBroBroBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBro
            BroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBr
            BroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBro
            BroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroB
            roBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroB
            roBroBroBroBroBroBroBroBroBr oBroBroBroBroBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBro
            BroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBr
            BroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBro
            BroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroB
            roBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroB
            roBroBroBroBroBroBroBroBroBr oBroBroBroBroBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBro
            BroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBr
            BroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBro
            BroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroB
            roBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroB
            roBroBroBroBroBroBroBroBroBr oBroBroBroBroBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBro
            BroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBr
            BroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBro
            BroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroB
            roBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroB
            roBroBroBroBroBroBroBroBroBr oBroBroBroBroBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBro
            BroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBr
            BroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBro
            BroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroB
            roBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBro
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base text-neutral-200">
            BroBroBroBroBroB roBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBro
            BroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBr
            BroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBr
            oBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBro
            BroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroB
            roBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBroBro
          </p>
        </div>
        <img src="/1.jpeg" alt="linear demo image" width={100} height={100} />
      </WobbleCard>
    </div>
  );
}
