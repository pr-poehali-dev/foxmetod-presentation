import React from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const RoleSections: React.FC = () => {
  return (
    <>
      {/* Section 6: Роль */}
      <section id="role" className="min-h-screen flex items-center px-6 lg:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-16 text-center">Что тебя ждёт?</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
              <Icon name="ShoppingCart" className="text-foxmetod-orange mb-3" size={32} />
              <p className="text-white">🎯 Продавать крутые консалтинговые услуги</p>
            </Card>
            <Card className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
              <Icon name="Mail" className="text-foxmetod-orange mb-3" size={32} />
              <p className="text-white">💬 Болтать с клиентами и очаровывать их</p>
            </Card>
            <Card className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
              <Icon name="Phone" className="text-foxmetod-orange mb-3" size={32} />
              <p className="text-white">📞 Звонить и убеждать, что мы лучшие</p>
            </Card>
            <Card className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
              <Icon name="Video" className="text-foxmetod-orange mb-3" size={32} />
              <p className="text-white">🎥 Проводить эпичные Zoom-встречи</p>
            </Card>
            <Card className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
              <Icon name="Database" className="text-foxmetod-orange mb-3" size={32} />
              <p className="text-white">📊 Управлять CRM как настоящий про</p>
            </Card>
            <Card className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
              <Icon name="FileText" className="text-foxmetod-orange mb-3" size={32} />
              <p className="text-white">📄 Создавать неотразимые КП</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 7: Ожидания */}
      <section id="expectations" className="min-h-screen flex items-center px-6 lg:px-12 py-20 bg-white/5">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-16 text-center">Секреты успеха</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/5 border border-white/10 p-8">
              <Icon name="Target" className="text-foxmetod-orange mb-4" size={40} />
              <h3 className="text-white font-semibold text-lg mb-2">🎯 План продаж</h3>
              <p className="text-foxmetod-blue-light">Только 500 000₽ на старте — детские игры!</p>
            </Card>
            <Card className="bg-white/5 border border-white/10 p-8">
              <Icon name="MessageSquare" className="text-foxmetod-orange mb-4" size={40} />
              <h3 className="text-white font-semibold text-lg mb-2">💬 Коммуникация</h3>
              <p className="text-foxmetod-blue-light">Умей писать так, чтобы клиенты млели</p>
            </Card>
            <Card className="bg-white/5 border border-white/10 p-8">
              <Icon name="Phone" className="text-foxmetod-orange mb-4" size={40} />
              <h3 className="text-white font-semibold text-lg mb-2">🤝 Переговоры</h3>
              <p className="text-foxmetod-blue-light">Будь харизматичным как Джордан Белфорт</p>
            </Card>
            <Card className="bg-white/5 border border-white/10 p-8">
              <Icon name="Zap" className="text-foxmetod-orange mb-4" size={40} />
              <h3 className="text-white font-semibold text-lg mb-2">⚡ Драйв</h3>
              <p className="text-foxmetod-blue-light">Хочешь расти? Мы тебя прокачаем!</p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default RoleSections;