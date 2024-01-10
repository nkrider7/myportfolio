import Footer from "./Components/Footer"
import Gallary from "./Components/Gallary"
import Hero from "./Components/Hero"
import Jarvis from "./Components/Jarvis"
import Resume from "./Components/Resume"
import Navbar from "./Components/Navbar"
import Recommand from "./Components/Recommand"
import Contactus from "./Components/Contactus"
import Project from "./Components/Project"
import Experience from "./Components/Experience"
import Terminal from "./Components/Terminal"



function App() {

  return (
    <>
    <div className={`font-display scrollbar-hide md:scrollbar-default`}>

      
    <Navbar>
      
      </Navbar>
      <Jarvis/>
      <Terminal>

      </Terminal>
      <Resume>
  
      </Resume>
      <Experience>

      </Experience>
      <Project>
        
      </Project>
      <Hero>
        
      </Hero>

      <Gallary>
  
      </Gallary>
  
      <Recommand>

      </Recommand>
      <Contactus>

      </Contactus>
      <Footer>
  
      </Footer>
    </div>
    </>

  )
}

export default App
