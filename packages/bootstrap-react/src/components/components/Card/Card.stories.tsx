import type { Meta, StoryFn } from '@storybook/react'

import { as } from '../../../storybook/utils'
import Button from '../Button/Button'
import CardBody from '../Card/CardBody'
import Card from '../Card/Card'
import CardTitle from './CardTitle'
import CardText from './CardText'
import { linkToBootstrapDocs } from '@jb-garage/bootstrap-react/storybook/decorators/linkToBootstrapDocs'
import CardSubTitle from './CardSubTitle'
import CardLink from './CardLink'
import CardImage from './CardImage'
import {
  PlaceholderImgSvgChildren,
  placeholderImgSvgProps
} from '@jb-garage/bootstrap-react/storybook/components/PlaceholderImgSvg'
import ListGroup from '../ListGroup/ListGroup'
import ListGroupItem from '../ListGroup/ListGroupItem'
import CardHeader from './CardHeader'
import CardFooter from './CardFooter'
import Col from '../../layout/columns/Col'
import Row from '../../layout/grid/Row'
import Nav from '../navsAndTabs/Nav/Nav'
import NavItem from '../navsAndTabs/Nav/NavItem'
import NavLink from '../navsAndTabs/Nav/NavLink'
import CardImageOverlay from './CardImageOverlay'
import Image from '../../content/Image/Image'
import CardGroup from './CardGroup'
import { BrElement } from '../../utils/BrElement'

const meta: Meta<typeof Card> = {
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    as
  }
}

export default meta
export const BaseExample: StoryFn<typeof Card> = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <CardImage
        {...placeholderImgSvgProps({ width: '100%', height: '180' })}
        brCardImagePosition="top"
      >
        <PlaceholderImgSvgChildren text="Image cap" />
      </CardImage>
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </CardText>
        <Button as="a" href="#" brButtonColor="primary">
          Go somewhere
        </Button>
      </CardBody>
    </Card>
  )
}

export const Body: StoryFn = () => {
  return (
    <Card>
      <CardBody>This is some text within a card body.</CardBody>
    </Card>
  )
}
Body.decorators = [linkToBootstrapDocs('https://getbootstrap.com/docs/5.3/components/card/#body')]

export const TitlesTextAndLinks: StoryFn = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardSubTitle brMargin={{ bottom: 2 }} className="text-body-secondary">
          Card subtitle
        </CardSubTitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </CardText>
        <CardLink href="#">Card link</CardLink>
        <CardLink href="#">Another link</CardLink>
      </CardBody>
    </Card>
  )
}
TitlesTextAndLinks.decorators = [
  linkToBootstrapDocs('https://getbootstrap.com/docs/5.3/components/card/#titles-text-and-links')
]

export const Images: StoryFn = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <CardImage
        {...placeholderImgSvgProps({ width: '100%', height: '180' })}
        brCardImagePosition="top"
      >
        <PlaceholderImgSvgChildren text="Image cap" />
      </CardImage>
      <CardBody>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </CardText>
      </CardBody>
    </Card>
  )
}
Images.decorators = [
  linkToBootstrapDocs('https://getbootstrap.com/docs/5.3/components/card/#images')
]

export const ListGroups: StoryFn = () => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <ListGroup className="list-group-flush">
          <ListGroupItem>An item</ListGroupItem>
          <ListGroupItem>A second item</ListGroupItem>
          <ListGroupItem>A third item</ListGroupItem>
        </ListGroup>
      </Card>
      <hr />
      <Card style={{ width: '18rem' }}>
        <CardHeader>Featured</CardHeader>
        <ListGroup className="list-group-flush">
          <ListGroupItem>An item</ListGroupItem>
          <ListGroupItem>A second item</ListGroupItem>
          <ListGroupItem>A third item</ListGroupItem>
        </ListGroup>
      </Card>
      <hr />
      <Card style={{ width: '18rem' }}>
        <ListGroup className="list-group-flush">
          <ListGroupItem>An item</ListGroupItem>
          <ListGroupItem>A second item</ListGroupItem>
          <ListGroupItem>A third item</ListGroupItem>
        </ListGroup>
        <CardFooter>Featured</CardFooter>
      </Card>
    </div>
  )
}
ListGroups.decorators = [
  linkToBootstrapDocs('https://getbootstrap.com/docs/5.3/components/card/#list-groups')
]

export const KitchenSink: StoryFn = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <CardImage
        {...placeholderImgSvgProps({ width: '100%', height: '180' })}
        brCardImagePosition="top"
      >
        <PlaceholderImgSvgChildren text="Image cap" />
      </CardImage>
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </CardText>
      </CardBody>
      <ListGroup className="list-group-flush">
        <ListGroupItem>An item</ListGroupItem>
        <ListGroupItem>A second item</ListGroupItem>
        <ListGroupItem>A third item</ListGroupItem>
      </ListGroup>
      <CardBody>
        <CardLink href="#">Card link</CardLink>
        <CardLink href="#">Another link</CardLink>
      </CardBody>
    </Card>
  )
}
KitchenSink.decorators = [
  linkToBootstrapDocs('https://getbootstrap.com/docs/5.3/components/card/#kitchen-sink')
]

export const HeaderAndFooter: StoryFn = () => {
  return (
    <div>
      <Card>
        <CardHeader>Featured</CardHeader>
        <CardBody>
          <CardTitle>Special title treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional content.
          </CardText>
          <Button as="a" href="#" brButtonColor="primary">
            Go somewhere
          </Button>
        </CardBody>
      </Card>
      <hr />
      <Card>
        <CardHeader>Quote</CardHeader>
        <CardBody>
          <BrElement as="blockquote" brMargin={{ bottom: 0 }} className="blockquote">
            <p>A well-known quote, contained in a blockquote element.</p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </BrElement>
        </CardBody>
      </Card>
      <hr />
      <Card className="text-center">
        <CardHeader>Featured</CardHeader>
        <CardBody>
          <CardTitle>Special title treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional content.
          </CardText>
          <Button as="a" href="#" brButtonColor="primary">
            Go somewhere
          </Button>
        </CardBody>
        <CardFooter className="text-body-secondary">2 days ago</CardFooter>
      </Card>
    </div>
  )
}
HeaderAndFooter.decorators = [
  linkToBootstrapDocs('https://getbootstrap.com/docs/5.3/components/card/#header-and-footer')
]

export const SizingUsingGridMarkup: StoryFn = () => {
  return (
    <Row>
      <Col brColsSm={6} brMargin={{ bottom: 3 }} brMarginSm={{ bottom: 0 }}>
        <Card>
          <CardBody>
            <CardTitle>Special title treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional content.
            </CardText>
            <Button as="a" href="#" brButtonColor="primary">
              Go somewhere
            </Button>
          </CardBody>
        </Card>
      </Col>
      <Col brColsSm={6}>
        <Card>
          <CardBody>
            <CardTitle>Special title treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional content.
            </CardText>
            <Button as="a" href="#" brButtonColor="primary">
              Go somewhere
            </Button>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export const SizingUsingUtilities: StoryFn = () => {
  return (
    <div>
      <Card brMargin={{ bottom: 3 }} className="w-75">
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional content.
          </CardText>
          <Button as="a" href="#" brButtonColor="primary">
            Button
          </Button>
        </CardBody>
      </Card>

      <Card className="w-50">
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional content.
          </CardText>
          <Button as="a" href="#" brButtonColor="primary">
            Button
          </Button>
        </CardBody>
      </Card>
    </div>
  )
}

export const SizingUsingCustomCss: StoryFn = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <CardBody>
        <CardTitle>Special title treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button as="a" href="#" brButtonColor="primary">
          Go somewhere
        </Button>
      </CardBody>
    </Card>
  )
}

export const TextAlignment: StoryFn = () => {
  return (
    <div>
      <Card brMargin={{ bottom: 3 }} style={{ width: '18rem' }}>
        <CardBody>
          <CardTitle>Special title treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional content.
          </CardText>
          <Button as="a" href="#" brButtonColor="primary">
            Go somewhere
          </Button>
        </CardBody>
      </Card>
      <Card brMargin={{ bottom: 3 }} className="text-center" style={{ width: '18rem' }}>
        <CardBody>
          <CardTitle>Special title treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional content.
          </CardText>
          <Button as="a" href="#" brButtonColor="primary">
            Go somewhere
          </Button>
        </CardBody>
      </Card>
      <Card className="text-end" style={{ width: '18rem' }}>
        <CardBody>
          <CardTitle>Special title treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional content.
          </CardText>
          <Button as="a" href="#" brButtonColor="primary">
            Go somewhere
          </Button>
        </CardBody>
      </Card>
    </div>
  )
}

export const Navigation: StoryFn = () => {
  return (
    <div>
      <Card className="text-center">
        <CardHeader>
          <Nav className="nav-tabs card-header-tabs">
            <NavItem>
              <NavLink aria-current="true" href="#" brNavLinkActive>
                Active
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink brNavLinkDisabled>Disabled</NavLink>
            </NavItem>
          </Nav>
        </CardHeader>
        <CardBody>
          <CardTitle>Special title treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional content.
          </CardText>
          <Button as="a" href="#" brButtonColor="primary">
            Go somewhere
          </Button>
        </CardBody>
      </Card>
      <hr />
      <Card className="text-center">
        <CardHeader>
          <Nav className="nav-pills card-header-pills">
            <NavItem>
              <NavLink aria-current="true" href="#" brNavLinkActive>
                Active
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink brNavLinkDisabled>Disabled</NavLink>
            </NavItem>
          </Nav>
        </CardHeader>
        <CardBody>
          <CardTitle>Special title treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional content.
          </CardText>
          <Button as="a" href="#" brButtonColor="primary">
            Go somewhere
          </Button>
        </CardBody>
      </Card>
    </div>
  )
}

export const ImagesImageCaps: StoryFn = () => {
  return (
    <div>
      <Card brMargin={{ bottom: 3 }}>
        <CardImage
          {...placeholderImgSvgProps({ width: '100%', height: '180' })}
          brCardImagePosition="top"
        >
          <PlaceholderImgSvgChildren text="Image cap" />
        </CardImage>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.
          </CardText>
          <CardText>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.
          </CardText>
          <CardText>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
        <CardImage
          {...placeholderImgSvgProps({ width: '100%', height: '180' })}
          brCardImagePosition="bottom"
        >
          <PlaceholderImgSvgChildren text="Image cap" />
        </CardImage>
      </Card>
    </div>
  )
}

export const ImagesImageOverlays: StoryFn = () => {
  return (
    <Card className="text-bg-dark">
      <CardImage {...placeholderImgSvgProps({ width: '100%', height: '180' })}>
        <PlaceholderImgSvgChildren text="Card image" />
      </CardImage>
      <CardImageOverlay>
        <CardTitle>Card title</CardTitle>
        <CardText>
          This is a wider card with supporting text below as a natural lead-in to additional
          content. This content is a little bit longer.
        </CardText>
        <CardText>
          <small>Last updated 3 mins ago</small>
        </CardText>
      </CardImageOverlay>
    </Card>
  )
}

export const Horizontal: StoryFn = () => {
  return (
    <Card brMargin={{ bottom: 3 }} style={{ maxWidth: '540px' }}>
      <Row brRowGutter={0}>
        <Col brColsMd={4}>
          <Image
            brImageFluid
            {...placeholderImgSvgProps({
              width: '100%',
              height: '180',
              className: 'rounded-start'
            })}
          >
            <PlaceholderImgSvgChildren text="Image" />
          </Image>
        </Col>
        <Col brColsMd={8}>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </CardText>
            <CardText>
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Col>
      </Row>
    </Card>
  )
}

export const CardStylesBackgroundAndColor: StoryFn = () => {
  return (
    <div>
      <Card brMargin={{ bottom: 3 }} className="text-bg-primary" style={{ maxWidth: '18rem' }}>
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle>Primary card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </CardText>
        </CardBody>
      </Card>
      <BackgroundAndColorExample variant="secondary" />
      <BackgroundAndColorExample variant="success" />
      <BackgroundAndColorExample variant="danger" />
      <BackgroundAndColorExample variant="warning" />
      <BackgroundAndColorExample variant="info" />
      <BackgroundAndColorExample variant="light" />
      <BackgroundAndColorExample variant="dark" />
    </div>
  )
}

function BackgroundAndColorExample(props: { variant: string }) {
  const { variant } = props

  return (
    <Card brMargin={{ bottom: 3 }} className={`text-bg-${variant}`} style={{ maxWidth: '18rem' }}>
      <CardHeader>Header</CardHeader>
      <CardBody>
        <CardTitle>
          {variant[0].toUpperCase()}
          {variant.slice(1)} card title
        </CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </CardText>
      </CardBody>
    </Card>
  )
}

export const CardStylesBorder: StoryFn = () => {
  return (
    <div>
      <Card brMargin={{ bottom: 3 }} brBorder={{ color: 'primary' }} style={{ maxWidth: '18rem' }}>
        <CardHeader>Header</CardHeader>
        <CardBody className="text-primary">
          <CardTitle>Primary card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </CardText>
        </CardBody>
      </Card>
      <BorderExample variant="secondary" cardBodyClass="text-secondary" />
      <BorderExample variant="success" cardBodyClass="text-success" />
      <BorderExample variant="danger" cardBodyClass="text-danger" />
      <BorderExample variant="warning" />
      <BorderExample variant="info" />
      <BorderExample variant="light" />
      <BorderExample variant="dark" />
    </div>
  )
}

function BorderExample(props: { variant: string; cardBodyClass?: string }) {
  const { variant, cardBodyClass } = props

  return (
    <Card brMargin={{ bottom: 3 }} brBorder={{ color: variant }} style={{ maxWidth: '18rem' }}>
      <CardHeader>Header</CardHeader>
      <CardBody className={cardBodyClass}>
        <CardTitle>
          {variant[0].toUpperCase()}
          {variant.slice(1)} card title
        </CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </CardText>
      </CardBody>
    </Card>
  )
}

export const CardStylesMixinsUtilities: StoryFn = () => {
  return (
    <div>
      <Card brMargin={{ bottom: 3 }} brBorder={{ color: 'success' }} style={{ maxWidth: '18rem' }}>
        <CardHeader brBorder={{ color: 'success' }} brUtilsBackground="transparent">
          Header
        </CardHeader>
        <CardBody className="text-success">
          <CardTitle>Success card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </CardText>
        </CardBody>
        <CardFooter brBorder={{ color: 'success' }} brUtilsBackground="transparent">
          Footer
        </CardFooter>
      </Card>
    </div>
  )
}

export const CardLayoutCardGroups: StoryFn = () => {
  return (
    <div>
      <CardGroup>
        <Card>
          <CardImage
            {...placeholderImgSvgProps({ width: '100%', height: '180' })}
            brCardImagePosition="top"
          >
            <PlaceholderImgSvgChildren text="Image cap" />
          </CardImage>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </CardText>
            <CardText>
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImage
            {...placeholderImgSvgProps({ width: '100%', height: '180' })}
            brCardImagePosition="top"
          >
            <PlaceholderImgSvgChildren text="Image cap" />
          </CardImage>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </CardText>
            <CardText>
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImage
            {...placeholderImgSvgProps({ width: '100%', height: '180' })}
            brCardImagePosition="top"
          >
            <PlaceholderImgSvgChildren text="Image cap" />
          </CardImage>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </CardText>
            <CardText>
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
      </CardGroup>
      <hr />
      <CardGroup>
        <Card>
          <CardImage
            {...placeholderImgSvgProps({ width: '100%', height: '180' })}
            brCardImagePosition="top"
          >
            <PlaceholderImgSvgChildren text="Image cap" />
          </CardImage>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </CardText>
          </CardBody>
          <CardFooter>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CardFooter>
        </Card>
        <Card>
          <CardImage
            {...placeholderImgSvgProps({ width: '100%', height: '180' })}
            brCardImagePosition="top"
          >
            <PlaceholderImgSvgChildren text="Image cap" />
          </CardImage>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </CardText>
          </CardBody>
          <CardFooter>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CardFooter>
        </Card>
        <Card>
          <CardImage
            {...placeholderImgSvgProps({ width: '100%', height: '180' })}
            brCardImagePosition="top"
          >
            <PlaceholderImgSvgChildren text="Image cap" />
          </CardImage>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </CardText>
          </CardBody>
          <CardFooter>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CardFooter>
        </Card>
      </CardGroup>
    </div>
  )
}

export const CardLayoutGridCards: StoryFn = () => {
  return (
    <div>
      <Row brRowCols={1} brRowColsMd={2} brRowGutter={4}>
        <Col>
          <Card>
            <CardImage
              {...placeholderImgSvgProps({ width: '100%', height: '180' })}
              brCardImagePosition="top"
            >
              <PlaceholderImgSvgChildren text="Image cap" />
            </CardImage>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardText>
                This is a longer card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <GridCardCol />
        <GridCardCol />
        <GridCardCol />
      </Row>
      <hr />
      <Row brRowCols={1} brRowColsMd={3} brRowGutter={4}>
        <GridCardCol />
        <GridCardCol />
        <GridCardCol />
        <GridCardCol />
      </Row>
      <hr />
      <Row brRowCols={1} brRowColsMd={3} brRowGutter={4}>
        <GridCardCol cardClassName="h-100" />
        <Col>
          <Card className="h-100">
            <CardImage
              {...placeholderImgSvgProps({ width: '100%', height: '180' })}
              brCardImagePosition="top"
            >
              <PlaceholderImgSvgChildren text="Image cap" />
            </CardImage>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardText>This is a short card.</CardText>
            </CardBody>
          </Card>
        </Col>
        <GridCardCol cardClassName="h-100" />
        <GridCardCol cardClassName="h-100" />
      </Row>
      <hr />
      <Row brRowCols={1} brRowColsMd={3} brRowGutter={4}>
        <Col>
          <Card className="h-100">
            <CardImage
              {...placeholderImgSvgProps({ width: '100%', height: '180' })}
              brCardImagePosition="top"
            >
              <PlaceholderImgSvgChildren text="Image cap" />
            </CardImage>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.
              </CardText>
            </CardBody>
            <CardFooter>
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </CardFooter>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <CardImage
              {...placeholderImgSvgProps({ width: '100%', height: '180' })}
              brCardImagePosition="top"
            >
              <PlaceholderImgSvgChildren text="Image cap" />
            </CardImage>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardText>
                This card has supporting text below as a natural lead-in to additional content.
              </CardText>
            </CardBody>
            <CardFooter>
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </CardFooter>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <CardImage
              {...placeholderImgSvgProps({ width: '100%', height: '180' })}
              brCardImagePosition="top"
            >
              <PlaceholderImgSvgChildren text="Image cap" />
            </CardImage>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional
                content. This card has even longer content than the first to show that equal height
                action.
              </CardText>
            </CardBody>
            <CardFooter>
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

function GridCardCol(props: { cardClassName?: string }) {
  const { cardClassName } = props

  return (
    <Col>
      <Card className={cardClassName}>
        <CardImage
          {...placeholderImgSvgProps({ width: '100%', height: '180' })}
          brCardImagePosition="top"
        >
          <PlaceholderImgSvgChildren text="Image cap" />
        </CardImage>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>
            This is a longer card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.
          </CardText>
        </CardBody>
      </Card>
    </Col>
  )
}
