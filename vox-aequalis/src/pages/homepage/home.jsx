"use client"

import AppSidebarMain from "@/components/elements/app-sidebar-main"
import Homepage from "@/pages/homepage"
import { SiteHeader } from "@/components/elements/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import About from "../about"


export default function HomepageSection() {
    return (

          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="flex flex-col items-center text-center justify-center gap-4 py-4 md:gap-6 md:py-6">
                  <Homepage />
                  <br />
                  <About />
              </div>
            </div>
          </div>

    )
}