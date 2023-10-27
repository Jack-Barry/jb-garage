import { BootstrapDefaultBreakpoint } from '@jb-garage/bootstrap-js'
import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import Col from '../../layout/columns/Col'
import Container from '../../layout/containers/Container'
import Row from '../../layout/grid/Row'
import { BrElement } from '../../utils/BrElement'
import Button from '../Button/Button'
import CloseButton from '../CloseButton/CloseButton'
import Popover from '../Popover/Popover'
import PopoverBody from '../Popover/PopoverBody'
import PopoverHeader from '../Popover/PopoverHeader'
import { usePopover } from '../Popover/usePopover'
import Tooltip from '../Tooltip/Tooltip'
import { useTooltip } from '../Tooltip/useTooltip'

import Modal from './Modal'
import ModalBody from './ModalBody'
import ModalContent from './ModalContent'
import ModalDialog from './ModalDialog'
import ModalFooter from './ModalFooter'
import ModalHeader from './ModalHeader'
import ModalTitle from './ModalTitle'
import { useModal } from './useModal'

const meta: Meta = {
  title: 'Modal',
  tags: ['autodocs']
}

export default meta

export const LiveDemo: StoryFn = () => {
  const modal = useModal()

  return (
    <div>
      <Button bsJs={{ variant: 'primary' }} onClick={modal.toggle}>
        Launch demo modal
      </Button>
      <Modal brModal={modal}>
        <ModalDialog>
          <ModalContent>
            <ModalHeader>
              <ModalTitle className="fs-5" id="exampleModalLabel">
                Modal title
              </ModalTitle>
              <CloseButton onClick={modal.hide} />
            </ModalHeader>
            <ModalBody>Woo-hoo, you're reading this text in a modal!</ModalBody>
            <ModalFooter>
              <Button bsJs={{ variant: 'secondary' }} onClick={modal.hide}>
                Close
              </Button>
              <Button bsJs={{ variant: 'primary' }}>Save changes</Button>
            </ModalFooter>
          </ModalContent>
        </ModalDialog>
      </Modal>
    </div>
  )
}

export const StaticBackdrop: StoryFn = () => {
  const modal = useModal({ bootstrapModal: { backdrop: 'static', keyboard: false } })

  return (
    <div>
      <Button bsJs={{ variant: 'primary' }} onClick={modal.toggle}>
        Launch static backdrop modal
      </Button>
      <Modal id="staticBackdrop" aria-labelledby="staticBackdropLabel" brModal={modal}>
        <ModalDialog>
          <ModalContent>
            <ModalHeader>
              <ModalTitle className="fs-5" id="staticBackdropLabel">
                Modal title
              </ModalTitle>
              <CloseButton onClick={modal.hide} />
            </ModalHeader>
            <ModalBody>
              I will not close if you click outside of me. Don't even try to press escape key.
            </ModalBody>
            <ModalFooter>
              <Button bsJs={{ variant: 'secondary' }} onClick={modal.hide}>
                Close
              </Button>
              <Button bsJs={{ variant: 'primary' }}>Understood</Button>
            </ModalFooter>
          </ModalContent>
        </ModalDialog>
      </Modal>
    </div>
  )
}

export const ScrollingLongContent: StoryFn = () => {
  const modal1 = useModal()
  const modal2 = useModal()

  return (
    <div>
      <Button bsJs={{ variant: 'primary' }} onClick={modal1.toggle}>
        Launch demo modal
      </Button>
      <Modal id="exampleModalLong" aria-labelledby="exampleModalLongTitle" brModal={modal1}>
        <ModalDialog>
          <ModalContent>
            <ModalHeader>
              <ModalTitle className="fs-5" id="exampleModalLongTitle">
                Modal title
              </ModalTitle>
              <CloseButton onClick={modal1.hide} />
            </ModalHeader>
            <ModalBody style={{ minHeight: '1500px' }}>
              <p>
                This is some placeholder content to show the scrolling behavior for modals. Instead
                of repeating the text in the modal, we use an inline style to set a minimum height,
                thereby extending the length of the overall modal and demonstrating the overflow
                scrolling. When content becomes longer than the height of the viewport, scrolling
                will move the modal as needed.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button bsJs={{ variant: 'secondary' }} onClick={modal1.hide}>
                Close
              </Button>
              <Button bsJs={{ variant: 'primary' }}>Save changes</Button>
            </ModalFooter>
          </ModalContent>
        </ModalDialog>
      </Modal>
      <hr />
      <Button bsJs={{ variant: 'primary' }} onClick={modal2.toggle}>
        Launch demo modal
      </Button>
      <Modal
        id="exampleModalScrollable"
        aria-labelledby="exampleModalScrollableTitle"
        brModal={modal2}
      >
        <ModalDialog bsJs={{ scrollable: true }}>
          <ModalContent>
            <ModalHeader>
              <ModalTitle className="fs-5" id="exampleModalScrollableTitle">
                Modal title
              </ModalTitle>
              <CloseButton onClick={modal2.hide} />
            </ModalHeader>
            <ModalBody>
              <p>
                This is some placeholder content to show the scrolling behavior for modals. We use
                repeated line breaks to demonstrate how content can exceed minimum inner height,
                thereby showing inner scrolling. When content becomes longer than the predefined
                max-height of modal, content will be cropped and scrollable within the modal.
              </p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <p>This content should appear at the bottom after you scroll.</p>
            </ModalBody>
            <ModalFooter>
              <Button bsJs={{ variant: 'secondary' }} onClick={modal2.hide}>
                Close
              </Button>
              <Button bsJs={{ variant: 'primary' }}>Save changes</Button>
            </ModalFooter>
          </ModalContent>
        </ModalDialog>
      </Modal>
    </div>
  )
}

export const VerticallyCentered: StoryFn = () => {
  const modal1 = useModal()
  const modal2 = useModal()

  return (
    <div>
      <BrElement bsJs={{ display: 'flex', spacing: { gap: '1' } }}>
        <Button bsJs={{ variant: 'primary' }} onClick={modal1.toggle}>
          Vertically centered modal
        </Button>
        <Button bsJs={{ variant: 'primary' }} onClick={modal2.toggle}>
          Vertically centered scrollable modal
        </Button>
      </BrElement>
      <Modal id="exampleModalCenter" aria-labelledby="exampleModalCenterTitle" brModal={modal1}>
        <ModalDialog bsJs={{ centered: true }}>
          <ModalContent>
            <ModalHeader>
              <ModalTitle className="fs-5" id="exampleModalCenterTitle">
                Modal title
              </ModalTitle>
              <CloseButton onClick={modal1.hide} />
            </ModalHeader>
            <ModalBody>
              <p>This is a vertically centered modal.</p>
            </ModalBody>
            <ModalFooter>
              <Button bsJs={{ variant: 'secondary' }} onClick={modal1.hide}>
                Close
              </Button>
              <Button bsJs={{ variant: 'primary' }}>Save changes</Button>
            </ModalFooter>
          </ModalContent>
        </ModalDialog>
      </Modal>
      <Modal
        id="exampleModalCenteredScrollable"
        aria-labelledby="exampleModalCenteredScrollableTitle"
        brModal={modal2}
      >
        <ModalDialog bsJs={{ centered: true, scrollable: true }}>
          <ModalContent>
            <ModalHeader>
              <ModalTitle className="fs-5" id="exampleModalCenteredScrollableTitle">
                Modal title
              </ModalTitle>
              <CloseButton onClick={modal2.hide} />
            </ModalHeader>
            <ModalBody>
              <p>
                This is some placeholder content to show a vertically centered modal. We've added
                some extra copy here to show how vertically centering the modal works when combined
                with scrollable modals. We also use some repeated line breaks to quickly extend the
                height of the content, thereby triggering the scrolling. When content becomes longer
                than the predefined max-height of modal, content will be cropped and scrollable
                within the modal.
              </p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <p>Just like that.</p>
            </ModalBody>
            <ModalFooter>
              <Button bsJs={{ variant: 'secondary' }} onClick={modal2.hide}>
                Close
              </Button>
              <Button bsJs={{ variant: 'primary' }}>Save changes</Button>
            </ModalFooter>
          </ModalContent>
        </ModalDialog>
      </Modal>
    </div>
  )
}

export const TooltipsAndPopovers: StoryFn = () => {
  const modal = useModal()
  const popover = usePopover()
  const tooltip1 = useTooltip()
  const tooltip2 = useTooltip()

  return (
    <div>
      <Button bsJs={{ variant: 'primary' }} onClick={modal.toggle}>
        Launch demo modal
      </Button>
      <Modal id="exampleModalPopovers" aria-labelledby="exampleModalPopoversLabel" brModal={modal}>
        <ModalDialog>
          <ModalContent>
            <ModalHeader>
              <ModalTitle className="fs-5" id="exampleModalPopoversLabel">
                Modal title
              </ModalTitle>
              <CloseButton onClick={modal.hide} />
            </ModalHeader>
            <ModalBody>
              <h2 className="fs-5">Popover in a modal</h2>
              <p>
                This{' '}
                <Button
                  bsJs={{ variant: 'secondary' }}
                  ref={popover.target.ref}
                  {...popover.target.getProps()}
                  // data-bs-container="#exampleModalPopovers"
                >
                  button
                </Button>
                <Popover brPopover={popover.floating}>
                  <PopoverHeader>Popover title</PopoverHeader>
                  <PopoverBody>Popover body content</PopoverBody>
                </Popover>{' '}
                triggers a popover on click.
              </p>
              <hr />
              <h2 className="fs-5">Tooltips in a modal</h2>
              <p>
                <a href="#" ref={tooltip1.target.ref} {...tooltip1.target.getProps()}>
                  This link
                </a>
                <Tooltip brTooltip={tooltip1.floating}>Tooltip 1</Tooltip> and{' '}
                <a href="#" ref={tooltip2.target.ref} {...tooltip2.target.getProps()}>
                  that link
                </a>
                <Tooltip brTooltip={tooltip2.floating}>Tooltip 2</Tooltip> have tooltips on hover.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button bsJs={{ variant: 'secondary' }} onClick={modal.hide}>
                Close
              </Button>
              <Button bsJs={{ variant: 'primary' }}>Save changes</Button>
            </ModalFooter>
          </ModalContent>
        </ModalDialog>
      </Modal>
    </div>
  )
}

export const UsingTheGrid: StoryFn = () => {
  const modal = useModal()

  return (
    <div>
      <Button bsJs={{ variant: 'primary' }} onClick={modal.toggle}>
        Launch demo modal
      </Button>
      <Modal id="gridSystemModal" aria-labelledby="gridModalLabel" brModal={modal}>
        <ModalDialog>
          <ModalContent>
            <ModalHeader>
              <ModalTitle className="fs-5" id="gridModalLabel">
                Grids in modals
              </ModalTitle>
              <CloseButton onClick={modal.hide} />
            </ModalHeader>
            <ModalBody>
              <Container brContainerFluid className="bd-example-row">
                <Row>
                  <Col brColsMd={4}>.col-md-4</Col>
                  <Col brColsMd={4} bsJs={{ spacing: { margin: { start: 'auto' } } }}>
                    .col-md-4 .ms-auto
                  </Col>
                </Row>
                <Row>
                  <Col brColsMd={3} bsJs={{ spacing: { margin: { start: 'auto' } } }}>
                    .col-md-3 .ms-auto
                  </Col>
                  <Col brColsMd={2} bsJs={{ spacing: { margin: { start: 'auto' } } }}>
                    .col-md-2 .ms-auto
                  </Col>
                </Row>
                <Row>
                  <Col brColsMd={6} bsJs={{ spacing: { margin: { start: 'auto' } } }}>
                    .col-md-6 .ms-auto
                  </Col>
                </Row>
                <Row>
                  <Col brColsSm={9}>
                    Level 1: .col-sm-9
                    <Row>
                      <Col brCols={8} brColsSm={6}>
                        Level 2: .col-8 .col-sm-6
                      </Col>
                      <Col brCols={4} brColsSm={6}>
                        Level 2: .col-4 .col-sm-6
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </ModalBody>
            <ModalFooter>
              <Button bsJs={{ variant: 'secondary' }} onClick={modal.hide}>
                Close
              </Button>
              <Button bsJs={{ variant: 'primary' }}>Save changes</Button>
            </ModalFooter>
          </ModalContent>
        </ModalDialog>
      </Modal>
    </div>
  )
}

export const ToggleBetweenModals: StoryFn = () => {
  const modal1 = useModal()
  const modal2 = useModal()

  return (
    <div>
      <Button bsJs={{ variant: 'primary' }} onClick={modal1.toggle}>
        Open first modal
      </Button>
      <Modal id="exampleModalToggle" aria-labelledby="exampleModalToggleLabel" brModal={modal1}>
        <ModalDialog bsJs={{ centered: true }}>
          <ModalContent>
            <ModalHeader>
              <ModalTitle className="fs-5" id="exampleModalToggleLabel">
                Modal 1
              </ModalTitle>
              <CloseButton onClick={modal1.hide} />
            </ModalHeader>
            <ModalBody>Show a second modal and hide this one with the button below.</ModalBody>
            <ModalFooter>
              <Button
                bsJs={{ variant: 'primary' }}
                onClick={() => {
                  modal2.toggle()
                  modal1.hide()
                }}
              >
                Open second modal
              </Button>
            </ModalFooter>
          </ModalContent>
        </ModalDialog>
      </Modal>
      <Modal id="exampleModalToggle2" aria-labelledby="exampleModalToggleLabel2" brModal={modal2}>
        <ModalDialog bsJs={{ centered: true }}>
          <ModalContent>
            <ModalHeader>
              <ModalTitle className="fs-5" id="exampleModalToggleLabel2">
                Modal 2
              </ModalTitle>
              <CloseButton
                onClick={() => {
                  modal1.show()
                  modal2.hide()
                }}
              />
            </ModalHeader>
            <ModalBody>Hide this modal and show the first with the button below.</ModalBody>
            <ModalFooter>
              <Button
                bsJs={{ variant: 'primary' }}
                onClick={() => {
                  modal1.show()
                  modal2.hide()
                }}
              >
                Back to first
              </Button>
            </ModalFooter>
          </ModalContent>
        </ModalDialog>
      </Modal>
    </div>
  )
}

export const OptionalSizes: StoryFn = () => {
  const modalXl = useModal()
  const modalLg = useModal()
  const modalSm = useModal()

  return (
    <div>
      <BrElement bsJs={{ display: 'flex', spacing: { gap: '1' } }}>
        <Button bsJs={{ variant: 'primary' }} onClick={modalXl.toggle}>
          Extra large modal
        </Button>
        <Button bsJs={{ variant: 'primary' }} onClick={modalLg.toggle}>
          Large modal
        </Button>
        <Button bsJs={{ variant: 'primary' }} onClick={modalSm.toggle}>
          Small modal
        </Button>
      </BrElement>
      <Modal id="exampleModalXl" aria-labelledby="exampleModalXlLabel" brModal={modalXl}>
        <ModalDialog bsJs={{ modalSize: 'xl' }}>
          <ModalContent>
            <ModalHeader>
              <ModalTitle className="fs-4" id="exampleModalXlLabel">
                Extra large modal
              </ModalTitle>
              <CloseButton onClick={modalXl.hide} />
            </ModalHeader>
            <ModalBody>...</ModalBody>
          </ModalContent>
        </ModalDialog>
      </Modal>
      <Modal id="exampleModalLg" aria-labelledby="exampleModalLgLabel" brModal={modalLg}>
        <ModalDialog bsJs={{ modalSize: 'lg' }}>
          <ModalContent>
            <ModalHeader>
              <ModalTitle className="fs-4" id="exampleModalLgLabel">
                Large modal
              </ModalTitle>
              <CloseButton onClick={modalLg.hide} />
            </ModalHeader>
            <ModalBody>...</ModalBody>
          </ModalContent>
        </ModalDialog>
      </Modal>
      <Modal id="exampleModalSm" aria-labelledby="exampleModalSmLabel" brModal={modalSm}>
        <ModalDialog bsJs={{ modalSize: 'sm' }}>
          <ModalContent>
            <ModalHeader>
              <ModalTitle className="fs-4" id="exampleModalSmLabel">
                Small modal
              </ModalTitle>
              <CloseButton onClick={modalSm.hide} />
            </ModalHeader>
            <ModalBody>...</ModalBody>
          </ModalContent>
        </ModalDialog>
      </Modal>
    </div>
  )
}

export const FullscreenModal: StoryFn = () => {
  const modal = useModal()
  const [breakpoint, setBreakpoint] = useState<BootstrapDefaultBreakpoint | boolean>(true)

  function toggleForBreakpoint(breakpoint: BootstrapDefaultBreakpoint | boolean) {
    setBreakpoint(breakpoint)
    modal.toggle()
  }

  return (
    <div className="bd-example">
      <Button
        bsJs={{ variant: 'primary' }}
        onClick={() => {
          toggleForBreakpoint(true)
        }}
      >
        Full screen
      </Button>
      <Button
        bsJs={{ variant: 'primary' }}
        onClick={() => {
          toggleForBreakpoint('sm')
        }}
      >
        Full screen below sm
      </Button>
      <Button
        bsJs={{ variant: 'primary' }}
        onClick={() => {
          toggleForBreakpoint('md')
        }}
      >
        Full screen below md
      </Button>
      <Button
        bsJs={{ variant: 'primary' }}
        onClick={() => {
          toggleForBreakpoint('lg')
        }}
      >
        Full screen below lg
      </Button>
      <Button
        bsJs={{ variant: 'primary' }}
        onClick={() => {
          toggleForBreakpoint('xl')
        }}
      >
        Full screen below xl
      </Button>
      <Button
        bsJs={{ variant: 'primary' }}
        onClick={() => {
          toggleForBreakpoint('xxl')
        }}
      >
        Full screen below xxl
      </Button>
      <Modal
        id="exampleModalFullscreen"
        aria-labelledby="exampleModalFullscreenLabel"
        brModal={modal}
      >
        <ModalDialog bsJs={{ fullScreen: breakpoint }}>
          <ModalContent>
            <ModalHeader>
              <ModalTitle className="fs-4" id="exampleModalFullscreenLabel">
                Full screen modal
              </ModalTitle>
              <CloseButton onClick={modal.hide} />
            </ModalHeader>
            <ModalBody>...</ModalBody>
            <ModalFooter>
              <Button bsJs={{ variant: 'secondary' }} onClick={modal.hide}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </ModalDialog>
      </Modal>
    </div>
  )
}
