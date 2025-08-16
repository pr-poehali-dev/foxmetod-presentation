import React from 'react';
import Icon from '@/components/ui/icon';

interface MenuItem {
  id: string;
  title: string;
  icon: string;
}

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  menuItems: MenuItem[];
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, scrollToSection, menuItems }) => {
  return (
    <>
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-foxmetod-dark/95 backdrop-blur-sm border-b border-foxmetod-gray">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-white rounded px-3 py-1">
                <img 
                  src="https://cdn.poehali.dev/files/0e173fb2-e606-4f78-bf2a-2d91cb8b7945.jpg" 
                  alt="FOXMetoD" 
                  className="h-8 w-auto"
                />
              </div>
              <span className="text-white font-bold text-lg">Презентация для менеджера</span>
            </div>
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-1 ${
                    activeSection === item.id
                      ? 'bg-foxmetod-orange text-white'
                      : 'text-foxmetod-blue-light hover:bg-foxmetod-gray hover:text-white'
                  }`}
                >
                  <Icon name={item.icon as any} size={16} />
                  <span className="hidden xl:inline">{item.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-foxmetod-dark/95 backdrop-blur-sm border-t border-foxmetod-gray">
        <div className="flex overflow-x-auto p-2 space-x-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex-shrink-0 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 flex flex-col items-center space-y-1 ${
                activeSection === item.id
                  ? 'bg-foxmetod-orange text-white'
                  : 'text-foxmetod-blue-light hover:bg-foxmetod-gray hover:text-white'
              }`}
            >
              <Icon name={item.icon as any} size={16} />
              <span className="leading-none">{item.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;