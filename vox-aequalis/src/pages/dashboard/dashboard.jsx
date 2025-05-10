"use client"

import ChartAreaInteractive from "@/pages/chart-area-interactive"
import  GraphCards  from "@/pages/graphs"
import CommunityForum from "@/pages/community-forum"

export default function Dashboard() {
  return (
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
  );
}
