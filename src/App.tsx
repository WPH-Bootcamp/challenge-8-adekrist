import { AboutSection } from './components/AboutSection';
import { ContactForm } from './components/ContactForm';
import { ContactPreview } from './components/ContactPreview';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { IndustrySection } from './components/IndustrySection';
import { ProcessSection } from './components/ProcessSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-white antialiased">
      <Header />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ProcessSection />
        <ServicesSection />
        <IndustrySection />
        <ProjectsSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactPreview />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
