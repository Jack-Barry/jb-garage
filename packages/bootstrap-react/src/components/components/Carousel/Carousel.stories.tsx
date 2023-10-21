import { Meta, StoryFn } from '@storybook/react'

import {
  PlaceholderImgSvgChildren,
  placeholderImgSvgProps
} from '../../../storybook/components/PlaceholderImgSvg'
import Image from '../../content/Image/Image'
import { BrElement } from '../../utils/BrElement'

import Carousel from './Carousel'
import CarouselCaption from './CarouselCaption'
import CarouselControl from './CarouselControl'
import CarouselControlIcon from './CarouselControlIcon'
import CarouselIndicator from './CarouselIndicator'
import CarouselIndicators from './CarouselIndicators'
import CarouselInner from './CarouselInner'
import CarouselItem from './CarouselItem'
import { useCarousel } from './useCarousel'

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
        <CarouselItem
          bsJs={{
            bsJsAll: {
              carouselItem: { active: carousel.currentIndex === -1 || carousel.currentIndex === 0 }
            }
          }}
        >
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg w-100',
              bsJs: { bsJsAll: { display: 'block' } }
            })}
          >
            <PlaceholderImgSvgChildren text="First slide" />
          </Image>
        </CarouselItem>
        <CarouselItem bsJs={{ bsJsAll: { carouselItem: { active: carousel.currentIndex === 1 } } }}>
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg w-100',
              bsJs: { bsJsAll: { display: 'block' } }
            })}
          >
            <PlaceholderImgSvgChildren text="Second slide" />
          </Image>
        </CarouselItem>
        <CarouselItem bsJs={{ bsJsAll: { carouselItem: { active: carousel.currentIndex === 2 } } }}>
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg w-100',
              bsJs: { bsJsAll: { display: 'block' } }
            })}
          >
            <PlaceholderImgSvgChildren text="Third slide" />
          </Image>
        </CarouselItem>
      </CarouselInner>
      <CarouselControl
        bsJs={{ bsJsAll: { carouselControl: { direction: 'prev' } } }}
        onClick={carousel.prev}
      >
        <CarouselControlIcon
          bsJs={{ bsJsAll: { carouselControlIcon: { direction: 'prev' } } }}
          aria-hidden={true}
        />
        <BrElement as="span" bsJs={{ bsJsAll: { visuallyHidden: true } }}>
          Previous
        </BrElement>
      </CarouselControl>
      <CarouselControl
        bsJs={{ bsJsAll: { carouselControl: { direction: 'next' } } }}
        onClick={carousel.next}
      >
        <CarouselControlIcon
          bsJs={{ bsJsAll: { carouselControlIcon: { direction: 'next' } } }}
          aria-hidden={true}
        />
        <BrElement as="span" bsJs={{ bsJsAll: { visuallyHidden: true } }}>
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
          bsJs={{
            bsJsAll: {
              carouselIndicator: {
                active: carousel.currentIndex === -1 || carousel.currentIndex === 0
              }
            }
          }}
          onClick={() => {
            carousel.to(0)
          }}
          aria-label="Slide 1"
          data-bs-target="#carouselExampleIndicators"
        />
        <CarouselIndicator
          bsJs={{ bsJsAll: { carouselIndicator: { active: carousel.currentIndex === 1 } } }}
          onClick={() => {
            carousel.to(1)
          }}
          aria-label="Slide 2"
          data-bs-target="#carouselExampleIndicators"
        />
        <CarouselIndicator
          bsJs={{ bsJsAll: { carouselIndicator: { active: carousel.currentIndex === 2 } } }}
          onClick={() => {
            carousel.to(2)
          }}
          aria-label="Slide 3"
          data-bs-target="#carouselExampleIndicators"
        />
      </CarouselIndicators>
      <CarouselInner>
        <CarouselItem
          bsJs={{
            bsJsAll: {
              carouselItem: { active: carousel.currentIndex === -1 || carousel.currentIndex === 0 }
            }
          }}
        >
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg w-100',
              bsJs: { bsJsAll: { display: 'block' } }
            })}
          >
            <PlaceholderImgSvgChildren text="First slide" />
          </Image>
        </CarouselItem>
        <CarouselItem bsJs={{ bsJsAll: { carouselItem: { active: carousel.currentIndex === 1 } } }}>
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg w-100',
              bsJs: { bsJsAll: { display: 'block' } }
            })}
          >
            <PlaceholderImgSvgChildren text="Second slide" />
          </Image>
        </CarouselItem>
        <CarouselItem bsJs={{ bsJsAll: { carouselItem: { active: carousel.currentIndex === 2 } } }}>
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg w-100',
              bsJs: { bsJsAll: { display: 'block' } }
            })}
          >
            <PlaceholderImgSvgChildren text="Third slide" />
          </Image>
        </CarouselItem>
      </CarouselInner>
      <CarouselControl
        bsJs={{ bsJsAll: { carouselControl: { direction: 'prev' } } }}
        onClick={carousel.prev}
      >
        <CarouselControlIcon
          bsJs={{ bsJsAll: { carouselControlIcon: { direction: 'prev' } } }}
          aria-hidden={true}
        />
        <BrElement as="span" bsJs={{ bsJsAll: { visuallyHidden: true } }}>
          Previous
        </BrElement>
      </CarouselControl>
      <CarouselControl
        bsJs={{ bsJsAll: { carouselControl: { direction: 'next' } } }}
        onClick={carousel.next}
      >
        <CarouselControlIcon
          bsJs={{ bsJsAll: { carouselControlIcon: { direction: 'next' } } }}
          aria-hidden={true}
        />
        <BrElement as="span" bsJs={{ bsJsAll: { visuallyHidden: true } }}>
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
          bsJs={{
            bsJsAll: {
              carouselIndicator: {
                active: carousel.currentIndex === -1 || carousel.currentIndex === 0
              }
            }
          }}
          onClick={() => {
            carousel.to(0)
          }}
          aria-label="Slide 1"
          data-bs-target="#carouselExampleIndicators"
        />
        <CarouselIndicator
          bsJs={{ bsJsAll: { carouselIndicator: { active: carousel.currentIndex === 1 } } }}
          onClick={() => {
            carousel.to(1)
          }}
          aria-label="Slide 2"
          data-bs-target="#carouselExampleIndicators"
        />
        <CarouselIndicator
          bsJs={{ bsJsAll: { carouselIndicator: { active: carousel.currentIndex === 2 } } }}
          onClick={() => {
            carousel.to(2)
          }}
          aria-label="Slide 3"
          data-bs-target="#carouselExampleIndicators"
        />
      </CarouselIndicators>
      <CarouselInner>
        <CarouselItem
          bsJs={{
            bsJsAll: {
              carouselItem: { active: carousel.currentIndex === -1 || carousel.currentIndex === 0 }
            }
          }}
        >
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg w-100',
              bsJs: { bsJsAll: { display: 'block' } }
            })}
          >
            <PlaceholderImgSvgChildren text="First slide" />
          </Image>
          <CarouselCaption bsJs={{ bsJsAll: { display: 'none' }, md: { display: 'block' } }}>
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </CarouselCaption>
        </CarouselItem>
        <CarouselItem bsJs={{ bsJsAll: { carouselItem: { active: carousel.currentIndex === 1 } } }}>
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg w-100',
              bsJs: { bsJsAll: { display: 'block' } }
            })}
          >
            <PlaceholderImgSvgChildren text="Second slide" />
          </Image>
          <CarouselCaption bsJs={{ bsJsAll: { display: 'none' }, md: { display: 'block' } }}>
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </CarouselCaption>
        </CarouselItem>
        <CarouselItem bsJs={{ bsJsAll: { carouselItem: { active: carousel.currentIndex === 2 } } }}>
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg w-100',
              bsJs: { bsJsAll: { display: 'block' } }
            })}
          >
            <PlaceholderImgSvgChildren text="Third slide" />
          </Image>
          <CarouselCaption bsJs={{ bsJsAll: { display: 'none' }, md: { display: 'block' } }}>
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </CarouselCaption>
        </CarouselItem>
      </CarouselInner>
      <CarouselControl
        bsJs={{ bsJsAll: { carouselControl: { direction: 'prev' } } }}
        onClick={carousel.prev}
      >
        <CarouselControlIcon
          bsJs={{ bsJsAll: { carouselControlIcon: { direction: 'prev' } } }}
          aria-hidden={true}
        />
        <BrElement as="span" bsJs={{ bsJsAll: { visuallyHidden: true } }}>
          Previous
        </BrElement>
      </CarouselControl>
      <CarouselControl
        bsJs={{ bsJsAll: { carouselControl: { direction: 'next' } } }}
        onClick={carousel.next}
      >
        <CarouselControlIcon
          bsJs={{ bsJsAll: { carouselControlIcon: { direction: 'next' } } }}
          aria-hidden={true}
        />
        <BrElement as="span" bsJs={{ bsJsAll: { visuallyHidden: true } }}>
          Next
        </BrElement>
      </CarouselControl>
    </Carousel>
  )
}

export const CrossFade: StoryFn = () => {
  const carousel = useCarousel()

  return (
    <Carousel
      id="carouselExampleFade"
      brCarousel={carousel}
      bsJs={{ bsJsAll: { carousel: { fade: true } } }}
    >
      <CarouselInner>
        <CarouselItem
          bsJs={{
            bsJsAll: {
              carouselItem: { active: carousel.currentIndex === -1 || carousel.currentIndex === 0 }
            }
          }}
        >
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg w-100',
              bsJs: { bsJsAll: { display: 'block' } }
            })}
          >
            <PlaceholderImgSvgChildren text="First slide" />
          </Image>
        </CarouselItem>
        <CarouselItem bsJs={{ bsJsAll: { carouselItem: { active: carousel.currentIndex === 1 } } }}>
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg w-100',
              bsJs: { bsJsAll: { display: 'block' } }
            })}
          >
            <PlaceholderImgSvgChildren text="Second slide" />
          </Image>
        </CarouselItem>
        <CarouselItem bsJs={{ bsJsAll: { carouselItem: { active: carousel.currentIndex === 2 } } }}>
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg w-100',
              bsJs: { bsJsAll: { display: 'block' } }
            })}
          >
            <PlaceholderImgSvgChildren text="Third slide" />
          </Image>
        </CarouselItem>
      </CarouselInner>
      <CarouselControl
        bsJs={{ bsJsAll: { carouselControl: { direction: 'prev' } } }}
        onClick={carousel.prev}
      >
        <CarouselControlIcon
          bsJs={{ bsJsAll: { carouselControlIcon: { direction: 'prev' } } }}
          aria-hidden={true}
        />
        <BrElement as="span" bsJs={{ bsJsAll: { visuallyHidden: true } }}>
          Previous
        </BrElement>
      </CarouselControl>
      <CarouselControl
        bsJs={{ bsJsAll: { carouselControl: { direction: 'next' } } }}
        onClick={carousel.next}
      >
        <CarouselControlIcon
          bsJs={{ bsJsAll: { carouselControlIcon: { direction: 'next' } } }}
          aria-hidden={true}
        />
        <BrElement as="span" bsJs={{ bsJsAll: { visuallyHidden: true } }}>
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
          <CarouselItem
            bsJs={{
              bsJsAll: {
                carouselItem: {
                  active: carousel1.currentIndex === -1 || carousel1.currentIndex === 0
                }
              }
            }}
          >
            <Image
              {...placeholderImgSvgProps({
                width: 800,
                height: 400,
                className: 'bd-placeholder-img-lg w-100',
                bsJs: { bsJsAll: { display: 'block' } }
              })}
            >
              <PlaceholderImgSvgChildren text="First slide" />
            </Image>
          </CarouselItem>
          <CarouselItem
            bsJs={{ bsJsAll: { carouselItem: { active: carousel1.currentIndex === 1 } } }}
          >
            <Image
              {...placeholderImgSvgProps({
                width: 800,
                height: 400,
                className: 'bd-placeholder-img-lg w-100',
                bsJs: { bsJsAll: { display: 'block' } }
              })}
            >
              <PlaceholderImgSvgChildren text="Second slide" />
            </Image>
          </CarouselItem>
          <CarouselItem
            bsJs={{ bsJsAll: { carouselItem: { active: carousel1.currentIndex === 2 } } }}
          >
            <Image
              {...placeholderImgSvgProps({
                width: 800,
                height: 400,
                className: 'bd-placeholder-img-lg w-100',
                bsJs: { bsJsAll: { display: 'block' } }
              })}
            >
              <PlaceholderImgSvgChildren text="Third slide" />
            </Image>
          </CarouselItem>
        </CarouselInner>
        <CarouselControl
          bsJs={{ bsJsAll: { carouselControl: { direction: 'prev' } } }}
          onClick={carousel1.prev}
        >
          <CarouselControlIcon
            bsJs={{ bsJsAll: { carouselControlIcon: { direction: 'prev' } } }}
            aria-hidden={true}
          />
          <BrElement as="span" bsJs={{ bsJsAll: { visuallyHidden: true } }}>
            Previous
          </BrElement>
        </CarouselControl>
        <CarouselControl
          bsJs={{ bsJsAll: { carouselControl: { direction: 'next' } } }}
          onClick={carousel1.next}
        >
          <CarouselControlIcon
            bsJs={{ bsJsAll: { carouselControlIcon: { direction: 'next' } } }}
            aria-hidden={true}
          />
          <BrElement as="span" bsJs={{ bsJsAll: { visuallyHidden: true } }}>
            Next
          </BrElement>
        </CarouselControl>
      </Carousel>
      <br />
      <Carousel id="carouselExampleRide" brCarousel={carousel2}>
        <CarouselInner>
          <CarouselItem
            bsJs={{
              bsJsAll: {
                carouselItem: {
                  active: carousel2.currentIndex === -1 || carousel2.currentIndex === 0
                }
              }
            }}
          >
            <Image
              {...placeholderImgSvgProps({
                width: 800,
                height: 400,
                className: 'bd-placeholder-img-lg w-100',
                bsJs: { bsJsAll: { display: 'block' } }
              })}
            >
              <PlaceholderImgSvgChildren text="First slide" />
            </Image>
          </CarouselItem>
          <CarouselItem
            bsJs={{ bsJsAll: { carouselItem: { active: carousel2.currentIndex === 1 } } }}
          >
            <Image
              {...placeholderImgSvgProps({
                width: 800,
                height: 400,
                className: 'bd-placeholder-img-lg w-100',
                bsJs: { bsJsAll: { display: 'block' } }
              })}
            >
              <PlaceholderImgSvgChildren text="Second slide" />
            </Image>
          </CarouselItem>
          <CarouselItem
            bsJs={{ bsJsAll: { carouselItem: { active: carousel2.currentIndex === 2 } } }}
          >
            <Image
              {...placeholderImgSvgProps({
                width: 800,
                height: 400,
                className: 'bd-placeholder-img-lg w-100',
                bsJs: { bsJsAll: { display: 'block' } }
              })}
            >
              <PlaceholderImgSvgChildren text="Third slide" />
            </Image>
          </CarouselItem>
        </CarouselInner>
        <CarouselControl
          bsJs={{ bsJsAll: { carouselControl: { direction: 'prev' } } }}
          onClick={carousel2.prev}
        >
          <CarouselControlIcon
            bsJs={{ bsJsAll: { carouselControlIcon: { direction: 'prev' } } }}
            aria-hidden={true}
          />
          <BrElement as="span" bsJs={{ bsJsAll: { visuallyHidden: true } }}>
            Previous
          </BrElement>
        </CarouselControl>
        <CarouselControl
          bsJs={{ bsJsAll: { carouselControl: { direction: 'next' } } }}
          onClick={carousel2.next}
        >
          <CarouselControlIcon
            bsJs={{ bsJsAll: { carouselControlIcon: { direction: 'next' } } }}
            aria-hidden={true}
          />
          <BrElement as="span" bsJs={{ bsJsAll: { visuallyHidden: true } }}>
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
          bsJs={{
            bsJsAll: {
              carouselItem: { active: carousel.currentIndex === -1 || carousel.currentIndex === 0 }
            }
          }}
          brCarouselItemInterval={10000}
        >
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg w-100',
              bsJs: { bsJsAll: { display: 'block' } }
            })}
          >
            <PlaceholderImgSvgChildren text="First slide" />
          </Image>
        </CarouselItem>
        <CarouselItem
          bsJs={{ bsJsAll: { carouselItem: { active: carousel.currentIndex === 1 } } }}
          brCarouselItemInterval={2000}
        >
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg w-100',
              bsJs: { bsJsAll: { display: 'block' } }
            })}
          >
            <PlaceholderImgSvgChildren text="Second slide" />
          </Image>
        </CarouselItem>
        <CarouselItem bsJs={{ bsJsAll: { carouselItem: { active: carousel.currentIndex === 2 } } }}>
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg w-100',
              bsJs: { bsJsAll: { display: 'block' } }
            })}
          >
            <PlaceholderImgSvgChildren text="Third slide" />
          </Image>
        </CarouselItem>
      </CarouselInner>
      <CarouselControl
        bsJs={{ bsJsAll: { carouselControl: { direction: 'prev' } } }}
        onClick={carousel.prev}
      >
        <CarouselControlIcon
          bsJs={{ bsJsAll: { carouselControlIcon: { direction: 'prev' } } }}
          aria-hidden={true}
        />
        <BrElement as="span" bsJs={{ bsJsAll: { visuallyHidden: true } }}>
          Previous
        </BrElement>
      </CarouselControl>
      <CarouselControl
        bsJs={{ bsJsAll: { carouselControl: { direction: 'next' } } }}
        onClick={carousel.next}
      >
        <CarouselControlIcon
          bsJs={{ bsJsAll: { carouselControlIcon: { direction: 'next' } } }}
          aria-hidden={true}
        />
        <BrElement as="span" bsJs={{ bsJsAll: { visuallyHidden: true } }}>
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
        <CarouselItem
          bsJs={{
            bsJsAll: {
              carouselItem: { active: carousel.currentIndex === -1 || carousel.currentIndex === 0 }
            }
          }}
        >
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg w-100',
              bsJs: { bsJsAll: { display: 'block' } }
            })}
          >
            <PlaceholderImgSvgChildren text="First slide" />
          </Image>
        </CarouselItem>
        <CarouselItem bsJs={{ bsJsAll: { carouselItem: { active: carousel.currentIndex === 1 } } }}>
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg w-100',
              bsJs: { bsJsAll: { display: 'block' } }
            })}
          >
            <PlaceholderImgSvgChildren text="Second slide" />
          </Image>
        </CarouselItem>
        <CarouselItem bsJs={{ bsJsAll: { carouselItem: { active: carousel.currentIndex === 2 } } }}>
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg w-100',
              bsJs: { bsJsAll: { display: 'block' } }
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
        <CarouselItem
          bsJs={{
            bsJsAll: {
              carouselItem: { active: carousel.currentIndex === -1 || carousel.currentIndex === 0 }
            }
          }}
        >
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg w-100',
              bsJs: { bsJsAll: { display: 'block' } }
            })}
          >
            <PlaceholderImgSvgChildren text="First slide" />
          </Image>
        </CarouselItem>
        <CarouselItem bsJs={{ bsJsAll: { carouselItem: { active: carousel.currentIndex === 1 } } }}>
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg w-100',
              bsJs: { bsJsAll: { display: 'block' } }
            })}
          >
            <PlaceholderImgSvgChildren text="Second slide" />
          </Image>
        </CarouselItem>
        <CarouselItem bsJs={{ bsJsAll: { carouselItem: { active: carousel.currentIndex === 2 } } }}>
          <Image
            {...placeholderImgSvgProps({
              width: 800,
              height: 400,
              className: 'bd-placeholder-img-lg w-100',
              bsJs: { bsJsAll: { display: 'block' } }
            })}
          >
            <PlaceholderImgSvgChildren text="Third slide" />
          </Image>
        </CarouselItem>
      </CarouselInner>
      <CarouselControl
        bsJs={{ bsJsAll: { carouselControl: { direction: 'prev' } } }}
        onClick={carousel.prev}
      >
        <CarouselControlIcon
          bsJs={{ bsJsAll: { carouselControlIcon: { direction: 'prev' } } }}
          aria-hidden={true}
        />
        <BrElement as="span" bsJs={{ bsJsAll: { visuallyHidden: true } }}>
          Previous
        </BrElement>
      </CarouselControl>
      <CarouselControl
        bsJs={{ bsJsAll: { carouselControl: { direction: 'next' } } }}
        onClick={carousel.next}
      >
        <CarouselControlIcon
          bsJs={{ bsJsAll: { carouselControlIcon: { direction: 'next' } } }}
          aria-hidden={true}
        />
        <BrElement as="span" bsJs={{ bsJsAll: { visuallyHidden: true } }}>
          Next
        </BrElement>
      </CarouselControl>
    </Carousel>
  )
}
