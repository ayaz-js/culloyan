import { useState, type FormEvent } from 'react'
import { CheckIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { formats, type FormatId } from '@/data/content'
import { cn } from '@/lib/utils'

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
  format: FormatId | null
  onFormatChange: (format: FormatId | null) => void
}

export function ApplyDialog({ open, onOpenChange, format, onFormatChange }: Props) {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget))
    // TODO: отправить заявку (CRM, Telegram-бот или форма) — бэкенда пока нет
    console.info('Заявка', { ...data, format })
    setSent(true)
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        onOpenChange(isOpen)
        if (!isOpen) setTimeout(() => setSent(false), 200)
      }}
    >
      <DialogContent className="max-h-[92svh] overflow-y-auto rounded-3xl border-border bg-card p-7 sm:max-w-lg md:p-9">
        {sent ? (
          <div className="py-6 text-center">
            <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-graphite text-graphite-foreground">
              <CheckIcon />
            </span>
            <DialogTitle className="mt-6 font-serif text-4xl font-medium">Спасибо</DialogTitle>
            <DialogDescription className="mt-3 text-base">
              Заявка получена. Команда свяжется с вами и поможет выбрать формат.
            </DialogDescription>
            <Button className="mt-8 rounded-full px-7" onClick={() => onOpenChange(false)}>
              Закрыть
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader className="text-left">
              <p className="eyebrow text-muted-foreground">Заявка</p>
              <DialogTitle className="font-serif text-4xl font-medium">Оставить заявку</DialogTitle>
              <DialogDescription className="text-base">
                Если сомневаетесь в формате — просто оставьте контакт, поможем выбрать.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="mt-4 grid gap-5">
              <fieldset className="grid gap-2.5">
                <legend className="mb-2.5 text-sm font-medium">Формат</legend>
                <div className="flex flex-wrap gap-2">
                  {formats.map((formatOption) => {
                    const active = format === formatOption.id
                    return (
                      <button
                        key={formatOption.id}
                        type="button"
                        aria-pressed={active}
                        onClick={() => onFormatChange(active ? null : formatOption.id)}
                        className={cn(
                          'rounded-full border px-3.5 py-1.5 text-sm transition-colors',
                          active
                            ? 'border-foreground bg-foreground text-background'
                            : 'border-border hover:border-foreground/40',
                        )}
                      >
                        {formatOption.title}
                      </button>
                    )
                  })}
                </div>
              </fieldset>

              <div className="grid gap-2">
                <Label htmlFor="apply-name">Имя</Label>
                <Input
                  id="apply-name"
                  name="name"
                  required
                  autoComplete="name"
                  className="h-11 rounded-xl"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="apply-contact">Телефон или Telegram</Label>
                <Input
                  id="apply-contact"
                  name="contact"
                  required
                  placeholder="+7 … или @username"
                  className="h-11 rounded-xl"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="apply-message">
                  Запрос <span className="font-normal text-muted-foreground">— по желанию</span>
                </Label>
                <Textarea id="apply-message" name="message" rows={3} className="rounded-xl" />
              </div>

              <Button type="submit" size="lg" className="mt-2 h-12 rounded-full">
                Отправить
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
