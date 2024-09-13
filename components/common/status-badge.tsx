import { Badge } from "../ui/badge"


interface StatusBadgeProps {
    status: string
}

export function StatusBadge({ status = "Soled" }: StatusBadgeProps) {
    return (
        <Badge variant="secondary" className="flex items-center gap-1.5 text-green-500 px-2 py-0.5 text-xs font-medium text-gray-700 w-fit rounded-full bg-green-500/10">
            <span className="h-1.5 w-1.5 rounded-full  bg-green-500" />
            {status}
        </Badge>
    )
}