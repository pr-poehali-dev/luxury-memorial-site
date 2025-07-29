import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function OfferAgreement() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-8 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">Договор публичной оферты</h1>
          
          <div className="prose prose-slate max-w-none space-y-6">
            <div>
              <p className="text-muted-foreground leading-relaxed">
                Настоящий документ "Договор публичной оферты" (далее – Договор) является официальным публичным предложением 
                ООО "Вечная Память" (далее – Исполнитель). Данный Договор является публичной офертой в соответствии 
                со статьей 435 и частью 2 статьи 437 Гражданского кодекса Российской Федерации.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">1. Общие положения</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                1.1. Исполнитель, в лице ООО "Вечная Память", предлагает физическим и юридическим лицам 
                (далее – Заказчик) воспользоваться услугами по изготовлению и установке памятников, 
                надгробий, оград и других мемориальных изделий на условиях настоящего Договора.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                1.2. Местом заключения настоящего договора считается город Москва.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                1.3. Настоящий договор публичной оферты (далее – Договор) действует с момента размещения 
                его на интернет-сайте memorial.ru и до момента снятия его с сайта.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">2. Предмет договора</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                2.1. Предметом настоящего Договора является оказание Исполнителем услуг по:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• изготовлению памятников, надгробий, стел из гранита, мрамора и других материалов;</li>
                <li>• гравировке портретов, текста, орнаментов на мемориальных изделиях;</li>
                <li>• установке и монтажу мемориальных изделий;</li>
                <li>• изготовлению и установке оград для могил;</li>
                <li>• благоустройству мест захоронения;</li>
                <li>• другим работам, связанным с мемориальным оформлением.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                2.2. Конкретный перечень работ, материалы, размеры, сроки выполнения и стоимость 
                определяются в индивидуальном порядке и фиксируются в договоре или счете.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">3. Порядок заключения договора</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                3.1. Договор считается заключенным с момента получения Исполнителем заявки от Заказчика 
                и подтверждения ее принятия к исполнению.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                3.2. Заявка может быть направлена следующими способами:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• через форму заказа на сайте memorial.ru;</li>
                <li>• по телефону +7 (800) 123-45-67;</li>
                <li>• по электронной почте info@memorial.ru;</li>
                <li>• при личном обращении в офис компании.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                3.3. Акцептом (принятием) настоящей оферты является осуществление Заказчиком действий, 
                предусмотренных п. 3.2 настоящего Договора.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">4. Права и обязанности сторон</h2>
              
              <h3 className="text-lg font-medium mb-3">4.1. Исполнитель обязуется:</h3>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• выполнить работы качественно и в установленные сроки;</li>
                <li>• использовать материалы, соответствующие заявленным характеристикам;</li>
                <li>• предоставить гарантию на выполненные работы;</li>
                <li>• обеспечить сохранность персональных данных Заказчика;</li>
                <li>• своевременно информировать Заказчика о ходе выполнения работ.</li>
              </ul>

              <h3 className="text-lg font-medium mb-3">4.2. Заказчик обязуется:</h3>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• предоставить точную информацию для выполнения заказа;</li>
                <li>• произвести оплату в соответствии с условиями договора;</li>
                <li>• обеспечить доступ к месту установки мемориального изделия;</li>
                <li>• принять выполненные работы в установленный срок.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">5. Стоимость работ и порядок расчетов</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                5.1. Стоимость работ определяется согласно действующему на момент заключения договора прейскуранту.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                5.2. Оплата производится в следующем порядке:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• предоплата 50% от общей стоимости заказа;</li>
                <li>• доплата 50% при готовности изделия к установке или по факту выполнения работ.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                5.3. Оплата может производиться наличными деньгами, банковским переводом или банковской картой.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">6. Сроки выполнения работ</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                6.1. Сроки изготовления мемориальных изделий составляют от 14 до 45 рабочих дней 
                в зависимости от сложности заказа.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                6.2. Установка мемориальных изделий производится в течение 3-7 рабочих дней 
                после готовности изделия с учетом погодных условий.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">7. Гарантийные обязательства</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                7.1. Исполнитель предоставляет гарантию на выполненные работы сроком на 10 лет.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                7.2. Гарантия не распространяется на повреждения, возникшие в результате 
                естественного износа, форс-мажорных обстоятельств или неправильной эксплуатации.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">8. Ответственность сторон</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                8.1. За неисполнение или ненадлежащее исполнение обязательств по настоящему Договору 
                стороны несут ответственность в соответствии с действующим законодательством РФ.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                8.2. Исполнитель не несет ответственности за задержку выполнения работ, 
                произошедшую по вине Заказчика или вследствие обстоятельств непреодолимой силы.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">9. Заключительные положения</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                9.1. Все споры и разногласия решаются путем переговоров, а при недостижении 
                соглашения – в судебном порядке по месту нахождения Исполнителя.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                9.2. Настоящий Договор регулируется и подлежит толкованию в соответствии 
                с законодательством Российской Федерации.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                9.3. Исполнитель оставляет за собой право внести изменения в настоящую оферту, 
                предварительно уведомив об этом потенциальных Заказчиков путем размещения 
                нового текста оферты на сайте memorial.ru.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">10. Реквизиты Исполнителя</h2>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-muted-foreground leading-relaxed">
                  <strong>ООО "Вечная Память"</strong><br />
                  Адрес: 123456, г. Москва, ул. Мемориальная, д. 15<br />
                  ИНН: 7701234567<br />
                  КПП: 770101001<br />
                  ОГРН: 1037701234567<br />
                  Телефон: +7 (800) 123-45-67<br />
                  E-mail: info@memorial.ru<br />
                  Сайт: memorial.ru
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Договор публичной оферты от 15 декабря 2024 года
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}