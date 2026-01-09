import { CONFERENCE } from '@/lib/constants';
import Section from './Section';
import Link from 'next/link';

export default function Registration() {
  return (
    <Section 
      id="registration" 
      title="Registration"
      subtitle="Secure your spot at ICMBSD-2026"
      background="gradient"
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-yellow-300">
          <div className="bg-gradient-to-r from-pink-500 via-orange-500 to-purple-600 p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-2">Conference Registration</h3>
            <p className="text-xl opacity-90">Join us for two days of innovation and collaboration</p>
          </div>
          
          <div className="p-6 md:p-8 lg:p-12">
            {/* Registration Fee */}
            <div className="text-center mb-8">
              <p className="text-gray-600 text-lg mb-2 font-semibold">Registration Fee</p>
              <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-yellow-500 drop-shadow-2xl mb-4 animate-pulse">
                {CONFERENCE.registrationFee}
              </div>
              <p className="text-gray-500 font-medium">per participant</p>
            </div>

            {/* What's Included */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Registration Includes
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Access to all conference sessions',
                  'Conference materials & abstracts',
                  'Lunch & refreshments',
                  'Certificate of participation',
                  'Networking opportunities',
                  'Post-conference proceedings',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Info Notice */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-sm text-blue-800 font-medium">
                    Payment details and instructions will be provided in the registration form.
                  </p>
                </div>
              </div>
            </div>

            {/* Abstract Submission Notice */}
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-8">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-sm text-green-800 font-semibold mb-1">
                    Call for Abstracts for Oral/Poster Presentation
                  </p>
                  <p className="text-sm text-green-700">
                    The organizing committee cordially invites you to submit abstracts (250 words) for Oral/Poster Presentation. All abstracts will be published in conference proceedings with ISBN.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Link
                href={CONFERENCE.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 text-white px-12 py-5 rounded-full text-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-orange-500/70 transform hover:-translate-y-2 hover:scale-110 animate-gradient border-2 border-white"
              >
                <span>Register Now</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <p className="mt-4 text-sm text-gray-600 font-medium">\n                Registration deadline: 3 February 2026\n              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
