
interface AuthorBioProps {
    locale: string;
}

export function AuthorBio({ locale }: AuthorBioProps) {
    const isPt = locale.startsWith("pt");

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
                        {isPt ? "Escrito por" : "Written by"}
                    </span>
                    <h3 className="text-xl font-heading font-bold text-neutral-900 mt-1">
                        Favela-República Team
                    </h3>
                </div>

                <p className="text-neutral-600 leading-relaxed max-w-2xl">
                    {isPt
                        ? "Somos um coletivo de guias locais, historiadores e moradores apaixonados pela Tavares Bastos. Nosso objetivo é compartilhar a verdadeira história e cultura da nossa comunidade com o mundo."
                        : "We are a collective of local guides, historians, and residents passionate about Tavares Bastos. Our goal is to share the true history and culture of our community with the world."}
                </p>
            </div>
        </div>
    );
}
