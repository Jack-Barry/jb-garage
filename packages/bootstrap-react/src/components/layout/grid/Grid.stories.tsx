import { Meta, StoryFn } from '@storybook/react'
import Container from '../containers/Container'
import Row from './Row'
import Col from './Col'

const meta: Meta = {
  title: 'Grid',
  tags: ['autodocs'],
  argTypes: {}
}
export default meta

export const BaseExample: StoryFn = () => {
  return (
    <div className="bd-example-row">
      <Container className="text-center">
        <Row>
          <Col>Column</Col>
          <Col>Column</Col>
          <Col>Column</Col>
        </Row>
      </Container>
    </div>
  )
}

export const AutoLayoutColumnsEqualWidth: StoryFn = () => {
  return (
    <div className="bd-example-row">
      <Container className="text-center">
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </div>
  )
}

export const AutoLayoutColumnsSettingOneColumnWidth: StoryFn = () => {
  return (
    <div className="bd-example-row">
      <Container className="text-center">
        <Row>
          <Col>1 of 3</Col>
          <Col size={6}>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col size={5}>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </div>
  )
}

export const AutoLayoutColumnsVariableWidthContent: StoryFn = () => {
  return (
    <div className="bd-example-row">
      <Container className="text-center">
        <Row className="justify-content-md-center">
          <Col lg={2}>1 of 3</Col>
          <Col md="auto">Variable width content</Col>
          <Col lg="2">3 of 3</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col md="auto">Variable width content</Col>
          <Col lg={2}>3 of 3</Col>
        </Row>
      </Container>
    </div>
  )
}

export const ReponsiveClassesAllBreakpoints: StoryFn = () => {
  return (
    <div className="bd-example-row">
      <Container className="text-center">
        <Row>
          <Col>col</Col>
          <Col>col</Col>
          <Col>col</Col>
          <Col>col</Col>
        </Row>
        <Row>
          <Col size={8}>col-8</Col>
          <Col size={4}>col-4</Col>
        </Row>
      </Container>
    </div>
  )
}

export const ResponsiveClassesStackedToHorizontal: StoryFn = () => {
  return (
    <div className="bd-example-row">
      <Container className="text-center">
        <Row>
          <Col sm={8}>col-sm-8</Col>
          <Col sm={4}>col-sm-4</Col>
        </Row>
        <Row>
          <Col sm>col-sm</Col>
          <Col sm>col-sm</Col>
          <Col sm>col-sm</Col>
        </Row>
      </Container>
    </div>
  )
}

export const ResponsiveClassesMixAndMatch: StoryFn = () => {
  return (
    <div className="bd-example-row">
      <Container className="text-center">
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row>
          <Col md={8}>.col-md-8</Col>
          <Col size={6} md={4}>
            .col-6 .col-md-4
          </Col>
        </Row>

        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
        <Row>
          <Col size={6} md={4}>
            .col-6 .col-md-4
          </Col>
          <Col size={6} md={4}>
            .col-6 .col-md-4
          </Col>
          <Col size={6} md={4}>
            .col-6 .col-md-4
          </Col>
        </Row>

        {/* Columns are always 50% wide, on mobile and desktop */}
        <Row>
          <Col size={6}>.col-6</Col>
          <Col size={6}>.col-6</Col>
        </Row>
      </Container>
    </div>
  )
}

export const ResponsiveClassesRowColumns: StoryFn = () => {
  return (
    <div className="bd-example-row">
      <Container className="text-center">
        <Row cols={2}>
          <Col>Column</Col>
          <Col>Column</Col>
          <Col>Column</Col>
          <Col>Column</Col>
        </Row>
      </Container>
      <hr />
      <Container className="text-center">
        <Row cols={3}>
          <Col>Column</Col>
          <Col>Column</Col>
          <Col>Column</Col>
          <Col>Column</Col>
        </Row>
      </Container>
      <hr />
      <Container className="text-center">
        <Row cols="auto">
          <Col>Column</Col>
          <Col>Column</Col>
          <Col>Column</Col>
          <Col>Column</Col>
        </Row>
      </Container>
      <hr />
      <Container className="text-center">
        <Row cols={4}>
          <Col>Column</Col>
          <Col>Column</Col>
          <Col>Column</Col>
          <Col>Column</Col>
        </Row>
      </Container>
      <hr />
      <Container className="text-center">
        <Row cols={4}>
          <Col>Column</Col>
          <Col>Column</Col>
          <Col size={6}>Column</Col>
          <Col>Column</Col>
        </Row>
      </Container>
      <hr />
      <Container className="text-center">
        <Row cols={1} sm={2} md={4}>
          <Col>Column</Col>
          <Col>Column</Col>
          <Col>Column</Col>
          <Col>Column</Col>
        </Row>
      </Container>
    </div>
  )
}

export const Nesting: StoryFn = () => {
  return (
    <div className="bd-example-row">
      <Container className="text-center">
        <Row>
          <Col sm={3}>Level 1: .col-sm-3</Col>
          <Col sm={9}>
            <Row>
              <Col size={8} sm={6}>
                Level 2: .col-8 .col-sm-6
              </Col>
              <Col size={4} sm={6}>
                Level 2: .col-4 .col-sm-6
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
