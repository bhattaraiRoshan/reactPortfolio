import "./App.css"

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
    <header>

        <div className="header flex container">
            <div className="logo flex">
                <div>Roshan</div>
                <div className="lineclass">
                    Soft. Engineer 
                </div>
            </div>
            <label htmlFor="hamburgerMenu"><div className="fa-solid fa-bars fa-beat"></div></label>
            <input type="checkbox" name="" id="hamburgerMenu"/>

            <div className="menu">
                
                <ul className="flex navigation">
                    <li>
                        <a href="home">Home</a>
                    </li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </header>

    {/* <!-- hero section --> */}

    <section id="home" className="hero-section container">
        <div className="grid hero">
            <div className="left flex">
                <div>Hi I <span>Roshan Bhattarai</span></div>
                <div className="tag">Soft. Engineer</div>
                <p>div love coding and playing cricket</p>
                <div>
                    <button>Download CV
                        <div className="fa-solid fa-download"></div>
                    </button>
                </div>
            </div>
            <div className="right flex" >
                <img src="" width=""  alt="my photo"/> 
            </div>
        </div>
    </section>

    {/* <!-- banner --> */}
    <div className="flex banner container">
        <div className="info-content flex">
            <div className="icon-container flex">
                <div className="fa-solid fa-award"></div>
            </div>
            <div>
                <span>IT</span>
                <p>Graduated</p>
            </div>
        </div>
        <div className="info-divider"></div>

        <div className="info-content flex">
            <div className="icon-container flex">
                <div className="fa-solid fa-award"></div>
            </div>
            <div>
                <span>10+ Projects</span>
                <p>Completed</p>
            </div>
        </div>
        <div className="info-divider"></div>

        <div className="info-content flex">
            <div className="icon-container flex">
                <div className="fa-solid fa-award"></div>
            </div>
            <div>
                <span>1 years</span>
                <p>Experience</p>
            </div>
        </div>
    </div>
    

    {/* <!-- skills --> */}
    <section id="skills" className="skills container flex">
        <div>
            <div className="fa-brands fa-html5 fa-flip" ></div>
            <span>HTML</span>
        </div>

        <div>
            <div className="fa-brands fa-css3-alt fa-flip" ></div>
            <span>CSS</span>
        </div>

        <div>
            <div className="fa-brands fa-js fa-flip" ></div>
            <span>JavaScript</span>
        </div>

        <div>
            <div className="fa-brands fa-html5"></div>
            <span>HTML</span>
        </div>
    </section>



    {/* <!-- projects --> */}


    {/* <!-- about --> */}
<section id="about" className="about">
<h2 className="title">
    <span>About Me</span>
</h2>

<div className="container flex about-content">
    <div className="imImg flex">
        <img src="" alt="My photo"/>
    </div>

    <div className="my-bio">
        <h2>Roshan Bhattarai</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, cumque dolore id commodi unde, in molestiae numquam impedit, dolorem fuga enim tempora sapiente rem placeat recusandae quasi. Nesciunt, ducimus earum.</p>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, cumque dolore id commodi unde, in molestiae numquam impedit, dolorem fuga enim tempora sapiente rem placeat recusandae quasi. Nesciunt, ducimus earum.</p>
        <p>Sydney, Australia</p>

        <div>
            <div className="tag">Interest</div>
            <div className="flex">
                <span>Coding</span>
                <span>Cricket</span>
            </div>
        </div>

    </div>
</div>
</section>


    {/* <!-- contact --> */}
<section id="contact" className="container contact">
<h2 className="title">
    <span>Get in Touc</span>
</h2>

<div className="social flex">
    <a href="https://www.linkedin.com/in/roshan--bhattarai/" rel="noreferrer" target="_blank">
        <div className="fa-brands fa-linkedin"></div>

    </a>
    <a href="">
        <div className="fa-brands fa-github"></div>
    </a>
    <a href="">
        <div className="fa-brands fa-youtube"></div>
    </a>
    <a href="tel:0405624418">
        <div className="fa-solid fa-mobile"></div>
    </a>
</div>
<h3>OR</h3>

<a href="mailto:roshan.bhattarai@proroshan.com">
    <div className="email-section flex">
        <div className="email flex">
            <span>roshan.bhattarai@proroshan.com</span>
            <div className="send flex">
                <div className="fa-solid fa-paper-plane"></div>
            </div>
        </div>
    </div>
</a>

</section>


    {/* <!-- footers --> */}

    <footer className="footer">
        <div className="container">
            <div className="top flex">
                <div className="links">
                    <h2>Links</h2>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Skills</a></li>
                        <li><a href="">Project</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                <div className="socials">
                    <h2>Social Links</h2>
                    <ul>
                        <li><a href="">linkedin</a></li>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">GitHub</a></li>
                        <li><a href="">Youtube</a></li>
                    </ul>
                </div>
            
        </div></div>
        
    </footer>
    <div className="bottom ">
        &copy; All right reseved. Made by me with love ❤

    </div>
    <a href="home">
        <div className="go-up flex">
            <div className="fa-solid fa-angle-up fa-bounce"></div>

        </div>
    </a>
    
</div>

</body>
    </>
  )
}

export default App
