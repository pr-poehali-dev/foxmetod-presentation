import React from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const CompanySections: React.FC = () => {
  return (
    <>
      {/* Section 2: О компании */}
      <section id="about" className="min-h-screen flex items-center px-6 lg:px-12 py-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-20 text-center">Кто мы такие?</h1>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg text-foxmetod-blue-light leading-relaxed">
                💼 Мы не просто консультанты — мы <span className="text-foxmetod-orange font-semibold">волшебники бизнеса!</span> Превращаем хаос в систему, мечты в прибыль, а тебя — в настоящего профессионала продаж.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <Icon name="Target" className="text-foxmetod-orange mx-auto mb-2" size={32} />
                  <p className="text-white text-sm font-medium">Стратегия</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <Icon name="Settings" className="text-foxmetod-orange mx-auto mb-2" size={32} />
                  <p className="text-white text-sm font-medium">Процессы</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <Icon name="Cpu" className="text-foxmetod-orange mx-auto mb-2" size={32} />
                  <p className="text-white text-sm font-medium">Технологии</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">🔥 Что мы делаем</h3>
              <div className="space-y-3 text-foxmetod-blue-light">
                <p>🎯 Стратегические сессии</p>
                <p>⚡ Организационное развитие</p>
                <p>🤖 Внедрение ИИ</p>
                <p>💡 Консалтинг по бизнесу</p>
                <p>🚀 Обучение команд</p>
                <p>✨ Сопровождение изменений</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Миссия */}
      <section id="mission" className="min-h-screen flex items-center px-6 lg:px-12 py-20 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-16">Наша суперсила</h1>
          <div className="bg-foxmetod-orange/10 border border-foxmetod-orange/30 p-12 rounded-3xl">
            <p className="text-xl lg:text-2xl text-white leading-relaxed">
              🎯 Мы <span className="text-foxmetod-orange font-semibold">освобождаем предпринимателей</span> от рутины! Создаём системы, которые работают сами, а владельцы наконец-то могут отдыхать на Мальдивах, пока деньги капают на счёт! 💰
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Ценности */}
      <section id="values" className="min-h-screen flex items-center px-6 lg:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-16 text-center">За что нас любят</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
              <Icon name="Heart" className="text-foxmetod-orange mb-3" size={32} />
              <h3 className="text-white font-semibold text-lg mb-2">Честность</h3>
              <p className="text-foxmetod-blue-light text-sm">Никаких скрытых подводных камней! 🦈</p>
            </Card>
            <Card className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
              <Icon name="Award" className="text-foxmetod-orange mb-3" size={32} />
              <h3 className="text-white font-semibold text-lg mb-2">Качество</h3>
              <p className="text-foxmetod-blue-light text-sm">Уровень Big4, но по-человечески 💎</p>
            </Card>
            <Card className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
              <Icon name="Lightbulb" className="text-foxmetod-orange mb-3" size={32} />
              <h3 className="text-white font-semibold text-lg mb-2">Инновации</h3>
              <p className="text-foxmetod-blue-light text-sm">Живём в будущем уже сегодня 🚀</p>
            </Card>
            <Card className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
              <Icon name="Handshake" className="text-foxmetod-orange mb-3" size={32} />
              <h3 className="text-white font-semibold text-lg mb-2">Партнёрство</h3>
              <p className="text-foxmetod-blue-light text-sm">Одна команда — одна мечта! 🤝</p>
            </Card>
            <Card className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <Icon name="TrendingUp" className="text-foxmetod-orange mb-3" size={32} />
              <h3 className="text-white font-semibold text-lg mb-2">Развитие</h3>
              <p className="text-foxmetod-blue-light text-sm">Растём как на дрожжах! 📈</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 5: Достижения */}
      <section id="proud" className="min-h-screen flex items-center px-6 lg:px-12 py-20 bg-white/5">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-16 text-center">Чем гордимся</h1>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white/5 border border-white/10 p-8 text-center hover:bg-white/10 transition-all duration-300">
              <Icon name="Users" className="text-foxmetod-orange mx-auto mb-4" size={48} />
              <p className="text-white">Клиенты влюбляются в нас навсегда! 💕</p>
            </Card>
            <Card className="bg-white/5 border border-white/10 p-8 text-center hover:bg-white/10 transition-all duration-300">
              <Icon name="CheckCircle" className="text-foxmetod-orange mx-auto mb-4" size={48} />
              <p className="text-white">100% попадание в цель! 🎯</p>
            </Card>
            <Card className="bg-white/5 border border-white/10 p-8 text-center hover:bg-white/10 transition-all duration-300">
              <Icon name="Target" className="text-foxmetod-orange mx-auto mb-4" size={48} />
              <p className="text-white">Революционизируем бизнес! ⚡</p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanySections;