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
