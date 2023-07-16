import type { Meta, StoryFn } from '@storybook/react'

import Col from './Col'
import Container from '../containers/Container'
import Row from '../grid/Row'
import {
  PlaceholderImgSvgChildren,
  placeholderImgSvgProps
} from '@jb-garage/bootstrap-react/storybook/components/PlaceholderImgSvg'

const meta: Meta = {
  title: 'Columns',
  tags: ['autodocs']
}
export default meta

export const AlignmentVerticalAlignment: StoryFn = () => {
  return (
    <div className="bd-example-row bd-example-row-flex-cols">
      <Container className="text-center">
        <Row className="align-items-start">
          <Col>One of three columns</Col>
          <Col>One of three columns</Col>
          <Col>One of three columns</Col>
        </Row>
      </Container>
      <hr />
      <Container className="text-center">
        <Row className="align-items-center">
          <Col>One of three columns</Col>
          <Col>One of three columns</Col>
          <Col>One of three columns</Col>
        </Row>
      </Container>
      <hr />
      <Container className="text-center">
        <Row className="align-items-end">
          <Col>One of three columns</Col>
          <Col>One of three columns</Col>
          <Col>One of three columns</Col>
        </Row>
      </Container>
      <hr />
      <Container className="text-center">
        <Row>
          <Col className="align-self-start">One of three columns</Col>
          <Col className="align-self-center">One of three columns</Col>
          <Col className="align-self-end">One of three columns</Col>
        </Row>
      </Container>
    </div>
  )
}

export const AlignmentHorizontalAlignment: StoryFn = () => {
  return (
    <div className="bd-example-row">
      <Container className="text-center">
        <Row className="justify-content-start">
          <Col colSize={4}>One of two columns</Col>
          <Col colSize={4}>One of two columns</Col>
        </Row>
        <Row className="justify-content-center">
          <Col colSize={4}>One of two columns</Col>
          <Col colSize={4}>One of two columns</Col>
        </Row>
        <Row className="justify-content-end">
          <Col colSize={4}>One of two columns</Col>
          <Col colSize={4}>One of two columns</Col>
        </Row>
        <Row className="justify-content-around">
          <Col colSize={4}>One of two columns</Col>
          <Col colSize={4}>One of two columns</Col>
        </Row>
        <Row className="justify-content-between">
          <Col colSize={4}>One of two columns</Col>
          <Col colSize={4}>One of two columns</Col>
        </Row>
        <Row className="justify-content-evenly">
          <Col colSize={4}>One of two columns</Col>
          <Col colSize={4}>One of two columns</Col>
        </Row>
      </Container>
    </div>
  )
}

export const ColumnWrapping: StoryFn = () => {
  return (
    <div className="bd-example-row">
      <Container>
        <Row>
          <Col colSize={9}>.col-9</Col>
          <Col colSize={4}>
            .col-4
            <br />
            Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one
            contiguous unit.
          </Col>
          <Col colSize={6}>
            .col-6
            <br />
            Subsequent columns continue along the new line.
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export const ColumnBreaks: StoryFn = () => {
  return (
    <div className="bd-example-row">
      <Container className="text-center">
        <Row>
          <Col colSize={6} colSm={3}>
            .col-6 .col-sm-3
          </Col>
          <Col colSize={6} colSm={3}>
            .col-6 .col-sm-3
          </Col>
          {/* Force next columns to break to new line */}
          <div className="w-100" />
          <Col colSize={6} colSm={3}>
            .col-6 .col-sm-3
          </Col>
          <Col colSize={6} colSm={3}>
            .col-6 .col-sm-3
          </Col>
        </Row>
      </Container>
      <hr />
      <Container className="text-center">
        <Row>
          <Col colSize={6} colSm={4}>
            .col-6 .col-sm-4
          </Col>
          <Col colSize={6} colSm={4}>
            .col-6 .col-sm-4
          </Col>
          {/* Force next columns to break to new line at md breakpoint and up */}
          <div className="w-100 d-none d-md-block" />
          <Col colSize={6} colSm={4}>
            .col-6 .col-sm-4
          </Col>
          <Col colSize={6} colSm={4}>
            .col-6 .col-sm-4
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export const ReorderingOrderClasses: StoryFn = () => {
  return (
    <div className="bd-example-row">
      <Container className="text-center">
        <Row>
          <Col>First in DOM, no order applied</Col>
          <Col colOrder={5}>Second in DOM, with a larger order</Col>
          <Col colOrder={1}>Third in DOM, with an order of 1</Col>
        </Row>
      </Container>
      <hr />
      <Container className="text-center">
        <Row>
          <Col colOrder="last">First in DOM, ordered last</Col>
          <Col>Second in DOM, unordered</Col>
          <Col colOrder="first">Third in DOM, ordered first</Col>
        </Row>
      </Container>
    </div>
  )
}

export const OffsettingColumnsOffsetClasses: StoryFn = () => {
  return (
    <div className="bd-example-row">
      <Container className="text-center">
        <Row>
          <Col colMd={4}>.col-md-4</Col>
          <Col colMd={4} colOffsetMd={4}>
            .col-md-4 .offset-md-4
          </Col>
        </Row>
        <Row>
          <Col colMd={3} colOffsetMd={3}>
            .col-md-3 .offset-md-3
          </Col>
          <Col colMd={3} colOffsetMd={3}>
            .col-md-3 .offset-md-3
          </Col>
        </Row>
        <Row>
          <Col colMd={6} colOffsetMd={3}>
            .col-md-6 .offset-md-3
          </Col>
        </Row>
      </Container>
      <hr />
      <Container className="text-center">
        <Row>
          <Col colSm={5} colMd={6}>
            .col-sm-5 .col-md-6
          </Col>
          <Col colSm={5} colOffsetSm={2} colMd={6} colOffsetMd={0}>
            .col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0
          </Col>
        </Row>
        <Row>
          <Col colSm={6} colMd={5} colLg={6}>
            .col-sm-6 .col-md-5 .col-lg-6
          </Col>
          <Col colSm={6} colMd={5} colOffsetMd={2} colLg={6} colOffsetLg={0}>
            .col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export const OffsettingColumnsMarginUtilities: StoryFn = () => {
  return (
    <div className="bd-example-row">
      <Container className="text-center">
        <Row>
          <Col colMd={4}>.col-md-4</Col>
          <Col colMd={4} className="ms-auto">
            .col-md-4 .ms-auto
          </Col>
        </Row>
        <Row>
          <Col colMd={3} className="ms-md-auto">
            .col-md-3 .ms-md-auto
          </Col>
          <Col colMd={3} className="ms-md-auto">
            .col-md-3 .ms-md-auto
          </Col>
        </Row>
        <Row>
          <Col colSize="auto" className="me-auto">
            .col-auto .me-auto
          </Col>
          <Col colSize="auto">.col-auto</Col>
        </Row>
      </Container>
    </div>
  )
}

export const StandaloneColumnClasses: StoryFn = () => {
  return (
    <div>
      <div className="bd-example-row">
        <Col colSize={3} className="p-3 mb-2">
          .col-3: width of 25%
        </Col>
        <Col colSm={9} className="p-3">
          .col-sm-9: width of 75% above sm breakpoint
        </Col>
      </div>
      <hr />
      <div className="clearfix">
        <Col
          as="svg"
          colMd={6}
          {...placeholderImgSvgProps({ className: 'float-md-end mb-3 ms-md-3' })}
        >
          <PlaceholderImgSvgChildren text="Responsive floated image" />
        </Col>
        <p>
          A paragraph of placeholder text. We're using it here to show the use of the clearfix
          class. We're adding quite a few meaningless phrases here to demonstrate how the columns
          interact here with the floated image.
        </p>
        <p>
          As you can see the paragraphs gracefully wrap around the floated image. Now imagine how
          this would look with some actual content in here, rather than just this boring placeholder
          text that goes on and on, but actually conveys no tangible information at. It simply takes
          up space and should not really be read.
        </p>
        <p>
          And yet, here you are, still persevering in reading this placeholder text, hoping for some
          more insights, or some hidden easter egg of content. A joke, perhaps. Unfortunately,
          there's none of that here.
        </p>
      </div>
    </div>
  )
}
