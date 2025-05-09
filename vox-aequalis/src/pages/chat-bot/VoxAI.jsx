"use client"

import ChatBotAI from "@/components/elements/chat-bot";
import AppSidebarMain from "@/components/elements/app-sidebar-main"
import { SiteHeader } from "@/components/elements/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function VoxAI () {
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
                <ChatBotAI />
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    )
}