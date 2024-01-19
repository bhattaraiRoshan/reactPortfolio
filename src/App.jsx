
import "./App.css";
import { About } from  "../src/components/about/About";
import { Contact } from "../src/components/contact/Contact"
import Footer from "../src/components/footer/Footer";

import { Header } from "../src/components/header/Header";
import Nav from "../src/components/navbar/Navbar";
import { Project } from "../src/components/project/Project";
import { Skills } from "../src/components/skills/Skills";

function App() {
  return (
    <>
      <Header />
      <Nav />

      <Skills />
      <Project />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;