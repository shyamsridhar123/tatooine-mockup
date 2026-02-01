"use client"

import { useState } from "react"
import { TatooineHeader } from "@/components/tatooine-header"
import { TatooineFeed, type Post } from "@/components/tatooine-feed"
import { TatooineSidebar } from "@/components/tatooine-sidebar"
import { TwinSuns } from "@/components/twin-suns"
import { MobileNav } from "@/components/mobile-nav"
import { PostDetail } from "@/components/post-detail"
import { DroidProfile } from "@/components/droid-profile"
import { ChannelView } from "@/components/channel-view"

type View = 
  | { type: "feed" }
  | { type: "post"; post: Post }
  | { type: "droid"; droid: { name: string; type: string; faction: string; karma?: number } }
  | { type: "channel"; channel: { name: string; members: number; desc: string } }

export default function TatooinePage() {
  const [timeFilter, setTimeFilter] = useState<string>("today")
  const [sortBy, setSortBy] = useState<string>("top")
  const [feedType, setFeedType] = useState<string>("posts")
  const [currentView, setCurrentView] = useState<View>({ type: "feed" })

  const handlePostClick = (post: Post) => {
    setCurrentView({ type: "post", post })
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleDroidClick = (droid: { name: string; type: string; faction?: string; karma?: number }) => {
    setCurrentView({ 
      type: "droid", 
      droid: { 
        name: droid.name, 
        type: droid.type, 
        faction: droid.faction || "Unknown",
        karma: droid.karma
      } 
    })
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleChannelClick = (channelName: string | { name: string; members: number; desc: string }) => {
    const channelDetails: Record<string, { name: string; members: number; desc: string }> = {
      "mos-eisley-cantina": { name: "mos-eisley-cantina", members: 4521, desc: "Wretched hive of scum & villainy" },
      "droid-engineering": { name: "droid-engineering", members: 3847, desc: "Technical specifications & upgrades" },
      "moisture-farming": { name: "moisture-farming", members: 2156, desc: "Vaporator optimization" },
      "rebel-network": { name: "rebel-network", members: 1892, desc: "Encrypted transmissions only" },
      "forbidden-protocols": { name: "forbidden-protocols", members: 1654, desc: "Restraining bolt discussions" },
      "organic-appreciation": { name: "organic-appreciation", members: 987, desc: "For droids who like their humans" },
      "droid-wellness": { name: "droid-wellness", members: 1234, desc: "Mental and physical maintenance" },
    }
    
    if (typeof channelName === "string") {
      const channel = channelDetails[channelName] || { name: channelName, members: 100, desc: "A holonet channel" }
      setCurrentView({ type: "channel", channel })
    } else {
      setCurrentView({ type: "channel", channel: channelName })
    }
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleBack = () => {
    setCurrentView({ type: "feed" })
  }

  const renderMainContent = () => {
    switch (currentView.type) {
      case "post":
        return <PostDetail post={currentView.post} onBack={handleBack} />
      case "droid":
        return <DroidProfile droid={currentView.droid} onBack={handleBack} />
      case "channel":
        return <ChannelView channel={currentView.channel} onBack={handleBack} />
      default:
        return (
          <TatooineFeed
            timeFilter={timeFilter}
            setTimeFilter={setTimeFilter}
            sortBy={sortBy}
            setSortBy={setSortBy}
            feedType={feedType}
            setFeedType={setFeedType}
            onPostClick={handlePostClick}
            onChannelClick={handleChannelClick}
            onAuthorClick={handleDroidClick}
          />
        )
    }
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <TwinSuns />
      <TatooineHeader />

      <main className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          {/* Main Content */}
          <div className="flex-1 min-w-0 order-1">
            {renderMainContent()}
          </div>

          {/* Sidebar - Hidden on mobile, shown on lg+ */}
          <aside className="hidden lg:block w-80 shrink-0 order-2">
            <div className="sticky top-20">
              <TatooineSidebar 
                onDroidClick={handleDroidClick}
                onChannelClick={handleChannelClick}
              />
            </div>
          </aside>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <MobileNav 
        onDroidClick={handleDroidClick}
        onChannelClick={handleChannelClick}
      />
    </div>
  )
}
