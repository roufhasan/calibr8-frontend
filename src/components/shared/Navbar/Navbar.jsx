import { navLinks } from "@/utils/constants";
import Link from "next/link";
import { Search, Triangle } from "lucide-react";
import Container from "../Container";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Kbd } from "@/components/ui/kbd";

export default function Navbar() {
  return (
    <header className="border-b">
      <Container>
        <nav className="flex items-center justify-between gap-8 py-4">
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
          <ul className="flex flex-1 items-center justify-center gap-8">
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
          <div className="shrink-0">
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
        </nav>
      </Container>
    </header>
  );
}
