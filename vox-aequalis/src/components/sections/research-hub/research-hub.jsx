"use client"

import AppSidebarMain from "@/components/elements/app-sidebar-main"
import { SiteHeader } from "@/components/elements/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import data from "./contents.json"
import {DataResearchTable}   from "@/components/elements/data-table-research"
import ChartAreaInteractiveResearch from "./chart-area-int-research"
import { SectionCardsResearch } from "./section-cards-research"

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
              <SectionCardsResearch />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractiveResearch />
              </div>
              <DataResearchTable data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
    )
}