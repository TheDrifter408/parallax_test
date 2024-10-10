import { useEffect, useRef } from "react";
import { ParallaxProps } from "../types"
import { animate,scroll } from "motion";
export default function Parallax({ children,className,yValues } : ParallaxProps){
    const ref = useRef(null);
    useEffect(() => {
        if(ref.current){
            scroll(
                animate(ref.current,
                    { y:yValues },
                    { offset:[0,0.5,0.75,1] },
                ),
            )
        }
    },[])
    return (
        <div ref={ref} className={`transition-transform ${className}`}>
            {children}
        </div>
    )
}