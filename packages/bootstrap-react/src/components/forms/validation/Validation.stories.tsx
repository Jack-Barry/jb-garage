import { Meta, StoryFn } from '@storybook/react'
import classNames from 'classnames'
import { FormEvent, useState } from 'react'

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

import Feedback from './Feedback'

const meta: Meta = {
  title: 'Validation',
  tags: ['autodocs']
}

export default meta
export const CustomStyles: StoryFn = () => {
  const [submitted, setSubmitted] = useState(false)

  return (
    <Row
      as="form"
      brRowGutter={3}
      className={classNames('needs-validation', { 'was-validated': submitted })}
      noValidate
      onSubmit={(event: FormEvent) => {
        event.preventDefault()
        setSubmitted(true)
      }}
    >
      <Col brColsMd={4}>
        <Label htmlFor="validationCustom01">First name</Label>
        <Input id="validationCustom01" defaultValue="Mark" required />
        <Feedback brFeedbackType="valid">Looks good!</Feedback>
      </Col>
      <Col brColsMd={4}>
        <Label htmlFor="validationCustom02">Last name</Label>
        <Input id="validationCustom02" defaultValue="Otto" required />
        <Feedback brFeedbackType="valid">Looks good!</Feedback>
      </Col>
      <Col brColsMd={4}>
        <Label htmlFor="validationCustomUsername">Username</Label>
        <InputGroup brInputGroupHasValidation>
          <InputGroupText id="inputGroupPrepend">@</InputGroupText>
          <Input id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
          <Feedback>Please choose a username.</Feedback>
        </InputGroup>
      </Col>
      <Col brColsMd={6}>
        <Label htmlFor="validationCustom03">City</Label>
        <Input id="validationCustom03" required />
        <Feedback>Please provide a valid city.</Feedback>
      </Col>
      <Col brColsMd={3}>
        <Label htmlFor="validationCustom04">State</Label>
        <Select id="validationCustom04" required defaultValue="">
          <option disabled value="">
            Choose...
          </option>
          <option>...</option>
        </Select>
        <Feedback>Please select a valid state.</Feedback>
      </Col>
      <Col brColsMd={3}>
        <Label htmlFor="validationCustom05">Zip</Label>
        <Input id="validationCustom05" required />
        <Feedback>Please provide a valid zip.</Feedback>
      </Col>
      <Col brCols={12}>
        <FormCheck
          brFormCheckInputProps={{ id: 'invalidCheck', required: true }}
          brFormCheckLabelProps={{ children: 'Agree to terms and conditions' }}
        />
      </Col>
      <Col brCols={12}>
        <Button brButtonColor="primary" type="submit">
          Submit form
        </Button>
      </Col>
    </Row>
  )
}

export const BrowserDefaults: StoryFn = () => {
  return (
    <Row as="form" brRowGutter={3}>
      <Col brColsMd={4}>
        <Label htmlFor="validationDefault01">First name</Label>
        <Input id="validationDefault01" defaultValue="Mark" required />
      </Col>
      <Col brColsMd={4}>
        <Label htmlFor="validationDefault02">Last name</Label>
        <Input id="validationDefault02" defaultValue="Otto" required />
      </Col>
      <Col brColsMd={4}>
        <Label htmlFor="validationDefaultUsername">Username</Label>
        <InputGroup>
          <InputGroupText id="inputGroupPrepend2">@</InputGroupText>
          <Input id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
        </InputGroup>
      </Col>
      <Col brColsMd={6}>
        <Label htmlFor="validationDefault03">City</Label>
        <Input id="validationDefault03" required />
      </Col>
      <Col brColsMd={3}>
        <Label htmlFor="validationDefault04">State</Label>
        <Select id="validationDefault04" required defaultValue="">
          <option disabled value="">
            Choose...
          </option>
          <option>...</option>
        </Select>
      </Col>
      <Col brColsMd={3}>
        <Label htmlFor="validationDefault05">Zip</Label>
        <Input id="validationDefault05" required />
      </Col>
      <Col brCols={12}>
        <FormCheck
          brFormCheckInputProps={{ id: 'invalidCheck2', required: true }}
          brFormCheckLabelProps={{ children: 'Agree to terms and conditions' }}
        />
      </Col>
      <Col brCols={12}>
        <Button brButtonColor="primary" type="submit">
          Submit form
        </Button>
      </Col>
    </Row>
  )
}

export const ServerSide: StoryFn = () => {
  return (
    <Row as="form" brRowGutter={3}>
      <Col brColsMd={4}>
        <Label htmlFor="validationServer01">First name</Label>
        <Input brInputValid id="validationServer01" defaultValue="Mark" required />
        <Feedback brFeedbackType="valid">Looks good!</Feedback>
      </Col>
      <Col brColsMd={4}>
        <Label htmlFor="validationServer02">Last name</Label>
        <Input brInputValid id="validationServer02" defaultValue="Otto" required />
        <Feedback brFeedbackType="valid">Looks good!</Feedback>
      </Col>
      <Col brColsMd={4}>
        <Label htmlFor="validationServerUsername">Username</Label>
        <InputGroup brInputGroupHasValidation>
          <InputGroupText id="inputGroupPrepend3">@</InputGroupText>
          <Input
            brInputInvalid
            id="validationServerUsername"
            aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
            required
          />
          <Feedback id="validationServerUsernameFeedback">Please choose a username.</Feedback>
        </InputGroup>
      </Col>
      <Col brColsMd={6}>
        <Label htmlFor="validationServer03">City</Label>
        <Input
          brInputInvalid
          id="validationServer03"
          aria-describedby="validationServer03Feedback"
          required
        />
        <Feedback id="validationServer03Feedback">Please provide a valid city.</Feedback>
      </Col>
      <Col brColsMd={3}>
        <Label htmlFor="validationServer04">State</Label>
        <Select
          brSelectInvalid
          id="validationServer04"
          aria-describedby="validationServer04Feedback"
          required
          defaultValue=""
        >
          <option disabled value="">
            Choose...
          </option>
          <option>...</option>
        </Select>
        <Feedback id="validationServer04Feedback">Please select a valid state.</Feedback>
      </Col>
      <Col brColsMd={3}>
        <Label htmlFor="validationServer05">Zip</Label>
        <Input
          brInputInvalid
          id="validationServer05"
          aria-describedby="validationServer05Feedback"
          required
        />
        <Feedback id="validationServer05Feedback">Please provide a valid zip.</Feedback>
      </Col>
      <Col brCols={12}>
        <FormCheck
          brFormCheckInputProps={{
            brFormCheckInputInvalid: true,
            id: 'invalidCheck3',
            'aria-describedby': 'invalidCheck3Feedback',
            required: true
          }}
          brFormCheckLabelProps={{
            children: 'Agree to terms and conditions'
          }}
        />
      </Col>
      <Col brCols={12}>
        <Button brButtonColor="primary" type="submit">
          Submit form
        </Button>
      </Col>
    </Row>
  )
}

export const SupportedElements: StoryFn = () => {
  return (
    <form className="was-validated">
      <BrElement bsJs={{ bsJsAll: { spacing: { margin: { bottom: '3' } } } }}>
        <Label htmlFor="validationTextarea">Textarea</Label>
        <Input
          as="textarea"
          id="validationTextarea"
          placeholder="Required example textarea"
          required
        />
        <Feedback>Please enter a message in the textarea.</Feedback>
      </BrElement>

      <FormCheck
        brFormCheckWrapperProps={{ bsJs: { bsJsAll: { spacing: { margin: { bottom: '3' } } } } }}
        brFormCheckInputProps={{
          id: 'validationFormCheck1',
          required: true
        }}
        brFormCheckLabelProps={{ children: 'Check this checkbox' }}
      >
        <Feedback>Example invalid feedback text</Feedback>
      </FormCheck>

      <FormCheck
        brFormCheckInputProps={{
          type: 'radio',
          id: 'validationFormCheck2',
          name: 'radio-stacked',
          required: true
        }}
        brFormCheckLabelProps={{ children: 'Toggle this radio' }}
      />
      <FormCheck
        brFormCheckWrapperProps={{ bsJs: { bsJsAll: { spacing: { margin: { bottom: 3 } } } } }}
        brFormCheckInputProps={{
          type: 'radio',
          id: 'validationFormCheck3',
          name: 'radio-stacked',
          required: true
        }}
        brFormCheckLabelProps={{ children: 'Or toggle this other radio' }}
      >
        <Feedback>More example invalid feedback text</Feedback>
      </FormCheck>

      <BrElement bsJs={{ bsJsAll: { spacing: { margin: { bottom: '3' } } } }}>
        <Select required aria-label="select example">
          <option value="">Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Select>
        <Feedback>Example invalid select feedback</Feedback>
      </BrElement>

      <BrElement bsJs={{ bsJsAll: { spacing: { margin: { bottom: '3' } } } }}>
        <Input type="file" aria-label="file example" required />
        <Feedback>Example invalid form file feedback</Feedback>
      </BrElement>

      <BrElement bsJs={{ bsJsAll: { spacing: { margin: { bottom: '3' } } } }}>
        <Button brButtonColor="primary" type="submit" disabled>
          Submit form
        </Button>
      </BrElement>
    </form>
  )
}

export const Tooltips: StoryFn = () => {
  const [submitted, setSubmitted] = useState(false)

  return (
    <Row
      as="form"
      brRowGutter={3}
      className={classNames('needs-validation', { 'was-validated': submitted })}
      noValidate
      onSubmit={(event: FormEvent) => {
        event.preventDefault()
        setSubmitted(true)
      }}
    >
      <Col brColsMd={4} className="position-relative">
        <Label htmlFor="validationTooltip01">First name</Label>
        <Input id="validationTooltip01" value="Mark" required />
        <Feedback brFeedbackType="valid" brFeedbackTooltip>
          Looks good!
        </Feedback>
      </Col>
      <Col brColsMd={4} className="position-relative">
        <Label htmlFor="validationTooltip02">Last name</Label>
        <Input id="validationTooltip02" value="Otto" required />
        <Feedback brFeedbackType="valid" brFeedbackTooltip>
          Looks good!
        </Feedback>
      </Col>
      <Col brColsMd={4} className="position-relative">
        <Label htmlFor="validationTooltipUsername">Username</Label>
        <InputGroup brInputGroupHasValidation>
          <InputGroupText id="validationTooltipUsernamePrepend">@</InputGroupText>
          <Input
            type="text"
            id="validationTooltipUsername"
            aria-describedby="validationTooltipUsernamePrepend"
            required
          />
          <Feedback brFeedbackTooltip>Please choose a unique and valid username.</Feedback>
        </InputGroup>
      </Col>
      <Col brColsMd={6} className="position-relative">
        <Label htmlFor="validationTooltip03">City</Label>
        <Input id="validationTooltip03" required />
        <Feedback brFeedbackTooltip>Please provide a valid city.</Feedback>
      </Col>
      <Col brColsMd={3} className="position-relative">
        <Label htmlFor="validationTooltip04">State</Label>
        <Select id="validationTooltip04" required defaultValue="">
          <option disabled value="">
            Choose...
          </option>
          <option>...</option>
        </Select>
        <Feedback brFeedbackTooltip>Please select a valid state.</Feedback>
      </Col>
      <Col brColsMd={3} className="position-relative">
        <Label htmlFor="validationTooltip05">Zip</Label>
        <Input id="validationTooltip05" required />
        <Feedback brFeedbackTooltip>Please provide a valid zip.</Feedback>
      </Col>
      <Col brCols={12}>
        <Button brButtonColor="primary" type="submit">
          Submit form
        </Button>
      </Col>
    </Row>
  )
}
