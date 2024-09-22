import { ProductCategory } from "@/types/db";
import { BriefcaseBusiness, CarFront, HandPlatter, HousePlus, MonitorSmartphone } from "lucide-react";

export const getCategoryIcon = (category: ProductCategory) => {
    switch (category) {
        case "PROPERTY":
            return <HousePlus size={15} />;
        case "VEHICLE":
            return <CarFront size={15} />;
        case "SERVICE":
            return <HandPlatter size={15} />;
        case "CLASSIFIED":
            return <MonitorSmartphone size={15} />;
        case "JOB":
            return <BriefcaseBusiness size={15} />;
        default:
            return null;
    }
};