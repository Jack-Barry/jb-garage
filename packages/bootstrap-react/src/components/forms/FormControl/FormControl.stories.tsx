import type { Meta, StoryFn } from '@storybook/react'

import Button from '../../components/Button/Button'
import Col from '../../layout/columns/Col'
import Row from '../../layout/grid/Row'

import FormControl from './FormControl'
import FormText from './FormText'
import Input from './Input'
import Label from './Label'

const meta: Meta = {
  title: 'Form Controls',
  tags: ['autodocs']
}

export default meta
export const BaseExample: StoryFn = () => {
  return (
    <div>
      <FormControl
        brFormControlWrapperProps={{ bsJs: { spacing: { margin: { bottom: '3' } } } }}
        brFormControlInputProps={{
          type: 'email',
          id: 'exampleFormControlInput1',
          placeholder: 'name@example.com'
        }}
        brFormControlLabelProps={{ children: 'Email address' }}
      />
      <FormControl
        brFormControlWrapperProps={{ bsJs: { spacing: { margin: { bottom: '3' } } } }}
        brFormControlInputProps={{
          as: 'textarea',
          id: 'exampleFormControlTextarea1',
          rows: 3
        }}
        brFormControlLabelProps={{ children: 'Example textarea' }}
      />
    </div>
  )
}

export const Sizing: StoryFn = () => {
  return (
    <div className="bd-example">
      <Input
        placeholder=".form-control-lg"
        aria-label=".form-control-lg example"
        bsJs={{ formControlSize: 'lg' }}
      />
      <Input placeholder="Default input" aria-label="default input example" />
      <Input
        placeholder=".form-control-sm"
        aria-label=".form-control-sm example"
        bsJs={{ formControlSize: 'sm' }}
      />
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
        <Row bsJs={{ gutter: 3 }} className="align-items-center">
          <Col bsJs={{ cols: 'auto' }}>
            <Label htmlFor="inputPassword6" bsJs={{ asColumn: true }}>
              Password
            </Label>
          </Col>
          <Col bsJs={{ cols: 'auto' }}>
            <Input type="password" id="inputPassword6" aria-labelledby="passwordHelpInline" />
          </Col>
          <Col bsJs={{ cols: 'auto' }}>
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
        <Row bsJs={{ spacing: { margin: { bottom: '3' } } }}>
          <Label htmlFor="staticEmail" bsJs={{ asColumn: true }} className="col-sm-2">
            Email
          </Label>
          <Col bsJs={{ breakpoints: { sm: { col: { cols: 10 } } } }}>
            <Input id="staticEmail" value="email@example.com" readOnly bsJs={{ plaintext: true }} />
          </Col>
        </Row>
        <Row bsJs={{ spacing: { margin: { bottom: '3' } } }}>
          <Label htmlFor="inputPassword" bsJs={{ asColumn: true }} className="col-sm-2">
            Password
          </Label>
          <Col bsJs={{ breakpoints: { sm: { col: { cols: 10 } } } }}>
            <Input id="inputPassword" />
          </Col>
        </Row>
      </div>
      <hr />
      <div>
        <Row as="form" bsJs={{ gutter: 3 }}>
          <Col bsJs={{ cols: 'auto' }}>
            <Label htmlFor="staticEmail2" className="visually-hidden">
              Email
            </Label>
            <Input
              type="text"
              readOnly
              bsJs={{ plaintext: true }}
              id="staticEmail2"
              value="email@example.com"
            />
          </Col>
          <Col bsJs={{ cols: 'auto' }}>
            <Label htmlFor="inputPassword2" className="visually-hidden">
              Password
            </Label>
            <Input type="password" id="inputPassword2" placeholder="Password" />
          </Col>
          <Col bsJs={{ cols: 'auto' }}>
            <Button
              type="submit"
              bsJs={{
                spacing: { margin: { bottom: '3' } },
                variant: 'primary'
              }}
            >
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
        brFormControlWrapperProps={{ bsJs: { spacing: { margin: { bottom: '3' } } } }}
        brFormControlLabelProps={{ children: 'Default file input example' }}
        brFormControlInputProps={{ type: 'file', id: 'formFile' }}
      />
      <hr />
      <FormControl
        brFormControlWrapperProps={{ bsJs: { spacing: { margin: { bottom: '3' } } } }}
        brFormControlLabelProps={{ children: 'Multiple files input example' }}
        brFormControlInputProps={{ type: 'file', id: 'formFileMultiple', multiple: true }}
      />
      <hr />
      <FormControl
        brFormControlWrapperProps={{ bsJs: { spacing: { margin: { bottom: '3' } } } }}
        brFormControlLabelProps={{ children: 'Disabled file input example' }}
        brFormControlInputProps={{ type: 'file', id: 'formFileDisabled', disabled: true }}
      />
      <hr />
      <FormControl
        brFormControlWrapperProps={{ bsJs: { spacing: { margin: { bottom: '3' } } } }}
        brFormControlLabelProps={{ children: 'Small file input example' }}
        brFormControlInputProps={{
          type: 'file',
          id: 'formFileSm',
          bsJs: { formControlSize: 'sm' }
        }}
      />
      <hr />
      <FormControl
        brFormControlWrapperProps={{ bsJs: { spacing: { margin: { bottom: '3' } } } }}
        brFormControlLabelProps={{ children: 'Large file input example' }}
        brFormControlInputProps={{
          type: 'file',
          id: 'formFileLg',
          bsJs: { formControlSize: 'lg' }
        }}
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
