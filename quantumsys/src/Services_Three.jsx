import authorize from "./assets/services/authorize.svg";
import { SiMaterialdesignicons } from "react-icons/si";
import design from "./assets/services/backend.jpg"

import { Parallax } from "./Parallax";


export function Service_Three(){
    return(
        <>
       <div className="h-screen w-full  flex items-end justify-center perspective-1px overflow-hidden" data-scroll>
       <div className="w-1/2 h-full p-16 perspective-1px" data-scroll>
       <Parallax speed={-2} className="self-start">
       <img className=" " src={design}  />
      </Parallax>
       </div>
       
       <div className="w-1/2 h-full flex flex-col pb-4 gap-12 justify-center">
       <Parallax speed={-1} className="self-start">
        <div className="">
        <p className="text-8xl">Backend</p>
        <div>
        <p className="text-4xl">01. Methods and functions</p>
        <p className="text-xl pr-16">Development of mechanics of receiving and transmitting various types of data, creation of calculations and data storage</p>
        </div>
        <div>
        <p className="text-4xl">02. API and infrastructure</p>
        <p className="text-xl pr-16">Functionality that receives and transmits data from scripts and from the database when interacting with them</p>
        </div>
        </div>
        </Parallax>
       </div>
       
    
       </div>
        </>
    )
}