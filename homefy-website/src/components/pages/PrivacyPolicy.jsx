import {
  companyAddress,
  companyLegalName,
  contactPhones,
  privacyPolicyUpdated,
  shopUrl,
  websiteUrl,
} from '../../data/content'

const sections = [
  {
    id: 'who-we-are',
    title: 'Who we are',
    body: (
      <>
        <p>
          {companyLegalName} (&ldquo;Team HOMEFY&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) provides home
          interiors, custom furniture, solar and power systems, and related home services from our
          office in Chelari, Malappuram, Kerala. This policy explains how we handle personal
          information when you use this website, call us, message us on WhatsApp, or ask us to
          visit your site.
        </p>
      </>
    ),
  },
  {
    id: 'scope',
    title: 'What this policy covers',
    body: (
      <>
        <p>
          It applies to {websiteUrl.replace('https://', '')} and to enquiries you send us about
          HOMEFY Homes, HOMEFY Power Projects, and consultations booked from this site.
        </p>
        <p>
          Orders placed on{' '}
          <a href={shopUrl} target="_blank" rel="noopener noreferrer">
            shophomefy.com
          </a>{' '}
          are completed on that store. Payment details, delivery addresses, and order updates you
          enter there are used to fulfil that purchase. Read the information presented on
          ShopHomefy at checkout before you place an order.
        </p>
      </>
    ),
  },
  {
    id: 'you-share',
    title: 'Information you share with us',
    body: (
      <>
        <p>When you contact us, you choose what to share. That can include:</p>
        <ul>
          <li>Your name and phone number</li>
          <li>The message you send on WhatsApp or say on a call</li>
          <li>
            Project details such as a property address, room sizes, design preferences, photos, or
            floor information for interiors and furniture
          </li>
          <li>
            Site details for solar and power work, such as roof type, electricity use, and where
            an inverter, battery, CCTV system, or water purifier should go
          </li>
          <li>A preferred time for a showroom visit, site survey, or installation</li>
        </ul>
        <p>
          We use those details to reply, prepare a clear estimate, design the work, schedule a
          visit, carry out installation, and provide support after handover.
        </p>
      </>
    ),
  },
  {
    id: 'website',
    title: 'Information collected when you browse this website',
    body: (
      <>
        <p>
          This website is a brochure for our services. It does not ask you to create an account,
          and it does not include a form that stores your details on our servers.
        </p>
        <p>
          The provider that hosts the site may keep standard connection logs — such as IP address,
          browser type, date and time, and the page requested — so the site can load and so abuse
          can be blocked.
        </p>
        <p>
          The map on our location section is an embedded Google Map. Fonts on the page are loaded
          from Google Fonts. When those resources load, Google may receive technical data such as
          your IP address under{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            Google&apos;s privacy policy
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: 'whatsapp',
    title: 'Phone and WhatsApp',
    body: (
      <>
        <p>
          Call buttons dial our published numbers. The WhatsApp button and consultation links open
          a chat with Team HOMEFY on WhatsApp. Messages you send are delivered through WhatsApp and
          are handled under{' '}
          <a
            href="https://www.whatsapp.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp&apos;s privacy policy
          </a>
          . Our team reads those chats to answer you and to continue the project you asked about.
        </p>
        <p>
          If we install a security system at your property, recordings and device data stay on the
          equipment you control. This policy covers the contact and site details we use to arrange
          that work.
        </p>
      </>
    ),
  },
  {
    id: 'use',
    title: 'How we use your information',
    body: (
      <>
        <ul>
          <li>To answer enquiries and provide free consultations</li>
          <li>To prepare designs, 3D views, and written proposals for interiors and furniture</li>
          <li>To survey, size, install, and support solar, inverter, and related power systems</li>
          <li>To schedule showroom visits, manufacturing, delivery, and handover</li>
          <li>To keep you updated about a project you have asked us to do</li>
          <li>To meet accounting, tax, and safety duties that apply to our work</li>
        </ul>
      </>
    ),
  },
  {
    id: 'sharing',
    title: 'When we share information',
    body: (
      <>
        <p>We do not sell your personal information.</p>
        <p>We share it only as needed to do the work you asked for:</p>
        <ul>
          <li>With our designers, technicians, and installers who are assigned to your project</li>
          <li>With workshops and delivery partners who make or bring items to your address</li>
          <li>With WhatsApp, when you message us through the links on this site</li>
          <li>With Google, when the map or fonts load in your browser</li>
          <li>With a hosting provider, so this website can be served</li>
          <li>With authorities, when the law requires us to disclose information</li>
        </ul>
      </>
    ),
  },
  {
    id: 'cookies',
    title: 'Cookies',
    body: (
      <>
        <p>
          We do not set our own advertising or analytics cookies on this website. Your browser may
          store what it needs to display the page. Google Maps may use cookies or similar
          technologies when the map loads. You can control cookies in your browser settings.
          Blocking third-party cookies can stop the embedded map from loading.
        </p>
      </>
    ),
  },
  {
    id: 'retention',
    title: 'How long we keep information',
    body: (
      <>
        <p>
          We keep enquiry and project records for as long as we need them to finish the work,
          provide after-service support, and meet legal and accounting requirements. When a record
          is no longer needed, we delete it or remove the details that identify you.
        </p>
      </>
    ),
  },
  {
    id: 'security',
    title: 'How we protect information',
    body: (
      <>
        <p>
          Access to enquiry and project details is limited to people who need them for your work.
          Phone and WhatsApp are the channels we publish for contact. No method of sending
          information over the internet is completely secure, so please avoid sharing passwords,
          payment card numbers, or identity documents in a website chat.
        </p>
      </>
    ),
  },
  {
    id: 'rights',
    title: 'Your choices and rights',
    body: (
      <>
        <p>
          You may ask what personal information we hold about you, ask us to correct it, or ask us
          to delete it when we no longer need it for your project or for a legal duty. Where we
          rely on your consent — for example, when you send project photos or a site address — you
          may withdraw that consent by contacting us. Withdrawal does not undo work already done
          with the details you shared.
        </p>
        <p>
          If you are in India, you can also use the rights available under the Digital Personal
          Data Protection Act, 2023. Call any of the numbers below, or visit our office, and ask
          for a privacy request. We will respond within a reasonable time.
        </p>
      </>
    ),
  },
  {
    id: 'children',
    title: 'Children',
    body: (
      <>
        <p>
          Our services are arranged with adults. We do not knowingly collect personal information
          from children. If you believe a child has sent us personal information, contact us and
          we will delete it.
        </p>
      </>
    ),
  },
  {
    id: 'updates',
    title: 'Updates to this policy',
    body: (
      <>
        <p>
          We will change the &ldquo;Last updated&rdquo; date at the top of this page when the policy
          changes. Please review this page when you return to the site. If a change affects how we
          use information you already gave us, we will describe that change clearly here.
        </p>
      </>
    ),
  },
]

export default function PrivacyPolicy() {
  return (
    <main id="privacy" className="bg-warm-gray pt-28">
      <article className="section-padding container-wide !pt-10">
        <div className="mx-auto max-w-3xl">
          <a
            href="#home"
            className="mb-8 inline-flex text-sm font-medium text-brand-orange transition-colors hover:text-brand-orange-dark"
          >
            ← Back to website
          </a>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Legal
          </p>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-charcoal md:text-4xl lg:text-[2.75rem]">
            Privacy Policy
          </h1>
          <p className="mb-10 text-sm text-slate-500">Last updated: {privacyPolicyUpdated}</p>

          <div className="space-y-10 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-10">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="privacy-copy">
                <h2 className="mb-3 text-xl font-bold tracking-tight text-charcoal">
                  {section.title}
                </h2>
                <div className="space-y-3 text-sm leading-relaxed text-slate-600 [&_a]:font-medium [&_a]:text-brand-orange [&_a]:underline-offset-2 hover:[&_a]:underline [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
                  {section.body}
                </div>
              </section>
            ))}

            <section id="contact-privacy">
              <h2 className="mb-3 text-xl font-bold tracking-tight text-charcoal">
                How to contact us
              </h2>
              <div className="space-y-3 text-sm leading-relaxed text-slate-600">
                <p>
                  For a privacy request, a correction, or a question about this policy, contact{' '}
                  {companyLegalName}:
                </p>
                <p>{companyAddress}</p>
                <ul className="list-disc space-y-2 pl-5">
                  {contactPhones.map((phone) => (
                    <li key={phone}>
                      <a href={`tel:+91${phone}`} className="font-medium text-brand-orange">
                        +91 {phone}
                      </a>
                    </li>
                  ))}
                </ul>
                <p>
                  Website:{' '}
                  <a
                    href={websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-brand-orange"
                  >
                    homefy.in
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </article>
    </main>
  )
}
