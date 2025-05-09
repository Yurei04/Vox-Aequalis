"use client"

import AppSidebarMain from "@/components/elements/app-sidebar-main"
import { SiteHeader } from "@/components/elements/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import data from "./contents.json"
import {DataResearchTable}   from "@/pages/data-table-research"
import ChartAreaInteractiveResearch from "@/pages/chart-area-int-research"
import { SectionCardsResearch } from "@/pages/section-cards-research"

export default function ResearchHub () {
    return (

        <div className="flex flex-1 flex-col">
            <span className="text-transparent text-5xl bg-clip-text bg-gradient-to-r from-red-600 to-rose-400 mb-5 text-center">
                Dashboard
            </span>
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

    )
}