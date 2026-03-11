"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

interface NavItem {
  name: string;
  path?: string;
  dropdown?: { name: string; path: string }[];
}

const navItems: NavItem[] = [
  { name: "Home", path: "/" },
  {
    name: "Services",
    dropdown: [
      { name: "Web Development", path: "/services/web" },
      { name: "Digital Marketing", path: "/services/marketing" },
      { name: "Software Solution", path: "/services/erp" },
      { name: "Mobile App", path: "/services/app" },
      { name: "Media Buying", path: "/services/media" },
      { name: "Business Consultancy", path: "/services/business" },
      { name: "Domain Hosting", path: "/services/domain" },
    ],
  },
  {
    name: "Our Ventures",
    dropdown: [
      { name: "DokanX", path: "/ventures/dokanx" },
      { name: "Cascade", path: "/ventures/cascade" },
      { name: "ShomporkoX", path: "/ventures/shomporkox" },
      { name: "AbashonX", path: "/ventures/abashonx" },
      { name: "EasySoft", path: "/ventures/easysoft" },
    ],
  },
  {
    name: "About Us",
    dropdown: [
      { name: "Project", path: "/project" },
      { name: "About", path: "/about" },
      { name: "Our Client", path: "/client" },
    ],
  },
  { name : "Contact", path : "/contact"},
];

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-sm font-medium transition-all duration-200 ${
        isActive
          ? "text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] pb-0.5"
          : "text-[var(--color-foreground)] hover:text-[var(--color-accent)]"
      }`}
    >
      {children}
    </Link>
  );
}

function Dropdown({
  label,
  items,
  open,
  setOpen,
}: {
  label: string;
  items: { name: string; path: string }[];
  open: boolean;
  setOpen: (val: boolean) => void;
}) {
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="flex items-center gap-1 text-sm font-medium transition-colors duration-200 text-[var(--color-foreground)] hover:text-[var(--color-accent)]">
        {label}
        <ChevronDown size={15} className={`mt-px transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-9 left-0 w-48 bg-[var(--color-background)] border border-[var(--color-secondary)] rounded-lg shadow-2xl shadow-black/40 p-2 flex flex-col gap-1 z-50"
          >
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="px-4 py-2 rounded-md text-sm text-[var(--color-foreground)] hover:bg-[var(--color-primary)] hover:text-[var(--color-background)] transition-colors duration-150"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--color-background)]/85 backdrop-blur-xl shadow-lg shadow-[var(--color-primary)]/10 border-b border-[var(--color-primary)]/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3 flex items-center justify-between">

          {theme === "dark" ? 
        <Link href="/">
          <Image priority src="/logo/logo_v1.svg" alt="Logo" width={35} height={25} className="w-40 h-auto object-contain" priority />
        </Link> : 
        <Link href="/">
          <Image priority src="/logo/logo_v2.svg" alt="Logo" width={35} height={25} className="w-40 h-auto object-contain" priority />
        </Link>

        }
       
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) =>
            item.dropdown ? (
              <Dropdown
                key={item.name}
                label={item.name}
                items={item.dropdown}
                open={openDropdown === item.name}
                setOpen={(val) => setOpenDropdown(val ? item.name : null)}
              />
            ) : (
              <NavLink key={item.name} href={item.path!}>
                {item.name}
              </NavLink>
            )
          )}


        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-lg border border-[var(--color-secondary)] bg-transparent text-[var(--color-foreground)] hover:bg-[var(--color-primary)]/10 hover:border-[var(--color-primary)] transition-all duration-200"
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 bg-[var(--color-primary)] hover:bg-[var(--color-accent)] text-[var(--color-background)] rounded-md transition-colors duration-200"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="fixed top-0 right-0 w-60 h-full bg-[var(--color-background)] border-l border-[var(--color-secondary)] shadow-2xl z-50 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-secondary)]/20">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={30}
                  height={30}
                  className="w-16 h-auto"
                />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-[var(--color-foreground)] hover:bg-[var(--color-primary)] hover:text-white transition"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Menu */}
              <div className="flex flex-col px-4 py-4 overflow-y-auto flex-1">
                {navItems.map((item) => (
                  <div key={item.name} className="">
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() =>
                            setOpenMobileDropdown(
                              openMobileDropdown === item.name ? null : item.name
                            )
                          }
                          className="flex w-full items-center justify-between py-4 px-3 text-[var(--color-primary)] font-medium hover:bg-[var(--color-primary)]/10 rounded-lg transition"
                        >
                          {item.name}
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-300 ${
                              openMobileDropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {openMobileDropdown === item.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="flex flex-col ml-4 mb-2 overflow-hidden"
                            >
                              {item.dropdown.map((sub) => (
                                <Link
                                  key={sub.name}
                                  href={sub.path}
                                  onClick={() => setMobileOpen(false)}
                                  className="py-2.5 px-3 text-sm text-[var(--color-foreground)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 rounded-md transition"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.path!}
                        onClick={() => setMobileOpen(false)}
                        className="block py-4 px-3 font-medium text-[var(--color-foreground)] hover:bg-[var(--color-primary)]/10 rounded-lg transition"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="p-6 border-t border-[var(--color-secondary)]/20">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                 className="flex w-full items-center justify-between py-4 px-3 text-[var(--color-primary)] font-medium hover:bg-[var(--color-primary)]/80 rounded-lg transition"
                >
                  Get In Touch
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}