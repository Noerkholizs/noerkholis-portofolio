import { Contact } from "@/components/Home/Contact";
import { Home } from "@/components/Home/Home";
import { MyWork } from "@/components/Home/MyWork";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-background/95">
      <Home />
      <MyWork />
      <Contact />
    </main>
  );
};