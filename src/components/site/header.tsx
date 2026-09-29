import { useRef, useState } from 'react'
import { MenuIcon, XIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { nav } from '@/data/content'
import { WhatsAppButton } from './whatsapp-button'
import { Container } from './primitives'

export function Header() {
  const [open, setOpen] = useState(false)
  // Якорь, к которому прокрутить после закрытия меню.
  // Пока drawer открыт, vaul блокирует скролл страницы — поэтому скроллим уже после анимации закрытия.
  const pendingHash = useRef<string | null>(null)

  const goTo = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    pendingHash.current = href
    setOpen(false)
  }

  const handleAnimationEnd = (isOpen: boolean) => {
    if (isOpen || !pendingHash.current) return
    const href = pendingHash.current
    pendingHash.current = null
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    history.replaceState(null, '', href)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
        <a href="#top" className="flex items-baseline gap-3">
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
          <WhatsAppButton place="header" className="hidden rounded-full px-5 sm:inline-flex">
            Оставить заявку
          </WhatsAppButton>

          <Drawer
            direction="right"
            open={open}
            onOpenChange={setOpen}
            onAnimationEnd={handleAnimationEnd}
          >
            <DrawerTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full lg:hidden"
                aria-label="Открыть меню"
              >
                <MenuIcon />
              </Button>
            </DrawerTrigger>

            <DrawerContent className="lg:hidden">
              <DrawerHeader className="flex-row items-center justify-between border-b border-border px-6 py-4">
                <div className="flex items-baseline gap-3">
                  <DrawerTitle className="font-serif text-2xl leading-none font-normal tracking-wide">
                    ТОЧКА
                  </DrawerTitle>
                  <DrawerDescription className="eyebrow">Pavel Culloyan</DrawerDescription>
                </div>
                <DrawerClose asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="-mr-2 rounded-full"
                    aria-label="Закрыть меню"
                  >
                    <XIcon />
                  </Button>
                </DrawerClose>
              </DrawerHeader>

              <nav
                className="flex flex-1 flex-col overflow-y-auto px-6 py-2"
                aria-label="Мобильная навигация"
              >
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={goTo(item.href)}
                    className="hairline py-4 font-serif text-2xl transition-colors first:border-t-0 hover:text-muted-foreground"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <DrawerFooter className="border-t border-border px-6 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <WhatsAppButton
                  place="mobile-menu"
                  className="rounded-full"
                  size="lg"
                  onClick={() => setOpen(false)}
                >
                  Оставить заявку
                </WhatsAppButton>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </Container>
    </header>
  )
}
