export default function Works() {
  const reactWork = [
    {
      id: 1,
      title: "Piezza",
      date: "5h ago",
      img: "assets/img/works/react/piezza.jpg",
      link: "https://hammod-m.github.io/react-pizza/",
    },
    {
      id: 2,
      title: "Quiz",
      date: "2h ago",
      img: "assets/img/works/react/quiz-full.png",
      link: "https://hammod-m.github.io/react-quiz/",
    },
    {
      id: 3,
      title: "Users",
      date: "2h ago",
      img: "assets/img/works/react/users-full.png",
      link: "https://hammod-m.github.io/react-users/",
    },
  ];
  const FullStackWork = [
    {
      id: 1,
      title: "KinoBoMo",
      date: "Jan 7",
      img: "assets/img/works/full-stack/kinobomo.jpg",
    },
  ];
  const WebDevelopmentServices = [
    {
      id: "bizan",
      title: "Управленческая отчётность для бизнеса",
      date: "2d ago",
      img: "assets/img/works/html-code/bizan.png",
      link: "https://portfolio.hmlanding.ru/bizan/index.html",
    },
    {
      id: "charismastom",
      title: "Стоматологическая клиника",
      date: "4d ago",
      img: "assets/img/works/html-code/charismastom.png",
      link: "https://charismastom.ru/",
    },
    {
      id: "dm",
      title: "Немецкая косметика с доставкой по РФ",
      date: "4d ago",
      img: "assets/img/works/html-code/dm.png",
      link: "https://portfolio.hmlanding.ru/dm/",
    },
    {
      id: "krivenkina",
      title: "Мастерская психологического консультирования",
      date: "4d ago",
      img: "assets/img/works/html-code/krivenkina.png",
      link: "https://portfolio.hmlanding.ru/krivenkina/",
    },
    {
      id: "aie",
      title: "Полный VIP комплект оборудования для квартиры",
      date: "4d ago",
      img: "assets/img/works/html-code/aie.png",
      link: "https://portfolio.hmlanding.ru/aie/",
    },
    {
      id: "bmw",
      title: "Продажа и ремонт двигателей BMW",
      date: "4d ago",
      img: "assets/img/works/html-code/bmw.png",
      link: "https://portfolio.hmlanding.ru/bmw/",
    },
    {
      id: "idanalytics",
      title: "Точный и подробный анализ продаж на маркетплейсах",
      date: "4d ago",
      img: "assets/img/works/html-code/idanalytics.png",
      link: "https://portfolio.hmlanding.ru/idanalytics/",
    },
    {
      id: "gorbunov",
      title: "Арбитражный управляющий Горбунов Вадим Валерьевич",
      date: "4d ago",
      img: "assets/img/works/html-code/gorbunov.png",
      link: "https://portfolio.hmlanding.ru/gorbunov/",
    },
    {
      id: "expo",
      title: "Международный форум по маркетингу и менеджменту",
      date: "4d ago",
      img: "assets/img/works/html-code/expo.png",
      link: "https://portfolio.hmlanding.ru/EXPO",
    },
    {
      id: "alartech",
      title: "Сервисное обслуживание грузоподъемного оборудования",
      date: "4d ago",
      img: "assets/img/works/html-code/alartech.png",
      link: "https://portfolio.hmlanding.ru/alartech/",
    },
    {
      id: 10,
      title: "Оборудование для тёплого пола",
      date: "4d ago",
      img: "assets/img/works/html-code/floor.png",
      link: "https://portfolio.hmlanding.ru/floor/",
    },
    {
      id: "id-lk",
      title: "Рейтинг брендов (LK)",
      date: "4d ago",
      img: "assets/img/works/html-code/id-lk.png",
      link: "https://portfolio.hmlanding.ru/id-lk/",
    },
    {
      id: 12,
      title: "Диагностика кожи в режиме реального времени",
      date: "4d ago",
      img: "assets/img/works/html-code/skin-guide.png",
      link: "https://portfolio.hmlanding.ru/quiz",
    },
    {
      id: "ZonaComforta",
      title: "Зона Комфорта",
      date: "4d ago",
      img: "assets/img/works/html-code/ZonaComforta.png",
      link: "https://portfolio.hmlanding.ru/ZonaComforta/",
    },
    {
      id: "coach",
      title: "Коуч личной эффективности, психолог",
      date: "4d ago",
      img: "assets/img/works/html-code/coach.png",
      link: "https://portfolio.hmlanding.ru/coach/",
    },
  ];
  const designWork = [
    {
      id: 1,
      title: "Ask Me Anything: 10 answers to your questions about coffee",
      date: "2d ago",
      img: "assets/img/works/design/kinobomo.jpg",
    },
    {
      id: 2,
      title: "The worst advice we've ever heard about coffee",
      date: "4d ago",
      img: "assets/img/works/design/kinobomo.jpg",
    },
  ];

  return (
    <section id="projects" className="works mb-10">
      <div className="container mx-auto">
        {/* search */}
        {/* filtr */}
        {/* sort */}

        <div className="py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            {/* text - start */}
            <div className="mb-10 md:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                RECENT WORK
              </h2>
              {/* <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg"></p> */}
            </div>

            {/* text - end */}

            <div className="works__block mb-10">
              <h4 className="mb-4 text-xl font-bold text-gray-600 md:mb-6 lg:text-xl">
                React
              </h4>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 xl:gap-8">
                {reactWork.map((work) => (
                  <div className="works__item" key={work.id}>
                    <a
                      href={work.link}
                      className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96"
                      target="_blank"
                    >
                      <img
                        src={work.img}
                        loading="lazy"
                        alt={work.title}
                        className="absolute inset-0 h-full w-full object-cointain transition duration-200 group-hover:scale-110"
                        style={{ objectFit: "contain" }}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
                      <span className="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">
                        {work.title}
                      </span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="works__block">
              <h4 className="mb-4 text-xl font-bold text-gray-600 md:mb-6 lg:text-xl">
                Web Development Services
              </h4>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 xl:gap-8">
                {WebDevelopmentServices.map((work) => (
                  <div className="works__item" key={work.id}>
                    <a
                      href={work.link}
                      className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96"
                      target="_blank"
                    >
                      <img
                        src={work.img}
                        loading="lazy"
                        alt={work.title}
                        className="absolute inset-0 h-full w-full object-cointain transition duration-200 group-hover:scale-110"
                        style={{ objectFit: "contain" }}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
                      <span className="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">
                        {work.title}
                      </span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
