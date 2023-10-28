import type { Meta, StoryFn } from '@storybook/react'

import { linkToBootstrapDocs } from '../../../storybook/decorators/linkToBootstrapDocs'
import { as } from '../../../storybook/utils'
import Col from '../../layout/columns/Col'
import Row from '../../layout/grid/Row'
import { BrElement } from '../../utils/BrElement'
import Button from '../Button/Button'
import Card from '../Card/Card'
import CardBody from '../Card/CardBody'

import Collapse from './Collapse'
import { useCollapse } from './useCollapse'

const meta: Meta<typeof Collapse> = {
  component: Collapse,
  tags: ['autodocs'],
  argTypes: {
    as
  }
}

export default meta
export const BaseExample: StoryFn<typeof Collapse> = () => {
  const collapse = useCollapse()

  return (
    <div style={{ minHeight: '200px' }}>
      <Button onClick={collapse.toggle}>Click to {collapse.isOpen ? 'Hide' : 'Show'}</Button>
      <Collapse brCollapse={collapse}>
        <Card>
          <CardBody>
            Some placeholder content for the collapse component. This panel is hidden by default but
            revealed when the user activates the relevant trigger.
          </CardBody>
        </Card>
      </Collapse>
    </div>
  )
}

export const Horizontal: StoryFn = () => {
  const collapse = useCollapse()

  return (
    <div style={{ minHeight: '300px' }}>
      <Button onClick={collapse.toggle}>Click to {collapse.isOpen ? 'Hide' : 'Show'}</Button>
      <div>
        <Collapse brCollapse={collapse} className="collapse-horizontal">
          <Card style={{ width: '300px' }}>
            <CardBody>
              Some placeholder content for the collapse component. This panel is hidden by default
              but revealed when the user activates the relevant trigger.
            </CardBody>
          </Card>
        </Collapse>
      </div>
    </div>
  )
}
Horizontal.decorators = [
  linkToBootstrapDocs('https://getbootstrap.com/docs/5.3/components/collapse/#horizontal')
]

export const MultipleTogglesAndTargets: StoryFn = () => {
  const collapse1 = useCollapse()
  const collapse2 = useCollapse()

  return (
    <div style={{ minHeight: '200px' }}>
      <BrElement bsJs={{ display: 'flex', spacing: { gap: '2' } }}>
        <Button onClick={collapse1.toggle}>Toggle first element</Button>
        <Button onClick={collapse2.toggle}>Toggle second element</Button>
        <Button
          onClick={() => {
            collapse1.toggle()
            collapse2.toggle()
          }}
        >
          Toggle both elements
        </Button>
      </BrElement>
      <Row style={{ maxWidth: '700px' }}>
        <Col>
          <Collapse brCollapse={collapse1}>
            <Card>
              <CardBody>
                Some placeholder content for the first collapse component of this multi-collapse
                example. This panel is hidden by default but revealed when the user activates the
                relevant trigger.
              </CardBody>
            </Card>
          </Collapse>
        </Col>
        <Col>
          <Collapse brCollapse={collapse2}>
            <Card>
              <CardBody>
                Some placeholder content for the second collapse component of this multi-collapse
                example. This panel is hidden by default but revealed when the user activates the
                relevant trigger.
              </CardBody>
            </Card>
          </Collapse>
        </Col>
      </Row>
    </div>
  )
}
MultipleTogglesAndTargets.decorators = [
  linkToBootstrapDocs(
    'https://getbootstrap.com/docs/5.3/components/collapse/#multiple-toggles-and-targets'
  )
]
