import React from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const CompanySections: React.FC = () => {
  return (
    <>
      {/* Section 2: О компании */}
      <section id="about" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-16 text-center">О компании FOXMetoD</h1>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-xl text-white">
              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-foxmetod-orange rounded-full mt-2 flex-shrink-0"></div>
                <p>FOXMetoD — консалтинговое агентство, которое помогает предпринимателям и компаниям расти через стратегию, цифровые решения и ИИ.</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-foxmetod-orange rounded-full mt-2 flex-shrink-0"></div>
                <p>Мы работаем в трёх измерениях: <strong className="text-foxmetod-orange">стратегия, процессы, технологии</strong>.</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-foxmetod-orange rounded-full mt-2 flex-shrink-0"></div>
                <p>6 ключевых направлений: стратегические сессии, организационное развитие, внедрение ИИ, консалтинг по бизнесу, обучение команд, сопровождение изменений.</p>
              </div>
            </div>
            <div className="bg-foxmetod-gray p-8 rounded-2xl">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="text-center">
                  <Icon name="Target" className="text-foxmetod-orange mx-auto mb-3" size={48} />
                  <p className="text-white font-semibold">Стратегия</p>
                </div>
                <div className="text-center">
                  <Icon name="Settings" className="text-foxmetod-orange mx-auto mb-3" size={48} />
                  <p className="text-white font-semibold">Процессы</p>
                </div>
                <div className="text-center">
                  <Icon name="Cpu" className="text-foxmetod-orange mx-auto mb-3" size={48} />
                  <p className="text-white font-semibold">Технологии</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Миссия */}
      <section id="mission" className="min-h-screen flex items-center px-6 py-20 bg-foxmetod-gray/20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-16">Миссия</h1>
          <Card className="bg-foxmetod-gray border-foxmetod-orange border-2 p-12 max-w-5xl mx-auto">
            <p className="text-3xl text-white leading-relaxed font-light">
              <strong className="text-foxmetod-orange">Мы помогаем предпринимателям обрести свободу и уверенность в управлении бизнесом</strong>, создавая системы, которые работают даже без их постоянного участия.
            </p>
          </Card>
        </div>
      </section>

      {/* Section 4: Ценности */}
      <section id="values" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-16 text-center">Наши ценности</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-foxmetod-gray border-0 p-6 hover:bg-foxmetod-gray-light transition-colors">
              <Icon name="Heart" className="text-foxmetod-orange mb-4" size={40} />
              <h3 className="text-white font-bold text-xl mb-3">Честность и прозрачность</h3>
              <p className="text-foxmetod-blue-light">Открытые правила игры</p>
            </Card>
            <Card className="bg-foxmetod-gray border-0 p-6 hover:bg-foxmetod-gray-light transition-colors">
              <Icon name="Award" className="text-foxmetod-orange mb-4" size={40} />
              <h3 className="text-white font-bold text-xl mb-3">Профессионализм и качество</h3>
              <p className="text-foxmetod-blue-light">Экспертиза на уровне Big4</p>
            </Card>
            <Card className="bg-foxmetod-gray border-0 p-6 hover:bg-foxmetod-gray-light transition-colors">
              <Icon name="Lightbulb" className="text-foxmetod-orange mb-4" size={40} />
              <h3 className="text-white font-bold text-xl mb-3">Инновации</h3>
              <p className="text-foxmetod-blue-light">Новые технологии, включая ИИ</p>
            </Card>
            <Card className="bg-foxmetod-gray border-0 p-6 hover:bg-foxmetod-gray-light transition-colors">
              <Icon name="Handshake" className="text-foxmetod-orange mb-4" size={40} />
              <h3 className="text-white font-bold text-xl mb-3">Партнёрство с клиентом</h3>
              <p className="text-foxmetod-blue-light">Работаем как единая команда</p>
            </Card>
            <Card className="bg-foxmetod-gray border-0 p-6 hover:bg-foxmetod-gray-light transition-colors md:col-span-2 lg:col-span-1">
              <Icon name="TrendingUp" className="text-foxmetod-orange mb-4" size={40} />
              <h3 className="text-white font-bold text-xl mb-3">Развитие и обучение</h3>
              <p className="text-foxmetod-blue-light">Каждый сотрудник растёт вместе с компанией</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 5: Чем гордимся */}
      <section id="proud" className="min-h-screen flex items-center px-6 py-20 bg-foxmetod-gray/20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-16 text-center">Чем мы гордимся</h1>
          <div className="space-y-8">
            <div className="grid md:grid-cols-3 gap-8 text-white">
              <Card className="bg-foxmetod-gray border-0 p-8 text-center">
                <Icon name="Users" className="text-foxmetod-orange mx-auto mb-4" size={64} />
                <p className="text-lg">Клиенты приходят за одной услугой, но остаются надолго</p>
              </Card>
              <Card className="bg-foxmetod-gray border-0 p-8 text-center">
                <Icon name="CheckCircle" className="text-foxmetod-orange mx-auto mb-4" size={64} />
                <p className="text-lg">Успешные внедрения CRM, ИИ и стратегий</p>
              </Card>
              <Card className="bg-foxmetod-gray border-0 p-8 text-center">
                <Icon name="Target" className="text-foxmetod-orange mx-auto mb-4" size={64} />
                <p className="text-lg">Меняем подход к управлению бизнесом</p>
              </Card>
            </div>
            
            <Card className="bg-foxmetod-gray border-foxmetod-orange border-2 p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Путь роста LTV</h3>
              <div className="flex items-center justify-center space-x-8">
                <div className="text-center">
                  <Icon name="Presentation" className="text-foxmetod-orange mx-auto mb-2" size={48} />
                  <p className="text-foxmetod-blue-light font-medium">Первичная услуга</p>
                </div>
                <Icon name="ArrowRight" className="text-white" size={32} />
                <div className="text-center">
                  <Icon name="Plus" className="text-foxmetod-orange mx-auto mb-2" size={48} />
                  <p className="text-foxmetod-blue-light font-medium">Дополнительные услуги</p>
                </div>
                <Icon name="ArrowRight" className="text-white" size={32} />
                <div className="text-center">
                  <Icon name="TrendingUp" className="text-foxmetod-orange mx-auto mb-2" size={48} />
                  <p className="text-foxmetod-blue-light font-medium">Рост LTV</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanySections;