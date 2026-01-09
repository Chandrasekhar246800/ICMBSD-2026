import { ABOUT, ORGANIZERS, THEMES } from '@/lib/constants';
import Section from './Section';

export function AboutInstitute() {
  return (
    <Section 
      id="about-institute" 
      title={ABOUT.institute.title}
      background="white"
    >
      <div className="max-w-4xl mx-auto">
        {ABOUT.institute.content.map((paragraph, index) => (
          <p key={index} className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed text-center">
            {paragraph}
          </p>
        ))}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 px-6 py-3 rounded-full shadow-md">
            <span className="font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">A++ NAAC Accredited</span>
          </div>
          <div className="bg-gradient-to-r from-indigo-100 to-blue-100 px-6 py-3 rounded-full shadow-md">
            <span className="font-semibold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">NIRF Ranked</span>
          </div>
          <div className="bg-gradient-to-r from-blue-100 to-cyan-100 px-6 py-3 rounded-full shadow-md">
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Research Excellence</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function AboutConference() {
  return (
    <Section 
      id="about" 
      title={ABOUT.conference.title}
      background="gray"
    >
      <div className="max-w-4xl mx-auto">
        {ABOUT.conference.content.map((paragraph, index) => (
          <p key={index} className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed text-center">
            {paragraph}
          </p>
        ))}
        
        {/* Conference Themes */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Conference Themes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {THEMES.map((theme, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border border-purple-100"
              >
                <span className="text-transparent bg-gradient-to-br from-purple-600 to-pink-600 bg-clip-text text-xl mt-1">✓</span>
                <span className="text-gray-800">{theme}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export function AboutCentre() {
  return (
    <Section 
      id="about-centre" 
      title={ABOUT.centre.title}
      background="white"
    >
      <div className="max-w-4xl mx-auto">
        {ABOUT.centre.content.map((paragraph, index) => (
          <p key={index} className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed text-center">
            {paragraph}
          </p>
        ))}
        
        {/* Organizers Highlight */}
        <div className="mt-12 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-purple-200 text-center">
              <h4 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                {ORGANIZERS.primary}
              </h4>
              <p className="text-gray-700">
                Leading research in drug discovery, microbial bioprospecting, and vaccine development.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-indigo-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-indigo-200 text-center">
              <h4 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-3">
                {ORGANIZERS.secondary}
              </h4>
              <p className="text-gray-700">
                Pioneering sustainable agriculture through organic farming and microbial interventions.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-purple-200 text-center">
            <h4 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
              {ORGANIZERS.school}
            </h4>
            <p className="text-gray-700">
              {ORGANIZERS.institute}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
