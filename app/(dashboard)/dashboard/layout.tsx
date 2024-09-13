
import { dashboardConfig } from "@/config/dashboard";
import Header from "./_components/header";
import { DashboardNav } from "./_components/side-nav";


interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className=" min-h-screen ">
      <Header />
      <aside className="fixed inset-y-0  hidden w-[250px] flex-col md:flex bg-white  ">
        <DashboardNav items={dashboardConfig.sidebarNav} />
      </aside>
      <main className="fixed  mt-[50px] h-[calc(100vh-50px)] w-full  bg-bgPrimary  sm:ml-[250px] ">
        {children}
      </main>
    </div>
  );
}
