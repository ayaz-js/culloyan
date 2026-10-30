import { Container, Eyebrow } from './primitives'

export function NotFound() {
  return (
    <main className="flex min-h-svh items-center py-20 text-center">
      <Container>
        <Eyebrow>Ошибка 404</Eyebrow>
        <h1 className="mx-auto mt-5 max-w-4xl font-serif text-6xl leading-[1.02] md:text-8xl">
          Страница <em className="text-bronze">не найдена</em>
        </h1>
        {/*<p className="mt-8 text-lg text-muted-foreground">*/}
        {/*  Возможно, она была удалена или временно недоступна.*/}
        {/*</p>*/}
      </Container>
    </main>
  )
}
