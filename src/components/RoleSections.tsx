import React from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const RoleSections: React.FC = () => {
  return (
    <>
      {/* Section 6: Роль */}
      <section id="role" className="min-h-screen flex items-center px-6 lg:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-16 text-center">Твоя роль</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
              <Icon name="ShoppingCart" className="text-foxmetod-orange mb-3" size={32} />
              <p className="text-white">Продажи консалтинговых услуг</p>
            </Card>
            <Card className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
              <Icon name="Mail" className="text-foxmetod-orange mb-3" size={32} />
              <p className="text-white">Переписка с клиентами</p>
            </Card>
            <Card className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
              <Icon name="Phone" className="text-foxmetod-orange mb-3" size={32} />
              <p className="text-white">Звонки и переговоры</p>
            </Card>
            <Card className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
              <Icon name="Video" className="text-foxmetod-orange mb-3" size={32} />
              <p className="text-white">Zoom-встречи с клиентами</p>
            </Card>
            <Card className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
              <Icon name="Database" className="text-foxmetod-orange mb-3" size={32} />
              <p className="text-white">Ведение CRM Yougile</p>
            </Card>
            <Card className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
              <Icon name="FileText" className="text-foxmetod-orange mb-3" size={32} />
              <p className="text-white">Коммерческие предложения</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 7: Ожидания */}
      <section id="expectations" className="min-h-screen flex items-center px-6 lg:px-12 py-20 bg-white/5">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-16 text-center">Что важно</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/5 border border-white/10 p-8">
              <Icon name="Target" className="text-foxmetod-orange mb-4" size={40} />
              <h3 className="text-white font-semibold text-lg mb-2">План продаж</h3>
              <p className="text-foxmetod-blue-light">От 500 000₽ на испытательном сроке</p>
            </Card>
            <Card className="bg-white/5 border border-white/10 p-8">
              <Icon name="MessageSquare" className="text-foxmetod-orange mb-4" size={40} />
              <h3 className="text-white font-semibold text-lg mb-2">Коммуникация</h3>
              <p className="text-foxmetod-blue-light">Грамотная деловая переписка</p>
            </Card>
            <Card className="bg-white/5 border border-white/10 p-8">
              <Icon name="Phone" className="text-foxmetod-orange mb-4" size={40} />
              <h3 className="text-white font-semibold text-lg mb-2">Переговоры</h3>
              <p className="text-foxmetod-blue-light">Навыки проведения встреч</p>
            </Card>
            <Card className="bg-white/5 border border-white/10 p-8">
              <Icon name="Zap" className="text-foxmetod-orange mb-4" size={40} />
              <h3 className="text-white font-semibold text-lg mb-2">Инициатива</h3>
              <p className="text-foxmetod-blue-light">Готовность учиться и развиваться</p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default RoleSections;