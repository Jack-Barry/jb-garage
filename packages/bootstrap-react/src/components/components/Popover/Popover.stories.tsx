import type { Meta, StoryFn } from '@storybook/react'

import { linkToBootstrapDocs } from '../../../storybook/decorators/linkToBootstrapDocs'
import { as } from '../../../storybook/utils'
import Button from '../Button/Button'
import PopoverBody from './PopoverBody'
import PopoverHeader from './PopoverHeader'
import { BrElement } from '../../utils/BrElement'
import { usePopover } from './usePopover'
import Popover from './Popover'

const meta: Meta = {
  title: 'Popover',
  tags: ['autodocs'],
  argTypes: {
    as
  }
}

export default meta
export const BaseExample: StoryFn = () => {
  const { target, floating } = usePopover()

  return (
    <BrElement brPadding={{ y: 5 }}>
      <Button ref={target.ref} {...target.getProps()} brVariant="danger" brLg>
        Click to toggle popover
      </Button>
      <Popover brPopover={floating}>
        <PopoverHeader as="h3">Popover Header</PopoverHeader>
        <PopoverBody>Popover body</PopoverBody>
      </Popover>
    </BrElement>
  )
}

export const FourDirections: StoryFn = () => {
  const popoverTop = usePopover({ placement: 'top' })
  const popoverRight = usePopover({ placement: 'right' })
  const popoverBottom = usePopover({ placement: 'bottom' })
  const popoverLeft = usePopover({ placement: 'left' })

  return (
    <BrElement brPadding={{ y: 5 }} brDisplay="flex" className="gap-2">
      <Button ref={popoverTop.target.ref} {...popoverTop.target.getProps()} brVariant="secondary">
        Popover on top
      </Button>
      <Popover brPopover={popoverTop.floating}>
        <PopoverBody>Top popover</PopoverBody>
      </Popover>
      <Button
        ref={popoverRight.target.ref}
        {...popoverRight.target.getProps()}
        brVariant="secondary"
      >
        Popover on right
      </Button>
      <Popover brPopover={popoverRight.floating}>
        <PopoverBody>Right popover</PopoverBody>
      </Popover>
      <Button
        ref={popoverBottom.target.ref}
        {...popoverBottom.target.getProps()}
        brVariant="secondary"
      >
        Popover on bottom
      </Button>
      <Popover brPopover={popoverBottom.floating}>
        <PopoverBody>Bottom popover</PopoverBody>
      </Popover>
      <Button ref={popoverLeft.target.ref} {...popoverLeft.target.getProps()} brVariant="secondary">
        Popover on left
      </Button>
      <Popover brPopover={popoverLeft.floating}>
        <PopoverBody>Left popover</PopoverBody>
      </Popover>
    </BrElement>
  )
}
FourDirections.decorators = [
  linkToBootstrapDocs('https://getbootstrap.com/docs/5.3/components/popovers/#four-directions')
]

export const DismissOnNextClick: StoryFn = () => {
  const popover = usePopover({ dismissible: true })

  return (
    <div>
      <Button ref={popover.target.ref} {...popover.target.getProps()} brVariant="danger" brLg>
        Dismissable popover
      </Button>
      <Popover brPopover={popover.floating}>
        <PopoverHeader as="h2">Popover Header</PopoverHeader>
        <PopoverBody>Popover body</PopoverBody>
      </Popover>
    </div>
  )
}
DismissOnNextClick.decorators = [
  linkToBootstrapDocs(
    'https://getbootstrap.com/docs/5.3/components/popovers/#dismiss-on-next-click'
  )
]
