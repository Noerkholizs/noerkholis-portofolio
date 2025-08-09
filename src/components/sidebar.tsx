import { Navigation } from "./navigation";

export const Sidebar = () => {
  return (
    <aside className="h-full bg-background p-4 w-full flex flex-col justify-center">
      <Navigation />
    </aside>
    );
};