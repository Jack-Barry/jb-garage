import { Meta, StoryFn } from '@storybook/react'
import { CSSProperties, Fragment } from 'react'

import Image from '../../content/Image/Image'
import Input from '../../forms/FormControl/Input'
import InputGroup from '../../forms/InputGroup/InputGroup'
import InputGroupText from '../../forms/InputGroup/InputGroupText'
import Container from '../../layout/containers/Container'
import { BrElement } from '../../utils/BrElement'
import Button from '../Button/Button'
import CloseButton from '../CloseButton/CloseButton'
import Collapse from '../Collapse/Collapse'
import { useCollapse } from '../Collapse/useCollapse'
import DropdownDivider from '../Dropdown/DropdownDivider'
import DropdownItem from '../Dropdown/DropdownItem'
import DropdownMenu from '../Dropdown/DropdownMenu'
import { useDropdown } from '../Dropdown/useDropdown'
import Offcanvas from '../Offcanvas/Offcanvas'
import OffcanvasBody from '../Offcanvas/OffcanvasBody'
import OffcanvasHeader from '../Offcanvas/OffcanvasHeader'
import OffcanvasTitle from '../Offcanvas/OffcanvasTitle'
import { useOffcanvas } from '../Offcanvas/useOffcanvas'
import NavItem from '../navsAndTabs/Nav/NavItem'
import NavLink from '../navsAndTabs/Nav/NavLink'

import Navbar from './Navbar'
import NavbarBrand from './NavbarBrand'
import NavbarCollapse from './NavbarCollapse'
import NavbarNav from './NavbarNav'
import NavbarText from './NavbarText'
import NavbarToggler from './NavbarToggler'
import NavbarTogglerIcon from './NavbarTogglerIcon'

const meta: Meta = {
  title: 'Navbar',
  tags: ['autodocs']
}

export default meta

export const SupportedContent: StoryFn = () => {
  const collapse = useCollapse()
  const dropdown = useDropdown<HTMLAnchorElement>()

  return (
    <Navbar className="navbar-expand-lg" bsJs={{ background: 'body-tertiary' }}>
      <Container brContainerFluid>
        <NavbarBrand href="#">Navbar</NavbarBrand>
        <NavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded={!collapse.isOpen}
          aria-label="Toggle navigation"
          onClick={collapse.toggle}
        >
          <NavbarTogglerIcon />
        </NavbarToggler>
        <NavbarCollapse id="navbarSupportedContent" brCollapse={collapse}>
          <NavbarNav
            bsJs={{
              spacing: { margin: { end: 'auto', bottom: '2' } },
              breakpoints: {
                lg: { spacing: { margin: { bottom: '0' } } }
              }
            }}
          >
            <NavItem>
              <NavLink bsJs={{ active: true }} aria-current="page" href="#">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem bsJs={{ dropdown: true }}>
              <NavLink
                bsJs={{ dropdownToggle: true }}
                href="#"
                role="button"
                aria-expanded={dropdown.isOpen}
                ref={dropdown.dropdownRef}
              >
                Dropdown
              </NavLink>
              <DropdownMenu>
                <DropdownItem href="#">Action</DropdownItem>
                <DropdownItem href="#">Another action</DropdownItem>
                <DropdownDivider />
                <DropdownItem href="#">Something else here</DropdownItem>
              </DropdownMenu>
            </NavItem>
            <NavItem>
              <NavLink className="disabled" aria-disabled="true">
                Disabled
              </NavLink>
            </NavItem>
          </NavbarNav>
          <BrElement as="form" bsJs={{ display: 'flex' }} role="search">
            <Input
              bsJs={{ spacing: { margin: { end: '2' } } }}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Button bsJs={{ variant: 'outline-success' }} type="submit">
              Search
            </Button>
          </BrElement>
        </NavbarCollapse>
      </Container>
    </Navbar>
  )
}

export const BrandText: StoryFn = () => {
  return (
    <div className="bd-example">
      <Navbar bsJs={{ background: 'body-tertiary' }}>
        <Container brContainerFluid>
          <NavbarBrand href="#">Navbar</NavbarBrand>
        </Container>
      </Navbar>
      <Navbar bsJs={{ background: 'body-tertiary' }}>
        <Container brContainerFluid>
          <NavbarBrand as="span" bsJs={{ spacing: { margin: { bottom: '0' } } }} className="h1">
            Navbar
          </NavbarBrand>
        </Container>
      </Navbar>
    </div>
  )
}

export const BrandImage: StoryFn = () => {
  return (
    <Navbar bsJs={{ background: 'body-tertiary' }}>
      <Container>
        <NavbarBrand href="#">
          <Image src="/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24" />
        </NavbarBrand>
      </Container>
    </Navbar>
  )
}

export const BrandImageAndText: StoryFn = () => {
  return (
    <Navbar bsJs={{ background: 'body-tertiary' }}>
      <Container brContainerFluid>
        <NavbarBrand href="#">
          <Image
            src="/bootstrap-logo.svg"
            alt="Logo"
            width="30"
            height="24"
            bsJs={{ display: 'inline-block' }}
            className="align-text-top"
          />{' '}
          Bootstrap
        </NavbarBrand>
      </Container>
    </Navbar>
  )
}

export const Nav: StoryFn = () => {
  const collapse1 = useCollapse()
  const collapse2 = useCollapse()
  const collapse3 = useCollapse()
  const dropdown = useDropdown<HTMLAnchorElement>()

  return (
    <div className="bd-example">
      <Navbar className="navbar-expand-lg" bsJs={{ background: 'body-tertiary' }}>
        <Container brContainerFluid>
          <NavbarBrand href="#">Navbar</NavbarBrand>
          <NavbarToggler
            aria-controls="navbarNav"
            aria-expanded={collapse1.isOpen}
            aria-label="Toggle navigation"
            onClick={collapse1.toggle}
          >
            <NavbarTogglerIcon />
          </NavbarToggler>
          <NavbarCollapse brCollapse={collapse1} id="navbarNav">
            <NavbarNav>
              <NavItem>
                <NavLink bsJs={{ active: true }} aria-current="page" href="#">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Pricing</NavLink>
              </NavItem>
              <NavItem>
                <NavLink bsJs={{ disabled: true }} aria-disabled="true">
                  Disabled
                </NavLink>
              </NavItem>
            </NavbarNav>
          </NavbarCollapse>
        </Container>
      </Navbar>
      <hr />
      <Navbar className="navbar-expand-lg" bsJs={{ background: 'body-tertiary' }}>
        <Container brContainerFluid>
          <NavbarBrand href="#">Navbar</NavbarBrand>
          <NavbarToggler
            aria-controls="navbarNavAltMarkup"
            aria-expanded={collapse2.isOpen}
            aria-label="Toggle navigation"
            onClick={collapse2.toggle}
          >
            <NavbarTogglerIcon />
          </NavbarToggler>
          <NavbarCollapse brCollapse={collapse2} id="navbarNavAltMarkup">
            <NavbarNav>
              <NavLink bsJs={{ active: true }} aria-current="page" href="#">
                Home
              </NavLink>
              <NavLink href="#">Features</NavLink>
              <NavLink href="#">Pricing</NavLink>
              <NavLink bsJs={{ disabled: true }} aria-disabled="true">
                Disabled
              </NavLink>
            </NavbarNav>
          </NavbarCollapse>
        </Container>
      </Navbar>
      <hr />
      <Navbar className="navbar-expand-lg" bsJs={{ background: 'body-tertiary' }}>
        <Container brContainerFluid>
          <NavbarBrand href="#">Navbar</NavbarBrand>
          <NavbarToggler
            aria-controls="navbarNavDropdown"
            aria-expanded={collapse3.isOpen}
            aria-label="Toggle navigation"
            onClick={collapse3.toggle}
          >
            <NavbarTogglerIcon />
          </NavbarToggler>
          <NavbarCollapse brCollapse={collapse3} id="navbarNavDropdown">
            <NavbarNav>
              <NavItem>
                <NavLink bsJs={{ active: true }} aria-current="page" href="#">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Pricing</NavLink>
              </NavItem>
              <NavItem bsJs={{ dropdown: true }}>
                <NavLink
                  bsJs={{ dropdownToggle: true }}
                  href="#"
                  aria-expanded={dropdown.isOpen}
                  ref={dropdown.dropdownRef}
                >
                  Dropdown link
                </NavLink>
                <DropdownMenu>
                  <DropdownItem href="#">Action</DropdownItem>
                  <DropdownItem href="#">Another action</DropdownItem>
                  <DropdownItem href="#">Something else here</DropdownItem>
                </DropdownMenu>
              </NavItem>
            </NavbarNav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </div>
  )
}

export const Forms: StoryFn = () => {
  return (
    <div className="bd-example">
      <Navbar bsJs={{ background: 'body-tertiary' }}>
        <Container brContainerFluid>
          <BrElement as="form" bsJs={{ display: 'flex' }} role="search">
            <Input
              bsJs={{ spacing: { margin: { end: '2' } } }}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Button bsJs={{ variant: 'outline-success' }} type="submit">
              Search
            </Button>
          </BrElement>
        </Container>
      </Navbar>
      <hr />
      <Navbar bsJs={{ background: 'body-tertiary' }}>
        <Container brContainerFluid>
          <NavbarBrand>Navbar</NavbarBrand>
          <BrElement as="form" bsJs={{ display: 'flex' }} role="search">
            <Input
              bsJs={{ spacing: { margin: { end: '2' } } }}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Button bsJs={{ variant: 'outline-success' }} type="submit">
              Search
            </Button>
          </BrElement>
        </Container>
      </Navbar>
      <hr />
      <Navbar bsJs={{ background: 'body-tertiary' }}>
        <Container as="form" bsJs={{ fluid: true }}>
          <InputGroup>
            <InputGroupText id="basic-addon1">@</InputGroupText>
            <Input placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
          </InputGroup>
        </Container>
      </Navbar>
      <hr />
      <Navbar bsJs={{ background: 'body-tertiary' }}>
        <Container as="form" bsJs={{ fluid: true }} className="justify-content-start">
          <Button
            bsJs={{
              variant: 'outline-success',
              spacing: { margin: { end: '2' } }
            }}
          >
            Main button
          </Button>
          <Button bsJs={{ variant: 'outline-secondary', buttonSize: 'sm' }}>Smaller button</Button>
        </Container>
      </Navbar>
    </div>
  )
}

export const Text: StoryFn = () => {
  const collapse = useCollapse()

  return (
    <div className="bd-example">
      <Navbar bsJs={{ background: 'body-tertiary' }}>
        <Container brContainerFluid>
          <NavbarText>Navbar text with an inline element</NavbarText>
        </Container>
      </Navbar>
      <hr />
      <Navbar className="navbar-expand-lg" bsJs={{ background: 'body-tertiary' }}>
        <Container brContainerFluid>
          <NavbarBrand href="#">Navbar w/ text</NavbarBrand>
          <NavbarToggler
            aria-controls="navbarText"
            aria-expanded={collapse.isOpen}
            aria-label="Toggle navigation"
            onClick={collapse.toggle}
          >
            <NavbarTogglerIcon />
          </NavbarToggler>
          <NavbarCollapse brCollapse={collapse} id="navbarText">
            <NavbarNav
              bsJs={{
                spacing: { margin: { end: 'auto', bottom: '2' } },
                breakpoints: {
                  lg: { spacing: { margin: { bottom: '0' } } }
                }
              }}
            >
              <NavItem>
                <NavLink bsJs={{ active: true }} aria-current="page" href="#">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Pricing</NavLink>
              </NavItem>
            </NavbarNav>
            <NavbarText>Navbar text with an inline element</NavbarText>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </div>
  )
}

export const ColorSchemes: StoryFn = () => {
  return (
    <div>
      <Navbar
        className="navbar-expand-lg"
        bsJs={{ theme: 'dark', background: 'dark', border: { bottom: true, color: 'body' } }}
      >
        <ColorSchemeExampleContent />
      </Navbar>
      <hr />
      <Navbar bsJs={{ background: 'primary', theme: 'dark' }}>
        <ColorSchemeExampleContent />
      </Navbar>
      <hr />
      <Navbar style={{ backgroundColor: '#e3f2fd' }} bsJs={{ theme: 'light' }}>
        <ColorSchemeExampleContent />
      </Navbar>
    </div>
  )
}

function ColorSchemeExampleContent() {
  const collapse = useCollapse()

  return (
    <Container brContainerFluid>
      <NavbarBrand href="#">Navbar</NavbarBrand>
      <NavbarToggler
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={collapse.toggle}
      >
        <NavbarTogglerIcon />
      </NavbarToggler>
      <NavbarCollapse brCollapse={collapse} id="navbarColor01">
        <NavbarNav
          bsJs={{
            spacing: { margin: { end: 'auto', bottom: '2' } },
            breakpoints: { lg: { spacing: { margin: { bottom: '0' } } } }
          }}
        >
          <NavItem>
            <NavLink bsJs={{ active: true }} aria-current="page" href="#">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Features</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Pricing</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">About</NavLink>
          </NavItem>
        </NavbarNav>
        <BrElement as="form" bsJs={{ display: 'flex' }} role="search">
          <Input
            bsJs={{ spacing: { margin: { end: '2' } } }}
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <Button bsJs={{ variant: 'outline-light' }} type="submit">
            Search
          </Button>
        </BrElement>
      </NavbarCollapse>
    </Container>
  )
}

export const Containers: StoryFn = () => {
  return (
    <div>
      <Container>
        <Navbar className="navbar-expand-lg" bsJs={{ background: 'body-tertiary' }}>
          <Container brContainerFluid>
            <NavbarBrand href="#">Navbar</NavbarBrand>
          </Container>
        </Navbar>
      </Container>
      <hr />
      <Navbar className="navbar-expand-lg" bsJs={{ background: 'body-tertiary' }}>
        <Container brContainerBreakpoint="md">
          <NavbarBrand href="#">Navbar</NavbarBrand>
        </Container>
      </Navbar>
    </div>
  )
}

export const PlacementDefault: StoryFn = () => {
  return (
    <Navbar bsJs={{ background: 'body-tertiary' }}>
      <Container brContainerFluid>
        <NavbarBrand href="#">Default</NavbarBrand>
      </Container>
    </Navbar>
  )
}

export const PlacementFixedTop: StoryFn = () => {
  return (
    <div className="bd-example">
      <Navbar bsJs={{ background: 'body-tertiary', placement: 'fixed-top' }}>
        <Container brContainerFluid>
          <NavbarBrand href="#">Fixed top</NavbarBrand>
        </Container>
      </Navbar>
    </div>
  )
}

export const PlacementFixedBottom: StoryFn = () => {
  return (
    <div className="bd-example">
      <Navbar bsJs={{ background: 'body-tertiary', placement: 'fixed-bottom' }}>
        <Container brContainerFluid>
          <NavbarBrand href="#">Fixed bottom</NavbarBrand>
        </Container>
      </Navbar>
    </div>
  )
}

export const PlacementStickyTop: StoryFn = () => {
  return (
    <div className="bd-example">
      <Navbar bsJs={{ background: 'body-tertiary', placement: 'sticky-top' }}>
        <Container brContainerFluid>
          <NavbarBrand href="#">Sticky top</NavbarBrand>
        </Container>
      </Navbar>
    </div>
  )
}

export const PlacementStickyBottom: StoryFn = () => {
  return (
    <div className="bd-example">
      <Navbar bsJs={{ background: 'body-tertiary', placement: 'sticky-bottom' }}>
        <Container brContainerFluid>
          <NavbarBrand href="#">Sticky bottom</NavbarBrand>
        </Container>
      </Navbar>
    </div>
  )
}

export const Scrolling: StoryFn = () => {
  const collapse = useCollapse()
  const dropdown = useDropdown<HTMLAnchorElement>()

  return (
    <Navbar className="navbar-expand-lg" bsJs={{ background: 'body-tertiary' }}>
      <Container brContainerFluid>
        <NavbarBrand href="#">Navbar scroll</NavbarBrand>
        <NavbarToggler
          aria-controls="navbarScroll"
          aria-expanded={collapse.isOpen}
          aria-label="Toggle navigation"
          onClick={collapse.toggle}
        >
          <NavbarTogglerIcon />
        </NavbarToggler>
        <NavbarCollapse brCollapse={collapse} id="navbarScroll">
          <NavbarNav
            bsJs={{
              spacing: { margin: { end: 'auto', y: '2' } },
              breakpoints: { lg: { spacing: { margin: { y: '0' } } } }
            }}
            className="navbar-nav-scroll"
            style={{ '--bs-scroll-height': '100px' } as CSSProperties}
          >
            <NavItem>
              <NavLink bsJs={{ active: true }} aria-current="page" href="#">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem bsJs={{ dropdown: true }}>
              <NavLink
                bsJs={{ dropdownToggle: true }}
                href="#"
                aria-expanded={dropdown.isOpen}
                ref={dropdown.dropdownRef}
              >
                Link
              </NavLink>
              <DropdownMenu>
                <DropdownItem href="#">Action</DropdownItem>
                <DropdownItem href="#">Another action</DropdownItem>
                <DropdownDivider />
                <DropdownItem href="#">Something else here</DropdownItem>
              </DropdownMenu>
            </NavItem>
            <NavItem>
              <NavLink bsJs={{ disabled: true }} aria-disabled="true">
                Link
              </NavLink>
            </NavItem>
          </NavbarNav>
          <BrElement bsJs={{ display: 'flex' }} role="search">
            <Input
              bsJs={{ spacing: { margin: { end: '2' } } }}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Button bsJs={{ variant: 'outline-success' }} type="submit">
              Search
            </Button>
          </BrElement>
        </NavbarCollapse>
      </Container>
    </Navbar>
  )
}

export const Toggler: StoryFn = () => {
  const collapse1 = useCollapse()
  const collapse2 = useCollapse()
  const collapse3 = useCollapse()

  return (
    <div>
      <Navbar className="navbar-expand-lg" bsJs={{ background: 'body-tertiary' }}>
        <Container brContainerFluid>
          <NavbarToggler
            aria-controls="navbarTogglerDemo01"
            aria-expanded={collapse1.isOpen}
            aria-label="Toggle navigation"
            onClick={collapse1.toggle}
          >
            <NavbarTogglerIcon />
          </NavbarToggler>
          <NavbarCollapse brCollapse={collapse1} id="navbarTogglerDemo01">
            <NavbarBrand href="#">Hidden brand</NavbarBrand>
            <TogglerDemoContent />
          </NavbarCollapse>
        </Container>
      </Navbar>
      <hr />
      <Navbar className="navbar-expand-lg" bsJs={{ background: 'body-tertiary' }}>
        <Container brContainerFluid>
          <NavbarBrand href="#">Navbar</NavbarBrand>
          <NavbarToggler
            aria-controls="navbarTogglerDemo02"
            aria-expanded={collapse2.isOpen}
            aria-label="Toggle navigation"
            onClick={collapse1.toggle}
          >
            <NavbarTogglerIcon />
          </NavbarToggler>
          <NavbarCollapse brCollapse={collapse2} id="navbarTogglerDemo02">
            <TogglerDemoContent />
          </NavbarCollapse>
        </Container>
      </Navbar>
      <hr />
      <Navbar className="navbar-expand-lg" bsJs={{ background: 'body-tertiary' }}>
        <Container brContainerFluid>
          <NavbarToggler
            aria-controls="navbarTogglerDemo03"
            aria-expanded={collapse3.isOpen}
            aria-label="Toggle navigation"
            onClick={collapse3.toggle}
          >
            <NavbarTogglerIcon />
          </NavbarToggler>
          <NavbarBrand href="#">Navbar</NavbarBrand>
          <NavbarCollapse brCollapse={collapse3} id="navbarTogglerDemo03">
            <TogglerDemoContent />
          </NavbarCollapse>
        </Container>
      </Navbar>
    </div>
  )
}

function TogglerDemoContent() {
  return (
    <Fragment>
      <NavbarNav
        bsJs={{
          spacing: { margin: { end: 'auto', bottom: '2' } },
          breakpoints: {
            lg: { spacing: { margin: { bottom: '0' } } }
          }
        }}
      >
        <NavItem>
          <NavLink bsJs={{ active: true }} aria-current="page" href="#">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink bsJs={{ disabled: true }} aria-disabled="true">
            Disabled
          </NavLink>
        </NavItem>
      </NavbarNav>
      <BrElement as="form" bsJs={{ display: 'flex' }} role="search">
        <Input
          bsJs={{ spacing: { margin: { end: '2' } } }}
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <Button bsJs={{ variant: 'outline-success' }} type="submit">
          Search
        </Button>
      </BrElement>
    </Fragment>
  )
}

export const ExternalContent: StoryFn = () => {
  const collapse = useCollapse()

  return (
    <div>
      <Collapse brCollapse={collapse} id="navbarToggleExternalContent" bsJs={{ theme: 'dark' }}>
        <BrElement bsJs={{ background: 'dark', spacing: { padding: '4' } }}>
          <BrElement as="h5" bsJs={{ color: 'body-emphasis' }} className="h4">
            Collapsed content
          </BrElement>
          <BrElement as="span" bsJs={{ color: 'body-secondary' }}>
            Toggleable via the navbar brand.
          </BrElement>
        </BrElement>
      </Collapse>
      <Navbar className="navbar-dark" bsJs={{ background: 'dark' }}>
        <Container brContainerFluid>
          <NavbarToggler
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={collapse.toggle}
          >
            <NavbarTogglerIcon />
          </NavbarToggler>
        </Container>
      </Navbar>
    </div>
  )
}

export const OffcanvasStory: StoryFn = () => {
  const offcanvas = useOffcanvas()
  const dropdown = useDropdown<HTMLAnchorElement>()

  return (
    <div className="bd-example">
      <Navbar bsJs={{ background: 'body-tertiary', placement: 'fixed-top' }}>
        <Container brContainerFluid>
          <NavbarBrand href="#">Offcanvas navbar</NavbarBrand>
          <NavbarToggler
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
            onClick={offcanvas.toggle}
          >
            <NavbarTogglerIcon />
          </NavbarToggler>
          <Offcanvas
            bsJs={{ placement: 'end' }}
            brOffcanvas={offcanvas}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <OffcanvasHeader>
              <OffcanvasTitle id="offcanvasNavbarLabel">Offcanvas</OffcanvasTitle>
              <CloseButton aria-label="Close" onClick={offcanvas.hide} />
            </OffcanvasHeader>
            <OffcanvasBody>
              <NavbarNav
                bsJs={{
                  flex: { justifyContent: 'end', grow: true },
                  spacing: { padding: { end: '3' } }
                }}
              >
                <NavItem>
                  <NavLink bsJs={{ active: true }} aria-current="page" href="#">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem bsJs={{ dropdown: true }}>
                  <NavLink
                    bsJs={{ dropdownToggle: true }}
                    href="#"
                    aria-expanded="false"
                    ref={dropdown.dropdownRef}
                  >
                    Dropdown
                  </NavLink>
                  <DropdownMenu>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownDivider />
                    <DropdownItem href="#">Something else here</DropdownItem>
                  </DropdownMenu>
                </NavItem>
              </NavbarNav>
              <BrElement
                as="form"
                bsJs={{ display: 'flex', spacing: { margin: { top: '3' } } }}
                role="search"
              >
                <Input
                  bsJs={{ spacing: { margin: { end: '2' } } }}
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <Button bsJs={{ variant: 'outline-success' }} type="submit">
                  Search
                </Button>
              </BrElement>
            </OffcanvasBody>
          </Offcanvas>
        </Container>
      </Navbar>
    </div>
  )
}
OffcanvasStory.storyName = 'Offcanvas'
