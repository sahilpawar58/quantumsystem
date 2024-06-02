import authorize from "./assets/services/authorize.svg";
import { SiMaterialdesignicons } from "react-icons/si";
import design from "./assets/services/design.png"

import { Parallax } from "./Parallax";


export function Service(){
    return(
        <>
       <div className="h-screen w-full bg-slate-100 flex items-end justify-center perspective-1px overflow-hidden" data-scroll>
       <div className="w-1/2 h-full p-16 perspective-1px" data-scroll>
       <Parallax speed={-2} className="self-start">
       <img className=" " src={design}  />
      </Parallax>
       </div>
       
       <div className="w-1/2 h-full flex flex-col gap-6 justify-center ">
       <Parallax speed={-1} className="self-start">
        <div className="">
        <p className="text-8xl">Design</p>
        <div>
        <p className="text-4xl">01. Design</p>
        <p className="text-xl pr-16">The structure and the prototype are the base from which any project in our studio is built</p>
        </div>
        <div>
        <p className="text-4xl">02. UI/UX</p>
        <p className="text-xl pr-16">It continues the theme of the project concept and create its final appearance, interface and memorable style</p>
        </div>
        </div>
        </Parallax>
       </div>
       
    
       </div>
        </>
    )
}