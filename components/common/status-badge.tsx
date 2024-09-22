export type AllStatusType = "DRAFT" | "PENDING" | "APPROVED" | "REJECTED" | "ACTIVE" | "ARCHIVED"

const statusStyles: Record<AllStatusType, string> = {
    DRAFT: "bg-yellow-100 text-yellow-800",
    PENDING: "bg-orange-100 text-orange-800",
    APPROVED: "bg-green-100 text-green-800",
    REJECTED: "bg-red-100 text-red-800",
    ACTIVE: "bg-blue-100 text-blue-800",
    ARCHIVED: "bg-gray-100 text-gray-800"
}
export function StatusBadge({ status }: { status: AllStatusType }) {
    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium lowercase ${statusStyles[status]}`}>
            {status}
        </span>
    )
}