import { Meta, StoryFn } from '@storybook/react'

import Button from '../../components/Button/Button'
import Col from '../../layout/columns/Col'
import Row from '../../layout/grid/Row'
import { BrElement } from '../../utils/BrElement'
import FormCheck from '../FormCheck/FormCheck'
import Input from '../FormControl/Input'
import Label from '../FormControl/Label'
import InputGroup from '../InputGroup/InputGroup'
import InputGroupText from '../InputGroup/InputGroupText'
import Select from '../Select/Select'

const meta: Meta = {
  title: 'Layout',
  tags: ['autodocs']
}

export default meta
export const Utilities: StoryFn = () => {
  return (
    <div>
      <BrElement bsJs={{ spacing: { margin: { bottom: '3' } } }}>
        <Label htmlFor="formGroupExampleInput">Example label</Label>
        <Input id="formGroupExampleInput" placeholder="Example input placeholder" />
      </BrElement>
      <BrElement bsJs={{ spacing: { margin: { bottom: '3' } } }}>
        <Label htmlFor="formGroupExampleInput2">Another label</Label>
        <Input id="formGroupExampleInput2" placeholder="Another input placeholder" />
      </BrElement>
    </div>
  )
}

export const FormGrid: StoryFn = () => {
  return (
    <Row>
      <Col>
        <Input placeholder="First name" aria-label="First name" />
      </Col>
      <Col>
        <Input placeholder="Last name" aria-label="Last name" />
      </Col>
    </Row>
  )
}

export const Gutters: StoryFn = () => {
  return (
    <div>
      <Row>
        <Col>
          <Input placeholder="First name" aria-label="First name" />
        </Col>
        <Col>
          <Input placeholder="Last name" aria-label="Last name" />
        </Col>
      </Row>
      <hr />
      <Row as="form" bsJs={{ gutter: 3 }}>
        <Col bsJs={{ breakpoints: { md: { col: { cols: 6 } } } }}>
          <Label htmlFor="inputEmail4">Email</Label>
          <Input type="email" id="inputEmail4" />
        </Col>
        <Col bsJs={{ breakpoints: { md: { col: { cols: 6 } } } }}>
          <Label htmlFor="inputPassword4">Password</Label>
          <Input type="password" id="inputPassword4" />
        </Col>
        <Col bsJs={{ cols: 12 }}>
          <Label htmlFor="inputAddress">Address</Label>
          <Input type="text" id="inputAddress" placeholder="1234 Main St" />
        </Col>
        <Col bsJs={{ cols: 12 }}>
          <Label htmlFor="inputAddress2">Address 2</Label>
          <Input type="text" id="inputAddress2" placeholder="Apartment, studio, or floor" />
        </Col>
        <Col bsJs={{ breakpoints: { md: { col: { cols: 6 } } } }}>
          <Label htmlFor="inputCity">City</Label>
          <Input type="text" id="inputCity" />
        </Col>
        <Col bsJs={{ breakpoints: { md: { col: { cols: 4 } } } }}>
          <Label htmlFor="inputState">State</Label>
          <Select id="inputState">
            <option selected>Choose...</option>
            <option>...</option>
          </Select>
        </Col>
        <Col bsJs={{ breakpoints: { md: { col: { cols: 2 } } } }}>
          <Label htmlFor="inputZip">Zip</Label>
          <Input type="text" id="inputZip" />
        </Col>
        <Col bsJs={{ cols: 12 }}>
          <FormCheck
            brFormCheckLabelProps={{ children: 'Check me out' }}
            brFormCheckInputProps={{ id: 'gridCheck' }}
          />
        </Col>
        <Col bsJs={{ cols: 12 }}>
          <Button type="submit" bsJs={{ variant: 'primary' }}>
            Sign in
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export const HorizontalForm: StoryFn = () => {
  return (
    <form>
      <Row bsJs={{ spacing: { margin: { bottom: '3' } } }}>
        <Col
          as="label"
          bsJs={{ breakpoints: { sm: { col: { cols: 2 } } } }}
          htmlFor="inputEmail3"
          className="col-form-label"
        >
          Email
        </Col>
        <Col bsJs={{ breakpoints: { sm: { col: { cols: 10 } } } }}>
          <Input type="email" id="inputEmail3" />
        </Col>
      </Row>
      <Row bsJs={{ spacing: { margin: { bottom: '3' } } }}>
        <Col
          as="label"
          bsJs={{ breakpoints: { sm: { col: { cols: 2 } } } }}
          htmlFor="inputPassword3"
          className="col-form-label"
        >
          Password
        </Col>
        <Col bsJs={{ breakpoints: { sm: { col: { cols: 10 } } } }}>
          <Input type="password" id="inputPassword3" />
        </Col>
      </Row>
      <Row as="fieldset" bsJs={{ spacing: { margin: { bottom: '3' } } }}>
        <Col
          as="legend"
          bsJs={{ spacing: { padding: { top: '0' } }, breakpoints: { sm: { col: { cols: 2 } } } }}
          className="col-form-label"
        >
          Radios
        </Col>
        <Col bsJs={{ breakpoints: { sm: { col: { cols: 10 } } } }}>
          <FormCheck
            brFormCheckInputProps={{
              type: 'radio',
              name: 'gridRadios',
              id: 'gridRadios1',
              value: 'option1',
              checked: true
            }}
            brFormCheckLabelProps={{ children: 'First radio' }}
          />
          <FormCheck
            brFormCheckInputProps={{
              type: 'radio',
              name: 'gridRadios',
              id: 'gridRadios2',
              value: 'option2'
            }}
            brFormCheckLabelProps={{ children: 'Second radio' }}
          />
          <FormCheck
            brFormCheckWrapperProps={{ bsJs: { disabled: true } }}
            brFormCheckInputProps={{
              type: 'radio',
              name: 'gridRadios',
              id: 'gridRadios3',
              value: 'option3'
            }}
            brFormCheckLabelProps={{ children: 'Third disabled radio' }}
          />
        </Col>
      </Row>
      <Row bsJs={{ spacing: { margin: { bottom: '3' } } }}>
        <Col bsJs={{ breakpoints: { sm: { col: { cols: 10, offset: 2 } } } }}>
          <FormCheck
            brFormCheckInputProps={{ id: 'gridCheck1' }}
            brFormCheckLabelProps={{ children: 'Example checkbox' }}
          />
        </Col>
      </Row>
      <Button type="submit" bsJs={{ variant: 'primary' }}>
        Sign in
      </Button>
    </form>
  )
}

export const HorizontalFormLabelSizing: StoryFn = () => {
  return (
    <div>
      <Row bsJs={{ spacing: { margin: { bottom: '3' } } }}>
        <Col
          as="label"
          htmlFor="colFormLabelSm"
          bsJs={{ breakpoints: { sm: { col: { cols: 2 } } } }}
          className="col-form-label col-form-label-sm"
        >
          Email
        </Col>
        <Col bsJs={{ breakpoints: { sm: { col: { cols: 10 } } } }}>
          <Input
            type="email"
            bsJs={{ formControlSize: 'sm' }}
            id="colFormLabelSm"
            placeholder="col-form-label-sm"
          />
        </Col>
      </Row>
      <Row bsJs={{ spacing: { margin: { bottom: '3' } } }}>
        <Col
          as="label"
          htmlFor="colFormLabel"
          bsJs={{ breakpoints: { sm: { col: { cols: 2 } } } }}
          className="col-form-label"
        >
          Email
        </Col>
        <Col bsJs={{ breakpoints: { sm: { col: { cols: 10 } } } }}>
          <Input type="email" id="colFormLabel" placeholder="col-form-label" />
        </Col>
      </Row>
      <Row>
        <Col
          as="label"
          htmlFor="colFormLabelLg"
          bsJs={{ breakpoints: { sm: { col: { cols: 2 } } } }}
          className="col-form-label col-form-label-lg"
        >
          Email
        </Col>
        <Col bsJs={{ breakpoints: { sm: { col: { cols: 10 } } } }}>
          <Input
            type="email"
            bsJs={{ formControlSize: 'lg' }}
            id="colFormLabelLg"
            placeholder="col-form-label-lg"
          />
        </Col>
      </Row>
    </div>
  )
}

export const ColumnSizing: StoryFn = () => {
  return (
    <div>
      <Row bsJs={{ gutter: 3 }}>
        <Col bsJs={{ breakpoints: { sm: { col: { cols: 7 } } } }}>
          <Input placeholder="City" aria-label="City" />
        </Col>
        <Col bsJs={{ breakpoints: { sm: { col: true } } }}>
          <Input placeholder="State" aria-label="State" />
        </Col>
        <Col bsJs={{ breakpoints: { sm: { col: true } } }}>
          <Input placeholder="Zip" aria-label="Zip" />
        </Col>
      </Row>
    </div>
  )
}

export const AutoSizing: StoryFn = () => {
  return (
    <div>
      <Row as="form" bsJs={{ gutter: { x: 3, y: 2 } }} className="align-items-center">
        <Col bsJs={{ cols: 'auto' }}>
          <Label bsJs={{ visuallyHidden: true }} htmlFor="autoSizingInput">
            Name
          </Label>
          <Input id="autoSizingInput" placeholder="Jane Doe" />
        </Col>
        <Col bsJs={{ cols: 'auto' }}>
          <Label bsJs={{ visuallyHidden: true }} htmlFor="autoSizingInputGroup">
            Username
          </Label>
          <InputGroup>
            <InputGroupText as="div">@</InputGroupText>
            <Input type="text" id="autoSizingInputGroup" placeholder="Username" />
          </InputGroup>
        </Col>
        <Col bsJs={{ cols: 'auto' }}>
          <Label bsJs={{ visuallyHidden: true }} htmlFor="autoSizingSelect">
            Preference
          </Label>
          <Select id="autoSizingSelect">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Select>
        </Col>
        <Col bsJs={{ cols: 'auto' }}>
          <FormCheck
            brFormCheckInputProps={{ id: 'autoSizingCheck' }}
            brFormCheckLabelProps={{ children: 'Remember me' }}
          />
        </Col>
        <Col bsJs={{ cols: 'auto' }}>
          <Button type="submit" bsJs={{ variant: 'primary' }}>
            Submit
          </Button>
        </Col>
      </Row>
      <hr />
      <Row as="form" bsJs={{ gutter: { x: 3, y: 2 } }} className="align-items-center">
        <Col bsJs={{ breakpoints: { sm: { col: { cols: 3 } } } }}>
          <Label bsJs={{ visuallyHidden: true }} htmlFor="specificSizeInputName">
            Name
          </Label>
          <Input type="text" id="specificSizeInputName" placeholder="Jane Doe" />
        </Col>
        <Col bsJs={{ breakpoints: { sm: { col: { cols: 3 } } } }}>
          <Label bsJs={{ visuallyHidden: true }} htmlFor="specificSizeInputGroupUsername">
            Username
          </Label>
          <InputGroup>
            <InputGroupText as="div">@</InputGroupText>
            <Input type="text" id="specificSizeInputGroupUsername" placeholder="Username" />
          </InputGroup>
        </Col>
        <Col bsJs={{ breakpoints: { sm: { col: { cols: 3 } } } }}>
          <Label bsJs={{ visuallyHidden: true }} htmlFor="specificSizeSelect">
            Preference
          </Label>
          <Select id="specificSizeSelect">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Select>
        </Col>
        <Col bsJs={{ cols: 'auto' }}>
          <FormCheck
            brFormCheckInputProps={{ id: 'autoSizingCheck2' }}
            brFormCheckLabelProps={{ children: 'Remember me' }}
          />
        </Col>
        <Col bsJs={{ cols: 'auto' }}>
          <Button type="submit" bsJs={{ variant: 'primary' }}>
            Submit
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export const InlineForms: StoryFn = () => {
  return (
    <Row
      as="form"
      bsJs={{ gutter: 3, breakpoints: { lg: { row: { cols: 'auto' } } } }}
      className="align-items-center"
    >
      <Col bsJs={{ cols: 12 }}>
        <Label bsJs={{ visuallyHidden: true }} htmlFor="inlineFormInputGroupUsername">
          Username
        </Label>
        <InputGroup>
          <InputGroupText as="div">@</InputGroupText>
          <Input type="text" id="inlineFormInputGroupUsername" placeholder="Username" />
        </InputGroup>
      </Col>

      <Col bsJs={{ cols: 12 }}>
        <Label bsJs={{ visuallyHidden: true }} htmlFor="inlineFormSelectPref">
          Preference
        </Label>
        <Select id="inlineFormSelectPref">
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Select>
      </Col>

      <Col bsJs={{ cols: 12 }}>
        <FormCheck
          brFormCheckInputProps={{ id: 'inlineFormCheck' }}
          brFormCheckLabelProps={{ children: 'Remember me' }}
        />
      </Col>

      <Col bsJs={{ cols: 12 }}>
        <Button type="submit" bsJs={{ variant: 'primary' }}>
          Submit
        </Button>
      </Col>
    </Row>
  )
}
