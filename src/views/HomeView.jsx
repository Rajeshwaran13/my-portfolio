/** HomeView — composes all single-page sections in order. */
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import CredentialsSection from '@/components/sections/CredentialsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomeView() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CredentialsSection />
      <ContactSection />
    </main>
  );
}
