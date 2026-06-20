import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black text-white/70 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="font-heading font-bold text-2xl text-white tracking-tight block mb-4">
              BuildYourWay<span className="text-primary">.</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed mb-6">
              We help startups and businesses transform ideas into scalable mobile apps, web platforms, and custom software solutions.
            </p>
            <div className="space-y-2 text-sm text-white/60">
              <p><a href="mailto:buildyourway.studio@gmail.com" className="hover:text-white transition-colors">buildyourway.studio@gmail.com</a></p>
            </div>
          </div>
          <div>
            <h4 className="text-white font-heading font-semibold mb-4 uppercase tracking-wider text-xs">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services#mobile-app" className="hover:text-white transition-colors">Mobile App Development</Link></li>
              <li><Link href="/services#startup-mvp" className="hover:text-white transition-colors">Startup & MVP Development</Link></li>
              <li><Link href="/services#custom-software" className="hover:text-white transition-colors">Custom Software</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">View All Services</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-heading font-semibold mb-4 uppercase tracking-wider text-xs">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/projects" className="hover:text-white transition-colors">Our Work</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><a href="https://cal.com/buildyourway" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-primary font-medium">Schedule Call</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} BuildYourWay. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="https://www.linkedin.com/company/buildyourway" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://twitter.com/buildyourway" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
