"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";


const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Our History", href: "/about#history" },
      { label: "Vision & Goals", href: "/about#vision" },
      { label: "Philosophy", href: "/about#philosophy" },
      { label: "Management Team", href: "/management" },
      { label: "Departments", href: "/departments" },
    ],
  },
  {
    label: "Services",
    href: "/industry",
    children: [
      { label: "Industry Information", href: "/industry" },
      { label: "Licensing", href: "/industry/licensing" },
      { label: "Service Charter", href: "/service-charter" },
    ],
  },
  {
    label: "Regulation",
    href: "/policy",
    children: [
      { label: "Our Policy", href: "/policy" },
      { label: "8-Point Action Plan", href: "/action-plan" },
      { label: "Law Enforcement", href: "/law-enforcement" },
    ],
  },
  { label: "Zones & Centres", href: "/zones" },
  { label: "Approved Movies", href: "/approved-movies" },
  { label: "News", href: "/news" },
  { label: "Classification", href: "/classification" },
  { label: "Payment", href: "/payment" },
  { label: "FAQs", href: "/faqs" },
];

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return <div className="w-9 h-9" aria-hidden />;
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="text-foreground hover:bg-primary/10 hover:text-primary"
    >
      <AnimatePresence mode="wait">
        {resolvedTheme === "dark" ? (
          <motion.span
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Sun className="h-5 w-5" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Moon className="h-5 w-5" />
          </motion.span>
        )}
      </AnimatePresence>
    </Button>
  );
}

function DesktopDropdown({
  link,
}: {
  link: (typeof navLinks)[number];
}) {
  const [open, setOpen] = useState(false);

  if (!link.children) {
    return (
      <Link
        href={link.href}
        className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors px-3 py-2"
      >
        {link.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors px-3 py-2"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {link.label}
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="h-3.5 w-3.5" aria-hidden />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 w-52 bg-card border border-border rounded-xl shadow-xl py-2 z-50"
          >
            {link.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
              >
                {child.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo.webp"
              alt="NFVCB Logo"
              width={44}
              height={44}
               className="rounded"
              priority
            />
            <div className="hidden sm:block">
              <div className=" font-bold text-primary leading-tight">NFVCB</div>
              {/* <div className="lg:hidden xl:block text-sm text-muted-foreground leading-tight">
                National Film & Video Censors Board
              </div> */}
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center" aria-label="Main navigation">
            {navLinks.map((link) => (
              <DesktopDropdown key={link.href} link={link} />
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden text-foreground hover:bg-primary/10"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-background p-0">
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <div className="flex items-center gap-3">
                    <Image src="/logo.webp" alt="NFVCB" width={36} height={36} className="rounded" />
                    <div>
                      <div className="text-sm font-bold text-primary">NFVCB</div>
                      <div className="text-xs text-muted-foreground">Film & Video Censors Board</div>
                    </div>
                  </div>
                  {/* <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-4 w-4" />
                    </Button>
                  </SheetClose> */}
                </div>
                <nav className="p-4 overflow-y-auto" aria-label="Mobile navigation">
                  {navLinks.map((link) => (
                    <div key={link.href} className="mb-2">
                      <SheetClose asChild>
                        <Link
                          href={link.href}
                          className="block text-base font-semibold text-foreground hover:text-primary py-2 border-b border-border/50"
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                      {link.children && (
                        <div className="pl-4 mt-1 space-y-1">
                          {link.children.map((child) => (
                            <SheetClose asChild key={child.href}>
                              <Link
                                href={child.href}
                                className="block text-sm text-muted-foreground hover:text-primary py-1.5"
                              >
                                {child.label}
                              </Link>
                            </SheetClose>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="mt-6 pt-4 border-t border-border">
                    <Link
                      href="/contact"
                      className="block w-full text-center bg-primary text-white rounded-lg py-2.5 text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                      Contact Us
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
