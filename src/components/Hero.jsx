import pic from "../assets/roshan.png";
import resume from "../assets/resume.pdf"


export const Hero = () =>{

    return(
        <section id="home" className="hero-section container">
        <div className="grid hero">
            <div className="left flex">
                <div>Hi I <span>Roshan Bhattarai</span></div>
                <div className="tag">Soft. Engineer</div>
                <p>div love coding and playing cricket</p>
                <a 
                href={resume}
                download="Roshan-Resume"
                target="_blank"
                rel="noreferrer"
                >
                    <button>Download CV
                        <div className="fa-solid fa-download"></div>
                    </button>
                </a>
            </div>
            <div className="right flex" >
                <img src={pic} width=""  alt="my photo"/> 
            </div>
        </div>
    </section>
    )
}