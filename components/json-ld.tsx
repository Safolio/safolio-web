export function OrganizationJsonLd({ locale }: { locale: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Safolio",
    url: `https://safolio.com/${locale}`,
    logo: "https://safolio.com/logo.svg",
    description:
      locale === "tr"
        ? "Bağımsız portföy analizi ve raporlama uygulaması"
        : "Independent portfolio analysis and reporting app",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Vinkenburgstraat 2 A",
      postalCode: "3512AB",
      addressLocality: "Utrecht",
      addressCountry: "NL",
    },
    parentOrganization: { "@type": "Organization", name: "Safolio B.V." },
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
