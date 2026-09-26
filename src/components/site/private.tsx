import { privateTerms } from '@/data/content'
import { WhatsAppButton } from './whatsapp-button'
import { Container, Eyebrow } from './primitives'

const path = ['Анкета', 'Знакомство', 'Взаимное решение', 'Договор', 'Старт']

export function Private() {
  return (
    <section id="private" className="py-6 md:py-10">
      <Container>
        <div className="grid gap-12 rounded-4xl bg-graphite p-8 text-graphite-foreground md:p-14 lg:grid-cols-[1fr_0.85fr]">
          <div className="flex flex-col">
            <Eyebrow className="text-graphite-muted">Pavel Private</Eyebrow>
            <h2 className="mt-5 font-serif text-5xl leading-[0.98] md:text-7xl">
              12 месяцев.
              <br />
              <em className="text-bronze">Персонально.</em>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-[#bcb7ae]">
              Не курс и не пакет созвонов. Долгосрочное сопровождение реальной жизни человека.
            </p>
            <ol className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-2 pt-10 text-sm text-graphite-muted">
              {path.map((step, index) => (
                <li key={step} className="flex items-center gap-3">
                  {index > 0 && <span aria-hidden="true">→</span>}
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-3xl border border-[#41413d] bg-[#1d1d1d] p-7 md:p-8">
            <p className="font-serif text-5xl">
              $18,000 <span className="text-xl text-graphite-muted">/ год</span>
            </p>
            <p className="mt-2 text-graphite-muted">или $1,800 × 12 месяцев</p>
            <ul className="mt-6">
              {privateTerms.map((term) => (
                <li key={term} className="border-t border-[#41413d] py-4">
                  {term}
                </li>
              ))}
            </ul>
            <WhatsAppButton
              size="lg"
              className="mt-4 h-12 w-full rounded-full bg-graphite-foreground text-graphite hover:bg-graphite-foreground/90"
              format="private"
            >
              Подать заявку
            </WhatsAppButton>
          </div>
        </div>
      </Container>
    </section>
  )
}
