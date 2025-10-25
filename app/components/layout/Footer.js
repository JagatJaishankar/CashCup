import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t-2 border-primary mt-auto">
      <div className="max-w-7xl mx-auto py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-righteous text-3xl text-primary mb-4">CASH CUP</h3>
            <p className="font-helvetica text-sm text-gray-400">
              Transform local football tournaments into professionally managed events.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-righteous text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2 font-helvetica text-sm">
              <li>
                <Link href="/events" className="hover:text-primary transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/players" className="hover:text-primary transition-colors">
                  Players
                </Link>
              </li>
              <li>
                <Link href="/teams" className="hover:text-primary transition-colors">
                  Teams
                </Link>
              </li>
            </ul>
          </div>

          {/* For Users */}
          <div>
            <h4 className="font-righteous text-primary mb-4">For Users</h4>
            <ul className="space-y-2 font-helvetica text-sm">
              <li>
                <Link href="/signup" className="hover:text-primary transition-colors">
                  Register as Player
                </Link>
              </li>
              <li>
                <Link href="/signup" className="hover:text-primary transition-colors">
                  Register as Manager
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-primary transition-colors">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Demo Access */}
          <div>
            <h4 className="font-righteous text-primary mb-4">Demo Access</h4>
            <ul className="space-y-2 font-helvetica text-sm">
              <li>
                <Link href="/dashboard" className="hover:text-primary transition-colors">
                  Player Dashboard
                </Link>
              </li>
              <li>
                <Link href="/manager" className="hover:text-primary transition-colors">
                  Manager Dashboard
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-primary transition-colors">
                  Admin Dashboard
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="hover:text-primary transition-colors font-semibold">
                  View All Pages
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-righteous text-primary mb-4">Contact</h4>
            <ul className="space-y-2 font-helvetica text-sm">
              <li>
                <a href="tel:+966504809222" className="hover:text-primary transition-colors">
                  +966 504 809 222
                </a>
              </li>
              <li>
                <a href="mailto:cashcup.info@gmail.com" className="hover:text-primary transition-colors">
                  cashcup.info@gmail.com
                </a>
              </li>
              <li>
                <a href="https://cashcupsports.com" className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  cashcupsports.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center font-helvetica text-xs md:text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Cash Cup. All rights reserved. | Jeddah, Saudi Arabia</p>
        </div>
      </div>
    </footer>
  );
}
