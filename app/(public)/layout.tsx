import Footer from "./_component/footer";
import Header from "./_component/header";



export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div
        >
            <Header />
            {children}
            <Footer />
        </div>
    );
}
