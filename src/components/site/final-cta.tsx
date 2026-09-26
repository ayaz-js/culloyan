import { whatsappLink } from '@/lib/whatsapp'
import { WhatsAppButton } from './whatsapp-button'
import { Container, Eyebrow, Section } from './primitives'

export function FinalCta() {
  return (
    <Section className="hairline text-center">
      <Container>
        <Eyebrow>Начать</Eyebrow>
        <h2 className="mx-auto mt-5 max-w-4xl font-serif text-5xl leading-[1.02] md:text-7xl">
          Не стать другим человеком.
          <br />
          <em className="text-bronze">Стать яснее самому себе.</em>
        </h2>
        <p className="mt-8 text-lg text-muted-foreground">
          Оставьте заявку. Команда поможет выбрать формат.
        </p>
        <WhatsAppButton size="lg" className="mt-8 h-12 rounded-full px-8">
          Оставить заявку
        </WhatsAppButton>
      </Container>
    </Section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10 text-sm text-muted-foreground">
      <Container className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <p>
          <span className="font-serif text-xl text-foreground">ТОЧКА</span>
          <span className="ml-3">Pavel Culloyan · 2026</span>
        </p>
        <nav className="flex gap-6" aria-label="Контакты">
          {/* TODO: подставить реальные ссылки на Telegram и Instagram */}
          <a href="#" className="hover:text-foreground">
            Telegram
          </a>
          <a href="#" className="hover:text-foreground">
            Instagram
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            WhatsApp
          </a>
        </nav>
      </Container>
    </footer>
  )
}
