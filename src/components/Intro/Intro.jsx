import React from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { VertLines, HorzLines, Title } from "./components"
import './Intro.css'

const Intro = ({ showIntro, setShowIntro }) => {

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.addLabel("Vert", .5);
        tl.addLabel("Horz", 4);
        tl.addLabel("Title", 5.25);
        tl.addLabel("Finish", 10)

        tl.set(".vert-line", { className: "vert-line animate-vert-line" }, "Vert")
        tl.set(".horz-line", { className: "horz-line animate-horz-line" }, "Horz")
        tl.set(".title-container", { className: "title-container fade-in-title-container" }, "Title");
        tl.call(() => {
            console.log("Finished!")
            setShowIntro(false);
        }, null, "Finish")


    }, [])
    return (
        <div className='intro-container page-container'>
            <VertLines />
            <HorzLines />
            <Title />
        </div>
    );
};

export default Intro;