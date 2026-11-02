import { useEffect, useState } from "react"




export const useObserver = (el) => {
    const [inView, setInView] = useState(false);
    const observe = (entry) => {
        console.log(entry);
        if (entry[0].isIntersecting) {
            console.log("element is visible!")
            setInView(false);
        }
    }

    const observer = new IntersectionObserver(observe);

    useEffect(() => {
        if (el.current) {
            observer.observe(el.current);
        }

        console.log("firing")
    })



    return { inView };
}