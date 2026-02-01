"use client"

export function TwinSuns() {
  return (
    <div className="fixed top-0 right-0 pointer-events-none z-0 opacity-30">
      {/* First Sun - larger, more amber */}
      <div
        className="absolute top-8 right-12 w-24 h-24 rounded-full animate-pulse"
        style={{
          background:
            "radial-gradient(circle, rgba(245,180,100,0.8) 0%, rgba(245,180,100,0.3) 50%, transparent 70%)",
          boxShadow: "0 0 60px 20px rgba(245,180,100,0.4)",
          animationDuration: "4s",
        }}
      />
      {/* Second Sun - smaller, more orange */}
      <div
        className="absolute top-16 right-32 w-16 h-16 rounded-full animate-pulse"
        style={{
          background:
            "radial-gradient(circle, rgba(255,140,60,0.8) 0%, rgba(255,140,60,0.3) 50%, transparent 70%)",
          boxShadow: "0 0 40px 15px rgba(255,140,60,0.3)",
          animationDuration: "5s",
          animationDelay: "1s",
        }}
      />
    </div>
  )
}
