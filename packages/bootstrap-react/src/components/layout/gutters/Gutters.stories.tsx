import { Meta, StoryFn } from '@storybook/react'

import { BrElement } from '../../utils/BrElement'
import Col from '../columns/Col'
import Container from '../containers/Container'
import Row from '../grid/Row'

const meta: Meta = {
  title: 'Gutters',
  tags: ['autodocs']
}
export default meta

export const HorizontalGutters: StoryFn = () => {
  return (
    <div className="bd-example bd-example-cols">
      <Container bsJs={{ spacing: { padding: { x: '4' } } }} className="text-center">
        <Row bsJs={{ gutter: { x: 5 } }}>
          <Col>
            <BrElement bsJs={{ spacing: { padding: '3' } }}>Custom column padding</BrElement>
          </Col>
          <Col>
            <BrElement bsJs={{ spacing: { padding: '3' } }}>Custom column padding</BrElement>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container className="overflow-hidden text-center">
        <Row bsJs={{ gutter: { x: 5 } }}>
          <Col>
            <BrElement bsJs={{ spacing: { padding: '3' } }}>Custom column padding</BrElement>
          </Col>
          <Col>
            <BrElement bsJs={{ spacing: { padding: '3' } }}>Custom column padding</BrElement>
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
        <Row bsJs={{ gutter: { y: 5 } }}>
          <Col bsJs={{ cols: 6 }}>
            <BrElement bsJs={{ spacing: { padding: '3' } }}>Custom column padding</BrElement>
          </Col>
          <Col bsJs={{ cols: 6 }}>
            <BrElement bsJs={{ spacing: { padding: '3' } }}>Custom column padding</BrElement>
          </Col>
          <Col bsJs={{ cols: 6 }}>
            <BrElement bsJs={{ spacing: { padding: '3' } }}>Custom column padding</BrElement>
          </Col>
          <Col bsJs={{ cols: 6 }}>
            <BrElement bsJs={{ spacing: { padding: '3' } }}>Custom column padding</BrElement>
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
        <Row bsJs={{ gutter: 2 }}>
          <Col bsJs={{ cols: 6 }}>
            <BrElement bsJs={{ spacing: { padding: '3' } }}>Custom column padding</BrElement>
          </Col>
          <Col bsJs={{ cols: 6 }}>
            <BrElement bsJs={{ spacing: { padding: '3' } }}>Custom column padding</BrElement>
          </Col>
          <Col bsJs={{ cols: 6 }}>
            <BrElement bsJs={{ spacing: { padding: '3' } }}>Custom column padding</BrElement>
          </Col>
          <Col bsJs={{ cols: 6 }}>
            <BrElement bsJs={{ spacing: { padding: '3' } }}>Custom column padding</BrElement>
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
        <Row bsJs={{ cols: 2, gutter: 2, breakpoints: { lg: { row: { cols: 5, gutter: 3 } } } }}>
          <Col>
            <BrElement bsJs={{ spacing: { padding: '3' } }}>Row column</BrElement>
          </Col>
          <Col>
            <BrElement bsJs={{ spacing: { padding: '3' } }}>Row column</BrElement>
          </Col>
          <Col>
            <BrElement bsJs={{ spacing: { padding: '3' } }}>Row column</BrElement>
          </Col>
          <Col>
            <BrElement bsJs={{ spacing: { padding: '3' } }}>Row column</BrElement>
          </Col>
          <Col>
            <BrElement bsJs={{ spacing: { padding: '3' } }}>Row column</BrElement>
          </Col>
          <Col>
            <BrElement bsJs={{ spacing: { padding: '3' } }}>Row column</BrElement>
          </Col>
          <Col>
            <BrElement bsJs={{ spacing: { padding: '3' } }}>Row column</BrElement>
          </Col>
          <Col>
            <BrElement bsJs={{ spacing: { padding: '3' } }}>Row column</BrElement>
          </Col>
          <Col>
            <BrElement bsJs={{ spacing: { padding: '3' } }}>Row column</BrElement>
          </Col>
          <Col>
            <BrElement bsJs={{ spacing: { padding: '3' } }}>Row column</BrElement>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export const NoGutters: StoryFn = () => {
  return (
    <div className="bd-example bd-example-row">
      <Row bsJs={{ gutter: 0, text: { align: 'center' } }}>
        <Col bsJs={{ breakpoints: { sm: { col: { cols: 6 } }, md: { col: { cols: 8 } } } }}>
          .col-sm-6 .col-md-8
        </Col>
        <Col bsJs={{ cols: 6, breakpoints: { md: { col: { cols: 4 } } } }}>.col-6 .col-md-4</Col>
      </Row>
    </div>
  )
}
