import { Meta, StoryFn } from '@storybook/react'
import { useOffcanvas } from './useOffcanvas'
import Offcanvas from './Offcanvas'
import Button from '../Button/Button'
import OffcanvasHeader from './OffcanvasHeader'
import OffcanvasTitle from './OffcanvasTitle'
import CloseButton from '../CloseButton/CloseButton'
import OffcanvasBody from './OffcanvasBody'
import Dropdown from '../Dropdown/Dropdown'
import DropdownToggle from '../Dropdown/DropdownToggle'
import { useDropdown } from '../Dropdown/useDropdown'
import DropdownMenu from '../Dropdown/DropdownMenu'
import DropdownItem from '../Dropdown/DropdownItem'
import Alert from '../Alert/Alert'
import { BrElement } from '../../utils/BrElement'

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
        brButtonColor="primary"
        href="#offcanvasExample"
        aria-controls="offcanvasExample"
        onClick={offcanvas.toggle}
      >
        Link with href
      </Button>
      <Button brButtonColor="primary" aria-controls="offcanvasExample" onClick={offcanvas.toggle}>
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
          <Dropdown brUtilsSpacing={{ margin: { top: '3' } }}>
            <DropdownToggle brButtonColor="secondary" ref={dropdown.dropdownRef}>
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
      <Button brButtonColor="primary" aria-controls="offcanvasScrolling" onClick={offcanvas.toggle}>
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
        brButtonColor="primary"
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
      <Button brButtonColor="primary" aria-controls="staticBackdrop" onClick={offcanvas.toggle}>
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
        brButtonColor="primary"
        brUtilsDisplay={{ lg: 'none' }}
        aria-controls="offcanvasResponsive"
        onClick={offcanvas.toggle}
      >
        Toggle offcanvas
      </Button>

      <Alert brUtilsDisplay={{ brAllBreakpoints: 'none', lg: 'block' }} className="alert-info">
        Resize your browser to show the responsive offcanvas toggle.
      </Alert>

      <Offcanvas
        id="offcanvasResponsive"
        aria-labelledby="offcanvasResponsiveLabel"
        brOffcanvas={offcanvas}
        brOffcanvasBreakpoint="lg"
        brOffcanvasPlacement="end"
      >
        <OffcanvasHeader>
          <OffcanvasTitle id="offcanvasResponsiveLabel">Responsive offcanvas</OffcanvasTitle>
          <CloseButton onClick={offcanvas.hide} />
        </OffcanvasHeader>
        <OffcanvasBody>
          <BrElement as="p" brUtilsSpacing={{ margin: { bottom: '0' } }}>
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
      <Button brButtonColor="primary" aria-controls="offcanvasTop" onClick={offcanvasTop.toggle}>
        Toggle top offcanvas
      </Button>

      <Offcanvas
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
        brOffcanvas={offcanvasTop}
        brOffcanvasPlacement="top"
      >
        <OffcanvasHeader>
          <OffcanvasTitle id="offcanvasTopLabel">Offcanvas top</OffcanvasTitle>
          <CloseButton onClick={offcanvasTop.hide} />
        </OffcanvasHeader>
        <OffcanvasBody>...</OffcanvasBody>
      </Offcanvas>
      <hr />
      <Button brButtonColor="primary" aria-controls="offcanvasEnd" onClick={offcanvasEnd.toggle}>
        Toggle right offcanvas
      </Button>

      <Offcanvas
        id="offcanvasEnd"
        aria-labelledby="offcanvasEndLabel"
        brOffcanvas={offcanvasEnd}
        brOffcanvasPlacement="end"
      >
        <OffcanvasHeader>
          <OffcanvasTitle id="offcanvasEndLabel">Offcanvas right</OffcanvasTitle>
          <CloseButton onClick={offcanvasEnd.hide} />
        </OffcanvasHeader>
        <OffcanvasBody>...</OffcanvasBody>
      </Offcanvas>
      <hr />
      <Button
        brButtonColor="primary"
        aria-controls="offcanvasBottom"
        onClick={offcanvasBottom.toggle}
      >
        Toggle bottom offcanvas
      </Button>

      <Offcanvas
        id="offcanvasBottom"
        aria-labelledby="offcanvasBottomLabel"
        brOffcanvas={offcanvasBottom}
        brOffcanvasPlacement="bottom"
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
