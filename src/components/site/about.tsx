import { Container, Eyebrow, PhotoSlot, Section } from './primitives'

export function About() {
  return (
    <Section id="about" className="hairline">
      <Container className="grid items-center gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <PhotoSlot label="Портрет Павла" className="aspect-4/5">
          <img
            src="/images/kulloyan.jpeg"
            alt="Pavel Kulloyan"
            className="absolute object-cover w-full h-full"
          />
        </PhotoSlot>
        <div>
          <Eyebrow>Павел Кулоян</Eyebrow>
          <h2 className="mt-4 font-serif text-5xl leading-[1.02] md:text-6xl">
            Не человек с ответами на всё.
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Прямота, опыт и способность задавать точные вопросы. Павел создаёт пространство, в
            котором человек сам начинает видеть решения — и перестаёт ждать их со стороны.
          </p>
        </div>
      </Container>
    </Section>
  )
}
