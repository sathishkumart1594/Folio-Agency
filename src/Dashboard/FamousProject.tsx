import logo from "../assets/images/icons.png";
import featured from "../assets/images/featured work.png";
import portfolio from "../assets/images/portfolio card.png";
import portfolio1 from "../assets/images/portfolio card 1.png";
import portfolio2 from "../assets/images/portfolio card 2.png";
import portfolio3 from "../assets/images/portfolio card 3.png";
import CTA from "../assets/images/calltoaction.png";

const FamousProject = () =>{
    return (
        <section className="bg-white py16 -top-210 relative">
            <div>
                <div>
                        <div className="mb-8 flex items-center gap-6 pl-40">
                            <img
                              src={logo}
                              alt="logo"
                              className="w-7"
                            />

                            <span className="text-sm text-gray-400 pl-25 ">
                              04
                            </span>
                            <span className="text-base text-[#5468E7] z-20 relative">
                              Famous Projects
                            </span>
                         </div>
                         
                         <h2 className="relative w-[920px] text-[64px] font-bold leading-[72px] pl-77 z-50">
                            Our Partnerships
                          </h2>

                          <p className="w-[920px] text-[14px] leading-[27px] pt-10 pl-78">
                          <span>
                            Agency is a full-service agency,busy designing and building 
                            <br/>
                            beautiful digital products,brands,and experiences.
                          </span>
                          </p>

                          <div className="relative pl-295 -top-50">
                               <button className="mt-10 rounded-md bg-[#5965F3] px-8 py-4 font-medium hover:bg-[#4955df]">
                                 Contact Us
                                </button>
                          </div>
                      </div>

                      <div className="relative -top-40">
                        <img src={featured} alt=""
                        className=""
                        />

                        <img src={portfolio} alt=""
                        className="pl-170"
                        />

                        <img src={portfolio1} alt=""
                        className="pl-15 -top-70 relative"
                        />

                        <img src={portfolio2} alt=""
                        className="pl-170 -top-70 relative"
                        />

                        <img src={portfolio3} alt=""
                        className="pl-70 -top-170 relative"
                        />

                        <img src={CTA} alt=""
                        className="pl-10 -top-170 relative"
                        />

                      </div>
            </div>
            </section>
    );

}

export default FamousProject;


