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
  return { title: `${t("legal2")} — Safolio` };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Footer" });
  if (locale === "tr") {
    return (
      <LegalLayout title={t("legal2")}>
        <p className="text-sm text-ink3">Son güncelleme: 02 Mayıs 2026</p>

        <p>
          Bu Çerez Politikası, Safolio B.V.&apos;nin (&apos;Şirket&apos;, &apos;biz&apos;,
          &apos;bize&apos; veya &apos;bizim&apos;) web sitemizi{" "}
          <a href="https://safolio.com">https://safolio.com</a> (&apos;Web Sitesi&apos;) ziyaret
          ettiğinizde sizi tanımak için çerezleri ve benzer teknolojileri nasıl kullandığını
          açıklar. Bu teknolojilerin ne olduğunu ve onları neden kullandığımızı, ayrıca
          kullanımımızı kontrol etme haklarınızı açıklar.
        </p>
        <p>
          Bazı durumlarda kişisel bilgileri veya başka bilgilerle birleştirdiğimizde kişisel
          bilgi haline gelen bilgileri toplamak için çerezler kullanabiliriz.
        </p>

        <h2>Çerezler nedir?</h2>
        <p>
          Çerezler, bir web sitesini ziyaret ettiğinizde bilgisayarınıza veya mobil cihazınıza
          yerleştirilen küçük veri dosyalarıdır. Çerezler, web sitesi sahipleri tarafından web
          sitelerinin çalışmasını sağlamak veya daha verimli çalışmasını sağlamak, ayrıca
          raporlama bilgileri sunmak için yaygın olarak kullanılır.
        </p>
        <p>
          Web sitesi sahibi (bu durumda Safolio B.V.) tarafından ayarlanan çerezlere
          &apos;birinci taraf çerezler&apos; denir. Web sitesi sahibinden başka taraflarca
          ayarlanan çerezlere &apos;üçüncü taraf çerezler&apos; denir. Üçüncü taraf çerezler,
          web sitesi üzerinde veya aracılığıyla üçüncü taraf özelliklerinin ya da işlevlerinin
          sağlanmasını mümkün kılar (örneğin reklamcılık, etkileşimli içerik ve analiz). Bu
          üçüncü taraf çerezleri ayarlayan taraflar, ilgili web sitesini ziyaret ettiğinizde
          ve ayrıca diğer bazı web sitelerini ziyaret ettiğinizde bilgisayarınızı tanıyabilir.
        </p>

        <h2>Çerezleri neden kullanıyoruz?</h2>
        <p>
          Birinci ve üçüncü taraf çerezleri çeşitli nedenlerle kullanıyoruz. Bazı çerezler, Web
          Sitemizin çalışması için teknik nedenlerle gereklidir ve bunlara &apos;zorunlu&apos;
          veya &apos;kesinlikle gerekli&apos; çerezler diyoruz. Diğer çerezler ayrıca Çevrimiçi
          Mülklerimizdeki deneyimi geliştirmek için kullanıcılarımızın ilgi alanlarını takip
          etmemize ve hedeflememize olanak tanır. Üçüncü taraflar, reklam, analiz ve diğer
          amaçlarla Web Sitemiz aracılığıyla çerezler sunar. Bu, aşağıda daha ayrıntılı olarak
          açıklanmıştır.
        </p>

        <h2>Çerezleri nasıl kontrol edebilirim?</h2>
        <p>
          Çerezleri kabul edip etmeyeceğinize karar verme hakkına sahipsiniz. Çerez Onay
          Yöneticisi&apos;nde tercihlerinizi ayarlayarak çerez haklarınızı kullanabilirsiniz.
          Çerez Onay Yöneticisi, hangi çerez kategorilerini kabul edeceğinizi veya
          reddedeceğinizi seçmenize olanak tanır. Zorunlu çerezler, size hizmet sunmak için
          kesinlikle gerekli oldukları için reddedilemez.
        </p>
        <p>
          Çerez Onay Yöneticisi&apos;ne bildirim afişinde ve Web Sitemizde ulaşabilirsiniz.
          Çerezleri reddetmeyi seçerseniz, Web Sitemizi yine de kullanabilirsiniz; ancak Web
          Sitemizin bazı işlevlerine ve alanlarına erişiminiz kısıtlanabilir. Çerezleri kabul
          etmek veya reddetmek için web tarayıcı denetimlerinizi de ayarlayabilir veya
          değiştirebilirsiniz.
        </p>
        <p>
          Web Sitemiz aracılığıyla sunulan birinci ve üçüncü taraf çerezlerin belirli türleri
          ve gerçekleştirdikleri amaçlar aşağıdaki tablolarda açıklanmıştır (lütfen sunulan
          belirli çerezlerin, ziyaret ettiğiniz belirli Çevrimiçi Mülklere bağlı olarak
          değişebileceğini unutmayın):
        </p>

        <h3>Zorunlu web sitesi çerezleri</h3>
        <p>
          Bu çerezler, Web Sitemiz aracılığıyla sunulan hizmetleri size sağlamak ve güvenli
          alanlara erişim gibi bazı özelliklerini kullanmak için kesinlikle gereklidir.
        </p>
        <table>
          <tbody>
            <tr>
              <td>Ad</td>
              <td>TERMLY_API_CACHE</td>
            </tr>
            <tr>
              <td>Amaç</td>
              <td>Onay afişinin performansını artırmak amacıyla ziyaretçinin onay sonucunu saklamak için kullanılır.</td>
            </tr>
            <tr>
              <td>Sağlayıcı</td>
              <td>safolio.com</td>
            </tr>
            <tr>
              <td>Hizmet</td>
              <td>Termly</td>
            </tr>
            <tr>
              <td>Tür</td>
              <td>html_local_storage</td>
            </tr>
            <tr>
              <td>Süresi</td>
              <td>1 yıl</td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>Ad</td>
              <td>csrf_token</td>
            </tr>
            <tr>
              <td>Amaç</td>
              <td>Bilgisayar korsanlığına ve kötü niyetli aktörlere karşı koruma sağlar.</td>
            </tr>
            <tr>
              <td>Sağlayıcı</td>
              <td>safolio.com</td>
            </tr>
            <tr>
              <td>Hizmet</td>
              <td>Django</td>
            </tr>
            <tr>
              <td>Tür</td>
              <td>http_cookie</td>
            </tr>
            <tr>
              <td>Süresi</td>
              <td>29 gün</td>
            </tr>
          </tbody>
        </table>

        <h3>Performans ve işlevsellik çerezleri</h3>
        <p>
          Bu çerezler, Web Sitemizin performansını ve işlevselliğini artırmak için kullanılır
          ancak kullanımı için zorunlu değildir. Ancak bu çerezler olmadan, belirli işlevler
          (videolar gibi) kullanılamaz hale gelebilir.
        </p>
        <table>
          <tbody>
            <tr>
              <td>Ad</td>
              <td>cf.turnstile.u</td>
            </tr>
            <tr>
              <td>Sağlayıcı</td>
              <td>challenges.cloudflare.com</td>
            </tr>
            <tr>
              <td>Hizmet</td>
              <td>
                <a href="https://www.cloudflare.com/security-policy/">Cloudflare</a>
              </td>
            </tr>
            <tr>
              <td>Tür</td>
              <td>html_local_storage</td>
            </tr>
            <tr>
              <td>Süresi</td>
              <td>Kalıcı</td>
            </tr>
          </tbody>
        </table>

        <h3>Sınıflandırılmamış çerezler</h3>
        <p>
          Bunlar henüz kategorize edilmemiş çerezlerdir. Bu çerezleri sağlayıcılarının
          yardımıyla sınıflandırma sürecindeyiz.
        </p>
        <table>
          <tbody>
            <tr>
              <td>Ad</td>
              <td>wp-wpml_current_language</td>
            </tr>
            <tr>
              <td>Sağlayıcı</td>
              <td>safolio.com</td>
            </tr>
            <tr>
              <td>Tür</td>
              <td>http_cookie</td>
            </tr>
            <tr>
              <td>Süresi</td>
              <td>Oturum</td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>Ad</td>
              <td>wglang</td>
            </tr>
            <tr>
              <td>Sağlayıcı</td>
              <td>app.termly.io</td>
            </tr>
            <tr>
              <td>Tür</td>
              <td>html_local_storage</td>
            </tr>
            <tr>
              <td>Süresi</td>
              <td>Kalıcı</td>
            </tr>
          </tbody>
        </table>

        <h2>Tarayıcımda çerezleri nasıl kontrol edebilirim?</h2>
        <p>
          Çerezleri web tarayıcısı denetimleri aracılığıyla reddetme yöntemleri tarayıcıdan
          tarayıcıya farklılık gösterdiğinden, daha fazla bilgi için tarayıcınızın yardım
          menüsünü ziyaret etmelisiniz. Aşağıda en popüler tarayıcılarda çerezlerin nasıl
          yönetileceğine ilişkin bilgiler verilmiştir:
        </p>
        <ul>
          <li>Chrome</li>
          <li>Internet Explorer</li>
          <li>Firefox</li>
          <li>Safari</li>
          <li>Edge</li>
          <li>Opera</li>
        </ul>
        <p>
          Ayrıca, çoğu reklam ağı size hedefli reklamcılıktan vazgeçme imkânı sunar. Daha fazla
          bilgi edinmek isterseniz, lütfen şu adresleri ziyaret edin:
        </p>
        <ul>
          <li>Digital Advertising Alliance</li>
          <li>Digital Advertising Alliance of Canada</li>
          <li>European Interactive Digital Advertising Alliance</li>
        </ul>

        <h2>Web işaretçileri gibi diğer izleme teknolojileri ne olacak?</h2>
        <p>
          Çerezler, bir web sitesi ziyaretçilerini tanımanın veya izlemenin tek yolu değildir.
          Zaman zaman web işaretçileri (bazen &apos;izleme pikselleri&apos; veya &apos;clear
          gifs&apos; olarak adlandırılır) gibi başka benzer teknolojiler kullanabiliriz. Bunlar,
          birinin Web Sitemizi ne zaman ziyaret ettiğini veya bunları içeren bir e-postayı ne
          zaman açtığını tanımamızı sağlayan benzersiz bir tanımlayıcı içeren küçük grafik
          dosyalarıdır. Bu, örneğin kullanıcıların bir web sitesindeki bir sayfadan diğerine
          trafik düzenlerini izlememize, çerezlerle iletişim kurmamıza veya bunları
          sunmamıza, web sitesine üçüncü taraf bir web sitesinde görüntülenen bir çevrimiçi
          reklamdan gelip gelmediğinizi anlamamıza, site performansını iyileştirmemize ve
          e-posta pazarlama kampanyalarının başarısını ölçmemize olanak tanır. Çoğu durumda,
          bu teknolojiler düzgün çalışmak için çerezlere bağımlıdır ve bu nedenle çerezleri
          reddetmek işlevlerini bozar.
        </p>

        <h2>Flash çerezler veya Yerel Paylaşılan Nesneler kullanıyor musunuz?</h2>
        <p>
          Web siteleri, diğer şeylerin yanı sıra hizmetlerimizi kullanımınız hakkında bilgi
          toplamak ve saklamak, dolandırıcılığı önlemek ve diğer site işlemleri için sözde
          &apos;Flash Çerezleri&apos; (Yerel Paylaşılan Nesneler veya &apos;LSO&apos;lar
          olarak da bilinir) de kullanabilir.
        </p>
        <p>
          Bilgisayarınızda Flash Çerezleri saklanmasını istemiyorsanız, Web Sitesi Depolama
          Ayarları Panelinde bulunan araçları kullanarak Flash Çerezleri depolanmasını
          engellemek üzere Flash oynatıcınızın ayarlarını değiştirebilirsiniz. Flash
          Çerezlerini ayrıca Global Depolama Ayarları Paneline giderek ve talimatları
          izleyerek de kontrol edebilirsiniz (talimatlar, örneğin mevcut Flash Çerezlerin
          (Macromedia sitesinde &apos;bilgi&apos; olarak anılır) nasıl silineceğini, Flash
          LSO&apos;ların izninizi almadan bilgisayarınıza nasıl yerleştirilmesini
          engelleyeceğinizi ve (Flash Player 8 ve sonrası için) o sırada bulunduğunuz
          sayfanın operatörü tarafından gönderilmeyen Flash Çerezleri nasıl
          engelleyeceğinizi açıklayan talimatları içerebilir).
        </p>
        <p>
          Flash Player&apos;ı Flash Çerezleri kabul etmeyi kısıtlayacak veya sınırlayacak
          şekilde ayarlamanın bazı Flash uygulamalarının işlevselliğini azaltabileceğini veya
          engelleyebileceğini, hatta hizmetlerimiz veya çevrimiçi içerikle bağlantılı olarak
          kullanılan Flash uygulamalarının işlevselliğini etkileyebileceğini lütfen unutmayın.
        </p>

        <h2>Hedefli reklam sunuyor musunuz?</h2>
        <p>
          Üçüncü taraflar, Web Sitemiz aracılığıyla reklam sunmak için bilgisayarınıza veya
          mobil cihazınıza çerezler yerleştirebilir. Bu şirketler, ilgilenebileceğiniz mal ve
          hizmetlerle ilgili alakalı reklamlar sunmak amacıyla bu ve diğer web sitelerine
          yaptığınız ziyaretler hakkındaki bilgileri kullanabilir. Ayrıca reklamların
          etkinliğini ölçmek için kullanılan teknolojileri de kullanabilirler. Bunu, sizin
          için potansiyel olarak ilgi çekici mal ve hizmetlerle ilgili alakalı reklamlar
          sunmak amacıyla bu ve diğer sitelere yaptığınız ziyaretler hakkında bilgi toplamak
          için çerezler veya web işaretçileri kullanarak gerçekleştirebilirler. Bu süreçte
          toplanan bilgiler, bunları sağlamayı seçmediğiniz sürece, ne bizim ne de onların
          adınızı, iletişim bilgilerinizi veya sizi doğrudan tanımlayan diğer ayrıntıları
          tanımlamamıza olanak tanımaz.
        </p>

        <h2>Bu Çerez Politikasını ne sıklıkla güncelleyeceksiniz?</h2>
        <p>
          Bu Çerez Politikasını, örneğin kullandığımız çerezlerdeki değişiklikleri ya da
          diğer operasyonel, yasal veya düzenleyici nedenleri yansıtmak için zaman zaman
          güncelleyebiliriz. Bu nedenle, çerezleri ve ilgili teknolojileri kullanımımız
          hakkında bilgi sahibi olmak için lütfen bu Çerez Politikasını düzenli olarak tekrar
          ziyaret edin.
        </p>
        <p>Bu Çerez Politikasının üst kısmındaki tarih, en son ne zaman güncellendiğini gösterir.</p>

        <h2>Daha fazla bilgiyi nereden alabilirim?</h2>
        <p>
          Çerezleri veya diğer teknolojileri kullanımımızla ilgili herhangi bir sorunuz
          varsa, lütfen bize <a href="mailto:info@safolio.com">info@safolio.com</a> adresinden
          e-posta gönderin veya posta yoluyla aşağıdaki adrese yazın:
        </p>
        <p>
          Safolio B.V.
          <br />
          2-A Abtstraat
          <br />
          Utrecht, Utrecht 3512 AB
          <br />
          Hollanda
        </p>
      </LegalLayout>
    );
  }

  return (
    <LegalLayout title={t("legal2")}>
      <p className="text-sm text-ink3">Last updated May 02, 2026</p>

      <p>
        This Cookie Policy explains how Safolio B.V. (the &apos;Company&apos;, &apos;we&apos;,
        &apos;us&apos; or &apos;our&apos;) uses cookies and similar technologies to recognise
        you when you visit our website at{" "}
        <a href="https://safolio.com">https://safolio.com</a> (&apos;Website&apos;). It explains
        what these technologies are and why we use them, as well as your rights to control our
        use of them.
      </p>
      <p>
        In some cases we may use cookies to collect personal information, or information that
        becomes personal information if we combine it with other information.
      </p>

      <h2>What are cookies?</h2>
      <p>
        Cookies are small data files that are placed on your computer or mobile device when you
        visit a website. Cookies are widely used by website owners in order to make their
        websites work, or to work more efficiently, as well as to provide reporting information.
      </p>
      <p>
        Cookies set by the website owner (in this case, Safolio B.V.) are called
        &apos;first-party cookies&apos;. Cookies set by parties other than the website owner are
        called &apos;third-party cookies&apos;. Third-party cookies enable third-party features
        or functionality to be provided on or through the website (e.g. advertising, interactive
        content and analytics). The parties that set these third-party cookies can recognise
        your computer both when it visits the website in question and also when it visits
        certain other websites.
      </p>

      <h2>Why do we use cookies?</h2>
      <p>
        We use first- and third-party cookies for several reasons. Some cookies are required for
        technical reasons in order for our Website to operate, and we refer to these as
        &apos;essential&apos; or &apos;strictly necessary&apos; cookies. Other cookies also
        enable us to track and target the interests of our users to enhance the experience on
        our Online Properties. Third parties serve cookies through our Website for advertising,
        analytics and other purposes. This is described in more detail below.
      </p>

      <h2>How can I control cookies?</h2>
      <p>
        You have the right to decide whether to accept or reject cookies. You can exercise your
        cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie
        Consent Manager allows you to select which categories of cookies you accept or reject.
        Essential cookies cannot be rejected as they are strictly necessary to provide you with
        services.
      </p>
      <p>
        The Cookie Consent Manager can be found in the notification banner and on our Website.
        If you choose to reject cookies, you may still use our Website though your access to
        some functionality and areas of our Website may be restricted. You may also set or amend
        your web browser controls to accept or refuse cookies.
      </p>
      <p>
        The specific types of first- and third-party cookies served through our Website and the
        purposes they perform are described in the tables below (please note that the specific
        cookies served may vary depending on the specific Online Properties you visit):
      </p>

      <h3>Essential website cookies</h3>
      <p>
        These cookies are strictly necessary to provide you with services available through our
        Website and to use some of its features, such as access to secure areas.
      </p>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>TERMLY_API_CACHE</td>
          </tr>
          <tr>
            <td>Purpose</td>
            <td>Used to store the visitor&apos;s consent result in order to improve the performance of the consent banner.</td>
          </tr>
          <tr>
            <td>Provider</td>
            <td>safolio.com</td>
          </tr>
          <tr>
            <td>Service</td>
            <td>Termly</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>html_local_storage</td>
          </tr>
          <tr>
            <td>Expires in</td>
            <td>1 year</td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>csrf_token</td>
          </tr>
          <tr>
            <td>Purpose</td>
            <td>Provides protection against hacking and malicious actors.</td>
          </tr>
          <tr>
            <td>Provider</td>
            <td>safolio.com</td>
          </tr>
          <tr>
            <td>Service</td>
            <td>Django</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>http_cookie</td>
          </tr>
          <tr>
            <td>Expires in</td>
            <td>29 days</td>
          </tr>
        </tbody>
      </table>

      <h3>Performance and functionality cookies</h3>
      <p>
        These cookies are used to enhance the performance and functionality of our Website but
        are non-essential to its use. However, without these cookies, certain functionality
        (like videos) may become unavailable.
      </p>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>cf.turnstile.u</td>
          </tr>
          <tr>
            <td>Provider</td>
            <td>challenges.cloudflare.com</td>
          </tr>
          <tr>
            <td>Service</td>
            <td>
              <a href="https://www.cloudflare.com/security-policy/">Cloudflare</a>
            </td>
          </tr>
          <tr>
            <td>Type</td>
            <td>html_local_storage</td>
          </tr>
          <tr>
            <td>Expires in</td>
            <td>Persistent</td>
          </tr>
        </tbody>
      </table>

      <h3>Unclassified cookies</h3>
      <p>
        These are cookies that have not yet been categorised. We are in the process of
        classifying these cookies with the help of their providers.
      </p>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>wp-wpml_current_language</td>
          </tr>
          <tr>
            <td>Provider</td>
            <td>safolio.com</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>http_cookie</td>
          </tr>
          <tr>
            <td>Expires in</td>
            <td>Session</td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>wglang</td>
          </tr>
          <tr>
            <td>Provider</td>
            <td>app.termly.io</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>html_local_storage</td>
          </tr>
          <tr>
            <td>Expires in</td>
            <td>Persistent</td>
          </tr>
        </tbody>
      </table>

      <h2>How can I control cookies on my browser?</h2>
      <p>
        As the means by which you can refuse cookies through your web browser controls vary
        from browser to browser, you should visit your browser&apos;s help menu for more
        information. The following is information about how to manage cookies on the most
        popular browsers:
      </p>
      <ul>
        <li>Chrome</li>
        <li>Internet Explorer</li>
        <li>Firefox</li>
        <li>Safari</li>
        <li>Edge</li>
        <li>Opera</li>
      </ul>
      <p>
        In addition, most advertising networks offer you a way to opt out of targeted
        advertising. If you would like to find out more information, please visit:
      </p>
      <ul>
        <li>Digital Advertising Alliance</li>
        <li>Digital Advertising Alliance of Canada</li>
        <li>European Interactive Digital Advertising Alliance</li>
      </ul>

      <h2>What about other tracking technologies, like web beacons?</h2>
      <p>
        Cookies are not the only way to recognise or track visitors to a website. We may use
        other, similar technologies from time to time, like web beacons (sometimes called
        &apos;tracking pixels&apos; or &apos;clear gifs&apos;). These are tiny graphics files
        that contain a unique identifier that enables us to recognise when someone has visited
        our Website or opened an email including them. This allows us, for example, to monitor
        the traffic patterns of users from one page within a website to another, to deliver or
        communicate with cookies, to understand whether you have come to the website from an
        online advertisement displayed on a third-party website, to improve site performance,
        and to measure the success of email marketing campaigns. In many instances, these
        technologies are reliant on cookies to function properly, and so declining cookies will
        impair their functioning.
      </p>

      <h2>Do you use Flash cookies or Local Shared Objects?</h2>
      <p>
        Websites may also use so-called &apos;Flash Cookies&apos; (also known as Local Shared
        Objects or &apos;LSOs&apos;) to, among other things, collect and store information
        about your use of our services, fraud prevention and for other site operations.
      </p>
      <p>
        If you do not want Flash Cookies stored on your computer, you can adjust the settings of
        your Flash player to block Flash Cookies storage using the tools contained in the
        Website Storage Settings Panel. You can also control Flash Cookies by going to the
        Global Storage Settings Panel and following the instructions (which may include
        instructions that explain, for example, how to delete existing Flash Cookies (referred
        to as &apos;information&apos; on the Macromedia site), how to prevent Flash LSOs from
        being placed on your computer without your being asked, and (for Flash Player 8 and
        later) how to block Flash Cookies that are not being delivered by the operator of the
        page you are on at the time).
      </p>
      <p>
        Please note that setting the Flash Player to restrict or limit acceptance of Flash
        Cookies may reduce or impede the functionality of some Flash applications, including,
        potentially, Flash applications used in connection with our services or online content.
      </p>

      <h2>Do you serve targeted advertising?</h2>
      <p>
        Third parties may serve cookies on your computer or mobile device to serve advertising
        through our Website. These companies may use information about your visits to this and
        other websites in order to provide relevant advertisements about goods and services
        that you may be interested in. They may also employ technology that is used to measure
        the effectiveness of advertisements. They can accomplish this by using cookies or web
        beacons to collect information about your visits to this and other sites in order to
        provide relevant advertisements about goods and services of potential interest to you.
        The information collected through this process does not enable us or them to identify
        your name, contact details or other details that directly identify you unless you
        choose to provide these.
      </p>

      <h2>How often will you update this Cookie Policy?</h2>
      <p>
        We may update this Cookie Policy from time to time in order to reflect, for example,
        changes to the cookies we use or for other operational, legal or regulatory reasons.
        Please therefore revisit this Cookie Policy regularly to stay informed about our use of
        cookies and related technologies.
      </p>
      <p>The date at the top of this Cookie Policy indicates when it was last updated.</p>

      <h2>Where can I get further information?</h2>
      <p>
        If you have any questions about our use of cookies or other technologies, please email
        us at <a href="mailto:info@safolio.com">info@safolio.com</a> or by post to:
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
    </LegalLayout>
  );
}
