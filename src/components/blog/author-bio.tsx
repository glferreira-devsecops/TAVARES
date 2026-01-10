import { useLocale } from "next-intl";

export function AuthorBio() {
    const locale = useLocale();
    const currentLang = (["en", "es", "fr"].includes(locale) ? locale : "pt") as "pt" | "en" | "es" | "fr";

    const content = {
        pt: {
            writtenBy: "Escrito por",
            bio: "Somos um coletivo de condutores locais, historiadores e moradores apaixonados pela Favela. Nosso objetivo é compartilhar a verdadeira história e cultura da nossa favela com o mundo."
        },
        en: {
            writtenBy: "Written by",
            bio: "We are a collective of local conductors, historians, and residents passionate about Favela. Our goal is to share the true history and culture of our favela with the world."
        },
        es: {
            writtenBy: "Escrito por",
            bio: "Somos un colectivo de conductores locales, historiadores y residentes apasionados por la Favela. Nuestro objetivo es compartir la verdadera historia y cultura de nuestra favela con el mundo."
        },
        fr: {
            writtenBy: "Écrit par",
            bio: "Nous sommes un collectif de conducteurs locaux, d'historiens et d'habitants passionnés par Favela. Notre objectif est de partager la véritable histoire et la culture de notre favela avec le monde."
        }
    };

    const t = content[currentLang];

    return (
        <div className="bg-neutral-50 rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left border border-neutral-100 my-12">
            <div className="relative w-20 h-20 shrink-0">
                <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-2xl overflow-hidden border-4 border-white shadow-md">
                    FR
                </div>
            </div>

            <div className="flex-1">
                <div className="mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary-600">
                        {t.writtenBy}
                    </span>
                    <h3 className="text-xl font-heading font-bold text-neutral-900 mt-1">
                        Favela-República Team
                    </h3>
                </div>

                <p className="text-neutral-600 leading-relaxed max-w-2xl">
                    {t.bio}
                </p>
            </div>
        </div>
    );
}
