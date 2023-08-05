import { Meta, StoryFn } from '@storybook/react'
import FormGroup from './FormGroup'
import Input from '../FormControl/Input'
import Label from '../FormControl/Label'
import Select from '../Select/Select'
import InputGroup from '../InputGroup/InputGroup'
import InputGroupText from '../InputGroup/InputGroupText'
import Row from '../../layout/grid/Row'
import Col from '../../layout/columns/Col'

const meta: Meta = {
  title: 'Floating Labels',
  tags: ['autodocs']
}

export default meta
export const Example: StoryFn = () => {
  return (
    <div>
      <FormGroup brFormGroupFloatingLabels brMargin={{ bottom: 3 }}>
        <Input type="email" id="floatingInput" placeholder="name@example.com" />
        <Label htmlFor="floatingInput">Email address</Label>
      </FormGroup>
      <FormGroup brFormGroupFloatingLabels>
        <Input type="password" id="floatingPassword" placeholder="Password" />
        <Label htmlFor="floatingPassword">Password</Label>
      </FormGroup>
      <hr />
      <FormGroup as="form" brFormGroupFloatingLabels>
        <Input
          type="email"
          id="floatingInputValue"
          placeholder="name@example.com"
          value="test@example.com"
        />
        <Label htmlFor="floatingInputValue">Input with value</Label>
      </FormGroup>
      <hr />
      <FormGroup as="form" brFormGroupFloatingLabels>
        <Input
          type="email"
          brInputInvalid
          id="floatingInputInvalid"
          placeholder="name@example.com"
          value="test@example.com"
        />
        <Label htmlFor="floatingInputInvalid">Invalid input</Label>
      </FormGroup>
    </div>
  )
}

export const Textareas: StoryFn = () => {
  return (
    <div>
      <FormGroup brFormGroupFloatingLabels>
        <Input as="textarea" placeholder="Leave a comment here" id="floatingTextarea" />
        <Label htmlFor="floatingTextarea">Comments</Label>
      </FormGroup>
      <hr />
      <FormGroup brFormGroupFloatingLabels>
        <Input
          as="textarea"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style={{ height: '100px' }}
        />
        <Label htmlFor="floatingTextarea2">Comments</Label>
      </FormGroup>
    </div>
  )
}

export const Selects: StoryFn = () => {
  return (
    <FormGroup brFormGroupFloatingLabels>
      <Select id="floatingSelect" aria-label="Floating label select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Select>
      <Label htmlFor="floatingSelect">Works with selects</Label>
    </FormGroup>
  )
}

export const Disabled: StoryFn = () => {
  return (
    <div>
      <FormGroup brFormGroupFloatingLabels brMargin={{ bottom: 3 }}>
        <Input type="email" id="floatingInputDisabled" placeholder="name@example.com" disabled />
        <Label htmlFor="floatingInputDisabled">Email address</Label>
      </FormGroup>
      <FormGroup brFormGroupFloatingLabels brMargin={{ bottom: 3 }}>
        <Input
          as="textarea"
          placeholder="Leave a comment here"
          id="floatingTextareaDisabled"
          disabled
        />
        <Label htmlFor="floatingTextareaDisabled">Comments</Label>
      </FormGroup>
      <FormGroup brFormGroupFloatingLabels brMargin={{ bottom: 3 }}>
        <Input
          as="textarea"
          placeholder="Leave a comment here"
          id="floatingTextarea2Disabled"
          style={{ height: '100px' }}
          disabled
        />
        <Label htmlFor="floatingTextarea2Disabled">Comments</Label>
      </FormGroup>
      <FormGroup brFormGroupFloatingLabels>
        <Select
          id="floatingSelectDisabled"
          aria-label="Floating label disabled select example"
          disabled
        >
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Select>
        <Label htmlFor="floatingSelectDisabled">Works with selects</Label>
      </FormGroup>
    </div>
  )
}

export const ReadonlyPlaintext: StoryFn = () => {
  return (
    <div>
      <FormGroup brMargin={{ bottom: 3 }} brFormGroupFloatingLabels>
        <Input
          type="email"
          readOnly
          brInputPlainText
          id="floatingEmptyPlaintextInput"
          placeholder="name@example.com"
        />
        <Label htmlFor="floatingEmptyPlaintextInput">Empty input</Label>
      </FormGroup>
      <FormGroup brMargin={{ bottom: 3 }} brFormGroupFloatingLabels>
        <Input
          type="email"
          readOnly
          brInputPlainText
          id="floatingPlaintextInput"
          placeholder="name@example.com"
          value="name@example.com"
        />
        <Label htmlFor="floatingPlaintextInput">Input with value</Label>
      </FormGroup>
    </div>
  )
}

export const InputGroups: StoryFn = () => {
  return (
    <div>
      <InputGroup brMargin={{ bottom: 3 }}>
        <InputGroupText>@</InputGroupText>
        <FormGroup brFormGroupFloatingLabels>
          <Input id="floatingInputGroup1" placeholder="Username" />
          <Label htmlFor="floatingInputGroup1">Username</Label>
        </FormGroup>
      </InputGroup>
      <hr />
      <InputGroup brInputGroupHasValidation>
        <InputGroupText>@</InputGroupText>
        <FormGroup brFormGroupFloatingLabels brFormGroupIsInvalid>
          <Input
            type="text"
            brInputInvalid
            id="floatingInputGroup2"
            placeholder="Username"
            required
          />
          <Label htmlFor="floatingInputGroup2">Username</Label>
        </FormGroup>
        <div className="invalid-feedback">Please choose a username.</div>
      </InputGroup>
    </div>
  )
}

export const Layout: StoryFn = () => {
  return (
    <Row brRowGutter={2}>
      <Col brColsMd>
        <FormGroup brFormGroupFloatingLabels>
          <Input
            type="email"
            id="floatingInputGrid"
            placeholder="name@example.com"
            value="mdo@example.com"
          />
          <Label htmlFor="floatingInputGrid">Email address</Label>
        </FormGroup>
      </Col>
      <Col brColsMd>
        <FormGroup brFormGroupFloatingLabels>
          <Select id="floatingSelectGrid">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Select>
          <Label htmlFor="floatingSelectGrid">Works with selects</Label>
        </FormGroup>
      </Col>
    </Row>
  )
}
