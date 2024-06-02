import { FaQuoteLeft } from "react-icons/fa";
import shawn from "./assets/services/shawn.jpg"
export function Client() {
return(<>
<div className="h-screen w-full bg-red-400 flex flex-col justify-center perspective-1px overflow-hidden" data-scroll>
    <div className="h-2/3 w-full bg-slate-500 flex items-center justify-center">
        <div className="h-5/6 w-2/3 bg-red-200 rounded-xl overflow-hidden flex flex-row">
            <div className="h-full w-3/4 bg-slate-400 ">
            <FaQuoteLeft className="h-16 w-16  pl-4"/>
            
            <p className="text-xl mx-8 mt-2 ml-12">
            I have partnered with Quantum for dozens of projects and every single one of them has been successful! Natish is a professional and always delivers beautiful designs whether it's wireframes or live pages built by his agency. I would highly recommend Quantum to anyone looking for a design partner they can trust.
            </p>
            <br />
            <p className="text-xl mx-8 mt-2 ml-12">
            Scaling from one country to another was reduced to button clicks. Their solution was fairly straightforward to integrate, and the team was very responsive.
            </p>
            </div>
            <div className="h-full w-1/4 bg-slate-400">
                <img className="max-w-full h-auto rounded-lg " src={shawn}></img>
            </div>
        </div>

        
    </div>
    <div className="h-1/3 w-1/2 bg-slate-100 ">
    
    </div>
</div>
</>)
}