import React from "react";
import { cn } from "@/lib/utils";

const SectionWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("w-[calc(100vw-250px)]  pt-6 px-20", className)}>
      {children}
    </div>
  );
};

export default SectionWrapper;
