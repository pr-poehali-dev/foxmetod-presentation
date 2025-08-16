import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import WelcomeSection from '@/components/WelcomeSection';
import CompanySections from '@/components/CompanySections';
import RoleSections from '@/components/RoleSections';
import BenefitsSections from '@/components/BenefitsSections';
import FinalSections from '@/components/FinalSections';

const PresentationApp = () => {
  const [activeSection, setActiveSection] = useState('welcome');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { id: 'welcome', title: 'Добро пожаловать', icon: 'Home' },
    { id: 'about', title: 'О компании', icon: 'Building' },
    { id: 'mission', title: 'Миссия', icon: 'Target' },
    { id: 'values', title: 'Ценности', icon: 'Heart' },
    { id: 'proud', title: 'Достижения', icon: 'Award' },
    { id: 'role', title: 'Твоя роль', icon: 'User' },
    { id: 'expectations', title: 'Ожидания', icon: 'CheckCircle' },
    { id: 'benefits', title: 'Бенефиты', icon: 'Gift' },
    { id: 'cases', title: 'Кейсы', icon: 'Briefcase' },
    { id: 'atmosphere', title: 'Атмосфера', icon: 'Users' },
    { id: 'steps', title: 'Первые шаги', icon: 'MapPin' },
    { id: 'final', title: 'Старт карьеры', icon: 'Rocket' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.id);
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-foxmetod-dark">
      <Navigation 
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        menuItems={menuItems}
      />

      {/* Content Sections */}
      <div className="pt-20 pb-20 lg:pb-8">
        <WelcomeSection scrollToSection={scrollToSection} />
        <CompanySections />
        <RoleSections />
        <BenefitsSections />
        <FinalSections />
      </div>
    </div>
  );
};

export default PresentationApp;