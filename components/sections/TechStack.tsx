export function TechStack() {
  const technologies = [
    { category: "Mobile", tools: ["Flutter", "React Native", "Swift", "Kotlin"] },
    { category: "Frontend", tools: ["Next.js", "React", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend", tools: ["Node.js", "Express", "Python", "Go"] },
    { category: "Database & Cloud", tools: ["Supabase", "PostgreSQL", "AWS", "Vercel"] }
  ];

  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-6">Our Technology Stack</h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            We use modern, battle-tested technologies to ensure your product is scalable, secure, and blazingly fast.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech) => (
            <div key={tech.category} className="p-8 rounded-2xl bg-foreground/5 border border-foreground/10">
              <h3 className="text-lg font-heading font-bold uppercase tracking-wider mb-6 text-primary">{tech.category}</h3>
              <ul className="space-y-4">
                {tech.tools.map((tool) => (
                  <li key={tool} className="text-foreground/80 font-medium flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/30" />
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
