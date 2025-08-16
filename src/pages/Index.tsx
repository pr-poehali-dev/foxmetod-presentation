import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

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

      {/* Content Sections */}
      <div className="pt-20 pb-20 lg:pb-8">
        
        {/* Section 1: Добро пожаловать */}
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

        {/* Section 6: Роль */}
        <section id="role" className="min-h-screen flex items-center px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-16 text-center">Твоя роль в FOXMetoD</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-foxmetod-gray border-0 p-6 hover:bg-foxmetod-gray-light transition-colors">
                <Icon name="ShoppingCart" className="text-foxmetod-orange mb-4" size={32} />
                <p className="text-white text-lg">Продажи консалтинговых услуг (готовая база + лиды с рекламы и мероприятий)</p>
              </Card>
              <Card className="bg-foxmetod-gray border-0 p-6 hover:bg-foxmetod-gray-light transition-colors">
                <Icon name="Mail" className="text-foxmetod-orange mb-4" size={32} />
                <p className="text-white text-lg"><strong>Переписка с клиентами</strong> (почта, мессенджеры, CRM)</p>
              </Card>
              <Card className="bg-foxmetod-gray border-0 p-6 hover:bg-foxmetod-gray-light transition-colors">
                <Icon name="Phone" className="text-foxmetod-orange mb-4" size={32} />
                <p className="text-white text-lg"><strong>Звонки через IP-телефонию</strong> для установления контакта и переговоров</p>
              </Card>
              <Card className="bg-foxmetod-gray border-0 p-6 hover:bg-foxmetod-gray-light transition-colors">
                <Icon name="Video" className="text-foxmetod-orange mb-4" size={32} />
                <p className="text-white text-lg"><strong>Zoom-встречи</strong>: снятие запроса, знакомство клиента с экспертами</p>
              </Card>
              <Card className="bg-foxmetod-gray border-0 p-6 hover:bg-foxmetod-gray-light transition-colors">
                <Icon name="Database" className="text-foxmetod-orange mb-4" size={32} />
                <p className="text-white text-lg">Ведение клиентов в CRM <strong>Yougile</strong> → обучение предоставим</p>
              </Card>
              <Card className="bg-foxmetod-gray border-0 p-6 hover:bg-foxmetod-gray-light transition-colors">
                <Icon name="FileText" className="text-foxmetod-orange mb-4" size={32} />
                <p className="text-white text-lg"><strong>Составление и согласование коммерческих предложений</strong></p>
              </Card>
              <Card className="bg-foxmetod-gray border-0 p-6 hover:bg-foxmetod-gray-light transition-colors">
                <Icon name="Receipt" className="text-foxmetod-orange mb-4" size={32} />
                <p className="text-white text-lg"><strong>Подготовка договоров, выставление счетов, контроль оплат</strong></p>
              </Card>
              <Card className="bg-foxmetod-gray border-0 p-6 hover:bg-foxmetod-gray-light transition-colors">
                <Icon name="Clock" className="text-foxmetod-orange mb-4" size={32} />
                <p className="text-white text-lg">Работа с дебиторской задолженностью</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 7: Ожидания */}
        <section id="expectations" className="min-h-screen flex items-center px-6 py-20 bg-foxmetod-gray/20">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-16 text-center">Что мы ждём от тебя</h1>
            <div className="space-y-8">
              <Card className="bg-foxmetod-gray border-0 p-8 flex items-center space-x-6">
                <Icon name="Target" className="text-foxmetod-orange flex-shrink-0" size={48} />
                <p className="text-xl text-white">Выполнение плана продаж: от <strong className="text-foxmetod-orange">500 000 ₽</strong> на испытательном сроке</p>
              </Card>
              <Card className="bg-foxmetod-gray border-0 p-8 flex items-center space-x-6">
                <Icon name="MessageSquare" className="text-foxmetod-orange flex-shrink-0" size={48} />
                <p className="text-xl text-white">Умение вести грамотную деловую переписку</p>
              </Card>
              <Card className="bg-foxmetod-gray border-0 p-8 flex items-center space-x-6">
                <Icon name="Phone" className="text-foxmetod-orange flex-shrink-0" size={48} />
                <p className="text-xl text-white">Навык проведения звонков и Zoom-встреч</p>
              </Card>
              <Card className="bg-foxmetod-gray border-0 p-8 flex items-center space-x-6">
                <Icon name="Eye" className="text-foxmetod-orange flex-shrink-0" size={48} />
                <p className="text-xl text-white">Внимательность к документам и срокам (КП, договоры, счета)</p>
              </Card>
              <Card className="bg-foxmetod-gray border-0 p-8 flex items-center space-x-6">
                <Icon name="Zap" className="text-foxmetod-orange flex-shrink-0" size={48} />
                <p className="text-xl text-white">Инициативность и готовность учиться</p>
              </Card>
            </div>
          </div>
        </section>

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
      </div>
    </div>
  );
};

export default PresentationApp;