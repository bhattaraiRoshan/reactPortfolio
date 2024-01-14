export const Footer = () =>{
    return(
        <>
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
        
        
        </>
    )
}