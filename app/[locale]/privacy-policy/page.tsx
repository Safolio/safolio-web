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
  return { title: `${t("legal1")} — Safolio` };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Footer" });
  if (locale === "tr") {
    return (
      <LegalLayout title={t("legal1")}>
        <p className="text-sm text-ink3">Son güncelleme: 01 Şubat 2026</p>

        <p>
          Safolio B.V. (Safolio ticari unvanı ile faaliyet göstermektedir) (&apos;biz&apos;,
          &apos;bize&apos; veya &apos;bizim&apos;) için hazırlanan bu Gizlilik Bildirimi,
          Hizmetlerimizi (&apos;Hizmetler&apos;) kullandığınızda kişisel bilgilerinize nasıl ve
          neden eriştiğimizi, bunları nasıl topladığımızı, sakladığımızı, kullandığımızı
          ve/veya paylaştığımızı (&apos;işlediğimizi&apos;) açıklar; bu kapsam aşağıdaki
          durumları içerir:
        </p>
        <ul>
          <li>
            Web sitemizi{" "}
            <a href="https://safolio.com">https://safolio.com</a> adresinde veya bu Gizlilik
            Bildirimine bağlantı veren herhangi bir web sitemizi ziyaret ettiğinizde
          </li>
          <li>
            Mobil uygulamamızı (Safolio), Facebook uygulamamızı (Safolio) veya bu Gizlilik
            Bildirimine bağlantı veren herhangi bir başka uygulamamızı indirip kullandığınızda
          </li>
          <li>
            Safolio&apos;yu kullandığınızda. Safolio, kullanıcıların kişisel yatırım
            portföylerini takip etmesine ve analiz etmesine olanak tanıyan bir hizmet olarak
            yazılım (SaaS) platformudur.
          </li>
          <li>
            Pazarlama veya etkinlikler dahil olmak üzere bizimle ilgili diğer şekillerde
            iletişim kurduğunuzda
          </li>
        </ul>
        <p>
          Sorularınız veya endişeleriniz mi var? Bu Gizlilik Bildirimini okumak, gizlilik
          haklarınızı ve seçeneklerinizi anlamanıza yardımcı olacaktır. Kişisel bilgilerinizin
          nasıl işleneceğine ilişkin kararlardan biz sorumluyuz. Politikalarımız ve
          uygulamalarımız konusunda hemfikir değilseniz, lütfen Hizmetlerimizi kullanmayın.
          Hâlâ sorularınız veya endişeleriniz varsa, lütfen{" "}
          <a href="mailto:privacy@safolio.com">privacy@safolio.com</a> adresinden bizimle
          iletişime geçin.
        </p>

        <h2>Temel Noktaların Özeti</h2>
        <p>
          <em>
            Bu özet, Gizlilik Bildirimimizdeki temel noktaları sunar; ancak bu konuların
            herhangi biri hakkında daha fazla ayrıntıya, her temel noktanın ardından gelen
            bağlantıya tıklayarak veya aşağıdaki içindekiler tablomuzu kullanarak aradığınız
            bölüme ulaşarak erişebilirsiniz.
          </em>
        </p>
        <p>
          <strong>Hangi kişisel bilgileri işliyoruz?</strong> Hizmetlerimizi ziyaret ettiğinizde,
          kullandığınızda veya bunlar arasında gezindiğinizde; bizimle ve Hizmetlerle nasıl
          etkileşim kurduğunuza, yaptığınız tercihlere ve kullandığınız ürün ve özelliklere
          bağlı olarak kişisel bilgilerinizi işleyebiliriz.
        </p>
        <p>
          <strong>Hassas kişisel bilgileri işliyor muyuz?</strong> Bazı bilgiler, belirli
          yargı bölgelerinde &apos;özel&apos; veya &apos;hassas&apos; olarak kabul edilebilir;
          örneğin ırksal veya etnik kökeniniz, cinsel yöneliminiz ve dini inançlarınız. Hassas
          kişisel bilgileri, gerektiğinde rızanızla veya yürürlükteki yasalar tarafından izin
          verildiği şekilde işleyebiliriz.
        </p>
        <p>
          <strong>Üçüncü taraflardan herhangi bir bilgi topluyor muyuz?</strong> Üçüncü
          taraflardan herhangi bir bilgi toplamıyoruz.
        </p>
        <p>
          <strong>Bilgilerinizi nasıl işliyoruz?</strong> Bilgilerinizi; Hizmetlerimizi
          sağlamak, geliştirmek ve yönetmek, sizinle iletişim kurmak, güvenlik ve dolandırıcılık
          önleme amacıyla ve yasalara uymak için işleriz. Ayrıca rızanızla bilgilerinizi başka
          amaçlarla da işleyebiliriz. Bilgilerinizi yalnızca bunu yapmak için geçerli bir
          yasal nedenimiz olduğunda işleriz.
        </p>
        <p>
          <strong>Kişisel bilgileri hangi durumlarda ve hangi türde taraflarla
          paylaşıyoruz?</strong>{" "}
          Bilgileri belirli durumlarda ve belirli üçüncü taraf kategorileriyle paylaşabiliriz.
        </p>
        <p>
          <strong>Bilgilerinizi nasıl güvende tutuyoruz?</strong> Kişisel bilgilerinizi
          korumak için yeterli kurumsal ve teknik süreç ve prosedürlere sahibiz. Bununla
          birlikte, internet üzerinden hiçbir elektronik iletim veya bilgi depolama
          teknolojisinin %100 güvenli olduğu garanti edilemez; bu nedenle bilgisayar
          korsanlarının, siber suçluların veya diğer yetkisiz üçüncü tarafların güvenliğimizi
          aşıp bilgilerinizi uygunsuz bir şekilde toplamayacaklarını, bunlara erişmeyeceklerini,
          çalmayacaklarını veya değiştirmeyeceklerini taahhüt edemez ya da garanti edemeyiz.
        </p>
        <p>
          <strong>Haklarınız nelerdir?</strong> Coğrafi olarak nerede bulunduğunuza bağlı
          olarak, yürürlükteki gizlilik yasası size kişisel bilgilerinizle ilgili bazı haklar
          verebilir.
        </p>
        <p>
          <strong>Haklarınızı nasıl kullanırsınız?</strong> Haklarınızı kullanmanın en kolay
          yolu, bir veri sahibi erişim talebi göndermek veya bizimle iletişime geçmektir. Her
          talebi yürürlükteki veri koruma yasalarına uygun olarak değerlendirip işleme
          alacağız.
        </p>

        <h2>İçindekiler</h2>
        <ol>
          <li>Hangi bilgileri topluyoruz?</li>
          <li>Bilgilerinizi nasıl işliyoruz?</li>
          <li>Kişisel bilgilerinizi işlemek için hangi yasal dayanaklara güveniyoruz?</li>
          <li>Kişisel bilgilerinizi ne zaman ve kiminle paylaşıyoruz?</li>
          <li>Üçüncü taraf web sitelerine ilişkin tutumumuz nedir?</li>
          <li>Çerezleri ve diğer izleme teknolojilerini kullanıyor muyuz?</li>
          <li>Yapay zekaya dayalı ürünler sunuyor muyuz?</li>
          <li>Sosyal girişlerinizi nasıl ele alıyoruz?</li>
          <li>Bilgilerinizi ne kadar süre saklıyoruz?</li>
          <li>Bilgilerinizi nasıl güvende tutuyoruz?</li>
          <li>Reşit olmayanlardan bilgi topluyor muyuz?</li>
          <li>Gizlilik haklarınız nelerdir?</li>
          <li>Do-not-track özellikleri için kontroller</li>
          <li>Amerika Birleşik Devletleri sakinlerinin belirli gizlilik hakları var mı?</li>
          <li>Diğer bölgelerin belirli gizlilik hakları var mı?</li>
          <li>Finansal ve piyasa verilerinin kullanımı</li>
          <li>Bağlı finansal hesaplar</li>
          <li>Bu bildirimi güncelliyor muyuz?</li>
          <li>Bu bildirimle ilgili olarak bizimle nasıl iletişime geçebilirsiniz?</li>
          <li>Sizden topladığımız verileri nasıl gözden geçirebilir, güncelleyebilir veya silebilirsiniz?</li>
        </ol>

        <h2>1. Hangi bilgileri topluyoruz?</h2>
        <h3>Bize beyan ettiğiniz kişisel bilgiler</h3>
        <p>
          <em>Özetle: Bize sağladığınız kişisel bilgileri topluyoruz.</em>
        </p>
        <p>
          Hizmetlere kaydolurken, ürünlerimiz ve Hizmetlerimiz hakkında bilgi edinmek
          istediğinizi belirttiğinizde, Hizmetlerdeki etkinliklere katıldığınızda veya başka
          bir şekilde bizimle iletişime geçtiğinizde bize gönüllü olarak sağladığınız kişisel
          bilgileri toplarız.
        </p>
        <p>
          <strong>Sizin Tarafınızdan Sağlanan Kişisel Bilgiler.</strong> Topladığımız kişisel
          bilgiler, bizimle ve Hizmetlerle olan etkileşiminizin bağlamına, yaptığınız
          tercihlere ve kullandığınız ürün ve özelliklere bağlıdır. Topladığımız kişisel
          bilgiler aşağıdakileri içerebilir:
        </p>
        <ul>
          <li>adlar</li>
          <li>e-posta adresleri</li>
          <li>kullanıcı adları</li>
          <li>şifreler</li>
          <li>iletişim tercihleri</li>
          <li>fatura adresleri</li>
          <li>banka/kredi kartı numaraları</li>
          <li>iletişim veya kimlik doğrulama verileri</li>
        </ul>
        <p>
          <strong>Hassas Bilgiler.</strong> Gerekli olduğunda, rızanızla veya yürürlükteki
          yasalar tarafından izin verildiği şekilde, aşağıdaki hassas bilgi kategorilerini
          işleriz:
        </p>
        <ul>
          <li>finansal veriler</li>
          <li>biyometrik veriler</li>
        </ul>
        <p>
          <strong>Ödeme Verileri.</strong> Satın alma işlemi yapmayı seçtiğinizde ödemenizi
          işleme almak için gerekli verileri toplayabiliriz; örneğin ödeme aracınızın numarası
          ve ödeme aracınızla ilişkili güvenlik kodu. Tüm ödeme verileri PayPal, Stripe,
          WePay ve Paddle tarafından işlenir ve saklanır. Gizlilik bildirimi bağlantılarını
          buradan bulabilirsiniz:{" "}
          <a href="https://www.paypal.com/us/webapps/mpp/ua/privacy-full#personalData">PayPal</a>,{" "}
          <a href="http://www.stripe.com/privacy">Stripe</a>,{" "}
          <a href="https://go.wepay.com/privacy-policy/">WePay</a> ve{" "}
          <a href="https://www.paddle.com/legal/privacy">Paddle</a>.
        </p>
        <p>
          <strong>Çevrimiçi Ödemeler.</strong> Safolio&apos;nun hizmetleri için yapılan
          ödemeler, üçüncü taraf ödeme hizmeti sağlayıcıları tarafından işlenir. Safolio,
          ödeme kartı bilgilerini veya diğer hassas ödeme bilgilerini işlemez veya saklamaz.
          Bir kullanıcı ödeme yaptığında, işlemi tamamlamak için gereken kişisel veriler
          (ödeme bilgileri ve fatura bilgileri gibi) doğrudan seçilen ödeme hizmeti sağlayıcısı
          tarafından kendi gizlilik politikasına ve yürürlükteki yasalara uygun olarak işlenir.
          Ödeme hizmeti sağlayıcılarının kişisel verileri nasıl işlediğine ilişkin bilgilere,
          ödeme sırasında sağlayıcının web sitesinde sunulan ilgili sağlayıcının gizlilik
          politikasından ulaşılabilir. Safolio, ödeme hizmeti sağlayıcılarını zaman zaman
          değiştirebilir veya ekleyebilir. Geçerli ödeme sağlayıcısı ve gizlilik politikası,
          ödeme sürecinde kullanıcılara her zaman bildirilecektir.
        </p>
        <p>
          <strong>Sosyal Medya Giriş Verileri.</strong> Mevcut Facebook, X veya diğer sosyal
          medya hesap bilgilerinizi kullanarak bize kaydolma seçeneği sunabiliriz. Bu şekilde
          kaydolmayı seçerseniz, aşağıda &apos;Sosyal Girişlerinizi Nasıl Ele Alıyoruz?&apos;
          başlıklı bölümde açıklandığı şekilde sosyal medya sağlayıcısından sizinle ilgili
          bazı profil bilgilerini toplarız.
        </p>
        <p>
          <strong>Uygulama Verileri.</strong> Uygulamalarımızı kullanıyorsanız, bize erişim
          veya izin vermeyi seçmeniz halinde aşağıdaki bilgileri de toplayabiliriz:
        </p>
        <ul>
          <li>
            <em>Coğrafi Konum Bilgileri.</em> Konuma dayalı belirli hizmetleri sağlamak için
            mobil cihazınızdan, sürekli olarak veya mobil uygulamamızı kullandığınız sırada
            konuma dayalı bilgileri izlemek üzere erişim veya izin talep edebiliriz.
            Erişimimizi veya izinleri değiştirmek isterseniz, bunu cihazınızın ayarlarından
            yapabilirsiniz.
          </li>
          <li>
            <em>Mobil Cihaz Erişimi.</em> Mobil cihazınızın takvimi, hatırlatıcıları ve
            diğer özellikleri dahil olmak üzere mobil cihazınızın belirli özelliklerine
            erişim veya izin talep edebiliriz. Erişimimizi veya izinleri değiştirmek
            isterseniz, bunu cihazınızın ayarlarından yapabilirsiniz.
          </li>
          <li>
            <em>Mobil Cihaz Verileri.</em> Cihaz bilgilerini (mobil cihaz kimliği, modeli ve
            üreticisi gibi), işletim sistemi, sürüm bilgileri ve sistem yapılandırma
            bilgileri, cihaz ve uygulama kimlik numaraları, tarayıcı türü ve sürümü, donanım
            modeli, internet servis sağlayıcısı ve/veya mobil operatör ve İnternet
            Protokolü (IP) adresini (veya proxy sunucusu) otomatik olarak toplarız.
            Uygulamalarımızı kullanıyorsanız, ayrıca mobil cihazınızla ilişkili telefon ağı,
            mobil cihazınızın işletim sistemi veya platformu, kullandığınız mobil cihazın
            türü, mobil cihazınızın benzersiz cihaz kimliği ve eriştiğiniz uygulama
            özelliklerimiz hakkında bilgi de toplayabiliriz.
          </li>
          <li>
            <em>Anlık Bildirimler.</em> Hesabınız veya uygulamaların belirli özellikleriyle
            ilgili olarak size anlık bildirim göndermeyi talep edebiliriz. Bu tür iletişimleri
            almaktan vazgeçmek isterseniz, bunları cihazınızın ayarlarından kapatabilirsiniz.
          </li>
        </ul>
        <p>
          Bu bilgiler öncelikle uygulamalarımızın güvenliğini ve işleyişini sürdürmek, sorun
          gidermek ve dahili analiz ve raporlama amaçlarımız için gereklidir.
        </p>
        <p>
          Bize sağladığınız tüm kişisel bilgilerin doğru, eksiksiz ve güncel olması ve bu
          kişisel bilgilerdeki herhangi bir değişikliği bize bildirmeniz gerekir.
        </p>

        <h3>Otomatik olarak toplanan bilgiler</h3>
        <p>
          <em>
            Özetle: Bazı bilgiler — İnternet Protokolü (IP) adresiniz ve/veya tarayıcı ve
            cihaz özellikleri gibi — Hizmetlerimizi ziyaret ettiğinizde otomatik olarak
            toplanır.
          </em>
        </p>
        <p>
          Hizmetleri ziyaret ettiğinizde, kullandığınızda veya bunlar arasında gezindiğinizde
          belirli bilgileri otomatik olarak toplarız. Bu bilgiler, özel kimliğinizi (adınız
          veya iletişim bilgileriniz gibi) ortaya çıkarmaz; ancak IP adresiniz, tarayıcı ve
          cihaz özellikleriniz, işletim sistemi, dil tercihleri, yönlendiren URL&apos;ler,
          cihaz adı, ülke, konum, Hizmetlerimizi nasıl ve ne zaman kullandığınıza ilişkin
          bilgiler ve diğer teknik bilgiler gibi cihaz ve kullanım bilgilerini içerebilir. Bu
          bilgiler öncelikle Hizmetlerimizin güvenliğini ve işleyişini sürdürmek ve dahili
          analiz ve raporlama amaçlarımız için gereklidir.
        </p>
        <p>
          Pek çok işletme gibi biz de bilgileri çerezler ve benzer teknolojiler aracılığıyla
          topluyoruz. Bu konuda daha fazla bilgiyi{" "}
          <Link href="/cookie-policy">Çerez Politikamızda</Link> bulabilirsiniz.
        </p>
        <p>Topladığımız bilgiler şunları içerir:</p>
        <ul>
          <li>
            <em>Günlük ve Kullanım Verileri.</em> Günlük ve kullanım verileri; Hizmetlerimize
            eriştiğinizde veya kullandığınızda sunucularımızın otomatik olarak topladığı ve
            günlük dosyalarına kaydettiğimiz hizmetle ilgili, tanılayıcı, kullanım ve performans
            bilgileridir. Bizimle nasıl etkileşim kurduğunuza bağlı olarak, bu günlük verileri
            IP adresinizi, cihaz bilgilerinizi, tarayıcı türünüzü ve ayarlarınızı ve
            Hizmetlerdeki etkinliğinize ilişkin bilgileri (kullanımınızla ilişkili tarih/saat
            damgaları, görüntülenen sayfalar ve dosyalar, aramalar ve hangi özellikleri
            kullandığınız gibi gerçekleştirdiğiniz diğer eylemler) ve cihaz olay bilgilerini
            (sistem etkinliği, hata raporları (bazen &apos;crash dump&apos; olarak adlandırılır)
            ve donanım ayarları gibi) içerebilir.
          </li>
          <li>
            <em>Cihaz Verileri.</em> Hizmetlere erişmek için kullandığınız bilgisayar, telefon,
            tablet veya diğer cihazlarınız hakkındaki bilgiler gibi cihaz verilerini toplarız.
            Kullanılan cihaza bağlı olarak, bu cihaz verileri IP adresiniz (veya proxy
            sunucusu), cihaz ve uygulama kimlik numaraları, konum, tarayıcı türü, donanım
            modeli, internet servis sağlayıcısı ve/veya mobil operatör, işletim sistemi ve
            sistem yapılandırma bilgileri gibi bilgileri içerebilir.
          </li>
          <li>
            <em>Konum Verileri.</em> Cihazınızın konumu hakkındaki bilgiler gibi konum
            verilerini toplarız; bu konum hassas veya hassas olmayabilir. Topladığımız bilgi
            miktarı, Hizmetlere erişmek için kullandığınız cihazın türüne ve ayarlarına
            bağlıdır. Örneğin, mevcut konumunuzu (IP adresinize göre) bize söyleyen coğrafi
            konum verilerini toplamak için GPS ve diğer teknolojileri kullanabiliriz. Bu
            bilgilere erişimi reddederek veya cihazınızdaki Konum ayarınızı devre dışı bırakarak
            bu bilgileri toplamamıza izin vermekten vazgeçebilirsiniz. Ancak vazgeçmeyi
            seçerseniz, Hizmetlerin bazı yönlerini kullanamayabilirsiniz.
          </li>
        </ul>
        <h3>Google API</h3>
        <p>
          Google API&apos;lerinden alınan bilgileri kullanımımız, Sınırlı Kullanım
          gereksinimleri dahil olmak üzere{" "}
          <a href="https://developers.google.com/terms/api-services-user-data-policy">
            Google API Hizmetleri Kullanıcı Verileri Politikasına
          </a>
          {" "}uygun olacaktır.
        </p>
        <p>
          <strong>Facebook uygulamalarımızı kullandığınızda toplanan bilgiler.</strong> Varsayılan
          olarak, adınız, e-postanız, cinsiyetiniz, doğum gününüz, mevcut şehriniz ve profil
          resmi URL&apos;si dahil olmak üzere Facebook temel hesap bilgilerinize ve kamuya
          açık hale getirmeyi seçtiğiniz diğer bilgilere erişiriz. Ayrıca, arkadaşlar,
          check-in&apos;ler ve beğeniler gibi hesabınızla ilgili diğer izinlere erişim talep
          edebiliriz ve her bir izin için bize erişim verme veya vermeme seçeneğine sahip
          olursunuz. Facebook izinleri hakkında daha fazla bilgi için Facebook İzinler
          Referansı sayfasına bakınız.
        </p>

        <h2>2. Bilgilerinizi nasıl işliyoruz?</h2>
        <p>
          <em>
            Özetle: Bilgilerinizi; Hizmetlerimizi sağlamak, geliştirmek ve yönetmek, sizinle
            iletişim kurmak, güvenlik ve dolandırıcılık önleme amacıyla ve yasalara uymak
            için işleriz. Kişisel bilgileri aşağıda listelenen amaçlar için işleriz.
            Bilgilerinizi yalnızca açık ön rızanızla başka amaçlarla da işleyebiliriz.
          </em>
        </p>
        <p>
          Kişisel bilgilerinizi, Hizmetlerimizle nasıl etkileşim kurduğunuza bağlı olarak
          çeşitli nedenlerle işleriz; bu nedenler arasında şunlar yer alır:
        </p>
        <ul>
          <li>
            <strong>Hesap oluşturma ve kimlik doğrulamayı kolaylaştırmak ve kullanıcı
            hesaplarını başka şekilde yönetmek için.</strong>{" "}
            Hesabınızı oluşturup hesabınıza giriş yapabilmeniz ve hesabınızın çalışır
            durumda kalmasını sağlamak için bilgilerinizi işleyebiliriz.
          </li>
          <li>
            <strong>Kullanıcıya hizmet sunmak ve sunulmasını kolaylaştırmak için.</strong>{" "}
            Talep ettiğiniz hizmeti size sağlamak için bilgilerinizi işleyebiliriz.
          </li>
          <li>
            <strong>Siparişlerinizi yerine getirmek ve yönetmek için.</strong> Hizmetler
            aracılığıyla yapılan siparişlerinizi, ödemelerinizi, iadelerinizi ve değişimlerinizi
            yerine getirmek ve yönetmek için bilgilerinizi işleyebiliriz.
          </li>
          <li>
            <strong>Kullanıcıdan kullanıcıya iletişimi etkinleştirmek için.</strong> Başka
            bir kullanıcıyla iletişim kurmaya olanak tanıyan herhangi bir hizmetimizi
            kullanmayı seçerseniz bilgilerinizi işleyebiliriz.
          </li>
          <li>
            <strong>Geri bildirim talep etmek için.</strong> Geri bildirim talep etmek ve
            Hizmetlerimizi kullanımınızla ilgili sizinle iletişim kurmak için gerekli
            olduğunda bilgilerinizi işleyebiliriz.
          </li>
          <li>
            <strong>Pazarlama ve tanıtım iletişimleri göndermek için.</strong> Pazarlama
            tercihlerinize uygun olması koşuluyla, pazarlama amaçlarımız için bize gönderdiğiniz
            kişisel bilgileri işleyebiliriz. Pazarlama e-postalarımızdan istediğiniz zaman
            çıkabilirsiniz. Daha fazla bilgi için aşağıdaki &apos;Gizlilik Haklarınız
            Nelerdir?&apos; bölümüne bakınız.
          </li>
          <li>
            <strong>Size hedeflenmiş reklamlar sunmak için.</strong> İlgi alanlarınıza,
            konumunuza ve daha fazlasına göre özelleştirilmiş kişiselleştirilmiş içerik ve
            reklamlar geliştirmek ve görüntülemek için bilgilerinizi işleyebiliriz. Daha fazla
            bilgi için{" "}
            <Link href="/cookie-policy">Çerez Politikamıza</Link> bakınız.
          </li>
          <li>
            <strong>Kullanım eğilimlerini belirlemek için.</strong> Hizmetlerimizi nasıl
            kullandığınıza ilişkin bilgileri, bunların nasıl kullanıldığını daha iyi anlamak
            ve geliştirebilmek için işleyebiliriz.
          </li>
          <li>
            <strong>Pazarlama ve tanıtım kampanyalarımızın etkinliğini belirlemek için.</strong>{" "}
            Sizinle en alakalı pazarlama ve tanıtım kampanyalarını nasıl sunacağımızı daha iyi
            anlamak için bilgilerinizi işleyebiliriz.
          </li>
          <li>
            <strong>Bir kişinin hayati çıkarlarını korumak veya kurtarmak için.</strong> Bir
            kişinin hayati çıkarlarını korumak veya kurtarmak için, örneğin zararı önlemek için
            gerekli olduğunda bilgilerinizi işleyebiliriz.
          </li>
        </ul>

        <h2>3. Bilgilerinizi işlemek için hangi yasal dayanaklara güveniyoruz?</h2>
        <p>
          <em>
            Özetle: Kişisel bilgilerinizi yalnızca yürürlükteki yasalara göre bunun gerekli
            olduğuna inandığımızda ve bunu yapmak için geçerli bir yasal nedenimiz (yani yasal
            dayanağımız) olduğunda işleriz; örneğin rızanızla, yasalara uymak için, size
            hizmet sunmak ve sözleşmeden doğan yükümlülüklerimize girmek veya yerine getirmek
            için, haklarınızı korumak için veya meşru iş çıkarlarımızı yerine getirmek için.
          </em>
        </p>
        <p>
          <strong>AB veya Birleşik Krallık&apos;ta bulunuyorsanız, bu bölüm sizin için
          geçerlidir.</strong>
        </p>
        <p>
          Genel Veri Koruma Yönetmeliği (GDPR) ve Birleşik Krallık GDPR&apos;ı, kişisel
          bilgilerinizi işlemek için dayandığımız geçerli yasal dayanakları açıklamamızı
          gerektirir. Bu nedenle kişisel bilgilerinizi işlemek için aşağıdaki yasal dayanaklara
          güvenebiliriz:
        </p>
        <ul>
          <li>
            <strong>Rıza.</strong> Kişisel bilgilerinizi belirli bir amaç için kullanmamıza
            izin (yani rıza) vermişseniz bilgilerinizi işleyebiliriz. Rızanızı istediğiniz
            zaman geri çekebilirsiniz.
          </li>
          <li>
            <strong>Sözleşmenin İfası.</strong> Hizmetlerimizi sunmak veya sizinle bir
            sözleşmeye girmeden önce talebiniz üzerine size karşı sözleşmeden doğan
            yükümlülüklerimizi yerine getirmek için gerekli olduğuna inandığımızda kişisel
            bilgilerinizi işleyebiliriz.
          </li>
          <li>
            <strong>Meşru Menfaatler.</strong> Meşru iş çıkarlarımızı gerçekleştirmek için
            makul ölçüde gerekli olduğuna ve bu çıkarların sizin çıkarlarınızdan ve temel
            haklarınızdan ve özgürlüklerinizden daha ağır basmadığına inandığımızda
            bilgilerinizi işleyebiliriz. Örneğin, aşağıdaki amaçlardan bazıları için kişisel
            bilgilerinizi işleyebiliriz:
            <ul>
              <li>Kullanıcılara ürün ve hizmetlerimize ilişkin özel teklifler ve indirimler hakkında bilgi göndermek</li>
              <li>Kullanıcılarımız için kişiselleştirilmiş ve alakalı reklam içeriği geliştirmek ve görüntülemek</li>
              <li>Hizmetlerimizin nasıl kullanıldığını analiz ederek kullanıcıları çekmek ve elde tutmak için bunları geliştirmek</li>
              <li>Pazarlama faaliyetlerimizi desteklemek</li>
              <li>Kullanıcılarımızın ürünlerimizi ve hizmetlerimizi nasıl kullandığını anlayarak kullanıcı deneyimini iyileştirmek</li>
            </ul>
          </li>
          <li>
            <strong>Yasal Yükümlülükler.</strong> Yasal yükümlülüklerimize uymak için
            gerekli olduğuna inandığımızda bilgilerinizi işleyebiliriz; örneğin bir kolluk
            kuvveti veya düzenleyici kurumla işbirliği yapmak, yasal haklarımızı kullanmak
            veya savunmak ya da dahil olduğumuz davalarda kanıt olarak bilgilerinizi ifşa
            etmek için.
          </li>
          <li>
            <strong>Hayati Çıkarlar.</strong> Hayati çıkarlarınızı veya bir üçüncü tarafın
            hayati çıkarlarını korumak için gerekli olduğuna inandığımızda bilgilerinizi
            işleyebiliriz; örneğin herhangi bir kişinin güvenliğine yönelik olası tehditleri
            içeren durumlarda.
          </li>
        </ul>
        <p>
          <strong>Kanada&apos;da bulunuyorsanız, bu bölüm sizin için geçerlidir.</strong>
        </p>
        <p>
          Kişisel bilgilerinizi belirli bir amaç için kullanmamıza özel izin (yani açık rıza)
          vermişseniz veya izninizin çıkarsanabildiği durumlarda (yani zımni rıza)
          bilgilerinizi işleyebiliriz. Rızanızı istediğiniz zaman geri çekebilirsiniz.
        </p>
        <p>
          Bazı istisnai durumlarda, yürürlükteki yasalar uyarınca rızanız olmadan bilgilerinizi
          işlememize yasal olarak izin verilebilir; örneğin:
        </p>
        <ul>
          <li>Toplama açıkça bir kişinin çıkarına ise ve rıza zamanında alınamıyorsa</li>
          <li>Soruşturmalar ile dolandırıcılık tespiti ve önlenmesi için</li>
          <li>Belirli koşulların karşılandığı iş işlemleri için</li>
          <li>Bir tanık ifadesinde yer alıyorsa ve toplamanın bir sigorta talebini değerlendirmek, işlemek veya çözmek için gerekli olması</li>
          <li>Yaralı, hasta veya vefat etmiş kişileri tespit etmek ve yakınlarıyla iletişim kurmak için</li>
          <li>Bir kişinin mali istismara maruz kaldığına, kaldığına veya kalabileceğine inanmak için makul gerekçelerimizin olması durumunda</li>
          <li>Rıza ile toplama ve kullanımın bilgilerin elde edilebilirliğini veya doğruluğunu tehlikeye atacağı makul olarak beklenen durumlarda ve toplamanın bir sözleşme ihlalinin veya Kanada veya bir vilayetin yasalarının ihlalinin soruşturulmasıyla ilgili amaçlar için makul olması durumunda</li>
          <li>Bir mahkeme celbine, müzekkereye, mahkeme emrine veya kayıtların sunulmasına ilişkin mahkeme kurallarına uymak için ifşanın gerekli olması durumunda</li>
          <li>Bir kişinin istihdamı, işi veya mesleği sırasında üretilmişse ve toplamanın, bilginin üretildiği amaçlarla tutarlı olması durumunda</li>
          <li>Toplama yalnızca gazetecilik, sanatsal veya edebi amaçlar için ise</li>
          <li>Bilgiler kamuya açıksa ve yönetmeliklerle belirtilmişse</li>
          <li>Etik gözetim ve gizlilik taahhütleri kapsamında, onaylanmış araştırma veya istatistik projeleri için kimliği tanımlanamayan bilgileri ifşa edebiliriz</li>
        </ul>

        <h2>4. Kişisel bilgilerinizi ne zaman ve kiminle paylaşıyoruz?</h2>
        <p>
          <em>
            Özetle: Bilgileri bu bölümde açıklanan belirli durumlarda ve/veya aşağıdaki
            üçüncü taraf kategorileriyle paylaşabiliriz.
          </em>
        </p>
        <p>
          <strong>Satıcılar, Danışmanlar ve Diğer Üçüncü Taraf Hizmet Sağlayıcıları.</strong>
          {" "}Verilerinizi, bizim için veya bizim adımıza hizmet sağlayan ve bu işi yapmak için
          bu bilgilere erişmesi gereken üçüncü taraf satıcılar, hizmet sağlayıcılar, yükleniciler
          veya temsilcilerle (&apos;üçüncü taraflar&apos;) paylaşabiliriz. Üçüncü taraflarımızla,
          kişisel bilgilerinizi korumaya yardımcı olmak üzere tasarlanmış sözleşmelerimiz
          bulunmaktadır. Bu, kendilerine talimat vermediğimiz sürece kişisel bilgilerinizle
          hiçbir şey yapamayacakları anlamına gelir. Ayrıca kişisel bilgilerinizi bizim
          dışımızda hiçbir kuruluşla paylaşmayacaklardır. Bizim adımıza tuttukları verileri
          korumayı ve talimatımız olan süre boyunca saklamayı da taahhüt ederler.
        </p>
        <p>Kişisel bilgileri paylaşabileceğimiz üçüncü taraf kategorileri aşağıdaki gibidir:</p>
        <ul>
          <li>Reklam Ağları</li>
          <li>Bağlı Kuruluş Pazarlama Programları</li>
          <li>Yapay Zeka Platformları</li>
          <li>Bulut Bilişim Hizmetleri</li>
          <li>Veri Analizi Hizmetleri</li>
          <li>Finans ve Muhasebe Araçları</li>
          <li>Ödeme İşlemcileri</li>
          <li>Performans İzleme Araçları</li>
          <li>Ürün Mühendisliği ve Tasarım Araçları</li>
          <li>Satış ve Pazarlama Araçları</li>
          <li>Sosyal Ağlar</li>
          <li>Kullanıcı Hesabı Kaydı ve Kimlik Doğrulama Hizmetleri</li>
        </ul>
        <p>Ayrıca aşağıdaki durumlarda da kişisel bilgilerinizi paylaşmamız gerekebilir:</p>
        <ul>
          <li>
            <strong>İş Devirleri.</strong> İşimizin tamamının veya bir kısmının başka bir
            şirkete birleşmesi, şirket varlıklarının satışı, finansman veya devralınması ile
            bağlantılı olarak veya bunların müzakereleri sırasında bilgilerinizi paylaşabilir
            veya aktarabiliriz.
          </li>
          <li>
            <strong>Bağlı Kuruluşlar.</strong> Bilgilerinizi bağlı kuruluşlarımızla
            paylaşabiliriz; bu durumda söz konusu bağlı kuruluşlardan bu Gizlilik Bildirimine
            uymalarını isteriz. Bağlı kuruluşlar; ana şirketimizi ve kontrol ettiğimiz veya
            bizimle ortak kontrol altında olan iştiraklerimizi, ortak girişim ortaklarımızı
            veya diğer şirketleri içerir.
          </li>
          <li>
            <strong>İş Ortakları.</strong> Belirli ürünler, hizmetler veya promosyonlar sunmak
            için bilgilerinizi iş ortaklarımızla paylaşabiliriz.
          </li>
          <li>
            <strong>Diğer Kullanıcılar.</strong> Kişisel bilgileri paylaştığınızda (örneğin
            Hizmetlere yorumlar, katkılar veya diğer içerikleri göndererek) veya Hizmetlerin
            kamuya açık alanlarıyla başka bir şekilde etkileşime girdiğinizde, bu tür kişisel
            bilgiler tüm kullanıcılar tarafından görüntülenebilir ve Hizmetler dışında süresiz
            olarak kamuya açık hale getirilebilir. Hizmetlerimizin diğer kullanıcılarıyla
            etkileşime girer ve Hizmetlerimize bir sosyal ağ (Facebook gibi) aracılığıyla
            kaydolursanız, sosyal ağdaki kişileriniz adınızı, profil fotoğrafınızı ve
            etkinliğinizin açıklamalarını görür. Benzer şekilde, diğer kullanıcılar da
            etkinliğinizin açıklamalarını görüntüleyebilir, Hizmetlerimizin içinde sizinle
            iletişim kurabilir ve profilinizi görüntüleyebilir.
          </li>
          <li>
            <strong>Teklif Duvarı.</strong> Uygulamalarımız, üçüncü taraf tarafından barındırılan
            bir &apos;teklif duvarı&apos; görüntüleyebilir. Böyle bir teklif duvarı, üçüncü
            taraf reklamverenlerin, bir reklam teklifinin kabulü ve tamamlanması karşılığında
            kullanıcılara sanal para, hediye veya diğer ürünler sunmasına olanak tanır. Bu tür
            bir teklif duvarı uygulamalarımızda görünebilir ve coğrafi alanınız veya demografik
            bilginiz gibi belirli verilere dayalı olarak size gösterilebilir. Bir teklif
            duvarına tıkladığınızda, diğer kişilere ait harici bir web sitesine yönlendirilirsiniz
            ve uygulamalarımızdan ayrılırsınız. Dolandırıcılığı önlemek ve hesabınızı ilgili
            ödülle uygun şekilde kredilendirmek için kullanıcı kimliğiniz gibi benzersiz bir
            tanımlayıcı teklif duvarı sağlayıcısıyla paylaşılacaktır.
          </li>
        </ul>

        <h2>5. Üçüncü taraf web sitelerine ilişkin tutumumuz nedir?</h2>
        <p>
          <em>
            Özetle: Bağlantı verebileceğimiz veya Hizmetlerimizde reklam veren ancak
            Hizmetlerimizle bağlantılı olmayan üçüncü taraflarla paylaştığınız bilgilerin
            güvenliğinden sorumlu değiliz.
          </em>
        </p>
        <p>
          Teklif duvarımız dahil Hizmetler, bizimle bağlantılı olmayan üçüncü taraf web
          sitelerine, çevrimiçi hizmetlere veya mobil uygulamalara bağlantı verebilir ve/veya
          diğer web sitelerine, hizmetlere veya uygulamalara bağlantı verebilen üçüncü
          taraflardan gelen reklamlar içerebilir. Buna göre, bu tür üçüncü taraflara ilişkin
          herhangi bir garanti vermiyoruz ve bu tür üçüncü taraf web sitelerinin, hizmetlerinin
          veya uygulamalarının kullanımından kaynaklanan herhangi bir kayıp veya hasardan
          sorumlu olmayacağız. Bir üçüncü taraf web sitesine, hizmete veya uygulamaya
          bağlantı verilmesi, bizim tarafımızdan onaylandığı anlamına gelmez. Herhangi bir
          üçüncü taraf web sitesine sağladığınız verilerin güvenliğini ve gizliliğini garanti
          edemeyiz. Üçüncü taraflar tarafından toplanan veriler bu Gizlilik Bildirimi
          kapsamında değildir. Hizmetlere veya Hizmetlerden bağlantı verilebilen diğer web
          siteleri, hizmetler veya uygulamalar dahil olmak üzere herhangi bir üçüncü tarafın
          içeriğinden veya gizlilik ve güvenlik uygulamalarından ve politikalarından sorumlu
          değiliz. Bu tür üçüncü tarafların politikalarını gözden geçirmeli ve sorularınıza
          yanıt almak için doğrudan onlarla iletişime geçmelisiniz.
        </p>

        <h2>6. Çerezleri ve diğer izleme teknolojilerini kullanıyor muyuz?</h2>
        <p>
          <em>
            Özetle: Bilgilerinizi toplamak ve saklamak için çerezleri ve diğer izleme
            teknolojilerini kullanabiliriz.
          </em>
        </p>
        <p>
          Hizmetlerimizle etkileşim kurduğunuzda bilgi toplamak için çerezler ve benzer izleme
          teknolojilerini (web işaretçileri ve pikseller gibi) kullanabiliriz. Bazı çevrimiçi
          izleme teknolojileri, Hizmetlerimizin ve hesabınızın güvenliğini sağlamamıza,
          çökmeleri önlememize, hataları düzeltmemize, tercihlerinizi kaydetmemize ve temel
          site işlevlerine yardımcı olmamıza yardımcı olur.
        </p>
        <p>
          Ayrıca, üçüncü tarafların ve hizmet sağlayıcıların; reklamları yönetmeye ve
          görüntülemeye, reklamları ilgi alanlarınıza göre uyarlamaya veya terk edilmiş
          alışveriş sepeti hatırlatıcıları göndermeye yardımcı olmak (iletişim tercihlerinize
          bağlı olarak) dahil olmak üzere analiz ve reklamcılık amacıyla Hizmetlerimizde
          çevrimiçi izleme teknolojilerini kullanmasına izin veririz. Üçüncü taraflar ve hizmet
          sağlayıcılar, ilgi alanlarınıza göre uyarlanmış ürün ve hizmetler hakkında reklam
          sunmak için teknolojilerini kullanır; bu reklamlar Hizmetlerimizde veya diğer web
          sitelerinde görünebilir.
        </p>
        <p>
          Bu çevrimiçi izleme teknolojilerinin yürürlükteki ABD eyalet yasaları uyarınca bir
          &apos;satış&apos;/&apos;paylaşım&apos; (yürürlükteki yasalar uyarınca tanımlandığı
          şekilde hedeflenmiş reklamcılık dahil) olarak kabul edildiği ölçüde, aşağıdaki
          &apos;Amerika Birleşik Devletleri Sakinlerinin Belirli Gizlilik Hakları Var mı?&apos;
          bölümünde açıklandığı gibi bir talep göndererek bu çevrimiçi izleme teknolojilerinden
          vazgeçebilirsiniz.
        </p>
        <p>
          Bu tür teknolojileri nasıl kullandığımız ve belirli çerezleri nasıl reddedebileceğinize
          ilişkin özel bilgiler{" "}
          <Link href="/cookie-policy">Çerez Politikamızda</Link> belirtilmiştir.
        </p>
        <h3>Google Analytics</h3>
        <p>
          Hizmetlerin kullanımını izlemek ve analiz etmek için bilgilerinizi Google Analytics
          ile paylaşabiliriz. Kullanabileceğimiz Google Analytics Reklam Özellikleri şunları
          içerir: Google Analytics ile Yeniden Pazarlama, Google Görüntülü Reklam Ağı
          Görüntüleme Raporlaması ve Google Analytics Demografik Bilgiler ve İlgi Alanları
          Raporlaması. Tüm Hizmetlerde Google Analytics tarafından izlenmekten vazgeçmek
          için{" "}
          <a href="https://tools.google.com/dlpage/gaoptout">https://tools.google.com/dlpage/gaoptout</a>
          {" "}adresini ziyaret edebilirsiniz. Google Analytics Reklam Özelliklerinden Reklam
          Ayarları ve mobil uygulamalar için Reklam Ayarları aracılığıyla vazgeçebilirsiniz.
          Diğer vazgeçme yöntemleri şunları içerir:{" "}
          <a href="http://optout.networkadvertising.org/">http://optout.networkadvertising.org/</a>{" "}
          ve{" "}
          <a href="http://www.networkadvertising.org/mobile-choice">
            http://www.networkadvertising.org/mobile-choice
          </a>
          . Google&apos;ın gizlilik uygulamaları hakkında daha fazla bilgi için lütfen Google
          Gizlilik ve Şartlar sayfasını ziyaret ediniz.
        </p>

        <h2>7. Yapay zekaya dayalı ürünler sunuyor muyuz?</h2>
        <p>
          <em>
            Özetle: Yapay zeka, makine öğrenmesi veya benzeri teknolojiler tarafından
            desteklenen ürünler, özellikler veya araçlar sunuyoruz.
          </em>
        </p>
        <p>
          Hizmetlerimizin bir parçası olarak, yapay zeka, makine öğrenmesi veya benzeri
          teknolojiler tarafından desteklenen ürünler, özellikler veya araçlar (topluca,
          &apos;Yapay Zeka Ürünleri&apos;) sunuyoruz. Bu araçlar, deneyiminizi geliştirmek ve
          size yenilikçi çözümler sunmak için tasarlanmıştır. Bu Gizlilik Bildirimindeki
          şartlar, Hizmetlerimiz içindeki Yapay Zeka Ürünlerini kullanımınızı düzenler.
        </p>
        <h3>Yapay Zeka Teknolojilerinin Kullanımı</h3>
        <p>
          Yapay Zeka Ürünlerini, OpenAI ve Google Cloud AI dahil olmak üzere üçüncü taraf
          hizmet sağlayıcılar (&apos;Yapay Zeka Hizmet Sağlayıcıları&apos;) aracılığıyla
          sunuyoruz. Bu Gizlilik Bildiriminde belirtildiği gibi, girdi, çıktı ve kişisel
          bilgileriniz, &apos;Kişisel Bilgilerinizi İşlemek İçin Hangi Yasal Dayanaklara
          Güveniyoruz?&apos; bölümünde belirtilen amaçlar için Yapay Zeka Ürünlerimizi
          kullanmanızı sağlamak amacıyla bu Yapay Zeka Hizmet Sağlayıcıları ile paylaşılacak
          ve onlar tarafından işlenecektir. Yapay Zeka Ürünlerini, herhangi bir Yapay Zeka
          Hizmet Sağlayıcısının şart veya politikalarını ihlal eden hiçbir şekilde
          kullanmamalısınız.
        </p>
        <h3>Yapay Zeka Ürünlerimiz</h3>
        <p>Yapay Zeka Ürünlerimiz aşağıdaki işlevler için tasarlanmıştır:</p>
        <ul>
          <li>Yapay zeka uygulamaları</li>
          <li>Yapay zeka botları</li>
          <li>Yapay zeka belge oluşturma</li>
          <li>Yapay zeka içgörüleri</li>
          <li>Yapay zeka araştırması</li>
          <li>Blockchain</li>
          <li>Doğal dil işleme</li>
          <li>Metin analizi</li>
        </ul>
        <h3>Verilerinizi Yapay Zeka Kullanarak Nasıl İşliyoruz</h3>
        <p>
          Yapay Zeka Ürünlerimiz kullanılarak işlenen tüm kişisel bilgiler, Gizlilik
          Bildirimimize ve üçüncü taraflarla olan anlaşmamıza uygun olarak ele alınır. Bu,
          süreç boyunca yüksek güvenlik sağlar ve kişisel bilgilerinizi korur, böylece
          verilerinizin güvenliği konusunda size huzur sağlar.
        </p>

        <h2>8. Sosyal girişlerinizi nasıl ele alıyoruz?</h2>
        <p>
          <em>
            Özetle: Hizmetlerimize bir sosyal medya hesabı kullanarak kaydolmayı veya giriş
            yapmayı seçerseniz, sizinle ilgili belirli bilgilere erişebiliriz.
          </em>
        </p>
        <p>
          Hizmetlerimiz, üçüncü taraf sosyal medya hesap bilgilerinizi (Facebook veya X
          girişleriniz gibi) kullanarak kaydolmanıza ve giriş yapmanıza olanak tanır. Bunu
          yapmayı seçtiğinizde, sosyal medya sağlayıcınızdan sizinle ilgili belirli profil
          bilgilerini alacağız. Aldığımız profil bilgileri, ilgili sosyal medya sağlayıcısına
          göre değişebilir; ancak çoğunlukla adınızı, e-posta adresinizi, arkadaş listenizi ve
          profil resminizi ve bu tür bir sosyal medya platformunda kamuya açık hale getirmeyi
          seçtiğiniz diğer bilgileri içerir. Facebook kullanarak giriş yaparsanız, arkadaşlarınız,
          check-in&apos;leriniz ve beğenileriniz gibi hesabınızla ilgili diğer izinlere
          erişim de talep edebiliriz ve her bir izin için bize erişim verme veya vermeme
          seçeneğine sahip olursunuz.
        </p>
        <p>
          Aldığımız bilgileri yalnızca bu Gizlilik Bildiriminde açıklanan amaçlar için veya
          ilgili Hizmetlerde size açıkça belirtilen amaçlar için kullanacağız. Lütfen kişisel
          bilgilerinizin üçüncü taraf sosyal medya sağlayıcınız tarafından diğer kullanımlarını
          kontrol etmediğimizi ve bunlardan sorumlu olmadığımızı unutmayın. Kişisel bilgilerinizi
          nasıl topladıklarını, kullandıklarını ve paylaştıklarını ve sitelerinde ve
          uygulamalarında gizlilik tercihlerinizi nasıl ayarlayabileceğinizi anlamak için
          gizlilik bildirimlerini gözden geçirmenizi öneririz.
        </p>

        <h2>9. Bilgilerinizi ne kadar süre saklıyoruz?</h2>
        <p>
          <em>
            Özetle: Bilgilerinizi, yasalar tarafından aksi gerekmedikçe bu Gizlilik
            Bildiriminde belirtilen amaçları yerine getirmek için gerekli olduğu sürece
            saklarız.
          </em>
        </p>
        <p>
          Kişisel bilgilerinizi yalnızca bu Gizlilik Bildiriminde belirtilen amaçlar için
          gerekli olduğu sürece saklayacağız; yasalar tarafından daha uzun bir saklama süresi
          gerekli veya izin verilmedikçe (vergi, muhasebe veya diğer yasal gereklilikler
          gibi). Bu bildirimde belirtilen hiçbir amaç, kişisel bilgilerinizi kullanıcının
          hesabının sona ermesinden sonra altı (6) aydan daha uzun süre saklamamızı
          gerektirmeyecektir.
        </p>
        <p>
          Kişisel bilgilerinizi işlemek için süregelen bir meşru ticari ihtiyacımız
          olmadığında, bu bilgileri ya silecek ya da anonimleştireceğiz; bu mümkün değilse
          (örneğin kişisel bilgileriniz yedek arşivlerde saklandığı için), o zaman kişisel
          bilgilerinizi güvenli bir şekilde saklayacak ve silme mümkün olana kadar daha fazla
          işlemden izole edeceğiz.
        </p>

        <h2>10. Bilgilerinizi nasıl güvende tutuyoruz?</h2>
        <p>
          <em>
            Özetle: Kişisel bilgilerinizi bir kurumsal ve teknik güvenlik önlemleri sistemi
            aracılığıyla korumayı amaçlıyoruz.
          </em>
        </p>
        <p>
          İşlediğimiz herhangi bir kişisel bilginin güvenliğini korumak için tasarlanmış uygun
          ve makul teknik ve kurumsal güvenlik önlemlerini uyguladık. Bununla birlikte,
          güvenlik önlemlerimize ve bilgilerinizi güvende tutma çabalarımıza rağmen, internet
          üzerinden hiçbir elektronik iletim veya bilgi depolama teknolojisinin %100 güvenli
          olduğu garanti edilemez; bu nedenle bilgisayar korsanlarının, siber suçluların veya
          diğer yetkisiz üçüncü tarafların güvenliğimizi aşıp bilgilerinizi uygunsuz bir
          şekilde toplamayacaklarını, bunlara erişmeyeceklerini, çalmayacaklarını veya
          değiştirmeyeceklerini taahhüt edemez ya da garanti edemeyiz. Kişisel bilgilerinizi
          korumak için elimizden geleni yapmamıza rağmen, kişisel bilgilerin Hizmetlerimize
          ve Hizmetlerimizden iletilmesi kendi sorumluluğunuzdadır. Hizmetlere yalnızca güvenli
          bir ortamda erişmelisiniz.
        </p>

        <h2>11. Reşit olmayanlardan bilgi topluyor muyuz?</h2>
        <p>
          <em>
            Özetle: 18 yaşın altındaki veya yargı bölgenizdeki yasalarla belirlenmiş eşdeğer
            yaşın altındaki çocuklardan bilerek veri toplamayız veya pazarlama yapmayız.
          </em>
        </p>
        <p>
          18 yaşın altındaki veya yargı bölgenizdeki yasalarla belirlenmiş eşdeğer yaşın
          altındaki çocuklardan bilerek veri toplamayız, talep etmez veya pazarlama yapmayız
          ve bu tür kişisel bilgileri bilerek satmayız. Hizmetleri kullanarak, en az 18 veya
          yargı bölgenizdeki yasalarla belirlenmiş eşdeğer yaşta olduğunuzu veya böyle bir
          reşit olmayanın ebeveyni veya vasisi olduğunuzu ve bu tür reşit olmayan bağımlının
          Hizmetleri kullanmasına rıza gösterdiğinizi beyan etmiş olursunuz. 18 yaşın altındaki
          veya yargı bölgenizdeki yasalarla belirlenmiş eşdeğer yaşın altındaki kullanıcılardan
          kişisel bilgilerin toplandığını öğrenirsek, hesabı devre dışı bırakacağız ve bu tür
          verileri kayıtlarımızdan derhal silmek için makul önlemler alacağız. 18 yaşın
          altındaki veya yargı bölgenizdeki yasalarla belirlenmiş eşdeğer yaşın altındaki
          çocuklardan toplamış olabileceğimiz herhangi bir veriden haberdar olursanız, lütfen{" "}
          <a href="mailto:privacy@safolio.com">privacy@safolio.com</a> adresinden bizimle
          iletişime geçin.
        </p>

        <h2>12. Gizlilik haklarınız nelerdir?</h2>
        <p>
          <em>
            Özetle: ABD&apos;deki ikamet ettiğiniz eyalete veya Avrupa Ekonomik Alanı (AEA),
            Birleşik Krallık (BK), İsviçre ve Kanada gibi bazı bölgelere bağlı olarak, kişisel
            bilgilerinize daha fazla erişim ve kontrol sağlayan haklarınız vardır. İkamet
            ettiğiniz ülkeye, vilayete veya eyalete bağlı olarak hesabınızı istediğiniz zaman
            inceleyebilir, değiştirebilir veya sonlandırabilirsiniz.
          </em>
        </p>
        <p>
          Bazı bölgelerde (AEA, BK, İsviçre ve Kanada gibi), yürürlükteki veri koruma
          yasaları kapsamında belirli haklarınız vardır. Bunlar (i) kişisel bilgilerinize
          erişim talep etme ve bir kopyasını alma hakkı, (ii) düzeltme veya silme talep etme
          hakkı; (iii) kişisel bilgilerinizin işlenmesini kısıtlama hakkı; (iv) varsa veri
          taşınabilirliği hakkı; ve (v) otomatik karar vermeye tabi tutulmama hakkını içerebilir.
          Yasal veya benzer şekilde önemli etkiler yaratan bir karar yalnızca otomatik yollarla
          alındığında, sizi bilgilendireceğiz, ana faktörleri açıklayacağız ve insan
          incelemesi talep etmenin basit bir yolunu sunacağız. Bazı durumlarda, kişisel
          bilgilerinizin işlenmesine itiraz etme hakkına da sahip olabilirsiniz. Aşağıdaki
          &apos;Bu Bildirimle İlgili Olarak Bizimle Nasıl İletişime Geçebilirsiniz?&apos;
          bölümünde sağlanan iletişim bilgilerini kullanarak bizimle iletişime geçerek böyle
          bir talepte bulunabilirsiniz.
        </p>
        <p>
          Her talebi yürürlükteki veri koruma yasalarına uygun olarak değerlendirip işleme
          alacağız.
        </p>
        <p>
          AEA veya BK&apos;da bulunuyorsanız ve kişisel bilgilerinizi yasalara aykırı bir
          şekilde işlediğimize inanıyorsanız, Üye Devlet veri koruma otoritenize veya BK veri
          koruma otoritenize de şikayette bulunma hakkına sahipsiniz.
        </p>
        <p>
          İsviçre&apos;de bulunuyorsanız, Federal Veri Koruma ve Bilgi Komiseri ile iletişime
          geçebilirsiniz.
        </p>
        <p>
          <strong>Rızanızı geri çekme:</strong> Kişisel bilgilerinizi işlemek için rızanıza
          güveniyorsak (bu, yürürlükteki yasaya bağlı olarak açık ve/veya zımni rıza olabilir),
          rızanızı istediğiniz zaman geri çekme hakkına sahipsiniz. Aşağıdaki &apos;Bu
          Bildirimle İlgili Olarak Bizimle Nasıl İletişime Geçebilirsiniz?&apos; bölümünde
          sağlanan iletişim bilgilerini kullanarak veya tercihlerinizi güncelleyerek rızanızı
          istediğiniz zaman geri çekebilirsiniz.
        </p>
        <p>
          Ancak lütfen bunun, geri çekilmeden önce gerçekleştirilen işlemenin yasallığını
          etkilemeyeceğini ve yürürlükteki yasaların izin verdiği durumlarda, rıza dışındaki
          yasal işleme dayanaklarına dayanarak gerçekleştirilen kişisel bilgilerinizin
          işlenmesini de etkilemeyeceğini unutmayın.
        </p>
        <p>
          <strong>Pazarlama ve tanıtım iletişimlerinden vazgeçme:</strong> Pazarlama ve
          tanıtım iletişimlerimizden, gönderdiğimiz e-postalardaki abonelikten çıkma
          bağlantısına tıklayarak veya aşağıdaki &apos;Bu Bildirimle İlgili Olarak Bizimle
          Nasıl İletişime Geçebilirsiniz?&apos; bölümünde sağlanan ayrıntıları kullanarak
          bizimle iletişime geçerek istediğiniz zaman abonelikten çıkabilirsiniz. Bu durumda
          pazarlama listelerinden çıkarılacaksınız. Ancak hesabınızın yönetimi ve kullanımı
          için gerekli olan hizmetle ilgili mesajlar göndermek, hizmet taleplerine yanıt
          vermek veya diğer pazarlama dışı amaçlar için sizinle iletişim kurmaya devam
          edebiliriz.
        </p>
        <h3>Hesap Bilgileri</h3>
        <p>
          Hesabınızdaki bilgileri istediğiniz zaman gözden geçirmek veya değiştirmek ya da
          hesabınızı sonlandırmak isterseniz şunları yapabilirsiniz:
        </p>
        <ul>
          <li>Hesap ayarlarınıza giriş yapın ve kullanıcı hesabınızı güncelleyin.</li>
          <li>
            Hesabınızı sonlandırma talebiniz üzerine, hesabınızı ve bilgilerinizi aktif
            veritabanlarımızdan devre dışı bırakacağız veya sileceğiz. Ancak, dolandırıcılığı
            önlemek, sorunları gidermek, herhangi bir soruşturmaya yardımcı olmak, yasal
            koşullarımızı uygulamak ve/veya yürürlükteki yasal gereklilikleri yerine getirmek
            için dosyalarımızda bazı bilgileri saklayabiliriz.
          </li>
        </ul>
        <p>
          <strong>Çerezler ve benzer teknolojiler:</strong> Çoğu Web tarayıcısı varsayılan
          olarak çerezleri kabul edecek şekilde ayarlanmıştır. İsterseniz, genellikle çerezleri
          kaldırmak ve çerezleri reddetmek için tarayıcınızı ayarlamayı seçebilirsiniz.
          Çerezleri kaldırmayı veya reddetmeyi seçerseniz, bu durum Hizmetlerimizin belirli
          özelliklerini veya hizmetlerini etkileyebilir. Ayrıca, Hizmetlerimizdeki reklamverenler
          tarafından ilgi alanına dayalı reklamcılıktan da vazgeçebilirsiniz. Daha fazla bilgi
          için lütfen <Link href="/cookie-policy">Çerez Politikamıza</Link> bakınız.
        </p>
        <p>
          Gizlilik haklarınızla ilgili sorularınız veya yorumlarınız varsa,{" "}
          <a href="mailto:privacy@safolio.com">privacy@safolio.com</a> adresinden bize
          e-posta gönderebilirsiniz.
        </p>

        <h2>13. Do-not-track özellikleri için kontroller</h2>
        <p>
          Çoğu web tarayıcısı ve bazı mobil işletim sistemleri ile mobil uygulamalar,
          çevrimiçi tarama etkinliklerinizle ilgili verilerin izlenmemesi ve toplanmaması
          yönündeki gizlilik tercihinizi bildirmek için etkinleştirebileceğiniz bir
          Do-Not-Track (&apos;DNT&apos;) özelliği veya ayarı içerir. Bu aşamada, DNT
          sinyallerini tanıma ve uygulamaya yönelik herhangi bir tek tip teknoloji standardı
          tamamlanmamıştır. Bu nedenle, şu anda DNT tarayıcı sinyallerine veya çevrimiçi olarak
          izlenmeme tercihinizi otomatik olarak ileten başka bir mekanizmaya yanıt
          vermemekteyiz. Gelecekte takip etmemiz gereken çevrimiçi izleme için bir standart
          kabul edilirse, bu Gizlilik Bildiriminin revize edilmiş bir sürümünde bu uygulama
          hakkında sizi bilgilendireceğiz.
        </p>
        <p>
          Kaliforniya yasaları, web tarayıcısı DNT sinyallerine nasıl yanıt verdiğimizi size
          bildirmemizi gerektirir. DNT sinyallerini tanıma veya bunlara saygı gösterme
          konusunda şu anda bir endüstri veya yasal standart olmadığından, şu anda bunlara
          yanıt vermiyoruz.
        </p>
        <p>
          <strong>Küresel Gizlilik Kontrolü:</strong> Küresel Gizlilik Kontrolü (GPC)
          sinyallerini tanıyor ve bunlara saygı gösteriyoruz. GPC&apos;yi destekleyen bir
          tarayıcı veya uzantı kullanıyorsanız, bunu Kaliforniya Tüketici Gizlilik Yasası
          (CCPA) dahil olmak üzere yürürlükteki eyalet gizlilik yasaları kapsamında hedeflenmiş
          reklamcılık amacıyla kişisel bilgilerinizin satışı veya paylaşımından vazgeçmek için
          geçerli bir talep olarak ele alacağız. Tarayıcınızdan bir GPC sinyali tespit
          ettiğimizde, herhangi bir ek işlem yapmanızı gerektirmeden vazgeçme tercihinizi
          otomatik olarak uygulayacağız. GPC ve nasıl etkinleştirileceği hakkında daha fazla
          bilgi için{" "}
          <a href="https://globalprivacycontrol.org">globalprivacycontrol.org</a> adresini
          ziyaret edebilirsiniz.
        </p>

        <h2>14. Amerika Birleşik Devletleri sakinlerinin belirli gizlilik hakları var mı?</h2>
        <p>
          <em>
            Özetle: Kaliforniya, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa,
            Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey,
            Oregon, Rhode Island, Tennessee, Texas, Utah veya Virginia&apos;da ikamet
            ediyorsanız, hakkınızda tuttuğumuz kişisel bilgilere ve bunları nasıl işlediğimize
            ilişkin erişim talep etme ve ayrıntı alma, yanlışlıkları düzeltme, bir kopyasını
            alma veya kişisel bilgilerinizi silme hakkına sahip olabilirsiniz. Ayrıca, kişisel
            bilgilerinizi işlememize ilişkin rızanızı geri çekme hakkına da sahip olabilirsiniz.
            Bu haklar bazı durumlarda yürürlükteki yasalarla sınırlandırılabilir. Daha fazla
            bilgi aşağıda verilmiştir.
          </em>
        </p>
        <h3>Topladığımız Kişisel Bilgi Kategorileri</h3>
        <p>
          Aşağıdaki tablo, son on iki (12) ayda topladığımız kişisel bilgi kategorilerini
          göstermektedir. Tablo, her kategorinin örnek niteliğindeki örneklerini içerir ve
          sizden topladığımız kişisel bilgileri yansıtmaz. İşlediğimiz tüm kişisel bilgilerin
          kapsamlı bir envanteri için lütfen &apos;Hangi Bilgileri Topluyoruz?&apos; bölümüne
          bakınız.
        </p>
        <table>
          <thead>
            <tr>
              <th>Kategori</th>
              <th>Örnekler</th>
              <th>Toplanıyor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A. Tanımlayıcılar</td>
              <td>
                Gerçek ad, takma ad, posta adresi, telefon veya mobil iletişim numarası,
                benzersiz kişisel tanımlayıcı, çevrimiçi tanımlayıcı, İnternet Protokolü
                adresi, e-posta adresi ve hesap adı gibi iletişim bilgileri
              </td>
              <td>EVET</td>
            </tr>
            <tr>
              <td>B. Kaliforniya Müşteri Kayıtları yasasında tanımlandığı şekliyle kişisel bilgiler</td>
              <td>
                Ad, iletişim bilgileri, eğitim, istihdam, istihdam geçmişi ve finansal
                bilgiler
              </td>
              <td>EVET</td>
            </tr>
            <tr>
              <td>C. Eyalet veya federal yasalar kapsamındaki korunan sınıflandırma özellikleri</td>
              <td>
                Cinsiyet, yaş, doğum tarihi, ırk ve etnik köken, ulusal köken, medeni durum
                ve diğer demografik veriler
              </td>
              <td>HAYIR</td>
            </tr>
            <tr>
              <td>D. Ticari bilgiler</td>
              <td>İşlem bilgileri, satın alma geçmişi, finansal ayrıntılar ve ödeme bilgileri</td>
              <td>HAYIR</td>
            </tr>
            <tr>
              <td>E. Biyometrik bilgiler</td>
              <td>Parmak izleri ve ses kayıtları</td>
              <td>EVET</td>
            </tr>
            <tr>
              <td>F. İnternet veya diğer benzer ağ etkinliği</td>
              <td>
                Tarama geçmişi, arama geçmişi, çevrimiçi davranış, ilgi alanı verileri ve
                bizim ve diğer web siteleri, uygulamalar, sistemler ve reklamlarla etkileşimler
              </td>
              <td>HAYIR</td>
            </tr>
            <tr>
              <td>G. Coğrafi konum verileri</td>
              <td>Cihaz konumu</td>
              <td>HAYIR</td>
            </tr>
            <tr>
              <td>H. Sesli, elektronik, duyusal veya benzer bilgiler</td>
              <td>
                Ticari faaliyetlerimizle bağlantılı olarak oluşturulan görüntüler ve sesli,
                video veya çağrı kayıtları
              </td>
              <td>HAYIR</td>
            </tr>
            <tr>
              <td>I. Mesleki veya istihdamla ilgili bilgiler</td>
              <td>
                İşletme düzeyinde Hizmetlerimizi size sunmak için iş iletişim bilgileri veya
                bizimle bir iş için başvurmanız halinde iş unvanı, çalışma geçmişi ve
                mesleki nitelikler
              </td>
              <td>HAYIR</td>
            </tr>
            <tr>
              <td>J. Eğitim Bilgileri</td>
              <td>Öğrenci kayıtları ve dizin bilgileri</td>
              <td>HAYIR</td>
            </tr>
            <tr>
              <td>K. Toplanan kişisel bilgilerden çıkarılan çıkarımlar</td>
              <td>
                Örneğin bir kişinin tercihleri ve özellikleri hakkında bir profil veya özet
                oluşturmak için yukarıda listelenen herhangi bir kişisel bilgiden çıkarılan
                çıkarımlar
              </td>
              <td>HAYIR</td>
            </tr>
            <tr>
              <td>L. Hassas kişisel bilgiler</td>
              <td>
                Hesap giriş bilgileri, biyometrik veriler ve hesap erişim ayrıntıları dahil
                finansal bilgiler
              </td>
              <td>EVET</td>
            </tr>
          </tbody>
        </table>
        <p>
          Hassas kişisel bilgileri yalnızca yürürlükteki gizlilik yasaları veya yasalar
          tarafından izin verilen amaçlar için veya rızanızla topluyoruz. Hassas kişisel
          bilgiler, ek olarak belirtilen amaçlar için bir hizmet sağlayıcıya veya yükleniciye
          kullanılabilir veya açıklanabilir. Hassas kişisel bilgilerinizin kullanımını veya
          açıklanmasını sınırlama hakkına sahip olabilirsiniz. Hassas kişisel bilgileri,
          hakkınızdaki özellikleri çıkarmak amacıyla toplamıyor veya işlemiyoruz.
        </p>
        <p>
          Bunun yanı sıra, sizinle şahsen, çevrimiçi veya telefonla ya da posta yoluyla
          aşağıdaki bağlamlarda etkileşime girdiğiniz örnekler aracılığıyla bu kategoriler
          dışında diğer kişisel bilgileri de toplayabiliriz:
        </p>
        <ul>
          <li>Müşteri destek kanallarımız aracılığıyla yardım alma;</li>
          <li>Müşteri anketlerine veya yarışmalara katılım; ve</li>
          <li>Hizmetlerimizin sunulmasını kolaylaştırma ve sorgularınıza yanıt verme.</li>
        </ul>
        <p>Topladığımız kişisel bilgileri, Hizmetleri sağlamak için veya aşağıdaki amaçlar için ihtiyaç duyulduğu kadar kullanacak ve saklayacağız:</p>
        <ul>
          <li>A Kategorisi — Kullanıcının bizde bir hesabı olduğu sürece</li>
          <li>B Kategorisi — Kullanıcının bizde bir hesabı olduğu sürece</li>
          <li>E Kategorisi — Kullanıcının bizde bir hesabı olduğu sürece</li>
          <li>L Kategorisi — Kullanıcının bizde bir hesabı olduğu sürece</li>
        </ul>
        <h3>Kişisel Bilgilerin Kaynakları</h3>
        <p>
          Topladığımız kişisel bilgilerin kaynakları hakkında daha fazla bilgi için &apos;Hangi
          Bilgileri Topluyoruz?&apos; bölümüne bakınız.
        </p>
        <h3>Kişisel Bilgileri Nasıl Kullanıyor ve Paylaşıyoruz</h3>
        <p>
          Kişisel bilgilerinizi nasıl kullandığımız hakkında daha fazla bilgi için
          &apos;Bilgilerinizi Nasıl İşliyoruz?&apos; bölümüne bakınız.
        </p>
        <p>Kişisel bilgilerinizi şu yollarla topluyor ve paylaşıyoruz:</p>
        <ul>
          <li>Hedefleme çerezleri/Pazarlama çerezleri</li>
          <li>Sosyal medya çerezleri</li>
          <li>İşaretçiler/Pikseller/Etiketler</li>
        </ul>
        <p>
          <strong>Bilgileriniz başka biriyle paylaşılacak mı?</strong>
        </p>
        <p>
          Kişisel bilgilerinizi, her hizmet sağlayıcı ile aramızdaki yazılı bir sözleşmeye
          tabi olarak hizmet sağlayıcılarımızla açıklayabiliriz. Kişisel bilgileri kime
          açıkladığımız hakkında daha fazla bilgi için &apos;Kişisel Bilgilerinizi Ne Zaman
          ve Kiminle Paylaşıyoruz?&apos; bölümüne bakınız.
        </p>
        <p>
          Kişisel bilgilerinizi, teknolojik geliştirme ve gösterim için iç araştırma yürütmek
          gibi kendi ticari amaçlarımız için kullanabiliriz. Bu, kişisel bilgilerinizin
          &apos;satılması&apos; olarak kabul edilmez.
        </p>
        <p>
          Önceki on iki (12) ay içinde herhangi bir kişisel bilgiyi ticari veya iş amacıyla
          üçüncü taraflara satmadık veya paylaşmadık. Önceki on iki (12) ay içinde aşağıdaki
          kişisel bilgi kategorilerini ticari veya iş amacıyla üçüncü taraflara açıkladık:
        </p>
        <ul>
          <li>A Kategorisi. Tanımlayıcılar</li>
          <li>B Kategorisi. Kaliforniya Müşteri Kayıtları yasasında tanımlandığı şekliyle kişisel bilgiler</li>
          <li>L Kategorisi. Hassas kişisel bilgiler</li>
        </ul>
        <p>
          Ticari veya iş amacıyla kişisel bilgileri açıkladığımız üçüncü taraf kategorileri,
          &apos;Kişisel Bilgilerinizi Ne Zaman ve Kiminle Paylaşıyoruz?&apos; başlığı altında
          bulunabilir.
        </p>
        <h3>Haklarınız</h3>
        <p>
          Belirli ABD eyalet veri koruma yasaları kapsamında haklarınız vardır. Ancak bu
          haklar mutlak değildir ve bazı durumlarda, yasaların izin verdiği şekilde talebinizi
          reddedebiliriz. Bu haklar şunları içerir:
        </p>
        <ul>
          <li>Kişisel verilerinizi işleyip işlemediğimizi bilme hakkı</li>
          <li>Kişisel verilerinize erişim hakkı</li>
          <li>Kişisel verilerinizdeki yanlışlıkları düzeltme hakkı</li>
          <li>Kişisel verilerinizin silinmesini talep etme hakkı</li>
          <li>Daha önce bizimle paylaştığınız kişisel verilerin bir kopyasını alma hakkı</li>
          <li>Haklarınızı kullanmaktan dolayı ayrımcılığa uğramama hakkı</li>
          <li>
            Kişisel verileriniz hedeflenmiş reklamcılık (veya Kaliforniya gizlilik yasası
            kapsamında tanımlandığı şekilde paylaşım), kişisel verilerin satışı veya yasal
            veya benzer şekilde önemli etkiler yaratan kararların ilerletilmesi için
            profilleme (&apos;profilleme&apos;) için kullanılıyorsa, kişisel verilerinizin
            işlenmesinden vazgeçme hakkı
          </li>
        </ul>
        <p>İkamet ettiğiniz eyalete bağlı olarak, aşağıdaki haklara da sahip olabilirsiniz:</p>
        <ul>
          <li>
            İşlenen kişisel veri kategorilerine erişim hakkı (Minnesota&apos;daki gizlilik
            yasası dahil olmak üzere yürürlükteki yasaların izin verdiği şekilde)
          </li>
          <li>
            Kişisel verileri açıkladığımız üçüncü taraf kategorilerinin bir listesini alma
            hakkı (Kaliforniya, Delaware ve Maryland&apos;daki gizlilik yasası dahil olmak
            üzere yürürlükteki yasaların izin verdiği şekilde)
          </li>
          <li>
            Kişisel verileri açıkladığımız belirli üçüncü tarafların bir listesini alma hakkı
            (Minnesota ve Oregon&apos;daki gizlilik yasası dahil olmak üzere yürürlükteki
            yasaların izin verdiği şekilde)
          </li>
          <li>
            Kişisel verileri sattığımız üçüncü tarafların bir listesini alma hakkı
            (Connecticut&apos;daki gizlilik yasası dahil olmak üzere yürürlükteki yasaların
            izin verdiği şekilde)
          </li>
          <li>
            Kişisel verilerin nasıl profillendirildiğini inceleme, anlama, sorgulama ve
            ikamet ettiğiniz yere bağlı olarak düzeltme hakkı (Connecticut ve Minnesota&apos;daki
            gizlilik yasası dahil olmak üzere yürürlükteki yasaların izin verdiği şekilde)
          </li>
          <li>
            Hassas kişisel verilerin kullanımını ve açıklanmasını sınırlama hakkı
            (Kaliforniya&apos;daki gizlilik yasası dahil olmak üzere yürürlükteki yasaların
            izin verdiği şekilde)
          </li>
          <li>
            Bir ses veya yüz tanıma özelliğinin çalıştırılması yoluyla toplanan hassas
            verilerin ve kişisel verilerin toplanmasından vazgeçme hakkı (Florida&apos;daki
            gizlilik yasası dahil olmak üzere yürürlükteki yasaların izin verdiği şekilde)
          </li>
        </ul>
        <h3>Haklarınızı Nasıl Kullanırsınız</h3>
        <p>
          Bu hakları kullanmak için, bir veri sahibi erişim talebi göndererek,{" "}
          <a href="mailto:privacy@safolio.com">privacy@safolio.com</a> adresinden bize
          e-posta göndererek veya bu belgenin altındaki iletişim bilgilerine başvurarak
          bizimle iletişime geçebilirsiniz.
        </p>
        <p>
          Tarayıcınızda Küresel Gizlilik Kontrolü (GPC) vazgeçme sinyalini etkinleştirirseniz
          vazgeçme tercihlerinize uyacağız.
        </p>
        <p>
          Belirli ABD eyalet veri koruma yasaları kapsamında, sizin adınıza talepte bulunmak
          için yetkili bir temsilci atayabilirsiniz. Yürürlükteki yasalara uygun olarak sizin
          adınıza hareket etmek üzere geçerli şekilde yetkilendirildiklerine dair kanıt
          sunmayan yetkili bir temsilciden gelen talebi reddedebiliriz.
        </p>
        <h3>Talep Doğrulama</h3>
        <p>
          Talebinizi aldığımızda, sistemimizde bilgilerine sahip olduğumuz kişiyle aynı kişi
          olduğunuzu belirlemek için kimliğinizi doğrulamamız gerekecektir. Talebinizde
          sağlanan kişisel bilgileri yalnızca kimliğinizi veya talepte bulunma yetkinizi
          doğrulamak için kullanacağız. Ancak kimliğinizi tarafımızca zaten tutulan
          bilgilerden doğrulayamazsak, kimliğinizi doğrulamak ve güvenlik veya dolandırıcılığı
          önleme amacıyla ek bilgi sağlamanızı isteyebiliriz.
        </p>
        <p>
          Talebi yetkili bir temsilci aracılığıyla gönderirseniz, talebinizi işleme almadan
          önce kimliğinizi doğrulamak için ek bilgi toplamamız gerekebilir ve temsilcinin
          sizin adınıza böyle bir talepte bulunmak için sizden yazılı ve imzalı izin alması
          gerekir.
        </p>
        <h3>İtirazlar</h3>
        <p>
          Belirli ABD eyalet veri koruma yasaları kapsamında, talebinize ilişkin işlem
          yapmayı reddedersek,{" "}
          <a href="mailto:privacy@safolio.com">privacy@safolio.com</a> adresinden bize e-posta
          göndererek kararımıza itiraz edebilirsiniz. İtiraza yanıt olarak alınan veya
          alınmayan herhangi bir işlem hakkında, kararların gerekçelerine ilişkin yazılı bir
          açıklama dahil olmak üzere sizi yazılı olarak bilgilendireceğiz. İtirazınız
          reddedilirse, eyalet başsavcınıza şikayette bulunabilirsiniz.
        </p>
        <h3>Kaliforniya &apos;Shine The Light&apos; Yasası</h3>
        <p>
          &apos;Shine The Light&apos; yasası olarak da bilinen Kaliforniya Medeni Kanunu
          Bölüm 1798.83, Kaliforniya sakini olan kullanıcılarımızın, yılda bir kez ve ücretsiz
          olarak, doğrudan pazarlama amacıyla üçüncü taraflara açıkladığımız kişisel bilgi
          kategorileri (varsa) ve hemen önceki takvim yılında kişisel bilgileri paylaştığımız
          tüm üçüncü tarafların adları ve adresleri hakkında bizden bilgi talep etmesine ve
          almasına izin verir. Kaliforniya sakini iseniz ve böyle bir talepte bulunmak
          istiyorsanız, lütfen &apos;Bu Bildirimle İlgili Olarak Bizimle Nasıl İletişime
          Geçebilirsiniz?&apos; bölümünde sağlanan iletişim bilgilerini kullanarak talebinizi
          yazılı olarak bize gönderin.
        </p>

        <h2>15. Diğer bölgelerin belirli gizlilik hakları var mı?</h2>
        <p>
          <em>Özetle: İkamet ettiğiniz ülkeye bağlı olarak ek haklarınız olabilir.</em>
        </p>
        <h3>Avustralya ve Yeni Zelanda</h3>
        <p>
          Kişisel bilgilerinizi, Avustralya&apos;nın 1988 Gizlilik Yasası ve Yeni Zelanda&apos;nın
          2020 Gizlilik Yasası (Gizlilik Yasası) tarafından belirlenen yükümlülükler ve
          koşullar altında topluyor ve işliyoruz.
        </p>
        <p>
          Bu Gizlilik Bildirimi, her iki Gizlilik Yasasında tanımlanan bildirim gereksinimlerini
          karşılamaktadır; özellikle sizden hangi kişisel bilgileri topladığımız, hangi
          kaynaklardan, hangi amaçlar için ve kişisel bilgilerinizin diğer alıcıları.
        </p>
        <p>
          Geçerli amaçlarını yerine getirmek için gerekli kişisel bilgileri sağlamak
          istemiyorsanız, bu durum hizmetlerimizi sağlama yeteneğimizi etkileyebilir;
          özellikle:
        </p>
        <ul>
          <li>istediğiniz ürün veya hizmetleri size sunma</li>
          <li>taleplerinize yanıt verme veya yardım etme</li>
          <li>hesabınızı bizimle yönetme</li>
          <li>kimliğinizi doğrulama ve hesabınızı koruma</li>
        </ul>
        <p>
          Herhangi bir zamanda, kişisel bilgilerinize erişim talep etme veya bunları
          düzeltme hakkına sahipsiniz. Böyle bir talepte bulunmak için &apos;Sizden
          Topladığımız Verileri Nasıl Gözden Geçirebilir, Güncelleyebilir veya
          Silebilirsiniz?&apos; bölümünde sağlanan iletişim bilgilerini kullanarak bizimle
          iletişime geçebilirsiniz.
        </p>
        <p>
          Kişisel bilgilerinizi yasalara aykırı bir şekilde işlediğimize inanıyorsanız,
          Avustralya Gizlilik İlkelerinin ihlali için Avustralya Bilgi Komiserliği Ofisine ve
          Yeni Zelanda&apos;nın Gizlilik İlkelerinin ihlali için Yeni Zelanda Gizlilik
          Komiserliği Ofisine şikayet sunma hakkına sahipsiniz.
        </p>
        <h3>Güney Afrika Cumhuriyeti</h3>
        <p>
          Herhangi bir zamanda, kişisel bilgilerinize erişim talep etme veya bunları
          düzeltme hakkına sahipsiniz. Böyle bir talepte bulunmak için &apos;Sizden
          Topladığımız Verileri Nasıl Gözden Geçirebilir, Güncelleyebilir veya
          Silebilirsiniz?&apos; bölümünde sağlanan iletişim bilgilerini kullanarak bizimle
          iletişime geçebilirsiniz.
        </p>
        <p>
          Kişisel bilgilerinizi işlememizle ilgili herhangi bir şikayeti ele alma şeklimizden
          memnun değilseniz, ayrıntıları aşağıdaki gibi olan düzenleyici ofisle iletişime
          geçebilirsiniz:
        </p>
        <p>
          Bilgi Düzenleyicisi (Güney Afrika)
          <br />
          Genel sorgular:{" "}
          <a href="mailto:enquiries@inforegulator.org.za">enquiries@inforegulator.org.za</a>
          <br />
          Şikayetler (POPIA/PAIA form 5 doldurun):{" "}
          <a href="mailto:PAIAComplaints@inforegulator.org.za">
            PAIAComplaints@inforegulator.org.za
          </a>{" "}
          &amp;{" "}
          <a href="mailto:POPIAComplaints@inforegulator.org.za">
            POPIAComplaints@inforegulator.org.za
          </a>
        </p>

        <h2>16. Finansal ve piyasa verilerinin kullanımı</h2>
        <p>
          Safolio, yalnızca portföy takibi ve analitik işlevsellik sağlamak amacıyla kullanıcı
          tarafından sağlanan portföy verilerini ve üçüncü taraf piyasa verilerini işler.
          Piyasa verileri gecikmeli, tahmini veya yanlış olabilir. Veri doğruluğu, sorumluluk
          reddi beyanları ve kullanıcı sorumluluğu hakkında daha fazla bilgi Hizmet
          Şartlarında verilmiştir.
        </p>

        <h2>17. Bağlı finansal hesaplar</h2>
        <p>
          Bir kullanıcı bir banka hesabı, aracı kurum hesabı veya başka bir finansal hesabı
          bağlamayı seçerse, Safolio portföy takibi ve analitik amacıyla üçüncü taraf finansal
          kuruluşlar veya veri toplama hizmetleri tarafından sağlanan hesap bilgilerini
          işler. Bu, hesap tanımlayıcıları, bakiyeler, işlem geçmişi ve varlık tutmaları
          içerebilir. Safolio, bağlı hesaplara salt okunur modda erişir ve ödemeleri veya
          işlemleri başlatamaz. Veriler yalnızca kullanıcının açık rızasıyla işlenir ve
          periyodik olarak veya kullanıcı talebi üzerine yenilenebilir. Veri doğruluğu,
          sınırlamalar ve kullanıcı sorumluluğu hakkında daha fazla bilgi Hizmet Şartlarında
          açıklanmıştır.
        </p>

        <h2>18. Bu bildirimi güncelliyor muyuz?</h2>
        <p>
          <em>Özetle: Evet, ilgili yasalara uymak için bu bildirimi gerektiği şekilde güncelleyeceğiz.</em>
        </p>
        <p>
          Bu Gizlilik Bildirimini zaman zaman güncelleyebiliriz. Güncellenen sürüm, bu
          Gizlilik Bildiriminin üst kısmında güncellenmiş bir &apos;Revize Edilmiş&apos;
          tarihi ile belirtilecektir. Bu Gizlilik Bildiriminde önemli değişiklikler yaparsak,
          bu tür değişikliklere ilişkin bir bildirimi belirgin bir şekilde yayınlayarak veya
          size doğrudan bir bildirim göndererek bilgilendirebiliriz. Bilgilerinizi nasıl
          koruduğumuz hakkında bilgi sahibi olmak için bu Gizlilik Bildirimini sık sık gözden
          geçirmenizi öneririz.
        </p>

        <h2>19. Bu bildirimle ilgili olarak bizimle nasıl iletişime geçebilirsiniz?</h2>
        <p>
          Bu bildirimle ilgili sorularınız veya yorumlarınız varsa,{" "}
          <a href="mailto:privacy@safolio.com">privacy@safolio.com</a> adresinden bize e-posta
          gönderebilir veya posta yoluyla bizimle iletişime geçebilirsiniz:
        </p>
        <p>
          Safolio B.V.
          <br />
          2-A Abtstraat
          <br />
          Utrecht, Utrecht 3512 AB
          <br />
          Netherlands
        </p>

        <h2>20. Sizden topladığımız verileri nasıl gözden geçirebilir, güncelleyebilir veya silebilirsiniz?</h2>
        <p>
          ABD&apos;deki ülkenizin veya ikamet ettiğiniz eyaletin yürürlükteki yasalarına
          bağlı olarak, sizden topladığımız kişisel bilgilere erişim talep etme, bunları
          nasıl işlediğimize ilişkin ayrıntılar, yanlışlıkları düzeltme veya kişisel
          bilgilerinizi silme hakkına sahip olabilirsiniz. Ayrıca, kişisel bilgilerinizi
          işlememize ilişkin rızanızı geri çekme hakkına da sahip olabilirsiniz. Bu haklar
          bazı durumlarda yürürlükteki yasalarla sınırlandırılabilir. Kişisel bilgilerinizi
          gözden geçirmek, güncellemek veya silmek için lütfen bir veri sahibi erişim talebi
          doldurup gönderin.
        </p>
      </LegalLayout>
    );
  }

  return (
    <LegalLayout title={t("legal1")}>
      <p className="text-sm text-ink3">Last updated February 01, 2026</p>

      <p>
        This Privacy Notice for Safolio B.V. (doing business as Safolio) (&apos;we&apos;,
        &apos;us&apos;, or &apos;our&apos;), describes how and why we might access, collect,
        store, use, and/or share (&apos;process&apos;) your personal information when you use
        our services (&apos;Services&apos;), including when you:
      </p>
      <ul>
        <li>
          Visit our website at{" "}
          <a href="https://safolio.com">https://safolio.com</a> or any website of ours that
          links to this Privacy Notice
        </li>
        <li>
          Download and use our mobile application (Safolio), our Facebook application (Safolio),
          or any other application of ours that links to this Privacy Notice
        </li>
        <li>
          Use Safolio. A software-as-a-service (SaaS) platform that enables users to track and
          analyze their personal investment portfolios.
        </li>
        <li>Engage with us in other related ways, including any marketing or events</li>
      </ul>
      <p>
        Questions or concerns? Reading this Privacy Notice will help you understand your privacy
        rights and choices. We are responsible for making decisions about how your personal
        information is processed. If you do not agree with our policies and practices, please do
        not use our Services. If you still have any questions or concerns, please contact us at{" "}
        <a href="mailto:privacy@safolio.com">privacy@safolio.com</a>.
      </p>

      <h2>Summary of Key Points</h2>
      <p>
        <em>
          This summary provides key points from our Privacy Notice, but you can find out more
          details about any of these topics by clicking the link following each key point or by
          using our table of contents below to find the section you are looking for.
        </em>
      </p>
      <p>
        <strong>What personal information do we process?</strong> When you visit, use, or
        navigate our Services, we may process personal information depending on how you interact
        with us and the Services, the choices you make, and the products and features you use.
      </p>
      <p>
        <strong>Do we process any sensitive personal information?</strong> Some of the
        information may be considered &apos;special&apos; or &apos;sensitive&apos; in certain
        jurisdictions, for example your racial or ethnic origins, sexual orientation, and
        religious beliefs. We may process sensitive personal information when necessary with
        your consent or as otherwise permitted by applicable law.
      </p>
      <p>
        <strong>Do we collect any information from third parties?</strong> We do not collect any
        information from third parties.
      </p>
      <p>
        <strong>How do we process your information?</strong> We process your information to
        provide, improve, and administer our Services, communicate with you, for security and
        fraud prevention, and to comply with law. We may also process your information for other
        purposes with your consent. We process your information only when we have a valid legal
        reason to do so.
      </p>
      <p>
        <strong>In what situations and with which types of parties do we share personal
        information?</strong>{" "}
        We may share information in specific situations and with specific categories of third
        parties.
      </p>
      <p>
        <strong>How do we keep your information safe?</strong> We have adequate organisational
        and technical processes and procedures in place to protect your personal information.
        However, no electronic transmission over the internet or information storage technology
        can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers,
        cybercriminals, or other unauthorised third parties will not be able to defeat our
        security and improperly collect, access, steal, or modify your information.
      </p>
      <p>
        <strong>What are your rights?</strong> Depending on where you are located
        geographically, the applicable privacy law may mean you have certain rights regarding
        your personal information.
      </p>
      <p>
        <strong>How do you exercise your rights?</strong> The easiest way to exercise your
        rights is by submitting a data subject access request, or by contacting us. We will
        consider and act upon any request in accordance with applicable data protection laws.
      </p>

      <h2>Table of Contents</h2>
      <ol>
        <li>What information do we collect?</li>
        <li>How do we process your information?</li>
        <li>What legal bases do we rely on to process your personal information?</li>
        <li>When and with whom do we share your personal information?</li>
        <li>What is our stance on third-party websites?</li>
        <li>Do we use cookies and other tracking technologies?</li>
        <li>Do we offer artificial intelligence-based products?</li>
        <li>How do we handle your social logins?</li>
        <li>How long do we keep your information?</li>
        <li>How do we keep your information safe?</li>
        <li>Do we collect information from minors?</li>
        <li>What are your privacy rights?</li>
        <li>Controls for do-not-track features</li>
        <li>Do United States residents have specific privacy rights?</li>
        <li>Do other regions have specific privacy rights?</li>
        <li>Use of financial and market data</li>
        <li>Connected financial accounts</li>
        <li>Do we make updates to this notice?</li>
        <li>How can you contact us about this notice?</li>
        <li>How can you review, update, or delete the data we collect from you?</li>
      </ol>

      <h2>1. What information do we collect?</h2>
      <h3>Personal information you disclose to us</h3>
      <p>
        <em>In Short: We collect personal information that you provide to us.</em>
      </p>
      <p>
        We collect personal information that you voluntarily provide to us when you register on
        the Services, express an interest in obtaining information about us or our products and
        Services, when you participate in activities on the Services, or otherwise when you
        contact us.
      </p>
      <p>
        <strong>Personal Information Provided by You.</strong> The personal information that we
        collect depends on the context of your interactions with us and the Services, the
        choices you make, and the products and features you use. The personal information we
        collect may include the following:
      </p>
      <ul>
        <li>names</li>
        <li>email addresses</li>
        <li>usernames</li>
        <li>passwords</li>
        <li>contact preferences</li>
        <li>billing addresses</li>
        <li>debit/credit card numbers</li>
        <li>contact or authentication data</li>
      </ul>
      <p>
        <strong>Sensitive Information.</strong> When necessary, with your consent or as
        otherwise permitted by applicable law, we process the following categories of sensitive
        information:
      </p>
      <ul>
        <li>financial data</li>
        <li>biometric data</li>
      </ul>
      <p>
        <strong>Payment Data.</strong> We may collect data necessary to process your payment if
        you choose to make purchases, such as your payment instrument number, and the security
        code associated with your payment instrument. All payment data is handled and stored by
        PayPal, Stripe, WePay and Paddle. You may find their privacy notice link(s) here:{" "}
        <a href="https://www.paypal.com/us/webapps/mpp/ua/privacy-full#personalData">PayPal</a>,{" "}
        <a href="http://www.stripe.com/privacy">Stripe</a>,{" "}
        <a href="https://go.wepay.com/privacy-policy/">WePay</a> and{" "}
        <a href="https://www.paddle.com/legal/privacy">Paddle</a>.
      </p>
      <p>
        <strong>Online Payments.</strong> Payments for Safolio&apos;s services are processed by
        third-party payment service providers. Safolio does not process or store payment card
        details or other sensitive payment information. When a user makes a payment, personal
        data required to complete the transaction (such as payment details and billing
        information) is processed directly by the selected payment service provider in
        accordance with its own privacy policy and applicable laws. Information about how
        payment service providers process personal data can be found in the relevant
        provider&apos;s privacy policy, which is made available on the provider&apos;s website
        at the time of payment. Safolio may change or add payment service providers from time to
        time. The applicable payment provider and its privacy policy will always be disclosed to
        users during the payment process.
      </p>
      <p>
        <strong>Social Media Login Data.</strong> We may provide you with the option to register
        with us using your existing social media account details, like your Facebook, X, or
        other social media account. If you choose to register in this way, we will collect
        certain profile information about you from the social media provider, as described in
        the section called &apos;How Do We Handle Your Social Logins?&apos; below.
      </p>
      <p>
        <strong>Application Data.</strong> If you use our application(s), we also may collect
        the following information if you choose to provide us with access or permission:
      </p>
      <ul>
        <li>
          <em>Geolocation Information.</em> We may request access or permission to track
          location-based information from your mobile device, either continuously or while you
          are using our mobile application(s), to provide certain location-based services. If
          you wish to change our access or permissions, you may do so in your device&apos;s
          settings.
        </li>
        <li>
          <em>Mobile Device Access.</em> We may request access or permission to certain features
          from your mobile device, including your mobile device&apos;s calendar, reminders, and
          other features. If you wish to change our access or permissions, you may do so in your
          device&apos;s settings.
        </li>
        <li>
          <em>Mobile Device Data.</em> We automatically collect device information (such as your
          mobile device ID, model, and manufacturer), operating system, version information and
          system configuration information, device and application identification numbers,
          browser type and version, hardware model Internet service provider and/or mobile
          carrier, and Internet Protocol (IP) address (or proxy server). If you are using our
          application(s), we may also collect information about the phone network associated
          with your mobile device, your mobile device&apos;s operating system or platform, the
          type of mobile device you use, your mobile device&apos;s unique device ID, and
          information about the features of our application(s) you accessed.
        </li>
        <li>
          <em>Push Notifications.</em> We may request to send you push notifications regarding
          your account or certain features of the application(s). If you wish to opt out from
          receiving these types of communications, you may turn them off in your device&apos;s
          settings.
        </li>
      </ul>
      <p>
        This information is primarily needed to maintain the security and operation of our
        application(s), for troubleshooting, and for our internal analytics and reporting
        purposes.
      </p>
      <p>
        All personal information that you provide to us must be true, complete, and accurate,
        and you must notify us of any changes to such personal information.
      </p>

      <h3>Information automatically collected</h3>
      <p>
        <em>
          In Short: Some information — such as your Internet Protocol (IP) address and/or
          browser and device characteristics — is collected automatically when you visit our
          Services.
        </em>
      </p>
      <p>
        We automatically collect certain information when you visit, use, or navigate the
        Services. This information does not reveal your specific identity (like your name or
        contact information) but may include device and usage information, such as your IP
        address, browser and device characteristics, operating system, language preferences,
        referring URLs, device name, country, location, information about how and when you use
        our Services, and other technical information. This information is primarily needed to
        maintain the security and operation of our Services, and for our internal analytics and
        reporting purposes.
      </p>
      <p>
        Like many businesses, we also collect information through cookies and similar
        technologies. You can find out more about this in our{" "}
        <Link href="/cookie-policy">Cookie Policy</Link>.
      </p>
      <p>The information we collect includes:</p>
      <ul>
        <li>
          <em>Log and Usage Data.</em> Log and usage data is service-related, diagnostic, usage,
          and performance information our servers automatically collect when you access or use
          our Services and which we record in log files. Depending on how you interact with us,
          this log data may include your IP address, device information, browser type, and
          settings and information about your activity in the Services (such as the date/time
          stamps associated with your usage, pages and files viewed, searches, and other actions
          you take such as which features you use), device event information (such as system
          activity, error reports (sometimes called &apos;crash dumps&apos;), and hardware
          settings).
        </li>
        <li>
          <em>Device Data.</em> We collect device data such as information about your computer,
          phone, tablet, or other device you use to access the Services. Depending on the device
          used, this device data may include information such as your IP address (or proxy
          server), device and application identification numbers, location, browser type,
          hardware model, Internet service provider and/or mobile carrier, operating system, and
          system configuration information.
        </li>
        <li>
          <em>Location Data.</em> We collect location data such as information about your
          device&apos;s location, which can be either precise or imprecise. How much information
          we collect depends on the type and settings of the device you use to access the
          Services. For example, we may use GPS and other technologies to collect geolocation
          data that tells us your current location (based on your IP address). You can opt out
          of allowing us to collect this information either by refusing access to the
          information or by disabling your Location setting on your device. However, if you
          choose to opt out, you may not be able to use certain aspects of the Services.
        </li>
      </ul>
      <h3>Google API</h3>
      <p>
        Our use of information received from Google APIs will adhere to{" "}
        <a href="https://developers.google.com/terms/api-services-user-data-policy">
          Google API Services User Data Policy
        </a>
        , including the Limited Use requirements.
      </p>
      <p>
        <strong>Information collected when you use our Facebook application(s).</strong> We by
        default access your Facebook basic account information, including your name, email,
        gender, birthday, current city, and profile picture URL, as well as other information
        that you choose to make public. We may also request access to other permissions related
        to your account, such as friends, check-ins, and likes, and you may choose to grant or
        deny us access to each individual permission. For more information regarding Facebook
        permissions, refer to the Facebook Permissions Reference page.
      </p>

      <h2>2. How do we process your information?</h2>
      <p>
        <em>
          In Short: We process your information to provide, improve, and administer our
          Services, communicate with you, for security and fraud prevention, and to comply with
          law. We process the personal information for the following purposes listed below. We
          may also process your information for other purposes only with your prior explicit
          consent.
        </em>
      </p>
      <p>
        We process your personal information for a variety of reasons, depending on how you
        interact with our Services, including:
      </p>
      <ul>
        <li>
          <strong>To facilitate account creation and authentication and otherwise manage user
          accounts.</strong>{" "}
          We may process your information so you can create and log in to your account, as well
          as keep your account in working order.
        </li>
        <li>
          <strong>To deliver and facilitate delivery of services to the user.</strong> We may
          process your information to provide you with the requested service.
        </li>
        <li>
          <strong>To fulfil and manage your orders.</strong> We may process your information to
          fulfil and manage your orders, payments, returns, and exchanges made through the
          Services.
        </li>
        <li>
          <strong>To enable user-to-user communications.</strong> We may process your
          information if you choose to use any of our offerings that allow for communication
          with another user.
        </li>
        <li>
          <strong>To request feedback.</strong> We may process your information when necessary
          to request feedback and to contact you about your use of our Services.
        </li>
        <li>
          <strong>To send you marketing and promotional communications.</strong> We may process
          the personal information you send to us for our marketing purposes, if this is in
          accordance with your marketing preferences. You can opt out of our marketing emails at
          any time. For more information, see &apos;What Are Your Privacy Rights?&apos; below.
        </li>
        <li>
          <strong>To deliver targeted advertising to you.</strong> We may process your
          information to develop and display personalised content and advertising tailored to
          your interests, location, and more. For more information see our{" "}
          <Link href="/cookie-policy">Cookie Policy</Link>.
        </li>
        <li>
          <strong>To identify usage trends.</strong> We may process information about how you
          use our Services to better understand how they are being used so we can improve them.
        </li>
        <li>
          <strong>To determine the effectiveness of our marketing and promotional
          campaigns.</strong>{" "}
          We may process your information to better understand how to provide marketing and
          promotional campaigns that are most relevant to you.
        </li>
        <li>
          <strong>To save or protect an individual&apos;s vital interest.</strong> We may
          process your information when necessary to save or protect an individual&apos;s vital
          interest, such as to prevent harm.
        </li>
      </ul>

      <h2>3. What legal bases do we rely on to process your information?</h2>
      <p>
        <em>
          In Short: We only process your personal information when we believe it is necessary
          and we have a valid legal reason (i.e. legal basis) to do so under applicable law,
          like with your consent, to comply with laws, to provide you with services to enter
          into or fulfil our contractual obligations, to protect your rights, or to fulfil our
          legitimate business interests.
        </em>
      </p>
      <p>
        <strong>If you are located in the EU or UK, this section applies to you.</strong>
      </p>
      <p>
        The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the
        valid legal bases we rely on in order to process your personal information. As such, we
        may rely on the following legal bases to process your personal information:
      </p>
      <ul>
        <li>
          <strong>Consent.</strong> We may process your information if you have given us
          permission (i.e. consent) to use your personal information for a specific purpose. You
          can withdraw your consent at any time.
        </li>
        <li>
          <strong>Performance of a Contract.</strong> We may process your personal information
          when we believe it is necessary to fulfil our contractual obligations to you,
          including providing our Services or at your request prior to entering into a contract
          with you.
        </li>
        <li>
          <strong>Legitimate Interests.</strong> We may process your information when we believe
          it is reasonably necessary to achieve our legitimate business interests and those
          interests do not outweigh your interests and fundamental rights and freedoms. For
          example, we may process your personal information for some of the purposes described
          in order to:
          <ul>
            <li>Send users information about special offers and discounts on our products and services</li>
            <li>Develop and display personalised and relevant advertising content for our users</li>
            <li>Analyse how our Services are used so we can improve them to engage and retain users</li>
            <li>Support our marketing activities</li>
            <li>Understand how our users use our products and services so we can improve user experience</li>
          </ul>
        </li>
        <li>
          <strong>Legal Obligations.</strong> We may process your information where we believe
          it is necessary for compliance with our legal obligations, such as to cooperate with a
          law enforcement body or regulatory agency, exercise or defend our legal rights, or
          disclose your information as evidence in litigation in which we are involved.
        </li>
        <li>
          <strong>Vital Interests.</strong> We may process your information where we believe it
          is necessary to protect your vital interests or the vital interests of a third party,
          such as situations involving potential threats to the safety of any person.
        </li>
      </ul>
      <p>
        <strong>If you are located in Canada, this section applies to you.</strong>
      </p>
      <p>
        We may process your information if you have given us specific permission (i.e. express
        consent) to use your personal information for a specific purpose, or in situations where
        your permission can be inferred (i.e. implied consent). You can withdraw your consent at
        any time.
      </p>
      <p>
        In some exceptional cases, we may be legally permitted under applicable law to process
        your information without your consent, including, for example:
      </p>
      <ul>
        <li>If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</li>
        <li>For investigations and fraud detection and prevention</li>
        <li>For business transactions provided certain conditions are met</li>
        <li>If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</li>
        <li>For identifying injured, ill, or deceased persons and communicating with next of kin</li>
        <li>If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse</li>
        <li>If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province</li>
        <li>If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records</li>
        <li>If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced</li>
        <li>If the collection is solely for journalistic, artistic, or literary purposes</li>
        <li>If the information is publicly available and is specified by the regulations</li>
        <li>We may disclose de-identified information for approved research or statistics projects, subject to ethics oversight and confidentiality commitments</li>
      </ul>

      <h2>4. When and with whom do we share your personal information?</h2>
      <p>
        <em>
          In Short: We may share information in specific situations described in this section
          and/or with the following categories of third parties.
        </em>
      </p>
      <p>
        <strong>Vendors, Consultants, and Other Third-Party Service Providers.</strong> We may
        share your data with third-party vendors, service providers, contractors, or agents
        (&apos;third parties&apos;) who perform services for us or on our behalf and require
        access to such information to do that work. We have contracts in place with our third
        parties, which are designed to help safeguard your personal information. This means that
        they cannot do anything with your personal information unless we have instructed them to
        do it. They will also not share your personal information with any organisation apart
        from us. They also commit to protect the data they hold on our behalf and to retain it
        for the period we instruct.
      </p>
      <p>The categories of third parties we may share personal information with are as follows:</p>
      <ul>
        <li>Ad Networks</li>
        <li>Affiliate Marketing Programs</li>
        <li>AI Platforms</li>
        <li>Cloud Computing Services</li>
        <li>Data Analytics Services</li>
        <li>Finance &amp; Accounting Tools</li>
        <li>Payment Processors</li>
        <li>Performance Monitoring Tools</li>
        <li>Product Engineering &amp; Design Tools</li>
        <li>Sales &amp; Marketing Tools</li>
        <li>Social Networks</li>
        <li>User Account Registration &amp; Authentication Services</li>
      </ul>
      <p>We also may need to share your personal information in the following situations:</p>
      <ul>
        <li>
          <strong>Business Transfers.</strong> We may share or transfer your information in
          connection with, or during negotiations of, any merger, sale of company assets,
          financing, or acquisition of all or a portion of our business to another company.
        </li>
        <li>
          <strong>Affiliates.</strong> We may share your information with our affiliates, in
          which case we will require those affiliates to honour this Privacy Notice. Affiliates
          include our parent company and any subsidiaries, joint venture partners, or other
          companies that we control or that are under common control with us.
        </li>
        <li>
          <strong>Business Partners.</strong> We may share your information with our business
          partners to offer you certain products, services, or promotions.
        </li>
        <li>
          <strong>Other Users.</strong> When you share personal information (for example, by
          posting comments, contributions, or other content to the Services) or otherwise
          interact with public areas of the Services, such personal information may be viewed by
          all users and may be publicly made available outside the Services in perpetuity. If
          you interact with other users of our Services and register for our Services through a
          social network (such as Facebook), your contacts on the social network will see your
          name, profile photo, and descriptions of your activity. Similarly, other users will be
          able to view descriptions of your activity, communicate with you within our Services,
          and view your profile.
        </li>
        <li>
          <strong>Offer Wall.</strong> Our application(s) may display a third-party hosted
          &apos;offer wall&apos;. Such an offer wall allows third-party advertisers to offer
          virtual currency, gifts, or other items to users in return for the acceptance and
          completion of an advertisement offer. Such an offer wall may appear in our
          application(s) and be displayed to you based on certain data, such as your geographic
          area or demographic information. When you click on an offer wall, you will be brought
          to an external website belonging to other persons and will leave our application(s). A
          unique identifier, such as your user ID, will be shared with the offer wall provider
          in order to prevent fraud and properly credit your account with the relevant reward.
        </li>
      </ul>

      <h2>5. What is our stance on third-party websites?</h2>
      <p>
        <em>
          In Short: We are not responsible for the safety of any information that you share with
          third parties that we may link to or who advertise on our Services, but are not
          affiliated with, our Services.
        </em>
      </p>
      <p>
        The Services, including our offer wall, may link to third-party websites, online
        services, or mobile applications and/or contain advertisements from third parties that
        are not affiliated with us and which may link to other websites, services, or
        applications. Accordingly, we do not make any guarantee regarding any such third
        parties, and we will not be liable for any loss or damage caused by the use of such
        third-party websites, services, or applications. The inclusion of a link towards a
        third-party website, service, or application does not imply an endorsement by us. We
        cannot guarantee the safety and privacy of data you provide to any third-party websites.
        Any data collected by third parties is not covered by this Privacy Notice. We are not
        responsible for the content or privacy and security practices and policies of any third
        parties, including other websites, services, or applications that may be linked to or
        from the Services. You should review the policies of such third parties and contact them
        directly to respond to your questions.
      </p>

      <h2>6. Do we use cookies and other tracking technologies?</h2>
      <p>
        <em>
          In Short: We may use cookies and other tracking technologies to collect and store your
          information.
        </em>
      </p>
      <p>
        We may use cookies and similar tracking technologies (like web beacons and pixels) to
        gather information when you interact with our Services. Some online tracking
        technologies help us maintain the security of our Services and your account, prevent
        crashes, fix bugs, save your preferences, and assist with basic site functions.
      </p>
      <p>
        We also permit third parties and service providers to use online tracking technologies
        on our Services for analytics and advertising, including to help manage and display
        advertisements, to tailor advertisements to your interests, or to send abandoned
        shopping cart reminders (depending on your communication preferences). The third parties
        and service providers use their technology to provide advertising about products and
        services tailored to your interests which may appear either on our Services or on other
        websites.
      </p>
      <p>
        To the extent these online tracking technologies are deemed to be a
        &apos;sale&apos;/&apos;sharing&apos; (which includes targeted advertising, as defined
        under the applicable laws) under applicable US state laws, you can opt out of these
        online tracking technologies by submitting a request as described below under section
        &apos;Do United States Residents Have Specific Privacy Rights?&apos;
      </p>
      <p>
        Specific information about how we use such technologies and how you can refuse certain
        cookies is set out in our <Link href="/cookie-policy">Cookie Policy</Link>.
      </p>
      <h3>Google Analytics</h3>
      <p>
        We may share your information with Google Analytics to track and analyse the use of the
        Services. The Google Analytics Advertising Features that we may use include: Remarketing
        with Google Analytics, Google Display Network Impressions Reporting and Google Analytics
        Demographics and Interests Reporting. To opt out of being tracked by Google Analytics
        across the Services, visit{" "}
        <a href="https://tools.google.com/dlpage/gaoptout">https://tools.google.com/dlpage/gaoptout</a>
        . You can opt out of Google Analytics Advertising Features through Ads Settings and Ad
        Settings for mobile apps. Other opt out means include{" "}
        <a href="http://optout.networkadvertising.org/">http://optout.networkadvertising.org/</a>{" "}
        and{" "}
        <a href="http://www.networkadvertising.org/mobile-choice">
          http://www.networkadvertising.org/mobile-choice
        </a>
        . For more information on the privacy practices of Google, please visit the Google
        Privacy &amp; Terms page.
      </p>

      <h2>7. Do we offer artificial intelligence-based products?</h2>
      <p>
        <em>
          In Short: We offer products, features, or tools powered by artificial intelligence,
          machine learning, or similar technologies.
        </em>
      </p>
      <p>
        As part of our Services, we offer products, features, or tools powered by artificial
        intelligence, machine learning, or similar technologies (collectively, &apos;AI
        Products&apos;). These tools are designed to enhance your experience and provide you
        with innovative solutions. The terms in this Privacy Notice govern your use of the AI
        Products within our Services.
      </p>
      <h3>Use of AI Technologies</h3>
      <p>
        We provide the AI Products through third-party service providers (&apos;AI Service
        Providers&apos;), including OpenAI and Google Cloud AI. As outlined in this Privacy
        Notice, your input, output, and personal information will be shared with and processed
        by these AI Service Providers to enable your use of our AI Products for purposes
        outlined in &apos;What Legal Bases Do We Rely On To Process Your Personal
        Information?&apos; You must not use the AI Products in any way that violates the terms
        or policies of any AI Service Provider.
      </p>
      <h3>Our AI Products</h3>
      <p>Our AI Products are designed for the following functions:</p>
      <ul>
        <li>AI applications</li>
        <li>AI bots</li>
        <li>AI document generation</li>
        <li>AI insights</li>
        <li>AI research</li>
        <li>Blockchain</li>
        <li>Natural language processing</li>
        <li>Text analysis</li>
      </ul>
      <h3>How We Process Your Data Using AI</h3>
      <p>
        All personal information processed using our AI Products is handled in line with our
        Privacy Notice and our agreement with third parties. This ensures high security and
        safeguards your personal information throughout the process, giving you peace of mind
        about your data&apos;s safety.
      </p>

      <h2>8. How do we handle your social logins?</h2>
      <p>
        <em>
          In Short: If you choose to register or log in to our Services using a social media
          account, we may have access to certain information about you.
        </em>
      </p>
      <p>
        Our Services offer you the ability to register and log in using your third-party social
        media account details (like your Facebook or X logins). Where you choose to do this, we
        will receive certain profile information about you from your social media provider. The
        profile information we receive may vary depending on the social media provider
        concerned, but will often include your name, email address, friends list, and profile
        picture, as well as other information you choose to make public on such a social media
        platform. If you log in using Facebook, we may also request access to other permissions
        related to your account, such as your friends, check-ins, and likes, and you may choose
        to grant or deny us access to each individual permission.
      </p>
      <p>
        We will use the information we receive only for the purposes that are described in this
        Privacy Notice or that are otherwise made clear to you on the relevant Services. Please
        note that we do not control, and are not responsible for, other uses of your personal
        information by your third-party social media provider. We recommend that you review
        their privacy notice to understand how they collect, use, and share your personal
        information, and how you can set your privacy preferences on their sites and apps.
      </p>

      <h2>9. How long do we keep your information?</h2>
      <p>
        <em>
          In Short: We keep your information for as long as necessary to fulfil the purposes
          outlined in this Privacy Notice unless otherwise required by law.
        </em>
      </p>
      <p>
        We will only keep your personal information for as long as it is necessary for the
        purposes set out in this Privacy Notice, unless a longer retention period is required or
        permitted by law (such as tax, accounting, or other legal requirements). No purpose in
        this notice will require us keeping your personal information for longer than six (6)
        months past the termination of the user&apos;s account.
      </p>
      <p>
        When we have no ongoing legitimate business need to process your personal information,
        we will either delete or anonymise such information, or, if this is not possible (for
        example, because your personal information has been stored in backup archives), then we
        will securely store your personal information and isolate it from any further processing
        until deletion is possible.
      </p>

      <h2>10. How do we keep your information safe?</h2>
      <p>
        <em>
          In Short: We aim to protect your personal information through a system of
          organisational and technical security measures.
        </em>
      </p>
      <p>
        We have implemented appropriate and reasonable technical and organisational security
        measures designed to protect the security of any personal information we process.
        However, despite our safeguards and efforts to secure your information, no electronic
        transmission over the Internet or information storage technology can be guaranteed to be
        100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other
        unauthorised third parties will not be able to defeat our security and improperly
        collect, access, steal, or modify your information. Although we will do our best to
        protect your personal information, transmission of personal information to and from our
        Services is at your own risk. You should only access the Services within a secure
        environment.
      </p>

      <h2>11. Do we collect information from minors?</h2>
      <p>
        <em>
          In Short: We do not knowingly collect data from or market to children under 18 years
          of age or the equivalent age as specified by law in your jurisdiction.
        </em>
      </p>
      <p>
        We do not knowingly collect, solicit data from, or market to children under 18 years of
        age or the equivalent age as specified by law in your jurisdiction, nor do we knowingly
        sell such personal information. By using the Services, you represent that you are at
        least 18 or the equivalent age as specified by law in your jurisdiction or that you are
        the parent or guardian of such a minor and consent to such minor dependent&apos;s use of
        the Services. If we learn that personal information from users less than 18 years of age
        or the equivalent age as specified by law in your jurisdiction has been collected, we
        will deactivate the account and take reasonable measures to promptly delete such data
        from our records. If you become aware of any data we may have collected from children
        under age 18 or the equivalent age as specified by law in your jurisdiction, please
        contact us at <a href="mailto:privacy@safolio.com">privacy@safolio.com</a>.
      </p>

      <h2>12. What are your privacy rights?</h2>
      <p>
        <em>
          In Short: Depending on your state of residence in the US or in some regions, such as
          the European Economic Area (EEA), United Kingdom (UK), Switzerland, and Canada, you
          have rights that allow you greater access to and control over your personal
          information. You may review, change, or terminate your account at any time, depending
          on your country, province, or state of residence.
        </em>
      </p>
      <p>
        In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights
        under applicable data protection laws. These may include the right (i) to request access
        and obtain a copy of your personal information, (ii) to request rectification or
        erasure; (iii) to restrict the processing of your personal information; (iv) if
        applicable, to data portability; and (v) not to be subject to automated decision-making.
        If a decision that produces legal or similarly significant effects is made solely by
        automated means, we will inform you, explain the main factors, and offer a simple way to
        request human review. In certain circumstances, you may also have the right to object to
        the processing of your personal information. You can make such a request by contacting
        us by using the contact details provided in the section &apos;How Can You Contact Us
        About This Notice?&apos; below.
      </p>
      <p>
        We will consider and act upon any request in accordance with applicable data protection
        laws.
      </p>
      <p>
        If you are located in the EEA or UK and you believe we are unlawfully processing your
        personal information, you also have the right to complain to your Member State data
        protection authority or UK data protection authority.
      </p>
      <p>
        If you are located in Switzerland, you may contact the Federal Data Protection and
        Information Commissioner.
      </p>
      <p>
        <strong>Withdrawing your consent:</strong> If we are relying on your consent to process
        your personal information, which may be express and/or implied consent depending on the
        applicable law, you have the right to withdraw your consent at any time. You can
        withdraw your consent at any time by contacting us by using the contact details provided
        in the section &apos;How Can You Contact Us About This Notice?&apos; below or updating
        your preferences.
      </p>
      <p>
        However, please note that this will not affect the lawfulness of the processing before
        its withdrawal nor, when applicable law allows, will it affect the processing of your
        personal information conducted in reliance on lawful processing grounds other than
        consent.
      </p>
      <p>
        <strong>Opting out of marketing and promotional communications:</strong> You can
        unsubscribe from our marketing and promotional communications at any time by clicking on
        the unsubscribe link in the emails that we send, or by contacting us using the details
        provided in the section &apos;How Can You Contact Us About This Notice?&apos; below. You
        will then be removed from the marketing lists. However, we may still communicate with
        you — for example, to send you service-related messages that are necessary for the
        administration and use of your account, to respond to service requests, or for other
        non-marketing purposes.
      </p>
      <h3>Account Information</h3>
      <p>
        If you would at any time like to review or change the information in your account or
        terminate your account, you can:
      </p>
      <ul>
        <li>Log in to your account settings and update your user account.</li>
        <li>
          Upon your request to terminate your account, we will deactivate or delete your account
          and information from our active databases. However, we may retain some information in
          our files to prevent fraud, troubleshoot problems, assist with any investigations,
          enforce our legal terms and/or comply with applicable legal requirements.
        </li>
      </ul>
      <p>
        <strong>Cookies and similar technologies:</strong> Most Web browsers are set to accept
        cookies by default. If you prefer, you can usually choose to set your browser to remove
        cookies and to reject cookies. If you choose to remove cookies or reject cookies, this
        could affect certain features or services of our Services. You may also opt out of
        interest-based advertising by advertisers on our Services. For further information,
        please see our <Link href="/cookie-policy">Cookie Policy</Link>.
      </p>
      <p>
        If you have questions or comments about your privacy rights, you may email us at{" "}
        <a href="mailto:privacy@safolio.com">privacy@safolio.com</a>.
      </p>

      <h2>13. Controls for do-not-track features</h2>
      <p>
        Most web browsers and some mobile operating systems and mobile applications include a
        Do-Not-Track (&apos;DNT&apos;) feature or setting you can activate to signal your
        privacy preference not to have data about your online browsing activities monitored and
        collected. At this stage, no uniform technology standard for recognising and
        implementing DNT signals has been finalised. As such, we do not currently respond to DNT
        browser signals or any other mechanism that automatically communicates your choice not
        to be tracked online. If a standard for online tracking is adopted that we must follow
        in the future, we will inform you about that practice in a revised version of this
        Privacy Notice.
      </p>
      <p>
        California law requires us to let you know how we respond to web browser DNT signals.
        Because there currently is not an industry or legal standard for recognising or
        honouring DNT signals, we do not respond to them at this time.
      </p>
      <p>
        <strong>Global Privacy Control:</strong> We recognize and honor Global Privacy Control
        (GPC) signals. If you use a browser or extension that supports GPC, we will treat this
        as a valid request to opt out of the sale or sharing of your personal information for
        targeted advertising purposes under applicable state privacy laws, including the
        California Consumer Privacy Act (CCPA). When we detect a GPC signal from your browser,
        we will automatically apply your opt-out preference without requiring you to take any
        additional action. For more information about GPC and how to enable it, visit{" "}
        <a href="https://globalprivacycontrol.org">globalprivacycontrol.org</a>.
      </p>

      <h2>14. Do United States residents have specific privacy rights?</h2>
      <p>
        <em>
          In Short: If you are a resident of California, Colorado, Connecticut, Delaware,
          Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New
          Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you
          may have the right to request access to and receive details about the personal
          information we maintain about you and how we have processed it, correct inaccuracies,
          get a copy of, or delete your personal information. You may also have the right to
          withdraw your consent to our processing of your personal information. These rights may
          be limited in some circumstances by applicable law. More information is provided
          below.
        </em>
      </p>
      <h3>Categories of Personal Information We Collect</h3>
      <p>
        The table below shows the categories of personal information we have collected in the
        past twelve (12) months. The table includes illustrative examples of each category and
        does not reflect the personal information we collect from you. For a comprehensive
        inventory of all personal information we process, please refer to the section
        &apos;What Information Do We Collect?&apos;
      </p>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Examples</th>
            <th>Collected</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A. Identifiers</td>
            <td>
              Contact details, such as real name, alias, postal address, telephone or mobile
              contact number, unique personal identifier, online identifier, Internet Protocol
              address, email address, and account name
            </td>
            <td>YES</td>
          </tr>
          <tr>
            <td>B. Personal information as defined in the California Customer Records statute</td>
            <td>
              Name, contact information, education, employment, employment history, and
              financial information
            </td>
            <td>YES</td>
          </tr>
          <tr>
            <td>C. Protected classification characteristics under state or federal law</td>
            <td>
              Gender, age, date of birth, race and ethnicity, national origin, marital status,
              and other demographic data
            </td>
            <td>NO</td>
          </tr>
          <tr>
            <td>D. Commercial information</td>
            <td>Transaction information, purchase history, financial details, and payment information</td>
            <td>NO</td>
          </tr>
          <tr>
            <td>E. Biometric information</td>
            <td>Fingerprints and voiceprints</td>
            <td>YES</td>
          </tr>
          <tr>
            <td>F. Internet or other similar network activity</td>
            <td>
              Browsing history, search history, online behaviour, interest data, and
              interactions with our and other websites, applications, systems, and
              advertisements
            </td>
            <td>NO</td>
          </tr>
          <tr>
            <td>G. Geolocation data</td>
            <td>Device location</td>
            <td>NO</td>
          </tr>
          <tr>
            <td>H. Audio, electronic, sensory, or similar information</td>
            <td>
              Images and audio, video or call recordings created in connection with our business
              activities
            </td>
            <td>NO</td>
          </tr>
          <tr>
            <td>I. Professional or employment-related information</td>
            <td>
              Business contact details in order to provide you our Services at a business level
              or job title, work history, and professional qualifications if you apply for a job
              with us
            </td>
            <td>NO</td>
          </tr>
          <tr>
            <td>J. Education Information</td>
            <td>Student records and directory information</td>
            <td>NO</td>
          </tr>
          <tr>
            <td>K. Inferences drawn from collected personal information</td>
            <td>
              Inferences drawn from any of the collected personal information listed above to
              create a profile or summary about, for example, an individual&apos;s preferences
              and characteristics
            </td>
            <td>NO</td>
          </tr>
          <tr>
            <td>L. Sensitive personal Information</td>
            <td>
              Account login information, biometric data and financial information including
              account access details
            </td>
            <td>YES</td>
          </tr>
        </tbody>
      </table>
      <p>
        We only collect sensitive personal information, as defined by applicable privacy laws or
        the purposes allowed by law or with your consent. Sensitive personal information may be
        used, or disclosed to a service provider or contractor, for additional, specified
        purposes. You may have the right to limit the use or disclosure of your sensitive
        personal information. We do not collect or process sensitive personal information for
        the purpose of inferring characteristics about you.
      </p>
      <p>
        We may also collect other personal information outside of these categories through
        instances where you interact with us in person, online, or by phone or mail in the
        context of:
      </p>
      <ul>
        <li>Receiving help through our customer support channels;</li>
        <li>Participation in customer surveys or contests; and</li>
        <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
      </ul>
      <p>We will use and retain the collected personal information as needed to provide the Services or for:</p>
      <ul>
        <li>Category A — As long as the user has an account with us</li>
        <li>Category B — As long as the user has an account with us</li>
        <li>Category E — As long as the user has an account with us</li>
        <li>Category L — As long as the user has an account with us</li>
      </ul>
      <h3>Sources of Personal Information</h3>
      <p>
        Learn more about the sources of personal information we collect in &apos;What
        Information Do We Collect?&apos;
      </p>
      <h3>How We Use and Share Personal Information</h3>
      <p>
        Learn more about how we use your personal information in the section, &apos;How Do We
        Process Your Information?&apos;
      </p>
      <p>We collect and share your personal information through:</p>
      <ul>
        <li>Targeting cookies/Marketing cookies</li>
        <li>Social media cookies</li>
        <li>Beacons/Pixels/Tags</li>
      </ul>
      <p>
        <strong>Will your information be shared with anyone else?</strong>
      </p>
      <p>
        We may disclose your personal information with our service providers pursuant to a
        written contract between us and each service provider. Learn more about how we disclose
        personal information to in the section, &apos;When And With Whom Do We Share Your
        Personal Information?&apos;
      </p>
      <p>
        We may use your personal information for our own business purposes, such as for
        undertaking internal research for technological development and demonstration. This is
        not considered to be &apos;selling&apos; of your personal information.
      </p>
      <p>
        We have not sold or shared any personal information to third parties for a business or
        commercial purpose in the preceding twelve (12) months. We have disclosed the following
        categories of personal information to third parties for a business or commercial purpose
        in the preceding twelve (12) months:
      </p>
      <ul>
        <li>Category A. Identifiers</li>
        <li>Category B. Personal information as defined in the California Customer Records law</li>
        <li>Category L. Sensitive personal information</li>
      </ul>
      <p>
        The categories of third parties to whom we disclosed personal information for a business
        or commercial purpose can be found under &apos;When And With Whom Do We Share Your
        Personal Information?&apos;
      </p>
      <h3>Your Rights</h3>
      <p>
        You have rights under certain US state data protection laws. However, these rights are
        not absolute, and in certain cases, we may decline your request as permitted by law.
        These rights include:
      </p>
      <ul>
        <li>Right to know whether or not we are processing your personal data</li>
        <li>Right to access your personal data</li>
        <li>Right to correct inaccuracies in your personal data</li>
        <li>Right to request the deletion of your personal data</li>
        <li>Right to obtain a copy of the personal data you previously shared with us</li>
        <li>Right to non-discrimination for exercising your rights</li>
        <li>
          Right to opt out of the processing of your personal data if it is used for targeted
          advertising (or sharing as defined under California&apos;s privacy law), the sale of
          personal data, or profiling in furtherance of decisions that produce legal or
          similarly significant effects (&apos;profiling&apos;)
        </li>
      </ul>
      <p>Depending upon the state where you live, you may also have the following rights:</p>
      <ul>
        <li>
          Right to access the categories of personal data being processed (as permitted by
          applicable law, including the privacy law in Minnesota)
        </li>
        <li>
          Right to obtain a list of the categories of third parties to which we have disclosed
          personal data (as permitted by applicable law, including the privacy law in
          California, Delaware, and Maryland)
        </li>
        <li>
          Right to obtain a list of specific third parties to which we have disclosed personal
          data (as permitted by applicable law, including the privacy law in Minnesota and
          Oregon)
        </li>
        <li>
          Right to obtain a list of third parties to which we have sold personal data (as
          permitted by applicable law, including the privacy law in Connecticut)
        </li>
        <li>
          Right to review, understand, question, and depending on where you live, correct how
          personal data has been profiled (as permitted by applicable law, including the privacy
          law in Connecticut and Minnesota)
        </li>
        <li>
          Right to limit use and disclosure of sensitive personal data (as permitted by
          applicable law, including the privacy law in California)
        </li>
        <li>
          Right to opt out of the collection of sensitive data and personal data collected
          through the operation of a voice or facial recognition feature (as permitted by
          applicable law, including the privacy law in Florida)
        </li>
      </ul>
      <h3>How to Exercise Your Rights</h3>
      <p>
        To exercise these rights, you can contact us by submitting a data subject access
        request, by emailing us at <a href="mailto:privacy@safolio.com">privacy@safolio.com</a>,
        or by referring to the contact details at the bottom of this document.
      </p>
      <p>
        We will honour your opt-out preferences if you enact the Global Privacy Control (GPC)
        opt-out signal on your browser.
      </p>
      <p>
        Under certain US state data protection laws, you can designate an authorised agent to
        make a request on your behalf. We may deny a request from an authorised agent that does
        not submit proof that they have been validly authorised to act on your behalf in
        accordance with applicable laws.
      </p>
      <h3>Request Verification</h3>
      <p>
        Upon receiving your request, we will need to verify your identity to determine you are
        the same person about whom we have the information in our system. We will only use
        personal information provided in your request to verify your identity or authority to
        make the request. However, if we cannot verify your identity from the information
        already maintained by us, we may request that you provide additional information for the
        purposes of verifying your identity and for security or fraud-prevention purposes.
      </p>
      <p>
        If you submit the request through an authorised agent, we may need to collect additional
        information to verify your identity before processing your request and the agent will
        need to provide a written and signed permission from you to submit such request on your
        behalf.
      </p>
      <h3>Appeals</h3>
      <p>
        Under certain US state data protection laws, if we decline to take action regarding your
        request, you may appeal our decision by emailing us at{" "}
        <a href="mailto:privacy@safolio.com">privacy@safolio.com</a>. We will inform you in
        writing of any action taken or not taken in response to the appeal, including a written
        explanation of the reasons for the decisions. If your appeal is denied, you may submit a
        complaint to your state attorney general.
      </p>
      <h3>California &apos;Shine The Light&apos; Law</h3>
      <p>
        California Civil Code Section 1798.83, also known as the &apos;Shine The Light&apos;
        law, permits our users who are California residents to request and obtain from us, once
        a year and free of charge, information about categories of personal information (if
        any) we disclosed to third parties for direct marketing purposes and the names and
        addresses of all third parties with which we shared personal information in the
        immediately preceding calendar year. If you are a California resident and would like to
        make such a request, please submit your request in writing to us by using the contact
        details provided in the section &apos;How Can You Contact Us About This Notice?&apos;
      </p>

      <h2>15. Do other regions have specific privacy rights?</h2>
      <p>
        <em>In Short: You may have additional rights based on the country you reside in.</em>
      </p>
      <h3>Australia and New Zealand</h3>
      <p>
        We collect and process your personal information under the obligations and conditions
        set by Australia&apos;s Privacy Act 1988 and New Zealand&apos;s Privacy Act 2020
        (Privacy Act).
      </p>
      <p>
        This Privacy Notice satisfies the notice requirements defined in both Privacy Acts, in
        particular: what personal information we collect from you, from which sources, for which
        purposes, and other recipients of your personal information.
      </p>
      <p>
        If you do not wish to provide the personal information necessary to fulfil their
        applicable purpose, it may affect our ability to provide our services, in particular:
      </p>
      <ul>
        <li>offer you the products or services that you want</li>
        <li>respond to or help with your requests</li>
        <li>manage your account with us</li>
        <li>confirm your identity and protect your account</li>
      </ul>
      <p>
        At any time, you have the right to request access to or correction of your personal
        information. You can make such a request by contacting us by using the contact details
        provided in the section &apos;How Can You Review, Update, Or Delete The Data We Collect
        From You?&apos;
      </p>
      <p>
        If you believe we are unlawfully processing your personal information, you have the
        right to submit a complaint about a breach of the Australian Privacy Principles to the
        Office of the Australian Information Commissioner and a breach of New Zealand&apos;s
        Privacy Principles to the Office of New Zealand Privacy Commissioner.
      </p>
      <h3>Republic of South Africa</h3>
      <p>
        At any time, you have the right to request access to or correction of your personal
        information. You can make such a request by contacting us by using the contact details
        provided in the section &apos;How Can You Review, Update, Or Delete The Data We Collect
        From You?&apos;
      </p>
      <p>
        If you are unsatisfied with the manner in which we address any complaint with regard to
        our processing of personal information, you can contact the office of the regulator,
        the details of which are:
      </p>
      <p>
        The Information Regulator (South Africa)
        <br />
        General enquiries:{" "}
        <a href="mailto:enquiries@inforegulator.org.za">enquiries@inforegulator.org.za</a>
        <br />
        Complaints (complete POPIA/PAIA form 5):{" "}
        <a href="mailto:PAIAComplaints@inforegulator.org.za">
          PAIAComplaints@inforegulator.org.za
        </a>{" "}
        &amp;{" "}
        <a href="mailto:POPIAComplaints@inforegulator.org.za">
          POPIAComplaints@inforegulator.org.za
        </a>
      </p>

      <h2>16. Use of financial and market data</h2>
      <p>
        Safolio processes user-provided portfolio data and third-party market data solely for
        the purpose of providing portfolio tracking and analytical functionality. Market data
        may be delayed, estimated, or inaccurate. Further information regarding data accuracy,
        disclaimers, and user responsibility is provided in the Terms of Service.
      </p>

      <h2>17. Connected financial accounts</h2>
      <p>
        If a user chooses to connect a bank account, brokerage account, or other financial
        account, Safolio processes account information provided by third-party financial
        institutions or data aggregation services for the purpose of portfolio tracking and
        analytics. This may include account identifiers, balances, transaction history, and
        asset holdings. Safolio accesses connected accounts in read-only mode and cannot
        initiate payments or transactions. Data is processed solely with the user&apos;s
        explicit consent and may be refreshed periodically or upon user request. Further
        information regarding data accuracy, limitations, and user responsibility is described
        in the Terms of Service.
      </p>

      <h2>18. Do we make updates to this notice?</h2>
      <p>
        <em>In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</em>
      </p>
      <p>
        We may update this Privacy Notice from time to time. The updated version will be
        indicated by an updated &apos;Revised&apos; date at the top of this Privacy Notice. If
        we make material changes to this Privacy Notice, we may notify you either by prominently
        posting a notice of such changes or by directly sending you a notification. We encourage
        you to review this Privacy Notice frequently to be informed of how we are protecting
        your information.
      </p>

      <h2>19. How can you contact us about this notice?</h2>
      <p>
        If you have questions or comments about this notice, you may email us at{" "}
        <a href="mailto:privacy@safolio.com">privacy@safolio.com</a> or contact us by post at:
      </p>
      <p>
        Safolio B.V.
        <br />
        2-A Abtstraat
        <br />
        Utrecht, Utrecht 3512 AB
        <br />
        Netherlands
      </p>

      <h2>20. How can you review, update, or delete the data we collect from you?</h2>
      <p>
        Based on the applicable laws of your country or state of residence in the US, you may
        have the right to request access to the personal information we collect from you,
        details about how we have processed it, correct inaccuracies, or delete your personal
        information. You may also have the right to withdraw your consent to our processing of
        your personal information. These rights may be limited in some circumstances by
        applicable law. To request to review, update, or delete your personal information,
        please fill out and submit a data subject access request.
      </p>
    </LegalLayout>
  );
}
