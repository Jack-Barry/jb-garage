import { Meta, StoryFn } from '@storybook/react'

import Col from '../../layout/columns/Col'
import Row from '../../layout/grid/Row'
import { BrElement } from '../../utils/BrElement'
import DropdownDivider from '../Dropdown/DropdownDivider'
import DropdownItem from '../Dropdown/DropdownItem'
import DropdownMenu from '../Dropdown/DropdownMenu'
import { useDropdown } from '../Dropdown/useDropdown'
import ListGroup from '../ListGroup/ListGroup'
import ListGroupItem from '../ListGroup/ListGroupItem'
import Navbar from '../Navbar/Navbar'
import NavbarBrand from '../Navbar/NavbarBrand'
import Nav from '../navsAndTabs/Nav/Nav'
import NavItem from '../navsAndTabs/Nav/NavItem'
import NavLink from '../navsAndTabs/Nav/NavLink'

import { useScrollSpy } from './useScrollSpy'

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
        bsJs={{
          background: 'body-tertiary',
          spacing: { margin: { bottom: '3' }, padding: { x: '3' } }
        }}
        className="rounded-2"
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
              <DropdownItem href="#scrollspyHeading3">Third</DropdownItem>
              <DropdownItem href="#scrollspyHeading4">Fourth</DropdownItem>
              <DropdownDivider />
              <DropdownItem href="#scrollspyHeading5">Fifth</DropdownItem>
            </DropdownMenu>
          </NavItem>
        </Nav>
      </Navbar>
      <BrElement
        className="scrollspy-example rounded-2"
        bsJs={{ background: 'body-tertiary', spacing: { padding: '3' } }}
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
      </BrElement>
    </div>
  )
}
NavbarStory.storyName = 'Navbar'

export const NestedNav: StoryFn = () => {
  const scrollSpy = useScrollSpy()

  return (
    <div className="bd-example">
      <Row>
        <Col bsJs={{ cols: 4 }}>
          <Navbar
            id="navbar-example3"
            className="h-100"
            bsJs={{
              border: { end: true },
              flex: { column: true, alignItems: 'stretch' },
              spacing: { padding: { end: '4' } }
            }}
          >
            <Nav bsJs={{ pills: true, flex: { column: true } }}>
              <NavLink href="#item-1">Item 1</NavLink>
              <Nav bsJs={{ pills: true, flex: { column: true } }}>
                <NavLink bsJs={{ spacing: { margin: { start: '3', y: '1' } } }} href="#item-1-1">
                  Item 1-1
                </NavLink>
                <NavLink bsJs={{ spacing: { margin: { start: '3', y: '1' } } }} href="#item-1-2">
                  Item 1-2
                </NavLink>
              </Nav>
              <NavLink href="#item-2">Item 2</NavLink>
              <NavLink href="#item-3">Item 3</NavLink>
              <Nav bsJs={{ pills: true, flex: { column: true } }}>
                <NavLink bsJs={{ spacing: { margin: { start: '3', y: '1' } } }} href="#item-3-1">
                  Item 3-1
                </NavLink>
                <NavLink bsJs={{ spacing: { margin: { start: '3', y: '1' } } }} href="#item-3-2">
                  Item 3-2
                </NavLink>
              </Nav>
            </Nav>
          </Navbar>
        </Col>
        <Col bsJs={{ cols: 8 }}>
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
        <Col bsJs={{ cols: 4 }}>
          <ListGroup id="list-example">
            <ListGroupItem as="a" bsJs={{ action: true }} href="#list-item-1">
              Item 1
            </ListGroupItem>
            <ListGroupItem as="a" bsJs={{ action: true }} href="#list-item-2">
              Item 2
            </ListGroupItem>
            <ListGroupItem as="a" bsJs={{ action: true }} href="#list-item-3">
              Item 3
            </ListGroupItem>
            <ListGroupItem as="a" bsJs={{ action: true }} href="#list-item-4">
              Item 4
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col bsJs={{ cols: 8 }}>
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
        <Col bsJs={{ cols: 4 }}>
          <BrElement
            id="simple-list-example"
            className="simple-list-example-scrollspy text-center"
            bsJs={{ display: 'flex', flex: { column: true }, spacing: { gap: '2' } }}
          >
            <BrElement
              as="a"
              bsJs={{ border: true, spacing: { padding: '1' } }}
              href="#simple-list-item-1"
            >
              Item 1
            </BrElement>
            <BrElement
              as="a"
              bsJs={{ border: true, spacing: { padding: '1' } }}
              href="#simple-list-item-2"
            >
              Item 2
            </BrElement>
            <BrElement
              as="a"
              bsJs={{ border: true, spacing: { padding: '1' } }}
              href="#simple-list-item-3"
            >
              Item 3
            </BrElement>
            <BrElement
              as="a"
              bsJs={{ border: true, spacing: { padding: '1' } }}
              href="#simple-list-item-4"
            >
              Item 4
            </BrElement>
            <BrElement
              as="a"
              bsJs={{ border: true, spacing: { padding: '1' } }}
              href="#simple-list-item-5"
            >
              Item 5
            </BrElement>
          </BrElement>
        </Col>
        <Col bsJs={{ cols: 8 }}>
          <div className="scrollspy-example" tabIndex={0} ref={scrollSpy.ref}>
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
