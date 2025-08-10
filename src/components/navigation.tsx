"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { GoHome, GoHomeFill, GoProject, GoProjectRoadmap } from "react-icons/go"
import { usePathname } from "next/navigation";
import { HiChatBubbleLeft, HiOutlineChatBubbleLeft } from "react-icons/hi2";

const routes = [
    {
        label: "Home",
        href: "/",
        icon: GoHome,
        activeIcon: GoHomeFill
    },
    {
        label: "My Work",
        href: "#mywork",
        icon: GoProject,
        activeIcon: GoProjectRoadmap
    },
    {
        label: "Contact",
        href: "#contact",
        icon: HiOutlineChatBubbleLeft,
        activeIcon: HiChatBubbleLeft
    },
];

export const Navigation = () => {
    const pathname = usePathname();

    return (
        <ul className="flex flex-col">
            {routes.map((item) => {
                const isActive = item.href === pathname;
                // const Icon = isActive ? item.activeIcon : item.icon;

                return (
                    <Link key={item.href} href={item.href} className="w-full max-w-[500px]">
                        <div className={cn(
                            "flex items-center gap-4 p-8 rounded-lg font-medium transition-all justify-center",
                            isActive 
                                ? "text-white shadow-md"
                                : "text-neutral-500 hover:text-white"
                        )}>
                            {/* <Icon className="size-5 flex-shrink-0" /> */}
                            <span className={cn("truncate font-medium tracking-wide", isActive && "font-extrabold")}>
                                {item.label}
                            </span>
                        </div>
                    </Link>
                )
            })}
        </ul>
    );
};