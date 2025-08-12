import Image from "next/image";

type TechCategory = 'framework' | 'language' | 'database';

interface TechStackItem {
  label: string;
  icon: string;
  category: TechCategory;
}

const techstacks: TechStackItem[] = [
  { label: "express", icon: "/express.svg", category: "framework" },
  { label: "react", icon: "/react.svg", category: "framework" },
  { label: "spring-boot", icon: "/spring-boot.svg", category: "framework" },
  { label: "nextjs", icon: "/nextjs.svg", category: "framework" },
  { label: "typescript", icon: "/typescript.svg", category: "language" },
  { label: "java", icon: "/java.svg", category: "language" },
  { label: "javascript", icon: "/javascript.svg", category: "language" },
  { label: "mysql", icon: "/mysql.svg", category: "database" },
  { label: "postgre", icon: "/postgre.svg", category: "database" },
];

const categoryOrder: TechCategory[] = ['framework', 'language', 'database'];

export const TechStacks = () => {
  const groupedTech = techstacks.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<TechCategory, TechStackItem[]>);

  return (
    <div className="mt-8">
      <div className="flex flex-col sm:flex-row items-start justify-start gap-6">
        {categoryOrder.map((category, categoryIndex) => (
          <div key={category} className="flex flex-col sm:flex-row items-center">
            <div className="flex flex-wrap gap-4 justify-center">
              {groupedTech[category]?.map((tech) => (
                <div 
                  key={tech.label} 
                  className="flex items-center justify-center rounded-lg hover:bg-white/10 transition-all duration-200 hover:scale-110"
                  title={tech.label}
                >
                  <Image 
                    alt={tech.label}
                    src={tech.icon}
                    width={32}
                    height={32}
                    className="object-contain w-8 h-8"
                  />
                </div>
              ))}
            {categoryIndex < categoryOrder.length - 1 && (
              <div className="hidden sm:block mx-3 h-8 w-0.5 bg-white/30"></div>
            )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};