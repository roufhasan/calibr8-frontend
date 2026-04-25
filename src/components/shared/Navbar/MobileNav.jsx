"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/utils/constants";
import Link from "next/link";
import Container from "../Container";
import useBodyScrollLock from "@/hooks/useBodyScrollLock";
import { cn } from "@/lib/utils";

export default function MobileNav({ pathname }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  useBodyScrollLock(isOpen);

  return (
    <>
      <Button
        onClick={handleToggle}
        size="icon"
        variant="ghost"
        className="lg:hidden"
      >
        {isOpen ? <X /> : <Menu />}
      </Button>

      {/* dropdown menu */}
      <Container
        className={`bg-background fixed top-13 left-0 z-50 h-[calc(100dvh-52px)] w-dvw ${isOpen ? "block" : "hidden"}`}
      >
        <ul className="flex flex-col">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block py-3 font-medium",
                  pathname === link.href && "text-primary",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
