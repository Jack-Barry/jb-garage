import type { Meta, StoryFn } from '@storybook/react'

import { linkToBootstrapDocs } from '../../../storybook/decorators/linkToBootstrapDocs'
import { as } from '../../../storybook/utils'
import Button from '../Button/Button'
import Popover from './Popover'
import PopoverBody from './PopoverBody'
import PopoverHeader from './PopoverHeader'
import { usePopover } from './usePopover'
import { BrElement } from '../../utils/BrElement'

const meta: Meta<typeof Popover> = {
  component: Popover,
  tags: ['autodocs'],
  argTypes: {
    as
  }
}

export default meta
export const BaseExample: StoryFn<typeof Popover> = () => {
  const popover = usePopover()

  return (
    <BrElement brPadding={{ y: 5 }}>
      <Button {...popover.referenceProps} className="btn-lg btn-danger">
        Click to toggle popover
      </Button>
      <Popover popover={popover}>
        <PopoverHeader as="h3">Popover Header</PopoverHeader>
        <PopoverBody>Popover body</PopoverBody>
      </Popover>
    </BrElement>
  )
}

export const FourDirections: StoryFn = () => {
  const popoverTop = usePopover({ floatingOptions: { placement: 'top' } })
  const popoverRight = usePopover({ floatingOptions: { placement: 'right' } })
  const popoverBottom = usePopover({ floatingOptions: { placement: 'bottom' } })
  const popoverLeft = usePopover({ floatingOptions: { placement: 'left' } })

  return (
    <BrElement brPadding={{ y: 5 }} className="d-flex gap-2">
      <Button {...popoverTop.referenceProps} className="btn-secondary">
        Popover on top
      </Button>
      <Popover popover={popoverTop}>
        <PopoverBody>Top popover</PopoverBody>
      </Popover>
      <Button {...popoverRight.referenceProps} className="btn-secondary">
        Popover on right
      </Button>
      <Popover popover={popoverRight}>
        <PopoverBody>Right popover</PopoverBody>
      </Popover>
      <Button {...popoverBottom.referenceProps} className="btn-secondary">
        Popover on bottom
      </Button>
      <Popover popover={popoverBottom}>
        <PopoverBody>Bottom popover</PopoverBody>
      </Popover>
      <Button {...popoverLeft.referenceProps} className="btn-secondary">
        Popover on left
      </Button>
      <Popover popover={popoverLeft}>
        <PopoverBody>Left popover</PopoverBody>
      </Popover>
    </BrElement>
  )
}
FourDirections.decorators = [
  linkToBootstrapDocs('https://getbootstrap.com/docs/5.3/components/popovers/#four-directions')
]

export const DismissOnNextClick: StoryFn = () => {
  const popover = usePopover({ isDismissible: true })

  return (
    <div>
      <Button {...popover.referenceProps} className="btn-lg btn-danger">
        Dismissable popover
      </Button>
      <Popover popover={popover}>
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
