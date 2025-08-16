import React from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const FinalSections: React.FC = () => {
  return (
    <>
      {/* Section 11: Первые шаги */}
      <section id="steps" className="min-h-screen flex items-center px-6 py-20 bg-foxmetod-gray/20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-16 text-center">Твои первые шаги</h1>
          <div className="space-y-6">
            <Card className="bg-foxmetod-gray border-0 p-8 flex items-center space-x-8">
              <div className="bg-foxmetod-orange text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0">1</div>
              <p className="text-xl text-white">Знакомство с командой</p>
            </Card>
            <Card className="bg-foxmetod-gray border-0 p-8 flex items-center space-x-8">
              <div className="bg-foxmetod-orange text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0">2</div>
              <p className="text-xl text-white">Обучение работе в CRM Yougile</p>
            </Card>
            <Card className="bg-foxmetod-gray border-0 p-8 flex items-center space-x-8">
              <div className="bg-foxmetod-orange text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0">3</div>
              <p className="text-xl text-white">Первые звонки и переписки</p>
            </Card>
            <Card className="bg-foxmetod-gray border-0 p-8 flex items-center space-x-8">
              <div className="bg-foxmetod-orange text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0">4</div>
              <p className="text-xl text-white">Совместные Zoom-встречи с наставником</p>
            </Card>
            <Card className="bg-foxmetod-gray border-0 p-8 flex items-center space-x-8">
              <div className="bg-foxmetod-orange text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0">5</div>
              <p className="text-xl text-white">Выход на первые сделки</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 12: Финал */}
      <section id="final" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <div className="bg-white rounded-2xl p-8 mx-auto w-fit">
            <img 
              src="https://cdn.poehali.dev/files/0e173fb2-e606-4f78-bf2a-2d91cb8b7945.jpg" 
              alt="FOXMetoD Logo" 
              className="h-24 w-auto mx-auto"
            />
          </div>
          <div className="space-y-8">
            <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
              Твоя карьера<br />начинается здесь!
            </h1>
            <p className="text-3xl text-foxmetod-blue-light italic font-light">
              В FOXMetoD нет потолка дохода — всё зависит от тебя.
            </p>
            <div className="pt-8">
              <Icon name="Rocket" className="text-foxmetod-orange mx-auto" size={96} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FinalSections;