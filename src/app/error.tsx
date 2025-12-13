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
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <section className="min-h-[80vh] flex items-center justify-center px-4 bg-neutral-50">
            <div className="max-w-lg text-center">
                {/* Error Icon */}
                <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-red-100 flex items-center justify-center">
                    <AlertTriangle className="w-12 h-12 text-red-500" />
                </div>

                {/* Content */}
                <h1 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                    Algo deu errado
                </h1>
                <p className="text-neutral-600 text-lg mb-8">
                    Desculpe, ocorreu um erro inesperado. Nossa equipe já foi notificada
                    e está trabalhando para resolver o problema.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button onClick={reset} variant="primary" size="lg">
                        <RefreshCw className="w-5 h-5 mr-2" />
                        Tentar novamente
                    </Button>
                    <Button onClick={() => window.location.href = '/'} variant="outline" size="lg">
                        <Home className="w-5 h-5 mr-2" />
                        Voltar ao início
                    </Button>
                </div>

                {/* Error code */}
                {error.digest && (
                    <p className="mt-8 text-sm text-neutral-400">
                        Código do erro: {error.digest}
                    </p>
                )}

                {/* WhatsApp Help */}
                <div className="mt-12 p-6 bg-white rounded-2xl border border-neutral-200">
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <MessageCircle className="w-5 h-5 text-whatsapp" />
                        <span className="font-semibold text-neutral-900">O problema persiste?</span>
                    </div>
                    <p className="text-sm text-neutral-600 mb-4">
                        Entre em contato conosco e resolveremos sua situação!
                    </p>
                    <WhatsAppButton
                        message="Olá! Estou tendo um problema técnico no site."
                        phone={CONTACT.whatsapp.number}
                        size="sm"
                    >
                        Reportar problema
                    </WhatsAppButton>
                </div>
            </div>
        </section>
    );
}
