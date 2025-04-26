"use client"

import AppSidebarMain from "@/components/elements/app-sidebar-main"
import { SiteHeader } from "@/components/elements/site-header"
import { Button } from "@/components/ui/button"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"
import { motion } from "motion/react"

export default function Homepage() {
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
              <div className="flex flex-col items-center text-center justify-center gap-4 py-4 md:gap-6 md:py-6">
                <motion.div>

                </motion.div>
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    )
}