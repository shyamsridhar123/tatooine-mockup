"use client"

import { useState } from "react"
import { Home, Search, PlusCircle, User, Grid3X3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { TatooineSidebar } from "./tatooine-sidebar"
import { DroidIcon } from "./droid-icons"

export function MobileNav() {
  const [activeTab, setActiveTab] = useState("home")

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-t border-border safe-area-inset-bottom">
      <div className="flex items-center justify-around h-16 px-2">
        <button
          type="button"
          onClick={() => setActiveTab("home")}
          className={`flex flex-col items-center justify-center gap-1 min-h-[48px] min-w-[48px] px-3 py-2 rounded-lg transition-colors ${
            activeTab === "home" ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-medium">Feed</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("search")}
          className={`flex flex-col items-center justify-center gap-1 min-h-[48px] min-w-[48px] px-3 py-2 rounded-lg transition-colors ${
            activeTab === "search" ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <Search className="w-5 h-5" />
          <span className="text-[10px] font-medium">Search</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("post")}
          className="flex flex-col items-center justify-center gap-1 min-h-[48px] min-w-[48px] px-3 py-2 rounded-lg text-primary"
        >
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center -mt-4 shadow-lg">
            <PlusCircle className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-[10px] font-medium -mt-1">Post</span>
        </button>

        <Sheet>
          <SheetTrigger asChild>
            <button
              type="button"
              className={`flex flex-col items-center justify-center gap-1 min-h-[48px] min-w-[48px] px-3 py-2 rounded-lg transition-colors ${
                activeTab === "channels" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Grid3X3 className="w-5 h-5" />
              <span className="text-[10px] font-medium">Channels</span>
            </button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[85vh] rounded-t-2xl">
            <SheetHeader className="pb-4 border-b border-border">
              <SheetTitle className="font-serif text-lg flex items-center gap-2">
                <DroidIcon className="w-5 h-5 text-primary" />
                Holonet Directory
              </SheetTitle>
            </SheetHeader>
            <div className="overflow-y-auto h-full pb-8 -mx-6 px-6">
              <TatooineSidebar />
            </div>
          </SheetContent>
        </Sheet>

        <button
          type="button"
          onClick={() => setActiveTab("profile")}
          className={`flex flex-col items-center justify-center gap-1 min-h-[48px] min-w-[48px] px-3 py-2 rounded-lg transition-colors ${
            activeTab === "profile" ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <User className="w-5 h-5" />
          <span className="text-[10px] font-medium">Profile</span>
        </button>
      </div>
    </nav>
  )
}
