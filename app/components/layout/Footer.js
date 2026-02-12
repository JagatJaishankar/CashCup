import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white mt-auto">
      <div className="max-w-7xl mx-auto py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl text-white mb-4">Cash Cup</h3>
            <p className="font-body text-sm text-white/60 leading-relaxed">
              Professional football tournament management in Jeddah.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm text-primary mb-4">Quick Links</h4>
            <ul className="space-y-3 font-body text-sm">
              <li>
                <Link href="/events" className="text-white/60 hover:text-primary transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/players" className="text-white/60 hover:text-primary transition-colors">
                  Players
                </Link>
              </li>
              <li>
                <Link href="/teams" className="text-white/60 hover:text-primary transition-colors">
                  Teams
                </Link>
              </li>
            </ul>
          </div>

          {/* For Users */}
          <div>
            <h4 className="font-heading text-sm text-primary mb-4">For Users</h4>
            <ul className="space-y-3 font-body text-sm">
              <li>
                <Link href="/signup" className="text-white/60 hover:text-primary transition-colors">
                  Register as Player
                </Link>
              </li>
              <li>
                <Link href="/signup" className="text-white/60 hover:text-primary transition-colors">
                  Register as Manager
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-white/60 hover:text-primary transition-colors">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Demo Access */}
          <div>
            <h4 className="font-heading text-sm text-primary mb-4">Demo Access</h4>
            <ul className="space-y-3 font-body text-sm">
              <li>
                <Link href="/dashboard" className="text-white/60 hover:text-primary transition-colors">
                  Player Dashboard
                </Link>
              </li>
              <li>
                <Link href="/manager" className="text-white/60 hover:text-primary transition-colors">
                  Manager Dashboard
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-white/60 hover:text-primary transition-colors">
                  Admin Dashboard
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-white/60 hover:text-primary transition-colors font-medium">
                  View All Pages
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm text-primary mb-4">Contact</h4>
            <ul className="space-y-3 font-body text-sm">
              <li>
                <a href="tel:+966504809222" className="text-white/60 hover:text-primary transition-colors">
                  +966 504 809 222
                </a>
              </li>
              <li>
                <a href="mailto:cashcup.info@gmail.com" className="text-white/60 hover:text-primary transition-colors">
                  cashcup.info@gmail.com
                </a>
              </li>
              <li>
                <a href="https://cashcupsports.com" className="text-white/60 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  cashcupsports.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-8 text-center font-body text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Cash Cup. All rights reserved. Jeddah, Saudi Arabia</p>
        </div>
      </div>
    </footer>
  );
}
