import { IMPORTANT_DATES } from '@/lib/constants';
import Section from './Section';

export default function ImportantDates() {
  return (
    <Section 
      id="dates" 
      title="Important Dates"
      subtitle="Mark your calendars for these key milestones"
      background="white"
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {IMPORTANT_DATES.map((date) => (
            <div 
              key={date.id}
              className="bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-100 rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-2 border-orange-200 hover:border-pink-400"
            >
              <div className="text-6xl mb-4 animate-bounce">{date.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {date.title}
              </h3>
              <div className="text-2xl font-semibold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                {date.date}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Connector (Desktop only) */}
        <div className="hidden md:block relative mt-12">
          <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 transform -translate-y-1/2 rounded-full shadow-lg"></div>
        </div>
      </div>
    </Section>
  );
}
