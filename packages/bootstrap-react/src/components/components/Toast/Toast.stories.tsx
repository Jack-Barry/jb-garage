import { Meta, StoryFn } from '@storybook/react'

import Image from '../../content/Image/Image'
import { BrElement } from '../../utils/BrElement'
import Button from '../Button/Button'
import CloseButton from '../CloseButton/CloseButton'

import Toast from './Toast'
import ToastBody from './ToastBody'
import ToastContainer from './ToastContainer'
import ToastHeader from './ToastHeader'
import { useToast } from './useToast'

const meta: Meta = {
  title: 'Toast',
  tags: ['autodocs']
}

export default meta

export const Basic: StoryFn = () => {
  const toast = useToast({ bootstrapToast: { autohide: false } })

  return (
    <Toast bsJs={{ fade: true }} aria-live="assertive" aria-atomic="true" ref={toast.ref}>
      <ToastHeader>
        <Image
          as="svg"
          bsJs={{ spacing: { margin: { end: '2' } } }}
          className="bd-placeholder-img rounded"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <rect width="100%" height="100%" fill="#007aff" />
        </Image>
        <BrElement as="strong" bsJs={{ spacing: { margin: { end: 'auto' } } }}>
          Bootstrap
        </BrElement>
        <small>11 mins ago</small>
        <CloseButton onClick={toast.hide} />
      </ToastHeader>
      <ToastBody>Hello, world! This is a toast message.</ToastBody>
    </Toast>
  )
}

export const LiveExample: StoryFn = () => {
  const toast = useToast()

  return (
    <div>
      <Button bsJs={{ variant: 'primary' }} id="liveToastBtn" onClick={toast.show}>
        Show live toast
      </Button>
      <ToastContainer
        bsJs={{ spacing: { padding: '3' }, position: 'fixed' }}
        className="bottom-0 end-0"
      >
        <Toast id="liveToast" aria-live="assertive" aria-atomic="true" ref={toast.ref}>
          <ToastHeader>
            <Image
              as="svg"
              bsJs={{ spacing: { margin: { end: '2' } } }}
              className="bd-placeholder-img rounded"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="#007aff" />
            </Image>
            <BrElement as="strong" bsJs={{ spacing: { margin: { end: 'auto' } } }}>
              Bootstrap
            </BrElement>
            <small>11 mins ago</small>
            <CloseButton onClick={toast.hide} />
          </ToastHeader>
          <ToastBody>Hello, world! This is a toast message.</ToastBody>
        </Toast>
      </ToastContainer>
    </div>
  )
}

export const Stacking: StoryFn = () => {
  const toast1 = useToast({ bootstrapToast: { autohide: false } })
  const toast2 = useToast({ bootstrapToast: { autohide: false } })

  return (
    <ToastContainer bsJs={{ position: 'static' }}>
      <Toast aria-live="assertive" aria-atomic="true" ref={toast1.ref}>
        <ToastHeader>
          <Image
            as="svg"
            className="bd-placeholder-img rounded"
            bsJs={{ spacing: { margin: { end: '2' } } }}
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <rect width="100%" height="100%" fill="#007aff"></rect>
          </Image>
          <BrElement as="strong" bsJs={{ spacing: { margin: { end: 'auto' } } }}>
            Bootstrap
          </BrElement>
          <BrElement as="small" bsJs={{ color: 'body-secondary' }}>
            just now
          </BrElement>
          <CloseButton onClick={toast1.hide} />
        </ToastHeader>
        <ToastBody>See? Just like this.</ToastBody>
      </Toast>

      <Toast aria-live="assertive" aria-atomic="true" ref={toast2.ref}>
        <ToastHeader>
          <Image
            as="svg"
            className="bd-placeholder-img rounded"
            bsJs={{ spacing: { margin: { end: '2' } } }}
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <rect width="100%" height="100%" fill="#007aff"></rect>
          </Image>
          <BrElement as="strong" bsJs={{ spacing: { margin: { end: 'auto' } } }}>
            Bootstrap
          </BrElement>
          <BrElement as="small" bsJs={{ color: 'body-secondary' }}>
            2 seconds ago
          </BrElement>
          <CloseButton onClick={toast2.hide} />
        </ToastHeader>
        <ToastBody>Heads up, toasts will stack automatically</ToastBody>
      </Toast>
    </ToastContainer>
  )
}

export const CustomContent: StoryFn = () => {
  const toast1 = useToast({ bootstrapToast: { autohide: false } })
  const toast2 = useToast({ bootstrapToast: { autohide: false } })

  return (
    <div className="bd-example">
      <Toast
        className="align-items-center"
        aria-live="assertive"
        aria-atomic="true"
        ref={toast1.ref}
      >
        <BrElement bsJs={{ display: 'flex' }}>
          <ToastBody>Hello, world! This is a toast message.</ToastBody>
          <CloseButton
            bsJs={{ spacing: { margin: { end: '2' } } }}
            className="m-auto"
            onClick={toast1.hide}
          />
        </BrElement>
      </Toast>
      <hr />
      <Toast aria-live="assertive" aria-atomic="true" ref={toast2.ref}>
        <ToastBody>
          Hello, world! This is a toast message.
          <BrElement
            bsJs={{
              border: { top: true },
              display: 'flex',
              spacing: { margin: { top: '2' }, padding: { top: '2' }, gap: '1' }
            }}
          >
            <Button bsJs={{ variant: 'primary', buttonSize: 'sm' }}>Take action</Button>
            <Button bsJs={{ variant: 'secondary', buttonSize: 'sm' }} onClick={toast2.hide}>
              Close
            </Button>
          </BrElement>
        </ToastBody>
      </Toast>
    </div>
  )
}

export const ColorSchemes: StoryFn = () => {
  const toast = useToast({ bootstrapToast: { autohide: false } })

  return (
    <Toast
      className="align-items-center"
      bsJs={{ border: false, color: 'bg-primary' }}
      aria-live="assertive"
      aria-atomic="true"
      ref={toast.ref}
    >
      <BrElement bsJs={{ display: 'flex' }}>
        <ToastBody>Hello, world! This is a toast message.</ToastBody>
        <CloseButton
          className="btn-close-white m-auto"
          bsJs={{ spacing: { margin: { end: '2' } } }}
          onClick={toast.hide}
        />
      </BrElement>
    </Toast>
  )
}
