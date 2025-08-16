import React from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const BenefitsSections: React.FC = () => {
  return (
    <>
      {/* Section 8: Бенефиты */}
      <section id="benefits" className="min-h-screen flex items-center px-6 lg:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-16 text-center">Что получаешь</h1>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <Card className="bg-white/5 border border-white/10 p-6">
                <div className="flex items-center space-x-4">
                  <Icon name="DollarSign" className="text-foxmetod-orange" size={32} />
                  <p className="text-white">Высокий доход: фикс + 10% от выручки</p>
                </div>
              </Card>
              <Card className="bg-white/5 border border-white/10 p-6">
                <div className="flex items-center space-x-4">
                  <Icon name="TrendingUp" className="text-foxmetod-orange" size={32} />
                  <p className="text-white">Нет потолка дохода</p>
                </div>
              </Card>
              <Card className="bg-white/5 border border-white/10 p-6">
                <div className="flex items-center space-x-4">
                  <Icon name="Calendar" className="text-foxmetod-orange" size={32} />
                  <p className="text-white">28 дней отпуска</p>
                </div>
              </Card>
              <Card className="bg-white/5 border border-white/10 p-6">
                <div className="flex items-center space-x-4">
                  <Icon name="Users" className="text-foxmetod-orange" size={32} />
                  <p className="text-white">Поддержка команды</p>
                </div>
              </Card>
              <Card className="bg-white/5 border border-white/10 p-6">
                <div className="flex items-center space-x-4">
                  <Icon name="GraduationCap" className="text-foxmetod-orange" size={32} />
                  <p className="text-white">Участие в проектах</p>
                </div>
              </Card>
            </div>
            
            <Card className="bg-foxmetod-orange/10 border border-foxmetod-orange/30 p-8">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Доход</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                  <span className="text-white">Минимум</span>
                  <span className="text-foxmetod-orange font-bold text-lg">80 000₽</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                  <span className="text-white">Базовый</span>
                  <span className="text-foxmetod-orange font-bold text-lg">150 000₽</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                  <span className="text-white">Амбициозный</span>
                  <span className="text-foxmetod-orange font-bold text-lg">300 000₽+</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 9: Кейсы */}
      <section id="cases" className="min-h-screen flex items-center px-6 lg:px-12 py-20 bg-white/5">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-16 text-center">Кейсы</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/5 border border-white/10 p-8">
              <h3 className="text-foxmetod-orange font-semibold text-lg mb-4">Кейс 1</h3>
              <p className="text-white leading-relaxed">
                Стратегическая сессия → CRM и сопровождение → рост продаж на <span className="text-foxmetod-orange font-bold">30%</span>
              </p>
            </Card>
            <Card className="bg-white/5 border border-white/10 p-8">
              <h3 className="text-foxmetod-orange font-semibold text-lg mb-4">Кейс 2</h3>
              <p className="text-white leading-relaxed">
                Внедрение ИИ → снижение ручных операций на <span className="text-foxmetod-orange font-bold">40%</span>
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 10: Атмосфера */}
      <section id="atmosphere" className="min-h-screen flex items-center px-6 lg:px-12 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-16">Атмосфера</h1>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/5 border border-white/10 p-8 text-center hover:bg-white/10 transition-all duration-300">
              <Icon name="Users" className="text-foxmetod-orange mx-auto mb-4" size={48} />
              <p className="text-white">Команда экспертов</p>
            </Card>
            <Card className="bg-white/5 border border-white/10 p-8 text-center hover:bg-white/10 transition-all duration-300">
              <Icon name="Zap" className="text-foxmetod-orange mx-auto mb-4" size={48} />
              <p className="text-white">Поддержка, не бюрократия</p>
            </Card>
            <Card className="bg-white/5 border border-white/10 p-8 text-center hover:bg-white/10 transition-all duration-300">
              <Icon name="TrendingUp" className="text-foxmetod-orange mx-auto mb-4" size={48} />
              <p className="text-white">Растём вместе</p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default BenefitsSections;