"use client"


import AppSidebarMain from "@/components/elements/app-sidebar-main"
import ChartAreaInteractive from "@/components/elements/chart-area-interactive"
import { DataTable } from "@/components/elements/data-table"
import { SectionCards } from "@/components/elements/section-cards"
import { SiteHeader } from "@/components/elements/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import data from "./data.json"
import { DataTableResearch } from "@/components/elements/data-table-research"

export default function ResearchHub () {
    return (
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
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTableResearch data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
    )
}