import React from "react";
import { Button, ButtonProps } from "../ui/button";
import { Badge } from "lucide-react";

interface BadgedButtonProps extends ButtonProps {
  tag: string;
  label: string;
}

export function BadgedButton({
  className,
  tag,
  variant,
  label,
  onClick,
  ...props
}: BadgedButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant={"outline"}
      {...props}
      className="w-full justify-between bg-white hover:bg-slate-100/10"
    >
      <span className="text-[16px]">{label}</span>
      <Badge className="i items-center gap-1 border">
        <div className="size-2 rounded-full bg-main" />
        {tag}
      </Badge>
    </Button>
  );
}

export default BadgedButton;
