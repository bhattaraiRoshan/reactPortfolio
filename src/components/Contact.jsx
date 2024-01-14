export const Contact = () =>{
    return(
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
    )
}