import React, { ReactNode } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";

interface GrowOnScrol {
    children: ReactNode;
}

function GrowOnScrol({ children }: GrowOnScrol) {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);

    return (
        <>
            <motion.div style={{ scale }}>
                <motion.div
                    style={{
                        scaleY: scrollYProgress,
                    }}
                />
                {children}
            </motion.div>
        </>
    );
}

export default GrowOnScrol;
