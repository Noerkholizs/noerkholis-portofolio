import Link from "next/link";
import { Navigation } from "./navigation";
import { SidebarSocialMedia } from "./social-media";

export const Sidebar = () => {
  return (
    <aside className="w-full h-full bg-background p-6 pl-11 flex flex-col justify-between  r">
      <div className="text-left">
        <Link href="/" className="block">
          <h1 className="text-3xl font-bold text-primary">Nurkholis Majid</h1>
        </Link>
        <p className="text-sm text-neutral-400">Full Stack Developer</p>
      </div>

      <div className="flex-1 flex items-center">
        <Navigation />
      </div>

      <SidebarSocialMedia />
    </aside>
  );
};