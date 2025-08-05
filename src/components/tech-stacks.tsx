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
      <div className="flex items-start justify-start gap-4">
        {categoryOrder.map((category, categoryIndex) => (
          <div key={category} className="flex items-center">
            <div className="flex gap-4">
              {groupedTech[category]?.map((tech) => (
                <div key={tech.label} className="flex items-center gap-1">
                  <Image 
                    alt={tech.label}
                    src={tech.icon}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
              ))}
            {categoryIndex < categoryOrder.length - 1 && (
                <div className="mx-3 h-auto w-0.5 bg-white"></div>
            )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};