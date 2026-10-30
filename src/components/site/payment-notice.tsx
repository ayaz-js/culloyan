import { useState } from 'react'
import { AlertTriangleIcon } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

// Уведомление о неоплате работ по разработке сайта.
// Чтобы отключить — поставить false (или удалить <PaymentNotice /> из App.tsx).
const ENABLED = true

export function PaymentNotice() {
  const [open, setOpen] = useState(ENABLED)

  if (!ENABLED) return null

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="items-center text-center sm:text-center">
          <AlertTriangleIcon className="size-10 text-destructive" aria-hidden />
          <DialogTitle className="text-xl">Работа над сайтом не оплачена</DialogTitle>
          <DialogDescription>
            Услуги по разработке этого сайта не были оплачены заказчиком. Сайт может быть
            отключён в ближайшее время.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
