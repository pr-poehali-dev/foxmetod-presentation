import React from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const BenefitsSections: React.FC = () => {
  return (
    <>
      {/* Section 8: Бенефиты */}
      <section id="benefits" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-16 text-center">Что получаешь ты</h1>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <Card className="bg-foxmetod-gray border-0 p-6 flex items-center space-x-4">
                <Icon name="DollarSign" className="text-foxmetod-orange" size={32} />
                <p className="text-white text-lg">Высокий доход: фикс + % от выручки (10% + бонусы)</p>
              </Card>
              <Card className="bg-foxmetod-gray border-0 p-6 flex items-center space-x-4">
                <Icon name="TrendingUp" className="text-foxmetod-orange" size={32} />
                <p className="text-white text-lg">Нет потолка дохода — чем больше сделок, тем выше заработок</p>
              </Card>
              <Card className="bg-foxmetod-gray border-0 p-6 flex items-center space-x-4">
                <Icon name="Calendar" className="text-foxmetod-orange" size={32} />
                <p className="text-white text-lg">Оплачиваемый отпуск 28 дней</p>
              </Card>
              <Card className="bg-foxmetod-gray border-0 p-6 flex items-center space-x-4">
                <Icon name="Users" className="text-foxmetod-orange" size={32} />
                <p className="text-white text-lg">Поддержка и обучение от команды</p>
              </Card>
              <Card className="bg-foxmetod-gray border-0 p-6 flex items-center space-x-4">
                <Icon name="Briefcase" className="text-foxmetod-orange" size={32} />
                <p className="text-white text-lg"><strong>Возможность участвовать в стратегических сессиях клиентов</strong></p>
              </Card>
              <Card className="bg-foxmetod-gray border-0 p-6 flex items-center space-x-4">
                <Icon name="GraduationCap" className="text-foxmetod-orange" size={32} />
                <p className="text-white text-lg"><strong>Участие в консалтинговых проектах в роли помощника</strong></p>
              </Card>
              <Card className="bg-foxmetod-gray border-0 p-6 flex items-center space-x-4">
                <Icon name="Gift" className="text-foxmetod-orange" size={32} />
                <p className="text-white text-lg">Корпоративные подарки</p>
              </Card>
            </div>
            
            <Card className="bg-foxmetod-gray border-foxmetod-orange border-2 p-8">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Потенциальный доход</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center p-4 bg-foxmetod-dark rounded-lg">
                  <span className="text-white text-lg">Минимум</span>
                  <span className="text-foxmetod-orange font-bold text-xl">80 тыс. ₽</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-foxmetod-dark rounded-lg">
                  <span className="text-white text-lg">Базовый</span>
                  <span className="text-foxmetod-orange font-bold text-xl">150 тыс. ₽</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-foxmetod-dark rounded-lg">
                  <span className="text-white text-lg">Амбициозный</span>
                  <span className="text-foxmetod-orange font-bold text-xl">300+ тыс. ₽</span>
                </div>
              </div>
              <div className="h-48 flex items-end justify-center space-x-6">
                <div className="bg-foxmetod-orange w-20 h-16 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">80к</span>
                </div>
                <div className="bg-foxmetod-orange w-20 h-24 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">150к</span>
                </div>
                <div className="bg-foxmetod-orange w-20 h-32 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">300к+</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 9: Клиенты и кейсы */}
      <section id="cases" className="min-h-screen flex items-center px-6 py-20 bg-foxmetod-gray/20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-16 text-center">Наши клиенты и кейсы</h1>
          <div className="space-y-8">
            <Card className="bg-foxmetod-gray border-0 p-8 flex items-center space-x-6">
              <Icon name="Building" className="text-foxmetod-orange flex-shrink-0" size={64} />
              <p className="text-xl text-white">Малый и средний бизнес, крупные компании из разных сфер</p>
            </Card>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-foxmetod-gray border-foxmetod-orange border-2 p-8">
                <div className="flex items-start space-x-4 mb-4">
                  <Icon name="ArrowRight" className="text-foxmetod-orange mt-1" size={32} />
                  <div>
                    <p className="text-white text-lg mb-2"><strong>Кейс 1:</strong></p>
                    <p className="text-foxmetod-blue-light">Компания пришла на стратегическую сессию → докупила CRM и сопровождение → увеличила продажи на <span className="text-foxmetod-orange font-bold">30%</span></p>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-foxmetod-gray border-foxmetod-orange border-2 p-8">
                <div className="flex items-start space-x-4 mb-4">
                  <Icon name="ArrowRight" className="text-foxmetod-orange mt-1" size={32} />
                  <div>
                    <p className="text-white text-lg mb-2"><strong>Кейс 2:</strong></p>
                    <p className="text-foxmetod-blue-light">Проект по внедрению ИИ → снижение ручных операций на <span className="text-foxmetod-orange font-bold">40%</span></p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Атмосфера */}
      <section id="atmosphere" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-16">Атмосфера FOXMetoD</h1>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-foxmetod-gray border-0 p-8 text-center hover:bg-foxmetod-gray-light transition-colors">
              <Icon name="Users" className="text-foxmetod-orange mx-auto mb-6" size={80} />
              <p className="text-xl text-white">Мы — команда экспертов, которая верит в силу идей и системного подхода</p>
            </Card>
            <Card className="bg-foxmetod-gray border-0 p-8 text-center hover:bg-foxmetod-gray-light transition-colors">
              <Icon name="Zap" className="text-foxmetod-orange mx-auto mb-6" size={80} />
              <p className="text-xl text-white">У нас поддержка и драйв, а не бюрократия</p>
            </Card>
            <Card className="bg-foxmetod-gray border-0 p-8 text-center hover:bg-foxmetod-gray-light transition-colors">
              <Icon name="TrendingUp" className="text-foxmetod-orange mx-auto mb-6" size={80} />
              <p className="text-xl text-white">Мы растём вместе с клиентами</p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default BenefitsSections;