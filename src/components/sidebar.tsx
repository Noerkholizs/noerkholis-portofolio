import Link from "next/link";
import { Navigation } from "./navigation";
import { SidebarSocialMedia } from "./social-media";

export const Sidebar = () => {
  return (
    <aside className="w-full h-full bg-background/95 backdrop-blur-sm p-6 lg:p-8 flex flex-col justify-between">
      {/* Header */}
      <div className="text-left space-y-2">
        <Link href="/" className="block group">
          <h1 className="text-2xl lg:text-3xl font-bold text-primary group-hover:text-primary/80 transition-colors duration-200">
            Nurkholis Majid
          </h1>
        </Link>
        <p className="text-sm text-neutral-400 font-medium">
          Full Stack Developer
        </p>
      </div>

      {/* Navigation */}
      <div className="flex-1 flex items-center justify-center lg:justify-start">
        <Navigation />
      </div>

      {/* Social Media */}
      <div className="flex justify-center lg:justify-start">
        <SidebarSocialMedia />
      </div>
    </aside>
  );
};