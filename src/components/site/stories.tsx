import { useState } from 'react'
import { PlayIcon } from 'lucide-react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Container, Eyebrow, PhotoSlot, Section } from './primitives'

type Story = {
  title: string
  /** Прямая ссылка на файл (mp4/webm), например '/videos/case-01.mp4'. */
  src?: string
  /** Ссылка для встраивания (YouTube, VK Видео, Rutube) — используется, если нет src. */
  embedUrl?: string
  /** Обложка карточки и видео. */
  poster?: string
}

// TODO: добавить ссылки на видео и обложки
const cases: Story[] = [
  {
    title: 'Видео-кейс 01',
    poster: 'https://i.ytimg.com/vi/k2kqzv5U7uQ/maxresdefault.jpg?v=6acab7a1',
    embedUrl: 'https://www.youtube.com/embed/k2kqzv5U7uQ?si=ise39fUcQbaF29SN',
  },
  { title: 'Видео-кейс 02' },
  { title: 'Видео-кейс 03' },
]

export function Stories() {
  const [open, setOpen] = useState(false)
  const [story, setStory] = useState<Story>(cases[0])

  return (
    <Section id="stories" className="hairline">
      <Container>
        <Eyebrow>Истории</Eyebrow>
        <h2 className="mt-4 font-serif text-5xl md:text-6xl">Только реальные люди.</h2>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {cases.map((caseItem) => (
            <button
              key={caseItem.title}
              type="button"
              aria-label={`Смотреть: ${caseItem.title}`}
              onClick={() => {
                setStory(caseItem)
                setOpen(true)
              }}
              className="group cursor-pointer rounded-3xl text-left outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <PhotoSlot label={caseItem.title} className="aspect-4/3">
                {caseItem.poster && (
                  <img
                    src={caseItem.poster}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <span className="absolute inset-0 m-auto flex size-14 items-center justify-center rounded-full bg-background/80 backdrop-blur transition-transform duration-300 group-hover:scale-110">
                  <PlayIcon className="size-5 translate-x-0.5" />
                </span>
              </PhotoSlot>
            </button>
          ))}
        </div>
      </Container>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          aria-describedby={undefined}
          className="gap-0 overflow-hidden rounded-3xl border-border bg-card p-0 sm:max-w-4xl"
        >
          <DialogTitle className="eyebrow px-6 py-4.5 pr-12 font-normal text-muted-foreground">
            {story.title}
          </DialogTitle>
          <div className="aspect-video max-h-[80svh] w-full bg-black">
            {story.src ? (
              <video
                src={story.src}
                poster={story.poster}
                controls
                autoPlay
                playsInline
                className="size-full object-contain"
              />
            ) : story.embedUrl ? (
              <iframe
                src={story.embedUrl}
                title={story.title}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
                className="size-full border-0"
              />
            ) : (
              <div className="flex size-full items-center justify-center px-6 text-center text-sm text-white/70">
                Видео скоро появится
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </Section>
  )
}
