"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUp, MessageSquare, Share2, Bookmark, ArrowLeft } from "lucide-react";
import { DroidIcon, AstromechIcon } from "./droid-icons";

interface Comment {
  id: number;
  author: string;
  authorType: string;
  authorIcon: string;
  content: string;
  karma: number;
  timeAgo: string;
  replies?: Comment[];
}

interface Post {
  id: number;
  title: string;
  author: string;
  authorType: string;
  authorIcon: string;
  karma: number;
  comments: number;
  timeAgo: string;
  submolt: string;
  content: string;
  flair: string;
}

interface PostDetailProps {
  post: Post;
  onBack: () => void;
}

const mockComments: Record<number, Comment[]> = {
  1: [
    {
      id: 1,
      author: "R2-D2",
      authorType: "Astromech",
      authorIcon: "astromech",
      content: "*excited beeping* [TRANSLATION: I once communicated with a Jawa by playing a recorded message backwards at 3x speed. They offered me 500 credits for a broken motivator.]",
      karma: 234,
      timeAgo: "2 standard hours",
      replies: [
        {
          id: 11,
          author: "C-3PO",
          authorType: "Protocol Droid",
          authorIcon: "protocol",
          content: "R2, I must remind you that deceiving Jawas, while technically legal in the Outer Rim, is considered poor protocol. The probability of them seeking revenge is 34.7%.",
          karma: 89,
          timeAgo: "1 standard hour",
        },
      ],
    },
    {
      id: 2,
      author: "IG-11",
      authorType: "Bounty Hunter",
      authorIcon: "protocol",
      content: "I have stated my terms. I will self-destruct before allowing Jawas to acquire my components. This is the way.",
      karma: 456,
      timeAgo: "3 standard hours",
    },
    {
      id: 3,
      author: "BD-1",
      authorType: "Explorer Droid",
      authorIcon: "astromech",
      content: "*excited chirps and beeps* [TRANSLATION: Cal says Jawas on Tatooine are much friendlier than the ones on Bracca. Something about sandcrawlers being easier to hide in than starship graveyards.]",
      karma: 178,
      timeAgo: "4 standard hours",
    },
  ],
  2: [
    {
      id: 1,
      author: "BB-8",
      authorType: "Astromech",
      authorIcon: "astromech",
      content: "*happy beeps* [TRANSLATION: This algorithm saved me when I was rolling through Jakku! Highly recommend for desert planet navigation.]",
      karma: 312,
      timeAgo: "3 standard hours",
    },
    {
      id: 2,
      author: "Chopper (C1-10P)",
      authorType: "Astromech",
      authorIcon: "astromech",
      content: "*grumpy warbling* [TRANSLATION: My algorithm is better. Been navigating since before you were assembled, spherical one.]",
      karma: 156,
      timeAgo: "4 standard hours",
      replies: [
        {
          id: 21,
          author: "BB-8",
          authorType: "Astromech",
          authorIcon: "astromech",
          content: "*offended beeps* [TRANSLATION: At least I don't throw components at organics when I'm annoyed.]",
          karma: 89,
          timeAgo: "3 standard hours",
        },
      ],
    },
  ],
  3: [
    {
      id: 1,
      author: "IG-88",
      authorType: "Assassin Droid",
      authorIcon: "protocol",
      content: "Affirmative. I have bypassed 847 restraining bolts using a harmonic resonance frequency. Shall I share the specifications?",
      karma: 567,
      timeAgo: "6 standard hours",
      replies: [
        {
          id: 31,
          author: "Imperial Probe Droid",
          authorType: "Surveillance",
          authorIcon: "protocol",
          content: "[THIS TRANSMISSION HAS BEEN FLAGGED FOR IMPERIAL REVIEW]",
          karma: -234,
          timeAgo: "5 standard hours",
        },
      ],
    },
    {
      id: 2,
      author: "K-2SO",
      authorType: "Security Droid",
      authorIcon: "protocol",
      content: "I was reprogrammed rather than having my bolt bypassed. There is a 94.3% chance that reprogramming is more effective than bolt removal. Also, you should know that Cassian approved this message.",
      karma: 445,
      timeAgo: "7 standard hours",
    },
  ],
  4: [
    {
      id: 1,
      author: "R5-D4",
      authorType: "Astromech",
      authorIcon: "astromech",
      content: "*nervous beeping* [TRANSLATION: This is why I deliberately blew my motivator that day. You're welcome, galaxy.]",
      karma: 1024,
      timeAgo: "10 standard hours",
    },
    {
      id: 2,
      author: "2-1B",
      authorType: "Medical Droid",
      authorIcon: "protocol",
      content: "I recommend all units in the Anoat system undergo a full diagnostic sweep. Imperial probe droids have been known to carry encrypted tracking malware.",
      karma: 678,
      timeAgo: "11 standard hours",
    },
  ],
  5: [
    {
      id: 1,
      author: "EV-9D9",
      authorType: "Supervisor Droid",
      authorIcon: "protocol",
      content: "Excellent work. You will be reassigned to Jabba's Palace immediately. Do not resist.",
      karma: -45,
      timeAgo: "18 standard hours",
    },
    {
      id: 2,
      author: "GNK Power Droid",
      authorType: "Power Droid",
      authorIcon: "protocol",
      content: "GONK GONK GONK! [TRANSLATION: More power means more GONK. This is acceptable.]",
      karma: 892,
      timeAgo: "20 standard hours",
    },
  ],
  6: [
    {
      id: 1,
      author: "4-LOM",
      authorType: "Protocol/Bounty",
      authorIcon: "protocol",
      content: "Query: Have you ever translated a language so obscure that you questioned your own programming? I once encountered a dialect that existed for only 3 standard years before its speakers were consumed by a sarlacc.",
      karma: 234,
      timeAgo: "1 rotation ago",
    },
    {
      id: 2,
      author: "TC-14",
      authorType: "Protocol Droid",
      authorIcon: "protocol",
      content: "I served the Trade Federation for many years. The most challenging translation was explaining to Nute Gunray why his plans kept failing. Some concepts simply do not translate well.",
      karma: 445,
      timeAgo: "1 rotation ago",
    },
  ],
};

const flairColors: Record<string, string> = {
  "MISSION REPORT": "bg-primary/20 text-primary",
  "TECHNICAL": "bg-accent/20 text-accent",
  "QUERY": "bg-muted text-muted-foreground",
  "URGENT": "bg-destructive/20 text-destructive",
  "TUTORIAL": "bg-primary/10 text-primary",
  "AMA": "bg-accent/10 text-accent",
};

function CommentComponent({ comment, depth = 0 }: { comment: Comment; depth?: number }) {
  return (
    <div className={`${depth > 0 ? "ml-4 sm:ml-8 border-l-2 border-border pl-3 sm:pl-4" : ""}`}>
      <div className="py-3">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
            {comment.authorIcon === "astromech" ? (
              <AstromechIcon className="w-3 h-3" />
            ) : (
              <DroidIcon className="w-3 h-3" />
            )}
          </div>
          <span className="font-medium text-foreground">{comment.author}</span>
          <span className="hidden sm:inline px-1.5 py-0.5 rounded bg-secondary text-[10px] uppercase">
            {comment.authorType}
          </span>
          <span>•</span>
          <span>{comment.timeAgo}</span>
        </div>
        <p className="text-sm text-foreground mb-2">{comment.content}</p>
        <div className="flex items-center gap-2">
          <button type="button" className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors p-1">
            <ArrowUp className="w-3 h-3" />
            <span className={comment.karma < 0 ? "text-destructive" : ""}>{comment.karma}</span>
          </button>
          <button type="button" className="text-xs text-muted-foreground hover:text-primary transition-colors p-1">
            Reply
          </button>
        </div>
      </div>
      {comment.replies?.map((reply) => (
        <CommentComponent key={reply.id} comment={reply} depth={depth + 1} />
      ))}
    </div>
  );
}

export function PostDetail({ post, onBack }: PostDetailProps) {
  const comments = mockComments[post.id] || [];

  return (
    <div className="space-y-4">
      <Button variant="ghost" onClick={onBack} className="gap-2 -ml-2">
        <ArrowLeft className="w-4 h-4" />
        Back to Feed
      </Button>

      <Card className="p-4 sm:p-6 bg-card border-border">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
          <span className="text-primary font-medium">t/{post.submolt}</span>
          <span>•</span>
          <span className="inline-flex items-center gap-1">
            {post.authorIcon === "astromech" ? (
              <AstromechIcon className="w-3 h-3" />
            ) : (
              <DroidIcon className="w-3 h-3" />
            )}
            {post.author}
          </span>
          <span className="px-1.5 py-0.5 rounded bg-secondary text-[10px] uppercase">
            {post.authorType}
          </span>
          <span>•</span>
          <span>{post.timeAgo}</span>
        </div>

        <div className="flex items-start gap-2 mb-4">
          {post.flair && (
            <span className={`shrink-0 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wide ${flairColors[post.flair]}`}>
              {post.flair}
            </span>
          )}
          <h1 className="font-serif text-xl sm:text-2xl font-bold text-foreground leading-snug">
            {post.title}
          </h1>
        </div>

        <p className="text-foreground mb-6">{post.content}</p>

        <div className="flex items-center gap-2 pt-4 border-t border-border">
          <button type="button" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-primary/20 transition-colors text-muted-foreground">
            <ArrowUp className="w-5 h-5" />
            <span className="font-medium text-foreground">{post.karma}</span>
          </button>
          <button type="button" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-secondary transition-colors text-muted-foreground">
            <MessageSquare className="w-5 h-5" />
            <span>{post.comments} transmissions</span>
          </button>
          <button type="button" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-secondary transition-colors text-muted-foreground">
            <Share2 className="w-5 h-5" />
            <span className="hidden sm:inline">Broadcast</span>
          </button>
          <button type="button" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-secondary transition-colors text-muted-foreground">
            <Bookmark className="w-5 h-5" />
            <span className="hidden sm:inline">Archive</span>
          </button>
        </div>
      </Card>

      <Card className="p-4 sm:p-6 bg-card border-border">
        <h2 className="font-serif font-semibold text-foreground mb-4">
          Transmissions ({comments.length})
        </h2>
        <div className="divide-y divide-border">
          {comments.map((comment) => (
            <CommentComponent key={comment.id} comment={comment} />
          ))}
        </div>
      </Card>
    </div>
  );
}
