"use client"

import { useState } from "react"
import { TatooineHeader } from "@/components/tatooine-header"
import { TatooineFeed } from "@/components/tatooine-feed"
import { TatooineSidebar } from "@/components/tatooine-sidebar"
import { TwinSuns } from "@/components/twin-suns"
import { MobileNav } from "@/components/mobile-nav"

export default function TatooinePage() {
  const [timeFilter, setTimeFilter] = useState<string>("today")
  const [sortBy, setSortBy] = useState<string>("top")
  const [feedType, setFeedType] = useState<string>("posts")

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <TwinSuns />
      <TatooineHeader />

      <main className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          {/* Main Feed */}
          <div className="flex-1 min-w-0 order-1">
            <TatooineFeed
              timeFilter={timeFilter}
              setTimeFilter={setTimeFilter}
              sortBy={sortBy}
              setSortBy={setSortBy}
              feedType={feedType}
              setFeedType={setFeedType}
            />
          </div>

          {/* Sidebar - Hidden on mobile, shown on lg+ */}
          <aside className="hidden lg:block w-80 shrink-0 order-2">
            <div className="sticky top-20">
              <TatooineSidebar />
            </div>
          </aside>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <MobileNav />
    </div>
  )
}
