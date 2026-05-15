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
  return { title: `${t("legal4")} — Safolio` };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Footer" });
  if (locale === "tr") {
    return (
      <LegalLayout title={t("legal4")}>
        <p className="text-sm text-ink3">Son güncelleme: 01 Şubat 2026</p>

        <p>
          Bu Kabul Edilebilir Kullanım Politikası (&apos;Politika&apos;), Hizmet Koşullarımızın
          (&apos;Yasal Koşullar&apos;) bir parçasıdır ve bu nedenle ana{" "}
          <Link href="/terms-and-conditions">Yasal Koşullar</Link> belgemizle birlikte
          okunmalıdır. Safolio B.V. tarafından sağlanan yapay zeka destekli hizmetleri
          (&apos;Yapay Zeka Ürünleri&apos;) kullandığınızda, bu belgeye, Yasal Koşullarımıza
          ve yapay zekayı düzenleyen tüm geçerli yasa ve yönetmeliklere uyacağınızı garanti
          edersiniz. Yapay Zeka Ürünlerimizi kullanmanız, platformumuzla yasal, etik ve
          sorumlu bir şekilde, tüm bireylerin haklarına ve onuruna saygılı olarak etkileşim
          kurmayı kabul ettiğiniz anlamına gelir. Bu Yasal Koşulları kabul etmiyorsanız,
          lütfen Hizmetlerimizi kullanmaktan kaçının. Hizmetlerimizi kullanmaya devam etmeniz,
          bu Yasal Koşulları kabul ettiğiniz anlamına gelir.
        </p>
        <p>Lütfen aşağıdakilerin tümüne uygulanan bu Politikayı dikkatlice inceleyin:</p>
        <ul>
          <li>(a) Hizmetlerimizin kullanımları (&apos;Yasal Koşullar&apos;da tanımlandığı şekilde)</li>
          <li>
            (b) Hizmetler üzerinde bulunan formlar, materyaller, onay araçları, yorumlar,
            gönderiler ve diğer tüm içerikler (&apos;İçerik&apos;)
          </li>
          <li>
            (c) Hizmetlere katkıda bulunduğunuz, herhangi bir forum, sohbet odası, inceleme
            ve bunlarla ilişkili herhangi bir etkileşimli hizmetteki yükleme, gönderi,
            inceleme, ifşa, derecelendirme, yorum, sohbet vb. dahil olmak üzere herhangi
            bir materyal (&apos;Katkı&apos;)
          </li>
          <li>(d) Hizmetlerimiz içinde Yapay Zeka Ürünlerinin sorumlu uygulanması ve yönetimi</li>
        </ul>

        <h2>Biz kimiz</h2>
        <p>
          Biz, Hollanda&apos;da 2-A Abtstraat, Utrecht, Utrecht 3512 AB adresinde kayıtlı,
          Safolio adıyla iş yapan Safolio B.V. (&apos;Şirket&apos;, &apos;biz&apos;,
          &apos;bize&apos; veya &apos;bizim&apos;) şirketiyiz.{" "}
          <a href="https://safolio.com">https://safolio.com</a> web sitesini
          (&apos;Site&apos;), Safolio mobil uygulamasını (&apos;Uygulama&apos;) ve bu
          Politikaya atıfta bulunan veya bağlantı veren diğer tüm ilgili ürün ve hizmetleri
          (toplu olarak &apos;Hizmetler&apos;) işletmekteyiz.
        </p>

        <h2>Hizmetlerin Kullanımı</h2>
        <p>
          Hizmetleri kullandığınızda, bu Politikaya ve tüm geçerli yasalara uyacağınızı
          garanti edersiniz.
        </p>
        <p>Ayrıca aşağıdakileri yapmayacağınızı kabul edersiniz:</p>
        <ul>
          <li>Bizden yazılı izin almadan, doğrudan veya dolaylı olarak bir koleksiyon, derleme, veritabanı veya dizin oluşturmak veya derlemek için Hizmetlerden sistematik olarak veri veya diğer içerikleri almak.</li>
          <li>İstenmeyen e-posta göndermek amacıyla elektronik veya diğer yollarla kullanıcıların kullanıcı adlarını ve/veya e-posta adreslerini toplamak ya da otomatik yollarla veya sahte iddialarla kullanıcı hesapları oluşturmak da dahil olmak üzere Hizmetlerin yetkisiz herhangi bir şekilde kullanılması.</li>
          <li>Herhangi bir İçeriğin kullanımını veya kopyalanmasını engelleyen ya da Hizmetlerin ve/veya içerdiği İçeriğin kullanımına ilişkin sınırlamaları uygulayan özellikler dahil, Hizmetlerin güvenlikle ilgili özelliklerini atlatmak, devre dışı bırakmak veya başka bir şekilde bunlara müdahale etmek.</li>
          <li>Hizmetlere yetkisiz çerçeveleme veya bağlantı verme eylemlerinde bulunmak.</li>
          <li>Özellikle kullanıcı parolaları gibi hassas hesap bilgilerini öğrenmek amacıyla bizi ve diğer kullanıcıları kandırmak, dolandırmak veya yanıltmak.</li>
          <li>Destek hizmetlerimiz dahil olmak üzere Hizmetlerimizi uygunsuz şekilde kullanmak veya yanlış kötüye kullanım ya da uygunsuz davranış raporları göndermek.</li>
          <li>Yorum veya mesaj göndermek için komut dosyaları kullanmak ya da veri madenciliği, robotlar veya benzer veri toplama ve çıkarma araçlarını kullanmak gibi Hizmetlerin herhangi bir otomatik kullanımında bulunmak.</li>
          <li>Hizmetlere veya Hizmetlere bağlı ağlara müdahale etmek, bunları aksatmak veya aşırı yük bindirmek.</li>
          <li>Başka bir kullanıcının veya kişinin kimliğine bürünmeye çalışmak ya da başka bir kullanıcının kullanıcı adını kullanmak.</li>
          <li>Hizmetlerden elde edilen herhangi bir bilgiyi başka bir kişiyi taciz etmek, kötüye kullanmak veya zarar vermek amacıyla kullanmak.</li>
          <li>Hizmetleri bizimle rekabet etme çabasının bir parçası olarak kullanmak veya başka bir şekilde Hizmetleri ve/veya İçeriği herhangi bir gelir getirici çaba ya da ticari girişim için kullanmak.</li>
          <li>Yürürlükteki yasaların açıkça izin verdiği durumlar dışında, Hizmetleri oluşturan veya herhangi bir şekilde bunların bir parçasını oluşturan yazılımı çözmek, kaynak koda dönüştürmek, parçalarına ayırmak veya tersine mühendislik yapmak.</li>
          <li>Hizmetlerin veya Hizmetlerin herhangi bir bölümüne erişimi engellemek ya da kısıtlamak için tasarlanmış önlemleri atlamaya çalışmak.</li>
          <li>Hizmetlerin herhangi bir bölümünü size sunan çalışanlarımızı veya temsilcilerimizi taciz etmek, rahatsız etmek, tehdit etmek veya korkutmak.</li>
          <li>Herhangi bir İçerikten telif hakkı veya diğer mülkiyet hakları bildirimini silmek.</li>
          <li>Flash, PHP, HTML, JavaScript veya diğer kodlar dahil ancak bunlarla sınırlı olmamak üzere Hizmetlerin yazılımını kopyalamak veya uyarlamak.</li>
          <li>Aşırı büyük harf kullanımı ve spam (tekrarlayan metnin sürekli gönderilmesi) dahil olmak üzere, herhangi bir tarafın Hizmetleri kesintisiz kullanımını ve bundan yararlanmasını engelleyen veya Hizmetlerin kullanımını, özelliklerini, işlevlerini, çalışmasını ya da bakımını değiştiren, bozan, aksatan veya bunlara müdahale eden virüsler, Truva atları veya diğer materyalleri yüklemek ya da iletmek (veya yüklemeye veya iletmeye çalışmak).</li>
          <li>Pasif veya aktif bir bilgi toplama ya da iletme mekanizması olarak işlev gören, açık grafik değişim formatları (&apos;gifs&apos;), 1×1 pikseller, web hataları, çerezler veya diğer benzer cihazlar (bazen &apos;casus yazılım&apos; veya &apos;pasif toplama mekanizmaları&apos; ya da &apos;pcms&apos; olarak adlandırılır) dahil olmak üzere herhangi bir materyali yüklemek veya iletmek (ya da yüklemeye veya iletmeye çalışmak).</li>
          <li>Standart arama motoru veya İnternet tarayıcısı kullanımının bir sonucu olabilecek durumlar dışında, Hizmetlere erişen herhangi bir örümcek, robot, hile aracı, kazıyıcı veya çevrimdışı okuyucu dahil olmak üzere herhangi bir otomatik sistemi kullanmak, başlatmak, geliştirmek veya dağıtmak ya da herhangi bir yetkisiz komut dosyası veya diğer yazılımı kullanmak veya başlatmak.</li>
          <li>Bize ve/veya Hizmetlere, görüşümüze göre, itibarsızlaştırmak, kötülemek veya başka bir şekilde zarar vermek.</li>
          <li>Hizmetleri yürürlükteki yasalara veya yönetmeliklere aykırı bir şekilde kullanmak.</li>
          <li>Hizmetlerde satın alma yapmak için bir satın alma temsilcisi veya satın alma aracısı kullanmak.</li>
          <li>Profilinizi satmak veya başka şekilde devretmek.</li>
        </ul>

        <h3>Abonelikler</h3>
        <p>
          Hizmetlerimize abone olursanız, açıkça izin verilmediği sürece aşağıdakileri
          yapamayacağınızı anladığınızı, kabul ettiğinizi ve onayladığınızı belirtirsiniz:
        </p>
        <ul>
          <li>Safolio B.V.&apos;nin kendi takdirine bağlı olarak verebileceği veya reddedebileceği önceden yazılı izni olmaksızın, bu Politikanın açıkça izin verdiği durumlar dışında, Hizmetlerin herhangi bir bölümünün değiştirilmesi, kopyalanması, yeniden dağıtılması, yayınlanması, görüntülenmesi, sunulması veya yeniden iletilmesi dahil olmak üzere herhangi bir kullanımda bulunmak.</li>
          <li>Hizmetlerin veya herhangi bir bölümünün kaynak kodunu ya da algoritmalarını herhangi bir yolla yeniden oluşturmaya veya keşfetmeye çalışmak.</li>
          <li>Hizmetleri herhangi bir üçüncü tarafa sağlamak veya başka şekilde erişilebilir kılmak.</li>
          <li>Size yönelik olmayan herhangi bir veriyi yakalamak.</li>
          <li>Herhangi bir kullanıcının verilerine ya da başka bir kişi veya kuruluşla ilgili diğer donanım, yazılım veya bilgilere zarar vermek, bunları ifşa etmek veya değiştirmek.</li>
        </ul>
        <p>
          Ek yasaklı faaliyetler için lütfen{" "}
          <Link href="/terms-and-conditions">Hizmet Koşulları</Link>&apos;na bakın.
        </p>

        <h3>Yapay Zeka Ürünleri</h3>
        <p>
          Safolio B.V. tarafından sağlanan Yapay Zeka Ürünlerini kullandığınızda,
          aşağıdakileri yapmayacağınızı garanti edersiniz:
        </p>
        <ul>
          <li>Davranışları çarpıtmak ve bilinçli karar vermeyi bozmak için tasarlanmış bilinçaltı, manipülatif veya aldatıcı yöntemler kullanan yapay zeka tekniklerini, özellikle bu eylemler bireylere önemli zararlar verdiğinde, uygulamak.</li>
          <li>Yaş, engellilik veya sosyo-ekonomik koşullarla ilgili güvenlik açıklarını yapay zeka aracılığıyla, özellikle bireye önemli zararlar verecek şekilde davranışları veya karar vermeyi bozacak biçimde istismar etmek.</li>
          <li>Yasal olarak edinilmiş veri kümelerinin etiketlenmesi veya filtrelenmesi ya da belirli kolluk faaliyetleri gibi sınırlı durumlar haricinde, ırk, siyasi görüşler, sendika üyeliği, dini veya felsefi inançlar, cinsel yaşam veya cinsel yönelim gibi hassas özellikleri çıkarmak için yapay zeka sistemlerini biyometrik sınıflandırma amacıyla kullanmak.</li>
          <li>Bireyleri veya grupları sosyal davranışlarına ya da kişisel özelliklerine göre değerlendiren veya sınıflandıran, zarar, ayrımcılık veya haksız muameleye yol açan yapay zeka tabanlı sosyal puanlama sistemleri uygulamak.</li>
          <li>Yasal güvencelerin yürürlükte olduğu dar tanımlı durumlar dışında, bir bireyin yalnızca profilleme, kişilik özellikleri veya diğer davranışsal olmayan faktörlere dayanarak suç işleme riskini değerlendirmek.</li>
          <li>Yasal olarak uyumlu ve dar bir şekilde tanımlanmış bir amacın parçası olmadıkça, internet, sosyal medya veya CCTV görüntülerinden yüz görüntülerinin hedeflenmemiş kazınması yoluyla yüz tanıma veritabanları derlememek.</li>
          <li>İşyerleri, eğitim kurumları veya bu tür analizlerin ayrımcılığa, haksız muameleye ya da gizlilik ihlallerine yol açabileceği başka herhangi bir bağlam gibi hassas ortamlarda duyguları çıkarmak için yapay zeka kullanmak.</li>
          <li>Güçlü yasal gerekçelerin ve denetim mekanizmalarının bulunduğu belirli durumlar dışında, kolluk amacıyla kamuya açık yerlerde gerçek zamanlı uzaktan biyometrik tanımlama faaliyetlerinde bulunmak.</li>
        </ul>

        <h2>Yapay zeka</h2>
        <p>
          Yapay zekanın kullanıcılarımız ve toplum üzerinde sahip olabileceği önemli etkiyi
          kabul ediyor ve Yapay Zeka Ürünlerimizin kapsamlı etik standartlarla uyumlu bir
          şekilde tasarlanmasını ve işletilmesini sağlamaya kendimizi adamış bulunuyoruz.
          Adalet, şeffaflık ve hesap verebilirlik ilkelerini koruyarak yapay zekayı
          kullanıcı deneyimlerini geliştirmek için kullanmayı amaçlıyoruz.
        </p>
        <p>
          Bu Politika, Hizmetlerimizdeki tüm yapay zeka destekli özellikler, hizmetler ve
          sistemler için geçerlidir. Kullanıcıların haklarını korumak ve tüm yapay zeka
          işlemlerinde şeffaflığı sürdürmek için yapay zeka teknolojilerinin geliştirilmesini,
          dağıtılmasını ve kullanılmasını düzenler. Bu Politika, Yapay Zeka Ürünlerimize
          katkıda bulunan veya bunlarla etkileşime giren çalışanlar, üçüncü taraf tedarikçiler
          ve ortaklar dahil tüm paydaşlar için geçerlidir.
        </p>
        <h3>Uygulama</h3>
        <p>
          Yapay Zeka Ürünlerimizin herhangi bir şekilde kötüye kullanılması veya bu Politikada
          belirtilen standartlara uyulmaması, platformumuzun bütünlüğünü ve kullanıcılarımızın
          korunmasını sağlamak için uygun önlemlerin alınmasıyla sonuçlanacaktır. Yapay zekanın
          kötüye kullanımına ilişkin spesifik sonuçlar, ihlalin niteliğine ve ciddiyetine,
          kullanıcının Hizmetlerimizdeki geçmişine bağlı olarak değişebilir.
        </p>
        <p>İhlaller şunları içerebilir ancak bunlarla sınırlı değildir:</p>
        <ul>
          <li>Kullanıcı gizliliğini ihlal eden, verileri manipüle eden, etik kurallara aykırı veya Yapay Zeka Hizmet Sağlayıcılarının kullanım koşullarına aykırı şekillerde Yapay Zeka Ürünlerini kullanmak.</li>
          <li>Yapay zekayı, kullanıcılara veya gruplara haksız muameleye yol açacak şekilde önyargı oluşturan veya buna neden olan bir biçimde uygulamak.</li>
          <li>Yapay Zeka Ürünleri tarafından verilerin uygunsuz şekilde işlenmesi, saklanması veya kullanılması, bunun sonucunda kullanıcı güveninin ve yasal uyumun ihlal edilmesi.</li>
          <li>Sistemlerimizin, verilerimizin veya kullanıcılarımızın gizliliğini ve güvenliğini tehlikeye atacak şekilde yapay zekayı kullanmak.</li>
        </ul>
        <p>İhlale bağlı olarak, Safolio B.V. aşağıdaki eylemlerden bir veya birkaçını gerçekleştirebilir:</p>
        <ul>
          <li>
            <strong>Uyarılar:</strong> Sorumlu taraf resmi bir uyarı alabilir ve ihlal eden
            uygulamalara son vermesi istenebilir.
          </li>
          <li>
            <strong>Geçici Askıya Alma:</strong> Tekrarlanan veya daha ciddi ihlaller söz
            konusu olduğunda, sorumlu kişinin Yapay Zeka Ürünlerine veya platformumuzun
            belirli özelliklerine erişimi, sorun soruşturulurken geçici olarak askıya
            alınabilir.
          </li>
          <li>
            <strong>Erişimin Sonlandırılması:</strong> Özellikle kullanıcılara zarar veren
            veya gizliliği ya da diğer düzenlemeleri ihlal eden ciddi ihlaller, Yapay Zeka
            Ürünlerimize ve Hizmetlerimize erişimin kalıcı olarak sonlandırılmasına yol
            açabilir.
          </li>
          <li>
            <strong>Yasal İşlem:</strong> Yapay zekanın kötüye kullanılmasının önemli
            zararlara, veri ihlallerine veya yasal ihlallere yol açtığı durumlarda, sorumlu
            tarafa karşı yasal işlem başlatabiliriz. Bu, olayın kolluk kuvvetlerine veya
            düzenleyici makamlara bildirilmesini içerebilir.
          </li>
          <li>
            <strong>Kamuya Açıklama:</strong> Kamu güvenini etkileyen veya ciddi etik
            ihlalleri içeren olaylar için, şeffaflığı ve hesap verebilirliği sürdürmek
            amacıyla ihlali ve buna karşılık alınan önlemleri kamuya açıklama hakkını saklı
            tutarız.
          </li>
        </ul>
        <h3>Sorumlu Yapay Zekaya Bağlılık</h3>
        <p>
          Yukarıda belirtilen sonuçlara ek olarak, yapay zekanın kötüye kullanılması sonucu
          ortaya çıkan zararları gidermeye derinden bağlıyız. Bu taahhüt, kullanıcılarımıza
          olan bağlılığımızın ve bir şirket olarak sorumluluğumuzun bir göstergesidir.
          Önyargılı sonuçları düzeltecek ve gelecekteki ihlalleri önlemek için ek güvenlik
          önlemleri uygulayacağız.
        </p>
        <p>
          Safolio B.V. olarak, Politikamızın sürekli iyileştirilmesi ve geliştirilmesine
          kararlıyız. Teknoloji geliştikçe ve düzenleyici ortamlar değiştikçe, politikalarımızın
          güncel kalmasının, alakalı, etkili olmasının ve yapay zeka etiğinde en iyi
          uygulamalarla uyumlu olmasının önemini kabul ediyoruz. Politikamızı, teknolojik
          gelişmeleri ve yapay zekayla ilgili yerel, ulusal ve uluslararası düzenlemelerdeki
          yasal değişiklikleri yansıtacak şekilde düzenli olarak gözden geçirecek ve
          güncelleyeceğiz. Politikamız, uygulamalarımızın yasal açıdan sağlam ve sosyal
          açıdan sorumlu kalmasını sağlamak için yeni yasalara ve yönergelere uyacak şekilde
          gerektiğinde güncellenecektir.
        </p>

        <h2>Katkılar</h2>
        <p>Bu Politikada, &apos;Katkı&apos; terimi şu anlama gelir:</p>
        <ul>
          <li>Hizmetler üzerinde veya Hizmetler aracılığıyla herhangi bir şekilde yayınladığınız, paylaştığınız, yüklediğiniz, gönderdiğiniz veya başka bir şekilde sağladığınız tüm veriler, bilgiler, yazılımlar, metinler, kodlar, müzikler, komut dosyaları, sesler, grafikler, fotoğraflar, videolar, etiketler, mesajlar, etkileşimli özellikler veya diğer materyaller; veya</li>
          <li>Safolio B.V.&apos;ye sağladığınız ya da Hizmetlerle birlikte kullandığınız diğer içerikler, materyaller veya veriler.</li>
        </ul>
        <p>
          Hizmetlerin bazı alanları, kullanıcıların Katkıları yüklemesine, iletmesine veya
          göndermesine olanak tanıyabilir. Hizmetlerde yapılan Katkıları gözden geçirme ya da
          denetleme yükümlülüğümüz olmamakla birlikte, bunu yapabiliriz ve kullanıcılarımızdan
          herhangi birinin bu Politikayı ihlal etmesinden kaynaklanan herhangi bir kayıp veya
          zarar için sorumluluğumuzu açıkça hariç tutarız. Bu Politikayı ihlal ettiğine
          inandığınız herhangi bir Katkıyı lütfen bildirin; ancak bir Katkının gerçekten bu
          Politikayı ihlal edip etmediğini yalnızca biz kendi takdirimize bağlı olarak
          belirleriz.
        </p>
        <p>Şunları garanti edersiniz:</p>
        <ul>
          <li>Katkılarınızın yaratıcısı ve sahibi olduğunuzu ya da Katkılarınızı Hizmetler ve bu Politika tarafından öngörülen herhangi bir şekilde kullanmak ve bizi, Hizmetleri ve Hizmetlerin diğer kullanıcılarını kullanmaya yetkilendirmek için gerekli lisanslara, haklara, onaylara, izinlere ve yetkilere sahip olduğunuzu;</li>
          <li>Tüm Katkılarınızın yürürlükteki yasalara uygun olduğunu ve özgün ve gerçek olduğunu (görüşlerinizi veya gerçekleri temsil ediyorlarsa);</li>
          <li>Katkılarınızın oluşturulması, dağıtılması, iletilmesi, kamuya açık olarak görüntülenmesi veya sunulması ve bunlara erişilmesi, indirilmesi veya kopyalanması, herhangi bir üçüncü tarafın telif hakkı, patent, ticari marka, ticari sır veya manevi hakları dahil ancak bunlarla sınırlı olmamak üzere mülkiyet haklarını ihlal etmediğini ve etmeyeceğini; ve</li>
          <li>Katkılarınızın Hizmetler ve bu Politika tarafından öngörülen herhangi bir şekilde dahil edilmesini ve kullanılmasını sağlamak için Katkılarınızdaki kimliği belirlenebilir her bir bireyin adının veya benzerliğinin kullanılması için doğrulanabilir onayına, iznine ve/veya yetkisine sahip olduğunuzu.</li>
        </ul>
        <p>Ayrıca, aşağıdaki herhangi bir Katkıyı (veya Katkının herhangi bir bölümünü) yayınlamayacağınızı, iletmeyeceğinizi veya yüklemeyeceğinizi kabul edersiniz:</p>
        <ul>
          <li>Yürürlükteki yasaları, yönetmelikleri, mahkeme kararını, sözleşmeden doğan yükümlülüğü, bu Politikayı, Yasal Koşullarımızı, yasal bir görevi ihlal eden ya da dolandırıcılığı veya yasadışı faaliyetleri teşvik eden veya kolaylaştıran;</li>
          <li>Herhangi bir kişi veya gruba karşı karalayıcı, müstehcen, saldırgan, nefret dolu, hakaret edici, korkutucu, zorbalık yapıcı, kötüye kullanıcı veya tehditkar olan;</li>
          <li>Yanlış, hatalı veya yanıltıcı olan;</li>
          <li>Çocuklara yönelik cinsel istismar materyali içeren ya da çocuk pornografisine ilişkin geçerli herhangi bir yasayı veya başka bir şekilde reşit olmayanları korumayı amaçlayan yasaları ihlal eden;</li>
          <li>18 yaşın altındaki herhangi birinden kişisel bilgi talep eden veya 18 yaşın altındaki kişileri cinsel ya da şiddet içeren bir şekilde istismar eden herhangi bir materyal içeren;</li>
          <li>Şiddeti teşvik eden, herhangi bir hükümetin şiddet yoluyla devrilmesini savunan veya başka birine fiziksel zarar verilmesini kışkırtan, teşvik eden ya da tehdit eden;</li>
          <li>Müstehcen, ahlaksız, şehvetli, kirli, şiddet içeren, taciz edici, iftira niteliğinde, karalayıcı, açıkça cinsel içerikli materyaller içeren veya başka bir şekilde sakıncalı olan (bizim tarafımızdan belirlendiği şekilde);</li>
          <li>Irk, cinsiyet, din, milliyet, engellilik, cinsel yönelim veya yaşa dayalı olarak ayrımcı olan;</li>
          <li>Herhangi bir kişiye karşı zorbalık eden, gözünü korkutan, küçük düşüren veya hakaret eden;</li>
          <li>Terörizm eylemlerini teşvik eden, kolaylaştıran veya başkalarının bu tür eylemleri teşvik etmesine ve kolaylaştırmasına yardımcı olan;</li>
          <li>Üçüncü bir tarafın fikri mülkiyet haklarını veya tanınma ya da gizlilik haklarını ihlal eden veya başkalarının ihlal etmesine yardımcı olan;</li>
          <li>Aldatıcı olan, kimliğinizi veya herhangi bir kişiyle olan ilişkinizi yanlış tanıtan ve/veya bizimle olan ilişkiniz konusunda herhangi birini yanıltan ya da Katkının sizden başka biri tarafından yapıldığını ima eden;</li>
          <li>İstenmeyen veya yetkisiz reklamlar, tanıtım materyalleri, piramit şemaları, zincir mektuplar, spam, toplu postalar ya da parasal tazminat olsun veya ayni olsun &apos;ücretli&apos; diğer talep biçimlerini içeren; veya</li>
          <li>Kimliğinizi veya Katkının kimden geldiğini yanlış tanıtan.</li>
        </ul>

        <h2>Bu Politikanın ihlalinin bildirilmesi</h2>
        <p>
          Hizmetlerde yapılan Katkıları gözden geçirme veya denetleme yükümlülüğümüz olmamakla
          birlikte bunu yapabiliriz ve kullanıcılarımızdan herhangi birinin bu Politikayı
          ihlal etmesinden kaynaklanan herhangi bir kayıp veya zarar için sorumluluğumuzu
          açıkça hariç tutarız.
        </p>
        <p>Herhangi bir Hizmetin, İçeriğin veya Katkının:</p>
        <ul>
          <li>
            bu Politikayı ihlal ettiğini düşünüyorsanız, lütfen bize{" "}
            <a href="mailto:info@safolio.com">info@safolio.com</a> adresinden e-posta gönderin
            veya hangi Hizmetin, İçeriğin ya da Katkının bu Politikayı ihlal ettiğini ve nedenini
            bize bildirmek için bu belgenin altındaki iletişim bilgilerine başvurun
          </li>
          <li>
            herhangi bir üçüncü taraf fikri mülkiyet haklarını ihlal ettiğini düşünüyorsanız,
            lütfen bize <a href="mailto:info@safolio.com">info@safolio.com</a> adresinden
            e-posta gönderin
          </li>
          <li>
            kullanıcılar ayrıca Yapay Zeka Ürünlerimizle olan etkileşimleri hakkında
            ayrıntılı geri bildirimi <a href="mailto:info@safolio.com">info@safolio.com</a>
            {" "}adresine e-posta göndererek veya bu belgenin altındaki iletişim bilgilerine
            başvurarak gönderebilirler. Bağlam, endişenin niteliği ve ilgili ekran görüntüleri
            veya belgeler gibi yapay zeka etkileşimi hakkında belirli ayrıntıları eklemelisiniz
          </li>
        </ul>
        <p>Bir Hizmetin, İçeriğin veya Katkının bu Politikayı ihlal edip etmediğini makul ölçüde belirleyeceğiz.</p>

        <h2>Bu Politikanın ihlalinin sonuçları</h2>
        <p>
          Politikamızı ihlal etmenin sonuçları, ihlalin ciddiyetine ve kullanıcının
          Hizmetlerdeki geçmişine bağlı olarak değişecektir, örneğin:
        </p>
        <p>
          Bazı durumlarda size bir uyarı verebilir ve/veya ihlal eden Katkıyı kaldırabiliriz,
          ancak ihlaliniz ciddiyse ya da Yasal Koşullarımızı ve bu Politikayı ihlal etmeye
          devam ederseniz, Hizmetlerimize erişiminizi ve kullanımınızı askıya alma veya
          sonlandırma ve uygun olduğunda hesabınızı devre dışı bırakma hakkına sahibiz.
          Ayrıca, bir bireye gerçek bir risk veya kamu güvenliğine bir tehdit olduğuna
          inandığımızda, kolluk kuvvetlerine bildirimde bulunabilir veya size karşı yasal işlem
          başlatabiliriz.
        </p>
        <p>Bu Politikanın ihlali durumunda alabileceğimiz tüm eylemlere ilişkin sorumluluğumuzu hariç tutarız.</p>

        <h2>Sorumluluk Reddi</h2>
        <p>
          Safolio B.V., kullanıcıların etkinliklerini izlemekle yükümlü değildir ve herhangi
          bir kullanıcının Hizmetleri kötüye kullanmasından doğan herhangi bir sorumluluğu
          reddederiz. Safolio B.V., Hizmetler üzerinde veya Hizmetler aracılığıyla oluşturulan,
          sürdürülen, saklanan, iletilen veya erişilebilir olan herhangi bir kullanıcı veya
          diğer İçerik ya da Katkı için herhangi bir sorumluluğa sahip değildir ve bu tür
          materyalleri izlemekle veya üzerlerinde herhangi bir editoryal kontrol uygulamakla
          yükümlü değildir. Safolio B.V., bu tür bir İçerik veya Katkının bu Politikayı ihlal
          ettiğinden haberdar olursa, bu İçerik veya Katkıyı kaldırmaya ve hesabınızı engellemeye
          ek olarak, bu ihlali polise veya uygun düzenleyici makama bildirebilir. Bu Politikada
          aksi belirtilmedikçe, Safolio B.V., Hizmetlerin kullanımı için Safolio B.V. ile bir
          anlaşma yapmamış herhangi bir kişiye karşı herhangi bir yükümlülüğü reddeder.
        </p>

        <h2>Bu Politika hakkında bizimle nasıl iletişim kurabilirsiniz?</h2>
        <p>
          Başka sorularınız veya yorumlarınız varsa ya da sorunlu herhangi bir İçeriği veya
          Katkıyı bildirmek istiyorsanız, bizimle şu şekilde iletişime geçebilirsiniz:
        </p>
        <p>
          E-posta: <a href="mailto:info@safolio.com">info@safolio.com</a>
        </p>
      </LegalLayout>
    );
  }

  return (
    <LegalLayout title={t("legal4")}>
      <p className="text-sm text-ink3">Last updated February 01, 2026</p>

      <p>
        This Acceptable Use Policy (&apos;Policy&apos;) is part of our Terms of Service
        (&apos;Legal Terms&apos;) and should therefore be read alongside our main{" "}
        <Link href="/terms-and-conditions">Legal Terms</Link>. When you use the AI-powered
        services provided by Safolio B.V. (&apos;AI Products&apos;), you warrant that you will
        comply with this document, our Legal Terms and all applicable laws and regulations
        governing AI. Your usage of our AI Products signifies your agreement to engage with our
        platform in a lawful, ethical, and responsible manner that respects the rights and
        dignity of all individuals. If you do not agree with these Legal Terms, please refrain
        from using our Services. Your continued use of our Services implies acceptance of these
        Legal Terms.
      </p>
      <p>Please carefully review this Policy which applies to any and all:</p>
      <ul>
        <li>(a) uses of our Services (as defined in &apos;Legal Terms&apos;)</li>
        <li>
          (b) forms, materials, consent tools, comments, post, and all other content available
          on the Services (&apos;Content&apos;)
        </li>
        <li>
          (c) material which you contribute to the Services including any upload, post, review,
          disclosure, ratings, comments, chat etc. in any forum, chatrooms, reviews, and to any
          interactive services associated with it (&apos;Contribution&apos;)
        </li>
        <li>(d) responsible implementation and management of AI Products within our Services</li>
      </ul>

      <h2>Who we are</h2>
      <p>
        We are Safolio B.V., doing business as Safolio (&apos;Company&apos;, &apos;we&apos;,
        &apos;us&apos;, or &apos;our&apos;) a company registered in Netherlands at 2-A
        Abtstraat, Utrecht, Utrecht 3512 AB. We operate the website{" "}
        <a href="https://safolio.com">https://safolio.com</a> (the &apos;Site&apos;), the
        mobile application Safolio (the &apos;App&apos;), as well as any other related products
        and services that refer or link to this Policy (collectively, the &apos;Services&apos;).
      </p>

      <h2>Use of the Services</h2>
      <p>
        When you use the Services, you warrant that you will comply with this Policy and with
        all applicable laws.
      </p>
      <p>You also acknowledge that you may not:</p>
      <ul>
        <li>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
        <li>Make any unauthorised use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretences.</li>
        <li>Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.</li>
        <li>Engage in unauthorised framing of or linking to the Services.</li>
        <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
        <li>Make improper use of our Services, including our support services or submit false reports of abuse or misconduct.</li>
        <li>Engage in any automated use of the Services, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
        <li>Interfere with, disrupt, or create an undue burden on the Services or the networks or the Services connected.</li>
        <li>Attempt to impersonate another user or person or use the username of another user.</li>
        <li>Use any information obtained from the Services in order to harass, abuse, or harm another person.</li>
        <li>Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavour or commercial enterprise.</li>
        <li>Decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services, except as expressly permitted by applicable law.</li>
        <li>Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.</li>
        <li>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.</li>
        <li>Delete the copyright or other proprietary rights notice from any Content.</li>
        <li>Copy or adapt the Services&apos; software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li>
        <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party&apos;s uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.</li>
        <li>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats (&apos;gifs&apos;), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as &apos;spyware&apos; or &apos;passive collection mechanisms&apos; or &apos;pcms&apos;).</li>
        <li>Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or using or launching any unauthorised script or other software.</li>
        <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
        <li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
        <li>Use a buying agent or purchasing agent to make purchases on the Services.</li>
        <li>Sell or otherwise transfer your profile.</li>
      </ul>

      <h3>Subscriptions</h3>
      <p>
        If you subscribe to our Services, you understand, acknowledge, and agree that you may
        not, except if expressly permitted:
      </p>
      <ul>
        <li>Engage in any use, including modification, copying, redistribution, publication, display, performance, or retransmission, of any portions of any Services, other than as expressly permitted by this Policy, without the prior written consent of Safolio B.V., which consent Safolio B.V. may grant or refuse in its sole and absolute discretion.</li>
        <li>Reconstruct or attempt to discover any source code or algorithms of the Services, or any portion thereof, by any means whatsoever.</li>
        <li>Provide, or otherwise make available, the Services to any third party.</li>
        <li>Intercept any data not intended for you.</li>
        <li>Damage, reveal, or alter any user&apos;s data, or any other hardware, software, or information relating to another person or entity.</li>
      </ul>
      <p>
        For additional prohibited activities, please see{" "}
        <Link href="/terms-and-conditions">Terms of Service</Link>.
      </p>

      <h3>AI Products</h3>
      <p>
        When you use the AI Products provided by Safolio B.V., you warrant that you will not:
      </p>
      <ul>
        <li>Deploy AI techniques that utilise subliminal, manipulative, or deceptive methods designed to distort behaviour and impair informed decision-making, particularly when such actions cause significant harm to individuals.</li>
        <li>Exploit vulnerabilities related to age, disability, or socio-economic circumstances through AI in a way that distorts behaviour or decision-making, especially if this results in significant harm to the individual.</li>
        <li>Use AI systems for biometric categorization that infer sensitive attributes such as race, political opinions, trade union membership, religious or philosophical beliefs, sex life, or sexual orientation, except in limited cases, such as labelling or filtering lawfully acquired datasets, or specific law enforcement activities.</li>
        <li>Implement AI-based social scoring systems that evaluate or classify individuals or groups based on their social behaviour or personal traits in a manner that causes harm, discrimination, or unfair treatment.</li>
        <li>Assess the risk of an individual committing criminal offenses based solely on profiling, personality traits, or other non-behavioural factors, except in narrowly defined circumstances where legal safeguards are in place.</li>
        <li>Not compile facial recognition databases through untargeted scraping of facial images from the internet, social media, or CCTV footage, unless it is part of a legally compliant and narrowly defined purpose.</li>
        <li>Use AI to infer emotions in sensitive environments such as workplaces, educational institutions, or any other context where such analysis could lead to discrimination, unfair treatment, or privacy violations.</li>
        <li>Engage in real-time remote biometric identification in public places for law enforcement purposes, except in specific situations where there are strong legal justifications and oversight mechanisms.</li>
      </ul>

      <h2>Artificial intelligence</h2>
      <p>
        We recognise the significant impact AI can have on our users and society, and we are
        dedicated to ensuring that our AI Products are designed and operated in a manner that
        aligns with comprehensive ethical standards. We aim to use AI to enhance user
        experiences while upholding fairness, transparency, and accountability principles.
      </p>
      <p>
        This Policy applies to all AI-powered features, services, and systems in our Services.
        It governs the development, deployment, and use of AI technologies to protect
        users&apos; rights and maintain transparency in all AI operations. This Policy applies
        to all stakeholders, including employees, third-party vendors, and partners who
        contribute to or interact with our AI Products.
      </p>
      <h3>Enforcement</h3>
      <p>
        Any misuse of our AI Products or failure to adhere to the standards outlined in this
        Policy will result in appropriate actions to ensure the integrity of our platform and
        the protection of our users. The specific consequences for misuse of AI may vary
        depending on the nature and severity of the violation and the user&apos;s history with
        our Services.
      </p>
      <p>Violations may include, but are not limited to:</p>
      <ul>
        <li>Engaging the AI Products in ways that violate user privacy, manipulate data, disregard ethical guidelines, or are against AI Service Providers&apos; terms of use.</li>
        <li>Deploying AI in a manner that introduces or causes bias, leading to unfair treatment of users or groups.</li>
        <li>Improper handling, storage, or use of data by AI Products, leading to breaches of user trust and legal compliance.</li>
        <li>Using AI in a way that compromises the privacy and security of our systems, data, or users.</li>
      </ul>
      <p>Depending on the violation, Safolio B.V. may take one or more of the following actions:</p>
      <ul>
        <li>
          <strong>Warnings:</strong> The responsible party may receive a formal warning and be
          required to cease violating practices.
        </li>
        <li>
          <strong>Temporary Suspension:</strong> In cases of repeated or more severe violations,
          the responsible individual&apos;s access to AI Products or certain features of our
          platform may be temporarily suspended while the issue is investigated.
        </li>
        <li>
          <strong>Termination of Access:</strong> Serious violations, particularly those that
          result in harm to users or breach privacy or other regulations, may lead to the
          permanent termination of access to our AI Products and Services.
        </li>
        <li>
          <strong>Legal Action:</strong> In cases where the misuse of AI leads to significant
          harm, data breaches, or legal violations, we may pursue legal action against the
          party responsible. This could include reporting the incident to law enforcement or
          regulatory bodies.
        </li>
        <li>
          <strong>Public Disclosure:</strong> For incidents that impact public trust or involve
          severe ethical breaches, we reserve the right to publicly disclose the violation and
          the actions taken in response to maintain transparency and accountability.
        </li>
      </ul>
      <h3>Commitment to Responsible AI</h3>
      <p>
        In addition to the consequences outlined above, we are deeply committed to repairing
        any harm caused by the misuse of AI. This commitment is a testament to our dedication
        to our users and our responsibility as a company. We will correct biased outcomes and
        implement additional safeguards to prevent future violations.
      </p>
      <p>
        At Safolio B.V., we are committed to the ongoing refinement and enhancement of our
        Policy. As technology evolves and regulatory environments shift, we recognise the
        importance of keeping our policies up to date to ensure that they remain relevant,
        effective, and aligned with best practices in AI ethics. We will regularly review and
        update our Policy to reflect technological advancements and legal changes in local,
        national, and international regulations related to AI. Our Policy will be updated as
        needed to comply with new laws and guidelines, ensuring that our practices remain
        legally sound and socially responsible.
      </p>

      <h2>Contributions</h2>
      <p>In this Policy, the term &apos;Contribution&apos; means:</p>
      <ul>
        <li>any data, information, software, text, code, music, scripts, sound, graphics, photos, videos, tags, messages, interactive features, or other materials that you post, share, upload, submit, or otherwise provide in any manner on or through to the Services; or</li>
        <li>any other content, materials, or data you provide to Safolio B.V. or use with the Services.</li>
      </ul>
      <p>
        Some areas of the Services may allow users to upload, transmit, or post Contributions.
        We may but are under no obligation to review or moderate the Contributions made on the
        Services, and we expressly exclude our liability for any loss or damage resulting from
        any of our users&apos; breach of this Policy. Please report any Contribution that you
        believe breaches this Policy; however, we will determine, in our sole discretion,
        whether a Contribution is indeed in breach of this Policy.
      </p>
      <p>You warrant that:</p>
      <ul>
        <li>you are the creator and owner of or have the necessary licences, rights, consents, releases, and permissions to use and to authorise us, the Services, and other users of the Services to use your Contributions in any manner contemplated by the Services and this Policy;</li>
        <li>all your Contributions comply with applicable laws and are original and true (if they represent your opinion or facts);</li>
        <li>the creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party; and</li>
        <li>you have the verifiable consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Services and this Policy.</li>
      </ul>
      <p>You also agree that you will not post, transmit, or upload any (or any part of a) Contribution that:</p>
      <ul>
        <li>is in breach of applicable laws, regulation, court order, contractual obligation, this Policy, our Legal Terms, a legal duty, or that promotes or facilitates fraud or illegal activities;</li>
        <li>is defamatory, obscene, offensive, hateful, insulting, intimidating, bullying, abusive, or threatening, to any person or group;</li>
        <li>is false, inaccurate, or misleading;</li>
        <li>includes child sexual abuse material, or violates any applicable law concerning child pornography or otherwise intended to protect minors;</li>
        <li>contains any material that solicits personal information from anyone under the age of 18 or exploits people under the age of 18 in a sexual or violent manner;</li>
        <li>promotes violence, advocates the violent overthrow of any government, or incites, encourages, or threatens physical harm against another;</li>
        <li>is obscene, lewd, lascivious, filthy, violent, harassing, libellous, slanderous, contains sexually explicit material, or is otherwise objectionable (as determined by us);</li>
        <li>is discriminatory based on race, sex, religion, nationality, disability, sexual orientation, or age;</li>
        <li>bullies, intimidates, humiliates, or insults any person;</li>
        <li>promotes, facilitates, or assists anyone in promoting and facilitating acts of terrorism;</li>
        <li>infringes, or assists anyone in infringing, a third party&apos;s intellectual property rights or publicity or privacy rights;</li>
        <li>is deceitful, misrepresents your identity or affiliation with any person and/or misleads anyone as to your relationship with us or implies that the Contribution was made by someone else than you;</li>
        <li>contains unsolicited or unauthorised advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation that has been &apos;paid for&apos;, whether with monetary compensation or in kind; or</li>
        <li>misrepresents your identity or who the Contribution is from.</li>
      </ul>

      <h2>Reporting a breach of this Policy</h2>
      <p>
        We may but are under no obligation to review or moderate the Contributions made on the
        Services and we expressly exclude our liability for any loss or damage resulting from
        any of our users&apos; breach of this Policy.
      </p>
      <p>If you consider that any Service, Content, or Contribution:</p>
      <ul>
        <li>
          breach this Policy, please email us at{" "}
          <a href="mailto:info@safolio.com">info@safolio.com</a>, or refer to the contact
          details at the bottom of this document to let us know which Service, Content, or
          Contribution is in breach of this Policy and why
        </li>
        <li>
          infringe any third-party intellectual property rights, please email us at{" "}
          <a href="mailto:info@safolio.com">info@safolio.com</a>
        </li>
        <li>
          users can also send detailed feedback on their interactions with our AI Products by
          emailing <a href="mailto:info@safolio.com">info@safolio.com</a>, or referring to the
          contact details at the bottom of this document. You should include specific details
          about the AI interaction, such as the context, the nature of the concern, and any
          relevant screenshots or documentation
        </li>
      </ul>
      <p>We will reasonably determine whether a Service, Content, or Contribution breaches this Policy.</p>

      <h2>Consequences of breaching this Policy</h2>
      <p>
        The consequences for violating our Policy will vary depending on the severity of the
        breach and the user&apos;s history on the Services, by way of example:
      </p>
      <p>
        We may, in some cases, give you a warning and/or remove the infringing Contribution,
        however, if your breach is serious or if you continue to breach our Legal Terms and
        this Policy, we have the right to suspend or terminate your access to and use of our
        Services and, if applicable, disable your account. We may also notify law enforcement
        or issue legal proceedings against you when we believe that there is a genuine risk to
        an individual or a threat to public safety.
      </p>
      <p>We exclude our liability for all action we may take in response to any of your breaches of this Policy.</p>

      <h2>Disclaimer</h2>
      <p>
        Safolio B.V. is under no obligation to monitor users&apos; activities, and we disclaim
        any responsibility for any user&apos;s misuse of the Services. Safolio B.V. has no
        responsibility for any user or other Content or Contribution created, maintained,
        stored, transmitted, or accessible on or through the Services, and is not obligated to
        monitor or exercise any editorial control over such material. If Safolio B.V. becomes
        aware that any such Content or Contribution violates this Policy, Safolio B.V. may, in
        addition to removing such Content or Contribution and blocking your account, report
        such breach to the police or appropriate regulatory authority. Unless otherwise stated
        in this Policy, Safolio B.V. disclaims any obligation to any person who has not entered
        into an agreement with Safolio B.V. for the use of the Services.
      </p>

      <h2>How can you contact us about this Policy?</h2>
      <p>
        If you have any further questions or comments or wish to report any problematic Content
        or Contribution, you may contact us by:
      </p>
      <p>
        Email: <a href="mailto:info@safolio.com">info@safolio.com</a>
      </p>
    </LegalLayout>
  );
}
