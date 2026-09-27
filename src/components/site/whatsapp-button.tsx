import type { ComponentProps } from 'react'
import { Button } from '@/components/ui/button'
import type { FormatId } from '@/data/content'
import { whatsappLink } from '@/lib/whatsapp'

type Props = Omit<ComponentProps<typeof Button>, 'asChild'> & {
  /** Формат, для которого подставится своё сообщение. Без него — общее. */
  format?: FormatId
  /** Где стоит кнопка — уходит в аналитику (header, hero, final-cta…). */
  place?: string
}

/** Кнопка заявки: открывает WhatsApp с готовым текстом под формат. */
export function WhatsAppButton({ format, place, children, onClick, ...props }: Props) {
  return (
    <Button asChild {...props}>
      <a
        href={whatsappLink(format)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick as ComponentProps<'a'>['onClick']}
        // Umami: событие клика по кнопке заявки, отдельно для каждого формата
        data-umami-event={`whatsapp-${format ?? 'general'}`}
        data-umami-event-place={place}
      >
        {children}
      </a>
    </Button>
  )
}
