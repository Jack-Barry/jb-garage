import { Meta, StoryFn } from '@storybook/react'
import { useCarousel } from './useCarousel'
import Carousel from './Carousel'
import CarouselInner from './CarouselInner'
import CarouselItem from './CarouselItem'
import CarouselControl from './CarouselControl'
import CarouselControlIcon from './CarouselControlIcon'
import { BrElement } from '../../utils/BrElement'
import Image from '../../content/Image/Image'
import {
  PlaceholderImgSvgChildren,
  placeholderImgSvgProps
} from '@jb-garage/bootstrap-react/storybook/components/PlaceholderImgSvg'
import CarouselIndicators from './CarouselIndicators'
import CarouselIndicator from './CarouselIndicator'
import CarouselCaption from './CarouselCaption'

const meta: Meta = {
  title: 'Carousel',
  tags: ['autodocs']
}

export default meta

export const BasicExamples: StoryFn = () => {
  const carousel = useCarousel()

  return (
    <Carousel id="carouselExample" brCarousel={carousel}>
      <CarouselInner>
        <CarouselItem brActive={carousel.currentIndex === -1 || carousel.currentIndex === 0}>
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg d-block w-100'
            })}
          >
            <PlaceholderImgSvgChildren text="First slide" />
          </Image>
        </CarouselItem>
        <CarouselItem brActive={carousel.currentIndex === 1}>
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg d-block w-100'
            })}
          >
            <PlaceholderImgSvgChildren text="Second slide" />
          </Image>
        </CarouselItem>
        <CarouselItem brActive={carousel.currentIndex === 2}>
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg d-block w-100'
            })}
          >
            <PlaceholderImgSvgChildren text="Third slide" />
          </Image>
        </CarouselItem>
      </CarouselInner>
      <CarouselControl brDirection="prev" onClick={carousel.prev}>
        <CarouselControlIcon brDirection="prev" aria-hidden={true} />
        <BrElement as="span" brVisuallyHidden>
          Previous
        </BrElement>
      </CarouselControl>
      <CarouselControl brDirection="next" onClick={carousel.next}>
        <CarouselControlIcon brDirection="next" aria-hidden={true} />
        <BrElement as="span" brVisuallyHidden>
          Next
        </BrElement>
      </CarouselControl>
    </Carousel>
  )
}

export const Indicators: StoryFn = () => {
  const carousel = useCarousel()

  return (
    <Carousel id="carouselExampleIndicators" brCarousel={carousel}>
      <CarouselIndicators>
        <CarouselIndicator
          brActive={carousel.currentIndex === -1 || carousel.currentIndex === 0}
          onClick={() => {
            carousel.to(0)
          }}
          aria-label="Slide 1"
          data-bs-target="#carouselExampleIndicators"
        />
        <CarouselIndicator
          brActive={carousel.currentIndex === 1}
          onClick={() => {
            carousel.to(1)
          }}
          aria-label="Slide 2"
          data-bs-target="#carouselExampleIndicators"
        />
        <CarouselIndicator
          brActive={carousel.currentIndex === 2}
          onClick={() => {
            carousel.to(2)
          }}
          aria-label="Slide 3"
          data-bs-target="#carouselExampleIndicators"
        />
      </CarouselIndicators>
      <CarouselInner>
        <CarouselItem brActive={carousel.currentIndex === -1 || carousel.currentIndex === 0}>
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg d-block w-100'
            })}
          >
            <PlaceholderImgSvgChildren text="First slide" />
          </Image>
        </CarouselItem>
        <CarouselItem brActive={carousel.currentIndex === 1}>
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg d-block w-100'
            })}
          >
            <PlaceholderImgSvgChildren text="Second slide" />
          </Image>
        </CarouselItem>
        <CarouselItem brActive={carousel.currentIndex === 2}>
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg d-block w-100'
            })}
          >
            <PlaceholderImgSvgChildren text="Third slide" />
          </Image>
        </CarouselItem>
      </CarouselInner>
      <CarouselControl brDirection="prev" onClick={carousel.prev}>
        <CarouselControlIcon brDirection="prev" aria-hidden={true} />
        <BrElement as="span" brVisuallyHidden>
          Previous
        </BrElement>
      </CarouselControl>
      <CarouselControl brDirection="next" onClick={carousel.next}>
        <CarouselControlIcon brDirection="next" aria-hidden={true} />
        <BrElement as="span" brVisuallyHidden>
          Next
        </BrElement>
      </CarouselControl>
    </Carousel>
  )
}

export const Captions: StoryFn = () => {
  const carousel = useCarousel()

  return (
    <Carousel id="carouselExampleIndicators" brCarousel={carousel}>
      <CarouselIndicators>
        <CarouselIndicator
          brActive={carousel.currentIndex === -1 || carousel.currentIndex === 0}
          onClick={() => {
            carousel.to(0)
          }}
          aria-label="Slide 1"
          data-bs-target="#carouselExampleIndicators"
        />
        <CarouselIndicator
          brActive={carousel.currentIndex === 1}
          onClick={() => {
            carousel.to(1)
          }}
          aria-label="Slide 2"
          data-bs-target="#carouselExampleIndicators"
        />
        <CarouselIndicator
          brActive={carousel.currentIndex === 2}
          onClick={() => {
            carousel.to(2)
          }}
          aria-label="Slide 3"
          data-bs-target="#carouselExampleIndicators"
        />
      </CarouselIndicators>
      <CarouselInner>
        <CarouselItem brActive={carousel.currentIndex === -1 || carousel.currentIndex === 0}>
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg d-block w-100'
            })}
          >
            <PlaceholderImgSvgChildren text="First slide" />
          </Image>
          <CarouselCaption className="d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </CarouselCaption>
        </CarouselItem>
        <CarouselItem brActive={carousel.currentIndex === 1}>
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg d-block w-100'
            })}
          >
            <PlaceholderImgSvgChildren text="Second slide" />
          </Image>
          <CarouselCaption className="d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </CarouselCaption>
        </CarouselItem>
        <CarouselItem brActive={carousel.currentIndex === 2}>
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg d-block w-100'
            })}
          >
            <PlaceholderImgSvgChildren text="Third slide" />
          </Image>
          <CarouselCaption className="d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </CarouselCaption>
        </CarouselItem>
      </CarouselInner>
      <CarouselControl brDirection="prev" onClick={carousel.prev}>
        <CarouselControlIcon brDirection="prev" aria-hidden={true} />
        <BrElement as="span" brVisuallyHidden>
          Previous
        </BrElement>
      </CarouselControl>
      <CarouselControl brDirection="next" onClick={carousel.next}>
        <CarouselControlIcon brDirection="next" aria-hidden={true} />
        <BrElement as="span" brVisuallyHidden>
          Next
        </BrElement>
      </CarouselControl>
    </Carousel>
  )
}

export const CrossFade: StoryFn = () => {
  const carousel = useCarousel()

  return (
    <Carousel id="carouselExampleFade" brCarousel={carousel} brFade>
      <CarouselInner>
        <CarouselItem brActive={carousel.currentIndex === -1 || carousel.currentIndex === 0}>
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg d-block w-100'
            })}
          >
            <PlaceholderImgSvgChildren text="First slide" />
          </Image>
        </CarouselItem>
        <CarouselItem brActive={carousel.currentIndex === 1}>
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg d-block w-100'
            })}
          >
            <PlaceholderImgSvgChildren text="Second slide" />
          </Image>
        </CarouselItem>
        <CarouselItem brActive={carousel.currentIndex === 2}>
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg d-block w-100'
            })}
          >
            <PlaceholderImgSvgChildren text="Third slide" />
          </Image>
        </CarouselItem>
      </CarouselInner>
      <CarouselControl brDirection="prev" onClick={carousel.prev}>
        <CarouselControlIcon brDirection="prev" aria-hidden={true} />
        <BrElement as="span" brVisuallyHidden>
          Previous
        </BrElement>
      </CarouselControl>
      <CarouselControl brDirection="next" onClick={carousel.next}>
        <CarouselControlIcon brDirection="next" aria-hidden={true} />
        <BrElement as="span" brVisuallyHidden>
          Next
        </BrElement>
      </CarouselControl>
    </Carousel>
  )
}

export const AutoPlayingCarousels: StoryFn = () => {
  const carousel1 = useCarousel({ bootstrapCarousel: { ride: 'carousel' } })
  const carousel2 = useCarousel({ bootstrapCarousel: { ride: true } })

  return (
    <div>
      <Carousel id="carouselExampleAutoplaying" brCarousel={carousel1}>
        <CarouselInner>
          <CarouselItem brActive={carousel1.currentIndex === -1 || carousel1.currentIndex === 0}>
            <Image
              {...placeholderImgSvgProps({
                width: 800,
                height: 400,
                className: 'bd-placeholder-img-lg d-block w-100'
              })}
            >
              <PlaceholderImgSvgChildren text="First slide" />
            </Image>
          </CarouselItem>
          <CarouselItem brActive={carousel1.currentIndex === 1}>
            <Image
              {...placeholderImgSvgProps({
                width: 800,
                height: 400,
                className: 'bd-placeholder-img-lg d-block w-100'
              })}
            >
              <PlaceholderImgSvgChildren text="Second slide" />
            </Image>
          </CarouselItem>
          <CarouselItem brActive={carousel1.currentIndex === 2}>
            <Image
              {...placeholderImgSvgProps({
                width: 800,
                height: 400,
                className: 'bd-placeholder-img-lg d-block w-100'
              })}
            >
              <PlaceholderImgSvgChildren text="Third slide" />
            </Image>
          </CarouselItem>
        </CarouselInner>
        <CarouselControl brDirection="prev" onClick={carousel1.prev}>
          <CarouselControlIcon brDirection="prev" aria-hidden={true} />
          <BrElement as="span" brVisuallyHidden>
            Previous
          </BrElement>
        </CarouselControl>
        <CarouselControl brDirection="next" onClick={carousel1.next}>
          <CarouselControlIcon brDirection="next" aria-hidden={true} />
          <BrElement as="span" brVisuallyHidden>
            Next
          </BrElement>
        </CarouselControl>
      </Carousel>
      <br />
      <Carousel id="carouselExampleRide" brCarousel={carousel2}>
        <CarouselInner>
          <CarouselItem brActive={carousel2.currentIndex === -1 || carousel2.currentIndex === 0}>
            <Image
              {...placeholderImgSvgProps({
                width: 800,
                height: 400,
                className: 'bd-placeholder-img-lg d-block w-100'
              })}
            >
              <PlaceholderImgSvgChildren text="First slide" />
            </Image>
          </CarouselItem>
          <CarouselItem brActive={carousel2.currentIndex === 1}>
            <Image
              {...placeholderImgSvgProps({
                width: 800,
                height: 400,
                className: 'bd-placeholder-img-lg d-block w-100'
              })}
            >
              <PlaceholderImgSvgChildren text="Second slide" />
            </Image>
          </CarouselItem>
          <CarouselItem brActive={carousel2.currentIndex === 2}>
            <Image
              {...placeholderImgSvgProps({
                width: 800,
                height: 400,
                className: 'bd-placeholder-img-lg d-block w-100'
              })}
            >
              <PlaceholderImgSvgChildren text="Third slide" />
            </Image>
          </CarouselItem>
        </CarouselInner>
        <CarouselControl brDirection="prev" onClick={carousel2.prev}>
          <CarouselControlIcon brDirection="prev" aria-hidden={true} />
          <BrElement as="span" brVisuallyHidden>
            Previous
          </BrElement>
        </CarouselControl>
        <CarouselControl brDirection="next" onClick={carousel2.next}>
          <CarouselControlIcon brDirection="next" aria-hidden={true} />
          <BrElement as="span" brVisuallyHidden>
            Next
          </BrElement>
        </CarouselControl>
      </Carousel>
    </div>
  )
}

export const IndividualCarouselItemInterval: StoryFn = () => {
  const carousel = useCarousel({ bootstrapCarousel: { ride: 'carousel' } })

  return (
    <Carousel id="carouselExampleInterval" brCarousel={carousel}>
      <CarouselInner>
        <CarouselItem
          brActive={carousel.currentIndex === -1 || carousel.currentIndex === 0}
          brInterval={10000}
        >
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg d-block w-100'
            })}
          >
            <PlaceholderImgSvgChildren text="First slide" />
          </Image>
        </CarouselItem>
        <CarouselItem brActive={carousel.currentIndex === 1} brInterval={2000}>
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg d-block w-100'
            })}
          >
            <PlaceholderImgSvgChildren text="Second slide" />
          </Image>
        </CarouselItem>
        <CarouselItem brActive={carousel.currentIndex === 2}>
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg d-block w-100'
            })}
          >
            <PlaceholderImgSvgChildren text="Third slide" />
          </Image>
        </CarouselItem>
      </CarouselInner>
      <CarouselControl brDirection="prev" onClick={carousel.prev}>
        <CarouselControlIcon brDirection="prev" aria-hidden={true} />
        <BrElement as="span" brVisuallyHidden>
          Previous
        </BrElement>
      </CarouselControl>
      <CarouselControl brDirection="next" onClick={carousel.next}>
        <CarouselControlIcon brDirection="next" aria-hidden={true} />
        <BrElement as="span" brVisuallyHidden>
          Next
        </BrElement>
      </CarouselControl>
    </Carousel>
  )
}

export const AutoplayingCarouselsWithoutControls: StoryFn = () => {
  const carousel = useCarousel({ bootstrapCarousel: { ride: 'carousel' } })

  return (
    <Carousel id="carouselExampleSlidesOnly" brCarousel={carousel}>
      <CarouselInner>
        <CarouselItem brActive={carousel.currentIndex === -1 || carousel.currentIndex === 0}>
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg d-block w-100'
            })}
          >
            <PlaceholderImgSvgChildren text="First slide" />
          </Image>
        </CarouselItem>
        <CarouselItem brActive={carousel.currentIndex === 1}>
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg d-block w-100'
            })}
          >
            <PlaceholderImgSvgChildren text="Second slide" />
          </Image>
        </CarouselItem>
        <CarouselItem brActive={carousel.currentIndex === 2}>
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg d-block w-100'
            })}
          >
            <PlaceholderImgSvgChildren text="Third slide" />
          </Image>
        </CarouselItem>
      </CarouselInner>
    </Carousel>
  )
}

export const DisableTouchSwiping: StoryFn = () => {
  const carousel = useCarousel({ bootstrapCarousel: { touch: false } })

  return (
    <Carousel id="carouselExampleControlsNoTouching" brCarousel={carousel}>
      <CarouselInner>
        <CarouselItem brActive={carousel.currentIndex === -1 || carousel.currentIndex === 0}>
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg d-block w-100'
            })}
          >
            <PlaceholderImgSvgChildren text="First slide" />
          </Image>
        </CarouselItem>
        <CarouselItem brActive={carousel.currentIndex === 1}>
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg d-block w-100'
            })}
          >
            <PlaceholderImgSvgChildren text="Second slide" />
          </Image>
        </CarouselItem>
        <CarouselItem brActive={carousel.currentIndex === 2}>
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg d-block w-100'
            })}
          >
            <PlaceholderImgSvgChildren text="Third slide" />
          </Image>
        </CarouselItem>
      </CarouselInner>
      <CarouselControl brDirection="prev" onClick={carousel.prev}>
        <CarouselControlIcon brDirection="prev" aria-hidden={true} />
        <BrElement as="span" brVisuallyHidden>
          Previous
        </BrElement>
      </CarouselControl>
      <CarouselControl brDirection="next" onClick={carousel.next}>
        <CarouselControlIcon brDirection="next" aria-hidden={true} />
        <BrElement as="span" brVisuallyHidden>
          Next
        </BrElement>
      </CarouselControl>
    </Carousel>
  )
}
