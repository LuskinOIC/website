import Image from "next/image";
import React from "react";
import PatientVisits from "@/public/PatientVisits.png"
import PTSessions from "@/public/PTsessions.png"
import Braces from "@/public/Braces.png"
import Casts from "@/public/Casts.png"


export default function SocialMediaBanner() {
    return (
            <div className="flex justify-content: space-around">
                <div className="row">
                    <div className="column">
                        <Image src={PatientVisits} alt="54,000 patient visits" />
                    </div>    
                    <div className="column">
                        <Image src={PTSessions} alt="54,000 patient visits" />
                    </div>  
                </div>
                <div className="row">
                    <div className="column">
                        <Image src={Braces} alt="54,000 patient visits" />
                    </div>  
                    <div className="row">
                        <Image src={Casts} alt="54,000 patient visits" />
                    </div>  
                </div>
        





</div>
)
}