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

        const observer = new IntersectionObserver((entires) => {
            entires.forEach((entry) => {
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
    <ul className="flex flex-col gap-10">
      {routes.map((item) => {
        const isActive = activeSection === item.href.replace("#", "");

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className={cn(
                "block text-sm tracking-wide transition-colors text-left",
                isActive
                  ? "font-bold text-white"
                  : "text-neutral-500 hover:text-white"
              )}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};