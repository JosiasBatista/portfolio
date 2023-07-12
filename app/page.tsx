import About from "@/components/About"
import Contact from "@/components/Contact"
import Experience from "@/components/Experience"
import Feedback from "@/components/Feedback"
import StarsCanvas from "@/components/StarsCanvas"
import Tech from "@/components/Tech"
import Work from "@/components/Work"

const Home = () => {
  return (
    <div>
      <About />
      <Experience />
      <Tech />
      <Work />
      <Feedback />

      <section className="relative z-0">
        <Contact />
        <StarsCanvas />
      </section>
    </div>
  )
}

export default Home
