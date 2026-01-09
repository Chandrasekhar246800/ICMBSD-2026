import { CONTACT } from '@/lib/constants';
import Section from './Section';

export default function Contact() {
  return (
    <Section 
      id="contact" 
      title="Contact Us"
      subtitle="Get in touch with the organizing committee"
      background="white"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Organizing Secretary */}
          <div className="bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100 rounded-2xl p-6 md:p-8 shadow-lg border border-purple-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {CONTACT.organizingSecretary.name}
                </h3>
                <p className="text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text font-medium">
                  {CONTACT.organizingSecretary.title}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {CONTACT.organizingSecretary.designation}
                </p>
                <p className="text-sm text-gray-500">
                  {CONTACT.organizingSecretary.department}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Email */}
              <a 
                href={`mailto:${CONTACT.organizingSecretary.email}`}
                className="flex items-center gap-3 text-gray-700 hover:text-purple-600 transition-colors group"
              >
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{CONTACT.organizingSecretary.email}</p>
                </div>
              </a>

              {/* Phone */}
              <a 
                href={`tel:${CONTACT.organizingSecretary.phone}`}
                className="flex items-center gap-3 text-gray-700 hover:text-purple-600 transition-colors group"
              >
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">{CONTACT.organizingSecretary.phone}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Institute Address */}
          <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-indigo-100 rounded-2xl p-6 md:p-8 shadow-lg border border-indigo-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Venue Address</h3>
                <p className="text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text font-medium text-sm sm:text-base">Conference Location</p>
              </div>
            </div>

            <div className="space-y-2 text-gray-700 text-sm sm:text-base">
              <p className="font-semibold">{CONTACT.address.institute}</p>
              <p>{CONTACT.address.location}</p>
              <p>{CONTACT.address.city}, {CONTACT.address.state}</p>
              <p>{CONTACT.address.pincode}</p>
              <p className="font-medium">{CONTACT.address.country}</p>
            </div>

            {/* Map Link (Optional) */}
            <div className="mt-6">
              <a 
                href="https://maps.google.com/?q=Sathyabama+Institute+Chennai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text font-medium hover:opacity-80 transition-opacity text-sm sm:text-base"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <span>View on Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
