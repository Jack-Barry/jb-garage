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
        <BrElement as="span" bsJs={{ visuallyHidden: true }}>
          Loading...
        </BrElement>
      </Spinner>
    </div>
  )
}

export const Colors: StoryFn = () => {
  return (
    <div className="bd-example">
      <Spinner bsJs={{ color: 'primary' }}>
        <BrElement as="span" bsJs={{ visuallyHidden: true }}>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner bsJs={{ color: 'secondary' }}>
        <BrElement as="span" bsJs={{ visuallyHidden: true }}>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner bsJs={{ color: 'success' }}>
        <BrElement as="span" bsJs={{ visuallyHidden: true }}>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner bsJs={{ color: 'danger' }}>
        <BrElement as="span" bsJs={{ visuallyHidden: true }}>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner bsJs={{ color: 'warning' }}>
        <BrElement as="span" bsJs={{ visuallyHidden: true }}>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner bsJs={{ color: 'info' }}>
        <BrElement as="span" bsJs={{ visuallyHidden: true }}>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner bsJs={{ color: 'light' }}>
        <BrElement as="span" bsJs={{ visuallyHidden: true }}>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner bsJs={{ color: 'dark' }}>
        <BrElement as="span" bsJs={{ visuallyHidden: true }}>
          Loading...
        </BrElement>
      </Spinner>
    </div>
  )
}

export const GrowingSpinner: StoryFn = () => {
  return (
    <div className="bd-example">
      <Spinner bsJs={{ spinnerType: 'grow' }}>
        <BrElement as="span" bsJs={{ visuallyHidden: true }}>
          Loading...
        </BrElement>
      </Spinner>
      <hr />
      <Spinner bsJs={{ spinnerType: 'grow', color: 'primary' }}>
        <BrElement as="span" bsJs={{ visuallyHidden: true }}>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner bsJs={{ spinnerType: 'grow', color: 'secondary' }}>
        <BrElement as="span" bsJs={{ visuallyHidden: true }}>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner bsJs={{ spinnerType: 'grow', color: 'success' }}>
        <BrElement as="span" bsJs={{ visuallyHidden: true }}>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner bsJs={{ spinnerType: 'grow', color: 'danger' }}>
        <BrElement as="span" bsJs={{ visuallyHidden: true }}>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner bsJs={{ spinnerType: 'grow', color: 'warning' }}>
        <BrElement as="span" bsJs={{ visuallyHidden: true }}>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner bsJs={{ spinnerType: 'grow', color: 'info' }}>
        <BrElement as="span" bsJs={{ visuallyHidden: true }}>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner bsJs={{ spinnerType: 'grow', color: 'light' }}>
        <BrElement as="span" bsJs={{ visuallyHidden: true }}>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner bsJs={{ spinnerType: 'grow', color: 'dark' }}>
        <BrElement as="span" bsJs={{ visuallyHidden: true }}>
          Loading...
        </BrElement>
      </Spinner>
    </div>
  )
}

export const AlignmentMargin: StoryFn = () => {
  return (
    <div className="bd-example">
      <Spinner bsJs={{ spacing: { margin: '5' } }}>
        <BrElement as="span" bsJs={{ visuallyHidden: true }}>
          Loading...
        </BrElement>
      </Spinner>
    </div>
  )
}

export const AlignmentPlacementFlex: StoryFn = () => {
  return (
    <div className="bd-example">
      <BrElement bsJs={{ display: 'flex', flex: { justifyContent: 'center' } }}>
        <Spinner>
          <BrElement as="span" bsJs={{ visuallyHidden: true }}>
            Loading...
          </BrElement>
        </Spinner>
      </BrElement>
      <hr />
      <BrElement bsJs={{ display: 'flex', flex: { alignItems: 'center' } }}>
        <strong>Loading...</strong>
        <Spinner bsJs={{ spacing: { margin: { start: 'auto' } } }} aria-hidden="true" />
      </BrElement>
    </div>
  )
}

export const AlignmentPlacementFloats: StoryFn = () => {
  return (
    <div className="bd-example">
      <BrElement bsJs={{ clearfix: true }}>
        <Spinner className="float-end">
          <BrElement bsJs={{ visuallyHidden: true }}>Loading...</BrElement>
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
          <BrElement as="span" bsJs={{ visuallyHidden: true }}>
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
      <Spinner bsJs={{ spinnerSize: 'sm' }}>
        <BrElement as="span" bsJs={{ visuallyHidden: true }}>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner bsJs={{ spinnerSize: 'sm', spinnerType: 'grow' }}>
        <BrElement as="span" bsJs={{ visuallyHidden: true }}>
          Loading...
        </BrElement>
      </Spinner>
      <hr />
      <Spinner bsJs={{ spinnerSize: '3rem' }}>
        <BrElement as="span" bsJs={{ visuallyHidden: true }}>
          Loading...
        </BrElement>
      </Spinner>
      <Spinner bsJs={{ spinnerSize: '3rem', spinnerType: 'grow' }}>
        <BrElement as="span" bsJs={{ visuallyHidden: true }}>
          Loading...
        </BrElement>
      </Spinner>
    </div>
  )
}

export const Buttons: StoryFn = () => {
  return (
    <div className="bd-example">
      <Button bsJs={{ variant: 'primary' }} disabled>
        <Spinner as="span" bsJs={{ spinnerSize: 'sm' }} aria-hidden="true" />
        <BrElement as="span" bsJs={{ visuallyHidden: true }}>
          Loading...
        </BrElement>
      </Button>
      <Button bsJs={{ variant: 'primary' }} disabled>
        <Spinner as="span" bsJs={{ spinnerSize: 'sm' }} aria-hidden="true" /> Loading...
      </Button>
      <hr />
      <Button bsJs={{ variant: 'primary' }} disabled>
        <Spinner as="span" bsJs={{ spinnerSize: 'sm', spinnerType: 'grow' }} aria-hidden="true" />
        <BrElement as="span" bsJs={{ visuallyHidden: true }}>
          Loading...
        </BrElement>
      </Button>
      <Button bsJs={{ variant: 'primary' }} disabled>
        <Spinner as="span" bsJs={{ spinnerSize: 'sm', spinnerType: 'grow' }} aria-hidden="true" />{' '}
        Loading...
      </Button>
    </div>
  )
}
