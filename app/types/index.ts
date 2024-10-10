import { ReactNode } from "react"

export type ItemProps = {
    id:number,
    listStyle:string,
    link:string,
    linkStyle:string,
    text:string,
}

export type ParallaxProps = {
    children:ReactNode,
    className:string,
    yValues:(string | number | null)[]
}

export type SliderItemProps = {
    id:number,
    title:string,
    year:string,
    imagePath:string,
    desc:string
}