import { Meta, StoryFn } from '@storybook/react'
import Spinner from './Spinner'
import { BrElement } from '../../utils/BrElement'
import Button from '../Button/Button'

const meta: Meta = {
  title: 'Spinner',
  tags: ['autodocs']
}

export default meta

export const BorderSpinner: StoryFn = () => {
  return (
    <div className="bd-example">
      <Spinner>
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
    </div>
  )
}

export const Colors: StoryFn = () => {
  return (
    <div className="bd-example">
      <Spinner brVariant="primary">
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner brVariant="secondary">
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner brVariant="success">
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner brVariant="danger">
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner brVariant="warning">
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner brVariant="info">
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner brVariant="light">
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner brVariant="dark">
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
    </div>
  )
}

export const GrowingSpinner: StoryFn = () => {
  return (
    <div className="bd-example">
      <Spinner brGrowingSpinner>
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
      <hr />
      <Spinner brGrowingSpinner brVariant="primary">
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner brGrowingSpinner brVariant="secondary">
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner brGrowingSpinner brVariant="success">
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner brGrowingSpinner brVariant="danger">
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner brGrowingSpinner brVariant="warning">
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner brGrowingSpinner brVariant="info">
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner brGrowingSpinner brVariant="light">
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner brGrowingSpinner brVariant="dark">
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
    </div>
  )
}

export const AlignmentMargin: StoryFn = () => {
  return (
    <div className="bd-example">
      <Spinner brMargin={5}>
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
    </div>
  )
}

export const AlignmentPlacementFlex: StoryFn = () => {
  return (
    <div className="bd-example">
      <BrElement brDisplay="flex" brFlex={{ justifyContent: 'center' }}>
        <Spinner>
          <BrElement as="span" brVisuallyHidden>
            Loading...
          </BrElement>
        </Spinner>
      </BrElement>
      <hr />
      <BrElement brDisplay="flex" brFlex={{ alignItems: 'center' }}>
        <strong>Loading...</strong>
        <Spinner brMargin={{ start: 'auto' }} aria-hidden="true" />
      </BrElement>
    </div>
  )
}

export const AlignmentPlacementFloats: StoryFn = () => {
  return (
    <div className="bd-example">
      <BrElement brClearfix>
        <Spinner className="float-end">
          <BrElement brVisuallyHidden>Loading...</BrElement>
        </Spinner>
      </BrElement>
    </div>
  )
}

export const AlignmentPlacementTextAlign: StoryFn = () => {
  return (
    <div className="bd-example">
      <div className="text-center">
        <Spinner>
          <BrElement as="span" brVisuallyHidden>
            Loading...
          </BrElement>
        </Spinner>
      </div>
    </div>
  )
}

export const Size: StoryFn = () => {
  return (
    <div className="bd-example">
      <Spinner brSm>
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner brGrowingSpinner brSm>
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
      <hr />
      <Spinner brSize="3rem">
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner brGrowingSpinner brSize="3rem">
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
    </div>
  )
}

export const Buttons: StoryFn = () => {
  return (
    <div className="bd-example">
      <Button brVariant="primary" disabled>
        <Spinner as="span" brSm aria-hidden="true" />
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Button>
      <Button brVariant="primary" disabled>
        <Spinner as="span" brSm aria-hidden="true" /> Loading...
      </Button>
      <hr />
      <Button brVariant="primary" disabled>
        <Spinner as="span" brGrowingSpinner brSm aria-hidden="true" />
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Button>
      <Button brVariant="primary" disabled>
        <Spinner as="span" brGrowingSpinner brSm aria-hidden="true" /> Loading...
      </Button>
    </div>
  )
}
