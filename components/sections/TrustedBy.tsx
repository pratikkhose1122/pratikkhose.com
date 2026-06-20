"use client";

const projects = [
  { name: "MyGymBook", industry: "Fitness Tech", icon: "/icons/mygymbook.webp" },
  { name: "IPO Tracker", industry: "FinTech", icon: "/icons/ipo-tracker.jpeg" },
  { name: "MCCD App", industry: "HealthTech", icon: "/icons/mccd-app.jpeg" },
  // Duplicate for seamless infinite scroll
  { name: "MyGymBook", industry: "Fitness Tech", icon: "/icons/mygymbook.webp" },
  { name: "IPO Tracker", industry: "FinTech", icon: "/icons/ipo-tracker.jpeg" },
  { name: "MCCD App", industry: "HealthTech", icon: "/icons/mccd-app.jpeg" },
];

export function TrustedBy() {
  return (
    <section className="py-20 border-y border-border bg-foreground/[0.02] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <p className="text-sm font-semibold text-foreground/50 uppercase tracking-widest">
          Products We&apos;ve Shipped
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="absolute inset-y-0 left-0 w-32 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap py-4 items-center">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center px-8 md:px-12 mx-4"
            >
              <div className="flex items-center gap-5 cursor-pointer opacity-85 hover:opacity-100 transition-all duration-300 hover:scale-[1.02]">
                <div className="w-[72px] h-[72px] md:w-[80px] md:h-[80px] rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-black/5 dark:border-white/10 shrink-0 bg-background flex items-center justify-center transform-gpu">
                  <img 
                    src={project.icon} 
                    alt={`${project.name} Icon`} 
                    className="w-full h-full object-cover scale-[1.01]" 
                  />
                </div>
                <div className="flex flex-col gap-0.5 items-start">
                  <span className="text-xl md:text-2xl font-heading font-bold text-foreground tracking-tight">
                    {project.name}
                  </span>
                  <span className="text-sm font-sans tracking-wide text-muted-foreground font-medium">
                    {project.industry}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
