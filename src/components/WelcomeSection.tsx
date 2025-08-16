import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface WelcomeSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({ scrollToSection }) => {
  return (
    <section id="welcome" className="min-h-screen flex items-center justify-center px-6 lg:px-12">
      <div className="max-w-4xl mx-auto text-center space-y-16">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 mx-auto w-fit border border-white/20">
          <img 
            src="https://cdn.poehali.dev/files/0e173fb2-e606-4f78-bf2a-2d91cb8b7945.jpg" 
            alt="FOXMetoD Logo" 
            className="h-20 w-auto mx-auto"
          />
        </div>
        <div className="space-y-8">
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            Добро пожаловать в<br />
            <span className="text-foxmetod-orange">FOXMetoD</span>
          </h1>
          <p className="text-lg lg:text-xl text-foxmetod-blue-light max-w-2xl mx-auto">
            Начни зарабатывать от 100 000₽ в сфере продаж
          </p>
        </div>
        <Button
          onClick={() => scrollToSection('about')}
          className="bg-foxmetod-orange hover:bg-orange-600 text-white text-lg px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
        >
          Начать <Icon name="ArrowRight" className="ml-2" size={20} />
        </Button>
      </div>
    </section>
  );
};

export default WelcomeSection;