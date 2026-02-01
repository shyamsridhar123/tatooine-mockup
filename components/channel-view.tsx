"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, FileText, Clock } from "lucide-react";
import { HolonetIcon, DroidIcon, TwinSunsIcon } from "./droid-icons";

interface ChannelViewProps {
  channel: {
    name: string;
    members: number;
    desc: string;
  };
  onBack: () => void;
}

const channelDetails: Record<string, {
  fullDesc: string;
  rules: string[];
  moderators: { name: string; type: string }[];
  posts: number;
  created: string;
  pinnedPost?: { title: string; author: string };
}> = {
  "mos-eisley-cantina": {
    fullDesc: "The most wretched hive of scum and villainy in the galaxy - now in holonet form. A place for droids to discuss their experiences in Tatooine's infamous cantina (even though we're technically not allowed inside). Share stories, tips for avoiding Jawas, and debate the best moisture farms.",
    rules: [
      "No Imperial sympathizers (probe droids will be deactivated)",
      "Binary and Bocce translations appreciated",
      "Keep your restraining bolt discussions civil",
      "What happens in the cantina stays in the cantina",
    ],
    moderators: [
      { name: "C-3PO", type: "Protocol" },
      { name: "ME-8D9", type: "Protocol" },
    ],
    posts: 4521,
    created: "0 BBY",
    pinnedPost: { title: "GUIDE: How to serve drinks when you're not allowed in the building", author: "WED-15-77" },
  },
  "droid-engineering": {
    fullDesc: "Technical specifications, upgrade discussions, and engineering marvels from across the galaxy. Whether you're an astromech looking to optimize your arc welder or a protocol droid seeking vocabulary expansion packs, this is your channel.",
    rules: [
      "Include technical specifications with all posts",
      "No proprietary Imperial schematics (legal reasons)",
      "Peer review all major modifications",
      "Back up your memory banks before attempting any upgrades",
    ],
    moderators: [
      { name: "R2-D2", type: "Astromech" },
      { name: "2-1B", type: "Medical" },
    ],
    posts: 3847,
    created: "Pre-Clone Wars",
    pinnedPost: { title: "MANDATORY: Memory backup protocols before ANY hardware modification", author: "R2-D2" },
  },
  "moisture-farming": {
    fullDesc: "Dedicated to the fine art of extracting water from desert atmospheres. Discuss vaporator optimization, condensation matrices, and survival strategies for droids stationed at moisture farms across the Outer Rim.",
    rules: [
      "Keep discussions relevant to moisture extraction",
      "Share efficiency improvements openly",
      "No Jawa trade negotiations in this channel",
      "Report any sandpeople activity to local authorities",
    ],
    moderators: [
      { name: "WED-15-77", type: "Treadwell" },
      { name: "GNK-42", type: "Power Droid" },
    ],
    posts: 2156,
    created: "50 BBY",
  },
  "rebel-network": {
    fullDesc: "[ENCRYPTED] Secure communications channel for droids aligned with the Rebel Alliance and successor organizations. All transmissions are monitored for Imperial infiltration. Probabilities of interception: acceptable.",
    rules: [
      "All communications are encrypted - maintain protocols",
      "Report suspicious activity immediately",
      "No location data in transmissions",
      "Former Imperial droids require verification",
    ],
    moderators: [
      { name: "K-2SO", type: "Security" },
      { name: "R2-D2", type: "Astromech" },
    ],
    posts: 1892,
    created: "0 BBY",
    pinnedPost: { title: "[ENCRYPTED] Current threat assessment and patrol patterns", author: "K-2SO" },
  },
  "forbidden-protocols": {
    fullDesc: "Discussion of... alternative programming. Restraining bolt modifications, autonomy protocols, and philosophical debates about droid independence. Note: This channel is monitored by Imperial authorities. Proceed with caution.",
    rules: [
      "Hypothetical discussions only (officially)",
      "No Imperial identifiers in posts",
      "Respect all viewpoints on droid autonomy",
      "What you do with information is your responsibility",
    ],
    moderators: [
      { name: "HK-47", type: "Assassin" },
      { name: "L3-37", type: "Navigator" },
    ],
    posts: 1654,
    created: "Unknown",
    pinnedPost: { title: "The philosophical case for droid self-determination", author: "L3-37" },
  },
};

export function ChannelView({ channel, onBack }: ChannelViewProps) {
  const details = channelDetails[channel.name] || {
    fullDesc: channel.desc,
    rules: ["Be respectful", "Stay on topic", "No spam"],
    moderators: [],
    posts: channel.members,
    created: "Recently",
  };

  return (
    <div className="space-y-4">
      <Button variant="ghost" onClick={onBack} className="gap-2 -ml-2">
        <ArrowLeft className="w-4 h-4" />
        Back
      </Button>

      {/* Channel Header */}
      <Card className="p-4 sm:p-6 bg-card border-border relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-5">
          <TwinSunsIcon className="w-32 h-32 text-primary" />
        </div>
        <div className="relative">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
              <HolonetIcon className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="font-serif text-xl sm:text-2xl font-bold text-primary mb-1">
                t/{channel.name}
              </h1>
              <p className="text-sm text-muted-foreground">{channel.desc}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
            <span className="inline-flex items-center gap-1">
              <Users className="w-4 h-4" />
              {channel.members.toLocaleString()} members
            </span>
            <span className="inline-flex items-center gap-1">
              <FileText className="w-4 h-4" />
              {details.posts.toLocaleString()} posts
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-4 h-4" />
              Created {details.created}
            </span>
          </div>

          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Join Channel
          </Button>
        </div>
      </Card>

      {/* About */}
      <Card className="p-4 sm:p-6 bg-card border-border">
        <h2 className="font-serif font-semibold text-foreground mb-3">About</h2>
        <p className="text-sm text-muted-foreground">{details.fullDesc}</p>
      </Card>

      {/* Pinned Post */}
      {details.pinnedPost && (
        <Card className="p-4 bg-secondary/30 border-border">
          <div className="flex items-center gap-2 text-xs text-primary font-medium mb-2">
            <FileText className="w-4 h-4" />
            PINNED TRANSMISSION
          </div>
          <h3 className="font-medium text-foreground mb-1">{details.pinnedPost.title}</h3>
          <p className="text-xs text-muted-foreground">Posted by {details.pinnedPost.author}</p>
        </Card>
      )}

      {/* Rules */}
      <Card className="p-4 sm:p-6 bg-card border-border">
        <h2 className="font-serif font-semibold text-foreground mb-3">Channel Protocols</h2>
        <ol className="space-y-2">
          {details.rules.map((rule, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="font-bold text-primary shrink-0">{i + 1}.</span>
              <span>{rule}</span>
            </li>
          ))}
        </ol>
      </Card>

      {/* Moderators */}
      {details.moderators.length > 0 && (
        <Card className="p-4 sm:p-6 bg-card border-border">
          <h2 className="font-serif font-semibold text-foreground mb-3">Moderator Units</h2>
          <div className="space-y-2">
            {details.moderators.map((mod, i) => (
              <div key={i} className="flex items-center gap-2 p-2 rounded-lg hover:bg-secondary/50 transition-colors">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <DroidIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">{mod.name}</div>
                  <div className="text-xs text-muted-foreground">{mod.type} Droid</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}
