import authorize from "./assets/services/authorize.svg";
import { SiMaterialdesignicons } from "react-icons/si";
import design from "./assets/services/frontend.jpg"

import { Parallax } from "./Parallax";


export function Service_Two(){
    return(
        <>
       <div className="h-screen w-full bg-[#FAF7F0] flex items-end justify-center perspective-1px overflow-hidden" data-scroll>
       <div className="w-1/2 h-full p-16 perspective-1px" data-scroll>
       <Parallax speed={-2} className="self-start">
       <img className=" " src={design}  />
      </Parallax>
       </div>
       
       <div className="w-1/2 h-full flex flex-col pb-4 gap-12 justify-center">
       <Parallax speed={-1} className="self-start">
        <div className="">
        <p className="text-8xl">Frontend</p>
        <div>
        <p className="text-4xl">01. Layout</p>
        <p className="text-xl pr-16">Creating static pages, thought out in the project and visualized on the design</p>
        </div>
        <div>
        <p className="text-4xl">02. Frontend</p>
        <p className="text-xl pr-16">Connecting the necessary functionality to interact with the technical part of the project</p>
        </div>
        </div>
        </Parallax>
       </div>
       
    
       </div>
        </>
    )
}