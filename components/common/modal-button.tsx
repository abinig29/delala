import { type LucideIcon } from "lucide-react";
import React from "react";

type ModalButtonPropType = {
  title: string;
  subTitle?: string;
  capital?: string;
  Icon: LucideIcon;
  color: string;
  onClick?: () => void;
};
const ModalButton = ({
  Icon,
  subTitle,
  title,
  capital,
  color,
  onClick,
}: ModalButtonPropType) => {
  return (
    <button
      onClick={onClick}
      className="relative flex items-start gap-2 rounded-lg border px-3 py-2"
    >
      <Icon style={{ color }} size={20} className="pt-1" />
      <div className="flex flex-col items-start">
        <h3 className="text-semibold">{title}</h3>
        <h6 className="t text-sm text-muted-foreground">{subTitle}</h6>
      </div>
      <span className="absolute right-2 top-2 h-fit rounded border px-1 text-sm">
        {capital}
      </span>
    </button>
  );
};

export default ModalButton;
