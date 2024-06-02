import { FaArrowRight } from "react-icons/fa";
import phone from './assets/phone.png'
import Galileo from './assets/Galileo.png'
import WindowCard from './WindowCard'
import Galileomb from './assets/mbnew.png'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect } from "react";

export default function Hero(){

  useEffect(()=>{
    gsap.to('.hero_left', 
      { 
        y: -30, 
        duration: 0.5,
        opacity: 1, 
      }
    );
    gsap.to('.hero_browser', 
      { 
        y: -30, 
        duration: 0.5,
        opacity: 1, 
        // delay:2,
      }
    );
    gsap.to('.hero_phone', 
      { 
        y: -30, 
        duration: 1,
        opacity: 1, 
        // delay:2,
      }
    );
    
  })
  
  useGSAP(() => {
    // Create a timeline with infinite repeat and a delay between repeats
    const tl = gsap.timeline({ repeat: -1 });
    tl.to('.hero_phone', 
      { 
        x: -1, 
        // delay:3,
        duration: 2,
        opacity: 1, 
        // delay:2,
      }
    );
    tl.to('.hero_phone', 
      { 
        x: 1, 
        // delay:3,
        duration: 2,
        opacity: 1, 
        // delay:2,
      }
    );
  });
  useGSAP(() => {
    // Create a timeline with infinite repeat and a delay between repeats
    const tl = gsap.timeline({ repeat: -1 });
    tl.to('.hero_browser', 
      { 
        x: 1, 
        // delay:3,
        duration: 2,
        opacity: 1, 
        delay:1,
      }
    );
    tl.to('.hero_browser', 
      { 
        x: -1, 
        // delay:3,
        duration: 2,
        opacity: 1, 
        // delay:2,
      }
    );
  });
 

  useGSAP(() => {
    // Create a timeline with infinite repeat and a delay between repeats
    const tl = gsap.timeline({ repeat: -1 });
  
    // Add the first animation to the timeline
    tl.to('.hero_text_first', 
      { 
        y: 5, 
        duration: 1,
        opacity: 1, 
        // delay:2,
        display:"flex",
        // visibility:"hidden"
      }
    );
    tl.to('.hero_text_first', 
      { 
        duration:3
      }
    );
    tl.to('.hero_text_first', 
      { 
        x: 32,
        duration: 0.2,
        opacity: 0, 
        delay:2,
        display:"none",
        visibility:"hidden"
      }
    );
  
    // Add the second animation to the timeline
    tl.to('.hero_text_second', 
      { 
        y: 5, 
        duration: 2,
        opacity: 1, 
        // delay:2,
        display:"flex",
        // visibility:"hidden"
      }
    );
    tl.to('.hero_text_second', 
      { 
        duration:3
      }
    );
    tl.to('.hero_text_second', 
      { 
        x: 32,
        duration: 0.2,
        opacity: 0, 
        delay:2,
        display:"none",
        visibility:"hidden"
      }
    );

    tl.to('.hero_text_third', 
      { 
        y: 5, 
        duration: 2,
        opacity: 1, 
        // delay:2,
        display:"flex",
        // visibility:"hidden"
      }
    );
    tl.to('.hero_text_third', 
      { 
        duration:3
      }
    );
    tl.to('.hero_text_third', 
      { 
        x: 32,
        duration: 0.2,
        opacity: 0, 
        delay:2,
        display:"none",
        visibility:"hidden"
      }
    );
  
    
  
  });
  

 return(
    <>
    <div className='h-[calc(100%-10rem)] w-[calc(100%-4rem)]  ml-16 flex mb-12'>
     <div className='hero_left h-1/2  w-2/5  flex  flex-col justify-between mt-32 gap-5 '>
      <div className="hero_text_first flex  flex-col justify-between gap-5 ">
        <p className='font-extrabold text-5xl bg-clip-text text-inherit text '>
        <p
  className="bg-gradient-to-r inline from-primary to-danger bg-clip-text text-transparent">
  New 1</p>Generation
Digital Agency.</p>
        <p className='font-medium'>
        Seamlessly connect to payment vendors and reconcile you transactions.
No Integration needed!
        </p>
        </div>
      
        <div className="hero_text_second hidden  flex-col justify-between gap-5 ">
        <p className='font-extrabold text-5xl bg-clip-text text-inherit text '>
        <p
        className="bg-gradient-to-r inline from-primary to-danger bg-clip-text text-transparent">
        New 2</p>Generation
        Digital Agency.</p>
        <p className='font-medium'>
        Seamlessly connect to payment vendors and reconcile you transactions.
        No Integration needed!
        </p>
        </div>

        <div className="hero_text_third hidden flex-col justify-between gap-5 ">
        <p className='font-extrabold text-5xl bg-clip-text text-inherit text '>
        <p
        className="bg-gradient-to-r inline from-primary to-danger bg-clip-text text-transparent">
        New 3</p>Generation
        Digital Agency.</p>
        <p className='font-medium'>
        Seamlessly connect to payment vendors and reconcile you transactions.
        No Integration needed!
        </p>
        </div>
        <div className=" flex items-center gap-4 ">
            <button className="btn w-32 h-14 text-lg font-bold border-solid border-black p-2 flex items-center justify-center gap-4"><p>Login</p> <FaArrowRight /></button>
            <button className="btn w-48 h-14 btn-neutral text-lg font-bold border-solid border-black p-2 flex items-center justify-center gap-4"><p>Talk to Team</p> <FaArrowRight /></button>
           
      </div>
     </div>
      
     <div className='h-full w-3/5 relative mt-4 ml-4 flex flex-row'>
      {/* Mobile */}
      
     <div className="hero_browser mockup-browser border bg-base-300 w-[calc(100%-8rem)] h-[calc(100%+2rem)] z-10 relative left-28" data-scroll-speed="2">
        <div className="mockup-browser-toolbar">
          <div className="input">https://client.dash</div>
        </div>
         <div className="flex flex-row px-4 h-full w-full ">
         <img className='shadow-xl rounded-lg w-[calc(100%-2px)] h-[calc(100%-4rem)] rounded-b-[20px] ' src={Galileo}/>

              {/* <div className='w-1/5'></div>
              <div className='w-full h-5/6 rounded-lg ml-16 my-4 font-medium bg-white'>
                <p className='m-4'>Web App</p>
                <hr class="h-px mx-2 bg-gray-200 border-0 dark:bg-gray-900"></hr>
                <WindowCard />
              </div> */}
          </div>
     </div>
     <div className='hero_phone h-5/6 w-72 bg-transparent absolute z-20 ml-4 '>
      <img className='shadow-xl  rounded-[24px] object-fill' src={Galileomb}/>

      </div>
     </div>
     
     
    </div>
    </>
 )
}