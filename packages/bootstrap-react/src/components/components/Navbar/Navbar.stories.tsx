import { Meta, StoryFn } from '@storybook/react'
import { CSSProperties, Fragment } from 'react'

import Navbar from './Navbar'
import Container from '../../layout/containers/Container'
import NavbarBrand from './NavbarBrand'
import NavbarToggler from './NavbarToggler'
import NavbarTogglerIcon from './NavbarTogglerIcon'
import { useCollapse } from '../Collapse/useCollapse'
import NavbarCollapse from './NavbarCollapse'
import NavbarNav from './NavbarNav'
import NavItem from '../navsAndTabs/Nav/NavItem'
import NavLink from '../navsAndTabs/Nav/NavLink'
import DropdownItem from '../Dropdown/DropdownItem'
import DropdownMenu from '../Dropdown/DropdownMenu'
import DropdownDivider from '../Dropdown/DropdownDivider'
import { useDropdown } from '../Dropdown/useDropdown'
import { BrElement } from '../../utils/BrElement'
import Input from '../../forms/FormControl/Input'
import Button from '../Button/Button'
import Image from '../../content/Image/Image'
import InputGroupText from '../../forms/InputGroup/InputGroupText'
import InputGroup from '../../forms/InputGroup/InputGroup'
import NavbarText from './NavbarText'
import Collapse from '../Collapse/Collapse'
import Offcanvas from '../Offcanvas/Offcanvas'
import { useOffcanvas } from '../Offcanvas/useOffcanvas'
import OffcanvasHeader from '../Offcanvas/OffcanvasHeader'
import OffcanvasTitle from '../Offcanvas/OffcanvasTitle'
import CloseButton from '../CloseButton/CloseButton'
import OffcanvasBody from '../Offcanvas/OffcanvasBody'

const meta: Meta = {
  title: 'Navbar',
  tags: ['autodocs']
}

export default meta

export const SupportedContent: StoryFn = () => {
  const collapse = useCollapse()
  const dropdown = useDropdown<HTMLAnchorElement>()

  return (
    <Navbar className="navbar-expand-lg bg-body-tertiary">
      <Container brFluid>
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
          <NavbarNav brMargin={{ end: 'auto', bottom: 2 }} brMarginLg={{ bottom: 0 }}>
            <NavItem>
              <NavLink brActive aria-current="page" href="#">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem brDropdown>
              <NavLink
                brDropdownToggle
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
          <BrElement as="form" brDisplay="flex" role="search">
            <Input brMargin={{ end: 2 }} type="search" placeholder="Search" aria-label="Search" />
            <Button brVariant="outline-success" type="submit">
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
      <Navbar className="bg-body-tertiary">
        <Container brFluid>
          <NavbarBrand href="#">Navbar</NavbarBrand>
        </Container>
      </Navbar>
      <Navbar className="bg-body-tertiary">
        <Container brFluid>
          <NavbarBrand as="span" brMargin={{ bottom: 0 }} className="h1">
            Navbar
          </NavbarBrand>
        </Container>
      </Navbar>
    </div>
  )
}

export const BrandImage: StoryFn = () => {
  return (
    <Navbar className="bg-body-tertiary">
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
    <Navbar className="bg-body-tertiary">
      <Container brFluid>
        <NavbarBrand href="#">
          <Image
            src="/bootstrap-logo.svg"
            alt="Logo"
            width="30"
            height="24"
            brDisplay="inline-block"
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
      <Navbar className="navbar-expand-lg bg-body-tertiary">
        <Container brFluid>
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
                <NavLink brActive aria-current="page" href="#">
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
                <NavLink brDisabled aria-disabled="true">
                  Disabled
                </NavLink>
              </NavItem>
            </NavbarNav>
          </NavbarCollapse>
        </Container>
      </Navbar>
      <hr />
      <Navbar className="navbar-expand-lg bg-body-tertiary">
        <Container brFluid>
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
              <NavLink brActive aria-current="page" href="#">
                Home
              </NavLink>
              <NavLink href="#">Features</NavLink>
              <NavLink href="#">Pricing</NavLink>
              <NavLink brDisabled aria-disabled="true">
                Disabled
              </NavLink>
            </NavbarNav>
          </NavbarCollapse>
        </Container>
      </Navbar>
      <hr />
      <Navbar className="navbar-expand-lg bg-body-tertiary">
        <Container brFluid>
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
                <NavLink brActive aria-current="page" href="#">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Pricing</NavLink>
              </NavItem>
              <NavItem brDropdown>
                <NavLink
                  brDropdownToggle
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
      <Navbar className="bg-body-tertiary">
        <Container brFluid>
          <BrElement as="form" brDisplay="flex" role="search">
            <Input brMargin={{ end: 2 }} type="search" placeholder="Search" aria-label="Search" />
            <Button brVariant="outline-success" type="submit">
              Search
            </Button>
          </BrElement>
        </Container>
      </Navbar>
      <hr />
      <Navbar className="bg-body-tertiary">
        <Container brFluid>
          <NavbarBrand>Navbar</NavbarBrand>
          <BrElement as="form" brDisplay="flex" role="search">
            <Input brMargin={{ end: 2 }} type="search" placeholder="Search" aria-label="Search" />
            <Button brVariant="outline-success" type="submit">
              Search
            </Button>
          </BrElement>
        </Container>
      </Navbar>
      <hr />
      <Navbar className="bg-body-tertiary">
        <Container as="form" brFluid>
          <InputGroup>
            <InputGroupText id="basic-addon1">@</InputGroupText>
            <Input placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
          </InputGroup>
        </Container>
      </Navbar>
      <hr />
      <Navbar className="bg-body-tertiary">
        <Container as="form" brFluid className="justify-content-start">
          <Button brVariant="outline-success" brMargin={{ end: 2 }}>
            Main button
          </Button>
          <Button brVariant="outline-secondary" brSm>
            Smaller button
          </Button>
        </Container>
      </Navbar>
    </div>
  )
}

export const Text: StoryFn = () => {
  const collapse = useCollapse()

  return (
    <div className="bd-example">
      <Navbar className="bg-body-tertiary">
        <Container brFluid>
          <NavbarText>Navbar text with an inline element</NavbarText>
        </Container>
      </Navbar>
      <hr />
      <Navbar className="navbar-expand-lg bg-body-tertiary">
        <Container brFluid>
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
            <NavbarNav brMargin={{ end: 'auto', bottom: 2 }} brMarginLg={{ bottom: 0 }}>
              <NavItem>
                <NavLink brActive aria-current="page" href="#">
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
        brBorder={{ bottom: true }}
        className="navbar-expand-lg bg-dark border-body"
        brTheme="dark"
      >
        <ColorSchemeExampleContent />
      </Navbar>
      <hr />
      <Navbar className="bg-primary" brTheme="dark">
        <ColorSchemeExampleContent />
      </Navbar>
      <hr />
      <Navbar style={{ backgroundColor: '#e3f2fd' }} brTheme="light">
        <ColorSchemeExampleContent />
      </Navbar>
    </div>
  )
}

function ColorSchemeExampleContent() {
  const collapse = useCollapse()

  return (
    <Container brFluid>
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
        <NavbarNav brMargin={{ end: 'auto', bottom: 2 }} brMarginLg={{ bottom: 0 }}>
          <NavItem>
            <NavLink brActive aria-current="page" href="#">
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
        <BrElement as="form" brDisplay="flex" role="search">
          <Input brMargin={{ end: 2 }} type="search" placeholder="Search" aria-label="Search" />
          <Button brVariant="outline-light" type="submit">
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
        <Navbar className="navbar-expand-lg bg-body-tertiary">
          <Container brFluid>
            <NavbarBrand href="#">Navbar</NavbarBrand>
          </Container>
        </Navbar>
      </Container>
      <hr />
      <Navbar className="navbar-expand-lg bg-body-tertiary">
        <Container brBreakpoint="md">
          <NavbarBrand href="#">Navbar</NavbarBrand>
        </Container>
      </Navbar>
    </div>
  )
}

export const PlacementDefault: StoryFn = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container brFluid>
        <NavbarBrand href="#">Default</NavbarBrand>
      </Container>
    </Navbar>
  )
}

export const PlacementFixedTop: StoryFn = () => {
  return (
    <div className="bd-example">
      <Navbar brPlacement="fixed-top" className="bg-body-tertiary">
        <Container brFluid>
          <NavbarBrand href="#">Fixed top</NavbarBrand>
        </Container>
      </Navbar>
    </div>
  )
}

export const PlacementFixedBottom: StoryFn = () => {
  return (
    <div className="bd-example">
      <Navbar brPlacement="fixed-bottom" className="bg-body-tertiary">
        <Container brFluid>
          <NavbarBrand href="#">Fixed bottom</NavbarBrand>
        </Container>
      </Navbar>
    </div>
  )
}

export const PlacementStickyTop: StoryFn = () => {
  return (
    <div className="bd-example">
      <Navbar brPlacement="sticky-top" className="bg-body-tertiary">
        <Container brFluid>
          <NavbarBrand href="#">Sticky top</NavbarBrand>
        </Container>
      </Navbar>
    </div>
  )
}

export const PlacementStickyBottom: StoryFn = () => {
  return (
    <div className="bd-example">
      <Navbar brPlacement="sticky-bottom" className="bg-body-tertiary">
        <Container brFluid>
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
    <Navbar className="navbar-expand-lg bg-body-tertiary">
      <Container brFluid>
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
            brMargin={{ end: 'auto', y: 2 }}
            brMarginLg={{ y: 0 }}
            className="navbar-nav-scroll"
            style={{ '--bs-scroll-height': '100px' } as CSSProperties}
          >
            <NavItem>
              <NavLink brActive aria-current="page" href="#">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem brDropdown>
              <NavLink
                brDropdownToggle
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
              <NavLink brDisabled aria-disabled="true">
                Link
              </NavLink>
            </NavItem>
          </NavbarNav>
          <BrElement brDisplay="flex" role="search">
            <Input brMargin={{ end: 2 }} type="search" placeholder="Search" aria-label="Search" />
            <Button brVariant="outline-success" type="submit">
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
      <Navbar className="navbar-expand-lg bg-body-tertiary">
        <Container brFluid>
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
      <Navbar className="navbar-expand-lg bg-body-tertiary">
        <Container brFluid>
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
      <Navbar className="navbar-expand-lg bg-body-tertiary">
        <Container brFluid>
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
      <NavbarNav brMargin={{ end: 'auto', bottom: 2 }} brMarginLg={{ bottom: 0 }}>
        <NavItem>
          <NavLink brActive aria-current="page" href="#">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink brDisabled aria-disabled="true">
            Disabled
          </NavLink>
        </NavItem>
      </NavbarNav>
      <BrElement as="form" brDisplay="flex" role="search">
        <Input brMargin={{ end: 2 }} type="search" placeholder="Search" aria-label="Search" />
        <Button brVariant="outline-success" type="submit">
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
      <Collapse brCollapse={collapse} id="navbarToggleExternalContent" brTheme="dark">
        <BrElement brPadding={4} className="bg-dark">
          <h5 className="text-body-emphasis h4">Collapsed content</h5>
          <span className="text-body-secondary">Toggleable via the navbar brand.</span>
        </BrElement>
      </Collapse>
      <Navbar className="navbar-dark bg-dark">
        <Container brFluid>
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
      <Navbar brPlacement="fixed-top" className="bg-body-tertiary">
        <Container brFluid>
          <NavbarBrand href="#">Offcanvas navbar</NavbarBrand>
          <NavbarToggler
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
            onClick={offcanvas.toggle}
          >
            <NavbarTogglerIcon />
          </NavbarToggler>
          <Offcanvas
            brOffcanvas={offcanvas}
            brPlacement="end"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <OffcanvasHeader>
              <OffcanvasTitle id="offcanvasNavbarLabel">Offcanvas</OffcanvasTitle>
              <CloseButton aria-label="Close" onClick={offcanvas.hide} />
            </OffcanvasHeader>
            <OffcanvasBody>
              <NavbarNav
                brFlex={{ justifyContent: 'end', grow: true }}
                brPadding={{ end: 3 }} /* class="navbar-nav justify-content-end flex-grow-1 pe-3" */
              >
                <NavItem>
                  <NavLink brActive aria-current="page" href="#">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem brDropdown>
                  <NavLink
                    brDropdownToggle
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
              <BrElement as="form" brDisplay="flex" brMargin={{ top: 3 }} role="search">
                <Input
                  brMargin={{ end: 2 }}
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <Button brVariant="outline-success" type="submit">
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
