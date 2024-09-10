"use client"

import {Lalezar} from "next/font/google";
import { useState } from "react";
const lalezar = Lalezar({ weight: "400", subsets: ["latin"] });
export default function BottomNav(){

    type allowedStates = "Communites"| "Contribute"|"Mentorship"| "Careers"| "Contact Us"| "More" |"None"
    const sectionArray: allowedStates[]=["Communites", "Contribute","Mentorship", "Careers", "Contact Us", "More"]

    const [section, setSection] = useState<allowedStates>("None")
    
    return(
        <div className="flex justify-center items-center bg-inherit w-screen h-32">
            <div className={`bg-white space-x-32 justify-between rounded-full text-[#45433E] items-center flex ${lalezar.className} p-6 shadow-sm shadow-[#45433E]`}>
                {sectionArray.map((item) => (
                    <button
                    onClick={() => setSection(item)}
                    className={`text-3xl ${section===item?"underline decoration-8 underline-offset-8 decoration-[#DE1B17]":""}`}
                    key={item}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    )
}