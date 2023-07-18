import type { Meta, StoryFn } from '@storybook/react'
import FormControl from './FormControl'
import Input from './Input'
import Label from './Label'
import Row from '../../layout/grid/Row'
import Col from '../../layout/columns/Col'
import Button from '../../components/Button/Button'
import FormText from './FormText'

const meta: Meta = {
  title: 'Form Controls',
  tags: ['autodocs']
}

export default meta
export const BaseExample: StoryFn = () => {
  return (
    <div>
      <FormControl
        wrapperProps={{ brMargin: { bottom: 3 } }}
        inputProps={{
          type: 'email',
          id: 'exampleFormControlInput1',
          placeholder: 'name@example.com'
        }}
        labelProps={{ children: 'Email address' }}
      />
      <FormControl
        wrapperProps={{ brMargin: { bottom: 3 } }}
        inputProps={{
          as: 'textarea',
          id: 'exampleFormControlTextarea1',
          rows: 3
        }}
        labelProps={{ children: 'Example textarea' }}
      />
    </div>
  )
}

export const Sizing: StoryFn = () => {
  return (
    <div className="bd-example">
      <Input placeholder=".form-control-lg" aria-label=".form-control-lg example" brLg />
      <Input placeholder="Default input" aria-label="default input example" />
      <Input placeholder=".form-control-sm" aria-label=".form-control-sm example" brSm />
    </div>
  )
}

export const FormTextStory: StoryFn = () => {
  return (
    <div className="bd-example">
      <div>
        <Label htmlFor="inputPassword5">Password</Label>
        <Input type="password" id="inputPassword5" aria-labelledby="passwordHelpBlock" />
        <FormText id="passwordHelpBlock">
          Your password must be 8-20 characters long, contain letters and numbers, and must not
          contain spaces, special characters, or emoji.
        </FormText>
      </div>
      <hr />
      <div>
        <Row brRowGutter={3} className="align-items-center">
          <Col brCols="auto">
            <Label htmlFor="inputPassword6" brColFormLabel>
              Password
            </Label>
          </Col>
          <Col brCols="auto">
            <Input type="password" id="inputPassword6" aria-labelledby="passwordHelpInline" />
          </Col>
          <Col brCols="auto">
            <FormText as="span" id="passwordHelpInline">
              Must be 8-20 characters long.
            </FormText>
          </Col>
        </Row>
      </div>
    </div>
  )
}
FormTextStory.storyName = 'Form Text'

export const Disabled: StoryFn = () => {
  return (
    <div className="bd-example">
      <Input placeholder="Disabled input" aria-label="Disabled input example" disabled />
      <Input
        placeholder="Disabled readonly input"
        aria-label="Disabled input example"
        disabled
        readOnly
      />
    </div>
  )
}

export const ReadOnly: StoryFn = () => {
  return <Input value="Readonly input here..." aria-label="readonly input example" readOnly />
}

export const ReadOnlyPlainText: StoryFn = () => {
  return (
    <div className="bd-example">
      <div>
        <Row brMargin={{ bottom: 3 }}>
          <Label htmlFor="staticEmail" brColFormLabel className="col-sm-2">
            Email
          </Label>
          <Col brColsSm={10}>
            <Input id="staticEmail" value="email@example.com" readOnly brPlainText />
          </Col>
        </Row>
        <Row brMargin={{ bottom: 3 }}>
          <Label htmlFor="inputPassword" brColFormLabel className="col-sm-2">
            Password
          </Label>
          <Col brColsSm={10}>
            <Input id="inputPassword" />
          </Col>
        </Row>
      </div>
      <hr />
      <div>
        <Row as="form" brRowGutter={3}>
          <Col brCols="auto">
            <Label htmlFor="staticEmail2" className="visually-hidden">
              Email
            </Label>
            <Input type="text" readOnly brPlainText id="staticEmail2" value="email@example.com" />
          </Col>
          <Col brCols="auto">
            <Label htmlFor="inputPassword2" className="visually-hidden">
              Password
            </Label>
            <Input type="password" id="inputPassword2" placeholder="Password" />
          </Col>
          <Col brCols="auto">
            <Button type="submit" brMargin={{ bottom: 3 }} className="btn-primary">
              Confirm identity
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export const FiltInput: StoryFn = () => {
  return (
    <div className="bd-example">
      <FormControl
        wrapperProps={{ brMargin: { bottom: 3 } }}
        labelProps={{ children: 'Default file input example' }}
        inputProps={{ type: 'file', id: 'formFile' }}
      />
      <hr />
      <FormControl
        wrapperProps={{ brMargin: { bottom: 3 } }}
        labelProps={{ children: 'Multiple files input example' }}
        inputProps={{ type: 'file', id: 'formFileMultiple', multiple: true }}
      />
      <hr />
      <FormControl
        wrapperProps={{ brMargin: { bottom: 3 } }}
        labelProps={{ children: 'Disabled file input example' }}
        inputProps={{ type: 'file', id: 'formFileDisabled', disabled: true }}
      />
      <hr />
      <FormControl
        wrapperProps={{ brMargin: { bottom: 3 } }}
        labelProps={{ children: 'Small file input example' }}
        inputProps={{ type: 'file', id: 'formFileSm', brSm: true }}
      />
      <hr />
      <FormControl
        wrapperProps={{ brMargin: { bottom: 3 } }}
        labelProps={{ children: 'Large file input example' }}
        inputProps={{ type: 'file', id: 'formFileLg', brLg: true }}
      />
    </div>
  )
}

export const Color: StoryFn = () => {
  return (
    <div className="bd-example">
      <Label htmlFor="exampleColorInput">Color picker</Label>
      <Input type="color" id="exampleColorInput" value="#563d7c" title="Choose your color" />
    </div>
  )
}

export const Datalists: StoryFn = () => {
  return (
    <div className="bd-example">
      <Label htmlFor="exampleDataList">Datalist example</Label>
      <Input list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
      <datalist id="datalistOptions">
        <option value="San Francisco" />
        <option value="New York" />
        <option value="Seattle" />
        <option value="Los Angeles" />
        <option value="Chicago" />
      </datalist>
    </div>
  )
}
