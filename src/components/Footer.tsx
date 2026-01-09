import { CONFERENCE, ORGANIZERS } from '@/lib/constants';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-purple-900 via-pink-800 to-indigo-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Conference Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              {CONFERENCE.shortName}
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              International Conference on Microbial Biotechnology for Sustainable Development
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{CONFERENCE.dates}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'About Conference', href: '#about' },
                { name: 'Speakers', href: '#speakers' },
                { name: 'Important Dates', href: '#dates' },
                { name: 'Registration', href: '#registration' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Organizers */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Organized By</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">→</span>
                <span>{ORGANIZERS.primary}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">→</span>
                <span>{ORGANIZERS.secondary}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">→</span>
                <span>{ORGANIZERS.school}</span>
              </li>
              <li className="mt-4 pt-4 border-t border-gray-700">
                <p className="font-semibold text-white">{ORGANIZERS.institute}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} {CONFERENCE.shortName}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="#top" 
                className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
              >
                Back to Top ↑
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
