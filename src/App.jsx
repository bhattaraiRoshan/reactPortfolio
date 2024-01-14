import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"


import { Footer } from "./components/Footer"

import { NavBar } from "./components/NavBar"
import { HomePage } from "./pages/homePage"
import { SkillsPage } from "./pages/SkillsPage"
import { ProjectPage } from "./pages/ProjectPage"
import { AboutPage } from "./pages/AboutPage"
import { ContactPage } from "./pages/ContactPage"

function App() {
  

  return (
    <>
     <body>

{/* <!-- dark mode toggler --> */}

<input type="checkbox" id="darkmode"/>


<div className="wrapper">

    <label htmlFor="darkmode" className="dark-mo  de-toggle">
        <div className="fa-sharp fa-solid fa-circle-half-stroke"></div>
    </label>

    {/* <!-- navbar --> */}

    
    

    {/* <!-- hero section --> */}

    {/* <Hero/> */}

    <BrowserRouter>
    <NavBar/>

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/skills" element={<SkillsPage/>}/>
        <Route path="/projects" element={<ProjectPage/>} />
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>

    
    </BrowserRouter>

    

    {/* <!-- banner --> */}
    {/* <Banner/> */}
    
    

    {/* <!-- skills --> */}

    {/* <Skills/> */}
    



    {/* <!-- projects --> */}
    {/* <Projects/>  */}


    {/* <!-- about --> */}
    {/* <About/> */}



    {/* <!-- contact --> */}

    {/* <Contact/> */}



    {/* <!-- footers --> */}

    <Footer/>

   
    
</div>

</body>
    </>
  )
}

export default App
