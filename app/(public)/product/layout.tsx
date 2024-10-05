import { Suspense } from "react";
import CategoryHeader from "../_component/category-header"

export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div
        >
            <Suspense fallback={<div></div>}>
                {children}
            </Suspense>
            {/* <CategoryHeader /> */}
        </div>
    );
}
