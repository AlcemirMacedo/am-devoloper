import Header from "@/componentes/header/page";
import Banner from "@/componentes/main/page";
import About from "@/componentes/about/page";
import Service from "@/componentes/services/page";
import Skills from "@/componentes/skills/page";
import Resume from "@/componentes/resumes/page";
import Portfolio from "@/componentes/portfolio/page";
import Reviews from "@/componentes/reviewsn/page";
import Blog from "@/componentes/blog/page";



export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Service />
      <Skills />
      <Resume />
      <Portfolio />
      <Reviews />
      <Blog />
    </div>
  )
}
