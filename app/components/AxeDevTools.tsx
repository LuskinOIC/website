"use client";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";

export default function AxeDevTools() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const axe = require("@axe-core/react");
      axe(React, ReactDOM, 1000);
    }
  }, []);
  return null;
}
