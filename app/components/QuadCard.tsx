import Image from "next/image";
import React from "react";
import PatientVisits from "@/public/PatientVisits.png"
import PTSessions from "@/public/PTsessions.png"
import Braces from "@/public/Braces.png"
import Casts from "@/public/Casts.png"


export default function SocialMediaBanner() {
    return (
            <div className="grid md:grid-cols-2 gap-1">
                <div className="grid-span-1">
                    <Image src={PatientVisits} alt="54,000 patient visits" />
                    </div>    
                <div className="grid-span-1">
                <Image src={PTSessions} alt="54,000 patient visits" />
                    </div>  
                <div className="grid">
                <Image src={Braces} alt="54,000 patient visits" />
                    </div>  
                <div className="grid-span-1">
                <Image src={Casts} alt="54,000 patient visits" />
                    </div>  
        





</div>
)
}