import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faq } from '@/data/content'
import { Container, Eyebrow, Section } from './primitives'

export function Faq() {
  return (
    <Section id="faq" className="hairline">
      <Container className="grid gap-10 md:grid-cols-[0.6fr_1.4fr]">
        <div>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-4 font-serif text-5xl">До заявки</h2>
        </div>
        <Accordion type="single" collapsible className="border-t border-border">
          {faq.map((item, i) => (
            <AccordionItem key={item.q} value={`q${i}`}>
              <AccordionTrigger className="py-6 text-lg font-medium hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  )
}
