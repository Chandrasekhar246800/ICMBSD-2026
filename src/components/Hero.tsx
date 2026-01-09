import { CONFERENCE } from '@/lib/constants';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-1000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8">
        {/* Rotating Cube Logo */}
        <div className="mb-4">
          <div className="flex justify-center mb-3">
            <div className="cube-container">
              <div className="cube">
                <div className="cube-face front">
                  <Image src="/logo.webp" alt="SIST Logo" width={120} height={120} className="object-contain" />
                </div>
                <div className="cube-face back">
                  <Image src="/logo.webp" alt="SIST Logo" width={120} height={120} className="object-contain" />
                </div>
                <div className="cube-face right">
                  <Image src="/logo.webp" alt="SIST Logo" width={120} height={120} className="object-contain" />
                </div>
                <div className="cube-face left">
                  <Image src="/logo.webp" alt="SIST Logo" width={120} height={120} className="object-contain" />
                </div>
                <div className="cube-face top">
                  <Image src="/logo.webp" alt="SIST Logo" width={120} height={120} className="object-contain" />
                </div>
                <div className="cube-face bottom">
                  <Image src="/logo.webp" alt="SIST Logo" width={120} height={120} className="object-contain" />
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg mb-4">
            Sathyabama Institute of Science and Technology
          </h2>
        </div>

        {/* Year Badge */}
        <div className="inline-block mb-4">
          <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide shadow-2xl animate-pulse">
            {CONFERENCE.year}
          </span>
        </div>

        {/* Conference Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
          {CONFERENCE.shortName}
        </h1>
        <p className="text-lg sm:text-xl text-white/95 mb-6 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
          {CONFERENCE.name}
        </p>

        {/* Date and Venue */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 text-white">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full">
            <svg className="w-5 h-5 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm sm:text-base font-medium">{CONFERENCE.dates}</span>
          </div>
          <div className="hidden sm:block text-white/40">|</div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full">
            <svg className="w-5 h-5 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {/* Mobile view - Two lines */}
            <span className="text-sm font-medium sm:hidden flex flex-col text-center leading-tight">
              <span>TMT Soundrabai Auditorium,</span>
              <span>Sathyabama Institute of Science and Technology</span>
            </span>
            {/* Desktop view - Original text */}
            <span className="hidden sm:inline text-sm sm:text-base font-medium">{CONFERENCE.venue}</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
          <Link
            href="#registration"
            className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 text-white px-7 py-3 rounded-full text-base font-semibold transition-all duration-300 shadow-2xl hover:shadow-orange-500/50 transform hover:-translate-y-1 hover:scale-110 animate-gradient"
          >
            Register Now
          </Link>
          <Link
            href="#about"
            className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white px-7 py-3 rounded-full text-base font-semibold transition-all duration-300 shadow-2xl border-2 border-white/30 hover:border-white/50 transform hover:-translate-y-1 hover:scale-105"
          >
            Learn More
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 animate-bounce">
          <svg className="w-6 h-6 mx-auto text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
