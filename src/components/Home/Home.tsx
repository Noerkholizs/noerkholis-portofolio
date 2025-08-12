import Image from 'next/image';
import { TechStacks } from '../tech-stacks';
import { ResponsiveContainer } from '../ui/responsive-container';

export const Home = () => {
  return (
    <section id="home" className="section-padding">
      <ResponsiveContainer>
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center"> 
            <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <Image
                src="/person.svg"
                alt="Nurkholis Majid"
                width={800}
                height={1200}
                className="w-full h-auto rounded-2xl shadow-2xl fade-in"
                priority
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h1 className="text-responsive-xl font-bold text-white">
                HI!
              </h1>
              <h2 className="text-responsive-lg font-bold text-primary">
                I&apos;m Nurkholis Majid
              </h2>
                          
              <p className="text-responsive-sm leading-relaxed text-foreground/90 max-w-2xl">
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
      </ResponsiveContainer>
    </section>
  )
};