"use client";

import { CONTACT } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export function FAQSection() {
    const t = useTranslations("FAQ");
    const tNF = useTranslations("NotFound");
    const [openIndex, setOpenIndex] = useState<string | null>("q1"); // Default open first

    const toggleAccordion = (key: string) => {
        setOpenIndex(openIndex === key ? null : key);
    };

    // List of question keys
    const questionKeys = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10", "q11"];

    return (
        <section className="py-24 md:py-32 bg-neutral-950 relative overflow-hidden" id="faq">
            {/* Background elements - Awwwards Depth */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 0.02, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                    className="text-[40vw] font-black text-white leading-none tracking-tighter"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    FAQ
                </motion.div>
            </div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* Header Side */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="sticky top-32"
                        >
                            <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-orange-400 font-bold text-xs uppercase tracking-[0.2em] mb-8">
                                {t("eyebrow")}
                            </span>
                            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[0.9] tracking-tighter">
                                {t("title")}
                            </h2>
                            <p className="text-xl text-neutral-400 mb-12 leading-relaxed font-light">
                                {t("subtitle")}
                            </p>

                            <div className="p-8 bg-neutral-900/50 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-white/20 transition-colors">
                                <div className="flex items-center gap-6 mb-6">
                                    <div className="p-4 bg-whatsapp/10 rounded-2xl text-whatsapp border border-whatsapp/20">
                                        <MessageCircle className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg mb-1">{tNF("helpTitle")}</h4>
                                        <p className="text-sm text-neutral-400">{tNF("helpSubtitle")}</p>
                                    </div>
                                </div>
                                <a
                                    href={`https://wa.me/${CONTACT.whatsapp.number}`} // Use constant in real code
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full py-4 text-center bg-whatsapp text-white font-bold rounded-xl hover:bg-whatsapp/90 transition-all hover:scale-[1.02] shadow-lg shadow-whatsapp/10"
                                >
                                    {tNF("whatsappButton")}
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Accordion Side */}
                    <div className="space-y-4">
                        {questionKeys.map((key, i) => (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className={`group rounded-2xl border transition-all duration-500 overflow-hidden ${openIndex === key
                                    ? "bg-white/10 border-white/20 shadow-2xl"
                                    : "bg-white/5 border-white/5 hover:border-white/10 hover:bg-white/[0.07]"
                                    }`}
                            >
                                <button
                                    onClick={() => toggleAccordion(key)}
                                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                                    aria-expanded={openIndex === key}
                                >
                                    <span className={`text-lg md:text-xl font-bold transition-colors duration-300 ${openIndex === key ? "text-white" : "text-neutral-300 group-hover:text-white"
                                        }`}>
                                        {t(`questions.${key}.question`)}
                                    </span>
                                    <span className={`p-2 rounded-full transition-all duration-500 ${openIndex === key ? "bg-white text-neutral-950 rotate-180" : "bg-white/5 text-neutral-400 group-hover:bg-white/10 group-hover:text-white"
                                        }`}>
                                        <ChevronDown className="w-5 h-5" />
                                    </span>
                                </button>
                                <AnimatePresence initial={false}>
                                    {openIndex === key && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                        >
                                            <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                                                <p className="text-neutral-400 leading-relaxed text-lg font-light">
                                                    {t(`questions.${key}.answer`)}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
