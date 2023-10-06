import About from "@/components/About"
import Contact from "@/components/Contact"
import DividSections from "@/components/DividSections"
import Experience from "@/components/Experience"
import Intro from "@/components/Intro"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <DividSections />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  )
}
