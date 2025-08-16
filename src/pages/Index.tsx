import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Slide {
  id: number;
  title: string;
  content: React.ReactNode;
}

const PresentationApp = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Слайд 1: Приветствие
  const WelcomeSlide = () => (
    <div className="h-full flex flex-col justify-center items-center text-center space-y-8">
      <div className="bg-white rounded-lg p-4 mb-8">
        <img 
          src="https://cdn.poehali.dev/files/0e173fb2-e606-4f78-bf2a-2d91cb8b7945.jpg" 
          alt="FOXMetoD Logo" 
          className="h-16 w-auto"
        />
      </div>
      <h1 className="text-6xl font-bold text-white mb-4">
        Добро пожаловать в FOXMetoD!
      </h1>
      <p className="text-2xl text-foxmetod-blue-light italic">
        Вместе строим бизнес будущего
      </p>
    </div>
  );

  // Слайд 2: О компании
  const AboutSlide = () => (
    <div className="h-full flex flex-col justify-center space-y-8">
      <h1 className="text-5xl font-bold text-white mb-8">О компании FOXMetoD</h1>
      <div className="space-y-6 text-xl text-white">
        <div className="flex items-start space-x-4">
          <div className="w-3 h-3 bg-foxmetod-orange rounded-full mt-2 flex-shrink-0"></div>
          <p>FOXMetoD — консалтинговое агентство, которое помогает предпринимателям и компаниям расти через стратегию, цифровые решения и ИИ.</p>
        </div>
        <div className="flex items-start space-x-4">
          <div className="w-3 h-3 bg-foxmetod-orange rounded-full mt-2 flex-shrink-0"></div>
          <p>Мы работаем в трёх измерениях: <strong>стратегия, процессы, технологии</strong>.</p>
        </div>
        <div className="flex items-start space-x-4">
          <div className="w-3 h-3 bg-foxmetod-orange rounded-full mt-2 flex-shrink-0"></div>
          <p>6 ключевых направлений: стратегические сессии, организационное развитие, внедрение ИИ, консалтинг по бизнесу, обучение команд, сопровождение изменений.</p>
        </div>
      </div>
    </div>
  );

  // Слайд 3: Миссия
  const MissionSlide = () => (
    <div className="h-full flex flex-col justify-center items-center text-center space-y-8">
      <h1 className="text-5xl font-bold text-white mb-8">Миссия</h1>
      <div className="bg-foxmetod-gray p-8 rounded-lg max-w-4xl">
        <p className="text-2xl text-white leading-relaxed">
          <strong>Мы помогаем предпринимателям обрести свободу и уверенность в управлении бизнесом, создавая системы, которые работают даже без их постоянного участия.</strong>
        </p>
      </div>
    </div>
  );

  // Слайд 4: Ценности
  const ValuesSlide = () => (
    <div className="h-full flex flex-col justify-center space-y-8">
      <h1 className="text-5xl font-bold text-white mb-8">Наши ценности</h1>
      <div className="grid grid-cols-1 gap-6 text-lg text-white">
        <div className="flex items-start space-x-4">
          <Icon name="Heart" className="text-foxmetod-orange mt-1" size={24} />
          <div>
            <strong>Честность и прозрачность</strong> (открытые правила игры).
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Icon name="Award" className="text-foxmetod-orange mt-1" size={24} />
          <div>
            <strong>Профессионализм и качество</strong> (экспертиза на уровне Big4).
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Icon name="Lightbulb" className="text-foxmetod-orange mt-1" size={24} />
          <div>
            <strong>Инновации</strong> (новые технологии, включая ИИ).
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Icon name="Handshake" className="text-foxmetod-orange mt-1" size={24} />
          <div>
            <strong>Партнёрство с клиентом</strong> (работаем как единая команда).
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Icon name="TrendingUp" className="text-foxmetod-orange mt-1" size={24} />
          <div>
            <strong>Развитие и обучение</strong> (каждый сотрудник растёт вместе с компанией).
          </div>
        </div>
      </div>
    </div>
  );

  // Слайд 5: Чем гордимся
  const ProudSlide = () => (
    <div className="h-full flex flex-col justify-center space-y-8">
      <h1 className="text-5xl font-bold text-white mb-8">Чем мы гордимся</h1>
      <div className="space-y-6 text-xl text-white">
        <div className="flex items-start space-x-4">
          <Icon name="Users" className="text-foxmetod-orange mt-1" size={32} />
          <p>Клиенты приходят за одной услугой, но остаются надолго → <strong className="text-foxmetod-orange">LTV растёт за счёт докупки решений</strong>.</p>
        </div>
        <div className="flex items-start space-x-4">
          <Icon name="CheckCircle" className="text-foxmetod-orange mt-1" size={32} />
          <p>Успешные внедрения CRM, ИИ и стратегий в компаниях разных отраслей.</p>
        </div>
        <div className="flex items-start space-x-4">
          <Icon name="Target" className="text-foxmetod-orange mt-1" size={32} />
          <p>Мы не только решаем задачи, но и меняем подход к управлению бизнесом.</p>
        </div>
      </div>
      <div className="mt-12 bg-foxmetod-gray p-6 rounded-lg">
        <div className="flex items-center justify-center space-x-8">
          <div className="text-center">
            <Icon name="ArrowRight" className="text-foxmetod-orange mx-auto mb-2" size={32} />
            <p className="text-foxmetod-blue-light">Первичная услуга</p>
          </div>
          <Icon name="ArrowRight" className="text-white" size={24} />
          <div className="text-center">
            <Icon name="Plus" className="text-foxmetod-orange mx-auto mb-2" size={32} />
            <p className="text-foxmetod-blue-light">Дополнительные услуги</p>
          </div>
          <Icon name="ArrowRight" className="text-white" size={24} />
          <div className="text-center">
            <Icon name="TrendingUp" className="text-foxmetod-orange mx-auto mb-2" size={32} />
            <p className="text-foxmetod-blue-light">Рост LTV</p>
          </div>
        </div>
      </div>
    </div>
  );

  // Слайд 6: Роль
  const RoleSlide = () => (
    <div className="h-full flex flex-col justify-center space-y-6">
      <h1 className="text-5xl font-bold text-white mb-8">Твоя роль в FOXMetoD</h1>
      <div className="grid grid-cols-2 gap-6 text-lg text-white">
        <div className="flex items-start space-x-3">
          <Icon name="ShoppingCart" className="text-foxmetod-orange mt-1" size={20} />
          <p>Продажи консалтинговых услуг (готовая база + лиды с рекламы и мероприятий).</p>
        </div>
        <div className="flex items-start space-x-3">
          <Icon name="Mail" className="text-foxmetod-orange mt-1" size={20} />
          <p><strong>Переписка с клиентами</strong> (почта, мессенджеры, CRM).</p>
        </div>
        <div className="flex items-start space-x-3">
          <Icon name="Phone" className="text-foxmetod-orange mt-1" size={20} />
          <p><strong>Звонки через IP-телефонию</strong> для установления контакта и переговоров.</p>
        </div>
        <div className="flex items-start space-x-3">
          <Icon name="Video" className="text-foxmetod-orange mt-1" size={20} />
          <p><strong>Zoom-встречи</strong>: снятие запроса, знакомство клиента с экспертами и собственником.</p>
        </div>
        <div className="flex items-start space-x-3">
          <Icon name="Database" className="text-foxmetod-orange mt-1" size={20} />
          <p>Ведение клиентов в CRM <strong>Yougile</strong> → обучение и инструкции предоставим.</p>
        </div>
        <div className="flex items-start space-x-3">
          <Icon name="FileText" className="text-foxmetod-orange mt-1" size={20} />
          <p><strong>Составление и согласование коммерческих предложений.</strong></p>
        </div>
        <div className="flex items-start space-x-3">
          <Icon name="Receipt" className="text-foxmetod-orange mt-1" size={20} />
          <p><strong>Подготовка договоров, выставление счетов, контроль оплат.</strong></p>
        </div>
        <div className="flex items-start space-x-3">
          <Icon name="Clock" className="text-foxmetod-orange mt-1" size={20} />
          <p>Работа с дебиторской задолженностью.</p>
        </div>
      </div>
    </div>
  );

  // Слайд 7: Ожидания
  const ExpectationsSlide = () => (
    <div className="h-full flex flex-col justify-center space-y-8">
      <h1 className="text-5xl font-bold text-white mb-8">Что мы ждём от тебя</h1>
      <div className="space-y-6 text-xl text-white">
        <div className="flex items-start space-x-4">
          <Icon name="Target" className="text-foxmetod-orange mt-1" size={28} />
          <p>Выполнение плана продаж: от <strong className="text-foxmetod-orange">500 000 ₽</strong> на испытательном сроке.</p>
        </div>
        <div className="flex items-start space-x-4">
          <Icon name="MessageSquare" className="text-foxmetod-orange mt-1" size={28} />
          <p>Умение вести грамотную деловую переписку.</p>
        </div>
        <div className="flex items-start space-x-4">
          <Icon name="Phone" className="text-foxmetod-orange mt-1" size={28} />
          <p>Навык проведения звонков и Zoom-встреч.</p>
        </div>
        <div className="flex items-start space-x-4">
          <Icon name="Eye" className="text-foxmetod-orange mt-1" size={28} />
          <p>Внимательность к документам и срокам (КП, договоры, счета).</p>
        </div>
        <div className="flex items-start space-x-4">
          <Icon name="Zap" className="text-foxmetod-orange mt-1" size={28} />
          <p>Инициативность и готовность учиться.</p>
        </div>
      </div>
    </div>
  );

  // Слайд 8: Что получаешь
  const BenefitsSlide = () => (
    <div className="h-full flex space-x-8">
      <div className="flex-1 space-y-6">
        <h1 className="text-5xl font-bold text-white mb-8">Что получаешь ты</h1>
        <div className="space-y-4 text-lg text-white">
          <div className="flex items-start space-x-3">
            <Icon name="DollarSign" className="text-foxmetod-orange mt-1" size={24} />
            <p>Высокий доход: фикс + % от выручки (10 % + бонусы).</p>
          </div>
          <div className="flex items-start space-x-3">
            <Icon name="TrendingUp" className="text-foxmetod-orange mt-1" size={24} />
            <p>Нет потолка дохода — чем больше сделок, тем выше заработок.</p>
          </div>
          <div className="flex items-start space-x-3">
            <Icon name="Calendar" className="text-foxmetod-orange mt-1" size={24} />
            <p>Оплачиваемый отпуск 28 дней.</p>
          </div>
          <div className="flex items-start space-x-3">
            <Icon name="Users" className="text-foxmetod-orange mt-1" size={24} />
            <p>Поддержка и обучение от команды.</p>
          </div>
          <div className="flex items-start space-x-3">
            <Icon name="Briefcase" className="text-foxmetod-orange mt-1" size={24} />
            <p><strong>Возможность участвовать в стратегических сессиях клиентов.</strong></p>
          </div>
          <div className="flex items-start space-x-3">
            <Icon name="GraduationCap" className="text-foxmetod-orange mt-1" size={24} />
            <p><strong>Участие в консалтинговых проектах в роли помощника</strong> — для тех, кто хочет развиваться как консультант.</p>
          </div>
          <div className="flex items-start space-x-3">
            <Icon name="Gift" className="text-foxmetod-orange mt-1" size={24} />
            <p>Корпоративные подарки.</p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="bg-foxmetod-gray p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Потенциальный доход</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-foxmetod-dark rounded">
              <span className="text-white">Минимум</span>
              <span className="text-foxmetod-orange font-bold">80 тыс. ₽</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-foxmetod-dark rounded">
              <span className="text-white">Базовый</span>
              <span className="text-foxmetod-orange font-bold">150 тыс. ₽</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-foxmetod-dark rounded">
              <span className="text-white">Амбициозный</span>
              <span className="text-foxmetod-orange font-bold">300+ тыс. ₽</span>
            </div>
          </div>
          <div className="mt-6 h-48 flex items-end justify-center space-x-4">
            <div className="bg-foxmetod-orange w-16 h-16 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">80к</span>
            </div>
            <div className="bg-foxmetod-orange w-16 h-24 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">150к</span>
            </div>
            <div className="bg-foxmetod-orange w-16 h-32 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">300к+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Слайд 9: Клиенты и кейсы
  const CasesSlide = () => (
    <div className="h-full flex flex-col justify-center space-y-8">
      <h1 className="text-5xl font-bold text-white mb-8">Наши клиенты и кейсы</h1>
      <div className="space-y-6 text-xl text-white">
        <div className="flex items-start space-x-4">
          <Icon name="Building" className="text-foxmetod-orange mt-1" size={32} />
          <p>Малый и средний бизнес, крупные компании из разных сфер.</p>
        </div>
        <div className="bg-foxmetod-gray p-6 rounded-lg">
          <div className="flex items-center space-x-4 mb-4">
            <Icon name="ArrowRight" className="text-foxmetod-orange" size={24} />
            <p><strong>Пример:</strong> компания пришла на стратегическую сессию → докупила CRM и сопровождение → увеличила продажи на <span className="text-foxmetod-orange">30 %</span>.</p>
          </div>
        </div>
        <div className="bg-foxmetod-gray p-6 rounded-lg">
          <div className="flex items-center space-x-4 mb-4">
            <Icon name="ArrowRight" className="text-foxmetod-orange" size={24} />
            <p><strong>Пример:</strong> проект по внедрению ИИ → снижение ручных операций на <span className="text-foxmetod-orange">40 %</span>.</p>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-foxmetod-gray p-6 rounded-lg">
        <div className="flex items-center justify-center space-x-8">
          <div className="text-center">
            <Icon name="Presentation" className="text-foxmetod-orange mx-auto mb-2" size={40} />
            <p className="text-white text-sm">Первичная услуга</p>
          </div>
          <Icon name="ArrowRight" className="text-white" size={24} />
          <div className="text-center">
            <Icon name="Plus" className="text-foxmetod-orange mx-auto mb-2" size={40} />
            <p className="text-white text-sm">Дополнительные услуги</p>
          </div>
          <Icon name="ArrowRight" className="text-white" size={24} />
          <div className="text-center">
            <Icon name="LineChart" className="text-foxmetod-orange mx-auto mb-2" size={40} />
            <p className="text-white text-sm">Рост LTV</p>
          </div>
        </div>
      </div>
    </div>
  );

  // Слайд 10: Атмосфера
  const AtmosphereSlide = () => (
    <div className="h-full flex flex-col justify-center items-center text-center space-y-8">
      <h1 className="text-5xl font-bold text-white mb-8">Атмосфера FOXMetoD</h1>
      <div className="max-w-4xl space-y-8 text-2xl text-white">
        <div className="flex items-center justify-center space-x-4">
          <Icon name="Users" className="text-foxmetod-orange" size={48} />
          <p>Мы — команда экспертов, которая верит в силу идей и системного подхода.</p>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <Icon name="Zap" className="text-foxmetod-orange" size={48} />
          <p>У нас поддержка и драйв, а не бюрократия.</p>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <Icon name="TrendingUp" className="text-foxmetod-orange" size={48} />
          <p>Мы растём вместе с клиентами.</p>
        </div>
      </div>
    </div>
  );

  // Слайд 11: Первые шаги
  const FirstStepsSlide = () => (
    <div className="h-full flex flex-col justify-center space-y-8">
      <h1 className="text-5xl font-bold text-white mb-8">Твои первые шаги</h1>
      <div className="grid grid-cols-1 gap-6 text-xl text-white">
        <div className="flex items-center space-x-6 p-4 bg-foxmetod-gray rounded-lg">
          <div className="bg-foxmetod-orange text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">1</div>
          <p>Знакомство с командой.</p>
        </div>
        <div className="flex items-center space-x-6 p-4 bg-foxmetod-gray rounded-lg">
          <div className="bg-foxmetod-orange text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">2</div>
          <p>Обучение работе в CRM Yougile.</p>
        </div>
        <div className="flex items-center space-x-6 p-4 bg-foxmetod-gray rounded-lg">
          <div className="bg-foxmetod-orange text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">3</div>
          <p>Первые звонки и переписки.</p>
        </div>
        <div className="flex items-center space-x-6 p-4 bg-foxmetod-gray rounded-lg">
          <div className="bg-foxmetod-orange text-white w-12 h-12 rounded-full flex items-center justify-center font-xl text-xl">4</div>
          <p>Совместные Zoom-встречи с наставником.</p>
        </div>
        <div className="flex items-center space-x-6 p-4 bg-foxmetod-gray rounded-lg">
          <div className="bg-foxmetod-orange text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">5</div>
          <p>Выход на первые сделки.</p>
        </div>
      </div>
    </div>
  );

  // Слайд 12: Финал
  const FinalSlide = () => (
    <div className="h-full flex flex-col justify-center items-center text-center space-y-8">
      <div className="bg-white rounded-lg p-4 mb-8">
        <img 
          src="https://cdn.poehali.dev/files/0e173fb2-e606-4f78-bf2a-2d91cb8b7945.jpg" 
          alt="FOXMetoD Logo" 
          className="h-16 w-auto"
        />
      </div>
      <h1 className="text-6xl font-bold text-white mb-4">
        Твоя карьера начинается здесь!
      </h1>
      <p className="text-2xl text-foxmetod-blue-light italic">
        В FOXMetoD нет потолка дохода — всё зависит от тебя.
      </p>
      <div className="mt-12">
        <Icon name="Rocket" className="text-foxmetod-orange mx-auto" size={64} />
      </div>
    </div>
  );

  const slides: Slide[] = [
    { id: 1, title: "Добро пожаловать", content: <WelcomeSlide /> },
    { id: 2, title: "О компании", content: <AboutSlide /> },
    { id: 3, title: "Миссия", content: <MissionSlide /> },
    { id: 4, title: "Ценности", content: <ValuesSlide /> },
    { id: 5, title: "Чем гордимся", content: <ProudSlide /> },
    { id: 6, title: "Твоя роль", content: <RoleSlide /> },
    { id: 7, title: "Ожидания", content: <ExpectationsSlide /> },
    { id: 8, title: "Что получаешь", content: <BenefitsSlide /> },
    { id: 9, title: "Клиенты", content: <CasesSlide /> },
    { id: 10, title: "Атмосфера", content: <AtmosphereSlide /> },
    { id: 11, title: "Первые шаги", content: <FirstStepsSlide /> },
    { id: 12, title: "Финал", content: <FinalSlide /> }
  ];

  return (
    <div className="min-h-screen bg-foxmetod-dark">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-foxmetod-dark/90 backdrop-blur-sm border-b border-foxmetod-gray">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <h2 className="text-white font-bold text-lg">FOXMetoD Презентация</h2>
            <span className="text-foxmetod-blue-light text-sm">
              {currentSlide + 1} / {slides.length}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              variant="outline"
              size="sm"
              className="border-foxmetod-orange text-foxmetod-orange hover:bg-foxmetod-orange hover:text-white"
            >
              <Icon name="ChevronLeft" size={16} />
            </Button>
            <Button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              variant="outline"
              size="sm"
              className="border-foxmetod-orange text-foxmetod-orange hover:bg-foxmetod-orange hover:text-white"
            >
              <Icon name="ChevronRight" size={16} />
            </Button>
          </div>
        </div>
      </div>

      {/* Slide indicator dots */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-foxmetod-orange' 
                  : 'bg-foxmetod-gray hover:bg-foxmetod-gray-light'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="pt-20 pb-20 px-8">
        <Card className="w-full max-w-7xl mx-auto h-[calc(100vh-8rem)] bg-foxmetod-dark border-foxmetod-gray">
          <div className="h-full p-12">
            {slides[currentSlide].content}
          </div>
        </Card>
      </div>

      {/* Slide navigation menu */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40">
        <div className="bg-foxmetod-dark/90 backdrop-blur-sm rounded-lg p-4 max-h-96 overflow-y-auto">
          <h3 className="text-white font-semibold mb-4 text-sm">Слайды</h3>
          <div className="space-y-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`w-full text-left p-2 rounded text-sm transition-all duration-200 ${
                  index === currentSlide
                    ? 'bg-foxmetod-orange text-white'
                    : 'text-foxmetod-blue-light hover:bg-foxmetod-gray hover:text-white'
                }`}
              >
                {index + 1}. {slide.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationApp;