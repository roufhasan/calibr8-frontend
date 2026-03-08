import { Twitter, Youtube, Github } from "lucide-react";
import Container from "./Container";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-foreground border-primary-foreground/10 border-t">
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo varinat="dark" />
            <p className="text-primary-foreground/50 mb-5 text-sm leading-relaxed">
              Professional monitor recommendations backed by verified Calman
              color accuracy testing. Find your perfect display with real data.
            </p>
          </div>

          {/* Browse */}
          <div>
            <h3 className="text-primary-foreground mb-4 text-xs font-semibold tracking-widest uppercase">
              Browse
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "All Monitors", href: "/monitors" },
                { label: "Gaming", href: "/gaming" },
                { label: "Professional", href: "/professional" },
                { label: "Budget Picks", href: "/budget" },
                { label: "Compare", href: "/compare" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/45 hover:text-primary-foreground transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-primary-foreground mb-4 text-xs font-semibold tracking-widest uppercase">
              Resources
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "About Calman Testing", href: "/about" },
                { label: "Our Methodology", href: "/methodology" },
                { label: "Color Accuracy Glossary", href: "/glossary" },
                { label: "Articles & Guides", href: "/blog" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/45 hover:text-primary-foreground transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-primary-foreground mb-4 text-xs font-semibold tracking-widest uppercase">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/45 hover:text-primary-foreground transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-primary-foreground/10 mt-14 flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm md:flex-row">
          <p className="text-primary-foreground/35">
            © 2026 Calibr8. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-primary-foreground/35 hover:text-primary-foreground transition-colors duration-150"
            >
              <Twitter className="size-5" weight="fill" />
            </a>
            <a
              href="#"
              className="text-primary-foreground/35 hover:text-primary-foreground transition-colors duration-150"
            >
              <Youtube className="size-5" weight="fill" />
            </a>
            <a
              href="#"
              className="text-primary-foreground/35 hover:text-primary-foreground transition-colors duration-150"
            >
              <Github className="size-5" weight="fill" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
