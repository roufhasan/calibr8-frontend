"use client";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import Container from "../Container";
import MobileNav from "./MobileNav";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Kbd } from "@/components/ui/kbd";
import { navLinks } from "@/utils/constants";
import Logo from "../Logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className="bg-card sticky top-0 z-50">
      <Container>
        <nav className="relative flex items-center justify-between gap-8 py-2">
          {/* logo */}
          <Logo />

          {/* menu */}
          <ul className="hidden flex-1 items-center justify-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className={cn(
                    "hover:text-primary text-xs transition-colors",
                    pathname === link.href ? "text-primary" : "",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* search field */}
          <div className="hidden shrink-0 lg:block">
            <InputGroup className="h-8">
              <InputGroupAddon>
                <Search className="size-3" />
              </InputGroupAddon>
              <InputGroupInput
                placeholder="Search monitors..."
                className="text-xs md:text-xs"
              />
              <InputGroupAddon align="inline-end">
                <Kbd>⌘</Kbd>
                <Kbd>K</Kbd>
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
