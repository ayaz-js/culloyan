// import { useMemo, useState } from 'react'
// import type { FormatId } from '@/data/content'
import { About } from '@/components/site/about'
// import { ApplyContext } from '@/components/site/apply-context'
// import { ApplyDialog } from '@/components/site/apply-dialog'
import { Faq } from '@/components/site/faq'
import { FinalCta, Footer } from '@/components/site/final-cta'
import { Formats } from '@/components/site/formats'
import { Header } from '@/components/site/header'
import { Hero } from '@/components/site/hero'
import { Personal } from '@/components/site/personal'
import { Private } from '@/components/site/private'
import { Relationships } from '@/components/site/relationships'
import { Retreat } from '@/components/site/retreat'
import { Stories } from '@/components/site/stories'

// Заявки сейчас принимаем через WhatsApp (см. WhatsAppButton и whatsappMessages в data/content.ts).
// Модальная форма заявки временно отключена. Чтобы вернуть её:
//   1) раскомментировать импорты и код ниже;
//   2) в кнопках заменить <WhatsAppButton format="…"> на <Button onClick={() => openApply('…')}>.

function App() {
  // const [open, setOpen] = useState(false)
  // const [format, setFormat] = useState<FormatId | null>(null)
  //
  // const apply = useMemo(
  //   () => ({
  //     openApply: (selectedFormat?: FormatId) => {
  //       setFormat(selectedFormat ?? null)
  //       setOpen(true)
  //     },
  //   }),
  //   [],
  // )

  return (
    // <ApplyContext.Provider value={apply}>
    <>
      <Header />
      <main>
        <Hero />
        <Formats />
        <Relationships />
        <Personal />
        <Retreat />
        <Private />
        <About />
        <Stories />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      {/* <ApplyDialog open={open} onOpenChange={setOpen} format={format} onFormatChange={setFormat} /> */}
    </>
    // </ApplyContext.Provider>
  )
}

export default App
