"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Search, X } from "lucide-react";
import { navLinks } from "@/utils/constants";
import Link from "next/link";
import Container from "../Container";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <Button
        onClick={handleToggle}
        size="icon"
        variant="ghost"
        className="md:hidden"
      >
        {isOpen ? <X /> : <Menu />}
      </Button>

      {/* dropdown menu */}
      <Container
        className={`bg-background fixed top-18.25 left-0 z-50 h-[calc(100dvh-73px)] w-dvw ${isOpen ? "block" : "hidden"}`}
      >
        <div className="py-4">
          <InputGroup className="rounded-none border-0 border-b">
            <InputGroupAddon>
              <Search className="size-4" />
            </InputGroupAddon>
            <InputGroupInput
              placeholder="Search monitors..."
              className="text-sm"
            />
          </InputGroup>
        </div>

        <ul className="flex flex-col">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 font-medium"
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
