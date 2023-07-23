import type { Meta, StoryFn } from '@storybook/react'

import { as } from '../../../storybook/utils'
import Dropdown from './Dropdown'
import { useDropdown } from './useDropdown'
import DropdownMenu from './DropdownMenu'
import DropdownItem from './DropdownItem'
import ButtonGroup from '../Button/ButtonGroup'
import DropdownDivider from './DropdownDivider'
import DropdownToggle from './DropdownToggle'
import Button from '../Button/Button'
import DropdownHeader from './DropdownHeader'
import FormControl from '../../forms/FormControl/FormControl'
import FormCheck from '../../forms/FormCheck/FormCheck'
import { BrElement } from '../../utils/BrElement'

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
          <DropdownToggle brVariant="secondary" ref={dropdownRef1} aria-expanded={isOpen1}>
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
            brVariant="secondary"
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
          <DropdownToggle brVariant="primary" ref={dropdownRef3} aria-expanded={isOpen3}>
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
      <DropdownToggle brVariant={variant} ref={dropdownRef} aria-expanded={isOpen}>
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
        <Button brVariant="primary">Action</Button>
        <DropdownToggle
          brVariant="primary"
          ref={dropdownRef}
          aria-expanded={isOpen}
          brSplitToggle
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
      <Button brVariant={variant}>{variant[0].toUpperCase() + variant.slice(1)}</Button>
      <DropdownToggle brVariant={variant} ref={dropdownRef} aria-expanded={isOpen} brSplitToggle />
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
          <DropdownToggle brVariant="secondary" brLg ref={dropdownRef1} aria-expanded={isOpen1}>
            Large button
          </DropdownToggle>
          <DropdownMenuWithSeparatedLink />
        </ButtonGroup>
        <ButtonGroup>
          <Button brVariant="secondary" brLg>
            Large split button
          </Button>
          <DropdownToggle
            brVariant="secondary"
            brLg
            ref={dropdownRef2}
            aria-expanded={isOpen2}
            brSplitToggle
          />
          <DropdownMenuWithSeparatedLink />
        </ButtonGroup>
      </div>
      <div className="bd-example" style={{ minHeight: '250px' }}>
        <ButtonGroup>
          <DropdownToggle brVariant="secondary" brSm ref={dropdownRef3} aria-expanded={isOpen3}>
            Small button
          </DropdownToggle>
          <DropdownMenuWithSeparatedLink />
        </ButtonGroup>
        <ButtonGroup>
          <Button brVariant="secondary" brSm>
            Small split button
          </Button>
          <DropdownToggle
            brVariant="secondary"
            brSm
            ref={dropdownRef4}
            aria-expanded={isOpen4}
            brSplitToggle
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
        <DropdownToggle brVariant="secondary" ref={dropdownRef} aria-expanded={isOpen}>
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
        <DropdownToggle brVariant="secondary" ref={dropdownRef1} aria-expanded={isOpen1}>
          Dropup
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="#">Action</DropdownItem>
          <DropdownItem href="#">Action two</DropdownItem>
          <DropdownItem href="#">Action three</DropdownItem>
        </DropdownMenu>
      </ButtonGroup>
      <ButtonGroup className="dropup">
        <Button brVariant="secondary">Split dropup</Button>
        <DropdownToggle
          brVariant="secondary"
          ref={dropdownRef2}
          aria-expanded={isOpen2}
          brSplitToggle
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
        <DropdownToggle brVariant="secondary" ref={dropdownRef} aria-expanded={isOpen}>
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
        <DropdownToggle brVariant="secondary" ref={dropdownRef1} aria-expanded={isOpen1}>
          Dropend
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="#">Action</DropdownItem>
          <DropdownItem href="#">Action two</DropdownItem>
          <DropdownItem href="#">Action three</DropdownItem>
        </DropdownMenu>
      </ButtonGroup>
      <ButtonGroup className="dropend">
        <Button brVariant="secondary">Split dropend</Button>
        <DropdownToggle
          brVariant="secondary"
          ref={dropdownRef2}
          aria-expanded={isOpen2}
          brSplitToggle
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
        <DropdownToggle brVariant="secondary" ref={dropdownRef1} aria-expanded={isOpen1}>
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
          brVariant="secondary"
          ref={dropdownRef2}
          aria-expanded={isOpen2}
          brSplitToggle
        />
        <DropdownMenu>
          <DropdownItem href="#">Action</DropdownItem>
          <DropdownItem href="#">Action two</DropdownItem>
          <DropdownItem href="#">Action three</DropdownItem>
        </DropdownMenu>
        <Button brVariant="secondary">Split dropstart</Button>
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
          <DropdownToggle brVariant="secondary" ref={dropdownRef} aria-expanded={isOpen}>
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
        <DropdownItem as="span" isInteractive={false}>
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
        <DropdownItem href="#" isActive arria-current="true">
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
        <DropdownItem isDisabled>Disabled link</DropdownItem>
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
        <DropdownToggle brVariant="secondary" ref={dropdownRef} aria-expanded={isOpen}>
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
            brVariant="secondary"
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
            brVariant="secondary"
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
      <DropdownMenu brPadding={3} className="text-body-secondary" style={{ maxWidth: '200px' }}>
        <p>Some example text that's free-flowing within the dropdown menu.</p>
        <BrElement as="p" brMargin={{ bottom: 0 }}>
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
        <BrElement as="form" brPadding={{ x: 4, y: 3 }}>
          <FormControl
            wrapperProps={{
              brMargin: { bottom: 3 }
            }}
            inputProps={{
              type: 'email',
              id: 'exampleDropdownFormEmail1',
              placeholder: 'email@example.com'
            }}
            labelProps={{
              children: 'Email address'
            }}
          />
          <FormControl
            wrapperProps={{
              brMargin: { bottom: 3 }
            }}
            inputProps={{
              type: 'password',
              id: 'exampleDropdownFormPassword1',
              placeholder: 'Password'
            }}
            labelProps={{
              children: 'Password'
            }}
          />
          <FormCheck
            wrapperProps={{
              brMargin: { bottom: 3 }
            }}
            inputProps={{ id: 'dropdownCheck1' }}
            labelProps={{ children: 'Remember me' }}
          />
          <Button type="submit" brVariant="primary">
            Sign in
          </Button>
        </BrElement>
        <DropdownDivider />
        <DropdownItem wrapperAs={null} href="#">
          New around here? Sign up
        </DropdownItem>
        <DropdownItem wrapperAs={null} href="#">
          Forgot password?
        </DropdownItem>
      </DropdownMenu>
      <hr />
      <div style={{ minHeight: '320px' }}>
        <Dropdown>
          <DropdownToggle brVariant="primary">Dropdown form</DropdownToggle>
          <DropdownMenu as="form" brPadding={4}>
            <FormControl
              wrapperProps={{
                brMargin: { bottom: 3 }
              }}
              inputProps={{
                type: 'email',
                id: 'exampleDropdownFormEmail2',
                placeholder: 'email@example.com'
              }}
              labelProps={{
                children: 'Email address'
              }}
            />
            <FormControl
              wrapperProps={{
                brMargin: { bottom: 3 }
              }}
              inputProps={{
                type: 'password',
                id: 'exampleDropdownFormPassword2',
                placeholder: 'Password'
              }}
              labelProps={{
                children: 'Password'
              }}
            />
            <FormCheck
              wrapperProps={{
                brMargin: { bottom: 3 }
              }}
              inputProps={{ id: 'dropdownCheck2' }}
              labelProps={{ children: 'Remember me' }}
            />
            <Button type="submit" brVariant="primary">
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
      <BrElement brDisplay="flex">
        <Dropdown brMargin={{ end: 1 }}>
          <DropdownToggle brVariant="secondary" ref={dropdownRef1} aria-expanded={isOpen1}>
            Offset
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#">Action</DropdownItem>
            <DropdownItem href="#">Another ction</DropdownItem>
            <DropdownItem href="#">Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <ButtonGroup>
          <Button brVariant="secondary">Reference</Button>
          <DropdownToggle
            brVariant="secondary"
            ref={dropdownRef2}
            aria-expanded={isOpen2}
            brSplitToggle
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
        <DropdownToggle brVariant="secondary" ref={dropdownRef1} aria-expanded={isOpen1}>
          Default dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="#">Menu item</DropdownItem>
          <DropdownItem href="#">Menu item</DropdownItem>
          <DropdownItem href="#">Menu item</DropdownItem>
        </DropdownMenu>
      </ButtonGroup>
      <ButtonGroup>
        <DropdownToggle brVariant="secondary" ref={dropdownRef2} aria-expanded={isOpen2}>
          Clickable inside
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="#">Menu item</DropdownItem>
          <DropdownItem href="#">Menu item</DropdownItem>
          <DropdownItem href="#">Menu item</DropdownItem>
        </DropdownMenu>
      </ButtonGroup>
      <ButtonGroup>
        <DropdownToggle brVariant="secondary" ref={dropdownRef3} aria-expanded={isOpen3}>
          Clickable outside
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="#">Menu item</DropdownItem>
          <DropdownItem href="#">Menu item</DropdownItem>
          <DropdownItem href="#">Menu item</DropdownItem>
        </DropdownMenu>
      </ButtonGroup>
      <ButtonGroup>
        <DropdownToggle brVariant="secondary" ref={dropdownRef4} aria-expanded={isOpen4}>
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
