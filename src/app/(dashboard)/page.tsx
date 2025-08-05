import { TechStacks } from "@/components/tech-stacks";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Image Section - Made larger */}
        <div className="flex-1/4 order-1 lg:order-2 flex justify-center">
          <div className="w-full max-w-2xl lg:max-w-none">
            <Image 
              src="/person.svg"
              alt="Nurkholis Majid"
              width={800}
              height={1200}
              className="w-full h-auto rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Text Content - Slightly narrower */}
        <div className="flex-1/5 order-2 lg:order-1 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-1">HI!</h1>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              w Nurkholis Majid
            </h1>
                        
            <p className="text-base md:text-lg leading-relaxed text-foreground/90">
              Si Full Stack Developer biasa ngedesain dari ujung frontend 
              sampai backend, suka mengatur state, optimal query, dan bikin API yang clean. 
              Sudah familiar banget sama Git workflow, CI/CD, dan sprint ala Agile. Passionate 
              soal clean code, scalable architecture, dan nggak bisa tidur kalau bug belum fix. 
              Selalu excited explore tech stack baru dan ngepush batas kemampuan tim lewat 
              kolaborasi yang solid.
            </p>
          </div>

          <TechStacks />
        </div>
      </div>
    </div>
  );
}