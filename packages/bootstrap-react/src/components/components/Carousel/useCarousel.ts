import { EventListenersManager } from '@jb-garage/utils-browser'
import { noOp } from '@jb-garage/utils-generic'
import { Carousel } from 'bootstrap'
import { useEffect, useState } from 'react'

enum CarouselEvents {
  slide = 'slide.bs.carousel',
  slid = 'slid.bs.carousel'
}

type CarouselEventHandler = (event: Carousel.Event) => void

type UseCarouselOptions = {
  /** Options to use for the Bootstrap `Carousel` instance */
  bootstrapCarousel?: Partial<Carousel.Options>
  /** Callback to invoke when the `slide.bs.carousel` event fires */
  onSlide?: CarouselEventHandler
  /** Callback to invoke when the `slide.bs.carousel` event fires */
  onSlid?: CarouselEventHandler
}

/**
 * Provides carousel-related functionality using Bootstrap's `Carousel` class under
 *   the hood, with carousel state tracked inside React
 */
export function useCarousel<T extends HTMLElement = HTMLElement>(options: UseCarouselOptions = {}) {
  const { bootstrapCarousel, onSlide = noOp, onSlid = noOp } = options

  const [isSliding, setIsSliding] = useState(false)
  const [carousel, setCarousel] = useState<Carousel | null>(null)
  const [carouselNode, setCarouselNode] = useState<T | null>(null)
  const [currentIndex, setCurrentIndex] = useState(-1)

  useEffect(
    function initBootstrapCarousel() {
      if (carousel && !carouselNode) {
        setCarousel(null)
      }

      if (carouselNode) {
        setCarousel(Carousel.getOrCreateInstance(carouselNode, bootstrapCarousel))
      }
    },
    [carousel, carouselNode]
  )

  useEffect(
    function setUpEventListeners() {
      if (!carouselNode) {
        return
      }

      const listeners = new EventListenersManager(carouselNode, [
        { type: CarouselEvents.slide, listener: handleSlide as unknown as EventListener },
        { type: CarouselEvents.slid, listener: handleSlid as unknown as EventListener }
      ])

      listeners.setup()

      return function tearDownEventListeners() {
        listeners.teardown()
      }
    },
    [!!carouselNode]
  )

  function handleSlide(event: Carousel.Event) {
    setIsSliding(true)
    onSlide(event)
  }

  function handleSlid(event: Carousel.Event) {
    setIsSliding(false)
    setCurrentIndex(event.to)
    onSlid(event)
  }

  function cycle() {
    carousel?.cycle.bind(carousel)()
  }

  function next() {
    carousel?.next.bind(carousel)()
  }

  function nextWhenVisible() {
    carousel?.nextWhenVisible.bind(carousel)()
  }

  function pause() {
    carousel?.pause.bind(carousel)()
  }

  function prev() {
    carousel?.prev.bind(carousel)()
  }

  function to(index: number) {
    carousel?.to.bind(carousel)(index)
  }

  return {
    /** Carousel is currently sliding */
    isSliding,
    /** Callback ref that can be used for the `Carousel` component */
    ref: setCarouselNode,
    /** Index of the currently displayed carousel item */
    currentIndex,
    cycle,
    next,
    nextWhenVisible,
    pause,
    prev,
    to
  }
}
