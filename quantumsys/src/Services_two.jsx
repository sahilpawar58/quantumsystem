import authorize from "./assets/services/authorize.svg";
import { SiMaterialdesignicons } from "react-icons/si";
import design from "./assets/services/design.png"


export function Service_Two(){
    
    return(
        <>
       <div className="h-screen w-full bg-green-400 flex items-end justify-center " >
       <div className="w-1/2 h-full p-16" >
       <img className=" " src={design}  />
       </div>
       <div className="w-1/2 h-full flex flex-col gap-6 justify-center "  >
        <div className="w-full h-1/2 bg-red-500" >
        <p className="text-8xl" >Design</p>
        <div >
        <p className="text-4xl" >01. Design</p>
        <p className="text-xl pr-16" >The structure and the prototype are the base from which any project in our studio is built</p>
        </div>
        <div >
        <p className="text-4xl" >02. UI/UX</p>
        <p className="text-xl pr-16" >It continues the theme of the project concept and create its final appearance, interface and memorable style</p>
        </div>
        </div>
       </div>
       
       </div>
        </>
    )
}