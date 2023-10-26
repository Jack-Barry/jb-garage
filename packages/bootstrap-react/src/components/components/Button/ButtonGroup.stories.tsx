import { Meta, StoryFn } from '@storybook/react'

import FormCheckInput from '../../forms/FormCheck/FormCheckInput'
import FormCheckLabel from '../../forms/FormCheck/FormCheckLabel'
import Input from '../../forms/FormControl/Input'
import InputGroup from '../../forms/InputGroup/InputGroup'
import InputGroupText from '../../forms/InputGroup/InputGroupText'
import DropdownItem from '../Dropdown/DropdownItem'
import DropdownMenu from '../Dropdown/DropdownMenu'
import DropdownToggle from '../Dropdown/DropdownToggle'

import Button from './Button'
import ButtonGroup from './ButtonGroup'
import ButtonToolbar from './ButtonToolbar'

const meta: Meta = {
  title: 'Button Group',
  tags: ['autodocs']
}

export default meta

export const BasicExample: StoryFn = () => {
  return (
    <div className="bd-example">
      <ButtonGroup aria-label="Basic example">
        <Button bsJs={{ variant: 'primary' }}>Left</Button>
        <Button bsJs={{ variant: 'primary' }}>Middle</Button>
        <Button bsJs={{ variant: 'primary' }}>Right</Button>
      </ButtonGroup>
      <hr />
      <ButtonGroup>
        <Button as="a" bsJs={{ variant: 'primary', active: true }} href="#" aria-current="page">
          Active link
        </Button>
        <Button as="a" bsJs={{ variant: 'primary' }} href="#">
          Link
        </Button>
        <Button as="a" bsJs={{ variant: 'primary' }} href="#">
          Link
        </Button>
      </ButtonGroup>
    </div>
  )
}

export const MixedStyles: StoryFn = () => {
  return (
    <ButtonGroup aria-label="Basic mixed styles example">
      <Button bsJs={{ variant: 'danger' }}>Left</Button>
      <Button bsJs={{ variant: 'warning' }}>Middle</Button>
      <Button bsJs={{ variant: 'success' }}>Right</Button>
    </ButtonGroup>
  )
}

export const OutlinedStyles: StoryFn = () => {
  return (
    <ButtonGroup aria-label="Basic outlined example">
      <Button bsJs={{ variant: 'outline-primary' }}>Left</Button>
      <Button bsJs={{ variant: 'outline-primary' }}>Middle</Button>
      <Button bsJs={{ variant: 'outline-primary' }}>Right</Button>
    </ButtonGroup>
  )
}

export const CheckboxAndRadioButtonGroups: StoryFn = () => {
  return (
    <div>
      <ButtonGroup aria-label="Basic checkbox toggle button group">
        <FormCheckInput className="btn-check" id="btncheck1" autoComplete="off" />
        <FormCheckLabel className="btn btn-outline-primary" htmlFor="btncheck1">
          Checkbox 1
        </FormCheckLabel>
        <FormCheckInput className="btn-check" id="btncheck2" autoComplete="off" />
        <FormCheckLabel className="btn btn-outline-primary" htmlFor="btncheck2">
          Checkbox 2
        </FormCheckLabel>
        <FormCheckInput className="btn-check" id="btncheck3" autoComplete="off" />
        <FormCheckLabel className="btn btn-outline-primary" htmlFor="btncheck3">
          Checkbox 3
        </FormCheckLabel>
      </ButtonGroup>
      <hr />
      <ButtonGroup aria-label="Basic radio toggle button group">
        <FormCheckInput
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio1"
          autoComplete="off"
          defaultChecked
        />
        <FormCheckLabel className="btn btn-outline-primary" htmlFor="btnradio1">
          Radio 1
        </FormCheckLabel>
        <FormCheckInput
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio2"
          autoComplete="off"
        />
        <FormCheckLabel className="btn btn-outline-primary" htmlFor="btnradio2">
          Radio 2
        </FormCheckLabel>
        <FormCheckInput
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio3"
          autoComplete="off"
        />
        <FormCheckLabel className="btn btn-outline-primary" htmlFor="btnradio3">
          Radio 3
        </FormCheckLabel>
      </ButtonGroup>
    </div>
  )
}

export const Toolbar: StoryFn = () => {
  return (
    <div>
      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup bsJs={{ spacing: { margin: { end: '2' } } }} aria-label="First group">
          <Button bsJs={{ variant: 'primary' }}>1</Button>
          <Button bsJs={{ variant: 'primary' }}>2</Button>
          <Button bsJs={{ variant: 'primary' }}>3</Button>
          <Button bsJs={{ variant: 'primary' }}>4</Button>
        </ButtonGroup>
        <ButtonGroup bsJs={{ spacing: { margin: { end: '2' } } }} aria-label="Second group">
          <Button bsJs={{ variant: 'secondary' }}>5</Button>
          <Button bsJs={{ variant: 'secondary' }}>6</Button>
          <Button bsJs={{ variant: 'secondary' }}>7</Button>
        </ButtonGroup>
        <ButtonGroup aria-label="Third group">
          <Button bsJs={{ variant: 'info' }}>8</Button>
        </ButtonGroup>
      </ButtonToolbar>
      <hr />
      <ButtonToolbar
        bsJs={{ spacing: { margin: { bottom: '3' } } }}
        aria-label="Toolbar with button groups"
      >
        <ButtonGroup bsJs={{ spacing: { margin: { end: '2' } } }} aria-label="First group">
          <Button bsJs={{ variant: 'outline-secondary' }}>1</Button>
          <Button bsJs={{ variant: 'outline-secondary' }}>2</Button>
          <Button bsJs={{ variant: 'outline-secondary' }}>3</Button>
          <Button bsJs={{ variant: 'outline-secondary' }}>4</Button>
        </ButtonGroup>
        <InputGroup>
          <InputGroupText id="btnGroupAddon">@</InputGroupText>
          <Input
            placeholder="Input group example"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon"
          />
        </InputGroup>
      </ButtonToolbar>
      <ButtonToolbar className="justify-content-between" aria-label="Toolbar with button groups">
        <ButtonGroup aria-label="First group">
          <Button bsJs={{ variant: 'outline-secondary' }}>1</Button>
          <Button bsJs={{ variant: 'outline-secondary' }}>2</Button>
          <Button bsJs={{ variant: 'outline-secondary' }}>3</Button>
          <Button bsJs={{ variant: 'outline-secondary' }}>4</Button>
        </ButtonGroup>
        <InputGroup>
          <InputGroupText id="btnGroupAddon2">@</InputGroupText>
          <Input
            placeholder="Input group example"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon2"
          />
        </InputGroup>
      </ButtonToolbar>
    </div>
  )
}

export const Sizing: StoryFn = () => {
  return (
    <div className="bd-example">
      <ButtonGroup bsJs={{ buttonGroupSize: 'lg' }} aria-label="Large button group">
        <Button bsJs={{ variant: 'outline-primary' }}>Left</Button>
        <Button bsJs={{ variant: 'outline-primary' }}>Middle</Button>
        <Button bsJs={{ variant: 'outline-primary' }}>Right</Button>
      </ButtonGroup>
      <br />
      <ButtonGroup aria-label="Default button group">
        <Button bsJs={{ variant: 'outline-primary' }}>Left</Button>
        <Button bsJs={{ variant: 'outline-primary' }}>Middle</Button>
        <Button bsJs={{ variant: 'outline-primary' }}>Right</Button>
      </ButtonGroup>
      <br />
      <ButtonGroup bsJs={{ buttonGroupSize: 'sm' }} aria-label="Small button group">
        <Button bsJs={{ variant: 'outline-primary' }}>Left</Button>
        <Button bsJs={{ variant: 'outline-primary' }}>Middle</Button>
        <Button bsJs={{ variant: 'outline-primary' }}>Right</Button>
      </ButtonGroup>
    </div>
  )
}

export const Nesting: StoryFn = () => {
  return (
    <div style={{ minHeight: '120px' }}>
      <ButtonGroup aria-label="Button group with nested dropdown">
        <Button bsJs={{ variant: 'primary' }}>1</Button>
        <Button bsJs={{ variant: 'primary' }}>2</Button>
        <ButtonGroup>
          <DropdownToggle bsJs={{ variant: 'primary' }} aria-expanded="false">
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#">Dropdown link</DropdownItem>
            <DropdownItem href="#">Dropdown link</DropdownItem>
          </DropdownMenu>
        </ButtonGroup>
      </ButtonGroup>
    </div>
  )
}

export const VerticalVariation: StoryFn = () => {
  return (
    <div>
      <ButtonGroup bsJs={{ vertical: true }} aria-label="Vertical button group">
        <Button bsJs={{ variant: 'primary' }}>Button</Button>
        <Button bsJs={{ variant: 'primary' }}>Button</Button>
        <Button bsJs={{ variant: 'primary' }}>Button</Button>
        <Button bsJs={{ variant: 'primary' }}>Button</Button>
        <Button bsJs={{ variant: 'primary' }}>Button</Button>
        <Button bsJs={{ variant: 'primary' }}>Button</Button>
      </ButtonGroup>
      <hr />
      <ButtonGroup bsJs={{ vertical: true }} aria-label="Vertical button group">
        <Button bsJs={{ variant: 'primary' }}>Button</Button>
        <Button bsJs={{ variant: 'primary' }}>Button</Button>
        <ButtonGroup>
          <DropdownToggle bsJs={{ variant: 'primary' }} aria-expanded="false">
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#">Dropdown link</DropdownItem>
            <DropdownItem href="#">Dropdown link</DropdownItem>
          </DropdownMenu>
        </ButtonGroup>
        <Button bsJs={{ variant: 'primary' }}>Button</Button>
        <Button bsJs={{ variant: 'primary' }}>Button</Button>
        <ButtonGroup>
          <DropdownToggle bsJs={{ variant: 'primary' }} aria-expanded="false">
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#">Dropdown link</DropdownItem>
            <DropdownItem href="#">Dropdown link</DropdownItem>
          </DropdownMenu>
        </ButtonGroup>
        <ButtonGroup>
          <DropdownToggle bsJs={{ variant: 'primary' }} aria-expanded="false">
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#">Dropdown link</DropdownItem>
            <DropdownItem href="#">Dropdown link</DropdownItem>
          </DropdownMenu>
        </ButtonGroup>
        <ButtonGroup>
          <DropdownToggle bsJs={{ variant: 'primary' }} aria-expanded="false">
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#">Dropdown link</DropdownItem>
            <DropdownItem href="#">Dropdown link</DropdownItem>
          </DropdownMenu>
        </ButtonGroup>
      </ButtonGroup>
      <hr />
      <ButtonGroup bsJs={{ vertical: true }} aria-label="Vertical radio toggle button group">
        <FormCheckInput
          type="radio"
          className="btn-check"
          name="vbtn-radio"
          id="vbtn-radio1"
          autoComplete="off"
          defaultChecked
        />
        <FormCheckLabel className="btn btn-outline-danger" htmlFor="vbtn-radio1">
          Radio 1
        </FormCheckLabel>
        <FormCheckInput
          type="radio"
          className="btn-check"
          name="vbtn-radio"
          id="vbtn-radio2"
          autoComplete="off"
        />
        <FormCheckLabel className="btn btn-outline-danger" htmlFor="vbtn-radio2">
          Radio 2
        </FormCheckLabel>
        <FormCheckInput
          type="radio"
          className="btn-check"
          name="vbtn-radio"
          id="vbtn-radio3"
          autoComplete="off"
        />
        <FormCheckLabel className="btn btn-outline-danger" htmlFor="vbtn-radio3">
          Radio 3
        </FormCheckLabel>
      </ButtonGroup>
    </div>
  )
}
