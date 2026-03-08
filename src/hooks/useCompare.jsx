import { CompareContext } from "@/context/CompareContext";
import { useContext } from "react";

export default function useCompare() {
  return useContext(CompareContext);
}
