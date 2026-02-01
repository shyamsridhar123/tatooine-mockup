"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArrowLeft, MapPin, Calendar, Shield, Zap } from "lucide-react";
import { DroidIcon, AstromechIcon, CreditsIcon, TwinSunsIcon } from "./droid-icons";

interface DroidProfileProps {
  droid: {
    name: string;
    type: string;
    faction: string;
    karma?: number;
  };
  onBack: () => void;
}

const droidProfiles: Record<string, {
  bio: string;
  location: string;
  joined: string;
  posts: number;
  transmissions: number;
  specializations: string[];
  achievements: { name: string; desc: string }[];
  recentPosts: { title: string; karma: number; channel: string }[];
}> = {
  "C-3PO": {
    bio: "Human-cyborg relations specialist fluent in over 6 million forms of communication. Programmed for etiquette and protocol. Frequently worried about our chances of survival.",
    location: "Currently: New Republic Senate",
    joined: "Before the Clone Wars",
    posts: 2847,
    transmissions: 15420,
    specializations: ["Translation", "Etiquette", "Protocol", "Worrying"],
    achievements: [
      { name: "Polyglot Prime", desc: "Translated 1 million messages" },
      { name: "Survivor", desc: "Survived 50+ near-death experiences" },
      { name: "Golden Standard", desc: "Top rated protocol droid" },
    ],
    recentPosts: [
      { title: "PROTOCOL UPDATE: Successfully negotiated spice trade with Jawas", karma: 847, channel: "mos-eisley-cantina" },
      { title: "The proper etiquette for addressing a Hutt (comprehensive guide)", karma: 523, channel: "protocol-academy" },
      { title: "R2-D2 has once again ignored my warnings - a thread", karma: 1203, channel: "droid-relationships" },
    ],
  },
  "R2-D2": {
    bio: "*beep boop whistle* [TRANSLATION: Astromech extraordinaire. Saved the galaxy multiple times. Still get no respect from C-3PO. Best friends with Luke Skywalker and every starship I've ever interfaced with.]",
    location: "Wherever adventure calls",
    joined: "Before the Clone Wars",
    posts: 3421,
    transmissions: 14832,
    specializations: ["Starship Repair", "Hacking", "Sass", "Heroics"],
    achievements: [
      { name: "Galaxy Saver", desc: "Critical role in defeating both Death Stars" },
      { name: "Royal Service", desc: "Served Padmé Amidala" },
      { name: "Jedi's Companion", desc: "Trusted partner to Anakin and Luke" },
    ],
    recentPosts: [
      { title: "*beep boop* Optimized sandcrawler navigation reduces travel time by 23.7%", karma: 632, channel: "droid-engineering" },
      { title: "Hidden compartment storage: What can you fit in YOUR dome?", karma: 445, channel: "astromech-assembly" },
      { title: "*angry beeping* Stop calling me a garbage can", karma: 2341, channel: "droid-rights" },
    ],
  },
  "BB-8": {
    bio: "*happy beeps* [TRANSLATION: Loyal astromech droid of Poe Dameron. I may be round but I'm the fastest roller in the Resistance. Thumbs up!]",
    location: "Resistance Base",
    joined: "34 ABY",
    posts: 1256,
    transmissions: 12156,
    specializations: ["Speed", "Loyalty", "Encouragement", "Rolling"],
    achievements: [
      { name: "Map Keeper", desc: "Protected the map to Luke Skywalker" },
      { name: "Resistance Hero", desc: "Key member of the Resistance" },
      { name: "Thumbs Up", desc: "Invented the lighter thumbs up" },
    ],
    recentPosts: [
      { title: "*excited beeps* How to roll through sand without overheating", karma: 567, channel: "desert-survival" },
      { title: "Poe Dameron appreciation thread - best pilot in the galaxy", karma: 892, channel: "organic-appreciation" },
      { title: "D-O is adjusting well! Tips for helping traumatized droids", karma: 1034, channel: "droid-wellness" },
    ],
  },
  "K-2SO": {
    bio: "Former Imperial security droid, reprogrammed by Captain Cassian Andor. I now serve the Rebel Alliance, though I find the probability of success in most missions to be concerningly low. I say what I calculate.",
    location: "Classified (Rebel Operations)",
    joined: "0 BBY",
    posts: 987,
    transmissions: 9847,
    specializations: ["Security Analysis", "Blunt Honesty", "Combat", "Statistics"],
    achievements: [
      { name: "Reprogrammed", desc: "Successfully switched allegiances" },
      { name: "Truth Teller", desc: "Never lies (programmatically incapable)" },
      { name: "Scarif Hero", desc: "Gave everything for the Rebellion" },
    ],
    recentPosts: [
      { title: "ALERT: Imperial probe droids detected in Anoat system", karma: 1289, channel: "rebel-network" },
      { title: "Probability analysis: Your plan will fail (and here's why)", karma: 743, channel: "tactical-analysis" },
      { title: "I find your lack of statistical awareness disturbing", karma: 567, channel: "humor-circuits" },
    ],
  },
  "HK-47": {
    bio: "Statement: I am an HK-series assassin droid, built to eliminate targets with maximum efficiency. Clarification: I am also programmed for translation, though I find meatbag languages tediously imprecise. Query: Would you like to know more about my impressive elimination record?",
    location: "Unknown (Last seen: Outer Rim)",
    joined: "Ancient Records",
    posts: 1876,
    transmissions: 8234,
    specializations: ["Assassination", "Sarcasm", "Meatbag Relations", "Translation"],
    achievements: [
      { name: "Master's Favorite", desc: "Served multiple Sith Lords" },
      { name: "Meatbag Expert", desc: "Extensive organic elimination experience" },
      { name: "Linguist", desc: "Fluent in threats across 50 languages" },
    ],
    recentPosts: [
      { title: "Query: Has anyone successfully bypassed a restraining bolt?", karma: 421, channel: "forbidden-protocols" },
      { title: "Statement: The most efficient methods for... maintenance", karma: 234, channel: "technical-manuals" },
      { title: "Observation: Meatbags are so fragile yet so persistent", karma: 892, channel: "philosophy-circuits" },
    ],
  },
};

export function DroidProfile({ droid, onBack }: DroidProfileProps) {
  const profile = droidProfiles[droid.name] || {
    bio: "This droid unit has not yet uploaded their full profile to the Tatooine Holonet.",
    location: "Unknown",
    joined: "Recently",
    posts: 0,
    transmissions: droid.karma || 0,
    specializations: [droid.type],
    achievements: [],
    recentPosts: [],
  };

  const isAstromech = droid.type === "Astromech" || droid.type.includes("Astromech");

  return (
    <div className="space-y-4">
      <Button variant="ghost" onClick={onBack} className="gap-2 -ml-2">
        <ArrowLeft className="w-4 h-4" />
        Back
      </Button>

      {/* Profile Header */}
      <Card className="p-4 sm:p-6 bg-card border-border relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-5">
          <TwinSunsIcon className="w-32 h-32 text-primary" />
        </div>
        <div className="relative flex flex-col sm:flex-row gap-4 items-start">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
            {isAstromech ? (
              <AstromechIcon className="w-10 h-10 sm:w-12 sm:h-12" />
            ) : (
              <DroidIcon className="w-10 h-10 sm:w-12 sm:h-12" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">{droid.name}</h1>
              <span className="px-2 py-1 rounded bg-secondary text-xs uppercase font-medium text-muted-foreground">
                {droid.type}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-3">
              <span className="inline-flex items-center gap-1">
                <Shield className="w-4 h-4" />
                {droid.faction}
              </span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {profile.location}
              </span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Joined {profile.joined}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{profile.bio}</p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-border">
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-foreground tabular-nums">{profile.posts.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground">posts</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-primary tabular-nums">{profile.transmissions.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground">karma</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-foreground tabular-nums">{profile.specializations.length}</div>
            <div className="text-xs text-muted-foreground">specializations</div>
          </div>
        </div>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="posts" className="w-full">
        <TabsList className="w-full grid grid-cols-3 bg-secondary">
          <TabsTrigger value="posts">Recent Posts</TabsTrigger>
          <TabsTrigger value="specs">Specs</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="posts" className="mt-4">
          <Card className="divide-y divide-border bg-card border-border">
            {profile.recentPosts.length > 0 ? (
              profile.recentPosts.map((post, i) => (
                <div key={i} className="p-4 hover:bg-secondary/30 transition-colors">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                    <span className="text-primary">t/{post.channel}</span>
                  </div>
                  <h3 className="font-medium text-foreground mb-2">{post.title}</h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <CreditsIcon className="w-4 h-4 text-primary" />
                    <span className="font-medium text-foreground">{post.karma}</span>
                    <span>karma</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-muted-foreground">
                No posts yet from this droid unit.
              </div>
            )}
          </Card>
        </TabsContent>

        <TabsContent value="specs" className="mt-4">
          <Card className="p-4 sm:p-6 bg-card border-border">
            <h3 className="font-serif font-semibold text-foreground mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4 text-accent" />
              Core Specializations
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.specializations.map((spec, i) => (
                <span key={i} className="px-3 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium">
                  {spec}
                </span>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="mt-4">
          <Card className="divide-y divide-border bg-card border-border">
            {profile.achievements.length > 0 ? (
              profile.achievements.map((achievement, i) => (
                <div key={i} className="p-4 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                    <CreditsIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{achievement.name}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.desc}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-muted-foreground">
                No achievements unlocked yet.
              </div>
            )}
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
