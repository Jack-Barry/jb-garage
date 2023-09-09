import { Meta, StoryFn } from '@storybook/react'

import { BrElement } from '../../utils/BrElement'
import Button from '../Button/Button'

import Spinner from './Spinner'

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
      <Spinner brSpinnerColor="primary">
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner brSpinnerColor="secondary">
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner brSpinnerColor="success">
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner brSpinnerColor="danger">
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner brSpinnerColor="warning">
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner brSpinnerColor="info">
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner brSpinnerColor="light">
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner brSpinnerColor="dark">
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
      <Spinner brSpinnerGrowing>
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
      <hr />
      <Spinner brSpinnerGrowing brSpinnerColor="primary">
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner brSpinnerGrowing brSpinnerColor="secondary">
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner brSpinnerGrowing brSpinnerColor="success">
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner brSpinnerGrowing brSpinnerColor="danger">
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner brSpinnerGrowing brSpinnerColor="warning">
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner brSpinnerGrowing brSpinnerColor="info">
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner brSpinnerGrowing brSpinnerColor="light">
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner brSpinnerGrowing brSpinnerColor="dark">
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
      <Spinner bsJs={{ bsJsAll: { spacing: { margin: '5' } } }}>
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
      <BrElement bsJs={{ bsJsAll: { display: 'flex', flex: { justifyContent: 'center' } } }}>
        <Spinner>
          <BrElement as="span" brVisuallyHidden>
            Loading...
          </BrElement>
        </Spinner>
      </BrElement>
      <hr />
      <BrElement bsJs={{ bsJsAll: { display: 'flex', flex: { alignItems: 'center' } } }}>
        <strong>Loading...</strong>
        <Spinner
          bsJs={{ bsJsAll: { spacing: { margin: { start: 'auto' } } } }}
          aria-hidden="true"
        />
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
      <Spinner brSpinnerSm>
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner brSpinnerGrowing brSpinnerSm>
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
      <hr />
      <Spinner brSpinnerSize="3rem">
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner brSpinnerGrowing brSpinnerSize="3rem">
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
      <Button brButtonColor="primary" disabled>
        <Spinner as="span" brSpinnerSm aria-hidden="true" />
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Button>
      <Button brButtonColor="primary" disabled>
        <Spinner as="span" brSpinnerSm aria-hidden="true" /> Loading...
      </Button>
      <hr />
      <Button brButtonColor="primary" disabled>
        <Spinner as="span" brSpinnerGrowing brSpinnerSm aria-hidden="true" />
        <BrElement as="span" brVisuallyHidden>
          Loading...
        </BrElement>
      </Button>
      <Button brButtonColor="primary" disabled>
        <Spinner as="span" brSpinnerGrowing brSpinnerSm aria-hidden="true" /> Loading...
      </Button>
    </div>
  )
}
