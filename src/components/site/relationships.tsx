import { relationshipDays } from '@/data/content'
import { WhatsAppButton } from './whatsapp-button'
import { Container, Eyebrow, Pill } from './primitives'

export function Relationships() {
  return (
    <section id="relationships" className="py-6 md:py-10">
      <Container>
        <div className="grid gap-12 rounded-4xl bg-graphite p-8 text-graphite-foreground md:p-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="flex flex-col">
            <Eyebrow className="text-graphite-muted">Основной продукт · 28.10 – 01.11</Eyebrow>
            <h2 className="mt-5 font-serif text-5xl leading-[0.95] md:text-6xl">
              ТОЧКА:
              <br />
              Отношения
            </h2>
            <p className="mt-6 font-serif text-4xl text-bronze">$1,500</p>
            <p className="mt-6 max-w-sm leading-relaxed text-[#bcb7ae]">
              Пять дней, чтобы увидеть собственные сценарии отношений и собрать личную карту того,
              что вы выбираете теперь.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Pill className="border-graphite-border">8–12 человек</Pill>
              <Pill className="border-graphite-border">Закрытая группа</Pill>
            </div>
            <WhatsAppButton
              size="lg"
              className="mt-10 h-12 self-start rounded-full bg-graphite-foreground px-7 text-graphite hover:bg-graphite-foreground/90"
              format="relationships"
            >
              Забронировать место
            </WhatsAppButton>
          </div>

          <ol>
            {relationshipDays.map((programDay) => (
              <li
                key={programDay.day}
                className="grid grid-cols-[3.75rem_1fr] gap-3 border-t border-graphite-border py-6 first:pt-0 md:grid-cols-[6rem_1fr]"
              >
                <span className="eyebrow pt-2 text-[#918c83]">{programDay.day}</span>
                <div>
                  <p
                    className={
                      programDay.note
                        ? 'font-serif text-2xl italic text-graphite-muted md:text-3xl'
                        : 'font-serif text-2xl md:text-3xl'
                    }
                  >
                    {programDay.title}
                  </p>
                  {programDay.note && (
                    <p className="mt-1 text-sm text-[#918c83]">{programDay.note}</p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
