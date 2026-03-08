"use client";
import { useState } from "react";
import { CompareContext } from "@/context/CompareContext";

export default function CompareProvider({ children }) {
  const [compareList, setCompareList] = useState([]);

  const value = {
    compareList,
    setCompareList,
  };

  return (
    <CompareContext.Provider value={value}>{children}</CompareContext.Provider>
  );
}
