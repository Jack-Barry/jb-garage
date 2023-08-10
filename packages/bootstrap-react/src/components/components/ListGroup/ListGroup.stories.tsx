import type { Meta, StoryFn } from '@storybook/react'

import { as } from '../../../storybook/utils'
import ListGroup from './ListGroup'
import ListGroupItem from './ListGroupItem'
import { linkToBootstrapDocs } from '@jb-garage/bootstrap-react/storybook/decorators/linkToBootstrapDocs'
import Badge from '../Badge/Badge'
import FormCheck from '../../forms/FormCheck/FormCheck'
import { MouseEvent } from 'react'
import { useTabs } from '@jb-garage/bootstrap-react/hooks/useTabs'
import { BrElement } from '../../utils/BrElement'
import Row from '../../layout/grid/Row'
import Col from '../../layout/columns/Col'

const meta: Meta<typeof ListGroup> = {
  component: ListGroup,
  tags: ['autodocs'],
  argTypes: { as }
}

export default meta
export const BaseExample: StoryFn = () => {
  return (
    <ListGroup>
      <ListGroupItem>An item</ListGroupItem>
      <ListGroupItem>A second item</ListGroupItem>
      <ListGroupItem>A third item</ListGroupItem>
      <ListGroupItem>A fourth item</ListGroupItem>
      <ListGroupItem>And a fifth one</ListGroupItem>
    </ListGroup>
  )
}

export const ActiveItems: StoryFn = () => {
  return (
    <ListGroup>
      <ListGroupItem className="active" aria-current={true}>
        An active item
      </ListGroupItem>
      <ListGroupItem>A second item</ListGroupItem>
      <ListGroupItem>A third item</ListGroupItem>
      <ListGroupItem>A fourth item</ListGroupItem>
      <ListGroupItem>And a fifth one</ListGroupItem>
    </ListGroup>
  )
}
ActiveItems.decorators = [
  linkToBootstrapDocs('https://getbootstrap.com/docs/5.3/components/list-group/#active-items')
]

export const DisabledItems: StoryFn = () => {
  return (
    <ListGroup>
      <ListGroupItem className="disabled" aria-disabled={true}>
        A disabled item
      </ListGroupItem>
      <ListGroupItem>A second item</ListGroupItem>
      <ListGroupItem>A third item</ListGroupItem>
      <ListGroupItem>A fourth item</ListGroupItem>
      <ListGroupItem>And a fifth one</ListGroupItem>
    </ListGroup>
  )
}
DisabledItems.decorators = [
  linkToBootstrapDocs('https://getbootstrap.com/docs/5.3/components/list-group/#disabled-items')
]

export const LinksAndButtons: StoryFn = () => {
  return (
    <div>
      <ListGroup as="div">
        <ListGroupItem
          as="a"
          href="#"
          className="list-group-item-action active"
          aria-current="true"
        >
          The current link item
        </ListGroupItem>
        <ListGroupItem as="a" href="#" className="list-group-item-action">
          A second link item
        </ListGroupItem>
        <ListGroupItem as="a" href="#" className="list-group-item-action">
          A third link item
        </ListGroupItem>
        <ListGroupItem as="a" href="#" className="list-group-item-action">
          A fourth link item
        </ListGroupItem>
        <ListGroupItem as="a" className="list-group-item-action disabled">
          A disabled link item
        </ListGroupItem>
      </ListGroup>
      <hr />
      <ListGroup as="div">
        <ListGroupItem as="button" className="list-group-item-action active" aria-current="true">
          The current button item
        </ListGroupItem>
        <ListGroupItem as="button" className="list-group-item-action">
          A second button item
        </ListGroupItem>
        <ListGroupItem as="button" className="list-group-item-action">
          A third button item
        </ListGroupItem>
        <ListGroupItem as="button" className="list-group-item-action">
          A fourth button item
        </ListGroupItem>
        <ListGroupItem as="button" className="list-group-item-action" disabled>
          A disabled button item
        </ListGroupItem>
      </ListGroup>
    </div>
  )
}
LinksAndButtons.decorators = [
  linkToBootstrapDocs('https://getbootstrap.com/docs/5.3/components/list-group/#links-and-buttons')
]

export const Flush: StoryFn = () => {
  return (
    <ListGroup className="list-group-flush">
      <ListGroupItem>An item</ListGroupItem>
      <ListGroupItem>A second item</ListGroupItem>
      <ListGroupItem>A third item</ListGroupItem>
      <ListGroupItem>A fourth item</ListGroupItem>
      <ListGroupItem>And a fifth one</ListGroupItem>
    </ListGroup>
  )
}
Flush.decorators = [
  linkToBootstrapDocs('https://getbootstrap.com/docs/5.3/components/list-group/#flush')
]

export const Numbered: StoryFn = () => {
  return (
    <div>
      <ListGroup as="ol" className="list-group-numbered">
        <ListGroupItem>A list item</ListGroupItem>
        <ListGroupItem>A list item</ListGroupItem>
        <ListGroupItem>A list item</ListGroupItem>
      </ListGroup>
      <hr />
      <ListGroup as="ol" className="list-group-numbered">
        <ListGroupItem
          brUtilsDisplay="flex"
          brUtilsFlex={{ justifyContent: 'between', alignItems: 'start' }}
        >
          <BrElement brMargin={{ start: 2, end: 'auto' }}>
            <div className="fw-bold">Subheading</div>
            Content for list item
          </BrElement>
          <Badge className="rounded-pill" brUtilsBackground="primary">
            14
          </Badge>
        </ListGroupItem>
        <ListGroupItem
          brUtilsDisplay="flex"
          brUtilsFlex={{ justifyContent: 'between', alignItems: 'start' }}
        >
          <BrElement brMargin={{ start: 2, end: 'auto' }}>
            <div className="fw-bold">Subheading</div>
            Content for list item
          </BrElement>
          <Badge className="rounded-pill" brUtilsBackground="primary">
            14
          </Badge>
        </ListGroupItem>
        <ListGroupItem
          brUtilsDisplay="flex"
          brUtilsFlex={{ justifyContent: 'between', alignItems: 'start' }}
        >
          <BrElement brMargin={{ start: 2, end: 'auto' }}>
            <div className="fw-bold">Subheading</div>
            Content for list item
          </BrElement>
          <Badge className="rounded-pill" brUtilsBackground="primary">
            14
          </Badge>
        </ListGroupItem>
      </ListGroup>
    </div>
  )
}
Numbered.decorators = [
  linkToBootstrapDocs('https://getbootstrap.com/docs/5.3/components/list-group/#numbered')
]

export const Horizontal: StoryFn = () => {
  return (
    <div>
      <ListGroup className="list-group-horizontal">
        <ListGroupItem>An item</ListGroupItem>
        <ListGroupItem>A second item</ListGroupItem>
        <ListGroupItem>A third item</ListGroupItem>
      </ListGroup>
      <ListGroup className="list-group-horizontal-sm">
        <ListGroupItem>An item</ListGroupItem>
        <ListGroupItem>A second item</ListGroupItem>
        <ListGroupItem>A third item</ListGroupItem>
      </ListGroup>
      <ListGroup className="list-group-horizontal-md">
        <ListGroupItem>An item</ListGroupItem>
        <ListGroupItem>A second item</ListGroupItem>
        <ListGroupItem>A third item</ListGroupItem>
      </ListGroup>
      <ListGroup className="list-group-horizontal-lg">
        <ListGroupItem>An item</ListGroupItem>
        <ListGroupItem>A second item</ListGroupItem>
        <ListGroupItem>A third item</ListGroupItem>
      </ListGroup>
      <ListGroup className="list-group-horizontal-xl">
        <ListGroupItem>An item</ListGroupItem>
        <ListGroupItem>A second item</ListGroupItem>
        <ListGroupItem>A third item</ListGroupItem>
      </ListGroup>
      <ListGroup className="list-group-horizontal-xxl">
        <ListGroupItem>An item</ListGroupItem>
        <ListGroupItem>A second item</ListGroupItem>
        <ListGroupItem>A third item</ListGroupItem>
      </ListGroup>
    </div>
  )
}
Horizontal.decorators = [
  linkToBootstrapDocs('https://getbootstrap.com/docs/5.3/components/list-group/#horizontal')
]

export const Variants: StoryFn = () => {
  return (
    <ListGroup>
      <ListGroupItem>A simple default list group item</ListGroupItem>
      <ListGroupItem className="list-group-item-primary">
        A simple primary list group item
      </ListGroupItem>
      <ListGroupItem className="list-group-item-secondary">
        A simple secondary list group item
      </ListGroupItem>
      <ListGroupItem className="list-group-item-success">
        A simple success list group item
      </ListGroupItem>
      <ListGroupItem className="list-group-item-danger">
        A simple danger list group item
      </ListGroupItem>
      <ListGroupItem className="list-group-item-warning">
        A simple warning list group item
      </ListGroupItem>
      <ListGroupItem className="list-group-item-info">A simple info list group item</ListGroupItem>
      <ListGroupItem className="list-group-item-light">
        A simple light list group item
      </ListGroupItem>
      <ListGroupItem className="list-group-item-dark">A simple dark list group item</ListGroupItem>
    </ListGroup>
  )
}
Variants.decorators = [
  linkToBootstrapDocs('https://getbootstrap.com/docs/5.3/components/list-group/#variants')
]

export const VariantsForLinksAndButtons: StoryFn = () => {
  return (
    <ListGroup>
      <ListGroupItem as="a" href="#" className="list-group-item-action">
        A simple default list group item
      </ListGroupItem>
      <ListGroupItem as="a" href="#" className="list-group-item-action list-group-item-primary">
        A simple primary list group item
      </ListGroupItem>
      <ListGroupItem as="a" href="#" className="list-group-item-action list-group-item-secondary">
        A simple secondary list group item
      </ListGroupItem>
      <ListGroupItem as="a" href="#" className="list-group-item-action list-group-item-success">
        A simple success list group item
      </ListGroupItem>
      <ListGroupItem as="a" href="#" className="list-group-item-action list-group-item-danger">
        A simple danger list group item
      </ListGroupItem>
      <ListGroupItem as="a" href="#" className="list-group-item-action list-group-item-warning">
        A simple warning list group item
      </ListGroupItem>
      <ListGroupItem as="a" href="#" className="list-group-item-action list-group-item-info">
        A simple info list group item
      </ListGroupItem>
      <ListGroupItem as="a" href="#" className="list-group-item-action list-group-item-light">
        A simple light list group item
      </ListGroupItem>
      <ListGroupItem as="a" href="#" className="list-group-item-action list-group-item-dark">
        A simple dark list group item
      </ListGroupItem>
    </ListGroup>
  )
}
VariantsForLinksAndButtons.decorators = [
  linkToBootstrapDocs(
    'https://getbootstrap.com/docs/5.3/components/list-group/#for-links-and-buttons'
  )
]

export const WithBadges: StoryFn = () => {
  return (
    <ListGroup>
      <ListGroupItem
        brUtilsDisplay="flex"
        brUtilsFlex={{ justifyContent: 'between', alignItems: 'center' }}
      >
        A list item
        <Badge className="rounded-pill" brUtilsBackground="primary">
          14
        </Badge>
      </ListGroupItem>
      <ListGroupItem
        brUtilsDisplay="flex"
        brUtilsFlex={{ justifyContent: 'between', alignItems: 'center' }}
      >
        A second list item
        <Badge className="rounded-pill" brUtilsBackground="primary">
          2
        </Badge>
      </ListGroupItem>
      <ListGroupItem
        brUtilsDisplay="flex"
        brUtilsFlex={{ justifyContent: 'between', alignItems: 'center' }}
      >
        A third list item
        <Badge className="rounded-pill" brUtilsBackground="primary">
          1
        </Badge>
      </ListGroupItem>
    </ListGroup>
  )
}
WithBadges.decorators = [linkToBootstrapDocs('')]

export const CustomContent: StoryFn = () => {
  return (
    <ListGroup as="div">
      <ListGroupItem as="a" href="#" className="list-group-item-action active" aria-current="true">
        <BrElement
          brUtilsDisplay="flex"
          brUtilsFlex={{ justifyContent: 'between' }}
          className="w-100"
        >
          <BrElement as="h5" brMargin={{ bottom: 1 }}>
            List group item heading
          </BrElement>
          <small>3 days ago</small>
        </BrElement>
        <BrElement as="p" brMargin={{ bottom: 1 }}>
          Some placeholder content in a paragraph.
        </BrElement>
        <small>And some small print.</small>
      </ListGroupItem>
      <ListGroupItem as="a" href="#" className="list-group-item-action">
        <BrElement
          brUtilsDisplay="flex"
          brUtilsFlex={{ justifyContent: 'between' }}
          className="w-100"
        >
          <BrElement as="h5" brMargin={{ bottom: 1 }}>
            List group item heading
          </BrElement>
          <BrElement brUtilsColor="body-secondary">3 days ago</BrElement>
        </BrElement>
        <BrElement as="p" brMargin={{ bottom: 1 }}>
          Some placeholder content in a paragraph.
        </BrElement>
        <BrElement brUtilsColor="body-secondary">And some muted small print.</BrElement>
      </ListGroupItem>
      <ListGroupItem as="a" href="#" className="list-group-item-action">
        <BrElement
          brUtilsDisplay="flex"
          brUtilsFlex={{ justifyContent: 'between' }}
          className="w-100"
        >
          <BrElement as="h5" brMargin={{ bottom: 1 }}>
            List group item heading
          </BrElement>
          <BrElement brUtilsColor="body-secondary">3 days ago</BrElement>
        </BrElement>
        <BrElement as="p" brMargin={{ bottom: 1 }}>
          Some placeholder content in a paragraph.
        </BrElement>
        <BrElement brUtilsColor="body-secondary">And some muted small print.</BrElement>
      </ListGroupItem>
    </ListGroup>
  )
}
CustomContent.decorators = [
  linkToBootstrapDocs('https://getbootstrap.com/docs/5.3/components/list-group/#custom-content')
]

export const CheckboxesAndRadios: StoryFn = () => {
  return (
    <div>
      <ListGroup>
        <ListGroupItem>
          <FormCheck
            brFormCheckInputProps={{ className: 'me-1', id: 'firstCheckbox' }}
            brFormCheckLabelProps={{ children: 'First checkbox' }}
          />
        </ListGroupItem>
        <ListGroupItem>
          <FormCheck
            brFormCheckInputProps={{ className: 'me-1', id: 'secondCheckbox' }}
            brFormCheckLabelProps={{ children: 'Second checkbox' }}
          />
        </ListGroupItem>
        <ListGroupItem>
          <FormCheck
            brFormCheckInputProps={{ className: 'me-1', id: 'thirdCheckbox' }}
            brFormCheckLabelProps={{ children: 'Third checkbox' }}
          />
        </ListGroupItem>
      </ListGroup>
      <br />
      <ListGroup>
        <ListGroupItem>
          <FormCheck
            brFormCheckInputProps={{
              type: 'radio',
              className: 'me-1',
              name: 'listGroupRadio',
              id: 'firstRadio',
              defaultChecked: true
            }}
            brFormCheckLabelProps={{ children: 'First radio' }}
          />
        </ListGroupItem>
        <ListGroupItem>
          <FormCheck
            brFormCheckInputProps={{
              type: 'radio',
              className: 'me-1',
              name: 'listGroupRadio',
              id: 'secondRadio'
            }}
            brFormCheckLabelProps={{ children: 'Second radio' }}
          />
        </ListGroupItem>
        <ListGroupItem>
          <FormCheck
            brFormCheckInputProps={{
              type: 'radio',
              className: 'me-1',
              name: 'listGroupRadio',
              id: 'thirdRadio'
            }}
            brFormCheckLabelProps={{ children: 'Third radio' }}
          />
        </ListGroupItem>
      </ListGroup>
      <br />
      <ListGroup>
        <ListGroupItem>
          <FormCheck
            brFormCheckInputProps={{ className: 'me-1', id: 'firstCheckboxStretched' }}
            brFormCheckLabelProps={{ className: 'stretched-link', children: 'First checkbox' }}
          />
        </ListGroupItem>
        <ListGroupItem>
          <FormCheck
            brFormCheckInputProps={{ className: 'me-1', id: 'secondCheckboxStretched' }}
            brFormCheckLabelProps={{ className: 'stretched-link', children: 'Second checkbox' }}
          />
        </ListGroupItem>
        <ListGroupItem>
          <FormCheck
            brFormCheckInputProps={{ className: 'me-1', id: 'thirdCheckboxStretched' }}
            brFormCheckLabelProps={{ className: 'stretched-link', children: 'Third checkbox' }}
          />
        </ListGroupItem>
      </ListGroup>
    </div>
  )
}
CheckboxesAndRadios.decorators = [
  linkToBootstrapDocs(
    'https://getbootstrap.com/docs/5.3/components/list-group/#checkboxes-and-radios'
  )
]

export const JavascriptBehavior: StoryFn = () => {
  const { registerTab, setActiveTab } = useTabs<HTMLAnchorElement>()
  function handleTabClick(e: MouseEvent) {
    e.preventDefault()
    setActiveTab((e.target as HTMLAnchorElement).id)
  }

  return (
    <div>
      <Row>
        <Col brCols={4}>
          <ListGroup id="list-tab" role="tablist">
            <ListGroupItem
              as="a"
              ref={registerTab}
              className="list-group-item-action"
              id="list-home-list"
              href="#list-home"
              role="tab"
              aria-controls="list-home"
              onClick={handleTabClick}
            >
              Home
            </ListGroupItem>
            <ListGroupItem
              as="a"
              ref={registerTab}
              className="list-group-item-action"
              id="list-profile-list"
              href="#list-profile"
              role="tab"
              aria-controls="list-profile"
              onClick={handleTabClick}
            >
              Profile
            </ListGroupItem>
            <ListGroupItem
              as="a"
              ref={registerTab}
              className="list-group-item-action"
              id="list-messages-list"
              href="#list-messages"
              role="tab"
              aria-controls="list-messages"
              onClick={handleTabClick}
            >
              Messages
            </ListGroupItem>
            <ListGroupItem
              as="a"
              ref={registerTab}
              className="list-group-item-action"
              id="list-settings-list"
              href="#list-settings"
              role="tab"
              aria-controls="list-settings"
              onClick={handleTabClick}
            >
              Settings
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col brCols={8}>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade"
              id="list-home"
              role="tabpanel"
              aria-labelledby="list-home-list"
            >
              Home Stuff
            </div>
            <div
              className="tab-pane fade"
              id="list-profile"
              role="tabpanel"
              aria-labelledby="list-profile-list"
            >
              Profile Stuff
            </div>
            <div
              className="tab-pane fade"
              id="list-messages"
              role="tabpanel"
              aria-labelledby="list-messages-list"
            >
              Messages Stuff
            </div>
            <div
              className="tab-pane fade"
              id="list-settings"
              role="tabpanel"
              aria-labelledby="list-settings-list"
            >
              Settings Stuff
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
JavascriptBehavior.decorators = [
  linkToBootstrapDocs(
    'https://getbootstrap.com/docs/5.3/components/list-group/#javascript-behavior'
  )
]
