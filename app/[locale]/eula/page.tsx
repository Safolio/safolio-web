import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { LegalLayout } from "@/components/legal-layout";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Footer" });
  return { title: `${t("legal5")} — Safolio` };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Footer" });
  if (locale === "tr") {
    return (
      <LegalLayout title={t("legal5")}>
        <p className="text-sm text-ink3">Son güncelleme: 01 Şubat 2026</p>

        <p>
          Safolio, Safolio B.V. tarafından Size (Son Kullanıcı) bu Lisans Sözleşmesi&apos;nin
          şartları altında kullanılmak üzere lisanslanmıştır. Safolio B.V., 2-A Abtstraat,
          Utrecht, Utrecht 3512 AB, Hollanda adresinde bulunmakta ve kayıtlıdır
          (&apos;Lisansör&apos;). KDV numaramız NL868276042B01&apos;dir.
        </p>
        <p>
          Lisanslı Uygulamayı Apple&apos;ın yazılım dağıtım platformundan (&apos;App
          Store&apos;) ve Google&apos;ın yazılım dağıtım platformundan (&apos;Play Store&apos;)
          ve bunlara ilişkin her türlü güncellemeyi (bu Lisans Sözleşmesi&apos;nin izin verdiği
          şekilde) indirerek, bu Lisans Sözleşmesi&apos;nin tüm şart ve koşullarına bağlı
          kalmayı kabul ettiğinizi ve bu Lisans Sözleşmesi&apos;ni kabul ettiğinizi
          belirtirsiniz. App Store ve Play Store, bu Lisans Sözleşmesi&apos;nde
          &apos;Hizmetler&apos; olarak anılmaktadır.
        </p>
        <p>
          Bu Lisans Sözleşmesi&apos;nin tarafları, Hizmetlerin bu Lisans Sözleşmesi&apos;nin
          bir Tarafı olmadığını ve Lisanslı Uygulama ile ilgili olarak garanti, sorumluluk,
          bakım ve destek gibi hiçbir hüküm veya yükümlülükle bağlı olmadığını kabul eder.
          Lisanslı Uygulama ve içeriğinden yalnızca Safolio B.V. sorumludur, Hizmetler değildir.
        </p>
        <p>
          Bu Lisans Sözleşmesi, Lisanslı Uygulamanın kullanımına ilişkin en güncel Apple Media
          Services Şartlar ve Koşulları ile Google Play Hizmet Şartları (&apos;Kullanım
          Kuralları&apos;) ile çelişen kullanım kuralları öngöremez. Safolio B.V., Kullanım
          Kurallarını inceleme fırsatı bulduğunu ve bu Lisans Sözleşmesi&apos;nin bunlarla
          çelişmediğini kabul eder.
        </p>
        <p>
          Hizmetler aracılığıyla satın alınan veya indirilen Safolio, yalnızca bu Lisans
          Sözleşmesi&apos;nin şartları altında kullanılmak üzere Size lisanslanmıştır. Lisansör,
          Size açıkça verilmeyen tüm hakları saklı tutar. Safolio, Apple&apos;ın işletim
          sistemleri (&apos;iOS&apos; ve &apos;Mac OS&apos;) veya Google&apos;ın işletim sistemi
          (&apos;Android&apos;) ile çalışan cihazlarda kullanılmak içindir.
        </p>

        <h2>İçindekiler</h2>
        <ol>
          <li>Uygulama</li>
          <li>Lisansın kapsamı</li>
          <li>Teknik gereksinimler</li>
          <li>Bakım ve destek</li>
          <li>Verilerin kullanımı</li>
          <li>Kullanıcı tarafından oluşturulan katkılar</li>
          <li>Katkı lisansı</li>
          <li>Sorumluluk</li>
          <li>Garanti</li>
          <li>Ürün talepleri</li>
          <li>Yasal uyumluluk</li>
          <li>İletişim bilgileri</li>
          <li>Fesih</li>
          <li>Üçüncü taraf sözleşme şartları ve lehdar</li>
          <li>Fikri mülkiyet hakları</li>
          <li>Geçerli hukuk</li>
          <li>Çeşitli hükümler</li>
        </ol>

        <h2>1. Uygulama</h2>
        <p>
          Safolio (&apos;Lisanslı Uygulama&apos;), kullanıcılara kişisel yatırım portföylerini
          merkezi bir dijital ortamda takip etme, birleştirme ve analiz etme araçları sunmak
          için oluşturulmuş ve iOS ile Android mobil cihazlar (&apos;Cihazlar&apos;) için
          özelleştirilmiş bir yazılım parçasıdır. Kullanıcı tarafından sağlanan veriler ve
          üçüncü taraf veri kaynaklarına dayalı olarak varlık tutumlarını, portföy
          değerlemelerini, geçmiş performansı ve varlık dağılımı bilgilerini görüntüleme dahil
          kişisel portföy izleme ve analizinde kullanılır.
        </p>
        <p>
          Ayrıca, birden fazla hesap ve kurumdan yatırım verilerini yalnızca okuma modunda
          toplamak, bilgilendirme amaçlı geçmiş ve güncel piyasa verilerini görüntülemek,
          performans karşılaştırmaları, portföy özetleri ve varsayımsal veya
          &ldquo;ya olsaydı&rdquo; senaryoları gibi analitik araçlar sağlamak ve kişisel
          referans ve kayıt tutma amacıyla finansal bilgileri düzenlemek ve görselleştirmek için
          kullanılır.
        </p>
        <p>
          Lisanslı Uygulama, sektöre özgü düzenlemelere (Sağlık Sigortası Taşınabilirlik ve
          Hesap Verebilirlik Yasası (HIPAA), Federal Bilgi Güvenliği Yönetim Yasası (FISMA) vb.)
          uyacak şekilde tasarlanmamıştır; bu nedenle etkileşimleriniz bu tür yasalara tabi
          olacaksa, bu Lisanslı Uygulamayı kullanamazsınız. Lisanslı Uygulamayı Gramm-Leach-Bliley
          Yasası&apos;nı (GLBA) ihlal edecek şekilde kullanamazsınız.
        </p>

        <h2>2. Lisansın kapsamı</h2>
        <p>
          2.1 Size (Son Kullanıcı), Sizin sahip olduğunuz veya kontrol ettiğiniz herhangi bir
          Cihaza Lisanslı Uygulamayı kurmak ve kullanmak için Kullanım Kurallarının izin verdiği
          ölçüde devredilemez, münhasır olmayan ve alt lisans verilemeyen bir lisans verilmiştir;
          ancak bu Lisanslı Uygulamaya, Aile Paylaşımı veya Toplu Satın Alma yoluyla Sizinle
          (Son Kullanıcı, Satın Alıcı) ilişkili diğer hesaplar tarafından erişilebilir ve
          kullanılabilir.
        </p>
        <p>
          2.2 Bu lisans, Lisansör tarafından sağlanan ve ilk Lisanslı Uygulamanın yerini alan,
          onaran ve/veya tamamlayan Lisanslı Uygulamanın her türlü güncellemesini de
          yönetecektir; ancak böyle bir güncelleme için ayrı bir lisans sağlanması durumunda, bu
          yeni lisansın şartları geçerli olacaktır.
        </p>
        <p>
          2.3 Lisanslı Uygulamayı üçüncü taraflarla paylaşamaz veya üçüncü tarafların
          kullanımına sunamazsınız (Kullanım Kurallarının izin verdiği ölçüde ve Safolio
          B.V.&apos;nin önceden yazılı izni dışında); Lisanslı Uygulamayı satamaz, kiralayamaz,
          ödünç veremez, kiraya veremez veya başka bir şekilde yeniden dağıtamazsınız.
        </p>
        <p>
          2.4 Lisanslı Uygulamayı veya herhangi bir bölümünü tersine mühendislik yapamaz,
          çeviremez, parçalara ayıramaz, entegre edemez, kodunu çözemez, kaldıramaz,
          değiştiremez, birleştiremez, türev çalışmalar veya güncellemeler oluşturamaz,
          uyarlayamaz veya kaynak kodunu türetmeye çalışamazsınız (Safolio B.V.&apos;nin
          önceden yazılı izni hariç).
        </p>
        <p>
          2.5 Lisanslı Uygulamayı veya bölümlerini kopyalayamaz (bu lisans ve Kullanım Kuralları
          tarafından açıkça yetkilendirildiği durumlar hariç) veya değiştiremezsiniz. Yalnızca
          bu lisans, Kullanım Kuralları ve cihaza veya kullanılan yazılıma uygulanan diğer
          şartlar ve koşullar kapsamında yedekleme amacıyla sahip olduğunuz veya kontrol
          ettiğiniz cihazlarda kopyalar oluşturabilir ve saklayabilirsiniz. Herhangi bir fikri
          mülkiyet bildirimini kaldıramazsınız. Yetkisiz üçüncü tarafların bu kopyalara hiçbir
          zaman erişim sağlayamayacağını kabul edersiniz. Cihazlarınızı üçüncü bir tarafa
          satarsanız, satmadan önce Lisanslı Uygulamayı Cihazlardan kaldırmanız gerekir.
        </p>
        <p>
          2.6 Yukarıda belirtilen yükümlülüklerin ihlali ve böyle bir ihlal girişimi,
          kovuşturma ve tazminata konu olabilir.
        </p>
        <p>2.7 Lisansör, lisans şart ve koşullarını değiştirme hakkını saklı tutar.</p>
        <p>
          2.8 Bu lisanstaki hiçbir şey üçüncü taraf şartlarını kısıtlayacak şekilde
          yorumlanmamalıdır. Lisanslı Uygulamayı kullanırken, geçerli üçüncü taraf şart ve
          koşullarına uyduğunuzdan emin olmalısınız.
        </p>

        <h2>3. Teknik gereksinimler</h2>
        <p>
          3.1 Lisansör, Lisanslı Uygulamayı, değiştirilmiş/yeni donanım yazılımı sürümleri ve
          yeni donanım ile uyumlu hale getirmek için güncel tutmaya çalışır. Size böyle bir
          güncelleme talep etme hakkı verilmemiştir.
        </p>
        <p>
          3.2 Lisanslı Uygulamayı kullanmayı düşündüğünüz uygulama son kullanıcı cihazının
          yukarıda belirtilen teknik özellikleri karşıladığını doğrulamak ve belirlemek Sizin
          sorumluluğunuzdadır.
        </p>
        <p>
          3.3 Lisansör, uygun gördüğü zamanlarda teknik özellikleri değiştirme hakkını saklı
          tutar.
        </p>

        <h2>4. Bakım ve destek</h2>
        <p>
          4.1 Bu Lisanslı Uygulama için bakım ve destek hizmetleri sağlamaktan yalnızca
          Lisansör sorumludur. Lisansöre, bu Lisanslı Uygulama için App Store veya Play
          Store&apos;daki Genel Bakış sayfasında listelenen e-posta adresinden ulaşabilirsiniz.
        </p>
        <p>
          4.2 Safolio B.V. ve Son Kullanıcı, Hizmetlerin Lisanslı Uygulama ile ilgili herhangi
          bir bakım ve destek hizmeti sağlamak konusunda hiçbir yükümlülüğü olmadığını kabul
          eder.
        </p>

        <h2>5. Verilerin kullanımı</h2>
        <p>
          Lisansörün, indirilen Lisanslı Uygulama içeriğinize ve kişisel bilgilerinize
          erişebileceğini ve bunları düzenleyebileceğini ve Lisansörün bu tür materyal ve
          bilgileri kullanmasının, Lisansör ile yaptığınız yasal anlaşmalara ve web sitesi ve
          uygulamadaki bağlantıya tıklanarak erişilebilen Lisansörün gizlilik politikasına tabi
          olduğunu kabul edersiniz.
        </p>
        <p>
          Lisansörün, cihazınız, sisteminiz ve uygulama yazılımınız ile çevre birimleriniz
          hakkında teknik veriler ve ilgili bilgileri periyodik olarak toplayabileceğini ve
          kullanabileceğini, ürün desteği sunabileceğini, yazılım güncellemelerini
          kolaylaştırabileceğini ve size (varsa) Lisanslı Uygulama ile ilgili diğer hizmetleri
          sağlamak amacıyla bu bilgileri kullanabileceğini kabul edersiniz. Lisansör, sizi
          kişisel olarak tanımlamayan bir biçimde olduğu sürece, bu bilgileri ürünlerini
          geliştirmek veya size hizmet veya teknoloji sağlamak için de kullanabilir.
        </p>

        <h2>6. Kullanıcı tarafından oluşturulan katkılar</h2>
        <p>
          Lisanslı Uygulama, sizi sohbet etmeye, bloglara, mesaj panolarına, çevrimiçi forumlara
          ve diğer işlevlere katkıda bulunmaya veya katılmaya davet edebilir ve size, bize veya
          Lisanslı Uygulamada içerik ve materyaller oluşturma, gönderme, yayınlama, görüntüleme,
          iletme, gerçekleştirme, yayımlama, dağıtma veya yayınlama fırsatı sağlayabilir; bunlar
          arasında metin, yazılar, video, ses, fotoğraflar, grafikler, yorumlar, öneriler veya
          kişisel bilgiler veya diğer materyaller (toplu olarak &apos;Katkılar&apos;) yer alır,
          ancak bunlarla sınırlı değildir. Katkılar, Lisanslı Uygulamanın diğer kullanıcıları
          ve üçüncü taraf web siteleri veya uygulamaları aracılığıyla görüntülenebilir. Bu
          nedenle, ilettiğiniz herhangi bir Katkı, gizli olmayan ve mülkiyet hakkı içermeyen
          olarak değerlendirilebilir. Herhangi bir Katkı oluşturduğunuzda veya kullanıma
          sunduğunuzda, aşağıdakileri beyan ve garanti edersiniz:
        </p>
        <ol>
          <li>Katkılarınızın oluşturulması, dağıtılması, iletilmesi, kamuya açık olarak görüntülenmesi veya gerçekleştirilmesi ve erişilmesi, indirilmesi veya kopyalanması, telif hakkı, patent, ticari marka, ticari sır veya manevi haklar dahil ancak bunlarla sınırlı olmamak üzere herhangi bir üçüncü tarafın mülkiyet haklarını ihlal etmez ve etmeyecektir.</li>
          <li>Katkılarınızın yaratıcısı ve sahibisiniz ya da Katkılarınızı Lisanslı Uygulama tarafından öngörülen herhangi bir şekilde ve bu Lisans Sözleşmesi kapsamında kullanmak ve bizim, Lisanslı Uygulamanın ve Lisanslı Uygulamanın diğer kullanıcılarının kullanmasına izin vermek için gerekli lisanslara, haklara, onaylara, izinlere ve yetkilere sahipsiniz.</li>
          <li>Katkılarınızda yer alan tanımlanabilir her bir bireyin Katkılarınızda kullanılmak üzere adının veya benzerliğinin Lisanslı Uygulama tarafından öngörülen herhangi bir şekilde ve bu Lisans Sözleşmesi kapsamında dahil edilmesini ve kullanılmasını sağlamak için her bir tanımlanabilir bireyden yazılı onay, izin ve/veya muvafakat almış bulunmaktasınız.</li>
          <li>Katkılarınız yanlış, hatalı veya yanıltıcı değildir.</li>
          <li>Katkılarınız, istenmeyen veya yetkisiz reklam, tanıtım materyalleri, piramit şemaları, zincir mektuplar, spam, toplu postalar veya diğer talep formları değildir.</li>
          <li>Katkılarınız müstehcen, açık saçık, şehvet düşkünü, kirli, şiddet içerikli, taciz edici, iftira niteliğinde, karalayıcı veya başka bir şekilde sakıncalı (bizim tarafımızdan belirlendiği şekilde) değildir.</li>
          <li>Katkılarınız hiç kimseyle alay etmez, küçük düşürmez, gözden düşürmez, korkutmaz veya istismar etmez.</li>
          <li>Katkılarınız, başka bir kişiyi taciz etmek veya tehdit etmek (bu terimlerin yasal anlamında) ve belirli bir kişiye veya kişi sınıfına karşı şiddeti teşvik etmek için kullanılmaz.</li>
          <li>Katkılarınız geçerli herhangi bir yasayı, yönetmeliği veya kuralı ihlal etmez.</li>
          <li>Katkılarınız herhangi bir üçüncü tarafın gizlilik veya tanıtım haklarını ihlal etmez.</li>
          <li>Katkılarınız çocuk pornografisi ile ilgili veya küçüklerin sağlığını veya esenliğini korumayı amaçlayan herhangi bir geçerli yasayı ihlal etmez.</li>
          <li>Katkılarınız ırk, ulusal köken, cinsiyet, cinsel tercih veya fiziksel engelle ilgili saldırgan yorumlar içermez.</li>
          <li>Katkılarınız, bu Lisans Sözleşmesi&apos;nin herhangi bir hükmünü veya geçerli herhangi bir yasa veya yönetmeliği başka bir şekilde ihlal etmez veya ihlal eden materyallere bağlantı vermez.</li>
        </ol>
        <p>
          Lisanslı Uygulamanın yukarıdakileri ihlal eden herhangi bir şekilde kullanılması, bu
          Lisans Sözleşmesi&apos;ni ihlal eder ve diğer şeylerin yanı sıra, Lisanslı Uygulamayı
          kullanma haklarınızın feshedilmesine veya askıya alınmasına neden olabilir.
        </p>

        <h2>7. Katkı lisansı</h2>
        <p>
          Katkılarınızı Lisanslı Uygulamanın herhangi bir bölümüne göndererek veya Lisanslı
          Uygulamadaki hesabınızı sosyal ağ hesaplarınızdan herhangi birine bağlayarak
          Katkıları Lisanslı Uygulamaya erişilebilir hale getirerek, otomatik olarak bize
          kısıtlamasız, sınırsız, geri alınamaz, kalıcı, münhasır olmayan, devredilebilir,
          telifsiz, tamamen ödenmiş, dünya çapında bir hak ve lisans vermiş olursunuz ve böyle
          bir hak verme hakkına sahip olduğunuzu beyan ve garanti edersiniz. Bu lisans;
          Katkıları (görüntünüz ve sesiniz dahil ancak bunlarla sınırlı olmamak üzere) herhangi
          bir amaçla, ticari reklam veya başka bir şekilde barındırma, kullanma, kopyalama,
          çoğaltma, ifşa etme, satma, yeniden satma, yayımlama, yayınlama, yeniden adlandırma,
          arşivleme, saklama, önbelleğe alma, kamuya açık olarak görüntüleme, yeniden
          biçimlendirme, çevirme, iletme, alıntılama (tamamen veya kısmen) ve dağıtma ve bu tür
          Katkıların türev çalışmalarını hazırlama veya başka çalışmalara dahil etme ve
          yukarıdakilerin alt lisanslarını verme ve yetkilendirme hakkını içerir. Kullanım ve
          dağıtım herhangi bir medya formatında ve herhangi bir medya kanalı aracılığıyla
          gerçekleşebilir.
        </p>
        <p>
          Bu lisans, şu anda bilinen veya bundan sonra geliştirilecek herhangi bir form, medya
          veya teknolojiye uygulanacak ve adınızın, şirket adınızın ve franchise adınızın
          (uygulanabilir olduğu durumlarda) ve sağladığınız ticari markaların, hizmet
          markalarının, ticari isimlerin, logoların ve kişisel ve ticari görüntülerin
          kullanımını içerir. Katkılarınızdaki tüm manevi haklardan feragat eder ve manevi
          hakların Katkılarınızda başka bir şekilde ileri sürülmediğini garanti edersiniz.
        </p>
        <p>
          Katkılarınız üzerinde herhangi bir mülkiyet iddiasında bulunmayız. Tüm Katkılarınızın
          ve Katkılarınızla ilişkili herhangi bir fikri mülkiyet hakkının veya diğer mülkiyet
          haklarının tam mülkiyetini elinizde tutarsınız. Lisanslı Uygulamadaki herhangi bir
          alanda tarafınızca sağlanan Katkılarınızdaki ifadelerden veya beyanlardan sorumlu
          değiliz. Lisanslı Uygulamaya yaptığınız Katkılardan yalnızca siz sorumlusunuz ve
          Katkılarınızla ilgili olarak bizi her türlü sorumluluktan muaf tutmayı ve bize karşı
          herhangi bir yasal işlemden kaçınmayı açıkça kabul edersiniz.
        </p>
        <p>
          Tek ve mutlak takdir yetkimizle (1) herhangi bir Katkıyı düzenleme, redakte etme veya
          başka bir şekilde değiştirme; (2) herhangi bir Katkıyı Lisanslı Uygulamada daha uygun
          yerlere yerleştirmek için yeniden kategorize etme; ve (3) herhangi bir zamanda ve
          herhangi bir nedenle, bildirimde bulunmaksızın herhangi bir Katkıyı önceden inceleme
          veya silme hakkına sahibiz. Katkılarınızı izleme yükümlülüğümüz yoktur.
        </p>

        <h2>8. Sorumluluk</h2>
        <p>
          8.1 Lisansörün yükümlülüklerin ihlali ve haksız fiil durumundaki sorumluluğu, kasıt
          ve ağır ihmal ile sınırlı olacaktır. Yalnızca esaslı sözleşme yükümlülüklerinin
          (kardinal yükümlülüklerin) ihlali durumunda, Lisansör hafif ihmal halinde de sorumlu
          tutulacaktır. Her durumda, sorumluluk öngörülebilir, sözleşmeye özgü tipik zararlarla
          sınırlı olacaktır. Yukarıda belirtilen sınırlama, yaşama, vücut bütünlüğüne veya
          sağlığa verilen zararlar için geçerli değildir.
        </p>
        <p>
          8.2 Lisansör, bu Lisans Sözleşmesi&apos;nin 2. Bölümüne göre görevlerin ihlali
          nedeniyle oluşan herhangi bir zarardan dolayı hiçbir hesap verme veya sorumluluk
          kabul etmez. Veri kaybını önlemek için, geçerli üçüncü taraf kullanım şart ve
          koşullarının izin verdiği ölçüde Lisanslı Uygulamanın yedekleme işlevlerini
          kullanmanız gerekir. Lisanslı Uygulamada değişiklik veya manipülasyon yapılması
          durumunda, Lisanslı Uygulamaya erişiminizin olmayacağının farkındasınız.
        </p>
        <p>
          8.3 Lisansör hiçbir durumda hesap verme ve sorumluluk kabul etmez. Ek sınırlamalar
          için lütfen Hizmet Şartlarına bakın.
        </p>

        <h2>9. Garanti</h2>
        <p>
          9.1 Lisansör, Lisanslı Uygulamanın indirme sırasında casus yazılım, truva atı, virüs
          veya başka herhangi bir kötü amaçlı yazılım içermediğini garanti eder. Lisansör,
          Lisanslı Uygulamanın kullanıcı belgelerinde açıklandığı şekilde çalıştığını garanti
          eder.
        </p>
        <p>
          9.2 Cihazda çalıştırılamayan, yetkisiz olarak değiştirilen, uygunsuz veya kusurlu bir
          şekilde işlenen, uygunsuz donanım veya yazılımla birleştirilen veya kurulan, uygunsuz
          aksesuarlarla kullanılan (kendiniz veya üçüncü taraflarca olup olmadığı önemli
          olmaksızın) Lisanslı Uygulama için veya Lisanslı Uygulamanın çalıştırılabilirliğini
          etkileyen Safolio B.V.&apos;nin etki alanı dışındaki başka herhangi bir neden varsa,
          herhangi bir garanti verilmez.
        </p>
        <p>
          9.3 Lisanslı Uygulamayı kurduktan hemen sonra incelemeniz ve keşfedilen sorunları
          gecikme olmaksızın İletişim Bilgileri&apos;nde belirtilen e-posta ile Safolio
          B.V.&apos;ye bildirmeniz gerekmektedir. Kusur raporu, keşiften sonraki doksan (90)
          gün içinde e-posta ile gönderilmişse dikkate alınacak ve daha fazla incelenecektir.
        </p>
        <p>
          9.4 Lisanslı Uygulamanın kusurlu olduğunu onaylarsak, Safolio B.V. durumu kusuru
          çözerek veya yedek teslimat yoluyla düzeltme seçeneğini saklı tutar.
        </p>
        <p>
          9.5 Lisanslı Uygulamanın geçerli herhangi bir garantiye uymaması durumunda, Hizmetler
          Mağaza İşletmecisine bildirimde bulunabilirsiniz ve Lisanslı Uygulama satın alma
          fiyatınız Size iade edilecektir. Geçerli yasaların izin verdiği azami ölçüde,
          Hizmetler Mağaza İşletmecisi, Lisanslı Uygulama ile ilgili olarak başka herhangi bir
          garanti yükümlülüğüne sahip olmayacaktır ve herhangi bir garantiye uymama ihmaline
          atfedilebilecek diğer kayıplar, talepler, zararlar, sorumluluklar, masraflar ve
          maliyetler için sorumluluğu olmayacaktır.
        </p>
        <p>
          9.6 Kullanıcı bir girişimci ise, kusurlara dayanan herhangi bir talep, Lisanslı
          Uygulama kullanıcıya sunulduktan sonra on iki (12) ay tutarındaki yasal zaman aşımı
          süresinin sonunda sona erer. Tüketici olan kullanıcılar için yasalarca verilen
          yasal zaman aşımı süreleri geçerlidir.
        </p>

        <h2>10. Ürün talepleri</h2>
        <p>
          Safolio B.V. ve Son Kullanıcı, Hizmetlerin değil, Safolio B.V.&apos;nin Lisanslı
          Uygulama veya Son Kullanıcının söz konusu Lisanslı Uygulamaya sahip olması ve/veya
          kullanmasıyla ilgili olarak Son Kullanıcının veya herhangi bir üçüncü tarafın
          taleplerini ele almaktan sorumlu olduğunu kabul eder; bunlar aşağıdakileri içerir
          ancak bunlarla sınırlı değildir:
        </p>
        <p>(i) ürün sorumluluğu talepleri;</p>
        <p>
          (ii) Lisanslı Uygulamanın geçerli herhangi bir yasal veya düzenleyici gerekliliğe
          uymadığı iddiası; ve
        </p>
        <p>
          (iii) tüketici koruması, gizlilik veya benzer mevzuat kapsamında ortaya çıkan
          talepler; Lisanslı Uygulamanızın HealthKit ve HomeKit kullanımıyla bağlantılı
          olanlar dahil.
        </p>

        <h2>11. Yasal uyumluluk</h2>
        <p>
          ABD Hükümeti ambargosuna tabi olan veya ABD Hükümeti tarafından &apos;teröre destek
          veren&apos; bir ülke olarak belirlenmiş bir ülkede bulunmadığınızı ve yasaklı veya
          kısıtlı taraflara ilişkin herhangi bir ABD Hükümeti listesinde yer almadığınızı
          beyan ve garanti edersiniz.
        </p>

        <h2>12. İletişim bilgileri</h2>
        <p>
          Lisanslı Uygulama ile ilgili genel sorular, şikayetler, sorular veya talepler için
          lütfen iletişime geçin:
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

        <h2>13. Fesih</h2>
        <p>
          Lisans, Safolio B.V. veya Sizin tarafınızdan feshedilene kadar geçerlidir. Bu
          lisansın herhangi bir şartına uymamanız durumunda, bu lisans kapsamındaki
          haklarınız Safolio B.V.&apos;den bildirim yapılmaksızın otomatik olarak sona erer.
          Lisansın feshi üzerine, Lisanslı Uygulamanın tüm kullanımını durdurmanız ve
          Lisanslı Uygulamanın tam veya kısmi tüm kopyalarını imha etmeniz gerekir.
        </p>

        <h2>14. Üçüncü taraf sözleşme şartları ve lehdar</h2>
        <p>
          Safolio B.V., Lisanslı Uygulamayı kullanırken geçerli üçüncü taraf sözleşme
          şartlarına uyacağını beyan ve garanti eder.
        </p>
        <p>
          &apos;Geliştiricinin Son Kullanıcı Lisans Sözleşmesi için Asgari Şartlara İlişkin
          Talimatlar&apos;ın 9. Bölümüne uygun olarak, Apple ve Google ile bunların iştirakleri
          bu Son Kullanıcı Lisans Sözleşmesi&apos;nin üçüncü taraf lehdarları olacaktır ve bu
          Lisans Sözleşmesi&apos;nin şart ve koşullarını kabul etmenizden sonra, Apple ve
          Google bu Son Kullanıcı Lisans Sözleşmesi&apos;ni, üçüncü taraf lehdarı olarak Size
          karşı uygulama hakkına sahip olacaktır (ve bu hakkı kabul etmiş sayılacaktır).
        </p>

        <h2>15. Fikri mülkiyet hakları</h2>
        <p>
          Safolio B.V. ve Son Kullanıcı, Lisanslı Uygulamanın veya Son Kullanıcının söz konusu
          Lisanslı Uygulamaya sahip olması ve kullanmasının üçüncü tarafın fikri mülkiyet
          haklarını ihlal ettiğine ilişkin herhangi bir üçüncü taraf talebi durumunda,
          Hizmetlerin değil, yalnızca Safolio B.V.&apos;nin söz konusu fikri mülkiyet ihlali
          taleplerinin araştırılması, savunulması, çözüme kavuşturulması ve sonuçlandırılmasından
          tek başına sorumlu olacağını kabul eder.
        </p>

        <h2>16. Geçerli hukuk</h2>
        <p>
          Bu Lisans Sözleşmesi, kanunlar ihtilafı kurallarını hariç tutarak Hollanda yasalarına
          tabidir.
        </p>

        <h2>17. Çeşitli hükümler</h2>
        <p>
          17.1 Bu sözleşmenin herhangi bir şartı geçersiz olur veya geçersiz hale gelirse,
          kalan hükümlerin geçerliliği etkilenmez. Geçersiz şartlar, birincil amaca ulaşacak
          şekilde formüle edilmiş geçerli olanlarla değiştirilecektir.
        </p>
        <p>
          17.2 Yan anlaşmalar, değişiklikler ve tadilatlar yalnızca yazılı olarak yapıldığı
          takdirde geçerlidir. Önceki madde yalnızca yazılı olarak feragat edilebilir.
        </p>
        <p>
          17.3 <strong>Yalnızca Bilgilendirme Amaçlı Kullanım.</strong> Uygulama yalnızca
          portföy izleme, takip ve bilgilendirme amaçlı olarak sağlanmaktadır. Uygulama yatırım,
          finansal, hukuki veya vergi tavsiyesi sağlamaz ve herhangi bir finansal aracın satın
          alınmasını, satılmasını veya elde tutulmasını önermez, onaylamaz veya talep etmez.
          Uygulamada görüntülenen herhangi bir bilgi, finansal kararlar verme temeli olarak
          güvenilmesi amaçlanmamıştır. Kullanıcılar, yatırım kararlarından ve tüm bilgileri
          bağımsız olarak doğrulamaktan yalnızca kendileri sorumludur.
        </p>
      </LegalLayout>
    );
  }

  return (
    <LegalLayout title={t("legal5")}>
      <p className="text-sm text-ink3">Last updated February 01, 2026</p>

      <p>
        Safolio is licensed to You (End-User) by Safolio B.V., located and registered at 2-A
        Abtstraat, Utrecht, Utrecht 3512 AB, Netherlands (&apos;Licensor&apos;), for use only
        under the terms of this Licence Agreement. Our VAT number is NL868276042B01.
      </p>
      <p>
        By downloading the Licensed Application from Apple&apos;s software distribution
        platform (&apos;App Store&apos;) and Google&apos;s software distribution platform
        (&apos;Play Store&apos;), and any update thereto (as permitted by this Licence
        Agreement), You indicate that You agree to be bound by all of the terms and conditions
        of this Licence Agreement, and that You accept this Licence Agreement. App Store and
        Play Store are referred to in this Licence Agreement as &apos;Services&apos;.
      </p>
      <p>
        The parties of this Licence Agreement acknowledge that the Services are not a Party to
        this Licence Agreement and are not bound by any provisions or obligations with regard
        to the Licensed Application, such as warranty, liability, maintenance and support
        thereof. Safolio B.V., not the Services, is solely responsible for the Licensed
        Application and the content thereof.
      </p>
      <p>
        This Licence Agreement may not provide for usage rules for the Licensed Application
        that are in conflict with the latest Apple Media Services Terms and Conditions and
        Google Play Terms of Service (&apos;Usage Rules&apos;). Safolio B.V. acknowledges that
        it had the opportunity to review the Usage Rules and this Licence Agreement is not
        conflicting with them.
      </p>
      <p>
        Safolio when purchased or downloaded through the Services, is licensed to You for use
        only under the terms of this Licence Agreement. The Licensor reserves all rights not
        expressly granted to You. Safolio is to be used on devices that operate with
        Apple&apos;s operating systems (&apos;iOS&apos; and &apos;Mac OS&apos;) or
        Google&apos;s operating system (&apos;Android&apos;).
      </p>

      <h2>Table of Contents</h2>
      <ol>
        <li>The application</li>
        <li>Scope of licence</li>
        <li>Technical requirements</li>
        <li>Maintenance and support</li>
        <li>Use of data</li>
        <li>User-generated contributions</li>
        <li>Contribution licence</li>
        <li>Liability</li>
        <li>Warranty</li>
        <li>Product claims</li>
        <li>Legal compliance</li>
        <li>Contact information</li>
        <li>Termination</li>
        <li>Third-party terms of agreements and beneficiary</li>
        <li>Intellectual property rights</li>
        <li>Applicable law</li>
        <li>Miscellaneous</li>
      </ol>

      <h2>1. The application</h2>
      <p>
        Safolio (&apos;Licensed Application&apos;) is a piece of software created to provide
        users with tools to track, consolidate, and analyze their personal investment
        portfolios in a centralized digital environment — and customised for iOS and Android
        mobile devices (&apos;Devices&apos;). It is used to personal portfolio monitoring and
        analysis, including viewing asset holdings, portfolio valuations, historical
        performance, and asset allocation information based on user-provided data and
        third-party data sources.
      </p>
      <p>
        Furthermore, it is used to aggregate investment data from multiple accounts and
        institutions on a read-only basis, display historical and current market data for
        informational purposes, provide analytical tools such as performance comparisons,
        portfolio summaries, and hypothetical or &ldquo;what-if&rdquo; scenarios and organize
        and visualize financial information for personal reference and record-keeping.
      </p>
      <p>
        The Licensed Application is not tailored to comply with industry-specific regulations
        (Health Insurance Portability and Accountability Act (HIPAA), Federal Information
        Security Management Act (FISMA), etc.), so if your interactions would be subjected to
        such laws, you may not use this Licensed Application. You may not use the Licensed
        Application in a way that would violate the Gramm-Leach-Bliley Act (GLBA).
      </p>

      <h2>2. Scope of licence</h2>
      <p>
        2.1 You are given a non-transferable, non-exclusive, non-sublicensable licence to
        install and use the Licensed Application on any Devices that You (End-User) own or
        control and as permitted by the Usage Rules, with the exception that such Licensed
        Application may be accessed and used by other accounts associated with You (End-User,
        The Purchaser) via Family Sharing or volume purchasing.
      </p>
      <p>
        2.2 This licence will also govern any updates of the Licensed Application provided by
        Licensor that replace, repair, and/or supplement the first Licensed Application, unless
        a separate licence is provided for such update, in which case the terms of that new
        licence will govern.
      </p>
      <p>
        2.3 You may not share or make the Licensed Application available to third parties
        (unless to the degree allowed by the Usage Rules, and with Safolio B.V.&apos;s prior
        written consent), sell, rent, lend, lease or otherwise redistribute the Licensed
        Application.
      </p>
      <p>
        2.4 You may not reverse engineer, translate, disassemble, integrate, decompile,
        remove, modify, combine, create derivative works or updates of, adapt, or attempt to
        derive the source code of the Licensed Application, or any part thereof (except with
        Safolio B.V.&apos;s prior written consent).
      </p>
      <p>
        2.5 You may not copy (excluding when expressly authorised by this licence and the
        Usage Rules) or alter the Licensed Application or portions thereof. You may create and
        store copies only on devices that You own or control for backup keeping under the
        terms of this licence, the Usage Rules, and any other terms and conditions that apply
        to the device or software used. You may not remove any intellectual property notices.
        You acknowledge that no unauthorised third parties may gain access to these copies at
        any time. If you sell your Devices to a third party, you must remove the Licensed
        Application from the Devices before doing so.
      </p>
      <p>
        2.6 Violations of the obligations mentioned above, as well as the attempt of such
        infringement, may be subject to prosecution and damages.
      </p>
      <p>2.7 Licensor reserves the right to modify the terms and conditions of licensing.</p>
      <p>
        2.8 Nothing in this licence should be interpreted to restrict third-party terms. When
        using the Licensed Application, You must ensure that You comply with applicable
        third-party terms and conditions.
      </p>

      <h2>3. Technical requirements</h2>
      <p>
        3.1 Licensor attempts to keep the Licensed Application updated so that it complies
        with modified/new versions of the firmware and new hardware. You are not granted rights
        to claim such an update.
      </p>
      <p>
        3.2 You acknowledge that it is Your responsibility to confirm and determine that the
        app end-user device on which You intend to use the Licensed Application satisfies the
        technical specifications mentioned above.
      </p>
      <p>
        3.3 Licensor reserves the right to modify the technical specifications as it sees
        appropriate at any time.
      </p>

      <h2>4. Maintenance and support</h2>
      <p>
        4.1 The Licensor is solely responsible for providing any maintenance and support
        services for this Licensed Application. You can reach the Licensor at the email
        address listed in the App Store or Play Store Overview for this Licensed Application.
      </p>
      <p>
        4.2 Safolio B.V. and the End-User acknowledge that the Services have no obligation
        whatsoever to furnish any maintenance and support services with respect to the
        Licensed Application.
      </p>

      <h2>5. Use of data</h2>
      <p>
        You acknowledge that Licensor will be able to access and adjust Your downloaded
        Licensed Application content and Your personal information, and that Licensor&apos;s
        use of such material and information is subject to Your legal agreements with Licensor
        and Licensor&apos;s privacy policy, which can be accessed by clicking the link on the
        web site and application.
      </p>
      <p>
        You acknowledge that the Licensor may periodically collect and use technical data and
        related information about your device, system, and application software, and
        peripherals, offer product support, facilitate the software updates, and for purposes
        of providing other services to you (if any) related to the Licensed Application.
        Licensor may also use this information to improve its products or to provide services
        or technologies to you, as long as it is in a form that does not personally identify
        you.
      </p>

      <h2>6. User-generated contributions</h2>
      <p>
        The Licensed Application may invite you to chat, contribute to, or participate in
        blogs, message boards, online forums, and other functionality, and may provide you
        with the opportunity to create, submit, post, display, transmit, perform, publish,
        distribute, or broadcast content and materials to us or in the Licensed Application,
        including but not limited to text, writings, video, audio, photographs, graphics,
        comments, suggestions, or personal information or other material (collectively,
        &apos;Contributions&apos;). Contributions may be viewable by other users of the
        Licensed Application and through third-party websites or applications. As such, any
        Contributions you transmit may be treated as non-confidential and non-proprietary. When
        you create or make available any Contributions, you thereby represent and warrant that:
      </p>
      <ol>
        <li>The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.</li>
        <li>You are the creator and owner of or have the necessary licences, rights, consents, releases, and permissions to use and to authorise us, the Licensed Application, and other users of the Licensed Application to use your Contributions in any manner contemplated by the Licensed Application and this Licence Agreement.</li>
        <li>You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness or each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Licensed Application and this Licence Agreement.</li>
        <li>Your Contributions are not false, inaccurate, or misleading.</li>
        <li>Your Contributions are not unsolicited or unauthorised advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.</li>
        <li>Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libellous, slanderous, or otherwise objectionable (as determined by us).</li>
        <li>Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</li>
        <li>Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.</li>
        <li>Your Contributions do not violate any applicable law, regulation, or rule.</li>
        <li>Your Contributions do not violate the privacy or publicity rights of any third party.</li>
        <li>Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.</li>
        <li>Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.</li>
        <li>Your Contributions do not otherwise violate, or link to material that violates, any provision of this Licence Agreement, or any applicable law or regulation.</li>
      </ol>
      <p>
        Any use of the Licensed Application in violation of the foregoing violates this
        Licence Agreement and may result in, among other things, termination or suspension of
        your rights to use the Licensed Application.
      </p>

      <h2>7. Contribution licence</h2>
      <p>
        By posting your Contributions to any part of the Licensed Application or making
        Contributions accessible to the Licensed Application by linking your account from the
        Licensed Application to any of your social networking accounts, you automatically
        grant, and you represent and warrant that you have the right to grant, to us an
        unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable,
        royalty-free, fully-paid, worldwide right, and licence to host, use copy, reproduce,
        disclose, sell, resell, publish, broad cast, retitle, archive, store, cache, publicly
        display, reformat, translate, transmit, excerpt (in whole or in part), and distribute
        such Contributions (including, without limitation, your image and voice) for any
        purpose, commercial advertising, or otherwise, and to prepare derivative works of, or
        incorporate in other works, such as Contributions, and grant and authorise sublicences
        of the foregoing. The use and distribution may occur in any media formats and through
        any media channels.
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
        representations in your Contributions provided by you in any area in the Licensed
        Application. You are solely responsible for your Contributions to the Licensed
        Application and you expressly agree to exonerate us from any and all responsibility
        and to refrain from any legal action against us regarding your Contributions.
      </p>
      <p>
        We have the right, in our sole and absolute discretion, (1) to edit, redact, or
        otherwise change any Contributions; (2) to recategorise any Contributions to place
        them in more appropriate locations in the Licensed Application; and (3) to prescreen
        or delete any Contributions at any time and for any reason, without notice. We have no
        obligation to monitor your Contributions.
      </p>

      <h2>8. Liability</h2>
      <p>
        8.1 Licensor&apos;s responsibility in the case of violation of obligations and tort
        shall be limited to intent and gross negligence. Only in case of a breach of essential
        contractual duties (cardinal obligations), Licensor shall also be liable in case of
        slight negligence. In any case, liability shall be limited to the foreseeable,
        contractually typical damages. The limitation mentioned above does not apply to
        injuries to life, limb, or health.
      </p>
      <p>
        8.2 Licensor takes no accountability or responsibility for any damages caused due to a
        breach of duties according to Section 2 of this Licence Agreement. To avoid data loss,
        You are required to make use of backup functions of the Licensed Application to the
        extent allowed by applicable third-party terms and conditions of use. You are aware
        that in case of alterations or manipulations of the Licensed Application, You will not
        have access to the Licensed Application.
      </p>
      <p>
        8.3 Licensor takes no accountability and responsibility in case of. For additional
        limitations, please see the Terms of Service.
      </p>

      <h2>9. Warranty</h2>
      <p>
        9.1 Licensor warrants that the Licensed Application is free of spyware, trojan horses,
        viruses, or any other malware at the time of Your download. Licensor warrants that the
        Licensed Application works as described in the user documentation.
      </p>
      <p>
        9.2 No warranty is provided for the Licensed Application that is not executable on the
        device, that has been unauthorisedly modified, handled inappropriately or culpably,
        combined or installed with inappropriate hardware or software, used with inappropriate
        accessories, regardless if by Yourself or by third parties, or if there are any other
        reasons outside of Safolio B.V.&apos;s sphere of influence that affect the
        executability of the Licensed Application.
      </p>
      <p>
        9.3 You are required to inspect the Licensed Application immediately after installing
        it and notify Safolio B.V. about issues discovered without delay by email provided in
        Contact Information. The defect report will be taken into consideration and further
        investigated if it has been emailed within a period of ninety (90) days after
        discovery.
      </p>
      <p>
        9.4 If we confirm that the Licensed Application is defective, Safolio B.V. reserves a
        choice to remedy the situation either by means of solving the defect or substitute
        delivery.
      </p>
      <p>
        9.5 In the event of any failure of the Licensed Application to conform to any
        applicable warranty, You may notify the Services Store Operator, and Your Licensed
        Application purchase price will be refunded to You. To the maximum extent permitted by
        applicable law, the Services Store Operator will have no other warranty obligation
        whatsoever with respect to the Licensed Application, and any other losses, claims,
        damages, liabilities, expenses, and costs attributable to any negligence to adhere to
        any warranty.
      </p>
      <p>
        9.6 If the user is an entrepreneur, any claim based on faults expires after a
        statutory period of limitation amounting to twelve (12) months after the Licensed
        Application was made available to the user. The statutory periods of limitation given
        by law apply for users who are consumers.
      </p>

      <h2>10. Product claims</h2>
      <p>
        Safolio B.V. and the End-User acknowledge that Safolio B.V., and not the Services, is
        responsible for addressing any claims of the End-User or any third party relating to
        the Licensed Application or the End-User&apos;s possession and/or use of that
        Licensed Application, including, but not limited to:
      </p>
      <p>(i) product liability claims;</p>
      <p>
        (ii) any claim that the Licensed Application fails to conform to any applicable legal
        or regulatory requirement; and
      </p>
      <p>
        (iii) claims arising under consumer protection, privacy, or similar legislation,
        including in connection with Your Licensed Application&apos;s use of the HealthKit and
        HomeKit.
      </p>

      <h2>11. Legal compliance</h2>
      <p>
        You represent and warrant that You are not located in a country that is subject to a
        US Government embargo, or that has been designated by the US Government as a
        &apos;terrorist supporting&apos; country; and that You are not listed on any US
        Government list of prohibited or restricted parties.
      </p>

      <h2>12. Contact information</h2>
      <p>
        For general inquiries, complaints, questions or claims concerning the Licensed
        Application, please contact:
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

      <h2>13. Termination</h2>
      <p>
        The licence is valid until terminated by Safolio B.V. or by You. Your rights under
        this licence will terminate automatically and without notice from Safolio B.V. if You
        fail to adhere to any term(s) of this licence. Upon Licence termination, You shall
        stop all use of the Licensed Application, and destroy all copies, full or partial, of
        the Licensed Application.
      </p>

      <h2>14. Third-party terms of agreements and beneficiary</h2>
      <p>
        Safolio B.V. represents and warrants that Safolio B.V. will comply with applicable
        third-party terms of agreement when using Licensed Application.
      </p>
      <p>
        In Accordance with Section 9 of the &apos;Instructions for Minimum Terms of
        Developer&apos;s End-User Licence Agreement&apos;, both Apple and Google and their
        subsidiaries shall be third-party beneficiaries of this End User Licence Agreement and
        — upon Your acceptance of the terms and conditions of this Licence Agreement, both
        Apple and Google will have the right (and will be deemed to have accepted the right)
        to enforce this End User Licence Agreement against You as a third-party beneficiary
        thereof.
      </p>

      <h2>15. Intellectual property rights</h2>
      <p>
        Safolio B.V. and the End-User acknowledge that, in the event of any third-party claim
        that the Licensed Application or the End-User&apos;s possession and use of that
        Licensed Application infringes on the third party&apos;s intellectual property rights,
        Safolio B.V., and not the Services, will be solely responsible for the investigation,
        defence, settlement, and discharge or any such intellectual property infringement
        claims.
      </p>

      <h2>16. Applicable law</h2>
      <p>
        This Licence Agreement is governed by the laws of the Netherlands excluding its
        conflicts of law rules.
      </p>

      <h2>17. Miscellaneous</h2>
      <p>
        17.1 If any of the terms of this agreement should be or become invalid, the validity
        of the remaining provisions shall not be affected. Invalid terms will be replaced by
        valid ones formulated in a way that will achieve the primary purpose.
      </p>
      <p>
        17.2 Collateral agreements, changes and amendments are only valid if laid down in
        writing. The preceding clause can only be waived in writing.
      </p>
      <p>
        17.3 <strong>Informational Use Only.</strong> The Application is provided solely for
        portfolio tracking, monitoring, and informational purposes. The Application does not
        provide investment, financial, legal, or tax advice and does not recommend, endorse,
        or solicit the purchase, sale, or holding of any financial instrument. Any information
        displayed in the Application is not intended to be relied upon as the basis for making
        financial decisions. Users remain solely responsible for their investment decisions
        and for verifying all information independently.
      </p>
    </LegalLayout>
  );
}
