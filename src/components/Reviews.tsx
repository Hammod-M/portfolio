export default function Reviews() {
  const reviews = [
    {
      id: 1,
      title: "Piezza",
      date: "5h ago",
      img: "assets/img/works/react/piezza.jpg",
    },
    {
      id: 2,
      title: "Quiz",
      date: "2h ago",
      img: "assets/img/works/react/quiz.png",
    },
    {
      id: 3,
      title: "Users",
      date: "2h ago",
      img: "assets/img/works/react/users.jpg",
    },
  ];

  return (
    <section id="reviews" className="reviews">
      <div className="container mx-auto">
        <div className="reviews__block">
          <div className="text-neutral-700 dark:text-neutral-300">
            <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
              <h3 className="mb-6 text-3xl font-bold">Testimonials</h3>
              <p className="mb-6 pb-2 md:mb-12 md:pb-0">
                During my freelancing journey, I handled a diverse range of
                tasks, from simple assignments to comprehensive Customer
                Relationship Management (CRM) projects. My experience spans a
                broad spectrum of areas, allowing me to develop versatile skills
                and adapt easily to varying requirements.
                <br />
                <br />
                I've been entrusted with a variety of tasks, and I take pride in
                successfully completing them. The support of over 100 positive
                reviews from clients speaks to my commitment to delivering
                quality work and ensuring high client satisfaction. Here are a
                few testimonials:
              </p>
            </div>

            <div className="grid gap-6 text-center md:grid-cols-3">
              <div>
                <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                  <div className="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
                  <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                    <img src="https://cdn.freelance.ru/img/avatars/2676247.4e477d5d.png" />
                  </div>
                  <div className="p-6">
                    <h4 className="mb-4 text-2xl font-semibold">
                      Алексей Чесноков
                    </h4>
                    <hr />
                    <p className="mt-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="inline-block h-7 w-7 pr-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                      </svg>
                      Благодарю Хаммода за качественно выполненную работу в
                      оговоренные сроки. Рекомендую данного специалиста к
                      сотрудничеству!
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                  <div className="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]"></div>
                  <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                    <img src="https://cdn.freelance.ru/img/avatars/1510139.81dcb49a.png" />
                  </div>
                  <div className="p-6">
                    <h4 className="mb-4 text-2xl font-semibold">Антон Силин</h4>
                    <hr />
                    <p className="mt-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="inline-block h-7 w-7 pr-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                      </svg>
                      Сделано все быстро, вовремя и в срок. Единственный
                      специалист, который мне смог помочь с непростой задачей.
                      Специалист, который готов думать и пробовать над тем, как
                      решить вашу задачу, а не сказать, что она невыполнима и
                      тд.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                  <div className="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]"></div>
                  <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                    <img src="https://cdn.freelance.ru/img/avatars/1315752.f71b5dea.png" />
                  </div>
                  <div className="p-6">
                    <h4 className="mb-4 text-2xl font-semibold">
                      Анастасия Занадворова
                    </h4>
                    <hr />
                    <p className="mt-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="inline-block h-7 w-7 pr-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                      </svg>
                      Хаммод оперативно помог с заданием по Java Script.
                      Благодаря ему удалось не просрочить здачу по работе.
                      Разбираться буду потом с кодом - что как почему.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded flex mt-10 mx-auto">
              See all
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
