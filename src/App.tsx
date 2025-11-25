import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { Collapse } from '@alfalab/core-components/collapse';
import { Gap } from '@alfalab/core-components/gap';
import { PureCell } from '@alfalab/core-components/pure-cell';
import { Typography } from '@alfalab/core-components/typography';
import { ChevronDownMIcon } from '@alfalab/icons-glyph/ChevronDownMIcon';
import { ChevronUpMIcon } from '@alfalab/icons-glyph/ChevronUpMIcon';
import { Fragment, useEffect, useState } from 'react';
import bannerImg from './assets/banner.png';
import exp1 from './assets/exp1.png';
import exp2 from './assets/exp2.png';
import exp3 from './assets/exp3.png';
import exp4 from './assets/exp4.png';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import p1 from './assets/p1.png';
import p2 from './assets/p2.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { LS, LSKeys } from './ls';
import { TICKER_TO_IMAGE } from './stocks';
import { appSt } from './style.css';

const expItems = [
  {
    title: 'Получайте рекомендации ИИ',
    text: 'Мы покажем, что именно стоит купить, что — продать, и в каком количестве',
    img: exp1,
  },
  {
    title: 'Настраивайте ИИ под себя',
    text: 'Исключайте бумаги, которые не хотите покупать или продавать. Настройте портфель под свою стратегию за пару секунд',
    img: exp2,
  },
  {
    title: 'Совершайте сделки одной кнопкой',
    text: 'Все рекомендации можно исполнить в 1 клик — покупки и продажи выполняются автоматически',
    img: exp3,
  },
  {
    title: 'Следите за новостным фоном и мнениями в сообществах',
    text: 'Экономьте время на поиск и анализ информации по активам и рынку в целом',
    img: exp4,
  },
];
const pItems = [
  {
    title: 'Актуальные идеи для вашего портфеля',
    text: 'ИИ анализирует рынок в реальном времени, подбирает лучшие идеи и формирует готовый портфель под вашу стратегию',
    img: p1,
  },
  {
    title: 'Анализ мнений инвесторов',
    text: 'ИИ анализирует мнения всех инвесторов и новости. На основании чего предоставляет краткую сводку по активам и рынку в целом',
    img: p2,
  },
];

const insideItems = [
  {
    title: 'Алгоритм вместо эмоций',
    subtitle: 'ИИ не подвержен панике, азарту и импульсивным решениям — только холодный расчёт',
    img: img1,
  },
  {
    title: 'Экономия времени',
    subtitle:
      'Больше не нужно бесконечно искать идеи и разбираться в аналитике — алгоритм делает это за вас и предлагает готовые решения',
    img: img2,
  },
  {
    title: 'Контроль остаётся у вас',
    subtitle: 'Вы выбираете сами: совершать сделки или просто следить за динамикой рекомендаций',
    img: img3,
  },
];

const faqs = [
  {
    question: 'С какой суммы можно начать?',
    answer: [
      'Начать можно с любой суммы — даже от 100 ₽. Этого достаточно, чтобы сделать первые шаги по стратегии.',
      'Однако для того чтобы полностью следовать рекомендациям и использовать все возможности стратегии, лучше рассмотреть инвестиции от 10 000 ₽ и выше.',
    ],
  },
  {
    question: 'Можно отменить в любой момент?',
    answer: ['Да, отменить можно в любой момент.'],
  },
];

const LINK = 'alfabank://longread?endpoint=v1/adviser/longreads/85305';

if (LS.getItem(LSKeys.ShowThx, false)) {
  window.location.replace(LINK);
}

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [collapsedItems, setCollapsedItem] = useState<string[]>([]);

  useEffect(() => {
    if (!LS.getItem(LSKeys.UserId, null)) {
      LS.setItem(LSKeys.UserId, Date.now());
    }
  }, []);

  const submit = () => {
    window.gtag('event', '6833_card_activate', { var: 'var2' });

    setLoading(true);

    LS.setItem(LSKeys.ShowThx, true);
    setLoading(false);
    window.location.replace(LINK);
  };

  return (
    <>
      <div className={appSt.box}>
        <Typography.TitleResponsive
          style={{ marginTop: '5rem' }}
          color="primary-inverted"
          tag="h1"
          view="large"
          font="system"
          weight="medium"
        >
          Умный советник в инвестициях
        </Typography.TitleResponsive>
        <Typography.Text view="primary-medium" color="primary-inverted">
          ИИ знает, когда покупать
          <br />и когда продавать
        </Typography.Text>

        <div className={appSt.grid}>
          <div className={appSt.gridItem}>
            <Typography.TitleResponsive color="positive" tag="h3" view="medium" font="system" weight="semibold">
              29%
            </Typography.TitleResponsive>
            <Typography.Text view="primary-small" color="primary-inverted">
              За последний год
            </Typography.Text>
          </div>
          <div className={appSt.gridItem}>
            <Typography.TitleResponsive color="negative" tag="h3" view="medium" font="system" weight="semibold">
              -7%
            </Typography.TitleResponsive>
            <Typography.Text view="primary-small" color="primary-inverted">
              Индекс МосБиржи
            </Typography.Text>
          </div>
        </div>

        <div className={appSt.banner}>
          <img src={bannerImg} className={appSt.bannerImg} width={85} height={105} alt="banner" />
          <Typography.Text view="primary-small" color="primary-inverted">
            Получайте идеи по сделкам от ИИ и принимайте взвешенные решения, что покупать и продавать
          </Typography.Text>
        </div>
      </div>
      <div className={appSt.container}>
        <Typography.TitleResponsive
          color="primary-inverted"
          style={{ marginTop: '1rem' }}
          tag="h2"
          view="small"
          font="system"
          weight="semibold"
        >
          Что входит
        </Typography.TitleResponsive>

        {pItems.map(item => (
          <PureCell key={item.title}>
            <PureCell.Graphics>
              <img src={item.img} width={48} height={48} alt={item.title} />
            </PureCell.Graphics>
            <PureCell.Content>
              <PureCell.Main>
                <Typography.TitleResponsive color="primary-inverted" tag="h4" view="xsmall" font="system" weight="semibold">
                  {item.title}
                </Typography.TitleResponsive>
                <Typography.Text view="primary-small" color="secondary-inverted">
                  {item.text}
                </Typography.Text>
              </PureCell.Main>
            </PureCell.Content>
          </PureCell>
        ))}

        <Typography.TitleResponsive
          color="primary-inverted"
          style={{ marginTop: '1rem' }}
          tag="h2"
          view="small"
          font="system"
          weight="semibold"
        >
          Преимущества
        </Typography.TitleResponsive>

        {insideItems.map(item => (
          <PureCell key={item.title} className={appSt.cell2}>
            <PureCell.Content>
              <PureCell.Main>
                <Typography.Text view="primary-medium" color="primary-inverted" weight="bold">
                  {item.title}
                </Typography.Text>
                <Typography.Text view="primary-small" color="secondary-inverted">
                  {item.subtitle}
                </Typography.Text>
              </PureCell.Main>
            </PureCell.Content>
            <PureCell.Addon verticalAlign="bottom">
              <img src={item.img} width={90} height={90} alt={item.title} className={appSt.cell2Img} />
            </PureCell.Addon>
          </PureCell>
        ))}

        {expItems.map(item => (
          <Fragment key={item.title}>
            <Typography.TitleResponsive
              color="primary-inverted"
              style={{ marginTop: '1rem' }}
              tag="h2"
              view="small"
              font="system"
              weight="semibold"
            >
              {item.title}
            </Typography.TitleResponsive>
            <Typography.Text view="primary-medium" color="primary-inverted">
              {item.text}
            </Typography.Text>
            <img src={item.img} width="100%" height="auto" alt={item.title} />
          </Fragment>
        ))}

        <Typography.TitleResponsive
          color="primary-inverted"
          style={{ marginTop: '1rem' }}
          tag="h2"
          view="small"
          font="system"
          weight="semibold"
        >
          Актуальные бумаги в портфеле
        </Typography.TitleResponsive>

        <div>
          <Swiper style={{ marginLeft: '0' }} spaceBetween={16} slidesPerView="auto">
            {Object.keys(TICKER_TO_IMAGE).map(ticker => (
              <SwiperSlide style={{ maxWidth: 'min-content' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <img src={TICKER_TO_IMAGE[ticker]} width={48} height={48} alt={ticker} />
                  <Typography.Text view="secondary-large" color="primary-inverted">
                    {ticker}
                  </Typography.Text>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Typography.TitleResponsive
          color="primary-inverted"
          style={{ marginTop: '1rem' }}
          tag="h2"
          view="small"
          font="system"
          weight="semibold"
        >
          Дополнительные вопросы
        </Typography.TitleResponsive>

        {faqs.map((faq, index) => (
          <div style={{ marginTop: '1rem' }} key={index}>
            <div
              onClick={() => {
                window.gtag('event', '6833_card_faq', { faq: String(index + 1), var: 'var2' });

                setCollapsedItem(items =>
                  items.includes(String(index + 1))
                    ? items.filter(item => item !== String(index + 1))
                    : [...items, String(index + 1)],
                );
              }}
              className={appSt.row}
            >
              <Typography.Text view="primary-medium" weight="medium" color="primary-inverted">
                {faq.question}
              </Typography.Text>
              {collapsedItems.includes(String(index + 1)) ? (
                <div style={{ flexShrink: 0 }}>
                  <ChevronUpMIcon color="#FFFFFF" />
                </div>
              ) : (
                <div style={{ flexShrink: 0 }}>
                  <ChevronDownMIcon color="#FFFFFF" />
                </div>
              )}
            </div>
            <Collapse expanded={collapsedItems.includes(String(index + 1))}>
              {faq.answer.map((answerPart, answerIndex) => (
                <Typography.Text
                  key={answerIndex}
                  tag="p"
                  defaultMargins={false}
                  view="primary-medium"
                  color="primary-inverted"
                >
                  {answerPart}
                </Typography.Text>
              ))}
            </Collapse>
          </div>
        ))}
      </div>
      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile
          loading={loading}
          block
          view="primary"
          onClick={submit}
          style={{ backgroundColor: '#FFFFFF', color: '#030306E0' }}
          hint="Далее 199 ₽ в месяц"
        >
          Подключить бесплатно
        </ButtonMobile>
      </div>
    </>
  );
};
