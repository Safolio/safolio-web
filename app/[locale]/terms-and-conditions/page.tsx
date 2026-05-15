import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { LegalLayout } from "@/components/legal-layout";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Footer" });
  return { title: `${t("legal3")} — Safolio` };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Footer" });
  if (locale === "tr") {
    return (
      <LegalLayout title={t("legal3")}>
        <p className="text-sm text-ink3">Son güncelleme: 01 Şubat 2026</p>

        <h2>Yasal koşullarımıza ilişkin sözleşme</h2>
        <p>
          Biz, Safolio (&apos;Şirket&apos;, &apos;biz&apos;, &apos;bize&apos; veya
          &apos;bizim&apos;) ticari unvanıyla iş yapan, Hollanda&apos;da 2-A Abtstraat, Utrecht,
          Utrecht 3512 AB adresinde kayıtlı bir şirket olan Safolio B.V.&apos;yiz. KDV
          numaramız NL868276042B01&apos;dir.
        </p>
        <p>
          <a href="https://safolio.com">https://safolio.com</a> web sitesini
          (&apos;Site&apos;), Safolio mobil uygulamasını (&apos;Uygulama&apos;) ve bu yasal
          koşullara (&apos;Yasal Koşullar&apos;) atıfta bulunan veya bağlantı veren diğer
          ilgili ürün ve hizmetleri (topluca, &apos;Hizmetler&apos;) işletiyoruz.
        </p>
        <p>
          Bize <a href="mailto:info@safolio.com">info@safolio.com</a> adresinden e-posta
          yoluyla veya 2-A Abtstraat, Utrecht, Utrecht 3512 AB, Hollanda adresine posta
          yoluyla ulaşabilirsiniz.
        </p>
        <p>
          Bu Yasal Koşullar, ister şahsen ister bir tüzel kişilik adına olsun, sizinle
          (&apos;siz&apos;) Safolio B.V. arasında Hizmetlere erişiminiz ve bunları
          kullanmanız ile ilgili yasal olarak bağlayıcı bir sözleşme oluşturur. Hizmetlere
          erişerek, bu Yasal Koşulların tamamını okuduğunuzu, anladığınızı ve bunlara bağlı
          kalmayı kabul ettiğinizi onaylamış olursunuz. BU YASAL KOŞULLARIN TAMAMINI KABUL
          ETMİYORSANIZ, HİZMETLERİ KULLANMANIZ KESİNLİKLE YASAKTIR VE KULLANIMI DERHAL
          DURDURMALISINIZ.
        </p>
        <p>
          Kullandığınız Hizmetlerde planlanan değişiklikler hakkında size önceden bildirimde
          bulunacağız. Değiştirilen Yasal Koşullar, e-posta mesajında belirtildiği gibi
          yayımlandığında veya noreply@safolio.com tarafından size bildirildiğinde yürürlüğe
          girecektir. Herhangi bir değişikliğin yürürlük tarihinden sonra Hizmetleri
          kullanmaya devam ederek, değiştirilen koşullara bağlı kalmayı kabul edersiniz.
        </p>
        <p>
          Hizmetler en az 18 yaşında olan kullanıcılar için tasarlanmıştır. 18 yaşın altındaki
          kişilerin Hizmetleri kullanmasına veya bunlara kaydolmasına izin verilmez.
        </p>
        <p>
          Kayıtlarınız için bu Yasal Koşulların bir kopyasını yazdırmanızı tavsiye ederiz.
        </p>

        <h2>İçindekiler</h2>
        <ol>
          <li>Hizmetlerimiz</li>
          <li>Fikri mülkiyet hakları</li>
          <li>Kullanıcı beyanları</li>
          <li>Kullanıcı kaydı</li>
          <li>Satın alma ve ödeme</li>
          <li>Abonelikler</li>
          <li>Yasak faaliyetler</li>
          <li>Kullanıcı tarafından oluşturulan katkılar</li>
          <li>Katkı lisansı</li>
          <li>İncelemeler için kurallar</li>
          <li>Mobil uygulama lisansı</li>
          <li>Sosyal medya</li>
          <li>Üçüncü taraf web siteleri ve içerik</li>
          <li>Reklam verenler</li>
          <li>Hizmet yönetimi</li>
          <li>Gizlilik politikası</li>
          <li>Süre ve fesih</li>
          <li>Değişiklikler ve kesintiler</li>
          <li>Geçerli hukuk</li>
          <li>Uyuşmazlık çözümü</li>
          <li>Düzeltmeler</li>
          <li>Sorumluluk reddi</li>
          <li>Sorumluluk sınırlamaları</li>
          <li>Tazminat</li>
          <li>Kullanıcı verileri</li>
          <li>Elektronik iletişim, işlemler ve imzalar</li>
          <li>California kullanıcıları ve sakinleri</li>
          <li>Çeşitli hükümler</li>
          <li>Hizmetler</li>
          <li>Veri doğruluğu, garanti verilmemesi ve sorumluluk sınırlaması</li>
          <li>Garanti verilmemesi</li>
          <li>Kullanıcı sorumluluğu ve doğrulama</li>
          <li>Bağlı hesaplar ve üçüncü taraf veri kaynakları</li>
          <li>Kullanıcı içeriği</li>
          <li>Bize ulaşın</li>
        </ol>

        <h2>1. Hizmetlerimiz</h2>
        <p>
          Hizmetler kullanılırken sağlanan bilgiler, böyle bir dağıtım veya kullanımın yasa
          veya yönetmeliğe aykırı olacağı veya bizi söz konusu yargı bölgesi veya ülkede
          herhangi bir kayıt yükümlülüğüne tabi tutacak olan herhangi bir yargı bölgesi veya
          ülkedeki herhangi bir kişi veya tüzel kişiliğe dağıtım veya bunlar tarafından
          kullanım için tasarlanmamıştır. Buna göre, Hizmetlere diğer konumlardan erişmeyi
          seçen kişiler bunu kendi inisiyatifleriyle yapar ve yerel yasalar uygulanabilir
          olduğu ölçüde, yerel yasalara uyumdan yalnızca kendileri sorumludur.
        </p>
        <p>
          Hizmetler, sektöre özgü düzenlemelere (Sağlık Sigortası Taşınabilirlik ve Hesap
          Verebilirlik Yasası (HIPAA), Federal Bilgi Güvenliği Yönetim Yasası (FISMA) vb.)
          uyacak şekilde tasarlanmamıştır; bu nedenle, etkileşimleriniz bu tür yasalara tabi
          olacaksa, Hizmetleri kullanamazsınız. Hizmetleri Gramm-Leach-Bliley Yasası&apos;nı
          (GLBA) ihlal edecek şekilde kullanamazsınız.
        </p>

        <h2>2. Fikri mülkiyet hakları</h2>
        <h3>Fikri mülkiyetimiz</h3>
        <p>
          Hizmetlerimizdeki tüm fikri mülkiyet haklarının, Hizmetlerdeki tüm kaynak kodu,
          veritabanları, işlevsellik, yazılım, web sitesi tasarımları, ses, video, metin,
          fotoğraflar ve grafikler (topluca, &apos;İçerik&apos;) ile bunların içerdiği ticari
          markaların, hizmet markalarının ve logoların (&apos;İşaretler&apos;) sahibi veya
          lisans sahibiyiz.
        </p>
        <p>
          İçeriğimiz ve İşaretlerimiz, Amerika Birleşik Devletleri ve dünyanın dört bir
          yanında telif hakkı ve ticari marka yasaları (ve diğer çeşitli fikri mülkiyet
          hakları ve haksız rekabet yasaları) ve antlaşmaları ile korunmaktadır.
        </p>
        <p>
          İçerik ve İşaretler, yalnızca kişisel, ticari olmayan kullanımınız veya dahili iş
          amacınız için Hizmetler aracılığıyla &apos;OLDUĞU GİBİ&apos; sağlanmaktadır.
        </p>
        <h3>Hizmetlerimizi kullanımınız</h3>
        <p>
          Aşağıdaki &apos;Yasak Faaliyetler&apos; bölümü dahil olmak üzere bu Yasal Koşullara
          uymanız koşuluyla, size aşağıdakileri yapma konusunda münhasır olmayan,
          devredilemez, geri alınabilir bir lisans veriyoruz:
        </p>
        <ul>
          <li>Hizmetlere erişmek; ve</li>
          <li>
            Erişim hakkına usulüne uygun olarak sahip olduğunuz İçeriğin herhangi bir
            kısmının bir kopyasını indirmek veya yazdırmak,
          </li>
        </ul>
        <p>
          yalnızca kişisel, ticari olmayan kullanımınız veya dahili iş amacınız için.
        </p>
        <p>
          Bu bölümde veya Yasal Koşullarımızın başka bir yerinde belirtilenler dışında,
          Hizmetlerin hiçbir bölümü ve hiçbir İçerik veya İşaret, açık önceden yazılı iznimiz
          olmaksızın herhangi bir ticari amaçla kopyalanamaz, çoğaltılamaz, toplanamaz,
          yeniden yayınlanamaz, yüklenemez, gönderilemez, kamuya açık olarak
          görüntülenemez, kodlanamaz, çevrilemez, iletilemez, dağıtılamaz, satılamaz, lisans
          verilemez veya başka bir şekilde işletilemez.
        </p>
        <p>
          Hizmetleri, İçeriği veya İşaretleri bu bölümde veya Yasal Koşullarımızın başka bir
          yerinde belirtilenler dışında kullanmak isterseniz, lütfen talebinizi şu adrese
          yönlendirin: <a href="mailto:info@safolio.com">info@safolio.com</a>. Hizmetlerimizin
          veya İçeriğimizin herhangi bir bölümünü yayınlama, çoğaltma veya kamuya açık olarak
          görüntüleme izni verirsek, bizi Hizmetlerin, İçeriğin veya İşaretlerin sahipleri
          veya lisans verenleri olarak tanımlamalı ve İçeriğimizi yayınlarken, çoğaltırken
          veya görüntülerken herhangi bir telif hakkı veya mülkiyet bildiriminin görünür
          olmasını sağlamalısınız.
        </p>
        <p>
          Hizmetlere, İçeriğe ve İşaretlere ilişkin size açıkça verilmeyen tüm hakları saklı
          tutarız.
        </p>
        <p>
          Bu Fikri Mülkiyet Haklarının herhangi bir ihlali, Yasal Koşullarımızın esaslı bir
          ihlali oluşturacak ve Hizmetlerimizi kullanma hakkınız derhal sona erecektir.
        </p>
        <h3>Gönderileriniz ve katkılarınız</h3>
        <p>
          Hizmetler aracılığıyla herhangi bir içerik yayınlamadan veya yüklemeden önce (a)
          bize verdiğiniz hakları ve (b) sahip olduğunuz yükümlülükleri anlamak için lütfen
          bu bölümü ve &apos;Yasak Faaliyetler&apos; bölümünü dikkatlice inceleyin.
        </p>
        <p>
          <strong>Gönderiler:</strong> Hizmetlerle ilgili herhangi bir soru, yorum, öneri,
          fikir, geri bildirim veya diğer bilgileri (&apos;Gönderiler&apos;) doğrudan bize
          göndererek, bu tür Gönderilerdeki tüm fikri mülkiyet haklarını bize devretmeyi
          kabul edersiniz. Bu Gönderinin bize ait olacağını ve ticari veya başka türlü yasal
          herhangi bir amaç için, size karşı herhangi bir teşekkür veya tazminat olmaksızın
          sınırsız kullanım ve dağıtım hakkına sahip olacağımızı kabul edersiniz.
        </p>
        <p>
          <strong>Katkılar:</strong> Hizmetler sizi sohbet etmeye, bloglara, mesaj panolarına,
          çevrimiçi forumlara ve diğer işlevlere katkıda bulunmaya veya katılmaya davet
          edebilir; bu işlevler sırasında metin, yazılar, video, ses, fotoğraflar, müzik,
          grafikler, yorumlar, incelemeler, derecelendirme önerileri, kişisel bilgiler veya
          diğer materyaller (&apos;Katkılar&apos;) dahil ancak bunlarla sınırlı olmamak üzere
          içerik ve materyaller oluşturabilir, gönderebilir, yayınlayabilir, görüntüleyebilir,
          iletebilir, yayımlayabilir, dağıtabilir veya yayınlayabilirsiniz. Kamuya açık olarak
          yayınlanan herhangi bir Gönderi de Katkı olarak değerlendirilecektir.
        </p>
        <p>
          Katkıların Hizmetlerin diğer kullanıcıları tarafından ve muhtemelen üçüncü taraf
          web siteleri aracılığıyla görüntülenebileceğini anlıyorsunuz.
        </p>
        <p>
          <strong>Katkılar yayınladığınızda, bize bir lisans vermiş olursunuz (adınızın,
          ticari markalarınızın ve logolarınızın kullanımı dahil):</strong>{" "}
          Herhangi bir Katkı yayınlayarak, bize Katkılarınızı (görüntünüz, adınız ve sesiniz
          dahil ancak bunlarla sınırlı olmamak üzere) ticari, reklam veya başka herhangi bir
          amaçla kullanmak, kopyalamak, çoğaltmak, dağıtmak, satmak, yeniden satmak,
          yayınlamak, yayımlamak, yeniden adlandırmak, depolamak, kamuya açık olarak icra
          etmek, kamuya açık olarak görüntülemek, yeniden biçimlendirmek, çevirmek (tamamen
          veya kısmen) alıntılamak ve işletmek; Katkılarınızın türev çalışmalarını
          hazırlamak veya Katkılarınızı diğer çalışmalara dahil etmek ve bu bölümde verilen
          lisansları alt lisanslamak için sınırsız, sınırsız, geri alınamaz, süresiz, münhasır
          olmayan, devredilebilir, telifsiz, tamamı ödenmiş, dünya çapında bir hak ve lisans
          vermiş olursunuz. Kullanımımız ve dağıtımımız herhangi bir medya formatında ve
          herhangi bir medya kanalı aracılığıyla gerçekleşebilir.
        </p>
        <p>
          Bu lisans, sağladığınız adınızın, şirket adınızın ve franchise adınızın ve ticari
          markaların, hizmet markalarının, ticari adların, logoların ve kişisel ve ticari
          görsellerin uygun şekilde kullanımını içerir.
        </p>
        <p>
          <strong>Yayınladığınız veya yüklediğiniz şeylerden siz sorumlusunuz:</strong>{" "}
          Hizmetlerin herhangi bir bölümü aracılığıyla bize Gönderi göndererek ve/veya
          Katkılar yayınlayarak veya Hizmetlerdeki hesabınızı sosyal ağ hesaplarınızdan
          herhangi birine bağlayarak Katkıları Hizmetler aracılığıyla erişilebilir hale
          getirerek:
        </p>
        <ul>
          <li>
            &apos;Yasak Faaliyetler&apos;imizi okuduğunuzu ve kabul ettiğinizi onaylar ve
            Hizmetler aracılığıyla yasadışı, taciz edici, nefret dolu, zararlı, iftira niteliğinde,
            müstehcen, zorbalık niteliğinde, küfürlü, ayrımcı, herhangi bir kişiye veya gruba
            yönelik tehdit edici, cinsel açıdan müstehcen, yanlış, hatalı, aldatıcı veya
            yanıltıcı hiçbir Gönderi yayınlamayacağınızı, göndermeyeceğinizi,
            yayımlamayacağınızı, yüklemeyeceğinizi veya iletmeyeceğinizi ve hiçbir Katkı
            yayınlamayacağınızı taahhüt eder;
          </li>
          <li>
            Geçerli yasaların izin verdiği ölçüde, bu tür Gönderiler ve/veya Katkılar
            üzerindeki tüm manevi haklardan feragat eder;
          </li>
          <li>
            Bu tür Gönderiler ve/veya Katkıların size özgü olduğunu veya bu tür Gönderileri
            ve/veya Katkıları sunmak için gerekli haklara ve lisanslara sahip olduğunuzu ve
            Gönderileriniz ve/veya Katkılarınız ile ilgili olarak yukarıda belirtilen hakları
            bize verme konusunda tam yetkiye sahip olduğunuzu garanti eder; ve
          </li>
          <li>
            Gönderilerinizin ve/veya Katkılarınızın gizli bilgi oluşturmadığını garanti eder
            ve beyan edersiniz.
          </li>
        </ul>
        <p>
          Gönderilerinizden ve/veya Katkılarınızdan yalnızca siz sorumlusunuz ve (a) bu
          bölümün, (b) herhangi bir üçüncü tarafın fikri mülkiyet haklarının veya (c)
          geçerli yasanın ihlali nedeniyle uğrayabileceğimiz tüm kayıpları bize tazmin etmeyi
          açıkça kabul edersiniz.
        </p>
        <p>
          <strong>İçeriğinizi kaldırabilir veya düzenleyebiliriz:</strong> Herhangi bir
          Katkıyı izleme yükümlülüğümüz olmamakla birlikte, makul görüşümüze göre bu tür
          Katkıları zararlı veya bu Yasal Koşulları ihlal eder nitelikte değerlendirirsek,
          herhangi bir zamanda bildirimde bulunmadan herhangi bir Katkıyı kaldırma veya
          düzenleme hakkına sahip olacağız. Bu tür Katkıları kaldırır veya düzenlersek,
          hesabınızı da askıya alabilir veya devre dışı bırakabilir ve sizi yetkililere
          bildirebiliriz.
        </p>

        <h2>3. Kullanıcı beyanları</h2>
        <p>
          Hizmetleri kullanarak şunları beyan ve garanti edersiniz: (1) gönderdiğiniz tüm
          kayıt bilgileri doğru, kesin, güncel ve eksiksiz olacaktır; (2) bu tür bilgilerin
          doğruluğunu koruyacak ve gerektiğinde bu tür kayıt bilgilerini derhal
          güncelleyeceksiniz; (3) yasal ehliyetiniz vardır ve bu Yasal Koşullara uymayı
          kabul edersiniz; (4) ikamet ettiğiniz yargı bölgesinde reşit değilsiniz; (5)
          Hizmetlere bot, komut dosyası veya başka bir yöntemle otomatik veya insan dışı
          araçlarla erişmeyeceksiniz; (6) Hizmetleri yasadışı veya yetkisiz herhangi bir amaç
          için kullanmayacaksınız; ve (7) Hizmetleri kullanımınız geçerli herhangi bir yasayı
          veya yönetmeliği ihlal etmeyecektir.
        </p>
        <p>
          Doğru olmayan, hatalı, güncel olmayan veya eksik herhangi bir bilgi sağlarsanız,
          hesabınızı askıya alma veya sonlandırma ve Hizmetlerin (veya bunların herhangi bir
          bölümünün) mevcut veya gelecekteki herhangi bir kullanımını reddetme hakkına
          sahibiz.
        </p>

        <h2>4. Kullanıcı kaydı</h2>
        <p>
          Hizmetleri kullanmak için kaydolmanız gerekebilir. Şifrenizi gizli tutmayı kabul
          eder ve hesabınızın ve şifrenizin tüm kullanımından siz sorumlu olursunuz.
          Seçtiğiniz bir kullanıcı adının uygunsuz, müstehcen veya başka bir şekilde sakıncalı
          olduğuna kendi takdirimize göre karar verirsek, bu kullanıcı adını kaldırma, geri
          alma veya değiştirme hakkını saklı tutarız.
        </p>

        <h2>5. Satın alma ve ödeme</h2>
        <p>Aşağıdaki ödeme biçimlerini kabul ediyoruz:</p>
        <ul>
          <li>Visa</li>
          <li>Mastercard</li>
          <li>American Express</li>
          <li>PayPal</li>
        </ul>
        <p>
          Hizmetler aracılığıyla yapılan tüm satın almalar için güncel, eksiksiz ve doğru
          satın alma ve hesap bilgilerini sağlamayı kabul edersiniz. Ayrıca, işlemlerinizi
          tamamlayabilmemiz ve gerektiğinde sizinle iletişime geçebilmemiz için e-posta
          adresi, ödeme yöntemi ve ödeme kartı son kullanma tarihi dahil olmak üzere hesap
          ve ödeme bilgilerini derhal güncellemeyi kabul edersiniz. Tarafımızca gerekli
          görülen şekilde satın alma fiyatına satış vergisi eklenecektir. Fiyatları herhangi
          bir zamanda değiştirebiliriz. Tüm ödemeler USD, EUR, TRY cinsinden olacaktır.
        </p>
        <p>
          Satın almalarınız ve geçerli kargo ücretleri için o sırada geçerli olan fiyatlardan
          tüm ücretleri ödemeyi kabul edersiniz ve siparişinizi verirken seçtiğiniz ödeme
          sağlayıcısını bu tür tutarlar için ücretlendirmemize yetki verirsiniz. Halihazırda
          ödeme talep etmiş veya almış olsak bile, fiyatlandırmadaki hataları veya yanlışları
          düzeltme hakkını saklı tutarız.
        </p>
        <p>
          Hizmetler aracılığıyla verilen herhangi bir siparişi reddetme hakkını saklı
          tutarız. Kendi takdirimize bağlı olarak, kişi başına, hane başına veya sipariş
          başına satın alınan miktarları sınırlandırabilir veya iptal edebiliriz. Bu
          kısıtlamalar, aynı müşteri hesabı, aynı ödeme yöntemi tarafından veya altında
          verilen siparişleri ve/veya aynı fatura veya gönderim adresini kullanan siparişleri
          içerebilir. Kendi takdirimize göre satıcılar, yeniden satıcılar veya distribütörler
          tarafından verildiği görünen siparişleri sınırlandırma veya yasaklama hakkını saklı
          tutarız.
        </p>

        <h2>6. Abonelikler</h2>
        <h3>Faturalandırma ve yenileme</h3>
        <p>
          Aboneliğiniz iptal edilmediği sürece devam edecek ve otomatik olarak yenilenecektir.
          İlgili siparişi iptal edinceye kadar, her bir tekrarlanan ücretlendirme için
          önceden onayınızı almadan ödeme yönteminizden tekrarlayan bir şekilde ücret
          almamıza onay verirsiniz. Faturalandırma döngünüzün uzunluğu, Hizmetlere abone
          olduğunuzda seçtiğiniz abonelik planının türüne bağlı olacaktır.
        </p>
        <h3>Ücretsiz deneme</h3>
        <p>
          Hizmetlere kaydolan yeni kullanıcılara 7 günlük ücretsiz deneme sunuyoruz.
          Ücretsiz deneme süresinin sonunda hesap, kullanıcının seçtiği aboneliğe göre
          ücretlendirilecektir.
        </p>
        <h3>İptal</h3>
        <p>
          Aşağıda verilen iletişim bilgilerini kullanarak bizimle iletişime geçerek
          aboneliğinizi istediğiniz zaman iptal edebilirsiniz. İptaliniz mevcut ücretli
          dönemin sonunda geçerli olacaktır. Herhangi bir sorunuz varsa veya Hizmetlerimizden
          memnun değilseniz, lütfen <a href="mailto:info@safolio.com">info@safolio.com</a>
          {" "}adresinden bize e-posta gönderin.
        </p>
        <h3>Ücret değişiklikleri</h3>
        <p>
          Zaman zaman abonelik ücretinde değişiklikler yapabiliriz ve fiyat değişikliklerini
          size geçerli yasalara uygun olarak bildireceğiz.
        </p>

        <h2>7. Yasak faaliyetler</h2>
        <p>
          Hizmetlere, Hizmetleri kullanıma sunduğumuz amaç dışında herhangi bir amaçla
          erişemez veya bunları kullanamazsınız. Hizmetler, özellikle tarafımızca onaylanan
          veya kabul edilenler dışında herhangi bir ticari girişimle bağlantılı olarak
          kullanılamaz.
        </p>
        <p>Hizmetlerin bir kullanıcısı olarak şunları yapmamayı kabul edersiniz:</p>
        <ul>
          <li>Yazılı iznimiz olmadan doğrudan veya dolaylı olarak bir koleksiyon, derleme, veritabanı veya dizin oluşturmak veya derlemek için Hizmetlerden verileri veya diğer içerikleri sistematik olarak almak.</li>
          <li>Özellikle kullanıcı şifreleri gibi hassas hesap bilgilerini öğrenme girişiminde bizi ve diğer kullanıcıları kandırmak, dolandırmak veya yanıltmak.</li>
          <li>Herhangi bir İçeriğin kullanımını veya kopyalanmasını önleyen veya kısıtlayan veya Hizmetlerin ve/veya içerdiği İçeriğin kullanımına ilişkin sınırlamaları uygulayan özellikler dahil olmak üzere, Hizmetlerin güvenlikle ilgili özelliklerini atlatmak, devre dışı bırakmak veya başka bir şekilde bunlara müdahale etmek.</li>
          <li>Görüşümüze göre bize ve/veya Hizmetlere karşı küçümseyici, kötüleyici veya başka bir şekilde zarar verici eylemlerde bulunmak.</li>
          <li>Başka bir kişiyi taciz etmek, istismar etmek veya zarar vermek için Hizmetlerden elde edilen bilgileri kullanmak.</li>
          <li>Destek hizmetlerimizi uygunsuz şekilde kullanmak veya istismar veya yanlış davranış hakkında yanlış raporlar göndermek.</li>
          <li>Hizmetleri geçerli yasa veya yönetmeliklerle tutarsız bir şekilde kullanmak.</li>
          <li>Hizmetlerin yetkisiz çerçeveleme veya bağlantı vermesinde bulunmak.</li>
          <li>Herhangi bir tarafın Hizmetleri kesintisiz kullanımına ve bunlardan faydalanmasına müdahale eden veya Hizmetlerin kullanımını, özelliklerini, işlevlerini, çalışmasını veya bakımını değiştiren, bozan, kesintiye uğratan, değiştiren veya bunlara müdahale eden virüsler, Truva atları veya büyük harf ve istenmeyen postaların aşırı kullanımı (tekrarlayan metinlerin sürekli olarak yayınlanması) dahil diğer materyalleri yüklemek veya iletmek (veya yüklemeye veya iletmeye çalışmak).</li>
          <li>Yorumlar veya mesajlar göndermek için komut dosyaları kullanmak veya herhangi bir veri madenciliği, robot veya benzer veri toplama ve çıkarma araçları kullanmak gibi sistemin otomatik kullanımında bulunmak.</li>
          <li>Herhangi bir İçerikten telif hakkı veya diğer mülkiyet hakları bildirimini silmek.</li>
          <li>Başka bir kullanıcıyı veya kişiyi taklit etmeye çalışmak veya başka bir kullanıcının kullanıcı adını kullanmak.</li>
          <li>Sınırsız, açık grafik değişim formatları (&apos;gif&apos;ler), 1×1 piksel, web hataları, çerezler veya diğer benzer cihazlar (bazen &apos;casus yazılım&apos; veya &apos;pasif toplama mekanizmaları&apos; veya &apos;pcm&apos;ler olarak adlandırılır) dahil olmak üzere, pasif veya aktif bilgi toplama veya iletim mekanizması olarak işlev gören herhangi bir materyali yüklemek veya iletmek (veya yüklemeye veya iletmeye çalışmak).</li>
          <li>Hizmetlere veya Hizmetlere bağlı ağlara veya hizmetlere müdahale etmek, bunları bozmak veya gereksiz bir yük oluşturmak.</li>
          <li>Hizmetlerin herhangi bir bölümünü size sağlamada görevli çalışanlarımızı veya temsilcilerimizi taciz etmek, rahatsız etmek, korkutmak veya tehdit etmek.</li>
          <li>Hizmetlere veya Hizmetlerin herhangi bir bölümüne erişimi engellemek veya kısıtlamak için tasarlanmış Hizmet önlemlerinin herhangi birini atlatmaya çalışmak.</li>
          <li>Flash, PHP, HTML, JavaScript veya diğer kod dahil ancak bunlarla sınırlı olmamak üzere Hizmetlerin yazılımını kopyalamak veya uyarlamak.</li>
          <li>Geçerli yasaların izin verdiği durumlar dışında, Hizmetleri oluşturan veya bir parçası olan herhangi bir yazılımı çözmek, derlemek, demonte etmek veya tersine mühendislik yapmak.</li>
          <li>Standart arama motoru veya İnternet tarayıcısı kullanımının sonucu olabileceği durumlar dışında, Hizmetlere erişen herhangi bir örümcek, robot, hile programı, kazıyıcı veya çevrimdışı okuyucu dahil ancak bunlarla sınırlı olmamak üzere herhangi bir otomatik sistemi kullanmak, başlatmak, geliştirmek veya dağıtmak veya herhangi bir yetkisiz komut dosyası veya başka yazılım kullanmak veya başlatmak.</li>
          <li>Hizmetlerde alımlar yapmak için bir satın alma temsilcisi veya satın alma aracısı kullanmak.</li>
          <li>İstenmeyen e-posta gönderme amacıyla kullanıcı adlarını ve/veya e-posta adreslerini elektronik veya başka yollarla toplamak veya otomatik yollarla veya yanlış beyanlarla kullanıcı hesapları oluşturmak dahil olmak üzere Hizmetlerin yetkisiz kullanımında bulunmak.</li>
          <li>Bizimle rekabet etmek için veya başka bir şekilde Hizmetleri ve/veya İçeriği gelir getirici herhangi bir girişim veya ticari işletme için kullanmak.</li>
          <li>Profilinizi satmak veya başka bir şekilde devretmek.</li>
          <li>Diğer kullanıcılara veya üçüncü taraflara finansal, yatırım, vergi veya yasal tavsiye sağlamak, yayınlamak veya dağıtmak;</li>
          <li>Kendinizi finansal danışman, broker, portföy yöneticisi veya diğer düzenlenmiş finansal profesyonel olarak sunmak;</li>
          <li>Herhangi bir finansal araç, dijital varlık veya yatırım ürününün satın alınmasını, satılmasını veya elde tutulmasını önermek, onaylamak, talep etmek veya teşvik etmek;</li>
          <li>Yatırım hizmetleri, sinyaller, copy-trading, yönetilen portföyler veya danışmanlık hizmetleri sunmak veya düzenlemek;</li>
          <li>Finansal araçların, yatırım ürünlerinin veya ilgili hizmetlerin reklamını yapmak, pazarlamak veya satmak;</li>
          <li>Platformu, finansal ürünler veya hizmetlerle ilgili müşteri adayı oluşturma, talep etme veya tanıtım faaliyetleri için kullanmak.</li>
        </ul>

        <h2>8. Kullanıcı tarafından oluşturulan katkılar</h2>
        <p>
          Hizmetler sizi sohbet etmeye, bloglara, mesaj panolarına, çevrimiçi forumlara ve
          diğer işlevlere katkıda bulunmaya veya katılmaya davet edebilir ve metin, yazılar,
          video, ses, fotoğraflar, grafikler, yorumlar, öneriler veya kişisel bilgiler veya
          diğer materyaller (topluca, &apos;Katkılar&apos;) dahil ancak bunlarla sınırlı
          olmamak üzere bize veya Hizmetlerde içerik ve materyaller oluşturma, gönderme,
          yayınlama, görüntüleme, iletme, icra etme, yayımlama, dağıtma veya yayınlama
          fırsatı sunabilir. Katkılar, Hizmetlerin diğer kullanıcıları ve üçüncü taraf web
          siteleri aracılığıyla görüntülenebilir. Bu nedenle, ilettiğiniz tüm Katkılar gizli
          olmayan ve özel olmayan olarak değerlendirilebilir. Herhangi bir Katkı oluşturduğunuzda
          veya kullanıma sunduğunuzda, bu nedenle şunları beyan ve garanti edersiniz:
        </p>
        <ul>
          <li>Katkılarınızın oluşturulması, dağıtılması, iletilmesi, kamuya açık olarak görüntülenmesi veya icra edilmesi ve Katkılarınıza erişilmesi, indirilmesi veya kopyalanması, herhangi bir üçüncü tarafın telif hakkı, patent, ticari marka, ticari sır veya manevi hakları dahil ancak bunlarla sınırlı olmamak üzere mülkiyet haklarını ihlal etmez ve etmeyecektir.</li>
          <li>Katkılarınızı, Hizmetler ve bu Yasal Koşullar tarafından düşünülen herhangi bir şekilde kullanmak ve bize, Hizmetlere ve Hizmetlerin diğer kullanıcılarına kullanma yetkisi vermek için gerekli lisanslara, haklara, izinlere, muafiyetlere ve onaylara sahip olan yaratıcı ve sahibisiniz.</li>
          <li>Katkılarınızı, Hizmetler ve bu Yasal Koşullar tarafından düşünülen herhangi bir şekilde dahil etmeyi ve kullanmayı sağlamak için, Katkılarınızdaki her tanımlanabilir bireysel kişinin adını veya benzerliğini kullanmak için bu tür her tanımlanabilir bireysel kişiden yazılı onay, muafiyet ve/veya izne sahipsiniz.</li>
          <li>Katkılarınız yanlış, hatalı veya yanıltıcı değildir.</li>
          <li>Katkılarınız istenmeyen veya yetkisiz reklam, tanıtım materyalleri, piramit şemaları, zincirleme mektuplar, spam, toplu posta veya diğer talep biçimleri değildir.</li>
          <li>Katkılarınız müstehcen, açık saçık, şehvet uyandırıcı, kirli, şiddet içerikli, taciz edici, iftira niteliğinde, hakaret niteliğinde veya başka bir şekilde sakıncalı (tarafımızca belirlendiği üzere) değildir.</li>
          <li>Katkılarınız kimseyi alaya almaz, dalga geçmez, küçümsemez, korkutmaz veya istismar etmez.</li>
          <li>Katkılarınız başka herhangi bir kişiyi (bu terimlerin yasal anlamında) taciz etmek veya tehdit etmek ve belirli bir kişiye veya kişi grubuna karşı şiddeti teşvik etmek için kullanılmaz.</li>
          <li>Katkılarınız geçerli bir yasa, yönetmelik veya kural ihlal etmez.</li>
          <li>Katkılarınız herhangi bir üçüncü tarafın gizlilik veya tanıtım haklarını ihlal etmez.</li>
          <li>Katkılarınız çocuk pornografisi ile ilgili geçerli yasaları veya başka bir şekilde reşit olmayanların sağlığını veya refahını korumaya yönelik yasaları ihlal etmez.</li>
          <li>Katkılarınız ırk, ulusal köken, cinsiyet, cinsel tercih veya fiziksel engelle ilgili saldırgan yorumlar içermez.</li>
          <li>Katkılarınız bu Yasal Koşulların herhangi bir hükmünü veya geçerli bir yasa veya yönetmeliği ihlal eden materyallere bağlantı vermez veya başka bir şekilde ihlal etmez.</li>
        </ul>
        <p>
          Yukarıdakileri ihlal eden Hizmetlerin herhangi bir kullanımı bu Yasal Koşulları
          ihlal eder ve diğer şeylerin yanı sıra Hizmetleri kullanma haklarınızın sona
          ermesine veya askıya alınmasına neden olabilir.
        </p>

        <h2>9. Katkı lisansı</h2>
        <p>
          Hizmetlerin herhangi bir bölümüne Katkılarınızı yayınlayarak veya Hizmetlerdeki
          hesabınızı sosyal ağ hesaplarınızdan herhangi birine bağlayarak Katkıları
          Hizmetlere erişilebilir hale getirerek, bize bu tür Katkıları (görüntünüz ve sesiniz
          dahil ancak bunlarla sınırlı olmamak üzere) ticari, reklam veya başka herhangi bir
          amaçla barındırmak, kullanmak, kopyalamak, çoğaltmak, ifşa etmek, satmak, yeniden
          satmak, yayınlamak, yayımlamak, yeniden adlandırmak, arşivlemek, depolamak,
          önbelleğe almak, kamuya açık olarak icra etmek, kamuya açık olarak görüntülemek,
          yeniden biçimlendirmek, çevirmek, iletmek, alıntılamak (tamamen veya kısmen) ve
          dağıtmak ve Katkıların türev çalışmalarını hazırlamak veya bunları diğer çalışmalara
          dahil etmek ve yukarıdakilerin alt lisanslarını vermek ve yetkilendirmek için
          sınırsız, sınırsız, geri alınamaz, süresiz, münhasır olmayan, devredilebilir,
          telifsiz, tamamı ödenmiş, dünya çapında bir hak ve lisans otomatik olarak vermiş
          olur ve bu hakkı vermeye yetkili olduğunuzu beyan ve garanti edersiniz. Kullanım ve
          dağıtım, herhangi bir medya formatında ve herhangi bir medya kanalı aracılığıyla
          gerçekleşebilir.
        </p>
        <p>
          Bu lisans şu anda bilinen veya bundan sonra geliştirilecek herhangi bir biçim, medya
          veya teknoloji için geçerli olacaktır ve sağladığınız adınızın, şirket adınızın ve
          franchise adınızın ve ticari markaların, hizmet markalarının, ticari adların,
          logoların ve kişisel ve ticari görsellerin uygun şekilde kullanımını içerir.
          Katkılarınızdaki tüm manevi haklardan feragat edersiniz ve manevi hakların
          Katkılarınızda başka bir şekilde ileri sürülmediğini garanti edersiniz.
        </p>
        <p>
          Katkılarınız üzerinde herhangi bir mülkiyet iddia etmeyiz. Katkılarınızın ve
          Katkılarınızla ilgili herhangi bir fikri mülkiyet hakkının veya diğer mülkiyet
          haklarının tam mülkiyetini elinizde tutarsınız. Hizmetlerin herhangi bir alanında
          tarafınızca sağlanan Katkılarınızdaki herhangi bir ifade veya beyandan sorumlu
          değiliz. Hizmetlere Katkılarınızdan yalnızca siz sorumlusunuz ve bizi tüm
          sorumluluktan beraat ettirmeyi ve Katkılarınız ile ilgili olarak bize karşı herhangi
          bir yasal işlemden kaçınmayı açıkça kabul edersiniz.
        </p>
        <p>
          Kendi mutlak takdirimize göre, (1) herhangi bir Katkıyı düzenleme, sansürleme veya
          başka bir şekilde değiştirme; (2) Hizmetler üzerinde daha uygun konumlara
          yerleştirmek için herhangi bir Katkıyı yeniden kategorize etme; ve (3) herhangi bir
          zamanda ve herhangi bir nedenle, önceden bildirimde bulunmadan herhangi bir Katkıyı
          önceden tarama veya silme hakkına sahibiz. Katkılarınızı izleme yükümlülüğümüz
          yoktur.
        </p>

        <h2>10. İncelemeler için kurallar</h2>
        <p>
          Size Hizmetlerde inceleme veya derecelendirme bırakma alanları sağlayabiliriz. Bir
          inceleme yayınlarken aşağıdaki kriterlere uymalısınız: (1) incelenen kişi/varlık
          ile birinci elden deneyiminiz olmalıdır; (2) incelemeleriniz saldırgan küfür veya
          küfürlü, ırkçı, saldırgan veya nefret içeren bir dil içermemelidir; (3)
          incelemeleriniz din, ırk, cinsiyet, ulusal köken, yaş, medeni durum, cinsel
          yönelim veya engellilik nedeniyle ayrımcı referanslar içermemelidir; (4)
          incelemeleriniz yasadışı faaliyetlere atıflar içermemelidir; (5) olumsuz incelemeler
          yayınlıyorsanız rakiplerle bağlantılı olmamalısınız; (6) davranışın yasallığına
          ilişkin herhangi bir sonuç çıkarmamalısınız; (7) yanlış veya yanıltıcı ifadeler
          yayınlayamazsınız; ve (8) başkalarını incelemeler yayınlamaya, olumlu veya olumsuz,
          teşvik eden bir kampanya düzenleyemezsiniz.
        </p>
        <p>
          Kendi takdirimize bağlı olarak incelemeleri kabul edebilir, reddedebilir veya
          kaldırabiliriz. İnceleme yapan herhangi biri incelemeleri sakıncalı veya hatalı
          bulsa bile, incelemeleri tarama veya silme yükümlülüğümüz kesinlikle yoktur.
          İncelemeler tarafımızca onaylanmamıştır ve görüşlerimizi veya bağlı kuruluşlarımızın
          veya ortaklarımızın görüşlerini mutlaka temsil etmemektedir. Herhangi bir inceleme
          veya herhangi bir incelemeden kaynaklanan iddialar, yükümlülükler veya kayıplar için
          herhangi bir sorumluluk üstlenmiyoruz. Bir inceleme yayınlayarak, incelemeyle ilgili
          tüm içeriği çoğaltmak, değiştirmek, çevirmek, herhangi bir yolla iletmek,
          görüntülemek, icra etmek ve/veya dağıtmak için size kalıcı, münhasır olmayan, dünya
          çapında, telifsiz, tamamı ödenmiş, devredilebilir ve alt lisanslanabilir bir hak ve
          lisans verirsiniz.
        </p>

        <h2>11. Mobil uygulama lisansı</h2>
        <h3>Kullanım lisansı</h3>
        <p>
          Hizmetlere Uygulama aracılığıyla erişirseniz, Uygulamayı sahip olduğunuz veya
          kontrol ettiğiniz kablosuz elektronik cihazlara yüklemek ve kullanmak ve bu Yasal
          Koşullarda yer alan bu mobil uygulama lisansının şart ve koşullarına kesinlikle
          uygun olarak bu tür cihazlarda Uygulamaya erişmek ve kullanmak için geri alınabilir,
          münhasır olmayan, devredilemez, sınırlı bir hak veriyoruz. Şunları yapmamalısınız:
          (1) geçerli yasaların izin verdiği durumlar dışında, Uygulamayı derlememek, tersine
          mühendislik yapmamak, demonte etmemek, kaynak kodunu türetmeye çalışmamak veya
          şifresini çözmemek; (2) Uygulamadan herhangi bir değişiklik, uyarlama, iyileştirme,
          geliştirme, çeviri veya türev çalışma yapmamak; (3) Uygulamaya erişiminiz veya
          kullanımınız ile bağlantılı olarak geçerli yasaları, kuralları veya yönetmelikleri
          ihlal etmemek; (4) tarafımızca veya Uygulamanın lisans verenleri tarafından
          gönderilen herhangi bir mülkiyet bildirimini (telif hakkı veya ticari marka
          bildirimi dahil) kaldırmamak, değiştirmemek veya gizlememek; (5) Uygulamayı,
          tasarlanmadığı veya amaçlanmadığı herhangi bir gelir getirici girişim, ticari
          işletme veya başka amaç için kullanmamak; (6) Uygulamayı, aynı anda birden fazla
          cihaz veya kullanıcı tarafından erişimine veya kullanımına izin veren bir ağ veya
          başka bir ortam üzerinden kullanılabilir hale getirmemek; (7) Uygulamayı, doğrudan
          veya dolaylı olarak Uygulama ile rekabet eden veya herhangi bir şekilde Uygulamanın
          yerine geçen bir ürün, hizmet veya yazılım oluşturmak için kullanmamak; (8)
          Uygulamayı herhangi bir web sitesine otomatik sorgular göndermek veya istenmeyen
          ticari e-posta göndermek için kullanmamak; veya (9) Uygulama ile kullanılmak üzere
          herhangi bir uygulama, aksesuar veya cihazın tasarımında, geliştirilmesinde,
          üretiminde, lisanslanmasında veya dağıtımında herhangi bir özel bilgiyi veya
          arayüzlerimizi veya diğer fikri mülkiyetimizi kullanmamak.
        </p>
        <h3>Apple ve Android cihazları</h3>
        <p>
          Hizmetlere erişmek için Apple Store veya Google Play&apos;den (her biri bir
          &apos;Uygulama Dağıtıcısı&apos;) edindiğiniz Uygulamayı kullandığınızda aşağıdaki
          şartlar geçerlidir: (1) Uygulamamız için size verilen lisans, Apple iOS veya Android
          işletim sistemlerini kullanan bir cihazda uygun şekilde ve geçerli Uygulama
          Dağıtıcısının hizmet şartlarında belirtilen kullanım kurallarına uygun olarak
          uygulamayı kullanmak için devredilemez bir lisansla sınırlıdır; (2) bu Yasal
          Koşullarda yer alan bu mobil uygulama lisansının şart ve koşullarında veya geçerli
          yasalar uyarınca aksi belirtildiği gibi Uygulama ile ilgili herhangi bir bakım ve
          destek hizmetini sağlamaktan biz sorumluyuz ve her Uygulama Dağıtıcısının Uygulama
          ile ilgili herhangi bir bakım ve destek hizmeti sağlama konusunda hiçbir
          yükümlülüğü olmadığını kabul edersiniz; (3) Uygulamanın geçerli herhangi bir
          garantiye uymaması durumunda, geçerli Uygulama Dağıtıcısını bilgilendirebilirsiniz
          ve Uygulama Dağıtıcısı, şart ve politikalarına uygun olarak, Uygulama için ödenen
          satın alma fiyatını (varsa) iade edebilir ve geçerli yasaların izin verdiği maksimum
          ölçüde, Uygulama Dağıtıcısının Uygulama ile ilgili başka herhangi bir garanti
          yükümlülüğü olmayacaktır; (4) (i) ABD hükümeti ambargosuna tabi olan veya ABD
          hükümeti tarafından &apos;terörizmi destekleyen&apos; bir ülke olarak belirlenmiş
          bir ülkede bulunmadığınızı ve (ii) yasaklı veya kısıtlı tarafların herhangi bir ABD
          hükümeti listesinde yer almadığınızı beyan ve garanti edersiniz; (5) Uygulamayı
          kullanırken geçerli üçüncü taraf sözleşme şartlarına uymalısınız, örneğin bir VoIP
          uygulamanız varsa, Uygulamayı kullanırken kablosuz veri hizmet sözleşmelerini ihlal
          etmemelisiniz; ve (6) Uygulama Dağıtıcılarının, bu Yasal Koşullarda yer alan bu
          mobil uygulama lisansının şart ve koşullarının üçüncü taraf yararlanıcıları
          olduğunu ve her Uygulama Dağıtıcısının, bu Yasal Koşullarda yer alan bu mobil
          uygulama lisansının şart ve koşullarını size karşı üçüncü taraf yararlanıcısı olarak
          uygulama hakkına sahip olacağını (ve bu hakkı kabul etmiş sayılacağını) kabul eder
          ve onaylarsınız.
        </p>

        <h2>12. Sosyal medya</h2>
        <p>
          Hizmetlerin işlevselliğinin bir parçası olarak, hesabınızı üçüncü taraf hizmet
          sağlayıcılarınızla sahip olduğunuz çevrimiçi hesaplara (her böyle bir hesap, bir
          &apos;Üçüncü Taraf Hesabı&apos;) şu yollarla bağlayabilirsiniz: (1) Üçüncü Taraf
          Hesabı oturum açma bilgilerinizi Hizmetler aracılığıyla sağlayarak; veya (2) her
          Üçüncü Taraf Hesabınızın kullanımını düzenleyen geçerli şart ve koşullara izin
          verildiği şekilde Üçüncü Taraf Hesabınıza erişmemize izin vererek. Üçüncü Taraf
          Hesap oturum açma bilgilerinizi bize açıklama ve/veya Üçüncü Taraf Hesabınıza
          erişim izni verme yetkisine sahip olduğunuzu, geçerli Üçüncü Taraf Hesabının
          kullanımını düzenleyen herhangi bir şart ve koşulu ihlal etmeden ve bizi herhangi
          bir ücret ödemekle yükümlü kılmadan veya Üçüncü Taraf Hesabının üçüncü taraf hizmet
          sağlayıcısı tarafından uygulanan kullanım sınırlamalarına tabi tutmadan beyan ve
          garanti edersiniz. Herhangi bir Üçüncü Taraf Hesabına erişim izni vererek, (1)
          Üçüncü Taraf Hesabınıza sağladığınız ve sakladığınız tüm içeriği (&apos;Sosyal Ağ
          İçeriği&apos;) erişebileceğimizi, kullanılabilir hale getirebileceğimizi ve
          (uygunsa) saklayabileceğimizi ve böylece hesabınız aracılığıyla Hizmetlerde
          erişilebilir olduğunu, arkadaş listeleri dahil ve (2) hesabınızı Üçüncü Taraf
          Hesabınızla bağladığınızda size bildirildiği ölçüde Üçüncü Taraf Hesabınıza ek
          bilgi gönderebileceğimizi ve alabileceğimizi anlıyorsunuz. Seçtiğiniz Üçüncü Taraf
          Hesaplarına ve bu Üçüncü Taraf Hesaplarında belirlediğiniz gizlilik ayarlarına
          bağlı olarak, Üçüncü Taraf Hesaplarınıza yayınladığınız kişisel tanımlayıcı
          bilgiler, Hizmetlerdeki hesabınız aracılığıyla erişilebilir olabilir. Bir Üçüncü
          Taraf Hesabı veya ilişkili hizmet kullanılamaz hale gelirse veya bu tür bir Üçüncü
          Taraf Hesabına erişimimiz üçüncü taraf hizmet sağlayıcısı tarafından sonlandırılırsa,
          Sosyal Ağ İçeriği artık Hizmetlerde erişilebilir olmayabilir. Hizmetlerdeki
          hesabınız ile Üçüncü Taraf Hesaplarınız arasındaki bağlantıyı istediğiniz zaman
          devre dışı bırakma yeteneğine sahip olacaksınız. LÜTFEN ÜÇÜNCÜ TARAF
          HESAPLARINIZLA İLİŞKİLİ ÜÇÜNCÜ TARAF HİZMET SAĞLAYICILARI İLE OLAN İLİŞKİNİZİN
          YALNIZCA BU ÜÇÜNCÜ TARAF HİZMET SAĞLAYICILARI İLE OLAN SÖZLEŞMENİZ(LERİNİZ) İLE
          DÜZENLENDİĞİNİ UNUTMAYIN. Herhangi bir amaçla, doğruluk, yasallık veya ihlal etmeme
          dahil ancak bunlarla sınırlı olmamak üzere, herhangi bir Sosyal Ağ İçeriğini
          incelemek için hiçbir çaba göstermeyiz ve herhangi bir Sosyal Ağ İçeriğinden sorumlu
          değiliz. Bir Üçüncü Taraf Hesabı ile ilişkili e-posta adres defterinize ve mobil
          cihazınızda veya tablet bilgisayarınızda saklanan kişi listenize, yalnızca
          Hizmetleri kullanmak için kaydolan kişileri tanımlamak ve size bildirmek amacıyla
          erişebileceğimizi kabul eder ve onaylarsınız. Aşağıdaki iletişim bilgilerini
          kullanarak bizimle iletişime geçerek veya hesap ayarlarınızdan (varsa) Hizmetler
          ile Üçüncü Taraf Hesabınız arasındaki bağlantıyı devre dışı bırakabilirsiniz. Bu
          tür Üçüncü Taraf Hesabı aracılığıyla elde edilen ve sunucularımızda saklanan
          herhangi bir bilgiyi, hesabınızla ilişkilendirilen kullanıcı adı ve profil resmi
          dışında silmeye çalışacağız.
        </p>

        <h2>13. Üçüncü taraf web siteleri ve içerik</h2>
        <p>
          Hizmetler, diğer web sitelerine bağlantılar (&apos;Üçüncü Taraf Web Siteleri&apos;)
          ve üçüncü taraflara ait veya üçüncü taraflardan kaynaklanan makaleler, fotoğraflar,
          metinler, grafikler, resimler, tasarımlar, müzik, ses, video, bilgi, uygulamalar,
          yazılım ve diğer içerik veya öğeleri (&apos;Üçüncü Taraf İçeriği&apos;) içerebilir
          (veya size Site veya Uygulama aracılığıyla gönderilebilir). Bu tür Üçüncü Taraf Web
          Siteleri ve Üçüncü Taraf İçeriği, tarafımızca doğruluk, uygunluk veya eksiksizlik
          için araştırılmamış, izlenmemiş veya kontrol edilmemiştir ve Hizmetler aracılığıyla
          erişilen herhangi bir Üçüncü Taraf Web Sitesinden veya Hizmetler aracılığıyla
          yayınlanan, erişilebilen veya yüklenen herhangi bir Üçüncü Taraf İçeriğinden,
          Üçüncü Taraf Web Sitelerinde veya Üçüncü Taraf İçeriğinde yer alan veya içerdiği
          içerik, doğruluk, saldırganlık, görüş, güvenilirlik, gizlilik uygulamaları veya
          diğer politikalar dahil olmak üzere sorumlu değiliz. Herhangi bir Üçüncü Taraf Web
          Sitesinin veya Üçüncü Taraf İçeriğinin dahil edilmesi, bağlanması veya
          kullanılmasına veya yüklenmesine izin verilmesi, tarafımızca onaylandığı veya
          desteklendiği anlamına gelmez. Hizmetlerden ayrılmaya ve Üçüncü Taraf Web Sitelerine
          erişmeye veya herhangi bir Üçüncü Taraf İçeriğini kullanmaya veya yüklemeye karar
          verirseniz, bunu kendi sorumluluğunuzda yaparsınız ve bu Yasal Koşulların artık
          geçerli olmadığını bilmelisiniz. Hizmetlerden gezindiğiniz herhangi bir web sitesi
          veya Hizmetlerden kullandığınız veya yüklediğiniz herhangi bir uygulama ile ilgili
          gizlilik ve veri toplama uygulamaları dahil olmak üzere geçerli şart ve politikaları
          incelemelisiniz. Üçüncü Taraf Web Siteleri aracılığıyla yaptığınız tüm satın almalar,
          başka web siteleri aracılığıyla ve diğer şirketlerden olacaktır ve yalnızca sizin ve
          ilgili üçüncü taraf arasında olan bu tür satın almalarla ilgili olarak hiçbir
          sorumluluk üstlenmiyoruz. Üçüncü Taraf Web Sitelerinde sunulan ürünleri veya
          hizmetleri onaylamadığımızı kabul eder ve onaylarsınız ve bu tür ürün veya
          hizmetlerin satın alınmasından kaynaklanan herhangi bir zarardan bizi sorumlu
          tutmayacaksınız. Ayrıca, herhangi bir Üçüncü Taraf İçeriğinden veya Üçüncü Taraf Web
          Siteleri ile herhangi bir temastan kaynaklanan veya herhangi bir şekilde ilgili
          olarak uğradığınız kayıplardan veya size verilen zararlardan bizi sorumlu
          tutmayacaksınız.
        </p>

        <h2>14. Reklam verenler</h2>
        <p>
          Reklam verenlerin reklamlarını ve diğer bilgilerini Hizmetlerin belirli alanlarında,
          örneğin yan çubuk reklamları veya banner reklamları gibi alanlarda görüntülemesine
          izin veriyoruz. Bu tür reklamları yerleştirmek için yalnızca alan sağlıyoruz ve
          reklam verenlerle başka bir ilişkimiz yok.
        </p>

        <h2>15. Hizmet yönetimi</h2>
        <p>
          Aşağıdaki haklarımızı, yükümlülüğümüz olmamakla birlikte saklı tutarız: (1) Bu Yasal
          Koşulların ihlali açısından Hizmetleri izlemek; (2) kendi takdirimize göre yasayı
          veya bu Yasal Koşulları ihlal eden herhangi birine karşı, kolluk kuvvetlerine bu tür
          kullanıcıyı bildirmek dahil ancak bunlarla sınırlı olmamak üzere uygun yasal işlem
          yapmak; (3) kendi takdirimize göre ve sınırlama olmaksızın, Katkılarınızdan herhangi
          birinin veya herhangi bir bölümünün kullanılabilirliğini reddetmek, kısıtlamak,
          sınırlandırmak veya (teknolojik olarak mümkün olduğu ölçüde) devre dışı bırakmak;
          (4) kendi takdirimize göre ve sınırlama, bildirim veya sorumluluk olmaksızın,
          Hizmetlerden, boyut olarak aşırı olan veya sistemlerimize herhangi bir şekilde yük
          oluşturan tüm dosyaları ve içeriği kaldırmak veya başka bir şekilde devre dışı
          bırakmak; ve (5) haklarımızı ve mülkümüzü korumak ve Hizmetlerin düzgün
          işleyişini kolaylaştırmak için tasarlanmış bir şekilde Hizmetleri başka bir şekilde
          yönetmek.
        </p>

        <h2>16. Gizlilik politikası</h2>
        <p>
          Veri gizliliğine ve güvenliğine önem veriyoruz. Lütfen{" "}
          <Link href="/privacy-policy">Gizlilik Politikamızı</Link> inceleyin. Hizmetleri
          kullanarak, bu Yasal Koşullara dahil edilen Gizlilik Politikamıza bağlı kalmayı
          kabul edersiniz. Hizmetlerin Almanya ve Hollanda&apos;da barındırıldığını bildirmek
          isteriz. Hizmetlere, kişisel veri toplama, kullanım veya ifşası ile ilgili
          Almanya ve Hollanda&apos;da geçerli yasalardan farklı yasalar veya diğer
          gereksinimler içeren dünyanın başka bir bölgesinden erişiyorsanız, Hizmetleri
          kullanmaya devam ederek, verilerinizi Almanya ve Hollanda&apos;ya aktarıyorsunuz ve
          verilerinizin Almanya ve Hollanda&apos;ya aktarılmasına ve burada işlenmesine açıkça
          onay veriyorsunuz.
        </p>

        <h2>17. Süre ve fesih</h2>
        <p>
          Bu Yasal Koşullar, Hizmetleri kullandığınız sürece tam yürürlükte ve etkide
          kalacaktır. BU YASAL KOŞULLARIN HERHANGİ BİR HÜKMÜNÜ SINIRLAMADAN, KENDİ TAKDİRİMİZE
          GÖRE VE BİLDİRİMDE BULUNMADAN VEYA SORUMLULUK ALMADAN HİZMETLERE ERİŞİMİ VE
          KULLANIMI (BELİRLİ IP ADRESLERİNİ ENGELLEMEK DAHİL) HERHANGİ BİR KİŞİYE HERHANGİ BİR
          NEDENLE VEYA HİÇBİR NEDENLE, BU YASAL KOŞULLARDA YER ALAN HERHANGİ BİR BEYAN,
          GARANTİ VEYA TAAHHÜDÜN VEYA GEÇERLİ HERHANGİ BİR YASA VEYA YÖNETMELİĞİN İHLALİ DAHİL
          ANCAK BUNLARLA SINIRLI OLMAMAK ÜZERE REDDETME HAKKINI SAKLI TUTARIZ. HİZMETLERDEKİ
          KULLANIMINIZI VEYA KATILIMINIZI SONLANDIRABİLİR VEYA HESABINIZI VE HERHANGİ BİR
          ZAMANDA YAYINLADIĞINIZ HERHANGİ BİR İÇERİK VEYA BİLGİYİ, UYARI OLMADAN, KENDİ
          TAKDİRİMİZE GÖRE SİLEBİLİRİZ.
        </p>
        <p>
          Hesabınızı herhangi bir nedenle sonlandırırsak veya askıya alırsak, üçüncü tarafın
          adına hareket ediyor olsanız bile, kendi adınızla, sahte veya ödünç alınmış bir
          adla veya herhangi bir üçüncü tarafın adıyla yeni bir hesaba kaydolmanız ve
          oluşturmanız yasaktır. Hesabınızı sonlandırmaya veya askıya almaya ek olarak,
          medeni, cezai ve ihtiyati tedbir başvurusu dahil ancak bunlarla sınırlı olmamak
          üzere uygun yasal işlem yapma hakkını saklı tutarız.
        </p>

        <h2>18. Değişiklikler ve kesintiler</h2>
        <p>
          Hizmetlerin içeriğini herhangi bir zamanda veya herhangi bir nedenle, bildirimde
          bulunmaksızın kendi takdirimize göre değiştirme, modifiye etme veya kaldırma hakkını
          saklı tutarız. Ancak, Hizmetlerimizdeki herhangi bir bilgiyi güncelleme
          yükümlülüğümüz yoktur. Hizmetlerin herhangi bir değişikliği, fiyat değişikliği,
          askıya alınması veya durdurulmasından size veya herhangi bir üçüncü tarafa karşı
          sorumlu olmayacağız.
        </p>
        <p>
          Hizmetlerin her zaman kullanılabilir olmasını garanti edemeyiz. Donanım, yazılım
          veya diğer sorunlar yaşayabiliriz veya Hizmetlerle ilgili bakım yapmamız
          gerekebilir, bu da kesintilere, gecikmelere veya hatalara neden olabilir.
          Hizmetleri herhangi bir zamanda veya herhangi bir nedenle, size bildirimde
          bulunmaksızın değiştirme, gözden geçirme, güncelleme, askıya alma, durdurma veya
          başka bir şekilde değiştirme hakkını saklı tutarız. Hizmetlerin herhangi bir
          duraklama süresi veya durdurulması sırasında erişememeniz veya kullanamamanız
          nedeniyle uğradığınız herhangi bir kayıp, hasar veya rahatsızlıktan dolayı hiçbir
          sorumluluğumuzun olmadığını kabul edersiniz. Bu Yasal Koşullardaki hiçbir şey, bizi
          Hizmetleri korumakla ve desteklemekle veya bunlarla ilgili düzeltmeler, güncellemeler
          veya sürümler sağlamakla yükümlü kılacak şekilde yorumlanmayacaktır.
        </p>

        <h2>19. Geçerli hukuk</h2>
        <p>
          Bu Yasal Koşullar, Hollanda yasalarına tabidir ve bunlara göre yorumlanır ve
          Uluslararası Mal Satışına İlişkin Sözleşmeler Hakkında Birleşmiş Milletler
          Sözleşmesinin kullanımı açıkça hariç tutulmuştur. Mutat ikametgahınız AB&apos;de
          ise ve bir tüketiciyseniz, ek olarak ikamet ettiğiniz ülkedeki yasanın zorunlu
          hükümleri tarafından size sağlanan korumadan yararlanırsınız. Safolio B.V. ve siz,
          Amsterdam mahkemelerinin münhasır olmayan yargı yetkisine boyun eğmeyi kabul
          edersiniz; bu, bu Yasal Koşullarla ilgili tüketici koruma haklarınızı savunmak için
          Hollanda&apos;da veya ikamet ettiğiniz AB ülkesinde dava açabileceğiniz anlamına
          gelir.
        </p>

        <h2>20. Uyuşmazlık çözümü</h2>
        <h3>Resmi olmayan müzakereler</h3>
        <p>
          Sizin veya bizim tarafımızdan (münferiden bir &apos;Taraf&apos; ve topluca
          &apos;Taraflar&apos;) açılan bu Yasal Koşullarla ilgili herhangi bir uyuşmazlık,
          ihtilaf veya talebin (her biri bir &apos;Uyuşmazlık&apos; ve topluca,
          &apos;Uyuşmazlıklar&apos;) çözümünü hızlandırmak ve maliyetini kontrol etmek için
          Taraflar, tahkim başlatmadan önce en az otuz (30) gün boyunca herhangi bir
          Uyuşmazlığı (aşağıda açıkça belirtilen Uyuşmazlıklar hariç) resmi olmayan bir
          şekilde müzakere etmeye ilk önce çalışmayı kabul ederler. Bu tür resmi olmayan
          müzakereler, bir Taraftan diğer Tarafa yazılı bildirim üzerine başlar.
        </p>
        <h3>Bağlayıcı tahkim</h3>
        <p>
          Bu Yasal Koşullara Taraflar arasındaki ilişkilerden kaynaklanan herhangi bir
          uyuşmazlık, Strazburg merkezli Avrupa Tahkim Merkezi&apos;nin bir parçası olan
          Avrupa Tahkim Mahkemesi&apos;nin Tahkim ve İç Kurallarına göre seçilecek bir hakem
          tarafından karara bağlanacak ve tahkim başvurusunun yapıldığı tarihte yürürlükte
          olan ve bu maddenin kabulü kabul anlamına gelen kurallar uygulanacaktır. Tahkim
          yeri Amsterdam, Hollanda olacaktır. Yargılama dili İngilizce olacaktır. Geçerli
          maddi hukuk kuralları Hollanda hukuku olacaktır.
        </p>
        <h3>Kısıtlamalar</h3>
        <p>
          Taraflar, herhangi bir tahkimin Taraflar arasındaki Uyuşmazlıkla bireysel olarak
          sınırlı olacağını kabul eder. Yasaların izin verdiği tam ölçüde, (a) hiçbir tahkim
          başka bir işlemle birleştirilmeyecektir; (b) herhangi bir Uyuşmazlığın toplu dava
          temelinde tahkime götürülmesi veya toplu dava prosedürlerinin kullanılması için
          hiçbir hak veya yetki yoktur; ve (c) herhangi bir Uyuşmazlığın genel halk veya başka
          kişiler adına temsilci sıfatıyla açılması için hiçbir hak veya yetki yoktur.
        </p>
        <h3>Resmi olmayan müzakerelere ve tahkime istisnalar</h3>
        <p>
          Taraflar, aşağıdaki Uyuşmazlıkların resmi olmayan müzakereler ve bağlayıcı tahkim
          ile ilgili yukarıdaki hükümlere tabi olmadığını kabul eder: (a) bir Tarafın fikri
          mülkiyet haklarının herhangi birinin geçerliliği ile ilgili olarak bunları yürürlüğe
          koymaya veya korumaya çalışan herhangi bir Uyuşmazlık; (b) hırsızlık, korsanlık,
          gizlilik ihlali veya yetkisiz kullanım iddialarıyla ilgili veya bunlardan
          kaynaklanan herhangi bir Uyuşmazlık; ve (c) ihtiyati tedbir için herhangi bir
          talep. Bu hüküm yasadışı veya uygulanamaz bulunursa, hiçbir Taraf, bu hükmün
          yasadışı veya uygulanamaz bulunan bölümüne giren herhangi bir Uyuşmazlığı tahkim
          etmeyi seçmeyecek ve bu tür Uyuşmazlık, yukarıda yargı yetkisi için listelenen
          mahkemeler içinde yetkili bir mahkeme tarafından karara bağlanacaktır ve Taraflar,
          o mahkemenin kişisel yargı yetkisine boyun eğmeyi kabul eder.
        </p>

        <h2>21. Düzeltmeler</h2>
        <p>
          Hizmetlerde, açıklamalar, fiyatlandırma, kullanılabilirlik ve diğer çeşitli bilgiler
          dahil olmak üzere yazım hataları, yanlışlıklar veya eksiklikler içeren bilgiler
          olabilir. Hizmetlerdeki herhangi bir hatayı, yanlışlığı veya eksikliği düzeltme ve
          bilgileri herhangi bir zamanda, önceden bildirimde bulunmadan değiştirme veya
          güncelleme hakkını saklı tutarız.
        </p>

        <h2>22. Sorumluluk reddi</h2>
        <p>
          HİZMETLER OLDUĞU GİBİ VE MEVCUT OLDUĞU GİBİ SAĞLANMAKTADIR. HİZMETLERİ KULLANIMINIZIN
          KENDİ SORUMLULUĞUNUZDA OLACAĞINI KABUL EDERSİNİZ. YASALARIN İZİN VERDİĞİ ÖLÇÜDE,
          HİZMETLER VE BUNLARI KULLANIMINIZ İLE BAĞLANTILI OLARAK AÇIK VEYA ZIMNİ TÜM
          GARANTİLERİ, SATILABİLİRLİK, BELİRLİ BİR AMACA UYGUNLUK VE İHLAL ETMEME ZIMNİ
          GARANTİLERİ DAHİL ANCAK BUNLARLA SINIRLI OLMAMAK ÜZERE REDDEDİYORUZ. HİZMETLERİN
          İÇERİĞİNİN VEYA HİZMETLERE BAĞLI HERHANGİ BİR WEB SİTESİNİN VEYA MOBİL UYGULAMANIN
          İÇERİĞİNİN DOĞRULUĞU VEYA EKSİKSİZLİĞİ HAKKINDA HİÇBİR GARANTİ VEYA BEYANDA
          BULUNMUYORUZ VE (1) İÇERİK VE MATERYALLERDEKİ HATALAR, YANLIŞLIKLAR VEYA
          YANLIŞLIKLAR, (2) HİZMETLERE ERİŞİMİNİZ VE BUNLARI KULLANIMINIZDAN KAYNAKLANAN
          HERHANGİ BİR NİTELİKTEKİ KİŞİSEL YARALANMA VEYA MAL HASARI, (3) GÜVENLİ
          SUNUCULARIMIZA VE/VEYA ORADA SAKLANAN HERHANGİ BİR VE TÜM KİŞİSEL BİLGİLERE VE/VEYA
          MALİ BİLGİLERE YETKİSİZ ERİŞİM VEYA KULLANIM, (4) HİZMETLERE VEYA HİZMETLERDEN
          İLETİMİN HERHANGİ BİR KESİNTİSİ VEYA DURDURULMASI, (5) HERHANGİ BİR ÜÇÜNCÜ TARAF
          TARAFINDAN HİZMETLERE VEYA HİZMETLER ARACILIĞIYLA İLETİLEBİLECEK HERHANGİ BİR HATA,
          VİRÜS, TRUVA ATI VEYA BENZERLERİ VE/VEYA (6) HERHANGİ BİR İÇERİK VE MATERYALDEKİ
          HATALAR VEYA EKSİKLİKLER VEYA HİZMETLER ARACILIĞIYLA YAYINLANAN, İLETİLEN VEYA
          BAŞKA BİR ŞEKİLDE KULLANIMA SUNULAN HERHANGİ BİR İÇERİĞİN KULLANIMI SONUCUNDA
          UĞRANAN HERHANGİ BİR NİTELİKTEKİ KAYIP VEYA HASAR İÇİN HİÇBİR SORUMLULUK
          ÜSTLENMİYORUZ. HİZMETLER ARACILIĞIYLA BİR ÜÇÜNCÜ TARAF TARAFINDAN REKLAMI YAPILAN
          VEYA SUNULAN HERHANGİ BİR ÜRÜN VEYA HİZMET, BAĞLANTILI HERHANGİ BİR WEB SİTESİ VEYA
          HERHANGİ BİR BANNER VEYA DİĞER REKLAMDA YER ALAN HERHANGİ BİR WEB SİTESİ VEYA MOBİL
          UYGULAMA İÇİN GARANTİ VERMİYORUZ, ONAYLAMIYORUZ, GARANTİ ETMİYORUZ VEYA SORUMLULUK
          ÜSTLENMİYORUZ VE SİZ VE ÜRÜN VEYA HİZMETLERİN HERHANGİ BİR ÜÇÜNCÜ TARAF SAĞLAYICISI
          ARASINDAKİ HERHANGİ BİR İŞLEMİ İZLEMEKTEN BİZ TARAF OLMAYACAĞIMIZ VEYA HERHANGİ BİR
          ŞEKİLDE SORUMLU OLMAYACAĞIMIZ. HERHANGİ BİR MEDYA ARACILIĞIYLA VEYA HERHANGİ BİR
          ORTAMDA BİR ÜRÜN VEYA HİZMETİN SATIN ALINMASINDA OLDUĞU GİBİ, EN İYİ MUHAKEMENİZİ
          KULLANMALI VE UYGUN YERLERDE DİKKATLİ OLMALISINIZ.
        </p>

        <h2>23. Sorumluluk sınırlamaları</h2>
        <p>
          HİÇBİR DURUMDA BİZ VEYA YÖNETİCİLERİMİZ, ÇALIŞANLARIMIZ VEYA TEMSİLCİLERİMİZ, KAYIP
          KAR, KAYIP GELİR, VERİ KAYBI VEYA HİZMETLERİ KULLANIMINIZDAN KAYNAKLANAN DİĞER
          HASARLAR DAHİL HERHANGİ BİR DOĞRUDAN, DOLAYLI, SONUÇSAL, ÖRNEK NİTELİĞİNDEKİ, ARIZİ,
          ÖZEL VEYA CEZA İÇEREN HASARLAR İÇİN, BÖYLE HASARLARIN OLASILIĞI HAKKINDA
          BİLGİLENDİRİLMİŞ OLSAK BİLE, SİZE VEYA HERHANGİ BİR ÜÇÜNCÜ TARAFA SORUMLU
          OLMAYACAĞIZ. BURADA YER ALAN AKSİNE HERHANGİ BİR ŞEYE BAKILMAKSIZIN, SİZE KARŞI
          HERHANGİ BİR NEDENLE VE EYLEMİN BİÇİMİ NE OLURSA OLSUN SORUMLULUĞUMUZ, HER ZAMAN,
          HERHANGİ BİR DAVA NEDENİNİN ORTAYA ÇIKMASINDAN ÖNCEKİ ALTI (6) AYLIK SÜRE BOYUNCA
          BİZE ÖDEDİĞİNİZ TUTAR (VARSA) VEYA 250 € (HANGİSİ DAHA AZSA) İLE SINIRLI OLACAKTIR.
          BELİRLİ ABD EYALET YASALARI VE ULUSLARARASI YASALAR, ZIMNİ GARANTİLERE
          SINIRLAMALAR VEYA BELİRLİ HASARLARIN HARİÇ TUTULMASI VEYA SINIRLANDIRILMASINA İZİN
          VERMEZ. BU YASALAR SİZE UYGULANIYORSA, YUKARIDAKİ SORUMLULUK REDLERİNİN VEYA
          SINIRLAMALARIN BAZILARI VEYA TÜMÜ SİZE UYGULANMAYABİLİR VE EK HAKLARA SAHİP
          OLABİLİRSİNİZ.
        </p>

        <h2>24. Tazminat</h2>
        <p>
          (1) Katkılarınız; (2) Hizmetlerin kullanımı; (3) bu Yasal Koşulların ihlali; (4) bu
          Yasal Koşullarda belirtilen beyan ve garantilerinizin herhangi birinin ihlali; (5)
          fikri mülkiyet hakları dahil ancak bunlarla sınırlı olmamak üzere bir üçüncü tarafın
          haklarının ihlali; veya (6) Hizmetler aracılığıyla bağlantı kurduğunuz Hizmetlerin
          herhangi bir başka kullanıcısına yönelik herhangi bir bariz zararlı eylem nedeniyle
          veya bunlardan kaynaklanan herhangi bir üçüncü taraf tarafından yapılan makul
          avukatlık ücretleri ve giderleri dahil herhangi bir kayıp, hasar, sorumluluk, talep
          veya talebe karşı, bağlı kuruluşlarımız ve sırasıyla yetkililerimiz, temsilcilerimiz,
          ortaklarımız ve çalışanlarımız dahil olmak üzere bizi savunmayı, tazmin etmeyi ve
          zararsız tutmayı kabul edersiniz. Yukarıdakine bakılmaksızın, bizi tazmin etmenizin
          gerekli olduğu herhangi bir konuda münhasır savunmayı ve kontrolü, sizin masrafınız
          karşılığında üstlenme hakkını saklı tutarız ve bu tür taleplerin savunmasında bize
          sizin masrafınız karşılığında işbirliği yapmayı kabul edersiniz. Bu tazminata tabi
          olan herhangi bir talep, dava veya yargılamadan haberdar olduğumuzda size bildirmek
          için makul çaba göstereceğiz.
        </p>

        <h2>25. Kullanıcı verileri</h2>
        <p>
          Hizmetlerin performansını yönetmek amacıyla Hizmetlere ilettiğiniz belirli verileri
          ve Hizmetleri kullanımınızla ilgili verileri saklayacağız. Verilerin düzenli rutin
          yedeklemelerini yapsak da, ilettiğiniz veya Hizmetleri kullanarak yaptığınız
          herhangi bir faaliyetle ilgili tüm verilerden yalnızca siz sorumlusunuz. Bu tür
          verilerin herhangi bir kaybı veya bozulması için size karşı hiçbir sorumluluğumuz
          olmayacağını kabul edersiniz ve bu tür verilerin kaybı veya bozulmasından
          kaynaklanan bize karşı herhangi bir dava hakkından feragat edersiniz.
        </p>

        <h2>26. Elektronik iletişim, işlemler ve imzalar</h2>
        <p>
          Hizmetleri ziyaret etmek, bize e-postalar göndermek ve çevrimiçi formları doldurmak
          elektronik iletişim oluşturur. Elektronik iletişimleri almayı kabul edersiniz ve
          size elektronik olarak, e-posta yoluyla ve Hizmetlerde sağladığımız tüm
          sözleşmelerin, bildirimlerin, açıklamaların ve diğer iletişimlerin, bu tür
          iletişimin yazılı olması gerektiği yönündeki herhangi bir yasal gereksinimi karşıladığını
          kabul edersiniz. ELEKTRONİK İMZALAR, SÖZLEŞMELER, SİPARİŞLER VE DİĞER KAYITLARIN
          KULLANIMINA VE TARAFIMIZCA VEYA HİZMETLER ARACILIĞIYLA BAŞLATILAN VEYA TAMAMLANAN
          İŞLEMLERİN BİLDİRİMLERİNİN, POLİTİKALARININ VE KAYITLARININ ELEKTRONİK OLARAK
          TESLİMİNE BURADA KABUL EDERSİNİZ. Herhangi bir yargı bölgesindeki herhangi bir
          tüzük, yönetmelik, kural, talimat veya diğer yasalar uyarınca, orijinal bir imza
          veya elektronik olmayan kayıtların teslim edilmesini veya saklanmasını veya
          ödemelerin veya kredilerin elektronik araçlardan başka herhangi bir yolla
          verilmesini gerektiren herhangi bir hak veya gereksinimden feragat edersiniz.
        </p>

        <h2>27. California kullanıcıları ve sakinleri</h2>
        <p>
          Bizimle ilgili herhangi bir şikayet tatmin edici bir şekilde çözülmezse, California
          Tüketici İşleri Departmanı Tüketici Hizmetleri Bölümü&apos;nün Şikayet Yardım
          Birimi&apos;ne yazılı olarak 1625 North Market Blvd., Suite N 112, Sacramento,
          California 95834 adresinden veya (800) 952-5210 veya (916) 445-1254 telefon
          numarasından ulaşabilirsiniz.
        </p>

        <h2>28. Çeşitli hükümler</h2>
        <p>
          Bu Yasal Koşullar ve Hizmetlerde veya Hizmetlerle ilgili olarak bizim tarafımızdan
          yayınlanan herhangi bir politika veya işletim kuralı, sizinle bizim aramızdaki tüm
          sözleşmeyi ve anlayışı oluşturur. Bu Yasal Koşulların herhangi bir hakkını veya
          hükmünü uygulamamamız veya yürürlüğe koymamamız, bu tür bir haktan veya hükümden
          feragat anlamına gelmez. Bu Yasal Koşullar, yasaların izin verdiği tam ölçüde
          işler. Tüm haklarımızı ve yükümlülüklerimizi herhangi bir zamanda başkalarına
          devredebiliriz. Makul kontrolümüz dışındaki herhangi bir nedenden kaynaklanan
          herhangi bir kayıp, hasar, gecikme veya hareketsizlikten sorumlu veya yükümlü
          olmayacağız. Bu Yasal Koşulların herhangi bir hükmü veya hükmünün bir kısmı yasadışı,
          geçersiz veya uygulanamaz olarak belirlenirse, o hüküm veya hükmün bir kısmı, bu
          Yasal Koşullardan ayrılabilir kabul edilir ve kalan hükümlerin geçerliliğini ve
          uygulanabilirliğini etkilemez. Bu Yasal Koşullar veya Hizmetlerin kullanımı sonucu
          olarak sizinle bizim aramızda hiçbir ortak girişim, ortaklık, istihdam veya
          temsilcilik ilişkisi oluşturulmamıştır. Bu Yasal Koşulların bunları hazırlamış olmamız
          nedeniyle aleyhimize yorumlanmayacağını kabul edersiniz. Bu Yasal Koşulların
          elektronik biçimine ve bu Yasal Koşulları uygulamak için tarafların imzalanmamasına
          dayalı olarak sahip olabileceğiniz tüm savunmalardan feragat edersiniz.
        </p>

        <h2>29. Hizmetler</h2>
        <p>
          Safolio, kullanıcıların birden fazla varlık sınıfı ve finansal kurum arasında
          kişisel yatırım portföylerini izlemelerine, birleştirmelerine ve analiz etmelerine
          olanak tanıyan bir hizmet olarak yazılım (SaaS) platformudur. Platform,
          kullanıcıların hisse senetleri, borsa yatırım fonları (ETF&apos;ler), fonlar,
          tahviller, kripto paralar, nakit pozisyonları ve diğer finansal araçlar gibi
          varlıklarını kaydetmelerine ve izlemelerine olanak tanır. Safolio, portföy
          değerlemelerini, geçmiş performansı, varlık tahsis dökümlerini ve riskle ilgili
          analizleri sunmak için kullanıcı tarafından sağlanan girdilerden ve üçüncü taraf
          veri kaynaklarından portföy verilerini toplar. Safolio bir alım satım platformu
          değildir, işlem yapmaz, müşteri fonu tutmaz ve yatırım tavsiyesi vermez. Platformda
          görüntülenen tüm bilgiler yalnızca bilgilendirme ve analiz amaçlıdır. Kullanıcılar,
          yatırım kararlarından ve platforma girdikleri veya bağladıkları verilerin
          doğruluğundan tek başına sorumlu olmaya devam ederler. Platform, performans
          karşılaştırmaları, hipotetik senaryo (&ldquo;ne olursa&rdquo;) hesaplamaları ve
          portföy risk göstergeleri gibi analitik araçları içerebilir. Bu araçlar matematiksel
          modellere ve geçmiş veya simüle edilmiş verilere dayanmaktadır ve kişiselleştirilmiş
          finansal tavsiye veya gelecekteki performansın garantisi oluşturmaz. Safolio yalnızca
          bir portföy izleme ve analiz aracı olarak çalışır ve broker, saklama, varlık
          yöneticisi veya finansal aracı olarak hareket etmez.
        </p>

        <h2>30. Veri doğruluğu, garanti verilmemesi ve sorumluluk sınırlaması</h2>
        <p>
          Safolio, kullanıcı tarafından sağlanan verilere, üçüncü taraf veri kaynaklarına ve
          otomatik işleme sistemlerine dayalı portföy izleme, toplama ve analitik araçlar
          sağlar. Platformda görüntülenen tüm veriler, fiyatlar, değerlemeler, performans
          ölçümleri, döviz kurları, kurumsal işlemler ve türev analizler dahil ancak bunlarla
          sınırlı olmamak üzere, yalnızca bilgilendirme ve portföy izleme amaçlı sağlanır.
        </p>

        <h2>31. Garanti verilmemesi</h2>
        <p>
          Platform ve aracılığıyla kullanılabilen tüm veriler &ldquo;olduğu gibi&rdquo; ve
          &ldquo;mevcut olduğu gibi&rdquo; sağlanır. Geçerli yasaların izin verdiği tam
          ölçüde, Safolio, doğruluk, eksiksizlik, güvenilirlik, zamanındalık, satılabilirlik,
          belirli bir amaca uygunluk, ihlal etmeme veya kullanılabilirliğin zımni garantileri
          dahil ancak bunlarla sınırlı olmamak üzere açık, zımni, yasal veya başka türlü
          herhangi bir türden tüm garantileri açıkça reddeder. Safolio şunları garanti etmez:
        </p>
        <ul>
          <li>görüntülenen verilerin doğru, eksiksiz, güncel veya hatasız olacağını;</li>
          <li>platformun kesintisiz veya gecikmelerden, kusurlardan veya teknik sorunlardan arınmış olacağını;</li>
          <li>verilerdeki herhangi bir hata veya tutarsızlığın tanımlanacağını veya düzeltileceğini; veya</li>
          <li>platformun kullanımının belirli bir finansal sonuca yol açacağını.</li>
        </ul>
        <p>
          Piyasa verileri ve finansal bilgiler gecikmeli, tahmini, toplu, ayarlanmış veya yanlış
          olabilir ve Safolio, bu tür verilerin karar verme amaçları için kalitesi veya
          uygunluğu hakkında hiçbir beyanda bulunmaz.
        </p>

        <h2>32. Kullanıcı sorumluluğu ve doğrulama</h2>
        <p>
          Kullanıcılar, herhangi bir finansal, yatırım, vergi veya yasal karar için
          dayanmadan önce tüm verileri inceleme, doğrulama ve geçerliliğini kontrol etmekten
          yalnızca kendilerinin sorumlu olduğunu kabul ve onaylar. Kullanıcılar, brokerlar,
          borsalar, ihraççılar, resmi piyasa veri sağlayıcıları veya lisanslı profesyoneller
          dahil ancak bunlarla sınırlı olmamak üzere yetkili ve güvenilir harici kaynakları
          kullanarak tüm ilgili bilgileri bağımsız olarak doğrulamalıdır. Safolio, herhangi
          bir varlığın, stratejinin veya işlemin uygunluğu hakkında yatırım tavsiyesi,
          kişiselleştirilmiş öneriler veya güvenceler sağlamaz.
        </p>

        <h2>33. Bağlı hesaplar ve üçüncü taraf veri kaynakları</h2>
        <p>
          Safolio, kullanıcıların üçüncü taraf hizmet sağlayıcıları aracılığıyla harici banka
          hesaplarını, aracı kurum hesaplarını veya diğer finansal hesapları bağlamalarına
          izin verebilir. Bu tür bağlantılar etkinleştirildiğinde, Safolio, portföy izleme ve
          analitik amaçlar için yalnızca salt okunur olarak hesap bilgilerine erişir. Safolio,
          bağlı hesaplarda işlem başlatmaz, fon hareketi yapmaz, sipariş vermez veya hesap
          ayarlarını değiştirmez. Bağlı hesaplardan alınan veriler, üçüncü taraf kurumlar ve
          aracılar tarafından sağlanır ve eksik, gecikmeli, toplu, yeniden biçimlendirilmiş
          veya yanlış olabilir. Safolio, bu tür üçüncü taraflardan elde edilen verilerin
          doğruluğunu, kullanılabilirliğini veya sürekliliğini kontrol etmez, doğrulamaz veya
          garanti etmez. Safolio şunlardan sorumlu olmayacaktır:
        </p>
        <ul>
          <li>bankalardan, brokerlardan veya veri toplama sağlayıcılarından kaynaklanan hatalardan, eksikliklerden veya yanlışlıklardan;</li>
          <li>bağlı hesap hizmetlerinin geçici veya kalıcı olarak kullanılamamasından;</li>
          <li>üçüncü taraf API&apos;lerinde, kimlik doğrulama yöntemlerinde veya veri erişim izinlerinde yapılan değişikliklerden;</li>
          <li>kullanıcı tarafından bağlı hesap verilerine dayanılarak alınan herhangi bir karardan.</li>
        </ul>
        <p>
          Kullanıcılar, herhangi bir finansal, yatırım, vergi veya yasal karar için
          dayanmadan önce bağlı hesaplar aracılığıyla elde edilen tüm bilgileri inceleme ve
          doğrulamaktan yalnızca kendilerinin sorumlu olmaya devam ederler.
        </p>

        <h2>34. Kullanıcı içeriği</h2>
        <p>
          Platform aracılığıyla kullanılabilir hale getirilen kullanıcı tarafından oluşturulan
          herhangi bir içerik, iletişim, açıklama veya paylaşılan bilgi, profesyonel tavsiye
          veya öneri olarak yorumlanmamalıdır. Safolio, kullanıcı tarafından oluşturulan
          içeriği incelemez, onaylamaz veya desteklemez ve bu tür içerik için herhangi bir
          sorumluluk üstlenmez. Safolio, bu kısıtlamaları ihlal eden veya platformu kullanımı
          Safolio&apos;yu düzenleyici, yasal veya itibar riski altına alabilen kullanıcılar
          için platforma erişimi kısıtlama, askıya alma veya sonlandırma hakkını kendi
          takdirine bağlı olarak saklı tutar. Safolio, platformun düzenlenmiş finansal
          faaliyetler için bir pazar yeri, danışma forumu veya dağıtım kanalı olarak
          kullanılmasına izin vermez.
        </p>

        <h2>35. Bize ulaşın</h2>
        <p>
          Hizmetler ile ilgili bir şikayeti çözmek veya Hizmetlerin kullanımı hakkında daha
          fazla bilgi almak için lütfen aşağıdaki adresten bizimle iletişime geçin:
        </p>
        <p>
          Safolio B.V.
          <br />
          2-A Abtstraat
          <br />
          Utrecht, Utrecht 3512 AB
          <br />
          Hollanda
          <br />
          <a href="mailto:info@safolio.com">info@safolio.com</a>
        </p>
      </LegalLayout>
    );
  }

  return (
    <LegalLayout title={t("legal3")}>
      <p className="text-sm text-ink3">Last updated February 01, 2026</p>

      <h2>Agreement to our legal terms</h2>
      <p>
        We are Safolio B.V., doing business as Safolio (&apos;Company&apos;, &apos;we&apos;,
        &apos;us&apos;, or &apos;our&apos;), a company registered in the Netherlands at 2-A
        Abtstraat, Utrecht, Utrecht 3512 AB. Our VAT number is NL868276042B01.
      </p>
      <p>
        We operate the website <a href="https://safolio.com">https://safolio.com</a> (the
        &apos;Site&apos;), the mobile application Safolio (the &apos;App&apos;), as well as any
        other related products and services that refer or link to these legal terms (the
        &apos;Legal Terms&apos;) (collectively, the &apos;Services&apos;).
      </p>
      <p>
        You can contact us by email at{" "}
        <a href="mailto:info@safolio.com">info@safolio.com</a> or by mail to 2-A Abtstraat,
        Utrecht, Utrecht 3512 AB, Netherlands.
      </p>
      <p>
        These Legal Terms constitute a legally binding agreement made between you, whether
        personally or on behalf of an entity (&apos;you&apos;), and Safolio B.V., concerning
        your access to and use of the Services. You agree that by accessing the Services, you
        have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO
        NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING
        THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
      </p>
      <p>
        We will provide you with prior notice of any scheduled changes to the Services you are
        using. The modified Legal Terms will become effective upon posting or notifying you by
        noreply@safolio.com, as stated in the email message. By continuing to use the Services
        after the effective date of any changes, you agree to be bound by the modified terms.
      </p>
      <p>
        The Services are intended for users who are at least 18 years old. Persons under the
        age of 18 are not permitted to use or register for the Services.
      </p>
      <p>We recommend that you print a copy of these Legal Terms for your records.</p>

      <h2>Table of Contents</h2>
      <ol>
        <li>Our services</li>
        <li>Intellectual property rights</li>
        <li>User representations</li>
        <li>User registration</li>
        <li>Purchases and payment</li>
        <li>Subscriptions</li>
        <li>Prohibited activities</li>
        <li>User generated contributions</li>
        <li>Contribution licence</li>
        <li>Guidelines for reviews</li>
        <li>Mobile application licence</li>
        <li>Social media</li>
        <li>Third-party websites and content</li>
        <li>Advertisers</li>
        <li>Services management</li>
        <li>Privacy policy</li>
        <li>Term and termination</li>
        <li>Modifications and interruptions</li>
        <li>Governing law</li>
        <li>Dispute resolution</li>
        <li>Corrections</li>
        <li>Disclaimer</li>
        <li>Limitations of liability</li>
        <li>Indemnification</li>
        <li>User data</li>
        <li>Electronic communications, transactions, and signatures</li>
        <li>California users and residents</li>
        <li>Miscellaneous</li>
        <li>Services</li>
        <li>Data accuracy, no warranties, and limitation of liability</li>
        <li>No warranties</li>
        <li>User responsibility and verification</li>
        <li>Connected accounts and third-party data sources</li>
        <li>User content</li>
        <li>Contact us</li>
      </ol>

      <h2>1. Our services</h2>
      <p>
        The information provided when using the Services is not intended for distribution to or
        use by any person or entity in any jurisdiction or country where such distribution or
        use would be contrary to law or regulation or which would subject us to any registration
        requirement within such jurisdiction or country. Accordingly, those persons who choose
        to access the Services from other locations do so on their own initiative and are
        solely responsible for compliance with local laws, if and to the extent local laws are
        applicable.
      </p>
      <p>
        The Services are not tailored to comply with industry-specific regulations (Health
        Insurance Portability and Accountability Act (HIPAA), Federal Information Security
        Management Act (FISMA), etc.), so if your interactions would be subjected to such laws,
        you may not use the Services. You may not use the Services in a way that would violate
        the Gramm-Leach-Bliley Act (GLBA).
      </p>

      <h2>2. Intellectual property rights</h2>
      <h3>Our intellectual property</h3>
      <p>
        We are the owner or the licensee of all intellectual property rights in our Services,
        including all source code, databases, functionality, software, website designs, audio,
        video, text, photographs, and graphics in the Services (collectively, the
        &apos;Content&apos;), as well as the trademarks, service marks, and logos contained
        therein (the &apos;Marks&apos;).
      </p>
      <p>
        Our Content and Marks are protected by copyright and trademark laws (and various other
        intellectual property rights and unfair competition laws) and treaties in the United
        States and around the world.
      </p>
      <p>
        The Content and Marks are provided in or through the Services &apos;AS IS&apos; for
        your personal, non-commercial use or internal business purpose only.
      </p>
      <h3>Your use of our Services</h3>
      <p>
        Subject to your compliance with these Legal Terms, including the &apos;Prohibited
        Activities&apos; section below, we grant you a non-exclusive, non-transferable,
        revocable licence to:
      </p>
      <ul>
        <li>access the Services; and</li>
        <li>
          download or print a copy of any portion of the Content to which you have properly
          gained access,
        </li>
      </ul>
      <p>solely for your personal, non-commercial use or internal business purpose.</p>
      <p>
        Except as set out in this section or elsewhere in our Legal Terms, no part of the
        Services and no Content or Marks may be copied, reproduced, aggregated, republished,
        uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed,
        sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without
        our express prior written permission.
      </p>
      <p>
        If you wish to make any use of the Services, Content, or Marks other than as set out in
        this section or elsewhere in our Legal Terms, please address your request to:{" "}
        <a href="mailto:info@safolio.com">info@safolio.com</a>. If we ever grant you the
        permission to post, reproduce, or publicly display any part of our Services or Content,
        you must identify us as the owners or licensors of the Services, Content, or Marks and
        ensure that any copyright or proprietary notice appears or is visible on posting,
        reproducing, or displaying our Content.
      </p>
      <p>We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.</p>
      <p>
        Any breach of these Intellectual Property Rights will constitute a material breach of
        our Legal Terms and your right to use our Services will terminate immediately.
      </p>
      <h3>Your submissions and contributions</h3>
      <p>
        Please review this section and the &apos;Prohibited Activities&apos; section carefully
        prior to using our Services to understand the (a) rights you give us and (b)
        obligations you have when you post or upload any content through the Services.
      </p>
      <p>
        <strong>Submissions:</strong> By directly sending us any question, comment, suggestion,
        idea, feedback, or other information about the Services (&apos;Submissions&apos;), you
        agree to assign to us all intellectual property rights in such Submission. You agree
        that we shall own this Submission and be entitled to its unrestricted use and
        dissemination for any lawful purpose, commercial or otherwise, without acknowledgment
        or compensation to you.
      </p>
      <p>
        <strong>Contributions:</strong> The Services may invite you to chat, contribute to, or
        participate in blogs, message boards, online forums, and other functionality during
        which you may create, submit, post, display, transmit, publish, distribute, or
        broadcast content and materials to us or through the Services, including but not
        limited to text, writings, video, audio, photographs, music, graphics, comments,
        reviews, rating suggestions, personal information, or other material
        (&apos;Contributions&apos;). Any Submission that is publicly posted shall also be
        treated as a Contribution.
      </p>
      <p>
        You understand that Contributions may be viewable by other users of the Services and
        possibly through third-party websites.
      </p>
      <p>
        <strong>When you post Contributions, you grant us a licence (including use of your
        name, trademarks, and logos):</strong>{" "}
        By posting any Contributions, you grant us an unrestricted, unlimited, irrevocable,
        perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and
        licence to: use, copy, reproduce, distribute, sell, resell, publish, broadcast,
        retitle, store, publicly perform, publicly display, reformat, translate, excerpt (in
        whole or in part), and exploit your Contributions (including, without limitation, your
        image, name, and voice) for any purpose, commercial, advertising, or otherwise, to
        prepare derivative works of, or incorporate into other works, your Contributions, and
        to sublicence the licences granted in this section. Our use and distribution may occur
        in any media formats and through any media channels.
      </p>
      <p>
        This licence includes our use of your name, company name, and franchise name, as
        applicable, and any of the trademarks, service marks, trade names, logos, and personal
        and commercial images you provide.
      </p>
      <p>
        <strong>You are responsible for what you post or upload:</strong> By sending us
        Submissions and/or posting Contributions through any part of the Services or making
        Contributions accessible through the Services by linking your account through the
        Services to any of your social networking accounts, you:
      </p>
      <ul>
        <li>
          confirm that you have read and agree with our &apos;Prohibited Activities&apos; and
          will not post, send, publish, upload, or transmit through the Services any Submission
          nor post any Contribution that is illegal, harassing, hateful, harmful, defamatory,
          obscene, bullying, abusive, discriminatory, threatening to any person or group,
          sexually explicit, false, inaccurate, deceitful, or misleading;
        </li>
        <li>
          to the extent permissible by applicable law, waive any and all moral rights to any
          such Submission and/or Contribution;
        </li>
        <li>
          warrant that any such Submission and/or Contributions are original to you or that you
          have the necessary rights and licences to submit such Submissions and/or
          Contributions and that you have full authority to grant us the above-mentioned rights
          in relation to your Submissions and/or Contributions; and
        </li>
        <li>
          warrant and represent that your Submissions and/or Contributions do not constitute
          confidential information.
        </li>
      </ul>
      <p>
        You are solely responsible for your Submissions and/or Contributions and you expressly
        agree to reimburse us for any and all losses that we may suffer because of your breach
        of (a) this section, (b) any third party&apos;s intellectual property rights, or (c)
        applicable law.
      </p>
      <p>
        <strong>We may remove or edit your Content:</strong> Although we have no obligation to
        monitor any Contributions, we shall have the right to remove or edit any Contributions
        at any time without notice if in our reasonable opinion we consider such Contributions
        harmful or in breach of these Legal Terms. If we remove or edit any such Contributions,
        we may also suspend or disable your account and report you to the authorities.
      </p>

      <h2>3. User representations</h2>
      <p>
        By using the Services, you represent and warrant that: (1) all registration information
        you submit will be true, accurate, current, and complete; (2) you will maintain the
        accuracy of such information and promptly update such registration information as
        necessary; (3) you have the legal capacity and you agree to comply with these Legal
        Terms; (4) you are not a minor in the jurisdiction in which you reside; (5) you will
        not access the Services through automated or non-human means, whether through a bot,
        script or otherwise; (6) you will not use the Services for any illegal or unauthorised
        purpose; and (7) your use of the Services will not violate any applicable law or
        regulation.
      </p>
      <p>
        If you provide any information that is untrue, inaccurate, not current, or incomplete,
        we have the right to suspend or terminate your account and refuse any and all current
        or future use of the Services (or any portion thereof).
      </p>

      <h2>4. User registration</h2>
      <p>
        You may be required to register to use the Services. You agree to keep your password
        confidential and will be responsible for all use of your account and password. We
        reserve the right to remove, reclaim, or change a username you select if we determine,
        in our sole discretion, that such username is inappropriate, obscene, or otherwise
        objectionable.
      </p>

      <h2>5. Purchases and payment</h2>
      <p>We accept the following forms of payment:</p>
      <ul>
        <li>Visa</li>
        <li>Mastercard</li>
        <li>American Express</li>
        <li>PayPal</li>
      </ul>
      <p>
        You agree to provide current, complete, and accurate purchase and account information
        for all purchases made via the Services. You further agree to promptly update account
        and payment information, including email address, payment method, and payment card
        expiration date, so that we can complete your transactions and contact you as needed.
        Sales tax will be added to the price of purchases as deemed required by us. We may
        change prices at any time. All payments shall be in USD, EUR, TRY.
      </p>
      <p>
        You agree to pay all charges at the prices then in effect for your purchases and any
        applicable shipping fees, and you authorise us to charge your chosen payment provider
        for any such amounts upon placing your order. We reserve the right to correct any
        errors or mistakes in pricing, even if we have already requested or received payment.
      </p>
      <p>
        We reserve the right to refuse any order placed through the Services. We may, in our
        sole discretion, limit or cancel quantities purchased per person, per household, or per
        order. These restrictions may include orders placed by or under the same customer
        account, the same payment method, and/or orders that use the same billing or shipping
        address. We reserve the right to limit or prohibit orders that, in our sole judgement,
        appear to be placed by dealers, resellers, or distributors.
      </p>

      <h2>6. Subscriptions</h2>
      <h3>Billing and Renewal</h3>
      <p>
        Your subscription will continue and automatically renew unless cancelled. You consent
        to our charging your payment method on a recurring basis without requiring your prior
        approval for each recurring charge, until such time as you cancel the applicable order.
        The length of your billing cycle will depend on the type of subscription plan you chose
        when you subscribed to the Services.
      </p>
      <h3>Free Trial</h3>
      <p>
        We offer a 7-day free trial to new users who register with the Services. The account
        will be charged according to the user&apos;s chosen subscription at the end of the free
        trial.
      </p>
      <h3>Cancellation</h3>
      <p>
        You can cancel your subscription at any time by contacting us using the contact
        information provided below. Your cancellation will take effect at the end of the
        current paid term. If you have any questions or are unsatisfied with our Services,
        please email us at <a href="mailto:info@safolio.com">info@safolio.com</a>.
      </p>
      <h3>Fee Changes</h3>
      <p>
        We may, from time to time, make changes to the subscription fee and will communicate
        any price changes to you in accordance with applicable law.
      </p>

      <h2>7. Prohibited activities</h2>
      <p>
        You may not access or use the Services for any purpose other than that for which we
        make the Services available. The Services may not be used in connection with any
        commercial endeavours except those that are specifically endorsed or approved by us.
      </p>
      <p>As a user of the Services, you agree not to:</p>
      <ul>
        <li>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
        <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
        <li>Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.</li>
        <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
        <li>Use any information obtained from the Services in order to harass, abuse, or harm another person.</li>
        <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
        <li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
        <li>Engage in unauthorised framing of or linking to the Services.</li>
        <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party&apos;s uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.</li>
        <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
        <li>Delete the copyright or other proprietary rights notice from any Content.</li>
        <li>Attempt to impersonate another user or person or use the username of another user.</li>
        <li>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats (&apos;gifs&apos;), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as &apos;spyware&apos; or &apos;passive collection mechanisms&apos; or &apos;pcms&apos;).</li>
        <li>Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.</li>
        <li>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.</li>
        <li>Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.</li>
        <li>Copy or adapt the Services&apos; software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li>
        <li>Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.</li>
        <li>Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorised script or other software.</li>
        <li>Use a buying agent or purchasing agent to make purchases on the Services.</li>
        <li>Make any unauthorised use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretences.</li>
        <li>Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavour or commercial enterprise.</li>
        <li>Sell or otherwise transfer your profile.</li>
        <li>Provide, publish, or distribute financial, investment, tax, or legal advice to other users or third parties;</li>
        <li>Present themselves as a financial advisor, broker, portfolio manager, or other regulated financial professional;</li>
        <li>Recommend, endorse, solicit, or promote the purchase, sale, or holding of any financial instrument, digital asset, or investment product;</li>
        <li>Offer or arrange investment services, signals, copy-trading, managed portfolios, or advisory services;</li>
        <li>Advertise, market, or sell financial instruments, investment products, or related services;</li>
        <li>Use the platform for lead generation, solicitation, or promotional activities related to financial products or services.</li>
      </ul>

      <h2>8. User generated contributions</h2>
      <p>
        The Services may invite you to chat, contribute to, or participate in blogs, message
        boards, online forums, and other functionality, and may provide you with the
        opportunity to create, submit, post, display, transmit, perform, publish, distribute,
        or broadcast content and materials to us or on the Services, including but not limited
        to text, writings, video, audio, photographs, graphics, comments, suggestions, or
        personal information or other material (collectively, &apos;Contributions&apos;).
        Contributions may be viewable by other users of the Services and through third-party
        websites. As such, any Contributions you transmit may be treated as non-confidential
        and non-proprietary. When you create or make available any Contributions, you thereby
        represent and warrant that:
      </p>
      <ul>
        <li>The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.</li>
        <li>You are the creator and owner of or have the necessary licences, rights, consents, releases, and permissions to use and to authorise us, the Services, and other users of the Services to use your Contributions in any manner contemplated by the Services and these Legal Terms.</li>
        <li>You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Services and these Legal Terms.</li>
        <li>Your Contributions are not false, inaccurate, or misleading.</li>
        <li>Your Contributions are not unsolicited or unauthorised advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.</li>
        <li>Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libellous, slanderous, or otherwise objectionable (as determined by us).</li>
        <li>Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</li>
        <li>Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.</li>
        <li>Your Contributions do not violate any applicable law, regulation, or rule.</li>
        <li>Your Contributions do not violate the privacy or publicity rights of any third party.</li>
        <li>Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.</li>
        <li>Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.</li>
        <li>Your Contributions do not otherwise violate, or link to material that violates, any provision of these Legal Terms, or any applicable law or regulation.</li>
      </ul>
      <p>
        Any use of the Services in violation of the foregoing violates these Legal Terms and
        may result in, among other things, termination or suspension of your rights to use the
        Services.
      </p>

      <h2>9. Contribution licence</h2>
      <p>
        By posting your Contributions to any part of the Services or making Contributions
        accessible to the Services by linking your account from the Services to any of your
        social networking accounts, you automatically grant, and you represent and warrant that
        you have the right to grant, to us an unrestricted, unlimited, irrevocable, perpetual,
        non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and licence to
        host, use, copy, reproduce, disclose, sell, resell, publish, broadcast, retitle,
        archive, store, cache, publicly perform, publicly display, reformat, translate,
        transmit, excerpt (in whole or in part), and distribute such Contributions (including,
        without limitation, your image and voice) for any purpose, commercial, advertising, or
        otherwise, and to prepare derivative works of, or incorporate into other works, such
        Contributions, and grant and authorise sublicences of the foregoing. The use and
        distribution may occur in any media formats and through any media channels.
      </p>
      <p>
        This licence will apply to any form, media, or technology now known or hereafter
        developed, and includes our use of your name, company name, and franchise name, as
        applicable, and any of the trademarks, service marks, trade names, logos, and personal
        and commercial images you provide. You waive all moral rights in your Contributions,
        and you warrant that moral rights have not otherwise been asserted in your
        Contributions.
      </p>
      <p>
        We do not assert any ownership over your Contributions. You retain full ownership of
        all of your Contributions and any intellectual property rights or other proprietary
        rights associated with your Contributions. We are not liable for any statements or
        representations in your Contributions provided by you in any area on the Services. You
        are solely responsible for your Contributions to the Services and you expressly agree
        to exonerate us from any and all responsibility and to refrain from any legal action
        against us regarding your Contributions.
      </p>
      <p>
        We have the right, in our sole and absolute discretion, (1) to edit, redact, or
        otherwise change any Contributions; (2) to re-categorise any Contributions to place
        them in more appropriate locations on the Services; and (3) to pre-screen or delete any
        Contributions at any time and for any reason, without notice. We have no obligation to
        monitor your Contributions.
      </p>

      <h2>10. Guidelines for reviews</h2>
      <p>
        We may provide you areas on the Services to leave reviews or ratings. When posting a
        review, you must comply with the following criteria: (1) you should have firsthand
        experience with the person/entity being reviewed; (2) your reviews should not contain
        offensive profanity, or abusive, racist, offensive, or hateful language; (3) your
        reviews should not contain discriminatory references based on religion, race, gender,
        national origin, age, marital status, sexual orientation, or disability; (4) your
        reviews should not contain references to illegal activity; (5) you should not be
        affiliated with competitors if posting negative reviews; (6) you should not make any
        conclusions as to the legality of conduct; (7) you may not post any false or misleading
        statements; and (8) you may not organise a campaign encouraging others to post reviews,
        whether positive or negative.
      </p>
      <p>
        We may accept, reject, or remove reviews in our sole discretion. We have absolutely no
        obligation to screen reviews or to delete reviews, even if anyone considers reviews
        objectionable or inaccurate. Reviews are not endorsed by us, and do not necessarily
        represent our opinions or the views of any of our affiliates or partners. We do not
        assume liability for any review or for any claims, liabilities, or losses resulting
        from any review. By posting a review, you hereby grant to us a perpetual, non-exclusive,
        worldwide, royalty-free, fully paid, assignable, and sublicensable right and licence to
        reproduce, modify, translate, transmit by any means, display, perform, and/or
        distribute all content relating to review.
      </p>

      <h2>11. Mobile application licence</h2>
      <h3>Use Licence</h3>
      <p>
        If you access the Services via the App, then we grant you a revocable, non-exclusive,
        non-transferable, limited right to install and use the App on wireless electronic
        devices owned or controlled by you, and to access and use the App on such devices
        strictly in accordance with the terms and conditions of this mobile application licence
        contained in these Legal Terms. You shall not: (1) except as permitted by applicable
        law, decompile, reverse engineer, disassemble, attempt to derive the source code of, or
        decrypt the App; (2) make any modification, adaptation, improvement, enhancement,
        translation, or derivative work from the App; (3) violate any applicable laws, rules,
        or regulations in connection with your access or use of the App; (4) remove, alter, or
        obscure any proprietary notice (including any notice of copyright or trademark) posted
        by us or the licensors of the App; (5) use the App for any revenue-generating
        endeavour, commercial enterprise, or other purpose for which it is not designed or
        intended; (6) make the App available over a network or other environment permitting
        access or use by multiple devices or users at the same time; (7) use the App for
        creating a product, service, or software that is, directly or indirectly, competitive
        with or in any way a substitute for the App; (8) use the App to send automated queries
        to any website or to send any unsolicited commercial email; or (9) use any proprietary
        information or any of our interfaces or our other intellectual property in the design,
        development, manufacture, licensing, or distribution of any applications, accessories,
        or devices for use with the App.
      </p>
      <h3>Apple and Android Devices</h3>
      <p>
        The following terms apply when you use the App obtained from either the Apple Store or
        Google Play (each an &apos;App Distributor&apos;) to access the Services: (1) the
        licence granted to you for our App is limited to a non-transferable licence to use the
        application on a device that utilises the Apple iOS or Android operating systems, as
        applicable, and in accordance with the usage rules set forth in the applicable App
        Distributor&apos;s terms of service; (2) we are responsible for providing any
        maintenance and support services with respect to the App as specified in the terms and
        conditions of this mobile application licence contained in these Legal Terms or as
        otherwise required under applicable law, and you acknowledge that each App Distributor
        has no obligation whatsoever to furnish any maintenance and support services with
        respect to the App; (3) in the event of any failure of the App to conform to any
        applicable warranty, you may notify the applicable App Distributor, and the App
        Distributor, in accordance with its terms and policies, may refund the purchase price,
        if any, paid for the App, and to the maximum extent permitted by applicable law, the
        App Distributor will have no other warranty obligation whatsoever with respect to the
        App; (4) you represent and warrant that (i) you are not located in a country that is
        subject to a US government embargo, or that has been designated by the US government as
        a &apos;terrorist supporting&apos; country and (ii) you are not listed on any US
        government list of prohibited or restricted parties; (5) you must comply with
        applicable third-party terms of agreement when using the App, e.g. if you have a VoIP
        application, then you must not be in violation of their wireless data service agreement
        when using the App; and (6) you acknowledge and agree that the App Distributors are
        third-party beneficiaries of the terms and conditions in this mobile application
        licence contained in these Legal Terms, and that each App Distributor will have the
        right (and will be deemed to have accepted the right) to enforce the terms and
        conditions in this mobile application licence contained in these Legal Terms against
        you as a third-party beneficiary thereof.
      </p>

      <h2>12. Social media</h2>
      <p>
        As part of the functionality of the Services, you may link your account with online
        accounts you have with third-party service providers (each such account, a
        &apos;Third-Party Account&apos;) by either: (1) providing your Third-Party Account
        login information through the Services; or (2) allowing us to access your Third-Party
        Account, as is permitted under the applicable terms and conditions that govern your use
        of each Third-Party Account. You represent and warrant that you are entitled to
        disclose your Third-Party Account login information to us and/or grant us access to
        your Third-Party Account, without breach by you of any of the terms and conditions that
        govern your use of the applicable Third-Party Account, and without obligating us to pay
        any fees or making us subject to any usage limitations imposed by the third-party
        service provider of the Third-Party Account. By granting us access to any Third-Party
        Accounts, you understand that (1) we may access, make available, and store (if
        applicable) any content that you have provided to and stored in your Third-Party
        Account (the &apos;Social Network Content&apos;) so that it is available on and through
        the Services via your account, including without limitation any friend lists and (2) we
        may submit to and receive from your Third-Party Account additional information to the
        extent you are notified when you link your account with the Third-Party Account.
        Depending on the Third-Party Accounts you choose and subject to the privacy settings
        that you have set in such Third-Party Accounts, personally identifiable information
        that you post to your Third-Party Accounts may be available on and through your account
        on the Services. Please note that if a Third-Party Account or associated service
        becomes unavailable or our access to such Third-Party Account is terminated by the
        third-party service provider, then Social Network Content may no longer be available on
        and through the Services. You will have the ability to disable the connection between
        your account on the Services and your Third-Party Accounts at any time. PLEASE NOTE
        THAT YOUR RELATIONSHIP WITH THE THIRD-PARTY SERVICE PROVIDERS ASSOCIATED WITH YOUR
        THIRD-PARTY ACCOUNTS IS GOVERNED SOLELY BY YOUR AGREEMENT(S) WITH SUCH THIRD-PARTY
        SERVICE PROVIDERS. We make no effort to review any Social Network Content for any
        purpose, including but not limited to, for accuracy, legality, or non-infringement, and
        we are not responsible for any Social Network Content. You acknowledge and agree that
        we may access your email address book associated with a Third-Party Account and your
        contacts list stored on your mobile device or tablet computer solely for purposes of
        identifying and informing you of those contacts who have also registered to use the
        Services. You can deactivate the connection between the Services and your Third-Party
        Account by contacting us using the contact information below or through your account
        settings (if applicable). We will attempt to delete any information stored on our
        servers that was obtained through such Third-Party Account, except the username and
        profile picture that become associated with your account.
      </p>

      <h2>13. Third-party websites and content</h2>
      <p>
        The Services may contain (or you may be sent via the Site or App) links to other
        websites (&apos;Third-Party Websites&apos;) as well as articles, photographs, text,
        graphics, pictures, designs, music, sound, video, information, applications, software,
        and other content or items belonging to or originating from third parties
        (&apos;Third-Party Content&apos;). Such Third-Party Websites and Third-Party Content
        are not investigated, monitored, or checked for accuracy, appropriateness, or
        completeness by us, and we are not responsible for any Third-Party Websites accessed
        through the Services or any Third-Party Content posted on, available through, or
        installed from the Services, including the content, accuracy, offensiveness, opinions,
        reliability, privacy practices, or other policies of or contained in the Third-Party
        Websites or the Third-Party Content. Inclusion of, linking to, or permitting the use or
        installation of any Third-Party Websites or any Third-Party Content does not imply
        approval or endorsement thereof by us. If you decide to leave the Services and access
        the Third-Party Websites or to use or install any Third-Party Content, you do so at
        your own risk, and you should be aware these Legal Terms no longer govern. You should
        review the applicable terms and policies, including privacy and data gathering
        practices, of any website to which you navigate from the Services or relating to any
        applications you use or install from the Services. Any purchases you make through
        Third-Party Websites will be through other websites and from other companies, and we
        take no responsibility whatsoever in relation to such purchases which are exclusively
        between you and the applicable third party. You agree and acknowledge that we do not
        endorse the products or services offered on Third-Party Websites and you shall hold us
        blameless from any harm caused by your purchase of such products or services.
        Additionally, you shall hold us blameless from any losses sustained by you or harm
        caused to you relating to or resulting in any way from any Third-Party Content or any
        contact with Third-Party Websites.
      </p>

      <h2>14. Advertisers</h2>
      <p>
        We allow advertisers to display their advertisements and other information in certain
        areas of the Services, such as sidebar advertisements or banner advertisements. We
        simply provide the space to place such advertisements, and we have no other
        relationship with advertisers.
      </p>

      <h2>15. Services management</h2>
      <p>
        We reserve the right, but not the obligation, to: (1) monitor the Services for
        violations of these Legal Terms; (2) take appropriate legal action against anyone who,
        in our sole discretion, violates the law or these Legal Terms, including without
        limitation, reporting such user to law enforcement authorities; (3) in our sole
        discretion and without limitation, refuse, restrict access to, limit the availability
        of, or disable (to the extent technologically feasible) any of your Contributions or
        any portion thereof; (4) in our sole discretion and without limitation, notice, or
        liability, to remove from the Services or otherwise disable all files and content that
        are excessive in size or are in any way burdensome to our systems; and (5) otherwise
        manage the Services in a manner designed to protect our rights and property and to
        facilitate the proper functioning of the Services.
      </p>

      <h2>16. Privacy policy</h2>
      <p>
        We care about data privacy and security. Please review our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>. By using the Services, you agree to
        be bound by our Privacy Policy, which is incorporated into these Legal Terms. Please be
        advised the Services are hosted in Germany and Netherlands. If you access the Services
        from any other region of the world with laws or other requirements governing personal
        data collection, use, or disclosure that differ from applicable laws in Germany and
        Netherlands, then through your continued use of the Services, you are transferring your
        data to Germany and Netherlands, and you expressly consent to have your data
        transferred to and processed in Germany and Netherlands.
      </p>

      <h2>17. Term and termination</h2>
      <p>
        These Legal Terms shall remain in full force and effect while you use the Services.
        WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN
        OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE
        SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR
        NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR
        COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY
        TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE YOUR ACCOUNT AND ANY
        CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE
        DISCRETION.
      </p>
      <p>
        If we terminate or suspend your account for any reason, you are prohibited from
        registering and creating a new account under your name, a fake or borrowed name, or the
        name of any third party, even if you may be acting on behalf of the third party. In
        addition to terminating or suspending your account, we reserve the right to take
        appropriate legal action, including without limitation pursuing civil, criminal, and
        injunctive redress.
      </p>

      <h2>18. Modifications and interruptions</h2>
      <p>
        We reserve the right to change, modify, or remove the contents of the Services at any
        time or for any reason at our sole discretion without notice. However, we have no
        obligation to update any information on our Services. We will not be liable to you or
        any third party for any modification, price change, suspension, or discontinuance of
        the Services.
      </p>
      <p>
        We cannot guarantee the Services will be available at all times. We may experience
        hardware, software, or other problems or need to perform maintenance related to the
        Services, resulting in interruptions, delays, or errors. We reserve the right to
        change, revise, update, suspend, discontinue, or otherwise modify the Services at any
        time or for any reason without notice to you. You agree that we have no liability
        whatsoever for any loss, damage, or inconvenience caused by your inability to access or
        use the Services during any downtime or discontinuance of the Services. Nothing in
        these Legal Terms will be construed to obligate us to maintain and support the Services
        or to supply any corrections, updates, or releases in connection therewith.
      </p>

      <h2>19. Governing law</h2>
      <p>
        These Legal Terms are governed by and interpreted following the laws of the
        Netherlands, and the use of the United Nations Convention of Contracts for the
        International Sales of Goods is expressly excluded. If your habitual residence is in
        the EU, and you are a consumer, you additionally possess the protection provided to you
        by obligatory provisions of the law in your country to residence. Safolio B.V. and
        yourself both agree to submit to the non-exclusive jurisdiction of the courts of
        Amsterdam, which means that you may make a claim to defend your consumer protection
        rights in regards to these Legal Terms in the Netherlands, or in the EU country in
        which you reside.
      </p>

      <h2>20. Dispute resolution</h2>
      <h3>Informal Negotiations</h3>
      <p>
        To expedite resolution and control the cost of any dispute, controversy, or claim
        related to these Legal Terms (each a &apos;Dispute&apos; and collectively, the
        &apos;Disputes&apos;) brought by either you or us (individually, a &apos;Party&apos;
        and collectively, the &apos;Parties&apos;), the Parties agree to first attempt to
        negotiate any Dispute (except those Disputes expressly provided below) informally for
        at least thirty (30) days before initiating arbitration. Such informal negotiations
        commence upon written notice from one Party to the other Party.
      </p>
      <h3>Binding Arbitration</h3>
      <p>
        Any dispute arising from the relationships between the Parties to these Legal Terms
        shall be determined by one arbitrator who will be chosen in accordance with the
        Arbitration and Internal Rules of the European Court of Arbitration being part of the
        European Centre of Arbitration having its seat in Strasbourg, and which are in force at
        the time the application for arbitration is filed, and of which adoption of this clause
        constitutes acceptance. The seat of arbitration shall be Amsterdam, Netherlands. The
        language of the proceedings shall be English. Applicable rules of substantive law shall
        be the law of the Netherlands.
      </p>
      <h3>Restrictions</h3>
      <p>
        The Parties agree that any arbitration shall be limited to the Dispute between the
        Parties individually. To the full extent permitted by law, (a) no arbitration shall be
        joined with any other proceeding; (b) there is no right or authority for any Dispute to
        be arbitrated on a class-action basis or to utilise class action procedures; and (c)
        there is no right or authority for any Dispute to be brought in a purported
        representative capacity on behalf of the general public or any other persons.
      </p>
      <h3>Exceptions to Informal Negotiations and Arbitration</h3>
      <p>
        The Parties agree that the following Disputes are not subject to the above provisions
        concerning informal negotiations binding arbitration: (a) any Disputes seeking to
        enforce or protect, or concerning the validity of, any of the intellectual property
        rights of a Party; (b) any Dispute related to, or arising from, allegations of theft,
        piracy, invasion of privacy, or unauthorised use; and (c) any claim for injunctive
        relief. If this provision is found to be illegal or unenforceable, then neither Party
        will elect to arbitrate any Dispute falling within that portion of this provision found
        to be illegal or unenforceable and such Dispute shall be decided by a court of
        competent jurisdiction within the courts listed for jurisdiction above, and the Parties
        agree to submit to the personal jurisdiction of that court.
      </p>

      <h2>21. Corrections</h2>
      <p>
        There may be information on the Services that contains typographical errors,
        inaccuracies, or omissions, including descriptions, pricing, availability, and various
        other information. We reserve the right to correct any errors, inaccuracies, or
        omissions and to change or update the information on the Services at any time, without
        prior notice.
      </p>

      <h2>22. Disclaimer</h2>
      <p>
        THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE
        OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE
        DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR
        USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR
        REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES&apos; CONTENT OR
        THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL
        ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF
        CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE
        WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORISED
        ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR
        FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION
        TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE
        TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR
        OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED
        AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE
        VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR
        ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY
        HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR
        OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR
        MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR
        SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY
        ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGEMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
      </p>

      <h2>23. Limitations of liability</h2>
      <p>
        IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY
        THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR
        PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES
        ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY
        OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR
        LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION,
        WILL AT ALL TIMES BE LIMITED TO THE LESSER OF THE AMOUNT PAID, IF ANY, BY YOU TO US
        DURING THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING OR €250. CERTAIN
        US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR
        THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL
        OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE
        ADDITIONAL RIGHTS.
      </p>

      <h2>24. Indemnification</h2>
      <p>
        You agree to defend, indemnify, and hold us harmless, including our subsidiaries,
        affiliates, and all of our respective officers, agents, partners, and employees, from
        and against any loss, damage, liability, claim, or demand, including reasonable
        attorneys&apos; fees and expenses, made by any third party due to or arising out of:
        (1) your Contributions; (2) use of the Services; (3) breach of these Legal Terms; (4)
        any breach of your representations and warranties set forth in these Legal Terms; (5)
        your violation of the rights of a third party, including but not limited to
        intellectual property rights; or (6) any overt harmful act toward any other user of the
        Services with whom you connected via the Services. Notwithstanding the foregoing, we
        reserve the right, at your expense, to assume the exclusive defence and control of any
        matter for which you are required to indemnify us, and you agree to cooperate, at your
        expense, with our defence of such claims. We will use reasonable efforts to notify you
        of any such claim, action, or proceeding which is subject to this indemnification upon
        becoming aware of it.
      </p>

      <h2>25. User data</h2>
      <p>
        We will maintain certain data that you transmit to the Services for the purpose of
        managing the performance of the Services, as well as data relating to your use of the
        Services. Although we perform regular routine backups of data, you are solely
        responsible for all data that you transmit or that relates to any activity you have
        undertaken using the Services. You agree that we shall have no liability to you for any
        loss or corruption of any such data, and you hereby waive any right of action against
        us arising from any such loss or corruption of such data.
      </p>

      <h2>26. Electronic communications, transactions, and signatures</h2>
      <p>
        Visiting the Services, sending us emails, and completing online forms constitute
        electronic communications. You consent to receive electronic communications, and you
        agree that all agreements, notices, disclosures, and other communications we provide to
        you electronically, via email and on the Services, satisfy any legal requirement that
        such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES,
        CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES,
        AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You
        hereby waive any rights or requirements under any statutes, regulations, rules,
        ordinances, or other laws in any jurisdiction which require an original signature or
        delivery or retention of non-electronic records, or to payments or the granting of
        credits by any means other than electronic means.
      </p>

      <h2>27. California users and residents</h2>
      <p>
        If any complaint with us is not satisfactorily resolved, you can contact the Complaint
        Assistance Unit of the Division of Consumer Services of the California Department of
        Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento,
        California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.
      </p>

      <h2>28. Miscellaneous</h2>
      <p>
        These Legal Terms and any policies or operating rules posted by us on the Services or
        in respect to the Services constitute the entire agreement and understanding between
        you and us. Our failure to exercise or enforce any right or provision of these Legal
        Terms shall not operate as a waiver of such right or provision. These Legal Terms
        operate to the fullest extent permissible by law. We may assign any or all of our
        rights and obligations to others at any time. We shall not be responsible or liable for
        any loss, damage, delay, or failure to act caused by any cause beyond our reasonable
        control. If any provision or part of a provision of these Legal Terms is determined to
        be unlawful, void, or unenforceable, that provision or part of the provision is deemed
        severable from these Legal Terms and does not affect the validity and enforceability of
        any remaining provisions. There is no joint venture, partnership, employment or agency
        relationship created between you and us as a result of these Legal Terms or use of the
        Services. You agree that these Legal Terms will not be construed against us by virtue
        of having drafted them. You hereby waive any and all defences you may have based on the
        electronic form of these Legal Terms and the lack of signing by the parties hereto to
        execute these Legal Terms.
      </p>

      <h2>29. Services</h2>
      <p>
        Safolio is a software-as-a-service (SaaS) platform that enables users to track,
        consolidate, and analyze their personal investment portfolios across multiple asset
        classes and financial institutions. The platform allows users to record and monitor
        holdings such as equities, exchange-traded funds (ETFs), funds, bonds, cryptocurrencies,
        cash positions, and other financial instruments. Safolio aggregates portfolio data from
        user-provided inputs and third-party data sources in order to present portfolio
        valuations, historical performance, asset allocation breakdowns, and risk-related
        analytics. Safolio is not a trading platform, does not execute transactions, does not
        hold client funds, and does not provide investment advice. All information displayed on
        the platform is for informational and analytical purposes only. Users remain solely
        responsible for their investment decisions and for the accuracy of the data they input
        or connect to the platform. The platform may include analytical tools such as
        performance comparisons, hypothetical scenario (&ldquo;what-if&rdquo;) calculations,
        and portfolio risk indicators. These tools are based on mathematical models and
        historical or simulated data and do not constitute personalized financial advice or
        guarantees of future performance. Safolio operates as a portfolio tracking and
        analytics tool only and does not act as a broker, custodian, asset manager, or
        financial intermediary.
      </p>

      <h2>30. Data accuracy, no warranties, and limitation of liability</h2>
      <p>
        Safolio provides portfolio tracking, aggregation, and analytical tools based on
        user-provided data, third-party data sources, and automated processing systems. All
        data displayed on the platform, including but not limited to prices, valuations,
        performance metrics, exchange rates, corporate actions, and derived analytics, is
        provided solely for informational and portfolio-tracking purposes.
      </p>

      <h2>31. No warranties</h2>
      <p>
        The platform and all data made available through it are provided on an &ldquo;as
        is&rdquo; and &ldquo;as available&rdquo; basis. To the fullest extent permitted by
        applicable law, Safolio expressly disclaims all warranties of any kind, whether
        express, implied, statutory, or otherwise, including but not limited to any implied
        warranties of accuracy, completeness, reliability, timeliness, merchantability, fitness
        for a particular purpose, non-infringement, or availability. Safolio does not warrant
        that:
      </p>
      <ul>
        <li>the data displayed will be accurate, complete, current, or error-free;</li>
        <li>the platform will be uninterrupted or free from delays, defects, or technical issues;</li>
        <li>any errors or discrepancies in data will be identified or corrected; or</li>
        <li>the use of the platform will result in any specific financial outcome.</li>
      </ul>
      <p>
        Market data and financial information may be delayed, estimated, aggregated, adjusted,
        or incorrect, and Safolio makes no representations regarding the quality or suitability
        of such data for decision-making purposes.
      </p>

      <h2>32. User responsibility and verification</h2>
      <p>
        Users acknowledge and agree that they are solely responsible for reviewing, validating,
        and verifying all data before relying on it for any financial, investment, tax, or
        legal decision. Users must independently confirm all relevant information using
        authoritative and reliable external sources, including but not limited to brokers,
        exchanges, issuers, official market data providers, or licensed professionals. Safolio
        does not provide investment advice, personalized recommendations, or assurances
        regarding the suitability of any asset, strategy, or transaction.
      </p>

      <h2>33. Connected accounts and third-party data sources</h2>
      <p>
        Safolio may allow users to connect external bank accounts, brokerage accounts, or other
        financial accounts through third-party service providers. When such connections are
        enabled, Safolio accesses account information strictly on a read-only basis for
        portfolio tracking and analytical purposes. Safolio does not initiate transactions,
        move funds, place orders, or modify account settings on connected accounts. Data
        retrieved from connected accounts is provided by third-party institutions and
        intermediaries and may be incomplete, delayed, aggregated, reformatted, or inaccurate.
        Safolio does not control, verify, or guarantee the accuracy, availability, or
        continuity of data obtained from such third parties. Safolio shall not be responsible
        for:
      </p>
      <ul>
        <li>errors, omissions, or inaccuracies originating from banks, brokers, or data aggregation providers;</li>
        <li>temporary or permanent unavailability of connected account services;</li>
        <li>changes in third-party APIs, authentication methods, or data access permissions;</li>
        <li>any decisions made by the user based on connected account data.</li>
      </ul>
      <p>
        Users remain solely responsible for reviewing and verifying all information obtained
        through connected accounts before relying on it for any financial, investment, tax, or
        legal decision.
      </p>

      <h2>34. User content</h2>
      <p>
        Any user-generated content, communications, annotations, or shared information made
        available through the platform must not be interpreted as professional advice or
        recommendations. Safolio does not review, approve, or endorse user-generated content
        and does not assume any responsibility for such content. Safolio reserves the right, at
        its sole discretion, to restrict, suspend, or terminate access to the platform for
        users who violate these restrictions or whose use of the platform may expose Safolio to
        regulatory, legal, or reputational risk. Safolio does not permit the platform to be
        used as a marketplace, advisory forum, or distribution channel for regulated financial
        activities.
      </p>

      <h2>35. Contact us</h2>
      <p>
        In order to resolve a complaint regarding the Services or to receive further
        information regarding use of the Services, please contact us at:
      </p>
      <p>
        Safolio B.V.
        <br />
        2-A Abtstraat
        <br />
        Utrecht, Utrecht 3512 AB
        <br />
        Netherlands
        <br />
        <a href="mailto:info@safolio.com">info@safolio.com</a>
      </p>
    </LegalLayout>
  );
}
