interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'gradient';
}

export default function Section({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = '',
  background = 'white'
}: SectionProps) {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gradient-to-br from-gray-50 to-purple-50',
    gradient: 'bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50',
  };

  return (
    <section id={id} className={`py-20 ${bgClasses[background]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-purple-600 bg-clip-text text-transparent mb-4 animate-gradient">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
          <div className="mt-4 w-24 h-1.5 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 mx-auto rounded-full shadow-lg"></div>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
