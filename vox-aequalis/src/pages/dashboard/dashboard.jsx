"use client"

import { AppSidebar } from "@/components/elements/app-sidebar"
import {ChartAreaInteractive} from "@/components/elements/chart-area-interactive"
import { SiteHeader } from "@/components/elements/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import { GraphCards } from "@/components/elements/graphs"
import CommunityForum from "@/components/elements/community-forum"

export default function Dashboard() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "400px"
        }
      }>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <GraphCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-4">
                <CommunityForum />
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
