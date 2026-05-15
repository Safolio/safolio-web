import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FEATURE_KEYS = [
  "intro",
  "independent",
  "multiAsset",
  "journal",
  "risk",
  "community",
] as const;

export function About() {
  const t = useTranslations("About");
  return (
    <section className="border-t border-border">
      <div className="mx-auto grid max-w-[1300px] gap-12 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
        <div>
          <h2 className="text-[clamp(1.875rem,4vw,3rem)] leading-tight font-semibold tracking-tight">
            {t("heading")} <span className="bg-highlight px-2">{t("headingHighlight")}</span>
          </h2>
          <p className="mt-6 text-base leading-[26px] text-muted-foreground">{t("body")}</p>
          <div className="mt-10 overflow-hidden rounded-card">
            <Image
              src="/images/team.jpg"
              alt=""
              width={1280}
              height={853}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
        <div className="md:pl-10">
          <Accordion defaultValue={["intro"]}>
            {FEATURE_KEYS.map((key) => (
              <AccordionItem key={key} value={key}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {t(`features.${key}.title`)}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {t(`features.${key}.body`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
