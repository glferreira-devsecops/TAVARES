"use client";
import { Button, WhatsAppButton } from "@/components/ui/button";
import { CONTACT } from "@/lib/constants";
import { AlertTriangle, Home, MessageCircle, RefreshCw } from "lucide-react";
import { usePathname } from "next/navigation";

interface ErrorScreenProps {
    digest?: string;
    reset?: () => void;
}

export function ErrorScreen({ digest, reset }: ErrorScreenProps) {
    const pathname = usePathname();
    const locale = pathname?.split('/')[1] || 'pt';
    const currentLang = (["en", "es", "fr"].includes(locale) ? locale : "pt") as "pt" | "en" | "es" | "fr";

    const content = {
        pt: {
            title: "Algo deu errado",
            subtitle: "Desculpe, ocorreu um erro inesperado em nosso sistema. Nossa equipe já foi notificada.",
            retry: "Tentar novamente",
            home: "Voltar ao início",
            help: "Precisa de ajuda urgente?",
            whatsapp: "Falar no WhatsApp",
            waMsg: "Olá! Estou vendo uma tela de erro no site."
        },
        en: {
            title: "Something went wrong",
            subtitle: "Sorry, an unexpected error occurred in our system. Our team has been notified.",
            retry: "Try again",
            home: "Go to home",
            help: "Need urgent help?",
            whatsapp: "Talk on WhatsApp",
            waMsg: "Hello! I'm seeing an error screen on the site."
        },
        es: {
            title: "Algo salió mal",
            subtitle: "Lo sentimos, ocurrió un error inesperado en nuestro sistema. Nuestro equipo ha sido notificado.",
            retry: "Reintentar",
            home: "Volver al inicio",
            help: "¿Necesita ayuda urgente?",
            whatsapp: "Hablar por WhatsApp",
            waMsg: "¡Hola! Estoy viendo una pantalla de error en el sitio."
        },
        fr: {
            title: "Quelque chose s'est mal passé",
            subtitle: "Désolé, une erreur inattendue s'est produite. Notre équipe a été notifiée.",
            retry: "Réessayer",
            home: "Retour à l'accueil",
            help: "Besoin d'aide urgente ?",
            whatsapp: "Parler sur WhatsApp",
            waMsg: "Bonjour ! Je vois un écran d'erreur sur le site."
        }
    };

    const t = content[currentLang];

    return (
        <section className="relative min-h-screen w-full bg-neutral-950 overflow-hidden flex flex-col items-center justify-center p-6 sm:p-12">
            {/* Ambient Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-red-900/20 blur-[80px] sm:blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-orange-900/20 blur-[60px] sm:blur-[100px]" />
                <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />
            </div>

            <div className="relative z-10 w-full max-w-lg text-center">
                <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center backdrop-blur-md">
                    <AlertTriangle className="w-10 h-10 text-red-500" />
                </div>

                <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                    {t.title}
                </h1>
                <p className="text-neutral-400 text-lg mb-10 leading-relaxed">
                    {t.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                    {reset && (
                        <Button
                            onClick={reset}
                            className="w-full sm:w-auto bg-white text-neutral-900 hover:bg-neutral-100 font-bold px-8 py-6 rounded-xl hover:scale-105 transition-transform"
                        >
                            <RefreshCw className="w-5 h-5 mr-2" />
                            {t.retry}
                        </Button>
                    )}
                    <Button
                        onClick={() => window.location.href = `/${currentLang}`}
                        className="w-full sm:w-auto bg-neutral-900 text-white border border-neutral-800 hover:bg-neutral-800 font-medium px-8 py-6 rounded-xl"
                    >
                        <Home className="w-5 h-5 mr-2" />
                        {t.home}
                    </Button>
                </div>

                <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <MessageCircle className="w-5 h-5 text-green-500" />
                        <span className="font-semibold text-white">{t.help}</span>
                    </div>
                    <WhatsAppButton
                        message={t.waMsg}
                        phone={CONTACT.whatsapp.number}
                        className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-lg transition-colors border-none"
                    >
                        {t.whatsapp}
                    </WhatsAppButton>

                    {digest && (
                        <p className="mt-4 text-xs text-neutral-600 font-mono">
                            Error Ref: <span className="select-all">{digest}</span>
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}
