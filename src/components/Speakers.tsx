import { SPEAKERS } from '@/lib/constants';
import Section from './Section';
import Image from 'next/image';

interface SpeakerCardProps {
  name: string;
  designation: string;
  institution: string;
  country: string;
  image: string;
}

function SpeakerCard({ name, designation, institution, country, image }: SpeakerCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-3 border-2 border-transparent hover:border-pink-400">
      {/* Speaker Photo */}
      <div className="h-80 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 relative overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-transparent bg-gradient-to-r from-pink-600 via-orange-500 to-purple-600 bg-clip-text font-medium mb-2">{designation}</p>
        <p className="text-gray-700 mb-1">{institution}</p>
        <div className="flex items-center gap-2 mt-3 justify-center">
          <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
          </svg>
          <span className="text-sm text-gray-600 font-medium">{country}</span>
        </div>
      </div>
    </div>
  );
}

export default function Speakers() {
  return (
    <Section 
      id="speakers" 
      title="Keynote Speakers"
      subtitle="Learn from distinguished international and national experts in microbial biotechnology"
      background="gradient"
    >
      {/* International Speakers */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          International Speakers
        </h3>
        {/* First row - 3 members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 max-w-6xl mx-auto">
          {SPEAKERS.international.slice(0, 3).map((speaker) => (
            <SpeakerCard key={speaker.id} {...speaker} />
          ))}
        </div>
        {/* Second row - 2 members */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {SPEAKERS.international.slice(3, 5).map((speaker) => (
            <SpeakerCard key={speaker.id} {...speaker} />
          ))}
        </div>
      </div>

      {/* National Speakers */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          National Speakers
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {SPEAKERS.national.map((speaker) => (
            <SpeakerCard key={speaker.id} {...speaker} />
          ))}
        </div>
      </div>
    </Section>
  );
}
