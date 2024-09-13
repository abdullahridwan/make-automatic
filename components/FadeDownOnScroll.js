// components/FadeDownOnScroll.js
import { useEffect, useState } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";

const FadeDownOnScroll = ({ children, startFade = 100, endFade = 300 }) => {
    const { scrollY } = useViewportScroll();
    const [elementTop, setElementTop] = useState(0);
    const [clientHeight, setClientHeight] = useState(0);

    const yTransform = useTransform(
        scrollY,
        [elementTop - clientHeight, elementTop],
        [20, 0]
    );
    const opacityTransform = useTransform(
        scrollY,
        [elementTop - clientHeight, elementTop],
        [0, 1]
    );

    useEffect(() => {
        const handleResize = () => {
            setElementTop(document.querySelector("#fade-element").offsetTop);
            setClientHeight(window.innerHeight);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <motion.div
            id="fade-element"
            style={{
                opacity: opacityTransform,
                y: yTransform,
            }}
            className="w-full"
        >
            {children}
        </motion.div>
    );
};

export default FadeDownOnScroll;
