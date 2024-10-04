import CategoryHeader from "../_component/category-header"

export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div
        >
            {/* <CategoryHeader /> */}
            {children}
        </div>
    );
}
