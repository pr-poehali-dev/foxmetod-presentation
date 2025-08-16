import React from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const RoleSections: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default RoleSections;