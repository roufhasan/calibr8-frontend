import { navLinks } from "@/utils/constants";
import Link from "next/link";
import Container from "../Container";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Kbd } from "@/components/ui/kbd";
import MobileNav from "./MobileNav";
import { Search, Triangle } from "lucide-react";

export default function Navbar() {
  return (
    <header className="border-b">
      <Container>
        <nav className="relative flex items-center justify-between gap-8 py-4">
          {/* logo */}
          <Link
            href="/"
            className="inline-flex shrink-0 items-center gap-1 px-3 py-1 font-sans font-bold"
          >
            <span className="text-2xl">C</span>
            <Triangle
              className="text-primary size-5"
              strokeWidth={2}
              fill="currentColor"
            />
            <span className="text-2xl tracking-[0.25em]">LIBR8</span>
          </Link>

          {/* menu */}
          <ul className="hidden flex-1 items-center justify-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="hover:text-primary text-sm font-medium transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* search field */}
          <div className="hidden shrink-0 md:block">
            <InputGroup>
              <InputGroupAddon>
                <Search className="size-4" />
              </InputGroupAddon>
              <InputGroupInput
                placeholder="Search monitors..."
                className="text-sm"
              />
              <InputGroupAddon align="inline-end">
                <Kbd className="text-xs">⌘</Kbd>
                <Kbd className="text-xs">K</Kbd>
              </InputGroupAddon>
            </InputGroup>
          </div>

          {/* mobile menu */}
          <MobileNav />
        </nav>
      </Container>
    </header>
  );
}
