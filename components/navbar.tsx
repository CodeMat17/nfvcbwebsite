"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

type NavChild = { label: string; href: string; desc?: string };
type NavLink = { label: string; href: string; children?: NavChild[] };

/* Condensed from nine competing top-level items to five groups. The logo is
   the route home, so a separate "Home" link is redundant on desktop. */
const navLinks: NavLink[] = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About NFVCB", href: "/about", desc: "Mandate, history and philosophy" },
      { label: "Management Team", href: "/management", desc: "Board leadership" },
      { label: "Executive Director", href: "/executive-director", desc: "Office of the ED" },
      { label: "Departments", href: "/departments", desc: "How the Board is organised" },
      { label: "Zonal Offices", href: "/zones", desc: "Find your nearest office" },
    ],
  },
  {
    label: "Services",
    href: "/industry",
    children: [
      { label: "Industry Information", href: "/industry", desc: "Submitting films for classification" },
      { label: "Licensing", href: "/industry/licensing", desc: "Distributor and exhibitor licences" },
      { label: "Payment Guide", href: "/payment-guide", desc: "Fees and how to pay" },
      { label: "Service Charter", href: "/service-charter", desc: "What to expect from us" },
    ],
  },
  {
    label: "Regulation",
    href: "/policy",
    children: [
      { label: "Our Policy", href: "/policy", desc: "The regulatory framework" },
      { label: "Classification", href: "/classification", desc: "How films are rated" },
      { label: "8-Point Action Plan", href: "/action-plan", desc: "Current strategic priorities" },
      { label: "Law Enforcement", href: "/law-enforcement", desc: "Compliance and field operations" },
    ],
  },
  { label: "Approved Movies", href: "/approved-movies" },
  { label: "News", href: "/news" },
  { label: "FAQs", href: "/faqs" },
];

/* A link is active when it is the exact route, or the parent of the current
   nested route — so /industry/licensing lights up "Services". */
function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function groupIsActive(pathname: string, link: NavLink) {
  if (isActive(pathname, link.href)) return true;
  return link.children?.some((c) => isActive(pathname, c.href)) ?? false;
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return <div className="w-11 h-11" aria-hidden />;

  const next = resolvedTheme === "dark" ? "light" : "dark";
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={`Switch to ${next} theme`}
      onClick={() => setTheme(next)}
      className="tap text-foreground hover:bg-primary/10 hover:text-primary"
    >
      <AnimatePresence mode="wait" initial={false}>
        {resolvedTheme === "dark" ? (
          <motion.span
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Sun className="h-5 w-5" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Moon className="h-5 w-5" />
          </motion.span>
        )}
      </AnimatePresence>
    </Button>
  );
}

function DesktopItem({ link, pathname }: { link: NavLink; pathname: string }) {
  const [open, setOpen] = useState(false);
  const active = groupIsActive(pathname, link);

  const trigger = (
    <span className="relative flex items-center gap-1 px-3 py-2 text-caption font-semibold transition-colors">
      {link.label}
      {link.children && (
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="h-3.5 w-3.5" aria-hidden />
        </motion.span>
      )}
      {/* Active indicator — the site previously had none at all. */}
      {active && (
        <motion.span
          layoutId="nav-active"
          className="absolute -bottom-px left-3 right-3 h-0.5 rounded-full bg-accent"
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden
        />
      )}
    </span>
  );

  if (!link.children) {
    return (
      <Link
        href={link.href}
        aria-current={active ? "page" : undefined}
        className={`rounded-md transition-colors ${
          active ? "text-foreground" : "text-foreground/70 hover:text-primary"
        }`}
      >
        {trigger}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={link.href}
        aria-expanded={open}
        aria-haspopup="true"
        aria-current={active ? "page" : undefined}
        onFocus={() => setOpen(true)}
        className={`block rounded-md transition-colors ${
          active ? "text-foreground" : "text-foreground/70 hover:text-primary"
        }`}
      >
        {trigger}
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 pt-2 z-50"
            onKeyDown={(e) => { if (e.key === "Escape") setOpen(false); }}
          >
            <div className="w-72 overflow-hidden rounded-xl border border-border bg-popover shadow-4 p-1.5">
              {link.children.map((child) => {
                const childActive = isActive(pathname, child.href);
                return (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setOpen(false)}
                    aria-current={childActive ? "page" : undefined}
                    className={`block rounded-lg px-3 py-2.5 transition-colors ${
                      childActive ? "bg-primary/10" : "hover:bg-primary/5"
                    }`}
                  >
                    <span
                      className={`block text-caption font-semibold ${
                        childActive ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {child.label}
                    </span>
                    {child.desc && (
                      <span className="mt-0.5 block text-caption text-muted-foreground leading-snug">
                        {child.desc}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileGroup({ link, pathname }: { link: NavLink; pathname: string }) {
  const active = groupIsActive(pathname, link);
  const [open, setOpen] = useState(active);

  if (!link.children) {
    return (
      <SheetClose asChild>
        <Link
          href={link.href}
          aria-current={active ? "page" : undefined}
          className={`flex tap items-center rounded-lg px-3 text-body-lg font-semibold transition-colors ${
            active ? "bg-primary/10 text-primary" : "text-foreground hover:bg-primary/5"
          }`}
        >
          {link.label}
        </Link>
      </SheetClose>
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={`flex tap w-full items-center justify-between rounded-lg px-3 text-body-lg font-semibold transition-colors ${
          active ? "text-primary" : "text-foreground hover:bg-primary/5"
        }`}
      >
        {link.label}
        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="ml-3 mt-1 space-y-0.5 border-l border-border pl-3">
              {link.children.map((child) => {
                const childActive = isActive(pathname, child.href);
                return (
                  <SheetClose asChild key={child.href}>
                    <Link
                      href={child.href}
                      aria-current={childActive ? "page" : undefined}
                      className={`flex tap items-center rounded-lg px-3 text-caption transition-colors ${
                        childActive
                          ? "bg-primary/10 font-semibold text-primary"
                          : "text-muted-foreground hover:bg-primary/5 hover:text-foreground"
                      }`}
                    >
                      {child.label}
                    </Link>
                  </SheetClose>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 h-(--header-h) transition-shadow duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-2"
          : "bg-background/80 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="section flex h-full items-center justify-between gap-4">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 rounded-md"
          aria-label="NFVCB — home"
        >
          <Image src="/logo.webp" alt="" width={40} height={40} className="rounded" priority />
          <span className="hidden text-h4 font-black leading-none text-primary sm:block">
            NFVCB
          </span>
        </Link>

        <nav className="hidden lg:flex items-center" aria-label="Main navigation">
          {navLinks.map((link) => (
            <DesktopItem key={link.href} link={link} pathname={pathname} />
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="tap lg:hidden text-foreground hover:bg-primary/10"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[min(22rem,88vw)] bg-background p-0 flex flex-col"
            >
              <div className="flex items-center gap-2.5 border-b border-border px-4 py-4">
                <Image src="/logo.webp" alt="" width={32} height={32} className="rounded" />
                <SheetTitle className="text-h4 font-black text-primary">NFVCB</SheetTitle>
              </div>

              <nav
                className="flex-1 space-y-1 overflow-y-auto p-3"
                aria-label="Mobile navigation"
              >
                <MobileGroup link={{ label: "Home", href: "/" }} pathname={pathname} />
                {navLinks.map((link) => (
                  <MobileGroup key={link.href} link={link} pathname={pathname} />
                ))}
              </nav>

              {/* Primary public action. Replaces a link to /contact, which is
                  not a route that exists. */}
              <div className="border-t border-border p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
                <SheetClose asChild>
                  <Link
                    href="/industry/licensing"
                    className="flex tap items-center justify-center gap-2 rounded-lg bg-primary px-4 text-caption font-bold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Apply for a Licence
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
