import { useGSAP } from "@gsap/react"
import gsap from "gsap"

import VideoCarousal from "./VideoCarousal"

import { rightImg, watchImg } from "../utils"

import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"
gsap.registerPlugin(ScrollTrigger)

const Highlights = () => {

    const scrollRef = useRef();

    useGSAP(() => {
        
        gsap.to(".link1", { opacity: 1, y: 0,delay:0.4, scrollTrigger: { trigger: ".link1" } })
        gsap.to(".link2", { opacity: 1, y: 0,delay:0.7, scrollTrigger: { trigger: ".link2" } })
        gsap.to("#title", { opacity: 1, y: 0,delay:0.2, scrollTrigger: { trigger: "#title" } })



    }, [])


    return (
        <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
            <div className="screen-max-width">
                <div className="mb-12 w-full flex items-end justify-between flex-wrap">
                    <h1 id="title" className="section-heading">Get the Highlights</h1>
                    <div className="flex flex-wrap items-end gap-5">
                        <p className="link link1" ref={scrollRef}>Watch the Flim <img src={watchImg} alt="" className="ml-2" /></p>
                        <p className="link link2" ref={scrollRef}>Watch the Event <img src={rightImg} alt="" className="ml-2" /></p>
                    </div>
                </div>
            </div>

        <VideoCarousal/>
        </section>
    )
}

export default Highlights
