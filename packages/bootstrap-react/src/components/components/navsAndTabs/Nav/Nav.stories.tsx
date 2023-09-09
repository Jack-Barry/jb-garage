import { BrElement } from '@jb-garage/bootstrap-react/components/utils/BrElement'
import { useTabs } from '@jb-garage/bootstrap-react/hooks/useTabs'
import { Meta, StoryFn } from '@storybook/react'
import classNames from 'classnames'
import { MouseEvent } from 'react'

import DropdownDivider from '../../Dropdown/DropdownDivider'
import DropdownItem from '../../Dropdown/DropdownItem'
import DropdownMenu from '../../Dropdown/DropdownMenu'
import DropdownToggle from '../../Dropdown/DropdownToggle'
import { useDropdown } from '../../Dropdown/useDropdown'

import Nav from './Nav'
import NavItem from './NavItem'
import NavLink from './NavLink'

const meta: Meta<typeof Nav> = {
  title: 'Navs & Tabs/Nav',
  tags: ['autodocs'],
  argTypes: {}
}

export default meta
export const BaseExample: StoryFn = () => {
  return (
    <div>
      <Nav>
        <NavItem>
          <NavLink aria-current="page" href="#" brNavLinkActive>
            Active
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink brNavLinkDisabled>Disabled</NavLink>
        </NavItem>
      </Nav>
      <hr />
      <Nav as="nav">
        <NavLink aria-current="page" href="#" brNavLinkActive>
          Active
        </NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink brNavLinkDisabled>Disabled</NavLink>
      </Nav>
    </div>
  )
}

export const AvailableStylesHorizontalAlignment: StoryFn = () => {
  return (
    <div>
      <Nav className="justify-content-center">
        <NavItem>
          <NavLink aria-current="page" href="#" brNavLinkActive>
            Active
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink brNavLinkDisabled>Disabled</NavLink>
        </NavItem>
      </Nav>
      <hr />
      <Nav className="justify-content-end">
        <NavItem>
          <NavLink aria-current="page" href="#" brNavLinkActive>
            Active
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink brNavLinkDisabled>Disabled</NavLink>
        </NavItem>
      </Nav>
    </div>
  )
}

export const AvailableStylesVertical: StoryFn = () => {
  return (
    <div>
      <Nav bsJs={{ bsJsAll: { flex: { column: true } } }}>
        <NavItem>
          <NavLink aria-current="page" href="#" brNavLinkActive>
            Active
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink brNavLinkDisabled>Disabled</NavLink>
        </NavItem>
      </Nav>
      <hr />
      <Nav as="nav" bsJs={{ bsJsAll: { flex: { column: true } } }}>
        <NavLink aria-current="page" href="#" brNavLinkActive>
          Active
        </NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink brNavLinkDisabled>Disabled</NavLink>
      </Nav>
    </div>
  )
}

export const AvailableStylesTabs: StoryFn = () => {
  return (
    <Nav className="nav-tabs">
      <NavItem>
        <NavLink aria-current="page" href="#" brNavLinkActive>
          Active
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink brNavLinkDisabled>Disabled</NavLink>
      </NavItem>
    </Nav>
  )
}

export const AvailableStylesPills: StoryFn = () => {
  return (
    <Nav className="nav-pills">
      <NavItem>
        <NavLink aria-current="page" href="#" brNavLinkActive>
          Active
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink brNavLinkDisabled>Disabled</NavLink>
      </NavItem>
    </Nav>
  )
}

export const AvailableStylesUnderline: StoryFn = () => {
  return (
    <Nav className="nav-underline">
      <NavItem>
        <NavLink aria-current="page" href="#" brNavLinkActive>
          Active
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink brNavLinkDisabled>Disabled</NavLink>
      </NavItem>
    </Nav>
  )
}

export const AvailableStylesFillAndJustify: StoryFn = () => {
  return (
    <div>
      <Nav className="nav-pills nav-fill">
        <NavItem>
          <NavLink aria-current="page" href="#" brNavLinkActive>
            Active
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Much longer nav link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink brNavLinkDisabled>Disabled</NavLink>
        </NavItem>
      </Nav>
      <hr />
      <Nav as="nav" className="nav-pills nav-fill">
        <NavLink aria-current="page" href="#" brNavLinkActive>
          Active
        </NavLink>
        <NavLink href="#">Much longer nav link</NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink brNavLinkDisabled>Disabled</NavLink>
      </Nav>
      <hr />
      <Nav className="nav-pills nav-justified">
        <NavItem>
          <NavLink aria-current="page" href="#" brNavLinkActive>
            Active
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Much longer nav link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink brNavLinkDisabled>Disabled</NavLink>
        </NavItem>
      </Nav>
      <hr />
      <Nav as="nav" className="nav-pills nav-justified">
        <NavLink aria-current="page" href="#" brNavLinkActive>
          Active
        </NavLink>
        <NavLink href="#">Much longer nav link</NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink brNavLinkDisabled>Disabled</NavLink>
      </Nav>
    </div>
  )
}

export const WorkingWithFlexUtilities: StoryFn = () => {
  return (
    <Nav
      as="nav"
      bsJs={{ bsJsAll: { flex: { column: true } }, sm: { flex: { row: true } } }}
      brNavPills
    >
      <NavLink aria-current="page" href="#" brNavLinkActive>
        Active
      </NavLink>
      <NavLink href="#">Longer nav link</NavLink>
      <NavLink href="#">Link</NavLink>
      <NavLink brNavLinkDisabled>Disabled</NavLink>
    </Nav>
  )
}

export const UsingDropdownsTabsWithDropdowns: StoryFn = () => {
  const { isOpen, dropdownRef } = useDropdown<HTMLAnchorElement>()

  return (
    <div style={{ minHeight: '200px' }}>
      <Nav className="nav-tabs">
        <NavItem>
          <NavLink aria-current="page" href="#" brNavLinkActive>
            Active
          </NavLink>
        </NavItem>
        <NavItem className="dropdown">
          <DropdownToggle
            as="a"
            className="nav-link"
            href="#"
            role="button"
            ref={dropdownRef}
            aria-expanded={isOpen}
          >
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#">Action</DropdownItem>
            <DropdownItem href="#">Another action</DropdownItem>
            <DropdownItem href="#">Something else here</DropdownItem>
            <DropdownDivider />
            <DropdownItem href="#">Separated link</DropdownItem>
          </DropdownMenu>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink brNavLinkDisabled>Disabled</NavLink>
        </NavItem>
      </Nav>
    </div>
  )
}

export const UsingDropdownsPillsWithDropdowns: StoryFn = () => {
  const { isOpen, dropdownRef } = useDropdown<HTMLAnchorElement>()

  return (
    <div style={{ minHeight: '200px' }}>
      <Nav className="nav-pills">
        <NavItem>
          <NavLink aria-current="page" href="#" brNavLinkActive>
            Active
          </NavLink>
        </NavItem>
        <NavItem className="dropdown">
          <DropdownToggle
            as="a"
            className="nav-link"
            href="#"
            role="button"
            ref={dropdownRef}
            aria-expanded={isOpen}
          >
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#">Action</DropdownItem>
            <DropdownItem href="#">Another action</DropdownItem>
            <DropdownItem href="#">Something else here</DropdownItem>
            <DropdownDivider />
            <DropdownItem href="#">Separated link</DropdownItem>
          </DropdownMenu>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink brNavLinkDisabled>Disabled</NavLink>
        </NavItem>
      </Nav>
    </div>
  )
}

export const JavascriptBehavior: StoryFn = () => {
  const { registerTab, setActiveTab, activeTab } = useTabs()

  function handleTabClick1(e: MouseEvent) {
    e.preventDefault()
    setActiveTab((e.target as HTMLButtonElement).id)
  }

  return (
    <div>
      <div>
        <Nav className="nav-tabs" id="myTab" role="tablist">
          <NavItem role="presentation">
            <NavLink
              as="button"
              id="home-tab"
              data-bs-target="#home-tab-pane"
              type="button"
              role="tab"
              aria-controls="home-tab-pane"
              aria-selected={activeTab === 'home-tab'}
              ref={registerTab}
              onClick={handleTabClick1}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem role="presentation">
            <NavLink
              as="button"
              id="profile-tab"
              data-bs-target="#profile-tab-pane"
              type="button"
              role="tab"
              aria-controls="profile-tab-pane"
              aria-selected={activeTab === 'profile-tab'}
              ref={registerTab}
              onClick={handleTabClick1}
            >
              Profile
            </NavLink>
          </NavItem>
          <NavItem role="presentation">
            <NavLink
              as="button"
              id="contact-tab"
              data-bs-target="#contact-tab-pane"
              type="button"
              role="tab"
              aria-controls="contact-tab-pane"
              aria-selected={activeTab === 'contact-tab'}
              ref={registerTab}
              onClick={handleTabClick1}
            >
              Contact
            </NavLink>
          </NavItem>
          <NavItem role="presentation">
            <NavLink
              as="button"
              id="disabled-tab"
              data-bs-target="#disabled-tab-pane"
              type="button"
              role="tab"
              aria-controls="disabled-tab-pane"
              aria-selected={activeTab === 'disabled-tab'}
              disabled
              ref={registerTab}
              onClick={handleTabClick1}
            >
              Disabled
            </NavLink>
          </NavItem>
        </Nav>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade"
            id="home-tab-pane"
            role="tabpanel"
            aria-labelledby="home-tab"
            tabIndex={0}
          >
            Home
          </div>
          <div
            className="tab-pane fade"
            id="profile-tab-pane"
            role="tabpanel"
            aria-labelledby="profile-tab"
            tabIndex={0}
          >
            Profile
          </div>
          <div
            className="tab-pane fade"
            id="contact-tab-pane"
            role="tabpanel"
            aria-labelledby="contact-tab"
            tabIndex={0}
          >
            Contact
          </div>
          <div
            className="tab-pane fade"
            id="disabled-tab-pane"
            role="tabpanel"
            aria-labelledby="disabled-tab"
            tabIndex={0}
          >
            Disabled
          </div>
        </div>
      </div>
      <hr />
      <JavascriptBehaviorExample idPrefix="pills" className="nav-pills" />
      <hr />
      <JavascriptBehaviorExample idPrefix="v-pills" className="flex-column nav-pills" />
    </div>
  )
}

function JavascriptBehaviorExample(props: { idPrefix: string; className: string }) {
  const { idPrefix, className } = props
  const { registerTab, setActiveTab, activeTab } = useTabs()

  function handleTabClick1(e: MouseEvent) {
    e.preventDefault()
    setActiveTab((e.target as HTMLButtonElement).id)
  }

  return (
    <BrElement
      bsJs={{ bsJsAll: { display: idPrefix === 'v-pills' ? 'flex' : undefined } }}
      className={classNames({
        'align-items-start': idPrefix === 'v-pills'
      })}
    >
      <Nav
        className={classNames(
          { 'mb-3': idPrefix === 'pills', 'me-3': idPrefix === 'v-pills' },
          className
        )}
        id={`${idPrefix}-tab`}
        role="tablist"
        aria-orientation={idPrefix === 'v-pills' ? 'vertical' : undefined}
      >
        <NavItem role="presentation">
          <NavLink
            as="button"
            id={`${idPrefix}-home-tab`}
            data-bs-target={`#${idPrefix}-home-tab-pane`}
            type="button"
            role="tab"
            aria-controls={`${idPrefix}-home-tab-pane`}
            aria-selected={activeTab === `${idPrefix}-home-tab`}
            ref={registerTab}
            onClick={handleTabClick1}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem role="presentation">
          <NavLink
            as="button"
            id={`${idPrefix}-profile-tab`}
            data-bs-target={`#${idPrefix}-profile-tab-pane`}
            type="button"
            role="tab"
            aria-controls={`${idPrefix}-profile-tab-pane`}
            aria-selected={activeTab === `${idPrefix}-profile-tab`}
            ref={registerTab}
            onClick={handleTabClick1}
          >
            Profile
          </NavLink>
        </NavItem>
        <NavItem role="presentation">
          <NavLink
            as="button"
            id={`${idPrefix}-contact-tab`}
            data-bs-target={`#${idPrefix}-contact-tab-pane`}
            type="button"
            role="tab"
            aria-controls={`${idPrefix}-contact-tab-pane`}
            aria-selected={activeTab === `${idPrefix}-contact-tab`}
            ref={registerTab}
            onClick={handleTabClick1}
          >
            Contact
          </NavLink>
        </NavItem>
        <NavItem role="presentation">
          <NavLink
            as="button"
            id={`${idPrefix}-disabled-tab`}
            data-bs-target={`#${idPrefix}-disabled-tab-pane`}
            type="button"
            role="tab"
            aria-controls={`${idPrefix}-disabled-tab-pane`}
            aria-selected={activeTab === `${idPrefix}-disabled-tab`}
            brNavLinkDisabled
            ref={registerTab}
            onClick={handleTabClick1}
          >
            Disabled
          </NavLink>
        </NavItem>
        {idPrefix === 'v-pills' && (
          <NavItem role="presentation">
            <NavLink
              as="button"
              id={`${idPrefix}-messages-tab`}
              data-bs-target={`#${idPrefix}-messages-tab-pane`}
              type="button"
              role="tab"
              aria-controls={`${idPrefix}-messages-tab-pane`}
              aria-selected={activeTab === `${idPrefix}-messages-tab`}
              ref={registerTab}
              onClick={handleTabClick1}
            >
              Messages
            </NavLink>
          </NavItem>
        )}
        {idPrefix === 'v-pills' && (
          <NavItem role="presentation">
            <NavLink
              as="button"
              id={`${idPrefix}-settings-tab`}
              data-bs-target={`#${idPrefix}-settings-tab-pane`}
              type="button"
              role="tab"
              aria-controls={`${idPrefix}-settings-tab-pane`}
              aria-selected={activeTab === `${idPrefix}-settings-tab`}
              ref={registerTab}
              onClick={handleTabClick1}
            >
              Settings
            </NavLink>
          </NavItem>
        )}
      </Nav>
      <div className="tab-content" id={`${idPrefix}-myTabContent`}>
        <div
          className="tab-pane fade"
          id={`${idPrefix}-home-tab-pane`}
          role="tabpanel"
          aria-labelledby={`${idPrefix}-home-tab`}
          tabIndex={0}
        >
          Home
        </div>
        <div
          className="tab-pane fade"
          id={`${idPrefix}-profile-tab-pane`}
          role="tabpanel"
          aria-labelledby={`${idPrefix}-profile-tab`}
          tabIndex={0}
        >
          Profile
        </div>
        <div
          className="tab-pane fade"
          id={`${idPrefix}-contact-tab-pane`}
          role="tabpanel"
          aria-labelledby={`${idPrefix}-contact-tab`}
          tabIndex={0}
        >
          Contact
        </div>
        <div
          className="tab-pane fade"
          id={`${idPrefix}-disabled-tab-pane`}
          role="tabpanel"
          aria-labelledby={`${idPrefix}-disabled-tab`}
          tabIndex={0}
        >
          Disabled
        </div>
        {idPrefix === 'v-pills' && (
          <div
            className="tab-pane fade"
            id={`${idPrefix}-messages-tab-pane`}
            role="tabpanel"
            aria-labelledby={`${idPrefix}-messages-tab`}
            tabIndex={0}
          >
            Messages
          </div>
        )}
        {idPrefix === 'v-pills' && (
          <div
            className="tab-pane fade"
            id={`${idPrefix}-settings-tab-pane`}
            role="tabpanel"
            aria-labelledby={`${idPrefix}-settings-tab`}
            tabIndex={0}
          >
            Settings
          </div>
        )}
      </div>
    </BrElement>
  )
}
