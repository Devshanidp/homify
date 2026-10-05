import { Check, Home, ArrowUpRight } from 'lucide-react'
import { businessDisplayName, getWhatsAppUrl, interiorSlides } from '../../data/content'
import MotionWrapper from '../ui/MotionWrapper'
import SectionHeader from '../ui/SectionHeader'
import ImageCarousel from '../ui/ImageCarousel'
import Button from '../ui/Button'

const homesSegment = {
  title: 'HOMEFY HOMES',
  subtitle: 'Furniture, Interiors & Décor',
  features: [
    'Modular kitchens & wardrobes',
    'Custom furniture manufacturing',
    'Full turnkey home interiors',
    'Space planning and 3D design',
  ],
}

export default function InteriorsSection() {
  const interiorsWhatsApp = getWhatsAppUrl(
    `Hi ${businessDisplayName}, I'd like to know more about home interiors and furniture.`,
  )

  return (
    <section id="interiors" className="section-padding bg-gradient-to-b from-amber-50/60 via-white to-warm-gray">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Interior Solutions"
          title="Beautiful spaces, thoughtfully crafted"
          description="From modular kitchens to full turnkey interiors — Team HOMEFY brings design-led craftsmanship and precise execution to every home."
        />

        <MotionWrapper delay={0.1}>
          <ImageCarousel slides={interiorSlides} className="mb-10 shadow-2xl shadow-amber-900/10 md:mb-14" />
        </MotionWrapper>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <MotionWrapper delay={0.15}>
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange">
                <Home size={24} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-orange">
                  {homesSegment.subtitle}
                </p>
                <h3 className="text-2xl font-bold text-charcoal">{homesSegment.title}</h3>
              </div>
            </div>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Transform your home with functional aesthetics — bespoke furniture, modular
              solutions, and end-to-end interior execution tailored to your lifestyle.
            </p>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {homesSegment.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5"
                >
                  <Check className="mt-0.5 shrink-0 text-brand-orange" size={18} strokeWidth={2.5} />
                  <span className="text-sm font-medium text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              href={interiorsWhatsApp}
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6"
            >
              Get Interior Consultation
              <ArrowUpRight size={16} />
            </Button>
          </MotionWrapper>
        </div>
      </div>
    </section>
  )
}
