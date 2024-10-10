"use client";
import Image from "next/image";
import Icon from '/public/icon.svg';
import { useRef, useState } from "react";
import { animate } from "motion";
import { ItemProps } from "../types";

const menuItems:ItemProps[] = ["Home","About Us","Concerns","News & Media", "Contact Us"].map(function(text,idx) {
    return {
        id:idx,
        listStyle:"text-gray-200/90 font-bold w-[96%] py-4 mx-auto",
        link:"/",
        linkStyle:"text-xl p-2",
        text:text,
    }
});

export default function Header(){
    const [isOpen,setOpen] = useState(false);
    const navRef = useRef(null);
    function OpenMenu(){
        if(navRef.current){
            if(isOpen === false){
                setOpen(!isOpen);
                animate(
                    navRef.current,
                    { transform:["translateY(88px)"] },
                    { duration: 0.9 }
                )
            } else {
                setOpen(!isOpen);
                animate(
                    navRef.current,
                    { transform:["translateY(-698px)"] },
                    { duration:0.9 }
                )
            }
        }    
    }
    return (
        <header className={`z-10 col-span-12 transition-colors duration-700 origin-right ease-in ${isOpen  ? 'bg-radial-gradient' : 'bg-transparent' }`}>
            <div className="z-20 w-[95%] mx-auto flex justify-between py-6 border-b-[1px] border-gray-200/40">
                <div>
                    <Image src={Icon} alt="Nasir Group Icon"  />
                </div>
                <button onClick={OpenMenu} className="rounded-full w-10 bg-white">
                    <p className="text-xs">{ isOpen ? "Open" : "Closed" }</p>
                </button>
                <nav style={{ transform: 'translateY(-698px)' }} ref={navRef} className="absolute transition-transform top-0 left-0 z-0 w-[100%] bg-radial-gradient h-[87.3vh] overflow-hidden">
                    <ul className="grid items-start">
                        {
                            menuItems.map((item) => (
                                <li key={item.id} className={item.listStyle}>
                                    <a className={item.linkStyle} href={item.link}>{item.text}</a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}