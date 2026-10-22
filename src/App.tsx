import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ExploreProgram } from './components/ExploreProgram';
import { DynamicExperience } from './components/DynamicExperience';
import { SmartFeatures } from './components/SmartFeatures';
import { ExperienceTrainers } from './components/ExperienceTrainers';
import { TrainingCycle } from './components/TrainingCycle';
import { PricingSection } from './components/PricingSection';
import { AppDownloadBanner } from './components/AppDownloadBanner';
import { Footer } from './components/Footer';
import { InterestModal } from './components/InterestModal';
import { AuthModal } from './components/AuthModal';

export const App: React.FC = () => {
  const [isInterestModalOpen, setIsInterestModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<string>('premium');

  const handleOpenInterest = (planId?: string) => {
    if (planId) setSelectedPlanId(planId);
    setIsInterestModalOpen(true);
  };

  const handleExploreProgram = () => {
    const programSection = document.getElementById('programas');
    if (programSection) {
      programSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08080A] text-white font-sans selection:bg-[#C6FF00] selection:text-[#08080A] relative overflow-x-hidden">

      {/* 2. Header / Barra de Navegação */}
      <Header
        onOpenAuth={() => setIsAuthModalOpen(true)}
        onOpenInterest={() => handleOpenInterest()}
      />

      {/* 3. Fluxo Principal de Seções 1:1 com a Imagem de Referência */}
      <main>
        {/* Seção 1: Hero Monumental com Atleta e Balões Flutuantes Interativos */}
        <HeroSection
          onOpenInterest={() => handleOpenInterest()}
          onExplore={handleExploreProgram}
        />

        {/* Seção 2: Explore Our Program (4 Cards com Destaque em Verde Neon) */}
        <ExploreProgram />

        {/* Seção 3: Dive Into Our Dynamic Fitness Experience (Cards de Atletas e Divisor Métrico) */}
        <DynamicExperience />

        {/* Seção 4: Funcionalidades com Badges 400+ Free Features e 400+ Free Videos */}
        <SmartFeatures onLearnMore={() => handleOpenInterest('smart-features')} />

        {/* Seção 5: Get To Know Our Team Of Experience Trainers (Esther, Leslie, Jacob) */}
        <ExperienceTrainers
          onSchedule={(trainer) => handleOpenInterest(`trainer-${trainer}`)}
        />

        {/* Seção 6: O Ciclo de Treino e Saúde (Infográfico Circular em 6 Fases Interativas) */}
        <TrainingCycle />

        {/* Seção 7: Choose Your Pricing Plan (Standard, Premium em Verde Neon, Advanced) */}
        <PricingSection onSelectPlan={(planId) => handleOpenInterest(planId)} />

        {/* Seção 8: Download The App To Get More Benefits (Banner Cinematográfico da Marca) */}
        <AppDownloadBanner onDownload={() => handleOpenInterest('download-app')} />
      </main>

      {/* 4. Rodapé Cinematográfico com Status Operacional do Sistema */}
      <Footer />

      {/* 5. Modais Interativos Funcionais */}
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
