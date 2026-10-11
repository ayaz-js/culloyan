import { retreatPractices } from '@/data/content'
import { WhatsAppButton } from './whatsapp-button'
import { Container, Eyebrow, PhotoSlot, Pill, Section } from './primitives'

export function Retreat() {
  return (
    <Section id="retreat" className="hairline">
      <Container>
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col rounded-4xl border border-border bg-card p-8 md:p-12">
            <Eyebrow>28 ноября · Alanya</Eyebrow>
            <h2 className="mt-4 font-serif text-5xl leading-none md:text-7xl">
              Авторская методика
            </h2>
            <p className="mt-4 font-serif text-2xl text-muted-foreground md:text-3xl">
              Перезапуск к новой программе
            </p>
            <p className="mt-5 font-serif text-4xl">$2,500</p>
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
            <PhotoSlot className="min-h-72">
              <img
                src="/images/retreat-sea.jpg"
                alt="Побережье Алании и пляж Клеопатры"
                loading="lazy"
                className="absolute object-cover w-full h-full"
              />
            </PhotoSlot>
            <div className="grid grid-cols-2 gap-4">
              <PhotoSlot className="min-h-44">
                <img
                  src="/images/retreat-space.jpg"
                  alt="Медитация на берегу моря"
                  loading="lazy"
                  className="absolute object-cover w-full h-full"
                />
              </PhotoSlot>
              <PhotoSlot className="min-h-44">
                <img
                  src="/images/retreat-food.jpg"
                  alt="Завтрак с фруктами на общем столе"
                  loading="lazy"
                  className="absolute object-cover w-full h-full"
                />
              </PhotoSlot>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
