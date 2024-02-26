"use client";
import React, { useEffect, lazy } from "react";
import ReactDOM from "react-dom";
import axe from "@axe-core/react";

export default function AxeDevTools() {
  useEffect(() => {
    axe(React, ReactDOM, 1000);
  }, []);

  return null;
}
