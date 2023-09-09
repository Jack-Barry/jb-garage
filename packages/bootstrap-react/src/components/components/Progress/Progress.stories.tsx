import { Meta, StoryFn } from '@storybook/react'

import Progress from './Progress'
import ProgressStacked from './ProgressStacked'

const meta: Meta = {
  title: 'Progress',
  tags: ['autodocs']
}

export default meta

export const HowItWorks: StoryFn = () => {
  return (
    <div className="bd-example">
      <Progress brProgressValue={0} aria-label="Basic example" />
      <Progress brProgressValue={25} aria-label="Basic example" />
      <Progress brProgressValue={50} aria-label="Basic example" />
      <Progress brProgressValue={75} aria-label="Basic example" />
      <Progress brProgressValue={100} aria-label="Basic example" />
    </div>
  )
}

export const BarSizingWidth: StoryFn = () => {
  return (
    <div className="bd-example">
      <Progress aria-label="Basic example" brProgressBarProps={{ className: 'w-75' }} />
    </div>
  )
}

export const BarSizingHeight: StoryFn = () => {
  return (
    <div className="bd-example">
      <Progress brProgressValue={25} style={{ height: '1px' }} aria-label="Example 1px high" />
      <Progress brProgressValue={25} style={{ height: '20px' }} aria-label="Example 20px high" />
    </div>
  )
}

export const Labels: StoryFn = () => {
  return (
    <div className="bd-example">
      <Progress aria-label="Example with label" brProgressValue={25}>
        25%
      </Progress>
      <hr />
      <Progress
        aria-label="Example with label"
        brProgressValue={10}
        brProgressBarProps={{
          bsJs: { bsJsAll: { color: 'dark' } },
          className: 'overflow-visible'
        }}
      >
        Long label text for the progress bar, set to a dark color
      </Progress>
    </div>
  )
}

export const Backgrounds: StoryFn = () => {
  return (
    <div className="bd-example">
      <Progress
        aria-label="Success example"
        brProgressValue={25}
        brProgressBarProps={{ bsJs: { bsJsAll: { background: 'success' } } }}
      />
      <Progress
        aria-label="Info example"
        brProgressValue={50}
        brProgressBarProps={{ bsJs: { bsJsAll: { background: 'info' } } }}
      />
      <Progress
        aria-label="Warning example"
        brProgressValue={75}
        brProgressBarProps={{ bsJs: { bsJsAll: { background: 'warning' } } }}
      />
      <Progress
        aria-label="Danger example"
        brProgressValue={100}
        brProgressBarProps={{ bsJs: { bsJsAll: { background: 'danger' } } }}
      />
      <hr />
      <Progress
        aria-label="Success example"
        brProgressValue={25}
        brProgressBarProps={{ bsJs: { bsJsAll: { background: 'success' } } }}
      >
        25%
      </Progress>
      <Progress
        aria-label="Info example"
        brProgressValue={50}
        brProgressBarProps={{ bsJs: { bsJsAll: { background: 'info', color: 'dark' } } }}
      >
        50%
      </Progress>
      <Progress
        aria-label="Warning example"
        brProgressValue={75}
        brProgressBarProps={{ bsJs: { bsJsAll: { background: 'warning', color: 'dark' } } }}
      >
        75%
      </Progress>
      <Progress
        aria-label="Danger example"
        brProgressValue={100}
        brProgressBarProps={{ bsJs: { bsJsAll: { background: 'danger' } } }}
      >
        100%
      </Progress>
      <hr />
      <Progress
        aria-label="Warning example"
        brProgressValue={75}
        brProgressBarProps={{ bsJs: { bsJsAll: { color: 'bg-warning' } } }}
      >
        75%
      </Progress>
    </div>
  )
}

export const MultipleBars: StoryFn = () => {
  return (
    <div className="bd-example">
      <ProgressStacked>
        <Progress aria-label="Segment one" brProgressValue={15} brProgressStacked />
        <Progress
          aria-label="Segment two"
          brProgressValue={30}
          brProgressBarProps={{ bsJs: { bsJsAll: { background: 'success' } } }}
          brProgressStacked
        />
        <Progress
          aria-label="Segment three"
          brProgressValue={20}
          brProgressBarProps={{ bsJs: { bsJsAll: { background: 'info' } } }}
          brProgressStacked
        />
      </ProgressStacked>
    </div>
  )
}

export const Striped: StoryFn = () => {
  return (
    <div className="bd-example">
      <Progress
        aria-label="Default striped example"
        brProgressValue={10}
        brProgressStriped
        brProgressBarProps={{ className: '' }}
      />
      <Progress
        aria-label="Success striped example"
        brProgressValue={25}
        brProgressStriped
        brProgressBarProps={{ bsJs: { bsJsAll: { background: 'success' } } }}
      />
      <Progress
        aria-label="Info striped example"
        brProgressValue={50}
        brProgressStriped
        brProgressBarProps={{ bsJs: { bsJsAll: { background: 'info' } } }}
      />
      <Progress
        aria-label="Warning striped example"
        brProgressValue={75}
        brProgressStriped
        brProgressBarProps={{ bsJs: { bsJsAll: { background: 'warning' } } }}
      />
      <Progress
        aria-label="Danger striped example"
        brProgressValue={100}
        brProgressStriped
        brProgressBarProps={{ bsJs: { bsJsAll: { background: 'danger' } } }}
      />
    </div>
  )
}

export const AnimatedStripes: StoryFn = () => {
  return (
    <div className="bd-example">
      <Progress
        aria-label="Animated striped example"
        brProgressValue={75}
        brProgressStriped
        brProgressAnimated
      />
    </div>
  )
}
