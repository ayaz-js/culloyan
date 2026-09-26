import { ArrowUpRightIcon } from 'lucide-react'
import { formats } from '@/data/content'
import { Container, Eyebrow, Pill, Section } from './primitives'

export function Formats() {
  return (
    <Section id="formats" className="hairline">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>Путь</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight md:text-6xl">
              Пять форматов. Не обязательная лестница.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Можно начать с любого. Каждый следующий — глубже и дольше, но ни один не требует пройти
            предыдущий.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {formats.map((format) => (
            <a
              key={format.id}
              href={format.href}
              className="group flex flex-col sm:min-h-72 rounded-3xl border border-border bg-card p-6 transition-colors hover:border-foreground/30 hover:bg-background"
            >
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="eyebrow">
                  {format.index} · {format.label}
                </span>
                <ArrowUpRightIcon className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-bronze" />
              </div>
              <p className="mt-8 font-serif text-4xl">
                {format.price}
                {format.priceNote && (
                  <span className="ml-1 text-lg text-muted-foreground">{format.priceNote}</span>
                )}
              </p>
              <p className="mt-3 leading-snug">{format.summary}</p>
              <Pill className="mt-6 self-start sm:mt-auto">{format.when}</Pill>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  )
}
