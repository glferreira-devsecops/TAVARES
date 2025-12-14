"use client";

import "@/app/globals.css"; // CRITICAL: Import CSS for global error
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html lang="pt">
            <body className="bg-neutral-950 text-white antialiased">
                <main className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center p-6">
                    {/* Background */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-900/10 to-neutral-950" />
                    </div>

                    <div className="relative z-10 text-center max-w-md">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                            <AlertTriangle className="w-10 h-10 text-red-500" />
                        </div>

                        <h1 className="font-heading text-4xl font-bold mb-4">Erro Crítico</h1>
                        <p className="text-neutral-400 mb-8">
                            Ocorreu um erro estrutural no carregamento do site.
                        </p>

                        <Button
                            onClick={reset}
                            className="bg-white text-neutral-900 hover:bg-neutral-200 font-bold px-8 py-4 rounded-xl"
                        >
                            <RefreshCw className="w-5 h-5 mr-2" />
                            Recarregar Site
                        </Button>
                    </div>
                </main>
            </body>
        </html>
    );
}
