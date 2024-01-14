
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
                        <a href="#home">Home</a>
                    </li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </header>


    )
}