import arrows1 from "../assets/images/Arrows1.png";
import logo from "../assets/images/icons.png";
import phone from "../assets/images/phone.png";
import Service from "../assets/images/ServiceCards.png";


const WhatWeDo = () =>{
    return (
        <section className="bg-white overflow-hidden pt-26 relative my-10">
            <div className="mx-auto max-w-7xl px-10">
                <div className="flex items-start justify-between">
                    <div>
                        <div className="mb-8 flex items-center gap-6">
                            <img
                              src={logo}
                              alt="logo"
                              className="w-8"
                            />
                             {/* <img
                             src={design2}
                             alt="" 
                             className="absolute top-0 pl-7 w-40px pointer-events-none select-none z-10"/> */}
                            <span className="text-xs text-gray-400 pl-25 ">
                              02
                            </span>
                            <span className="text-sm text-[#5468E7] z-20 relative">
                              Who We Do
                            </span>
                         </div>
                         
                         <h2 className="absolute w-[920px] text-[64px] font-bold leading-[72px] pl-37 z-50">
                            We Make Designs that
                            <br />
                            Lead and Inspire.
                          </h2>
                      </div>

                <img
                  src={arrows1}
                  alt="navigation"
                  className="w-30 pt-20 relative"
                 />
              </div> 

              <div className="pt-40">
                <img src={Service} alt="servicecards"
                   className="w-500 h-150"/>
              </div>

              <div className="pt-25 pl-30 relative">

                <div className="relative w-80 bg-pink-300 p-50 rounded-full"></div>

                <img src={phone} alt="phone"
                   className=" h-160 w-290 relative -top-130 -left-20"/>  

                <div className="relative -top-265 pl-130">

                  <div className="mb-8 flex items-center gap-3">
                        <img
                         src={logo}
                         alt="logo"
                         className="w-6"
                         />

                        <span className="text-sm text-gray-400 pl-20 relative">
                             03
                        </span>

                        <span className=" text-base">
                            Archivement
                        </span>
                       </div>
                         <h2 className="w-[590px] text-[34px] font-bold leading-[72px]">
                            A design team building a curate
                            marketplace opfr UI designers.
                         </h2>
                  
                            <h1 className="text-[140px] text-[#5468E7] font-bold pr-90">68</h1>
                            <div className="flex items-center gap-2 font-bold">
                               <span>😎</span>
                               <span>Successful Projects</span>
                            </div>  
                    </div>
              </div>
           </div>
         </section>
    )
}

export default WhatWeDo;