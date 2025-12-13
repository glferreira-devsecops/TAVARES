"use client";

import { AnimatePresence, motion } from "framer-motion";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";

function FrozenRouter(props: { children: React.ReactNode }) {
    const context = useContext(LayoutRouterContext ?? {});
    const [frozen] = useState(context);

    return (
        <LayoutRouterContext.Provider value={frozen}>
            <div className="h-full w-full">
                {props.children}
            </div>
        </LayoutRouterContext.Provider>
    );
}

export default function Template({ children }: { children: React.ReactNode }) {


    const pathname = usePathname();

    return (
        <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.42, 0, 0.58, 1] }}
                className="min-h-screen w-full will-change-transform" // Added w-full
            >
                <FrozenRouter>
                    <div className="h-full w-full">{children}</div>
                </FrozenRouter>
            </motion.div>
        </AnimatePresence>
    );
}
