import Image from "next/image";
import React from "react";
import PatientVisits from "@/public/PatientVisits.png"
import PTSessions from "@/public/PTsessions.png"
import Braces from "@/public/Braces.png"
import Casts from "@/public/Casts.png"


export default function SocialMediaBanner() {
    return (
            <div className="grid grid-cols-2 ">
                <div className="flex justify-center">
                    
                        <Image src={PatientVisits} alt="54,000 patient visits" />
                        
                </div>
                <div className="flex justify-center">  
                        <Image src={PTSessions} alt="54,000 patient visits" />
                   
                </div>
                <div className="flex justify-center">
                    
                        <Image src={Braces} alt="54,000 patient visits" />
                </div>
                <div className="flex justify-center">     
                    
                        <Image src={Casts} alt="54,000 patient visits" />
                    
                </div>
        
            </div>
)
}