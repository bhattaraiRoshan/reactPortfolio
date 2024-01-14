import { Link } from "react-router-dom"


export const NavBar = () =>{
    return (

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
                        <Link to="/">Home</Link>
                    </li>
                
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    </header>


    )
}