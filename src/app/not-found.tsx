"use client";

import { WhatsAppButton } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { CONTACT, WHATSAPP_MESSAGES } from "@/lib/constants";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Home, MapPin, Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function NotFound() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const x = clientX / innerWidth;
            const y = clientY / innerHeight;
            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    const xMove = useTransform(mouseX, [0, 1], [-20, 20]);
    const yMove = useTransform(mouseY, [0, 1], [-20, 20]);

    // Reverse movement for parallax depth
    const xMoveBack = useTransform(mouseX, [0, 1], [10, -10]);
    const yMoveBack = useTransform(mouseY, [0, 1], [10, -10]);

    if (!mounted) return null;

    return (
        <main className="relative min-h-screen w-full bg-neutral-950 overflow-hidden flex flex-col items-center justify-center p-6 sm:p-12">
            {/* Ambient Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-blue-900/20 blur-[80px] sm:blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-orange-900/20 blur-[60px] sm:blur-[100px]" />
                {/* Noise overlay */}
                <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay" />
            </div>

            <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center text-center px-4">
                {/* Floating "404" with Glassmorphism */}
                <motion.div
                    className="relative"
                    style={{ x: xMoveBack, y: yMoveBack }}
                >
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, type: "spring" }}
                        className="font-heading text-[100px] sm:text-[180px] md:text-[220px] leading-none font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent select-none z-0"
                    >
                        404
                    </motion.h1>

                    {/* Foreground stylized text over the 404 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="absolute inset-0 flex items-center justify-center z-10"
                        style={{ x: xMove, y: yMove }}
                    >
                        <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 via-orange-200 to-white bg-clip-text text-transparent drop-shadow-2xl">
                            Caminho <br /> Não Encontrado
                        </h2>
                    </motion.div>
                </motion.div>

                {/* Subtitle & Description */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mt-8 md:mt-12 space-y-6 max-w-lg"
                >
                    <p className="text-neutral-400 text-lg md:text-xl font-light leading-relaxed">
                        Parece que você se aventurou por uma viela desconhecida.
                        Na favela, todo caminho tem volta, e a gente te ajuda a encontrar o rumo.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-8">
                        <Link
                            href="/"
                            className="group relative px-8 py-4 bg-white text-neutral-900 rounded-2xl font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-xl hover:shadow-white/10"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                <Home className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
                                Voltar ao Início
                            </span>
                        </Link>

                        <Link
                            href="/tours"
                            className="group px-8 py-4 bg-neutral-900 border border-neutral-800 text-white rounded-2xl font-medium transition-all hover:border-orange-500/50 hover:bg-neutral-800"
                        >
                            <span className="flex items-center justify-center gap-2">
                                <Search className="w-5 h-5 text-orange-500" />
                                Ver Nossos Tours
                            </span>
                        </Link>
                    </div>
                </motion.div>

                {/* Help Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="mt-16 md:mt-24 w-full glass-panel p-1 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/5"
                >
                    <div className="bg-neutral-950/80 backdrop-blur-xl rounded-[20px] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4 text-left">
                            <div className="p-3 bg-green-500/20 text-green-400 rounded-xl">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg">Precisa de um guia?</h3>
                                <p className="text-neutral-500 text-sm">Fale com a gente direto no WhatsApp</p>
                            </div>
                        </div>

                        <WhatsAppButton
                            message={WHATSAPP_MESSAGES.general.pt}
                            phone={CONTACT.whatsapp.number}
                            className="w-full md:w-auto bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-green-900/20"
                        >
                            Chamar no Zap
                        </WhatsAppButton>
                    </div>
                </motion.div>
            </div>

            {/* Footer decoration */}
            <div className="fixed bottom-6 left-6 right-6 flex justify-between text-[10px] text-neutral-600 uppercase tracking-widest font-mono pointer-events-none">
                <span>Favela-República</span>
                <span>404 Error • Page Not Found</span>
                <span>Rio de Janeiro</span>
            </div>
        </main>
    );
}
