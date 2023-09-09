import { Meta, StoryFn } from '@storybook/react'

import Button from '../../components/Button/Button'
import DropdownDivider from '../../components/Dropdown/DropdownDivider'
import DropdownItem from '../../components/Dropdown/DropdownItem'
import DropdownMenu from '../../components/Dropdown/DropdownMenu'
import DropdownToggle from '../../components/Dropdown/DropdownToggle'
import { useDropdown } from '../../components/Dropdown/useDropdown'
import { BrElement } from '../../utils/BrElement'
import FormCheckInput from '../FormCheck/FormCheckInput'
import FormText from '../FormControl/FormText'
import Input from '../FormControl/Input'
import Label from '../FormControl/Label'
import Select from '../Select/Select'

import InputGroup from './InputGroup'
import InputGroupText from './InputGroupText'

const meta: Meta = {
  title: 'Input Group',
  tags: ['autodocs']
}

export default meta
export const BasicExample: StoryFn = () => {
  return (
    <div>
      <InputGroup bsJs={{ bsJsAll: { spacing: { margin: { bottom: '3' } } } }}>
        <InputGroupText id="basic-addon1">@</InputGroupText>
        <Input placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
      </InputGroup>

      <InputGroup bsJs={{ bsJsAll: { spacing: { margin: { bottom: '3' } } } }}>
        <Input
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroupText id="basic-addon2">@example.com</InputGroupText>
      </InputGroup>

      <BrElement bsJs={{ bsJsAll: { spacing: { margin: { bottom: '3' } } } }}>
        <Label htmlFor="basic-url">Your vanity URL</Label>
        <InputGroup>
          <InputGroupText id="basic-addon3">https://example.com/users/</InputGroupText>
          <Input type="text" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
        </InputGroup>
        <FormText id="basic-addon4">Example help text goes outside the input group.</FormText>
      </BrElement>

      <InputGroup bsJs={{ bsJsAll: { spacing: { margin: { bottom: '3' } } } }}>
        <InputGroupText>$</InputGroupText>
        <Input type="text" aria-label="Amount (to the nearest dollar)" />
        <InputGroupText>.00</InputGroupText>
      </InputGroup>

      <InputGroup bsJs={{ bsJsAll: { spacing: { margin: { bottom: '3' } } } }}>
        <Input type="text" placeholder="Username" aria-label="Username" />
        <InputGroupText>@</InputGroupText>
        <Input type="text" placeholder="Server" aria-label="Server" />
      </InputGroup>

      <InputGroup>
        <InputGroupText>With textarea</InputGroupText>
        <Input as="textarea" aria-label="With textarea" />
      </InputGroup>
    </div>
  )
}

export const Wrapping: StoryFn = () => {
  return (
    <InputGroup bsJs={{ bsJsAll: { flex: { wrap: 'nowrap' } } }}>
      <InputGroupText id="addon-wrapping">@</InputGroupText>
      <Input placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"></Input>
    </InputGroup>
  )
}

export const Sizing: StoryFn = () => {
  return (
    <div>
      <InputGroup bsJs={{ bsJsAll: { spacing: { margin: { bottom: '3' } } } }} brInputGroupSm>
        <InputGroupText id="inputGroup-sizing-sm">Small</InputGroupText>
        <Input aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
      </InputGroup>

      <InputGroup bsJs={{ bsJsAll: { spacing: { margin: { bottom: '3' } } } }}>
        <InputGroupText id="inputGroup-sizing-default">Default</InputGroupText>
        <Input aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
      </InputGroup>

      <InputGroup brInputGroupLg>
        <InputGroupText id="inputGroup-sizing-lg">Large</InputGroupText>
        <Input aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
      </InputGroup>
    </div>
  )
}

export const CheckboxesAndRadios: StoryFn = () => {
  return (
    <div>
      <InputGroup bsJs={{ bsJsAll: { spacing: { margin: { bottom: '3' } } } }}>
        <InputGroupText>
          <FormCheckInput
            bsJs={{ bsJsAll: { spacing: { margin: { top: '0' } } } }}
            value=""
            aria-label="Checkbox for following text input"
          />
        </InputGroupText>
        <Input aria-label="Text input with checkbox" />
      </InputGroup>

      <InputGroup>
        <InputGroupText>
          <FormCheckInput
            bsJs={{ bsJsAll: { spacing: { margin: { top: '0' } } } }}
            type="radio"
            value=""
            aria-label="Radio button for following text input"
          />
        </InputGroupText>
        <Input aria-label="Text input with radio button" />
      </InputGroup>
    </div>
  )
}

export const MultipleInputs: StoryFn = () => {
  return (
    <InputGroup>
      <InputGroupText>First and last name</InputGroupText>
      <Input aria-label="First name" />
      <Input aria-label="Last name" />
    </InputGroup>
  )
}

export const MultipleAddons: StoryFn = () => {
  return (
    <div>
      <InputGroup bsJs={{ bsJsAll: { spacing: { margin: { bottom: '3' } } } }}>
        <InputGroupText>$</InputGroupText>
        <InputGroupText>0.00</InputGroupText>
        <Input aria-label="Dollar amount (with dot and two decimal places)" />
      </InputGroup>

      <InputGroup>
        <Input aria-label="Dollar amount (with dot and two decimal places)" />
        <InputGroupText>$</InputGroupText>
        <InputGroupText>0.00</InputGroupText>
      </InputGroup>
    </div>
  )
}

export const ButtonAddons: StoryFn = () => {
  return (
    <div>
      <InputGroup bsJs={{ bsJsAll: { spacing: { margin: { bottom: '3' } } } }}>
        <Button brButtonColor="outline-secondary" id="button-addon1">
          Button
        </Button>
        <Input
          placeholder=""
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
      </InputGroup>

      <InputGroup bsJs={{ bsJsAll: { spacing: { margin: { bottom: '3' } } } }}>
        <Input
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <Button brButtonColor="outline-secondary" id="button-addon2">
          Button
        </Button>
      </InputGroup>

      <InputGroup bsJs={{ bsJsAll: { spacing: { margin: { bottom: '3' } } } }}>
        <Button brButtonColor="outline-secondary">Button</Button>
        <Button brButtonColor="outline-secondary">Button</Button>
        <Input placeholder="" aria-label="Example text with two button addons" />
      </InputGroup>

      <InputGroup>
        <Input
          placeholder="Recipient's username"
          aria-label="Recipient's username with two button addons"
        />
        <Button brButtonColor="outline-secondary">Button</Button>
        <Button brButtonColor="outline-secondary">Button</Button>
      </InputGroup>
    </div>
  )
}

export const ButtonsWithDropdowns: StoryFn = () => {
  const { dropdownRef: dropdownRef1, isOpen: isOpen1 } = useDropdown()
  const { dropdownRef: dropdownRef2, isOpen: isOpen2 } = useDropdown()
  const { dropdownRef: dropdownRef3, isOpen: isOpen3 } = useDropdown()
  const { dropdownRef: dropdownRef4, isOpen: isOpen4 } = useDropdown()

  return (
    <div style={{ minHeight: '300px' }}>
      <InputGroup bsJs={{ bsJsAll: { spacing: { margin: { bottom: '3' } } } }}>
        <DropdownToggle
          ref={dropdownRef1}
          brButtonColor="outline-secondary"
          aria-expanded={isOpen1}
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
        <Input aria-label="Text input with dropdown button" />
      </InputGroup>
      <InputGroup bsJs={{ bsJsAll: { spacing: { margin: { bottom: '3' } } } }}>
        <Input aria-label="Text input with dropdown button" />
        <DropdownToggle
          ref={dropdownRef2}
          brButtonColor="outline-secondary"
          aria-expanded={isOpen2}
        >
          Dropdown
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          <DropdownItem href="#">Action</DropdownItem>
          <DropdownItem href="#">Another action</DropdownItem>
          <DropdownItem href="#">Something else here</DropdownItem>
          <DropdownDivider />
          <DropdownItem href="#">Separated link</DropdownItem>
        </DropdownMenu>
      </InputGroup>

      <InputGroup>
        <DropdownToggle
          ref={dropdownRef3}
          brButtonColor="outline-secondary"
          aria-expanded={isOpen3}
        >
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="#">Action before</DropdownItem>
          <DropdownItem href="#">Another action before</DropdownItem>
          <DropdownItem href="#">Something else here</DropdownItem>
          <DropdownDivider />
          <DropdownItem href="#">Separated link</DropdownItem>
        </DropdownMenu>
        <Input aria-label="Text input with 2 dropdown buttons" />
        <DropdownToggle
          ref={dropdownRef4}
          brButtonColor="outline-secondary"
          aria-expanded={isOpen4}
        >
          Dropdown
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          <DropdownItem href="#">Action</DropdownItem>
          <DropdownItem href="#">Another action</DropdownItem>
          <DropdownItem href="#">Something else here</DropdownItem>
          <DropdownDivider />
          <DropdownItem href="#">Separated link</DropdownItem>
        </DropdownMenu>
      </InputGroup>
    </div>
  )
}

export const SegmentedButtons: StoryFn = () => {
  const { dropdownRef: dropdownRef1, isOpen: isOpen1 } = useDropdown()
  const { dropdownRef: dropdownRef2, isOpen: isOpen2 } = useDropdown()

  return (
    <div style={{ minHeight: '280px' }}>
      <InputGroup bsJs={{ bsJsAll: { spacing: { margin: { bottom: '3' } } } }}>
        <Button brButtonColor="outline-secondary">Action</Button>
        <DropdownToggle
          ref={dropdownRef1}
          brDropdownToggleSplit
          brButtonColor="outline-secondary"
          aria-expanded={isOpen1}
        >
          <BrElement as="span" brVisuallyHidden>
            Toggle Dropdown
          </BrElement>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="#">Action</DropdownItem>
          <DropdownItem href="#">Another action</DropdownItem>
          <DropdownItem href="#">Something else here</DropdownItem>
          <DropdownDivider />
          <DropdownItem href="#">Separated link</DropdownItem>
        </DropdownMenu>
        <Input aria-label="Text input with segmented dropdown button" />
      </InputGroup>

      <InputGroup>
        <Input aria-label="Text input with segmented dropdown button" />
        <Button brButtonColor="outline-secondary">Action</Button>
        <DropdownToggle
          ref={dropdownRef2}
          brDropdownToggleSplit
          brButtonColor="outline-secondary"
          aria-expanded={isOpen2}
        >
          <BrElement as="span" brVisuallyHidden>
            Toggle Dropdown
          </BrElement>
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          <DropdownItem href="#">Action</DropdownItem>
          <DropdownItem href="#">Another action</DropdownItem>
          <DropdownItem href="#">Something else here</DropdownItem>
          <DropdownDivider />
          <DropdownItem href="#">Separated link</DropdownItem>
        </DropdownMenu>
      </InputGroup>
    </div>
  )
}

export const CustomFormsCustomSelect: StoryFn = () => {
  return (
    <div>
      <InputGroup bsJs={{ bsJsAll: { spacing: { margin: { bottom: '3' } } } }}>
        <InputGroupText as="label" htmlFor="inputGroupSelect01">
          Options
        </InputGroupText>
        <Select id="inputGroupSelect01">
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Select>
      </InputGroup>

      <InputGroup bsJs={{ bsJsAll: { spacing: { margin: { bottom: '3' } } } }}>
        <Select id="inputGroupSelect02">
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Select>
        <InputGroupText as="label" htmlFor="inputGroupSelect02">
          Options
        </InputGroupText>
      </InputGroup>

      <InputGroup bsJs={{ bsJsAll: { spacing: { margin: { bottom: '3' } } } }}>
        <Button brButtonColor="outline-secondary">Button</Button>
        <Select id="inputGroupSelect03" aria-label="Example select with button addon">
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Select>
      </InputGroup>

      <InputGroup>
        <Select id="inputGroupSelect04" aria-label="Example select with button addon">
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Select>
        <Button brButtonColor="outline-secondary" type="button">
          Button
        </Button>
      </InputGroup>
    </div>
  )
}

export const CustomFormsCustomFileInput: StoryFn = () => {
  return (
    <div>
      <InputGroup bsJs={{ bsJsAll: { spacing: { margin: { bottom: '3' } } } }}>
        <InputGroupText as="label" htmlFor="inputGroupFile01">
          Upload
        </InputGroupText>
        <Input type="file" id="inputGroupFile01" />
      </InputGroup>

      <InputGroup bsJs={{ bsJsAll: { spacing: { margin: { bottom: '3' } } } }}>
        <Input type="file" id="inputGroupFile02" />
        <InputGroupText as="label" htmlFor="inputGroupFile02">
          Upload
        </InputGroupText>
      </InputGroup>

      <InputGroup bsJs={{ bsJsAll: { spacing: { margin: { bottom: '3' } } } }}>
        <Button brButtonColor="outline-secondary" id="inputGroupFileAddon03">
          Button
        </Button>
        <Input
          type="file"
          id="inputGroupFile03"
          aria-describedby="inputGroupFileAddon03"
          aria-label="Upload"
        />
      </InputGroup>

      <InputGroup>
        <Input
          type="file"
          id="inputGroupFile04"
          aria-describedby="inputGroupFileAddon04"
          aria-label="Upload"
        />
        <Button brButtonColor="outline-secondary" id="inputGroupFileAddon04">
          Button
        </Button>
      </InputGroup>
    </div>
  )
}
