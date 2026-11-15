export function LegalTRPlaceholder({ docName }: { docName: string }) {
  return (
    <>
      <p className="text-ink3 text-sm">Son güncelleme: 15 Mayıs 2026</p>

      <p>
        Bu belgenin (<strong>{docName}</strong>) Türkçe çevirisi şu anda hazırlanmaktadır. Tam yasal
        metin yalnızca İngilizce olarak mevcuttur.
      </p>

      <p>
        İngilizce sürümü görüntülemek için sayfanın sağ üst köşesindeki dil seçiciden{" "}
        <strong>EN</strong>&apos;i seçebilirsiniz. Yasal olarak bağlayıcı olan İngilizce sürümdür;
        Türkçe sürüm yalnızca bilgilendirme amaçlıdır ve yayımlandığında eklenecektir.
      </p>

      <p>
        Sorularınız için lütfen{" "}
        <a href="mailto:legal@safolio.com" className="underline">
          legal@safolio.com
        </a>{" "}
        ile iletişime geçin.
      </p>
    </>
  );
}
