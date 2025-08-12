"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const routes = [
  { label: "Home", href: "#home" },
  { label: "My Work", href: "#mywork" },
  { label: "Contact", href: "#contact" },
];

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="lg:hidden">
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-50 bg-background/80 backdrop-blur-sm border border-border"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 mobile-nav-overlay">
          <div className="flex items-center justify-center min-h-screen">
            <nav className="text-center">
              <ul className="space-y-8">
                {routes.map((route) => (
                  <li key={route.href}>
                    <Link
                      href={route.href}
                      onClick={closeMenu}
                      className="text-2xl font-semibold text-white hover:text-primary transition-colors duration-200 block py-2"
                    >
                      {route.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}; 