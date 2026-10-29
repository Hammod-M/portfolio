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

const cvPath = (name: string) => `${import.meta.env.BASE_URL}cv/Hammod_Muborakshoi_${name}.pdf`

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

type SkillWords = { responsive: string; go: string; bots: string; roles: string; review: string; llm: string; ai: string }

const skillGroups = (names: string[], w: SkillWords) => [
  { name: names[0], items: ['React', 'TypeScript', 'JavaScript (ES6+)', 'Next.js', 'Redux Toolkit', 'TanStack Query', 'Zustand', 'React Hook Form', 'Vite'] },
  { name: names[1], items: ['Tailwind CSS', 'Ant Design', 'SCSS', w.responsive, 'i18n'] },
  { name: names[2], items: ['Node.js', 'NestJS', w.go, 'REST', 'WebSocket', 'MQTT', w.bots] },
  { name: names[3], items: ['PostgreSQL', 'Redis', 'BullMQ', 'MongoDB', 'JWT', w.roles] },
  { name: names[4], items: ['Vitest', 'Playwright', 'GitHub Actions', 'Docker', 'Linux', 'Prometheus', 'Sentry'] },
  { name: names[5], items: [w.ai, w.llm, w.review, 'Scrum'] },
]

export const content = {
  en: {
    meta: { title: 'Hammod Muborakshoi — Frontend / Fullstack Developer' },
    nav: { experience: 'Experience', projects: 'Projects', skills: 'Skills', contact: 'Contact' },
    ui: { theme: 'Toggle color theme', language: 'Русская версия', downloadCv: 'Download CV', cvMenu: 'Choose a CV' },
    hero: {
      hello: "Hi, I'm Hammod",
      name: 'Hammod Muborakshoi',
      role: 'Frontend / Fullstack Developer',
      lead: 'I write interfaces in React and TypeScript and backends in Node.js and Go. I built the frontend of a German B2B platform from scratch, and now at Polyframe AI I work on the dashboard and backend of a video-analytics system for stores and offices.',
      badges: ['Tashkent · UTC+5', 'Russian · English B2', 'Open to remote, office or relocation'],
      telegram: 'Message on Telegram',
      photoAlt: 'Portrait of Hammod Muborakshoi',
    },
    facts: [
      { value: '5+ years', label: 'in web development: 50+ projects with my own team, then product companies' },
      { value: '30+', label: 'screens in a German B2B platform whose frontend I built from scratch' },
      { value: 's → ms', label: 'live video-analytics view sped up from seconds to milliseconds' },
      { value: '1,900+', label: 'automated tests in my own product, run in CI' },
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
            'Develop the web UI on React 19, TypeScript, TanStack Query, Zustand and Tailwind: live zone occupancy, staff attendance, alerts and reports.',
            'Built a zone editor on top of the camera frame (draggable polygon vertices, undo, snapping), an entrance-line editor and playback of annotated video clips (HLS).',
            'Fixed a mismatch between the live screen and alerts (10 vs 13 people at the same moment) by removing a duplicate SQL calculation; query time fell from 2.2 s to ~10 ms on the test stand.',
            'Took part in an audit of 225 analytics blocks and fixed metric bugs; in Go: Telegram alerts within API rate limits, scheduled PDF reports, server health monitoring.',
          ],
          stack: stacks.polyframe,
        },
        {
          company: 'Tischerco (Germany)',
          role: 'Frontend Lead Developer',
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
          company: 'HM-TECH',
          role: 'Founder & Team Lead',
          dates: 'Apr 2020 – Nov 2022',
          context: 'Own web development team, up to 14 people: frontend, backend, design, QA, SEO',
          points: [
            'Built and led the team: staffing projects, estimates and specs, task planning, deadlines, code review, client communication.',
            'Delivered 50+ projects: online stores, corporate websites, landing pages, admin panels.',
            'Owned the frontend architecture and wrote the hardest parts myself: React SPAs, JWT/Passport auth, role-based access, Telegram bots.',
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
          description: 'Shows where the same dish is cheaper to order in Tashkent by comparing prices and delivery fees across delivery services. Works as a Telegram bot, a Mini App and a website.',
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
          description: 'B2B platform for service companies: sites, work reports and client invoices. I built its web app from scratch.',
          points: [
            'Work reports with photos and e-signatures; invoices and offers generated from reports, with VAT.',
            'Role-based access for admins, managers and employees; subscription plans.',
            'PDF preview, Google Maps address search, German, English and Russian UI.',
          ],
          stack: stacks.itsdone,
        },
      ] satisfies Project[],
      galleryTitle: 'Selected HM-TECH projects, 2020–2022',
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
        responsive: 'Responsive layout', go: 'Go', bots: 'Telegram bots', roles: 'Role-based access', review: 'Code review', llm: 'LLM APIs (OpenRouter)', ai: 'AI-assisted development',
      }),
    },
    approach: {
      title: 'How I work',
      items: [
        { title: 'Business goal first', text: 'Before coding I find out why the task matters, split it into small releases and agree on the API with backend developers early.' },
        { title: 'TypeScript and tests', text: 'Strict TypeScript, Vitest and Playwright. When I fix a bug, I add a test so it does not come back.' },
        { title: 'AI helps, I own the code', text: 'I use AI coding agents every day, but I plan the change myself, read every diff and let CI checks catch mistakes.' },
        { title: 'Thinking about production', text: 'Monitoring, alerts and an honest “no data” instead of a zero — users should never see a wrong number.' },
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
    meta: { title: 'Хаммод Муборакшои — Frontend / Fullstack-разработчик' },
    nav: { experience: 'Опыт', projects: 'Проекты', skills: 'Навыки', contact: 'Контакты' },
    ui: { theme: 'Сменить тему', language: 'English version', downloadCv: 'Скачать резюме', cvMenu: 'Выберите резюме' },
    hero: {
      hello: 'Привет, я Хаммод',
      name: 'Хаммод Муборакшои',
      role: 'Frontend / Fullstack-разработчик',
      lead: 'Пишу интерфейсы на React и TypeScript, а бэкенд — на Node.js и Go. С нуля сделал фронтенд B2B-платформы для немецкой компании, сейчас в Polyframe AI работаю над дашбордом и бэкендом системы видеоаналитики для магазинов и офисов.',
      badges: ['Ташкент · UTC+5', 'Русский · English B2', 'Удалёнка, офис или переезд'],
      telegram: 'Написать в Telegram',
      photoAlt: 'Фото Хаммода Муборакшои',
    },
    facts: [
      { value: '5+ лет', label: 'в веб-разработке: 50+ проектов со своей командой, затем продуктовые компании' },
      { value: '30+', label: 'экранов в B2B-платформе для немецкой компании — её фронтенд я сделал с нуля' },
      { value: 'сек → мс', label: 'так ускорил live-экран системы видеоаналитики' },
      { value: '1900+', label: 'автотестов в моём продукте, запускаются в CI' },
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
            'Развиваю веб-интерфейс на React 19, TypeScript, TanStack Query, Zustand и Tailwind: заполненность зон в реальном времени, посещаемость сотрудников, алерты и отчёты.',
            'Разработал редактор зон прямо на кадре с камеры (полигоны с перетаскиванием вершин, отменой и привязкой), редактор линии входа и просмотр размеченных видеоклипов (HLS).',
            'Устранил расхождение между live-экраном и алертами (10 vs 13 человек в один момент): убрал дублирующий расчёт в SQL; время запроса — с 2,2 с до ~10 мс на тестовом стенде.',
            'Участвовал в аудите 225 блоков аналитики и исправил ошибки расчёта метрик; на Go — алерты в Telegram с учётом лимитов API, PDF-отчёты по расписанию, мониторинг серверов.',
          ],
          stack: stacks.polyframe,
        },
        {
          company: 'Tischerco (Германия)',
          role: 'Frontend Lead Developer',
          dates: 'Апр 2024 – дек 2025',
          context: '«It\'s Done» — B2B-платформа для сервисных компаний · удалённо',
          points: [
            'С нуля сделал веб-приложение на 30+ экранов и отвечал за его архитектуру и качество кода.',
            'Отчёты о выполненных работах с фото и электронной подписью, счета и коммерческие предложения с НДС, просмотр PDF прямо в приложении.',
            'Интеграция с REST API на Java Spring: JWT (access/refresh), экраны по ролям для администраторов, менеджеров и сотрудников.',
            'Сложные формы с валидацией, поиск адресов через Google Maps, перевод интерфейса на немецкий, английский и русский.',
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
          company: 'HM-TECH',
          role: 'Основатель и тимлид',
          dates: 'Апр 2020 – ноя 2022',
          context: 'Собственная команда веб-разработки, до 14 человек: frontend, backend, дизайн, QA, SEO',
          points: [
            'Собрал и вёл команду: подбор людей под проекты, оценка и ТЗ, распределение задач, сроки, code review, общение с заказчиками.',
            'Выполнили 50+ проектов: интернет-магазины, корпоративные сайты, лендинги, админ-панели.',
            'Отвечал за архитектуру фронтенда и сам писал сложные части: SPA на React, авторизацию (JWT/Passport), ролевой доступ, Telegram-ботов.',
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
          description: 'Показывает, где в Ташкенте дешевле заказать то же блюдо: сравнивает цены и доставку в разных сервисах. Работает как Telegram-бот, Mini App и сайт.',
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
          description: 'B2B-платформа для сервисных компаний: объекты, отчёты о работах и счета клиентам. Веб-версию я сделал с нуля.',
          points: [
            'Отчёты о работах с фото и электронной подписью; счета и предложения на основе отчётов, с НДС.',
            'Доступ по ролям для администраторов, менеджеров и сотрудников; тарифные планы.',
            'Просмотр PDF, поиск адресов Google Maps, интерфейс на немецком, английском и русском.',
          ],
          stack: stacks.itsdone,
        },
      ] satisfies Project[],
      galleryTitle: 'Избранные проекты HM-TECH, 2020–2022',
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
        responsive: 'Адаптивная вёрстка', go: 'Go', bots: 'Telegram-боты', roles: 'Доступ по ролям', review: 'Code review', llm: 'LLM API (OpenRouter)', ai: 'AI-инструменты разработки',
      }),
    },
    approach: {
      title: 'Как я работаю',
      items: [
        { title: 'Сначала цель бизнеса', text: 'Прежде чем писать код, выясняю, зачем нужна задача, делю её на небольшие релизы и заранее договариваюсь с бэкендом об API.' },
        { title: 'TypeScript и тесты', text: 'Строгий TypeScript, Vitest и Playwright. Исправил баг — пишу на него тест, чтобы он не вернулся.' },
        { title: 'AI помогает, отвечаю я', text: 'Каждый день работаю с AI-агентами, но изменение планирую сам, читаю каждый diff, а ошибки ловят проверки в CI.' },
        { title: 'Думаю о продакшене', text: 'Мониторинг, алерты и честное «нет данных» вместо нуля — пользователь не должен видеть неверную цифру.' },
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
