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
        <div className="mx-auto w-fit">
          <img 
            src="/img/9ca9a5cc-946d-4123-b128-bd961eda1181.jpg" 
            alt="FOXMetoD Logo" 
            className="h-24 w-auto mx-auto drop-shadow-2xl"
          />
        </div>
        <div className="space-y-8">
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            Твоя новая жизнь<br />
            начинается с <span className="text-foxmetod-orange">FOXMetoD</span>
          </h1>
          <p className="text-lg lg:text-xl text-foxmetod-blue-light max-w-2xl mx-auto leading-relaxed">
            🚀 Забудь про копейки! Зарабатывай <span className="text-foxmetod-orange font-semibold">от 100 000₽</span> в месяц, работая в команде лидеров рынка консалтинга
          </p>
        </div>
        <Button
          onClick={() => scrollToSection('about')}
          className="bg-foxmetod-orange hover:bg-orange-600 text-white text-lg px-10 py-5 rounded-2xl transition-all duration-300 hover:scale-105 font-semibold shadow-xl"
        >
          Узнать, как стать богатым <Icon name="Rocket" className="ml-2" size={20} />
        </Button>
      </div>
    </section>
  );
};

export default WelcomeSection;