import { LEADERSHIP } from '@/lib/constants';
import Section from './Section';
import Image from 'next/image';

export default function Leadership() {
  return (
    <Section 
      id="leadership" 
      title="Conference Leadership"
      subtitle="Distinguished leaders guiding ICMBSD-2026"
      background="white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Chief Patron */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-pink-50 via-orange-50 to-purple-100 rounded-2xl p-6 md:p-8 shadow-xl border-3 border-pink-400 max-w-2xl mx-auto hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 relative rounded-full overflow-hidden shadow-xl ring-4 ring-purple-200">
                <Image
                  src={LEADERSHIP.chiefPatron.image}
                  alt={LEADERSHIP.chiefPatron.name}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
              <div className="mb-2">
                <span className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">
                  Chief Patron
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {LEADERSHIP.chiefPatron.name}
              </h3>
              <p className="text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text font-medium text-lg">
                {LEADERSHIP.chiefPatron.designation}
              </p>
            </div>
          </div>
        </div>

        {/* Patron */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 rounded-2xl p-6 md:p-8 shadow-xl border-3 border-cyan-400 max-w-2xl mx-auto hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 relative rounded-full overflow-hidden shadow-xl ring-4 ring-indigo-200">
                <Image
                  src={LEADERSHIP.patron.image}
                  alt={LEADERSHIP.patron.name}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
              <div className="mb-2">
                <span className="inline-block bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">
                  Patron
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {LEADERSHIP.patron.name}
              </h3>
              <p className="text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text font-medium text-lg">
                {LEADERSHIP.patron.designation}
              </p>
            </div>
          </div>
        </div>

        {/* Organizing Secretary */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Organizing Secretary
          </h3>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 via-red-50 to-pink-100 rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-orange-200 hover:-translate-y-1 text-center">
              <div className="flex flex-col items-center gap-4">
                {LEADERSHIP.organizingSecretary.image ? (
                  <div className="w-32 h-32 relative rounded-full overflow-hidden shadow-lg ring-4 ring-orange-200">
                    <Image
                      src={LEADERSHIP.organizingSecretary.image}
                      alt={LEADERSHIP.organizingSecretary.name}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-2xl text-white font-bold">
                      {LEADERSHIP.organizingSecretary.name.split(' ')[1].charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    {LEADERSHIP.organizingSecretary.name}
                  </h4>
                  <p className="text-sm text-gray-600 mb-1">
                    {LEADERSHIP.organizingSecretary.designation}
                  </p>
                  <p className="text-sm text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text font-medium">
                    {LEADERSHIP.organizingSecretary.department}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Co-Organizing Secretaries */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Co-Organizing Secretaries
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {LEADERSHIP.coOrganizingSecretaries.map((secretary, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-purple-200 hover:-translate-y-1 text-center"
              >
                <div className="flex flex-col items-center gap-4">
                  {secretary.image ? (
                    <div className="w-32 h-32 relative rounded-full overflow-hidden shadow-lg ring-4 ring-purple-200">
                      <Image
                        src={secretary.image}
                        alt={secretary.name}
                        fill
                        className="object-cover"
                        sizes="128px"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-2xl text-white font-bold">
                        {secretary.name.split(' ')[1].charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {secretary.name}
                    </h4>
                    <p className="text-sm text-gray-600 mb-1">
                      {secretary.designation}
                    </p>
                    <p className="text-sm text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text font-medium">
                      {secretary.department}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
