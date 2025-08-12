import { cn } from "@/lib/utils";
import { ReactNode, ElementType } from "react";

interface ResponsiveContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export const ResponsiveContainer = ({ 
  children, 
  className,
  as: Component = "div"
}: ResponsiveContainerProps) => {
  return (
    <Component className={cn(
      "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      className
    )}>
      {children}
    </Component>
  );
}; 