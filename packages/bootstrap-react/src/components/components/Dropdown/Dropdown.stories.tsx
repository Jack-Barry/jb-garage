import type { Meta, StoryFn } from '@storybook/react'

import { as } from '../../../storybook/utils'
import FormCheck from '../../forms/FormCheck/FormCheck'
import FormControl from '../../forms/FormControl/FormControl'
import { BrElement } from '../../utils/BrElement'
import Button from '../Button/Button'
import ButtonGroup from '../Button/ButtonGroup'

import Dropdown from './Dropdown'
import DropdownDivider from './DropdownDivider'
import DropdownHeader from './DropdownHeader'
import DropdownItem from './DropdownItem'
import DropdownMenu from './DropdownMenu'
import DropdownToggle from './DropdownToggle'
import { useDropdown } from './useDropdown'

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: { as }
}

export default meta
export const SingleButton: StoryFn = () => {
  const { dropdownRef: dropdownRef1, isOpen: isOpen1 } = useDropdown()
  const { dropdownRef: dropdownRef2, isOpen: isOpen2 } = useDropdown<HTMLAnchorElement>()
  const { dropdownRef: dropdownRef3, isOpen: isOpen3 } = useDropdown()

  return (
    <div>
      <div style={{ minHeight: '150px' }}>
        <Dropdown>
          <DropdownToggle
            bsJs={{ bsJsAll: { button: { color: 'secondary' } } }}
            ref={dropdownRef1}
            aria-expanded={isOpen1}
          >
            Dropdown button
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#">Action</DropdownItem>
            <DropdownItem href="#">Another action</DropdownItem>
            <DropdownItem href="#">Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <hr />
      <div style={{ minHeight: '150px' }}>
        <Dropdown>
          <DropdownToggle
            as="a"
            bsJs={{ bsJsAll: { button: { color: 'secondary' } } }}
            href="#"
            role="button"
            ref={dropdownRef2}
            aria-expanded={isOpen2}
          >
            Dropdown link
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#">Action</DropdownItem>
            <DropdownItem href="#">Another action</DropdownItem>
            <DropdownItem href="#">Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <hr />
      <div className="bd-example" style={{ minHeight: '250px' }}>
        <ButtonGroup>
          <DropdownToggle
            bsJs={{ bsJsAll: { button: { color: 'primary' } } }}
            ref={dropdownRef3}
            aria-expanded={isOpen3}
          >
            Primary
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#">Action</DropdownItem>
            <DropdownItem href="#">Another action</DropdownItem>
            <DropdownItem href="#">Something else here</DropdownItem>
            <DropdownDivider />
            <DropdownItem href="#">Separated link</DropdownItem>
          </DropdownMenu>
        </ButtonGroup>
        <DropdownVariantExample variant="secondary" />
        <DropdownVariantExample variant="success" />
        <DropdownVariantExample variant="info" />
        <DropdownVariantExample variant="warning" />
        <DropdownVariantExample variant="danger" />
      </div>
    </div>
  )
}

function DropdownVariantExample(props: { variant: string }) {
  const { variant } = props

  const { isOpen, dropdownRef } = useDropdown()

  return (
    <ButtonGroup>
      <DropdownToggle
        bsJs={{ bsJsAll: { button: { color: variant } } }}
        ref={dropdownRef}
        aria-expanded={isOpen}
      >
        {variant[0].toUpperCase() + variant.slice(1)}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem href="#">Action</DropdownItem>
        <DropdownItem href="#">Another action</DropdownItem>
        <DropdownItem href="#">Something else here</DropdownItem>
        <DropdownDivider />
        <DropdownItem href="#">Separated link</DropdownItem>
      </DropdownMenu>
    </ButtonGroup>
  )
}

export const SplitButton: StoryFn = () => {
  const { dropdownRef, isOpen } = useDropdown()

  return (
    <div className="bd-example" style={{ minHeight: '150px' }}>
      <ButtonGroup>
        <Button bsJs={{ bsJsAll: { button: { color: 'primary' } } }}>Action</Button>
        <DropdownToggle
          bsJs={{ bsJsAll: { button: { color: 'primary' } } }}
          ref={dropdownRef}
          aria-expanded={isOpen}
          brDropdownToggleSplit
        />
        <DropdownMenu>
          <DropdownItem href="#">Action</DropdownItem>
          <DropdownItem href="#">Another action</DropdownItem>
          <DropdownItem href="#">Something else here</DropdownItem>
        </DropdownMenu>
      </ButtonGroup>
      <DropdownSplitButtonExample variant="secondary" />
      <DropdownSplitButtonExample variant="success" />
      <DropdownSplitButtonExample variant="info" />
      <DropdownSplitButtonExample variant="warning" />
      <DropdownSplitButtonExample variant="danger" />
    </div>
  )
}

function DropdownSplitButtonExample(props: { variant: string }) {
  const { variant } = props

  const { isOpen, dropdownRef } = useDropdown()

  return (
    <ButtonGroup>
      <Button bsJs={{ bsJsAll: { button: { color: variant } } }}>
        {variant[0].toUpperCase() + variant.slice(1)}
      </Button>
      <DropdownToggle
        bsJs={{ bsJsAll: { button: { color: variant } } }}
        ref={dropdownRef}
        aria-expanded={isOpen}
        brDropdownToggleSplit
      />
      <DropdownMenu>
        <DropdownItem href="#">Action</DropdownItem>
        <DropdownItem href="#">Another action</DropdownItem>
        <DropdownItem href="#">Something else here</DropdownItem>
      </DropdownMenu>
    </ButtonGroup>
  )
}
export const Sizing: StoryFn = () => {
  const { isOpen: isOpen1, dropdownRef: dropdownRef1 } = useDropdown()
  const { isOpen: isOpen2, dropdownRef: dropdownRef2 } = useDropdown()
  const { isOpen: isOpen3, dropdownRef: dropdownRef3 } = useDropdown()
  const { isOpen: isOpen4, dropdownRef: dropdownRef4 } = useDropdown()

  return (
    <div>
      <div className="bd-example" style={{ minHeight: '250px' }}>
        <ButtonGroup>
          <DropdownToggle
            bsJs={{ bsJsAll: { button: { color: 'secondary', size: 'lg' } } }}
            ref={dropdownRef1}
            aria-expanded={isOpen1}
          >
            Large button
          </DropdownToggle>
          <DropdownMenuWithSeparatedLink />
        </ButtonGroup>
        <ButtonGroup>
          <Button bsJs={{ bsJsAll: { button: { color: 'secondary', size: 'lg' } } }}>
            Large split button
          </Button>
          <DropdownToggle
            bsJs={{ bsJsAll: { button: { color: 'secondary', size: 'lg' } } }}
            ref={dropdownRef2}
            aria-expanded={isOpen2}
            brDropdownToggleSplit
          />
          <DropdownMenuWithSeparatedLink />
        </ButtonGroup>
      </div>
      <div className="bd-example" style={{ minHeight: '250px' }}>
        <ButtonGroup>
          <DropdownToggle
            bsJs={{ bsJsAll: { button: { color: 'secondary', size: 'sm' } } }}
            ref={dropdownRef3}
            aria-expanded={isOpen3}
          >
            Small button
          </DropdownToggle>
          <DropdownMenuWithSeparatedLink />
        </ButtonGroup>
        <ButtonGroup>
          <Button bsJs={{ bsJsAll: { button: { color: 'secondary', size: 'sm' } } }}>
            Small split button
          </Button>
          <DropdownToggle
            bsJs={{ bsJsAll: { button: { color: 'secondary', size: 'sm' } } }}
            ref={dropdownRef4}
            aria-expanded={isOpen4}
            brDropdownToggleSplit
          />
          <DropdownMenuWithSeparatedLink />
        </ButtonGroup>
      </div>
    </div>
  )
}

function DropdownMenuWithSeparatedLink() {
  return (
    <DropdownMenu>
      <DropdownItem href="#">Action</DropdownItem>
      <DropdownItem href="#">Another action</DropdownItem>
      <DropdownItem href="#">Something else here</DropdownItem>
      <DropdownDivider />
      <DropdownItem href="#">Separated link</DropdownItem>
    </DropdownMenu>
  )
}

export const DirectionsCentered: StoryFn = () => {
  const { isOpen, dropdownRef } = useDropdown()

  return (
    <div style={{ minHeight: '150px' }}>
      <div className="dropdown-center">
        <DropdownToggle
          bsJs={{ bsJsAll: { button: { color: 'secondary' } } }}
          ref={dropdownRef}
          aria-expanded={isOpen}
        >
          Centered dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="#">Action</DropdownItem>
          <DropdownItem href="#">Action two</DropdownItem>
          <DropdownItem href="#">Action three</DropdownItem>
        </DropdownMenu>
      </div>
    </div>
  )
}

export const DirectionsDropup: StoryFn = () => {
  const { isOpen: isOpen1, dropdownRef: dropdownRef1 } = useDropdown()
  const { isOpen: isOpen2, dropdownRef: dropdownRef2 } = useDropdown()

  return (
    <div className="bd-example" style={{ paddingTop: '150px' }}>
      <ButtonGroup className="dropup">
        <DropdownToggle
          bsJs={{ bsJsAll: { button: { color: 'secondary' } } }}
          ref={dropdownRef1}
          aria-expanded={isOpen1}
        >
          Dropup
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="#">Action</DropdownItem>
          <DropdownItem href="#">Action two</DropdownItem>
          <DropdownItem href="#">Action three</DropdownItem>
        </DropdownMenu>
      </ButtonGroup>
      <ButtonGroup className="dropup">
        <Button bsJs={{ bsJsAll: { button: { color: 'secondary' } } }}>Split dropup</Button>
        <DropdownToggle
          bsJs={{ bsJsAll: { button: { color: 'secondary' } } }}
          ref={dropdownRef2}
          aria-expanded={isOpen2}
          brDropdownToggleSplit
        />
        <DropdownMenu>
          <DropdownItem href="#">Action</DropdownItem>
          <DropdownItem href="#">Action two</DropdownItem>
          <DropdownItem href="#">Action three</DropdownItem>
        </DropdownMenu>
      </ButtonGroup>
    </div>
  )
}

export const DropupCentered: StoryFn = () => {
  const { isOpen, dropdownRef } = useDropdown()

  return (
    <div style={{ paddingTop: '150px' }}>
      <div className="dropup dropdup-center">
        <DropdownToggle
          bsJs={{ bsJsAll: { button: { color: 'secondary' } } }}
          ref={dropdownRef}
          aria-expanded={isOpen}
        >
          Centered dropup
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="#">Action</DropdownItem>
          <DropdownItem href="#">Action two</DropdownItem>
          <DropdownItem href="#">Action three</DropdownItem>
        </DropdownMenu>
      </div>
    </div>
  )
}

export const Dropend: StoryFn = () => {
  const { isOpen: isOpen1, dropdownRef: dropdownRef1 } = useDropdown()
  const { isOpen: isOpen2, dropdownRef: dropdownRef2 } = useDropdown()

  return (
    <div className="bd-example" style={{ minHeight: '150px' }}>
      <ButtonGroup className="dropend">
        <DropdownToggle
          bsJs={{ bsJsAll: { button: { color: 'secondary' } } }}
          ref={dropdownRef1}
          aria-expanded={isOpen1}
        >
          Dropend
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="#">Action</DropdownItem>
          <DropdownItem href="#">Action two</DropdownItem>
          <DropdownItem href="#">Action three</DropdownItem>
        </DropdownMenu>
      </ButtonGroup>
      <ButtonGroup className="dropend">
        <Button bsJs={{ bsJsAll: { button: { color: 'secondary' } } }}>Split dropend</Button>
        <DropdownToggle
          bsJs={{ bsJsAll: { button: { color: 'secondary' } } }}
          ref={dropdownRef2}
          aria-expanded={isOpen2}
          brDropdownToggleSplit
        />
        <DropdownMenu>
          <DropdownItem href="#">Action</DropdownItem>
          <DropdownItem href="#">Action two</DropdownItem>
          <DropdownItem href="#">Action three</DropdownItem>
        </DropdownMenu>
      </ButtonGroup>
    </div>
  )
}

export const Dropstart: StoryFn = () => {
  const { isOpen: isOpen1, dropdownRef: dropdownRef1 } = useDropdown()
  const { isOpen: isOpen2, dropdownRef: dropdownRef2 } = useDropdown()

  return (
    <div className="bd-example" style={{ paddingLeft: '150px', minHeight: '150px' }}>
      <ButtonGroup className="dropstart">
        <DropdownToggle
          bsJs={{ bsJsAll: { button: { color: 'secondary' } } }}
          ref={dropdownRef1}
          aria-expanded={isOpen1}
        >
          Dropstart
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="#">Action</DropdownItem>
          <DropdownItem href="#">Action two</DropdownItem>
          <DropdownItem href="#">Action three</DropdownItem>
        </DropdownMenu>
      </ButtonGroup>
      <ButtonGroup className="dropstart">
        <DropdownToggle
          bsJs={{ bsJsAll: { button: { color: 'secondary' } } }}
          ref={dropdownRef2}
          aria-expanded={isOpen2}
          brDropdownToggleSplit
        />
        <DropdownMenu>
          <DropdownItem href="#">Action</DropdownItem>
          <DropdownItem href="#">Action two</DropdownItem>
          <DropdownItem href="#">Action three</DropdownItem>
        </DropdownMenu>
        <Button bsJs={{ bsJsAll: { button: { color: 'secondary' } } }}>Split dropstart</Button>
      </ButtonGroup>
    </div>
  )
}

export const MenuItems: StoryFn = () => {
  const { isOpen, dropdownRef } = useDropdown()

  return (
    <div className="bd-example">
      <div style={{ minHeight: '175px' }}>
        <Dropdown>
          <DropdownToggle
            bsJs={{ bsJsAll: { button: { color: 'secondary' } } }}
            ref={dropdownRef}
            aria-expanded={isOpen}
          >
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem as="button">Action</DropdownItem>
            <DropdownItem as="button">Another action</DropdownItem>
            <DropdownItem as="button">Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <DropdownMenu>
        <DropdownItem as="span" brDropdownItemInteractive={false}>
          Dropdown item text
        </DropdownItem>
        <DropdownItem href="#">Action</DropdownItem>
        <DropdownItem href="#">Another action</DropdownItem>
        <DropdownItem href="#">Something else here</DropdownItem>
      </DropdownMenu>
    </div>
  )
}

export const Active: StoryFn = () => {
  return (
    <div className="bd-example">
      <DropdownMenu>
        <DropdownItem href="#">Regular link</DropdownItem>
        <DropdownItem href="#" brDropdownItemActive arria-current="true">
          Active link
        </DropdownItem>
        <DropdownItem href="#">Another link</DropdownItem>
      </DropdownMenu>
    </div>
  )
}

export const Disabled: StoryFn = () => {
  return (
    <div className="bd-example">
      <DropdownMenu>
        <DropdownItem href="#">Regular link</DropdownItem>
        <DropdownItem brDropdownItemDisabled>Disabled link</DropdownItem>
        <DropdownItem href="#">Another link</DropdownItem>
      </DropdownMenu>
    </div>
  )
}

export const MenuAlignment: StoryFn = () => {
  const { isOpen, dropdownRef } = useDropdown()

  return (
    <div className="bd-example" style={{ minHeight: '200px' }}>
      <ButtonGroup>
        <DropdownToggle
          bsJs={{ bsJsAll: { button: { color: 'secondary' } } }}
          ref={dropdownRef}
          aria-expanded={isOpen}
        >
          Right-aligned menu example
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          <DropdownItem as="button">Action</DropdownItem>
          <DropdownItem as="button">Another action</DropdownItem>
          <DropdownItem as="button">Something else here</DropdownItem>
        </DropdownMenu>
      </ButtonGroup>
    </div>
  )
}

export const ResponsiveAlignment: StoryFn = () => {
  const { isOpen, dropdownRef } = useDropdown()

  return (
    <div className="bd-example">
      <div style={{ minHeight: '200px' }}>
        <ButtonGroup>
          <DropdownToggle
            bsJs={{ bsJsAll: { button: { color: 'secondary' } } }}
            data-bs-display="static"
            ref={dropdownRef}
            aria-expanded={isOpen}
          >
            Left-aligned but right aligned when large screen
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-lg-end">
            <DropdownItem as="button">Action</DropdownItem>
            <DropdownItem as="button">Another action</DropdownItem>
            <DropdownItem as="button">Something else here</DropdownItem>
          </DropdownMenu>
        </ButtonGroup>
      </div>
      <hr />
      <div style={{ minHeight: '200px' }}>
        <ButtonGroup>
          <DropdownToggle
            bsJs={{ bsJsAll: { button: { color: 'secondary' } } }}
            data-bs-display="static"
            ref={dropdownRef}
            aria-expanded={isOpen}
          >
            Right-aligned but left aligned when large screen
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-lg-start">
            <DropdownItem as="button">Action</DropdownItem>
            <DropdownItem as="button">Another action</DropdownItem>
            <DropdownItem as="button">Something else here</DropdownItem>
          </DropdownMenu>
        </ButtonGroup>
      </div>
    </div>
  )
}

export const MenuContent: StoryFn = () => {
  return (
    <div className="bd-example">
      <DropdownMenu>
        <DropdownHeader>Dropdown header</DropdownHeader>
        <DropdownItem href="#">Action</DropdownItem>
        <DropdownItem href="#">Another action</DropdownItem>
      </DropdownMenu>
    </div>
  )
}

export const Dividers: StoryFn = () => {
  return (
    <div className="bd-example">
      <DropdownMenu>
        <DropdownItem href="#">Action</DropdownItem>
        <DropdownItem href="#">Another action</DropdownItem>
        <DropdownItem href="#">Something else here</DropdownItem>
        <DropdownDivider />
        <DropdownItem href="#">Separated link</DropdownItem>
      </DropdownMenu>
    </div>
  )
}

export const Text: StoryFn = () => {
  return (
    <div className="bd-example">
      <DropdownMenu
        bsJs={{ bsJsAll: { color: 'body-secondary', spacing: { padding: '3' } } }}
        style={{ maxWidth: '200px' }}
      >
        <p>Some example text that's free-flowing within the dropdown menu.</p>
        <BrElement as="p" bsJs={{ bsJsAll: { spacing: { margin: { bottom: '0' } } } }}>
          And this is more example text.
        </BrElement>
      </DropdownMenu>
    </div>
  )
}

export const Forms: StoryFn = () => {
  return (
    <div className="bd-example">
      <DropdownMenu>
        <BrElement as="form" bsJs={{ bsJsAll: { spacing: { padding: { x: '4', y: '3' } } } }}>
          <FormControl
            brFormControlWrapperProps={{
              bsJs: { bsJsAll: { spacing: { margin: { bottom: 3 } } } }
            }}
            brFormControlInputProps={{
              type: 'email',
              id: 'exampleDropdownFormEmail1',
              placeholder: 'email@example.com'
            }}
            brFormControlLabelProps={{
              children: 'Email address'
            }}
          />
          <FormControl
            brFormControlWrapperProps={{
              bsJs: { bsJsAll: { spacing: { margin: { bottom: 3 } } } }
            }}
            brFormControlInputProps={{
              type: 'password',
              id: 'exampleDropdownFormPassword1',
              placeholder: 'Password'
            }}
            brFormControlLabelProps={{
              children: 'Password'
            }}
          />
          <FormCheck
            brFormCheckWrapperProps={{
              bsJs: { bsJsAll: { spacing: { margin: { bottom: 3 } } } }
            }}
            brFormCheckInputProps={{ id: 'dropdownCheck1' }}
            brFormCheckLabelProps={{ children: 'Remember me' }}
          />
          <Button type="submit" bsJs={{ bsJsAll: { button: { color: 'primary' } } }}>
            Sign in
          </Button>
        </BrElement>
        <DropdownDivider />
        <DropdownItem brDropdownItemWrapperAs={null} href="#">
          New around here? Sign up
        </DropdownItem>
        <DropdownItem brDropdownItemWrapperAs={null} href="#">
          Forgot password?
        </DropdownItem>
      </DropdownMenu>
      <hr />
      <div style={{ minHeight: '320px' }}>
        <Dropdown>
          <DropdownToggle bsJs={{ bsJsAll: { button: { color: 'primary' } } }}>
            Dropdown form
          </DropdownToggle>
          <DropdownMenu as="form" bsJs={{ bsJsAll: { spacing: { padding: '4' } } }}>
            <FormControl
              brFormControlWrapperProps={{
                bsJs: { bsJsAll: { spacing: { margin: { bottom: 3 } } } }
              }}
              brFormControlInputProps={{
                type: 'email',
                id: 'exampleDropdownFormEmail2',
                placeholder: 'email@example.com'
              }}
              brFormControlLabelProps={{
                children: 'Email address'
              }}
            />
            <FormControl
              brFormControlWrapperProps={{
                bsJs: { bsJsAll: { spacing: { margin: { bottom: 3 } } } }
              }}
              brFormControlInputProps={{
                type: 'password',
                id: 'exampleDropdownFormPassword2',
                placeholder: 'Password'
              }}
              brFormControlLabelProps={{
                children: 'Password'
              }}
            />
            <FormCheck
              brFormCheckWrapperProps={{
                bsJs: { bsJsAll: { spacing: { margin: { bottom: 3 } } } }
              }}
              brFormCheckInputProps={{ id: 'dropdownCheck2' }}
              brFormCheckLabelProps={{ children: 'Remember me' }}
            />
            <Button type="submit" bsJs={{ bsJsAll: { button: { color: 'primary' } } }}>
              Sign in
            </Button>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  )
}

export const DropdownOptions: StoryFn = () => {
  const { isOpen: isOpen1, dropdownRef: dropdownRef1 } = useDropdown({
    constructorOptions: { offset: [10, 20] }
  })
  const { isOpen: isOpen2, dropdownRef: dropdownRef2 } = useDropdown({
    constructorOptions: { reference: 'parent' }
  })

  return (
    <div className="bd-example" style={{ minHeight: '220px' }}>
      <BrElement bsJs={{ bsJsAll: { display: 'flex' } }}>
        <Dropdown bsJs={{ bsJsAll: { spacing: { margin: { end: '1' } } } }}>
          <DropdownToggle
            bsJs={{ bsJsAll: { button: { color: 'secondary' } } }}
            ref={dropdownRef1}
            aria-expanded={isOpen1}
          >
            Offset
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#">Action</DropdownItem>
            <DropdownItem href="#">Another ction</DropdownItem>
            <DropdownItem href="#">Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <ButtonGroup>
          <Button bsJs={{ bsJsAll: { button: { color: 'secondary' } } }}>Reference</Button>
          <DropdownToggle
            bsJs={{ bsJsAll: { button: { color: 'secondary' } } }}
            ref={dropdownRef2}
            aria-expanded={isOpen2}
            brDropdownToggleSplit
          />
          <DropdownMenu>
            <DropdownItem href="#">Action</DropdownItem>
            <DropdownItem href="#">Another ction</DropdownItem>
            <DropdownItem href="#">Something else here</DropdownItem>
            <DropdownDivider />
            <DropdownItem href="#">Separated link</DropdownItem>
          </DropdownMenu>
        </ButtonGroup>
      </BrElement>
    </div>
  )
}

export const AutoCloseBehavior: StoryFn = () => {
  const { isOpen: isOpen1, dropdownRef: dropdownRef1 } = useDropdown({
    constructorOptions: { autoClose: true }
  })
  const { isOpen: isOpen2, dropdownRef: dropdownRef2 } = useDropdown({
    constructorOptions: { autoClose: 'inside' }
  })
  const { isOpen: isOpen3, dropdownRef: dropdownRef3 } = useDropdown({
    constructorOptions: { autoClose: 'outside' }
  })
  const { isOpen: isOpen4, dropdownRef: dropdownRef4 } = useDropdown({
    constructorOptions: { autoClose: false }
  })

  return (
    <div className="bd-example" style={{ minHeight: '200px' }}>
      <ButtonGroup>
        <DropdownToggle
          bsJs={{ bsJsAll: { button: { color: 'secondary' } } }}
          ref={dropdownRef1}
          aria-expanded={isOpen1}
        >
          Default dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="#">Menu item</DropdownItem>
          <DropdownItem href="#">Menu item</DropdownItem>
          <DropdownItem href="#">Menu item</DropdownItem>
        </DropdownMenu>
      </ButtonGroup>
      <ButtonGroup>
        <DropdownToggle
          bsJs={{ bsJsAll: { button: { color: 'secondary' } } }}
          ref={dropdownRef2}
          aria-expanded={isOpen2}
        >
          Clickable inside
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="#">Menu item</DropdownItem>
          <DropdownItem href="#">Menu item</DropdownItem>
          <DropdownItem href="#">Menu item</DropdownItem>
        </DropdownMenu>
      </ButtonGroup>
      <ButtonGroup>
        <DropdownToggle
          bsJs={{ bsJsAll: { button: { color: 'secondary' } } }}
          ref={dropdownRef3}
          aria-expanded={isOpen3}
        >
          Clickable outside
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="#">Menu item</DropdownItem>
          <DropdownItem href="#">Menu item</DropdownItem>
          <DropdownItem href="#">Menu item</DropdownItem>
        </DropdownMenu>
      </ButtonGroup>
      <ButtonGroup>
        <DropdownToggle
          bsJs={{ bsJsAll: { button: { color: 'secondary' } } }}
          ref={dropdownRef4}
          aria-expanded={isOpen4}
        >
          Manual close
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="#">Menu item</DropdownItem>
          <DropdownItem href="#">Menu item</DropdownItem>
          <DropdownItem href="#">Menu item</DropdownItem>
        </DropdownMenu>
      </ButtonGroup>
    </div>
  )
}
