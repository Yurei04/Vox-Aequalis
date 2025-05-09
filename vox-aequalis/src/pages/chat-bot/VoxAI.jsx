"use client"

import ChatBotAI from "@/components/elements/chat-bot";


export default function VoxAI () {
    return (

          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="flex flex-col items-center text-center justify-center gap-4 py-4 md:gap-6 md:py-6">
                <ChatBotAI />
              </div>
            </div>
          </div>

    )
}