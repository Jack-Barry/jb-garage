import { Meta, StoryFn } from '@storybook/react'
import { useToast } from './useToast'
import Toast from './Toast'
import ToastHeader from './ToastHeader'
import Image from '../../content/Image/Image'
import { BrElement } from '../../utils/BrElement'
import CloseButton from '../CloseButton/CloseButton'
import ToastBody from './ToastBody'
import Button from '../Button/Button'
import ToastContainer from './ToastContainer'

const meta: Meta = {
  title: 'Toast',
  tags: ['autodocs']
}

export default meta

export const Basic: StoryFn = () => {
  const toast = useToast({ bootstrapToast: { autohide: false } })

  return (
    <Toast brToastFade aria-live="assertive" aria-atomic="true" ref={toast.ref}>
      <ToastHeader>
        <Image
          as="svg"
          brMargin={{ end: 2 }}
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
        <BrElement as="strong" brMargin={{ end: 'auto' }}>
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
      <Button brButtonColor="primary" id="liveToastBtn" onClick={toast.show}>
        Show live toast
      </Button>
      <ToastContainer brPosition="fixed" brPadding={3} className="bottom-0 end-0">
        <Toast id="liveToast" aria-live="assertive" aria-atomic="true" ref={toast.ref}>
          <ToastHeader>
            <Image
              as="svg"
              brMargin={{ end: 2 }}
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
            <BrElement as="strong" brMargin={{ end: 'auto' }}>
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
    <ToastContainer brPosition="static">
      <Toast aria-live="assertive" aria-atomic="true" ref={toast1.ref}>
        <ToastHeader>
          <Image
            as="svg"
            className="bd-placeholder-img rounded"
            brMargin={{ end: 2 }}
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <rect width="100%" height="100%" fill="#007aff"></rect>
          </Image>
          <BrElement as="strong" brMargin={{ end: 'auto' }}>
            Bootstrap
          </BrElement>
          <small className="text-body-secondary">just now</small>
          <CloseButton onClick={toast1.hide} />
        </ToastHeader>
        <ToastBody>See? Just like this.</ToastBody>
      </Toast>

      <Toast aria-live="assertive" aria-atomic="true" ref={toast2.ref}>
        <ToastHeader>
          <Image
            as="svg"
            className="bd-placeholder-img rounded"
            brMargin={{ end: 2 }}
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <rect width="100%" height="100%" fill="#007aff"></rect>
          </Image>
          <BrElement as="strong" brMargin={{ end: 'auto' }}>
            Bootstrap
          </BrElement>
          <small className="text-body-secondary">2 seconds ago</small>
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
        <BrElement brDisplay="flex">
          <ToastBody>Hello, world! This is a toast message.</ToastBody>
          <CloseButton brMargin={{ end: 2 }} className="m-auto" onClick={toast1.hide} />
        </BrElement>
      </Toast>
      <hr />
      <Toast aria-live="assertive" aria-atomic="true" ref={toast2.ref}>
        <ToastBody>
          Hello, world! This is a toast message.
          <BrElement
            brDisplay="flex"
            brFlex={{ gap: 1 }}
            brMargin={{ top: 2 }}
            brPadding={{ top: 2 }}
            brBorder={{ top: true }}
          >
            <Button brButtonColor="primary" brButtonSm>
              Take action
            </Button>
            <Button brButtonColor="secondary" brButtonSm onClick={toast2.hide}>
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
      className="align-items-center text-bg-primary"
      brBorder={false}
      aria-live="assertive"
      aria-atomic="true"
      ref={toast.ref}
    >
      <BrElement brDisplay="flex">
        <ToastBody>Hello, world! This is a toast message.</ToastBody>
        <CloseButton
          className="btn-close-white m-auto"
          brMargin={{ end: 2 }}
          onClick={toast.hide}
        />
      </BrElement>
    </Toast>
  )
}
