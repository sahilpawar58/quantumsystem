import  Dropdown  from "./Dropdown";
import quantum from "./assets/quantum.svg"


export default function Header(){
    return(
        <>
        <div className="navbar bg-base-100 pl-16 w-full mt-1 font-sans bg-transparent text-black ">
       <div className="flex w-full">
        <div className="flex-none w-1/6 flex items-center">
        <img src={quantum} className="w-40 h-20"></img>
        </div>
        <div className="flex-1 w-4/6 gap-2 text-black lg:flex md:flex items-center justify-center text-base font-semibold sm:hidden  z-50">
            <Dropdown name="Integration"/>
            <Dropdown name="Use Case"/>
            <p className=" hover:font-bold text-black hover:cursor-pointer mx-4">
                Pricing
            </p>
            <Dropdown name="Company"/>
        </div>
        <div className="flex-1 w-1/6 flex items-center gap-4 justify-center">
            <button className="btn  text-lg ">Login</button>
            <button className="btn btn-neutral text-base">Sign Up</button>
        </div>
        </div>
        
        </div>
        </>
    )
}