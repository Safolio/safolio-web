import Image from "next/image";
import { useTranslations } from "next-intl";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function DesignedForYou() {
  const t = useTranslations("DesignedForYou");
  const audienceItems = t.raw("tabs.audience.items") as string[];
  const whyItems = t.raw("tabs.why.items") as string[];

  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-[1300px] px-4 py-16 md:px-6 md:py-24">
        <h2 className="text-center text-[clamp(1.875rem,4vw,3rem)] leading-tight font-semibold tracking-tight md:text-left">
          {t("heading")} <span className="bg-highlight px-2">{t("headingHighlight")}</span>
        </h2>
        <div className="mt-12 grid items-start gap-12 md:grid-cols-2">
          <div className="overflow-hidden rounded-card">
            <Image
              src="/images/designed-for-you.jpg"
              alt=""
              width={1536}
              height={1024}
              className="h-auto w-full object-cover"
            />
          </div>
          <Tabs defaultValue="audience">
            <TabsList>
              <TabsTrigger value="audience">{t("tabs.audience.label")}</TabsTrigger>
              <TabsTrigger value="why">{t("tabs.why.label")}</TabsTrigger>
            </TabsList>
            <TabsContent value="audience" className="mt-6 text-muted-foreground">
              <ul className="list-disc space-y-2 pl-5">
                {audienceItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4">{t("tabs.audience.outro")}</p>
            </TabsContent>
            <TabsContent value="why" className="mt-6 text-muted-foreground">
              <ul className="list-disc space-y-2 pl-5">
                {whyItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
