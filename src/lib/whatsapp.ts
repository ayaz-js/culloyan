import { WHATSAPP_PHONE, whatsappMessages, type FormatId } from '@/data/content'

/** Ссылка wa.me с заранее заполненным сообщением под конкретный формат. */
export function whatsappLink(format?: FormatId) {
  const text = whatsappMessages[format ?? 'general']
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`
}
