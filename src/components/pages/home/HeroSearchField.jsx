"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HeroSearchField() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = searchValue.trim();
    if (!trimmed) return;
    router.push(`/monitors?q=${trimmed}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full rounded-sm border">
      <Input
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        placeholder={`Try "BenQ MOBIUZ" or "LG 27GP950"...`}
        className="flex-1 rounded-none rounded-l-sm border-0 px-3 text-xs md:text-xs"
      />
      <Button
        type="submit"
        className="h-full shrink-0 rounded-sm rounded-l-none text-xs tracking-wider"
      >
        Search
      </Button>
    </form>
  );
}
