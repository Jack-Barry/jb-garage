import { Meta, StoryFn } from '@storybook/react'
import Accordion from './Accordion'
import AccordionButton from './AccordionButton'
import AccordionCollapse from './AccordionCollapse'
import AccordionItem from './AccordionItem'
import AccordionHeader from './AccordionHeader'
import AccordionBody from './AccordionBody'

const meta: Meta = {
  title: 'Accordion',
  tags: ['autodocs']
}

export default meta

export const Example: StoryFn = () => {
  return (
    <Accordion id="accordionExample">
      <AccordionItem>
        <AccordionHeader>
          <AccordionButton aria-controls="collapseOne">Accordion Item #1</AccordionButton>
        </AccordionHeader>
        <AccordionCollapse id="collapseOne" brDefaultOpen>
          <AccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by default, until
            the collapse plugin adds the appropriate classes that we use to style each element.
            These classes control the overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go within the{' '}
            <code>.accordion-body</code>, though the transition does limit overflow.
          </AccordionBody>
        </AccordionCollapse>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader>
          <AccordionButton aria-controls="collapseTwo">Accordion Item #2</AccordionButton>
        </AccordionHeader>
        <AccordionCollapse id="collapseTwo">
          <AccordionBody>
            <strong>This is the second item's accordion body.</strong> It is hidden by default,
            until the collapse plugin adds the appropriate classes that we use to style each
            element. These classes control the overall appearance, as well as the showing and hiding
            via CSS transitions. You can modify any of this with custom CSS or overriding our
            default variables. It's also worth noting that just about any HTML can go within the{' '}
            <code>.accordion-body</code>, though the transition does limit overflow.
          </AccordionBody>
        </AccordionCollapse>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader>
          <AccordionButton aria-controls="collapseThree">Accordion Item #3</AccordionButton>
        </AccordionHeader>
        <AccordionCollapse id="collapseThree">
          <AccordionBody>
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until
            the collapse plugin adds the appropriate classes that we use to style each element.
            These classes control the overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go within the{' '}
            <code>.accordion-body</code>, though the transition does limit overflow.
          </AccordionBody>
        </AccordionCollapse>
      </AccordionItem>
    </Accordion>
  )
}

export const Flush: StoryFn = () => {
  return (
    <Accordion brFlush id="accordionFlushExample">
      <AccordionItem>
        <AccordionHeader>
          <AccordionButton aria-controls="flush-collapseOne">Accordion Item #1</AccordionButton>
        </AccordionHeader>
        <AccordionCollapse id="flush-collapseOne">
          <AccordionBody>
            Placeholder content for this accordion, which is intended to demonstrate the{' '}
            <code>.accordion-flush</code> class. This is the first item's accordion body.
          </AccordionBody>
        </AccordionCollapse>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader>
          <AccordionButton aria-controls="flush-collapseTwo">Accordion Item #2</AccordionButton>
        </AccordionHeader>
        <AccordionCollapse id="flush-collapseTwo">
          <AccordionBody>
            Placeholder content for this accordion, which is intended to demonstrate the{' '}
            <code>.accordion-flush</code> class. This is the second item's accordion body. Let's
            imagine this being filled with some actual content.
          </AccordionBody>
        </AccordionCollapse>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader>
          <AccordionButton aria-controls="flush-collapseThree">Accordion Item #3</AccordionButton>
        </AccordionHeader>
        <AccordionCollapse id="flush-collapseThree">
          <AccordionBody>
            Placeholder content for this accordion, which is intended to demonstrate the{' '}
            <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing
            more exciting happening here in terms of content, but just filling up the space to make
            it look, at least at first glance, a bit more representative of how this would look in a
            real-world application.
          </AccordionBody>
        </AccordionCollapse>
      </AccordionItem>
    </Accordion>
  )
}

export const AlwaysOpen: StoryFn = () => {
  return (
    <Accordion id="accordionPanelsStayOpenExample" brAlwaysOpen>
      <AccordionItem>
        <AccordionHeader>
          <AccordionButton aria-controls="panelsStayOpen-collapseOne">
            Accordion Item #1
          </AccordionButton>
        </AccordionHeader>
        <AccordionCollapse id="panelsStayOpen-collapseOne" brDefaultOpen>
          <AccordionBody>
            <strong>This is the first item's accordion body.</strong> It is shown by default, until
            the collapse plugin adds the appropriate classes that we use to style each element.
            These classes control the overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go within the{' '}
            <code>.accordion-body</code>, though the transition does limit overflow.
          </AccordionBody>
        </AccordionCollapse>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader>
          <AccordionButton aria-controls="panelsStayOpen-collapseTwo">
            Accordion Item #2
          </AccordionButton>
        </AccordionHeader>
        <AccordionCollapse id="panelsStayOpen-collapseTwo">
          <AccordionBody>
            <strong>This is the second item's accordion body.</strong> It is hidden by default,
            until the collapse plugin adds the appropriate classes that we use to style each
            element. These classes control the overall appearance, as well as the showing and hiding
            via CSS transitions. You can modify any of this with custom CSS or overriding our
            default variables. It's also worth noting that just about any HTML can go within the{' '}
            <code>.accordion-body</code>, though the transition does limit overflow.
          </AccordionBody>
        </AccordionCollapse>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader>
          <AccordionButton aria-controls="panelsStayOpen-collapseThree">
            Accordion Item #3
          </AccordionButton>
        </AccordionHeader>
        <AccordionCollapse id="panelsStayOpen-collapseThree">
          <AccordionBody>
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until
            the collapse plugin adds the appropriate classes that we use to style each element.
            These classes control the overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go within the{' '}
            <code>.accordion-body</code>, though the transition does limit overflow.
          </AccordionBody>
        </AccordionCollapse>
      </AccordionItem>
    </Accordion>
  )
}
