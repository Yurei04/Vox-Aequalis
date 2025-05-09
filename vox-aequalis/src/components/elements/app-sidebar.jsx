"use client"

import * as React from "react"
import { ArchiveX, Command, File, Inbox, Send, Trash2 } from "lucide-react"

import { NavUser } from "@/components/elements/nav-user"
import { Label } from "@/components/ui/label"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Switch } from "@/components/ui/switch"

// This is sample data
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
      isActive: true,
    },
    {
      title: "Drafts",
      url: "#",
      icon: File,
      isActive: false,
    },
    {
      title: "Sent",
      url: "#",
      icon: Send,
      isActive: false,
    },
    {
      title: "Junk",
      url: "#",
      icon: ArchiveX,
      isActive: false,
    },
    {
      title: "Trash",
      url: "#",
      icon: Trash2,
      isActive: false,
    },
  ],
  mails: [
    {
      name: "William Smith",
      email: "williamsmith@example.com",
      subject: "Policy Advocacy Meeting Tomorrow",
      date: "09:34 AM",
      teaser:
        "Hi all, just a reminder about our advocacy strategy meeting tomorrow at 10 AM.\nWe'll review recent legislative updates and align on next steps.",
    },
    {
      name: "Alice Smith",
      email: "alicesmith@example.com",
      subject: "Re: Draft Report on Income Disparity",
      date: "Yesterday",
      teaser:
        "Thanks for sharing the draft. The data is compelling so far.\nLet’s set a call to fine-tune the recommendations before submission.",
    },
    {
      name: "Bob Johnson",
      email: "bobjohnson@example.com",
      subject: "Planning a Community Listening Event",
      date: "2 days ago",
      teaser:
        "I'm organizing a public forum to hear from residents about economic inequality.\nWould you be available to help with logistics or panel outreach?",
    },
    {
      name: "Emily Davis",
      email: "emilydavis@example.com",
      subject: "Re: Budget for Mutual Aid Program",
      date: "2 days ago",
      teaser:
        "I've reviewed the proposal and funding breakdown.\nCan we set up a call to explore ways to maximize impact with our current budget?",
    },
    {
      name: "Michael Wilson",
      email: "michaelwilson@example.com",
      subject: "Urgent: Housing Coalition Briefing",
      date: "1 week ago",
      teaser:
        "Please join Friday’s all-hands session at 3 PM.\nWe’ll cover recent policy changes and mobilize around tenant protection efforts.",
    },
    {
      name: "Sarah Brown",
      email: "sarahbrown@example.com",
      subject: "Re: Feedback on Justice Reform Proposal",
      date: "1 week ago",
      teaser:
        "Thanks for the proposal draft. I’ve added comments regarding community safety sections.\nLet’s meet to align our messaging and data points.",
    },
    {
      name: "David Lee",
      email: "davidlee@example.com",
      subject: "Proposal: Digital Access for Underserved Areas",
      date: "1 week ago",
      teaser:
        "I’ve been brainstorming an initiative to boost digital inclusion in rural areas.\nCan we connect this week to evaluate its feasibility?",
    },
    {
      name: "Olivia Wilson",
      email: "oliviawilson@example.com",
      subject: "Upcoming Personal Leave",
      date: "1 week ago",
      teaser:
        "Just a heads-up—I’ll be on leave for two weeks next month.\nI’ll ensure all outreach and documentation is in place before I go.",
    },
    {
      name: "James Martin",
      email: "jamesmartin@example.com",
      subject: "Re: Conference on Social Equity",
      date: "1 week ago",
      teaser:
        "I’ve confirmed my attendance for the national social equity summit.\nLet me know if you'd like me to present our latest campaign findings.",
    },
    {
      name: "Sophia White",
      email: "sophiawhite@example.com",
      subject: "Community Potluck Invitation",
      date: "1 week ago",
      teaser:
        "To celebrate our progress this quarter, I’d like to host a community potluck.\nLet me know your availability and what you might bring!",
    },
  ]
  
}

export function AppSidebar({
  ...props
}) {
  // Note: I'm using state to show active item.
  // IRL you should use the url/router.
  const [activeItem, setActiveItem] = React.useState(data.navMain[0])
  const [mails, setMails] = React.useState(data.mails)
  const { setOpen } = useSidebar()

  return (
    <Sidebar
      collapsible="icon"
      className="overflow-hidden *:data-[sidebar=sidebar]:flex-row"
      {...props}>
      {/* This is the first sidebar */}
      {/* We disable collapsible and adjust width to icon. */}
      {/* This will make the sidebar appear as icons. */}
      <Sidebar
        collapsible="none"
        className="w-[calc(var(--sidebar-width-icon)+1px)]! border-r">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
                <a href="#">
                  <div
                    className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                    <Command className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">Acme Inc</span>
                    <span className="truncate text-xs">Enterprise</span>
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className="px-1.5 md:px-0">
              <SidebarMenu>
                {data.navMain.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      tooltip={{
                        children: item.title,
                        hidden: false,
                      }}
                      onClick={() => {
                        setActiveItem(item)
                        const mail = data.mails.sort(() => Math.random() - 0.5)
                        setMails(mail.slice(0, Math.max(5, Math.floor(Math.random() * 10) + 1)))
                        setOpen(true)
                      }}
                      isActive={activeItem?.title === item.title}
                      className="px-2.5 md:px-2">
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
      </Sidebar>
      {/* This is the second sidebar */}
      {/* We disable collapsible and let it fill remaining space */}
      <Sidebar collapsible="none" className="hidden flex-1 md:flex">
        <SidebarHeader className="gap-3.5 border-b p-4">
          <div className="flex w-full items-center justify-between">
            <div className="text-foreground text-base font-medium">
              {activeItem?.title}
            </div>
            <Label className="flex items-center gap-2 text-sm">
              <span>Unreads</span>
              <Switch className="shadow-none" />
            </Label>
          </div>
          <SidebarInput placeholder="Type to search..." />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="px-0">
            <SidebarGroupContent>
              {mails.map((mail) => (
                <a
                  href="#"
                  key={mail.email}
                  className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex flex-col items-start gap-2 border-b p-4 text-sm leading-tight whitespace-nowrap last:border-b-0">
                  <div className="flex w-full items-center gap-2">
                    <span>{mail.name}</span>{" "}
                    <span className="ml-auto text-xs">{mail.date}</span>
                  </div>
                  <span className="font-medium">{mail.subject}</span>
                  <span className="line-clamp-2 w-[260px] text-xs whitespace-break-spaces">
                    {mail.teaser}
                  </span>
                </a>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </Sidebar>
  );
}
