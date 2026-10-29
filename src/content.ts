// All site text lives here, in English and Russian.
// Facts must stay in sync with the CV (MyFiles/my/cv/actual_2026-10).

import bizan from './assets/works/bizan1.webp'
import charismastom from './assets/works/charismastom.webp'
import idanalytics from './assets/works/idanalytics.webp'
import dm from './assets/works/dm1.webp'
import expo from './assets/works/expo.webp'
import alartech from './assets/works/alartech.webp'

export type Locale = 'en' | 'ru'

export const LINKS = {
  telegram: 'https://t.me/HaMMMMoD',
  email: 'mailto:hammod.muborakshoi@gmail.com',
  emailText: 'hammod.muborakshoi@gmail.com',
  linkedin: 'https://www.linkedin.com/in/hammod-muborakshoi',
  github: 'https://github.com/Hammod-M',
}

const cvPath = (name: string) => `${import.meta.env.BASE_URL}cv/Hammod_Muboraksho_${name}.pdf`

export const CV_FILES = {
  en: [
    { label: 'Frontend · EN', href: cvPath('Frontend_EN') },
    { label: 'Fullstack · EN', href: cvPath('Fullstack_EN') },
  ],
  ru: [
    { label: 'Frontend · RU', href: cvPath('Frontend_RU') },
    { label: 'Fullstack · RU', href: cvPath('Fullstack_RU') },
  ],
}

export type Job = {
  company: string
  role: string
  dates: string
  context: string
  points: string[]
  stack: string[]
}

export type Project = {
  name: string
  tag: string
  description: string
  points: string[]
  stack: string[]
  note?: string
}

export type Work = { title: string; image: string; href?: string }

const works = (titles: string[]): Work[] => [
  { title: titles[0], image: bizan },
  { title: titles[1], image: charismastom, href: 'https://charismastom.ru/' },
  { title: titles[2], image: idanalytics },
  { title: titles[3], image: dm },
  { title: titles[4], image: expo },
  { title: titles[5], image: alartech },
]

const stacks = {
  polyframe: ['React 19', 'TypeScript', 'TanStack Query', 'Zustand', 'Tailwind CSS', 'Go', 'PostgreSQL', 'MQTT', 'WebSocket', 'Docker'],
  tischerco: ['React', 'TypeScript', 'Vite', 'Redux Toolkit', 'Ant Design', 'React Hook Form', 'i18next', 'Java Spring API'],
  vakhid: ['React', 'TypeScript', 'Redux Toolkit', 'REST API', 'SCSS'],
  freelance: ['React', 'Next.js', 'Node.js', 'NestJS', 'PHP', 'WordPress'],
  taom: ['Next.js 15', 'React 19', 'TypeScript', 'PostgreSQL', 'Redis', 'BullMQ', 'Telegraf', 'OpenRouter', 'Vitest', 'Playwright'],
  itsdone: ['React', 'TypeScript', 'Redux Toolkit', 'Ant Design', 'react-pdf', 'Google Maps API'],
}

type SkillWords = { responsive: string; go: string; bots: string; roles: string; review: string; llm: string }

const skillGroups = (names: string[], w: SkillWords) => [
  { name: names[0], items: ['React', 'TypeScript', 'JavaScript (ES6+)', 'Next.js', 'Redux Toolkit', 'TanStack Query', 'Zustand', 'React Hook Form', 'Vite'] },
  { name: names[1], items: ['Tailwind CSS', 'Ant Design', 'SCSS', w.responsive, 'i18n'] },
  { name: names[2], items: ['Node.js', 'NestJS', w.go, 'REST', 'WebSocket', 'MQTT', w.bots] },
  { name: names[3], items: ['PostgreSQL', 'Redis', 'BullMQ', 'MongoDB', 'JWT', w.roles] },
  { name: names[4], items: ['Vitest', 'Playwright', 'GitHub Actions', 'Docker', 'Linux', 'Prometheus', 'Sentry'] },
  { name: names[5], items: ['Claude Code', w.llm, w.review, 'Scrum'] },
]

export const content = {
  en: {
    meta: { title: 'Hammod Muboraksho — Frontend / Fullstack Developer' },
    nav: { experience: 'Experience', projects: 'Projects', skills: 'Skills', contact: 'Contact' },
    ui: { theme: 'Toggle color theme', language: 'Русская версия', downloadCv: 'Download CV', cvMenu: 'Choose a CV' },
    hero: {
      hello: "Hi, I'm Hammod",
      name: 'Hammod Muboraksho',
      role: 'Frontend / Fullstack Developer',
      lead: "I build web products end to end — React and TypeScript on the front, Node.js and Go on the back. Right now I'm a Fullstack Engineer at Polyframe AI, an AI video-analytics startup.",
      badges: ['5+ years in web development', 'Tashkent · UTC+5', 'Open to remote & relocation'],
      telegram: 'Message on Telegram',
      photoAlt: 'Portrait of Hammod Muboraksho',
    },
    facts: [
      { value: '30+', label: 'screens in a B2B web client I built from scratch' },
      { value: '50+', label: 'websites and web apps for businesses' },
      { value: '1,900+', label: 'unit tests in my own product' },
      { value: '3', label: 'UI languages shipped: German, English, Russian' },
    ],
    experience: {
      title: 'Experience',
      jobs: [
        {
          company: 'Polyframe AI',
          role: 'Fullstack Engineer',
          dates: 'Apr 2026 – Present',
          context: 'AI video analytics for retail and offices (startup) · Tashkent',
          points: [
            'Develop React/TypeScript dashboard features: live zone occupancy, staff attendance, alerts and reports.',
            'Built a camera zone editor (drag handles, undo, snapping), an entrance-line editor and a system status page.',
            'Made the dashboard and the alert engine share one headcount; the live view query went from seconds to milliseconds.',
            'Go backend features: Telegram alerts with rate limiting and retries, scheduled PDF reports, a server health watchdog.',
          ],
          stack: stacks.polyframe,
        },
        {
          company: 'Tischerco (Germany)',
          role: 'Frontend Lead',
          dates: 'Apr 2024 – Dec 2025',
          context: '“It\'s Done” — B2B platform for service companies · remote',
          points: [
            'Built the web client from scratch — 30+ screens — and owned its architecture and code standards.',
            'Work reports with photos and e-signatures, invoices and offers generated from reports with VAT, PDF preview.',
            'Java Spring REST API integration: JWT access/refresh tokens, role-based screens for admins, managers and employees.',
            'Complex forms, Google Maps address autocomplete, localization into German, English and Russian.',
          ],
          stack: stacks.tischerco,
        },
        {
          company: 'vakhid.digital',
          role: 'Frontend Developer',
          dates: 'Feb 2023 – Mar 2024',
          context: 'Web studio with an in-house logistics CRM · Tashkent',
          points: [
            'Developed modules of the freight logistics CRM on React, TypeScript and Redux Toolkit.',
            'Moved JavaScript modules to TypeScript, so type errors are caught at build time instead of by users.',
            'Built and supported corporate sites and landing pages for studio clients.',
          ],
          stack: stacks.vakhid,
        },
        {
          company: 'Freelance',
          role: 'Web Developer',
          dates: 'Apr 2020 – Nov 2022',
          context: 'Websites and web apps for businesses',
          points: [
            'Built 50+ websites and web apps: online stores, landing pages, corporate sites, admin panels.',
            'Backend tasks on Node.js/NestJS: JWT/Passport auth, role-based access, file uploads, Telegram bots.',
          ],
          stack: stacks.freelance,
        },
      ] satisfies Job[],
    },
    projects: {
      title: 'Projects',
      items: [
        {
          name: 'Taom',
          tag: 'Own product · pre-launch · 2026',
          description: 'Compares dish prices and delivery fees across food delivery services in Tashkent — in a Telegram bot, a Telegram Mini App and a web app.',
          points: [
            'Next.js 15 / React 19 web app and a Telegram bot with a Mini App, in Russian, Uzbek and English.',
            'TypeScript backend: PostgreSQL, Redis + BullMQ background workers, Zod validation.',
            'LLM features via OpenRouter: free-text search, chat assistant, dish classification.',
            '1,900+ unit tests (Vitest), Playwright, CI with Semgrep and gitleaks.',
          ],
          stack: stacks.taom,
          note: 'Private repository — happy to walk through the code on a call.',
        },
        {
          name: "It's Done",
          tag: 'Tischerco · 2024–2025',
          description: 'B2B platform where service companies manage their sites, file work reports and bill clients. I built the whole web client.',
          points: [
            'Work reports with photos and e-signatures; invoices and offers generated from reports, with VAT.',
            'Role-based access for admins, managers and employees; subscription plans.',
            'PDF preview, Google Maps address search, German, English and Russian UI.',
          ],
          stack: stacks.itsdone,
        },
      ] satisfies Project[],
      galleryTitle: 'Selected freelance work, 2020–2022',
      works: works([
        'Management reporting for business',
        'Dental clinic',
        'Marketplace sales analytics',
        'German cosmetics store',
        'International marketing forum',
        'Lifting equipment service',
      ]),
      liveSite: 'Live site',
    },
    skills: {
      title: 'Skills',
      groups: skillGroups(['Frontend', 'UI', 'Backend', 'Data & security', 'Quality & delivery', 'Way of working'], {
        responsive: 'Responsive layout', go: 'Go (working knowledge)', bots: 'Telegram bots', roles: 'Role-based access', review: 'Code review', llm: 'LLM APIs (OpenRouter)',
      }),
    },
    approach: {
      title: 'How I work',
      items: [
        { title: 'From requirement to release', text: 'I clarify the business goal first, split work into small releases and agree API contracts early with backend developers.' },
        { title: 'Typed and tested', text: 'Strict TypeScript, Vitest and Playwright. Every fixed bug gets a regression test so it stays fixed.' },
        { title: 'AI-assisted, human-reviewed', text: 'I use Claude Code every day: I plan the change, review every diff and keep CI checks as the gate.' },
        { title: 'Production mindset', text: 'Health checks, alerts and honest “no data” states — users should never see a wrong number.' },
      ],
    },
    contact: {
      title: "Let's talk",
      text: "I'm looking for a frontend or fullstack role — remote, in Tashkent (office or hybrid) or with relocation. Telegram is the fastest way to reach me.",
      cvTitle: 'CV (PDF)',
    },
    footer: 'Built with React, TypeScript, Vite and Tailwind CSS.',
  },
  ru: {
    meta: { title: 'Хаммод Муборакшо — Frontend / Fullstack-разработчик' },
    nav: { experience: 'Опыт', projects: 'Проекты', skills: 'Навыки', contact: 'Контакты' },
    ui: { theme: 'Сменить тему', language: 'English version', downloadCv: 'Скачать резюме', cvMenu: 'Выберите резюме' },
    hero: {
      hello: 'Привет, я Хаммод',
      name: 'Хаммод Муборакшо',
      role: 'Frontend / Fullstack-разработчик',
      lead: 'Делаю веб-продукты целиком: React и TypeScript на фронтенде, Node.js и Go на бэкенде. Сейчас — Fullstack-разработчик в Polyframe AI, стартапе AI-видеоаналитики.',
      badges: ['5+ лет в веб-разработке', 'Ташкент · UTC+5', 'Удалённо, офис или релокация'],
      telegram: 'Написать в Telegram',
      photoAlt: 'Фото Хаммода Муборакшо',
    },
    facts: [
      { value: '30+', label: 'экранов в веб-клиенте B2B-платформы, сделанном с нуля' },
      { value: '50+', label: 'сайтов и веб-приложений для бизнеса' },
      { value: '1900+', label: 'unit-тестов в собственном продукте' },
      { value: '3', label: 'языка интерфейса: немецкий, английский, русский' },
    ],
    experience: {
      title: 'Опыт работы',
      jobs: [
        {
          company: 'Polyframe AI',
          role: 'Fullstack-разработчик',
          dates: 'Апр 2026 – наст. время',
          context: 'AI-видеоаналитика для ритейла и офисов (стартап) · Ташкент',
          points: [
            'Разрабатываю функции дашборда на React/TypeScript: заполненность зон в реальном времени, посещаемость сотрудников, алерты и отчёты.',
            'Сделал редактор зон на кадре камеры (вершины, отмена, привязка), редактор линии входа и страницу статуса системы.',
            'Свёл дашборд и движок алертов к одному подсчёту людей; live-экран ускорился с секунд до миллисекунд.',
            'Бэкенд на Go: алерты в Telegram с ограничением частоты и повторами, PDF-отчёты по расписанию, watchdog сервера.',
          ],
          stack: stacks.polyframe,
        },
        {
          company: 'Tischerco (Германия)',
          role: 'Frontend Lead',
          dates: 'Апр 2024 – дек 2025',
          context: '«It\'s Done» — B2B-платформа для сервисных компаний · удалённо',
          points: [
            'С нуля сделал веб-клиент на 30+ экранов и отвечал за его архитектуру и стандарты кода.',
            'Отчёты о работах с фото и электронной подписью, счета и предложения на основе отчётов с НДС, просмотр PDF.',
            'Интеграция с REST API на Java Spring: JWT (access/refresh), экраны по ролям для администраторов, менеджеров и сотрудников.',
            'Сложные формы, автодополнение адресов Google Maps, интерфейс на немецком, английском и русском.',
          ],
          stack: stacks.tischerco,
        },
        {
          company: 'vakhid.digital',
          role: 'Frontend-разработчик',
          dates: 'Фев 2023 – мар 2024',
          context: 'Веб-студия с собственной CRM для грузоперевозок · Ташкент',
          points: [
            'Разрабатывал модули CRM для грузоперевозок на React, TypeScript и Redux Toolkit.',
            'Перевёл JavaScript-модули на TypeScript — ошибки типов ловятся при сборке, а не у пользователей.',
            'Делал и поддерживал корпоративные сайты и лендинги для клиентов студии.',
          ],
          stack: stacks.vakhid,
        },
        {
          company: 'Фриланс',
          role: 'Веб-разработчик',
          dates: 'Апр 2020 – ноя 2022',
          context: 'Сайты и веб-приложения для бизнеса',
          points: [
            'Сделал 50+ сайтов и веб-приложений: интернет-магазины, лендинги, корпоративные сайты, админ-панели.',
            'Бэкенд на Node.js/NestJS: авторизация JWT/Passport, доступ по ролям, загрузка файлов, Telegram-боты.',
          ],
          stack: stacks.freelance,
        },
      ] satisfies Job[],
    },
    projects: {
      title: 'Проекты',
      items: [
        {
          name: 'Taom',
          tag: 'Свой продукт · до запуска · 2026',
          description: 'Сравнивает цены на блюда и стоимость доставки в разных сервисах доставки еды в Ташкенте — в Telegram-боте, Mini App и веб-приложении.',
          points: [
            'Веб-приложение на Next.js 15 / React 19 и Telegram-бот с Mini App на русском, узбекском и английском.',
            'Бэкенд на TypeScript: PostgreSQL, фоновые воркеры на Redis + BullMQ, валидация Zod.',
            'LLM-функции через OpenRouter: поиск на естественном языке, чат-ассистент, классификация блюд.',
            '1900+ unit-тестов (Vitest), Playwright, CI с Semgrep и gitleaks.',
          ],
          stack: stacks.taom,
          note: 'Репозиторий приватный — с удовольствием покажу код на созвоне.',
        },
        {
          name: "It's Done",
          tag: 'Tischerco · 2024–2025',
          description: 'B2B-платформа, где сервисные компании ведут объекты, сдают отчёты о работах и выставляют счета клиентам. Весь веб-клиент сделал я.',
          points: [
            'Отчёты о работах с фото и электронной подписью; счета и предложения на основе отчётов, с НДС.',
            'Доступ по ролям для администраторов, менеджеров и сотрудников; тарифные планы.',
            'Просмотр PDF, поиск адресов Google Maps, интерфейс на немецком, английском и русском.',
          ],
          stack: stacks.itsdone,
        },
      ] satisfies Project[],
      galleryTitle: 'Избранные фриланс-проекты, 2020–2022',
      works: works([
        'Управленческая отчётность для бизнеса',
        'Стоматологическая клиника',
        'Аналитика продаж на маркетплейсах',
        'Магазин немецкой косметики',
        'Международный форум по маркетингу',
        'Обслуживание грузоподъёмного оборудования',
      ]),
      liveSite: 'Открыть сайт',
    },
    skills: {
      title: 'Навыки',
      groups: skillGroups(['Frontend', 'UI', 'Backend', 'Данные и безопасность', 'Качество и поставка', 'Как работаю'], {
        responsive: 'Адаптивная вёрстка', go: 'Go (рабочий уровень)', bots: 'Telegram-боты', roles: 'Доступ по ролям', review: 'Code review', llm: 'LLM API (OpenRouter)',
      }),
    },
    approach: {
      title: 'Как я работаю',
      items: [
        { title: 'От требования до релиза', text: 'Сначала уточняю бизнес-цель, делю работу на небольшие релизы и заранее согласую контракты API с бэкендом.' },
        { title: 'Типизировано и протестировано', text: 'Строгий TypeScript, Vitest и Playwright. На каждый исправленный баг — регрессионный тест, чтобы он не вернулся.' },
        { title: 'AI помогает, человек проверяет', text: 'Каждый день работаю с Claude Code: сам планирую изменение, читаю каждый diff, а проверки CI остаются фильтром.' },
        { title: 'Думаю о продакшене', text: 'Health-checks, алерты и честное «нет данных» — пользователь не должен видеть неверное число.' },
      ],
    },
    contact: {
      title: 'Давайте поговорим',
      text: 'Ищу работу frontend- или fullstack-разработчиком — удалённо, в Ташкенте (офис или гибрид) или с релокацией. Быстрее всего отвечаю в Telegram.',
      cvTitle: 'Резюме (PDF)',
    },
    footer: 'Сделано на React, TypeScript, Vite и Tailwind CSS.',
  },
}

export type Content = (typeof content)['en']
