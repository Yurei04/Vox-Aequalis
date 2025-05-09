
import VoxAI from "@/pages/chat-bot/VoxAI";
import Dashboard from "@/pages/dashboard/dashboard";
import Homepage from "@/pages/homepage/home";
import ResearchHub from "@/pages/research-hub/research-hub";
import AppSidebarMain from "@/components/elements/app-sidebar-main"
import { SiteHeader } from "@/components/elements/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import Footer from "@/pages/footer";

export default function Home() {
  return (
    <>
      <SidebarProvider

      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)"
        }
      }>
      <AppSidebarMain variant="inset" />
        <SidebarInset>
          <SiteHeader />
               <div className="flex flex-col gap-10 justify-between ">
               <Homepage />
                <br />
                <ResearchHub />
                <br />
                <Dashboard />
                <br />
                <VoxAI />
                <br/>
                <Footer/>
               </div>
      </SidebarInset>
    </SidebarProvider>
    </>
  );
}
