import { Meta, StoryFn } from '@storybook/react'

import { BrElement } from '../../utils/BrElement'
import Alert from '../Alert/Alert'
import Button from '../Button/Button'
import CloseButton from '../CloseButton/CloseButton'
import Dropdown from '../Dropdown/Dropdown'
import DropdownItem from '../Dropdown/DropdownItem'
import DropdownMenu from '../Dropdown/DropdownMenu'
import DropdownToggle from '../Dropdown/DropdownToggle'
import { useDropdown } from '../Dropdown/useDropdown'

import Offcanvas from './Offcanvas'
import OffcanvasBody from './OffcanvasBody'
import OffcanvasHeader from './OffcanvasHeader'
import OffcanvasTitle from './OffcanvasTitle'
import { useOffcanvas } from './useOffcanvas'

const meta: Meta = {
  title: 'Offcanvas',
  tags: ['autodocs']
}

export default meta

export const LiveDemo: StoryFn = () => {
  const offcanvas = useOffcanvas()
  const dropdown = useDropdown()

  return (
    <div className="bd-example">
      <Button
        as="a"
        bsJs={{ variant: 'primary' }}
        href="#offcanvasExample"
        aria-controls="offcanvasExample"
        onClick={offcanvas.toggle}
      >
        Link with href
      </Button>
      <Button
        bsJs={{ variant: 'primary' }}
        aria-controls="offcanvasExample"
        onClick={offcanvas.toggle}
      >
        Button
      </Button>

      <Offcanvas
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
        brOffcanvas={offcanvas}
      >
        <OffcanvasHeader>
          <OffcanvasTitle id="offcanvasExampleLabel">Offcanvas</OffcanvasTitle>
          <CloseButton onClick={offcanvas.hide} />
        </OffcanvasHeader>
        <OffcanvasBody>
          <div>
            Some text as placeholder. In real life you can have the elements you have chosen. Like,
            text, images, lists, etc.
          </div>
          <Dropdown bsJs={{ spacing: { margin: { top: '3' } } }}>
            <DropdownToggle bsJs={{ variant: 'secondary' }} ref={dropdown.dropdownRef}>
              Dropdown button
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="#">Action</DropdownItem>
              <DropdownItem href="#">Another action</DropdownItem>
              <DropdownItem href="#">Something else here</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  )
}

export const BodyScrolling: StoryFn = () => {
  const offcanvas = useOffcanvas({ bootstrapOffcanvas: { scroll: true, backdrop: false } })

  return (
    <div>
      <Button
        bsJs={{ variant: 'primary' }}
        aria-controls="offcanvasScrolling"
        onClick={offcanvas.toggle}
      >
        Enable body scrolling
      </Button>

      <Offcanvas
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
        brOffcanvas={offcanvas}
      >
        <OffcanvasHeader>
          <OffcanvasTitle id="offcanvasScrollingLabel">
            Offcanvas with body scrolling
          </OffcanvasTitle>
          <CloseButton onClick={offcanvas.hide} />
        </OffcanvasHeader>
        <OffcanvasBody>
          <p>Try scrolling the rest of the page to see this option in action.</p>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  )
}

export const BodyScrollingAndBackdrop: StoryFn = () => {
  const offcanvas = useOffcanvas({ bootstrapOffcanvas: { scroll: true } })

  return (
    <div>
      <Button
        bsJs={{ variant: 'primary' }}
        aria-controls="offcanvasWithBothOptions"
        onClick={offcanvas.toggle}
      >
        Enable both scrolling & backdrop
      </Button>

      <Offcanvas
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
        brOffcanvas={offcanvas}
      >
        <OffcanvasHeader>
          <OffcanvasTitle id="offcanvasWithBothOptionsLabel">
            Backdrop with scrolling
          </OffcanvasTitle>
          <CloseButton onClick={offcanvas.hide} />
        </OffcanvasHeader>
        <OffcanvasBody>
          <p>Try scrolling the rest of the page to see this option in action.</p>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  )
}

export const StaticBackdrop: StoryFn = () => {
  const offcanvas = useOffcanvas({ bootstrapOffcanvas: { backdrop: 'static' } })

  return (
    <div>
      <Button
        bsJs={{ variant: 'primary' }}
        aria-controls="staticBackdrop"
        onClick={offcanvas.toggle}
      >
        Toggle static offcanvas
      </Button>

      <Offcanvas id="staticBackdrop" aria-labelledby="staticBackdropLabel" brOffcanvas={offcanvas}>
        <OffcanvasHeader>
          <OffcanvasTitle id="staticBackdropLabel">Offcanvas</OffcanvasTitle>
          <CloseButton onClick={offcanvas.hide} />
        </OffcanvasHeader>
        <OffcanvasBody>
          <div>I will not close if you click outside of me.</div>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  )
}

export const Responsive: StoryFn = () => {
  const offcanvas = useOffcanvas()

  return (
    <div>
      <Button
        bsJs={{ variant: 'primary', breakpoints: { lg: { display: 'none' } } }}
        aria-controls="offcanvasResponsive"
        onClick={offcanvas.toggle}
      >
        Toggle offcanvas
      </Button>

      <Alert bsJs={{ variant: 'info', display: 'none', breakpoints: { lg: { display: 'block' } } }}>
        Resize your browser to show the responsive offcanvas toggle.
      </Alert>

      <Offcanvas
        id="offcanvasResponsive"
        aria-labelledby="offcanvasResponsiveLabel"
        brOffcanvas={offcanvas}
        bsJs={{ onCanvas: 'lg', placement: 'end' }}
      >
        <OffcanvasHeader>
          <OffcanvasTitle id="offcanvasResponsiveLabel">Responsive offcanvas</OffcanvasTitle>
          <CloseButton onClick={offcanvas.hide} />
        </OffcanvasHeader>
        <OffcanvasBody>
          <BrElement as="p" bsJs={{ spacing: { margin: { bottom: '0' } } }}>
            This is content within an <code>.offcanvas-lg</code>.
          </BrElement>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  )
}

export const Placement: StoryFn = () => {
  const offcanvasTop = useOffcanvas()
  const offcanvasEnd = useOffcanvas()
  const offcanvasBottom = useOffcanvas()

  return (
    <div>
      <Button
        bsJs={{ variant: 'primary' }}
        aria-controls="offcanvasTop"
        onClick={offcanvasTop.toggle}
      >
        Toggle top offcanvas
      </Button>

      <Offcanvas
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
        brOffcanvas={offcanvasTop}
        bsJs={{ placement: 'top' }}
      >
        <OffcanvasHeader>
          <OffcanvasTitle id="offcanvasTopLabel">Offcanvas top</OffcanvasTitle>
          <CloseButton onClick={offcanvasTop.hide} />
        </OffcanvasHeader>
        <OffcanvasBody>...</OffcanvasBody>
      </Offcanvas>
      <hr />
      <Button
        bsJs={{ variant: 'primary' }}
        aria-controls="offcanvasEnd"
        onClick={offcanvasEnd.toggle}
      >
        Toggle right offcanvas
      </Button>

      <Offcanvas
        id="offcanvasEnd"
        aria-labelledby="offcanvasEndLabel"
        brOffcanvas={offcanvasEnd}
        bsJs={{ placement: 'end' }}
      >
        <OffcanvasHeader>
          <OffcanvasTitle id="offcanvasEndLabel">Offcanvas right</OffcanvasTitle>
          <CloseButton onClick={offcanvasEnd.hide} />
        </OffcanvasHeader>
        <OffcanvasBody>...</OffcanvasBody>
      </Offcanvas>
      <hr />
      <Button
        bsJs={{ variant: 'primary' }}
        aria-controls="offcanvasBottom"
        onClick={offcanvasBottom.toggle}
      >
        Toggle bottom offcanvas
      </Button>

      <Offcanvas
        id="offcanvasBottom"
        aria-labelledby="offcanvasBottomLabel"
        brOffcanvas={offcanvasBottom}
        bsJs={{ placement: 'bottom' }}
      >
        <OffcanvasHeader>
          <OffcanvasTitle id="offcanvasBottomLabel">Offcanvas bottom</OffcanvasTitle>
          <CloseButton onClick={offcanvasBottom.hide} />
        </OffcanvasHeader>
        <OffcanvasBody>...</OffcanvasBody>
      </Offcanvas>
    </div>
  )
}
