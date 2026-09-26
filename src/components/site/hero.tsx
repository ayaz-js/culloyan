import { ArrowDownIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { upcoming } from '@/data/content'
import { WhatsAppButton } from './whatsapp-button'
import { Container, Eyebrow } from './primitives'

export function Hero() {
  return (
    <section id="top" className="pt-16 pb-20 md:pt-24 md:pb-28">
      <Container className="grid items-end gap-12 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <Eyebrow>Pavel Culloyan · Осень 2026</Eyebrow>
          <h1 className="mt-6 font-serif text-[clamp(4.5rem,15vw,11rem)] leading-[0.85] tracking-tight">
            ТОЧКА
          </h1>
          <p className="mt-8 font-serif text-3xl leading-[1.15] md:text-[2.75rem]">
            Сначала увидеть.
            <br />
            Потом разобрать.
            <br />
            <em className="text-bronze">Затем прожить иначе.</em>
          </p>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Не марафон и не инфопродукт. Последовательная система форматов — от первой встречи до
            персонального сопровождения в течение года.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <WhatsAppButton size="lg" className="h-12 rounded-full px-7">
              Выбрать формат
            </WhatsAppButton>
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-full bg-transparent px-7"
              asChild
            >
              <a href="#formats">
                Посмотреть путь
                <ArrowDownIcon />
              </a>
            </Button>
          </div>
        </div>

        <aside className="rounded-[1.5rem] border border-border bg-card p-6 md:p-7">
          <Eyebrow>Ближайший цикл</Eyebrow>
          <ul className="mt-5">
            {upcoming.map((item) => (
              <li key={item.date} className="hairline py-4 last:pb-0">
                <p className="font-serif text-2xl">{item.date}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
              </li>
            ))}
          </ul>
        </aside>
      </Container>
    </section>
  )
}
