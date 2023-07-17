import { Meta, StoryFn } from '@storybook/react'
import Container from '../containers/Container'
import Row from '../grid/Row'
import Col from '../columns/Col'
import { BrElement } from '../../utils/BrElement'

const meta: Meta = {
  title: 'Gutters',
  tags: ['autodocs']
}
export default meta

export const HorizontalGutters: StoryFn = () => {
  return (
    <div className="bd-example bd-example-cols">
      <Container brPadding={{ x: 4 }} className="text-center">
        <Row brRowGutter={{ x: 5 }}>
          <Col>
            <BrElement brPadding={3}>Custom column padding</BrElement>
          </Col>
          <Col>
            <BrElement brPadding={3}>Custom column padding</BrElement>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container className="overflow-hidden text-center">
        <Row brRowGutter={{ x: 5 }}>
          <Col>
            <BrElement brPadding={3}>Custom column padding</BrElement>
          </Col>
          <Col>
            <BrElement brPadding={3}>Custom column padding</BrElement>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export const VerticalGutters: StoryFn = () => {
  return (
    <div className="bd-example bd-example-cols">
      <Container className="overflow-hidden text-center">
        <Row brRowGutter={{ y: 5 }}>
          <Col brCols={6}>
            <BrElement brPadding={3}>Custom column padding</BrElement>
          </Col>
          <Col brCols={6}>
            <BrElement brPadding={3}>Custom column padding</BrElement>
          </Col>
          <Col brCols={6}>
            <BrElement brPadding={3}>Custom column padding</BrElement>
          </Col>
          <Col brCols={6}>
            <BrElement brPadding={3}>Custom column padding</BrElement>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export const HorizontalAndVerticalGutters: StoryFn = () => {
  return (
    <div className="bd-example bd-example-cols">
      <Container className="text-center">
        <Row brRowGutter={2}>
          <Col brCols={6}>
            <BrElement brPadding={3}>Custom column padding</BrElement>
          </Col>
          <Col brCols={6}>
            <BrElement brPadding={3}>Custom column padding</BrElement>
          </Col>
          <Col brCols={6}>
            <BrElement brPadding={3}>Custom column padding</BrElement>
          </Col>
          <Col brCols={6}>
            <BrElement brPadding={3}>Custom column padding</BrElement>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export const RowColumnsGutters: StoryFn = () => {
  return (
    <div className="bd-example bd-example-cols">
      <Container className="text-center">
        <Row brRowCols={2} brRowColsLg={5} brRowGutter={2} brRowGutterLg={3}>
          <Col>
            <BrElement brPadding={3}>Row column</BrElement>
          </Col>
          <Col>
            <BrElement brPadding={3}>Row column</BrElement>
          </Col>
          <Col>
            <BrElement brPadding={3}>Row column</BrElement>
          </Col>
          <Col>
            <BrElement brPadding={3}>Row column</BrElement>
          </Col>
          <Col>
            <BrElement brPadding={3}>Row column</BrElement>
          </Col>
          <Col>
            <BrElement brPadding={3}>Row column</BrElement>
          </Col>
          <Col>
            <BrElement brPadding={3}>Row column</BrElement>
          </Col>
          <Col>
            <BrElement brPadding={3}>Row column</BrElement>
          </Col>
          <Col>
            <BrElement brPadding={3}>Row column</BrElement>
          </Col>
          <Col>
            <BrElement brPadding={3}>Row column</BrElement>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export const NoGutters: StoryFn = () => {
  return (
    <div className="bd-example bd-example-row">
      <Row brRowGutter={0} className="text-center">
        <Col brColsSm={6} brColsMd={8}>
          .col-sm-6 .col-md-8
        </Col>
        <Col brCols={6} brColsMd={4}>
          .col-6 .col-md-4
        </Col>
      </Row>
    </div>
  )
}
