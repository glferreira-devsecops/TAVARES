"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Loader2, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface NewsletterFormProps {
    labels: {
        placeholder: string;
        button: string;
        successTitle: string;
        successMessage: string;
        error: string;
    };
}

export function NewsletterForm({ labels }: NewsletterFormProps) {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            toast.error(labels.error);
            return;
        }

        setStatus("loading");

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Randomly succeed for demo (or always succeed)
        setStatus("success");
    };

    return (
        <div className="w-full max-w-md">
            <AnimatePresence mode="wait">
                {status === "success" ? (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -10 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6 flex items-center gap-4"
                    >
                        <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shrink-0 shadow-lg shadow-green-500/30">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring" }}
                            >
                                <Check className="w-6 h-6 text-white" strokeWidth={3} />
                            </motion.div>
                        </div>
                        <div>
                            <h4 className="text-green-400 font-bold text-lg">{labels.successTitle}</h4>
                            <p className="text-green-500/80 text-sm">{labels.successMessage}</p>
                        </div>
                    </motion.div>
                ) : (
                    <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="relative flex flex-col sm:flex-row gap-2"
                    >
                        <div className="relative flex-1 group">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={labels.placeholder}
                                disabled={status === "loading"}
                                className="w-full bg-neutral-900/50 border border-neutral-700/50 rounded-xl px-5 py-4 text-white placeholder:text-neutral-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 group-hover:border-neutral-600 disabled:opacity-50"
                            />
                            {/* Animated Border Gradient on Focus (Optional polish) */}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={status === "loading"}
                            className={`
                                relative overflow-hidden rounded-xl px-8 py-4 font-bold text-sm text-white shadow-lg transition-all duration-300
                                ${status === "loading"
                                    ? "bg-neutral-800 cursor-not-allowed"
                                    : "bg-gradient-to-r from-primary-500 to-primary-600 hover:shadow-primary-500/25"}
                            `}
                        >
                            <AnimatePresence mode="wait">
                                {status === "loading" ? (
                                    <motion.div
                                        key="loading"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex items-center justify-center"
                                    >
                                        <Loader2 className="w-5 h-5 animate-spin text-neutral-400" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="idle"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="flex items-center gap-2"
                                    >
                                        <span>{labels.button}</span>
                                        <Send className="w-4 h-4" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
}
