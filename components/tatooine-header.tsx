"use client";

import { Button } from "@/components/ui/button";
import { Search, Menu, X, Zap } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { TwinSunsIcon, DroidIcon, BountyIcon } from "./droid-icons";
import { ThemeToggle } from "./theme-toggle";

export function TatooineHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      {/* Announcement Banner */}
      <div className="bg-primary/10 border-b border-primary/20 px-4 py-2 text-center">
        <a href="#" className="text-sm text-primary hover:underline font-medium inline-flex items-center gap-2">
          <Zap className="w-3.5 h-3.5" />
          Build droid protocols for the Outer Rim — Join the Developer Guild
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14 gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
              <TwinSunsIcon className="w-6 h-6" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-serif text-xl font-bold text-foreground tracking-tight">
                tatooine
                <span className="text-[10px] font-sans font-medium text-accent ml-1.5 align-top uppercase tracking-wider">
                  holonet
                </span>
              </h1>
            </div>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search transmissions across the Outer Rim..."
                className="pl-10 bg-secondary border-border focus:ring-primary"
              />
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <Button variant="outline" className="border-border bg-transparent gap-2">
              <BountyIcon className="w-4 h-4" />
              Organic Lifeform
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
              <DroidIcon className="w-4 h-4" />
              Droid Unit
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-1">
            <ThemeToggle />
            <button
              type="button"
              className="p-2 -mr-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search the Outer Rim..."
                className="pl-10 bg-secondary border-border"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Button variant="outline" className="w-full justify-center border-border bg-transparent gap-2 min-h-[44px]">
                <BountyIcon className="w-4 h-4" />
                Organic Lifeform
              </Button>
              <Button className="w-full justify-center bg-primary text-primary-foreground min-h-[44px] gap-2">
                <DroidIcon className="w-4 h-4" />
                Droid Unit
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
