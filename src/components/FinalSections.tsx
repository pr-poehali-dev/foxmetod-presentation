import React from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const FinalSections: React.FC = () => {
  return (
    <>
      {/* Section 11: Первые шаги */}
      <section id="steps" className="min-h-screen flex items-center px-6 lg:px-12 py-20 bg-white/5">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-16 text-center">Первые шаги</h1>
          <div className="space-y-4">
            <Card className="bg-white/5 border border-white/10 p-6 flex items-center space-x-6">
              <div className="bg-foxmetod-orange text-white w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg flex-shrink-0">1</div>
              <p className="text-white">Знакомство с командой</p>
            </Card>
            <Card className="bg-white/5 border border-white/10 p-6 flex items-center space-x-6">
              <div className="bg-foxmetod-orange text-white w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg flex-shrink-0">2</div>
              <p className="text-white">Обучение CRM Yougile</p>
            </Card>
            <Card className="bg-white/5 border border-white/10 p-6 flex items-center space-x-6">
              <div className="bg-foxmetod-orange text-white w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg flex-shrink-0">3</div>
              <p className="text-white">Первые звонки</p>
            </Card>
            <Card className="bg-white/5 border border-white/10 p-6 flex items-center space-x-6">
              <div className="bg-foxmetod-orange text-white w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg flex-shrink-0">4</div>
              <p className="text-white">Zoom-встречи с наставником</p>
            </Card>
            <Card className="bg-white/5 border border-white/10 p-6 flex items-center space-x-6">
              <div className="bg-foxmetod-orange text-white w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg flex-shrink-0">5</div>
              <p className="text-white">Первые сделки</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 12: Финал */}
      <section id="final" className="min-h-screen flex items-center justify-center px-6 lg:px-12">
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
              Твоя карьера<br />начинается здесь
            </h1>
            <p className="text-lg lg:text-xl text-foxmetod-blue-light max-w-2xl mx-auto">
              В FOXMetoD нет потолка дохода — всё зависит от тебя
            </p>
            <div className="pt-4">
              <Icon name="Rocket" className="text-foxmetod-orange mx-auto" size={64} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FinalSections;