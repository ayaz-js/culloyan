import { WhatsAppButton } from './whatsapp-button'
import { Container, Eyebrow, Pill, Section } from './primitives'

const steps = ['Анкета до встречи', 'Разбор конкретной ситуации', 'Точка А и ближайшие действия']

export function Personal() {
  return (
    <Section id="personal">
      <Container className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Eyebrow>Personal consultation</Eyebrow>
          <h2 className="mt-4 font-serif text-5xl leading-[1.02] md:text-6xl">
            Один разговор.
            <br />
            Один запрос.
          </h2>
        </div>
        <div>
          <p className="font-serif text-5xl">$500</p>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
            90 минут один на один с Павлом. Без программы и без группы — только ваша ситуация.
          </p>
          <ol className="mt-8 max-w-lg">
            {steps.map((step, index) => (
              <li key={step} className="hairline flex gap-5 py-4">
                <span className="font-serif text-xl text-bronze">0{index + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <WhatsAppButton
              place="personal"
              size="lg"
              className="h-12 rounded-full px-7"
              format="personal"
            >
              Записаться
            </WhatsAppButton>
            <Pill>По предварительной записи</Pill>
          </div>
        </div>
      </Container>
    </Section>
  )
}
