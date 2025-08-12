"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const routes = [
  { label: "Home", href: "#home" },
  { label: "My Work", href: "#mywork" },
  { label: "Contact", href: "#contact" },
];

export const Navigation = () => {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const sections = routes.map((route) => 
            document.querySelector(route.href) as HTMLElement
        );

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            });
        },
        { threshold: 0.6});

        sections.forEach((sec) => {
            if (sec) observer.observe(sec)
        })

        return () => observer.disconnect();
    }, [])
    
   return (
    <ul className="flex flex-col gap-6 lg:gap-10">
      {routes.map((item) => {
        const isActive = activeSection === item.href.replace("#", "");

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className={cn(
                "block text-base lg:text-lg tracking-wide transition-all duration-200 text-left relative group",
                isActive
                  ? "font-bold text-white"
                  : "text-neutral-500 hover:text-white"
              )}
            >
              <span className="relative">
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                )}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-200 group-hover:w-full"></span>
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};