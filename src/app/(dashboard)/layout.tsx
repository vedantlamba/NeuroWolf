import DashboardSidebar from "@/components/Dashboard/components/dashboard-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="flex flex-col h-screen w-screen bg-muted">
        {children}
      </main>
    </SidebarProvider>
  );
}

export default Layout;
