import { retreatPractices } from '@/data/content'
import { WhatsAppButton } from './whatsapp-button'
import { Container, Eyebrow, PhotoSlot, Pill, Section } from './primitives'

export function Retreat() {
  return (
    <Section id="retreat" className="hairline">
      <Container>
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col rounded-4xl border border-border bg-card p-8 md:p-12">
            <Eyebrow>16–20 ноября · Alanya</Eyebrow>
            <h2 className="mt-4 font-serif text-6xl leading-none md:text-8xl">Retreat</h2>
            <p className="mt-5 font-serif text-4xl">$3,000</p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Не ещё один семинар. Несколько дней вне привычного ритма: работа с Павлом, тело,
              дыхание, движение, тишина, море, рефлексия и среда, которая помогает замедлиться.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {retreatPractices.map((practice) => (
                <Pill key={practice}>{practice}</Pill>
              ))}
            </div>
            <WhatsAppButton
              place="retreat"
              size="lg"
              className="mt-10 h-12 self-start rounded-full px-7"
              format="retreat"
            >
              Узнать условия
            </WhatsAppButton>
          </div>
          <div className="grid grid-rows-[1.4fr_1fr] gap-4">
            <PhotoSlot label="Море · Алания · утро" className="min-h-72" />
            <div className="grid grid-cols-2 gap-4">
              <PhotoSlot label="Пространство" className="min-h-44" />
              <PhotoSlot label="Руки · еда" className="min-h-44" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
