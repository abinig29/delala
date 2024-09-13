import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionHeaderVariant = cva("font-heading font-semibold tracking-wide", {
  variants: {
    variant: {
      default: "text-md",
      sm: "text-sm",
      lg: "text-2xl",
      xs: "text-xs",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface sectionHeaderProp extends VariantProps<typeof sectionHeaderVariant> {
  heading: string;
}

const SectionHeader = ({ variant, heading }: sectionHeaderProp) => {
  return <div className={cn(sectionHeaderVariant({ variant }))}>{heading}</div>;
};

export default SectionHeader;
