import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Approach from './components/Approach'
import Contact from './components/Contact'
import { useLocale } from './i18n'

export default function App() {
  const { t } = useLocale()
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-zinc-900 focus:shadow"
      >
        {t.ui.skip}
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Approach />
        <Contact />
      </main>
    </>
  )
}
