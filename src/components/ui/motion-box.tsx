"use client";

import { motion } from "framer-motion";
import React from "react";

interface MotionBoxProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    viewport?: { once?: boolean; margin?: string };
    direction?: "up" | "down" | "left" | "right" | "none";
    duration?: number;
    viewportMargin?: string;
}

export function MotionBox({
    children,
    className,
    delay = 0,
    direction = "up",
    duration = 0.5,
    viewportMargin = "-100px",
}: MotionBoxProps) {
    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
            x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: duration,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98] as const, // "Manteiga" ease
            },
        },
    };

    if (direction === "none") {
        return (
            <motion.div
                className={className}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: viewportMargin }}
                transition={{ duration, delay }}
            >
                {children}
            </motion.div>
        );
    }

    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: viewportMargin }}
            variants={variants}
        >
            {children}
        </motion.div>
    );
}
