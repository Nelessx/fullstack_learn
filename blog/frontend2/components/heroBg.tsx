"use client"

import React from "react";
import Aurora from "./ui/aurora";

export default function HeroBg() {
  return (
    <div className=" absolute z-0">
      <Aurora colorStops={["#3A29FF", "#FF94B4", "red"]} speed={0.9} />
    </div>
  );
}
