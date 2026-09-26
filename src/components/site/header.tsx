import { useState } from 'react'
import { MenuIcon, XIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { nav } from '@/data/content'
import { WhatsAppButton } from './whatsapp-button'
import { Container } from './primitives'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
        <a href="#top" className="flex items-baseline gap-3" onClick={() => setOpen(false)}>
          <span className="font-serif text-2xl leading-none tracking-wide">ТОЧКА</span>
          <span className="eyebrow hidden text-muted-foreground sm:inline">Pavel Culloyan</span>
        </a>

        <nav className="hidden items-center gap-7 text-sm lg:flex" aria-label="Основная навигация">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <WhatsAppButton className="hidden rounded-full px-5 sm:inline-flex">
            Оставить заявку
          </WhatsAppButton>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full lg:hidden"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={open}
            onClick={() => setOpen((isOpen) => !isOpen)}
          >
            {open ? <XIcon /> : <MenuIcon />}
          </Button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-border lg:hidden">
          <Container className="flex flex-col py-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="hairline py-3.5 font-serif text-2xl first:border-t-0"
              >
                {item.label}
              </a>
            ))}
            <WhatsAppButton
              className="mt-3 rounded-full sm:hidden"
              size="lg"
              onClick={() => setOpen(false)}
            >
              Оставить заявку
            </WhatsAppButton>
          </Container>
        </div>
      )}
    </header>
  )
}
