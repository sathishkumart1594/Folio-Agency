import logo from "../assets/images/icons.png";
import Job from "../assets/images/job.png";
import Graphic from "../assets/images/Graphic Designer.png";
import Visual from "../assets/images/Visual Designer.png";
import Art from "../assets/images/Art Director.png";
import Web from "../assets/images/Web Designer.png";



const Jobs = () =>{
    return(
        <section className="bg-[#F7F3F8] py-16 -top-410 relative">
            <div>
                <div className="flex items-center gap-6 pl-40 relative">
                   <img src={logo} alt="logo"
                        className="w-7 "
                    />
                    <img src={Job} alt=""
                        className="relative top-38 pl-20"
                    />
                </div>

                <div className="relative pl-170 gap-2 -top-80">

                    <img src={Graphic} alt=""
                        className="relative top-1 pl-25"
                    />

                    <img src={Visual} alt=""
                        className="relative -top-50 pl-25"
                    />

                    <img src={Art} alt=""
                        className="relative -top-102 pl-25"
                    />

                    <img src={Web} alt=""
                        className="relative -top-150 pl-25"
                    />
                    </div>
            </div>

        </section>

    );
}

export default Jobs;