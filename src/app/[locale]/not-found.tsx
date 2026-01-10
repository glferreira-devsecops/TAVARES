import { NotFoundScreen } from "@/components/screens/not-found-screen";
import { getTranslations } from "next-intl/server";

export default async function NotFound() {
    const t = await getTranslations("NotFound");

    return (
        <NotFoundScreen
            content={{
                title: t("title"),
                description: t("description"),
                backButton: t("backButton"),
                toursButton: t("toursButton"),
                helpTitle: t("helpTitle"),
                helpSubtitle: t("helpSubtitle"),
                whatsappButton: t("whatsappButton")
            }}
        />
    );
}
