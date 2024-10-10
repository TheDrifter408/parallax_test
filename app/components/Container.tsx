import { ReactNode } from "react";

export default function Container(
    { children } :{ children: ReactNode}
){
    return(
        <section className="relative grid grid-cols-12 overflow-y-visible scroll-smooth h-screen">
            <div className="absolute -z-10 col-span-12 h-full">
                <video className="object-cover h-full" autoPlay loop muted>
                    <source src="/home_video.mp4" type="video/mp4" />
                </video>
            </div>
            {children}
        </section>
    )
}