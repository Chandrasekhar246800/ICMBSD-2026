// ICMBSD-2026 Conference Website - Main Page
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { AboutInstitute, AboutConference, AboutCentre } from '@/components/AboutSections';
import Leadership from '@/components/Leadership';
import Speakers from '@/components/Speakers';
import ImportantDates from '@/components/ImportantDates';
import Registration from '@/components/Registration';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Sections */}
      <AboutConference />
      <AboutInstitute />
      <AboutCentre />

      {/* Leadership */}
      <Leadership />

      {/* Speakers Section */}
      <Speakers />

      {/* Important Dates */}
      <ImportantDates />

      {/* Registration */}
      <Registration />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
