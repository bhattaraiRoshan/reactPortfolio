import "./App.css"
import { About } from "./components/About"
import { Banner } from "./components/Banner"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { NavBar } from "./components/NavBar"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"

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

    <NavBar/>
    

    {/* <!-- hero section --> */}

    <Hero/>

    

    {/* <!-- banner --> */}
    <Banner/>
    
    

    {/* <!-- skills --> */}

    <Skills/>
    



    {/* <!-- projects --> */}
    <Projects/>


    {/* <!-- about --> */}
    <About/>



    {/* <!-- contact --> */}

    <Contact/>



    {/* <!-- footers --> */}

    <Footer/>

   
    
</div>

</body>
    </>
  )
}

export default App
