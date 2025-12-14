"use client";

import { Button, WhatsAppButton } from "@/components/ui/button";
import { CONTACT } from "@/lib/constants";
import { AlertTriangle, Home, MessageCircle, RefreshCw } from "lucide-react";
import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <section className="relative min-h-screen w-full bg-neutral-950 overflow-hidden flex flex-col items-center justify-center p-6 sm:p-12">
            {/* Ambient Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-red-900/20 blur-[80px] sm:blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-orange-900/20 blur-[60px] sm:blur-[100px]" />
                <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay" />
            </div>

            <div className="relative z-10 w-full max-w-lg text-center">
                {/* Error Icon */}
                <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center backdrop-blur-md">
                    <AlertTriangle className="w-10 h-10 text-red-500" />
                </div>

                {/* Content */}
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                    Algo deu errado
                </h1>
                <p className="text-neutral-400 text-lg mb-10 leading-relaxed">
                    Desculpe, ocorreu um erro inesperado em nosso sistema.
                    Nossa equipe já foi notificada automaticamente.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                    <Button
                        onClick={reset}
                        className="w-full sm:w-auto bg-white text-neutral-900 hover:bg-neutral-100 font-bold px-8 py-6 rounded-xl hover:scale-105 transition-transform"
                    >
                        <RefreshCw className="w-5 h-5 mr-2" />
                        Tentar novamente
                    </Button>
                    <Button
                        onClick={() => window.location.href = '/'}
                        className="w-full sm:w-auto bg-neutral-900 text-white border border-neutral-800 hover:bg-neutral-800 font-medium px-8 py-6 rounded-xl"
                    >
                        <Home className="w-5 h-5 mr-2" />
                        Voltar ao início
                    </Button>
                </div>

                {/* WhatsApp Help */}
                <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <MessageCircle className="w-5 h-5 text-green-500" />
                        <span className="font-semibold text-white">Precisa de ajuda urgente?</span>
                    </div>
                    <WhatsAppButton
                        message="Olá! Estou vendo uma tela de erro no site."
                        phone={CONTACT.whatsapp.number}
                        className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-lg transition-colors"
                    >
                        Falar no WhatsApp
                    </WhatsAppButton>

                    {error.digest && (
                        <p className="mt-4 text-xs text-neutral-600 font-mono">
                            Error Ref: <span className="select-all">{error.digest}</span>
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}
