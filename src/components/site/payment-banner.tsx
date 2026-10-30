import { AlertTriangleIcon } from 'lucide-react'

const ENABLED = true

export function PaymentBanner() {
  if (!ENABLED) return null

  return (
    <div
      role="alert"
      className="bg-destructive px-4 py-2 text-center text-sm font-medium text-white"
    >
      <AlertTriangleIcon className="mr-2 inline size-4 align-[-2px]" aria-hidden />
      Сайт может быть отключён в ближайшее время.
    </div>
  )
}
