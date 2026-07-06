import footerpage from "../assets/images/footer.png";
import footerBottom from "../assets/images/footer bottom.png";

const footer = () =>{
    return(
        <section>
             <div className="relative -top-630 flex justify-center">
                    <img src={footerpage} alt="footer"
                        className=""
                    />
                </div>
                <div className="flex justify-center relative -top-100">
                    <img src={footerBottom} alt="footer"
                        className="relative -top-520"
                    />
                </div>
        </section>

    );
}

export default footer;