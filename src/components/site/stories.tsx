import { PlayIcon } from 'lucide-react'
import { Container, Eyebrow, PhotoSlot, Section } from './primitives'

const cases = ['Видео-кейс 01', 'Видео-кейс 02', 'Видео-кейс 03']

export function Stories() {
  return (
    <Section id="stories" className="hairline">
      <Container>
        <Eyebrow>Истории</Eyebrow>
        <h2 className="mt-4 font-serif text-5xl md:text-6xl">Только реальные люди.</h2>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {cases.map((caseTitle) => (
            <PhotoSlot key={caseTitle} label={caseTitle} className="aspect-4/3">
              <span className="absolute inset-0 m-auto flex size-14 items-center justify-center rounded-full bg-background/80 backdrop-blur">
                <PlayIcon className="size-5 translate-x-0.5" />
              </span>
            </PhotoSlot>
          ))}
        </div>
      </Container>
    </Section>
  )
}
