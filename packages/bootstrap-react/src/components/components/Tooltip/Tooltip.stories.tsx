import { Meta, StoryFn } from '@storybook/react'
import { useTooltip } from './useTooltip'
import Tooltip from './Tooltip'
import Button from '../Button/Button'
import { BrElement } from '../../utils/BrElement'

const meta: Meta = {
  title: 'Tooltip',
  tags: ['autodocs']
}

export default meta

export const TooltipsOnLinks: StoryFn = () => {
  const { floating: tooltip1, target: target1 } = useTooltip()
  const { floating: tooltip2, target: target2 } = useTooltip()
  const { floating: tooltip3, target: target3 } = useTooltip()
  const { floating: tooltip4, target: target4 } = useTooltip()

  return (
    <p className="muted">
      Placeholder text to demonstrate some{' '}
      <a href="#" ref={target1.ref} {...target1.getProps()}>
        inline links
      </a>
      <Tooltip brTooltip={tooltip1}>Default tooltip</Tooltip> with tooltips. This is now just
      filler, no killer. Content placed here just to mimic the presence of{' '}
      <a href="#" ref={target2.ref} {...target2.getProps()}>
        real text
      </a>
      <Tooltip brTooltip={tooltip2}>Another tooltip</Tooltip>. And all that just to give you an idea
      of how tooltips would look when used in real-world situations. So hopefully you've now seen
      how{' '}
      <a href="#" ref={target3.ref} {...target3.getProps()}>
        these tooltips on links
      </a>
      <Tooltip brTooltip={tooltip3}>Another one here too</Tooltip> can work in practice, once you
      use them on{' '}
      <a href="#" ref={target4.ref} {...target4.getProps()}>
        your own
      </a>
      <Tooltip brTooltip={tooltip4}>The last tip!</Tooltip> site or project.
    </p>
  )
}

export const CustomTooltips: StoryFn = () => {
  const { target, floating } = useTooltip()
  return (
    <div>
      <Button ref={target.ref} {...target.getProps()} brButtonColor="secondary">
        Custom tooltip
      </Button>
      <Tooltip brTooltip={floating} className="custom-tooltip">
        This tooltip is themed via CSS variables.
      </Tooltip>
    </div>
  )
}

export const Directions: StoryFn = () => {
  const { target: targetTop, floating: tooltipTop } = useTooltip({ placement: 'top' })
  const { target: targetRight, floating: tooltipRight } = useTooltip({ placement: 'right' })
  const { target: targetBottom, floating: tooltipBottom } = useTooltip({ placement: 'bottom' })
  const { target: targetLeft, floating: tooltipLeft } = useTooltip({ placement: 'left' })
  const { target: targetHtml, floating: tooltipHtml } = useTooltip()
  const { target: targetSvg, floating: tooltipSvg } = useTooltip()

  return (
    <BrElement brUtilsSpacing={{ margin: '5' }}>
      <BrElement brUtilsDisplay="flex" brUtilsSpacing={{ gap: '2' }}>
        <Button brButtonColor="secondary" ref={targetTop.ref} {...targetTop.getProps()}>
          Tooltip on top
        </Button>
        <Tooltip brTooltip={tooltipTop}>Tooltip on top</Tooltip>
        <Button brButtonColor="secondary" ref={targetRight.ref} {...targetRight.getProps()}>
          Tooltip on right
        </Button>
        <Tooltip brTooltip={tooltipRight}>Tooltip on right</Tooltip>
        <Button brButtonColor="secondary" ref={targetBottom.ref} {...targetBottom.getProps()}>
          Tooltip on bottom
        </Button>
        <Tooltip brTooltip={tooltipBottom}>Tooltip on bottom</Tooltip>
        <Button brButtonColor="secondary" ref={targetLeft.ref} {...targetLeft.getProps()}>
          Tooltip on left
        </Button>
        <Tooltip brTooltip={tooltipLeft}>Tooltip on left</Tooltip>
      </BrElement>
      <hr />
      <Button brButtonColor="secondary" ref={targetHtml.ref} {...targetHtml.getProps()}>
        Tooltip with HTML
      </Button>
      <Tooltip brTooltip={tooltipHtml}>
        <em>Tooltip</em> <u>with</u> <b>HTML</b>
      </Tooltip>
      <hr />
      <BrElement
        as="a"
        brUtilsDisplay="inline-block"
        href="#"
        ref={targetSvg.ref}
        {...targetSvg.getProps()}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100">
          <rect width="100%" height="100%" fill="#563d7c"></rect>
          <circle cx="50" cy="50" r="30" fill="#007bff"></circle>
        </svg>
      </BrElement>
      <Tooltip brTooltip={tooltipSvg}>Default tooltip</Tooltip>
    </BrElement>
  )
}

export const DisabledElements: StoryFn = () => {
  const { target, floating } = useTooltip()

  return (
    <div>
      <BrElement
        as="span"
        brUtilsDisplay="inline-block"
        tabIndex={0}
        ref={target.ref}
        {...target.getProps()}
      >
        <Button brButtonColor="primary" disabled>
          Disabled button
        </Button>
        <Tooltip brTooltip={floating}>Disabled tooltip</Tooltip>
      </BrElement>
    </div>
  )
}
