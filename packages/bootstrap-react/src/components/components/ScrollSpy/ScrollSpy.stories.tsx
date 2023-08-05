import { Meta, StoryFn } from '@storybook/react'
import { useScrollSpy } from './useScrollSpy'
import Navbar from '../Navbar/Navbar'
import NavbarBrand from '../Navbar/NavbarBrand'
import Nav from '../navsAndTabs/Nav/Nav'
import NavItem from '../navsAndTabs/Nav/NavItem'
import NavLink from '../navsAndTabs/Nav/NavLink'
import { useDropdown } from '../Dropdown/useDropdown'
import DropdownDivider from '../Dropdown/DropdownDivider'
import DropdownMenu from '../Dropdown/DropdownMenu'
import DropdownItem from '../Dropdown/DropdownItem'
import Col from '../../layout/columns/Col'
import Row from '../../layout/grid/Row'
import ListGroupItem from '../ListGroup/ListGroupItem'
import ListGroup from '../ListGroup/ListGroup'
import { BrElement } from '../../utils/BrElement'

const meta: Meta = {
  title: 'Scrollspy',
  tags: ['autodocs']
}

export default meta

export const NavbarStory: StoryFn = () => {
  const scrollSpy = useScrollSpy()
  const dropdown = useDropdown<HTMLAnchorElement>()

  return (
    <div className="bd-example">
      <Navbar
        id="navbar-example2"
        brPadding={{ x: 3 }}
        brMargin={{ bottom: 3 }}
        className="bg-body-tertiary rounded-2"
      >
        <NavbarBrand href="#">Navbar</NavbarBrand>
        <Nav className="nav-pills">
          <NavItem>
            <NavLink className="active" href="#scrollspyHeading1">
              First
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#scrollspyHeading2">Second</NavLink>
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
              <DropdownItem href="#scrollspyHeading3">Third</DropdownItem>
              <DropdownItem href="#scrollspyHeading4">Fourth</DropdownItem>
              <DropdownDivider />
              <DropdownItem href="#scrollspyHeading5">Fifth</DropdownItem>
            </DropdownMenu>
          </NavItem>
        </Nav>
      </Navbar>
      <div
        className="scrollspy-example bg-body-tertiary p-3 rounded-2"
        // data-bs-spy="scroll"
        // data-bs-target="#navbar-example2"
        // data-bs-root-margin="0px 0px -40%"
        // data-bs-smooth-scroll="true"
        tabIndex={0}
        ref={scrollSpy.ref}
      >
        <h4 id="scrollspyHeading1">First heading</h4>
        <p>
          This is some placeholder content for the scrollspy page. Note that as you scroll down the
          page, the appropriate navigation link is highlighted. It's repeated throughout the
          component example. We keep adding some more example copy here to emphasize the scrolling
          and highlighting.
        </p>
        <h4 id="scrollspyHeading2">Second heading</h4>
        <p>
          This is some placeholder content for the scrollspy page. Note that as you scroll down the
          page, the appropriate navigation link is highlighted. It's repeated throughout the
          component example. We keep adding some more example copy here to emphasize the scrolling
          and highlighting.
        </p>
        <h4 id="scrollspyHeading3">Third heading</h4>
        <p>
          This is some placeholder content for the scrollspy page. Note that as you scroll down the
          page, the appropriate navigation link is highlighted. It's repeated throughout the
          component example. We keep adding some more example copy here to emphasize the scrolling
          and highlighting.
        </p>
        <h4 id="scrollspyHeading4">Fourth heading</h4>
        <p>
          This is some placeholder content for the scrollspy page. Note that as you scroll down the
          page, the appropriate navigation link is highlighted. It's repeated throughout the
          component example. We keep adding some more example copy here to emphasize the scrolling
          and highlighting.
        </p>
        <h4 id="scrollspyHeading5">Fifth heading</h4>
        <p>
          This is some placeholder content for the scrollspy page. Note that as you scroll down the
          page, the appropriate navigation link is highlighted. It's repeated throughout the
          component example. We keep adding some more example copy here to emphasize the scrolling
          and highlighting.
        </p>
      </div>
    </div>
  )
}
NavbarStory.storyName = 'Navbar'

export const NestedNav: StoryFn = () => {
  const scrollSpy = useScrollSpy()

  return (
    <div className="bd-example">
      <Row>
        <Col brCols={4}>
          <Navbar
            id="navbar-example3"
            className="h-100"
            brFlex={{ column: true, alignItems: 'stretch' }}
            brPadding={{ end: 4 }}
            brBorder={{ end: true }}
          >
            <Nav brPills brFlex={{ column: true }}>
              <NavLink href="#item-1">Item 1</NavLink>
              <Nav brPills brFlex={{ column: true }}>
                <NavLink brMargin={{ start: 3, y: 1 }} href="#item-1-1">
                  Item 1-1
                </NavLink>
                <NavLink brMargin={{ start: 3, y: 1 }} href="#item-1-2">
                  Item 1-2
                </NavLink>
              </Nav>
              <NavLink href="#item-2">Item 2</NavLink>
              <NavLink href="#item-3">Item 3</NavLink>
              <Nav brPills brFlex={{ column: true }}>
                <NavLink brMargin={{ start: 3, y: 1 }} href="#item-3-1">
                  Item 3-1
                </NavLink>
                <NavLink brMargin={{ start: 3, y: 1 }} href="#item-3-2">
                  Item 3-2
                </NavLink>
              </Nav>
            </Nav>
          </Navbar>
        </Col>
        <Col brCols={8}>
          <div
            /* data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" */
            className="scrollspy-example-2"
            tabIndex={0}
            ref={scrollSpy.ref}
          >
            <div id="item-1">
              <h4>Item 1</h4>
              <p>
                This is some placeholder content for the scrollspy page. Note that as you scroll
                down the page, the appropriate navigation link is highlighted. It's repeated
                throughout the component example. We keep adding some more example copy here to
                emphasize the scrolling and highlighting.
              </p>
              <p>
                Keep in mind that the JavaScript plugin tries to pick the right element among all
                that may be visible. Multiple visible scrollspy targets at the same time may cause
                some issues.
              </p>
            </div>
            <div id="item-1-1">
              <h5>Item 1-1</h5>
              <p>
                This is some placeholder content for the scrollspy page. Note that as you scroll
                down the page, the appropriate navigation link is highlighted. It's repeated
                throughout the component example. We keep adding some more example copy here to
                emphasize the scrolling and highlighting.
              </p>
              <p>
                Keep in mind that the JavaScript plugin tries to pick the right element among all
                that may be visible. Multiple visible scrollspy targets at the same time may cause
                some issues.
              </p>
            </div>
            <div id="item-1-2">
              <h5>Item 1-2</h5>
              <p>
                This is some placeholder content for the scrollspy page. Note that as you scroll
                down the page, the appropriate navigation link is highlighted. It's repeated
                throughout the component example. We keep adding some more example copy here to
                emphasize the scrolling and highlighting.
              </p>
              <p>
                Keep in mind that the JavaScript plugin tries to pick the right element among all
                that may be visible. Multiple visible scrollspy targets at the same time may cause
                some issues.
              </p>
            </div>
            <div id="item-2">
              <h4>Item 2</h4>
              <p>
                This is some placeholder content for the scrollspy page. Note that as you scroll
                down the page, the appropriate navigation link is highlighted. It's repeated
                throughout the component example. We keep adding some more example copy here to
                emphasize the scrolling and highlighting.
              </p>
              <p>
                Keep in mind that the JavaScript plugin tries to pick the right element among all
                that may be visible. Multiple visible scrollspy targets at the same time may cause
                some issues.
              </p>
            </div>
            <div id="item-3">
              <h4>Item 3</h4>
              <p>
                This is some placeholder content for the scrollspy page. Note that as you scroll
                down the page, the appropriate navigation link is highlighted. It's repeated
                throughout the component example. We keep adding some more example copy here to
                emphasize the scrolling and highlighting.
              </p>
              <p>
                Keep in mind that the JavaScript plugin tries to pick the right element among all
                that may be visible. Multiple visible scrollspy targets at the same time may cause
                some issues.
              </p>
            </div>
            <div id="item-3-1">
              <h5>Item 3-1</h5>
              <p>
                This is some placeholder content for the scrollspy page. Note that as you scroll
                down the page, the appropriate navigation link is highlighted. It's repeated
                throughout the component example. We keep adding some more example copy here to
                emphasize the scrolling and highlighting.
              </p>
              <p>
                Keep in mind that the JavaScript plugin tries to pick the right element among all
                that may be visible. Multiple visible scrollspy targets at the same time may cause
                some issues.
              </p>
            </div>
            <div id="item-3-2">
              <h5>Item 3-2</h5>
              <p>
                This is some placeholder content for the scrollspy page. Note that as you scroll
                down the page, the appropriate navigation link is highlighted. It's repeated
                throughout the component example. We keep adding some more example copy here to
                emphasize the scrolling and highlighting.
              </p>
              <p>
                Keep in mind that the JavaScript plugin tries to pick the right element among all
                that may be visible. Multiple visible scrollspy targets at the same time may cause
                some issues.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export const ListGroupStory: StoryFn = () => {
  const scrollSpy = useScrollSpy()

  return (
    <div className="bd-example">
      <Row>
        <Col brCols={4}>
          <ListGroup id="list-example">
            <ListGroupItem as="a" brAction href="#list-item-1">
              Item 1
            </ListGroupItem>
            <ListGroupItem as="a" brAction href="#list-item-2">
              Item 2
            </ListGroupItem>
            <ListGroupItem as="a" brAction href="#list-item-3">
              Item 3
            </ListGroupItem>
            <ListGroupItem as="a" brAction href="#list-item-4">
              Item 4
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col brCols={8}>
          <div
            // data-bs-spy="scroll"
            // data-bs-target="#list-example"
            // data-bs-smooth-scroll="true"
            className="scrollspy-example"
            tabIndex={0}
            ref={scrollSpy.ref}
          >
            <h4 id="list-item-1">Item 1</h4>
            <p>
              This is some placeholder content for the scrollspy page. Note that as you scroll down
              the page, the appropriate navigation link is highlighted. It's repeated throughout the
              component example. We keep adding some more example copy here to emphasize the
              scrolling and highlighting.
            </p>
            <h4 id="list-item-2">Item 2</h4>
            <p>
              This is some placeholder content for the scrollspy page. Note that as you scroll down
              the page, the appropriate navigation link is highlighted. It's repeated throughout the
              component example. We keep adding some more example copy here to emphasize the
              scrolling and highlighting.
            </p>
            <h4 id="list-item-3">Item 3</h4>
            <p>
              This is some placeholder content for the scrollspy page. Note that as you scroll down
              the page, the appropriate navigation link is highlighted. It's repeated throughout the
              component example. We keep adding some more example copy here to emphasize the
              scrolling and highlighting.
            </p>
            <h4 id="list-item-4">Item 4</h4>
            <p>
              This is some placeholder content for the scrollspy page. Note that as you scroll down
              the page, the appropriate navigation link is highlighted. It's repeated throughout the
              component example. We keep adding some more example copy here to emphasize the
              scrolling and highlighting.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  )
}
ListGroupStory.storyName = 'ListGroup'

export const SimpleAnchors: StoryFn = () => {
  const scrollSpy = useScrollSpy()

  return (
    <div className="bd-example">
      <Row>
        <Col brCols={4}>
          <BrElement
            id="simple-list-example"
            className="simple-list-example-scrollspy text-center"
            brDisplay="flex"
            brFlex={{ column: true, gap: 2 }}
          >
            <BrElement as="a" brPadding={1} className="rounded" href="#simple-list-item-1">
              Item 1
            </BrElement>
            <BrElement as="a" brPadding={1} className="rounded" href="#simple-list-item-2">
              Item 2
            </BrElement>
            <BrElement as="a" brPadding={1} className="rounded" href="#simple-list-item-3">
              Item 3
            </BrElement>
            <BrElement as="a" brPadding={1} className="rounded" href="#simple-list-item-4">
              Item 4
            </BrElement>
            <BrElement as="a" brPadding={1} className="rounded" href="#simple-list-item-5">
              Item 5
            </BrElement>
          </BrElement>
        </Col>
        <Col brCols={8}>
          <div
            // data-bs-spy="scroll"
            // data-bs-target="#simple-list-example"
            // data-bs-offset="0"
            // data-bs-smooth-scroll="true"
            className="scrollspy-example"
            tabIndex={0}
            ref={scrollSpy.ref}
          >
            <h4 id="simple-list-item-1">Item 1</h4>
            <p>
              This is some placeholder content for the scrollspy page. Note that as you scroll down
              the page, the appropriate navigation link is highlighted. It's repeated throughout the
              component example. We keep adding some more example copy here to emphasize the
              scrolling and highlighting.
            </p>
            <h4 id="simple-list-item-2">Item 2</h4>
            <p>
              This is some placeholder content for the scrollspy page. Note that as you scroll down
              the page, the appropriate navigation link is highlighted. It's repeated throughout the
              component example. We keep adding some more example copy here to emphasize the
              scrolling and highlighting.
            </p>
            <h4 id="simple-list-item-3">Item 3</h4>
            <p>
              This is some placeholder content for the scrollspy page. Note that as you scroll down
              the page, the appropriate navigation link is highlighted. It's repeated throughout the
              component example. We keep adding some more example copy here to emphasize the
              scrolling and highlighting.
            </p>
            <h4 id="simple-list-item-4">Item 4</h4>
            <p>
              This is some placeholder content for the scrollspy page. Note that as you scroll down
              the page, the appropriate navigation link is highlighted. It's repeated throughout the
              component example. We keep adding some more example copy here to emphasize the
              scrolling and highlighting.
            </p>
            <h4 id="simple-list-item-5">Item 5</h4>
            <p>
              This is some placeholder content for the scrollspy page. Note that as you scroll down
              the page, the appropriate navigation link is highlighted. It's repeated throughout the
              component example. We keep adding some more example copy here to emphasize the
              scrolling and highlighting.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  )
}
