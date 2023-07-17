import { Meta, StoryFn } from '@storybook/react'
import Container from '../containers/Container'
import Row from './Row'
import Col from '../columns/Col'

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
          <Col brCols={6}>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col brCols={5}>2 of 3 (wider)</Col>
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
          <Col brColsLg={2}>1 of 3</Col>
          <Col brColsMd="auto">Variable width content</Col>
          <Col brColsLg="2">3 of 3</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col brColsMd="auto">Variable width content</Col>
          <Col brColsLg={2}>3 of 3</Col>
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
          <Col brCols={8}>col-8</Col>
          <Col brCols={4}>col-4</Col>
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
          <Col brColsSm={8}>col-sm-8</Col>
          <Col brColsSm={4}>col-sm-4</Col>
        </Row>
        <Row>
          <Col brColsSm>col-sm</Col>
          <Col brColsSm>col-sm</Col>
          <Col brColsSm>col-sm</Col>
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
          <Col brColsMd={8}>.col-md-8</Col>
          <Col brCols={6} brColsMd={4}>
            .col-6 .col-md-4
          </Col>
        </Row>

        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
        <Row>
          <Col brCols={6} brColsMd={4}>
            .col-6 .col-md-4
          </Col>
          <Col brCols={6} brColsMd={4}>
            .col-6 .col-md-4
          </Col>
          <Col brCols={6} brColsMd={4}>
            .col-6 .col-md-4
          </Col>
        </Row>

        {/* Columns are always 50% wide, on mobile and desktop */}
        <Row>
          <Col brCols={6}>.col-6</Col>
          <Col brCols={6}>.col-6</Col>
        </Row>
      </Container>
    </div>
  )
}

export const ResponsiveClassesRowColumns: StoryFn = () => {
  return (
    <div className="bd-example-row">
      <Container className="text-center">
        <Row brRowCols={2}>
          <Col>Column</Col>
          <Col>Column</Col>
          <Col>Column</Col>
          <Col>Column</Col>
        </Row>
      </Container>
      <hr />
      <Container className="text-center">
        <Row brRowCols={3}>
          <Col>Column</Col>
          <Col>Column</Col>
          <Col>Column</Col>
          <Col>Column</Col>
        </Row>
      </Container>
      <hr />
      <Container className="text-center">
        <Row brRowCols="auto">
          <Col>Column</Col>
          <Col>Column</Col>
          <Col>Column</Col>
          <Col>Column</Col>
        </Row>
      </Container>
      <hr />
      <Container className="text-center">
        <Row brRowCols={4}>
          <Col>Column</Col>
          <Col>Column</Col>
          <Col>Column</Col>
          <Col>Column</Col>
        </Row>
      </Container>
      <hr />
      <Container className="text-center">
        <Row brRowCols={4}>
          <Col>Column</Col>
          <Col>Column</Col>
          <Col brCols={6}>Column</Col>
          <Col>Column</Col>
        </Row>
      </Container>
      <hr />
      <Container className="text-center">
        <Row brRowCols={1} brRowColsSm={2} brRowColsMd={4}>
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
          <Col brColsSm={3}>Level 1: .col-sm-3</Col>
          <Col brColsSm={9}>
            <Row>
              <Col brCols={8} brColsSm={6}>
                Level 2: .col-8 .col-sm-6
              </Col>
              <Col brCols={4} brColsSm={6}>
                Level 2: .col-4 .col-sm-6
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
