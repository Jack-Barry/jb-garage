import { Meta, StoryFn } from '@storybook/react'
import { BrElement } from '../../utils/BrElement'
import Label from '../FormControl/Label'
import Input from '../FormControl/Input'
import Row from '../../layout/grid/Row'
import Col from '../../layout/columns/Col'
import Select from '../Select/Select'
import FormCheck from '../FormCheck/FormCheck'
import Button from '../../components/Button/Button'
import InputGroup from '../InputGroup/InputGroup'
import InputGroupText from '../InputGroup/InputGroupText'

const meta: Meta = {
  title: 'Layout',
  tags: ['autodocs']
}

export default meta
export const Utilities: StoryFn = () => {
  return (
    <div>
      <BrElement brMargin={{ bottom: 3 }}>
        <Label htmlFor="formGroupExampleInput">Example label</Label>
        <Input id="formGroupExampleInput" placeholder="Example input placeholder" />
      </BrElement>
      <BrElement brMargin={{ bottom: 3 }}>
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
      <Row as="form" brRowGutter={3}>
        <Col brColsMd={6}>
          <Label htmlFor="inputEmail4">Email</Label>
          <Input type="email" id="inputEmail4" />
        </Col>
        <Col brColsMd={6}>
          <Label htmlFor="inputPassword4">Password</Label>
          <Input type="password" id="inputPassword4" />
        </Col>
        <Col brCols={12}>
          <Label htmlFor="inputAddress">Address</Label>
          <Input type="text" id="inputAddress" placeholder="1234 Main St" />
        </Col>
        <Col brCols={12}>
          <Label htmlFor="inputAddress2">Address 2</Label>
          <Input type="text" id="inputAddress2" placeholder="Apartment, studio, or floor" />
        </Col>
        <Col brColsMd={6}>
          <Label htmlFor="inputCity">City</Label>
          <Input type="text" id="inputCity" />
        </Col>
        <Col brColsMd={4}>
          <Label htmlFor="inputState">State</Label>
          <Select id="inputState">
            <option selected>Choose...</option>
            <option>...</option>
          </Select>
        </Col>
        <Col brColsMd={2}>
          <Label htmlFor="inputZip">Zip</Label>
          <Input type="text" id="inputZip" />
        </Col>
        <Col brCols={12}>
          <FormCheck labelProps={{ children: 'Check me out' }} inputProps={{ id: 'gridCheck' }} />
        </Col>
        <Col brCols={12}>
          <Button type="submit" className="btn-primary">
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
      <Row brMargin={{ bottom: 3 }}>
        <Col as="label" brColsSm={2} htmlFor="inputEmail3" className="col-form-label">
          Email
        </Col>
        <Col brColsSm={10}>
          <Input type="email" id="inputEmail3" />
        </Col>
      </Row>
      <Row brMargin={{ bottom: 3 }}>
        <Col as="label" brColsSm={2} htmlFor="inputPassword3" className="col-form-label">
          Password
        </Col>
        <Col brColsSm={10}>
          <Input type="password" id="inputPassword3" />
        </Col>
      </Row>
      <Row as="fieldset" brMargin={{ bottom: 3 }}>
        <Col as="legend" brColsSm={2} brPadding={{ top: 0 }} className="col-form-label">
          Radios
        </Col>
        <Col brColsSm={10}>
          <FormCheck
            inputProps={{
              type: 'radio',
              name: 'gridRadios',
              id: 'gridRadios1',
              value: 'option1',
              checked: true
            }}
            labelProps={{ children: 'First radio' }}
          />
          <FormCheck
            inputProps={{ type: 'radio', name: 'gridRadios', id: 'gridRadios2', value: 'option2' }}
            labelProps={{ children: 'Second radio' }}
          />
          <FormCheck
            wrapperProps={{ brDisabled: true }}
            inputProps={{ type: 'radio', name: 'gridRadios', id: 'gridRadios3', value: 'option3' }}
            labelProps={{ children: 'Third disabled radio' }}
          />
        </Col>
      </Row>
      <Row brMargin={{ bottom: 3 }}>
        <Col brColsSm={10} brColOffsetSm={2}>
          <FormCheck
            inputProps={{ id: 'gridCheck1' }}
            labelProps={{ children: 'Example checkbox' }}
          />
        </Col>
      </Row>
      <Button type="submit" className="btn-primary">
        Sign in
      </Button>
    </form>
  )
}

export const HorizontalFormLabelSizing: StoryFn = () => {
  return (
    <div>
      <Row brMargin={{ bottom: 3 }}>
        <Col
          as="label"
          htmlFor="colFormLabelSm"
          brColsSm={2}
          className="col-form-label col-form-label-sm"
        >
          Email
        </Col>
        <Col brColsSm={10}>
          <Input type="email" brSm id="colFormLabelSm" placeholder="col-form-label-sm" />
        </Col>
      </Row>
      <Row brMargin={{ bottom: 3 }}>
        <Col as="label" htmlFor="colFormLabel" brColsSm={2} className="col-form-label">
          Email
        </Col>
        <Col brColsSm={10}>
          <Input type="email" id="colFormLabel" placeholder="col-form-label" />
        </Col>
      </Row>
      <Row>
        <Col
          as="label"
          htmlFor="colFormLabelLg"
          brColsSm={2}
          className="col-form-label col-form-label-lg"
        >
          Email
        </Col>
        <Col brColsSm={10}>
          <Input type="email" brLg id="colFormLabelLg" placeholder="col-form-label-lg" />
        </Col>
      </Row>
    </div>
  )
}

export const ColumnSizing: StoryFn = () => {
  return (
    <div>
      <Row brRowGutter={3}>
        <Col brColsSm={7}>
          <Input placeholder="City" aria-label="City" />
        </Col>
        <Col brColsSm>
          <Input placeholder="State" aria-label="State" />
        </Col>
        <Col brColsSm>
          <Input placeholder="Zip" aria-label="Zip" />
        </Col>
      </Row>
    </div>
  )
}

export const AutoSizing: StoryFn = () => {
  return (
    <div>
      <Row as="form" brRowGutter={{ x: 3, y: 2 }} className="align-items-center">
        <Col brCols="auto">
          <Label className="visually-hidden" htmlFor="autoSizingInput">
            Name
          </Label>
          <Input id="autoSizingInput" placeholder="Jane Doe" />
        </Col>
        <Col brCols="auto">
          <Label className="visually-hidden" htmlFor="autoSizingInputGroup">
            Username
          </Label>
          <InputGroup>
            <InputGroupText as="div">@</InputGroupText>
            <Input type="text" id="autoSizingInputGroup" placeholder="Username" />
          </InputGroup>
        </Col>
        <Col brCols="auto">
          <Label className="visually-hidden" htmlFor="autoSizingSelect">
            Preference
          </Label>
          <Select id="autoSizingSelect">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Select>
        </Col>
        <Col brCols="auto">
          <FormCheck
            inputProps={{ id: 'autoSizingCheck' }}
            labelProps={{ children: 'Remember me' }}
          />
        </Col>
        <Col brCols="auto">
          <Button type="submit" className="btn-primary">
            Submit
          </Button>
        </Col>
      </Row>
      <hr />
      <Row as="form" brRowGutter={{ x: 3, y: 2 }} className="align-items-center">
        <Col brColsSm={3}>
          <Label className="visually-hidden" htmlFor="specificSizeInputName">
            Name
          </Label>
          <Input type="text" id="specificSizeInputName" placeholder="Jane Doe" />
        </Col>
        <Col brColsSm={3}>
          <Label className="visually-hidden" htmlFor="specificSizeInputGroupUsername">
            Username
          </Label>
          <InputGroup>
            <InputGroupText as="div">@</InputGroupText>
            <Input type="text" id="specificSizeInputGroupUsername" placeholder="Username" />
          </InputGroup>
        </Col>
        <Col brColsSm={3}>
          <Label className="visually-hidden" htmlFor="specificSizeSelect">
            Preference
          </Label>
          <Select id="specificSizeSelect">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Select>
        </Col>
        <Col brCols="auto">
          <FormCheck
            inputProps={{ id: 'autoSizingCheck2' }}
            labelProps={{ children: 'Remember me' }}
          />
        </Col>
        <Col brCols="auto">
          <Button type="submit" className="btn-primary">
            Submit
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export const InlineForms: StoryFn = () => {
  return (
    <Row as="form" brRowColsLg="auto" brRowGutter={3} className="align-items-center">
      <Col brCols={12}>
        <Label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">
          Username
        </Label>
        <InputGroup>
          <InputGroupText as="div">@</InputGroupText>
          <Input type="text" id="inlineFormInputGroupUsername" placeholder="Username" />
        </InputGroup>
      </Col>

      <Col brCols={12}>
        <Label className="visually-hidden" htmlFor="inlineFormSelectPref">
          Preference
        </Label>
        <Select id="inlineFormSelectPref">
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Select>
      </Col>

      <Col brCols={12}>
        <FormCheck
          inputProps={{ id: 'inlineFormCheck' }}
          labelProps={{ children: 'Remember me' }}
        />
      </Col>

      <Col brCols={12}>
        <Button type="submit" className="btn-primary">
          Submit
        </Button>
      </Col>
    </Row>
  )
}