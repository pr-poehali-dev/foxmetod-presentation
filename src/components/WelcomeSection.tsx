import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface WelcomeSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({ scrollToSection }) => {
  return (
    <section id="welcome" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <div className="bg-white rounded-2xl p-8 mx-auto w-fit">
          <img 
            src="https://cdn.poehali.dev/files/0e173fb2-e606-4f78-bf2a-2d91cb8b7945.jpg" 
            alt="FOXMetoD Logo" 
            className="h-24 w-auto mx-auto"
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
            Добро пожаловать<br />в FOXMetoD!
          </h1>
          <p className="text-3xl text-foxmetod-blue-light italic font-light">
            Вместе строим бизнес будущего
          </p>
        </div>
        <Button
          onClick={() => scrollToSection('about')}
          className="bg-foxmetod-orange hover:bg-orange-600 text-white text-lg px-8 py-4 rounded-xl"
        >
          Узнать больше <Icon name="ArrowDown" className="ml-2" size={20} />
        </Button>
      </div>
    </section>
  );
};

export default WelcomeSection;