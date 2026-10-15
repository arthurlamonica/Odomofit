import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeatureCards } from './components/FeatureCards';
import { PlatformPreview } from './components/PlatformPreview';
import { CommunityFeed } from './components/CommunityFeed';
import { WorkoutDemo } from './components/WorkoutDemo';
import { ProgressDashboard } from './components/ProgressDashboard';
import { TrainerSection } from './components/TrainerSection';
import { ChallengesSection } from './components/ChallengesSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { InterestModal } from './components/InterestModal';
import { AuthModal } from './components/AuthModal';

export const App: React.FC = () => {
  const [isInterestModalOpen, setIsInterestModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<string>('plano-plus');

  const handleOpenInterest = (planId?: string) => {
    if (planId) setSelectedPlanId(planId);
    setIsInterestModalOpen(true);
  };

  const handleExplorePlatform = () => {
    const demoSection = document.getElementById('demonstracao');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080B0B] text-white font-sans selection:bg-[#C6FF00] selection:text-[#080B0B] relative">
      {/* Top Banner Notice for Launch / Demo Mode */}
      <div className="bg-[#1F2224] border-b border-[#2D3236] text-[11px] sm:text-xs text-[#A7A7A7] py-2 px-4 text-center">
        <span className="text-[#C6FF00] font-bold mr-1.5">⚡ GYMSTAGRAM PREVIEW:</span>
        Plataforma em fase de pré-lançamento. Experimente a interface interativa e garanta seu acesso prioritário!
      </div>

      {/* Header Navigation */}
      <Header
        onOpenAuth={() => setIsAuthModalOpen(true)}
        onOpenInterest={() => handleOpenInterest()}
      />

      {/* Main Sections Flow */}
      <main>
        {/* Section 2: Hero */}
        <HeroSection
          onOpenInterest={() => handleOpenInterest()}
          onExplore={handleExplorePlatform}
        />

        {/* Section 3: Proposta de Valor (4 Feature Cards) */}
        <FeatureCards />

        {/* Section 4: Demonstração da Plataforma (4 Interactive Tabs) */}
        <PlatformPreview />

        {/* Section 5: Rede Social Fitness (Social Feed Preview with Likes & Comments) */}
        <CommunityFeed />

        {/* Section 6: Treinos e Organização (Workout Routine, Timers & Checkoff) */}
        <WorkoutDemo />

        {/* Section 7: Evolução e Estatísticas (Progress Dashboard with Period Filters) */}
        <ProgressDashboard />

        {/* Section 8: Área para Personal Trainers */}
        <TrainerSection onOpenInterest={() => handleOpenInterest('plano-pro')} />

        {/* Section 9: Desafios e Conquistas (Gamification) */}
        <ChallengesSection />

        {/* Section 10: Planos e Assinaturas */}
        <PricingSection onSelectPlan={(planId) => handleOpenInterest(planId)} />

        {/* Section 11: Depoimentos e Prova Social */}
        <TestimonialsSection />

        {/* Section 12: Perguntas Frequentes (FAQ Accordion) */}
        <FAQSection />

        {/* Section 13: CTA Final */}
        <FinalCTA
          onOpenInterest={() => handleOpenInterest()}
          onExplore={handleExplorePlatform}
        />
      </main>

      {/* Section 14: Footer */}
      <Footer />

      {/* Interactive Modals */}
      <InterestModal
        isOpen={isInterestModalOpen}
        onClose={() => setIsInterestModalOpen(false)}
        defaultPlanId={selectedPlanId}
      />

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </div>
  );
};

export default App;
