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
      <Progress bsJs={{ progressValue: 0 }} aria-label="Basic example" />
      <Progress bsJs={{ progressValue: 25 }} aria-label="Basic example" />
      <Progress bsJs={{ progressValue: 50 }} aria-label="Basic example" />
      <Progress bsJs={{ progressValue: 75 }} aria-label="Basic example" />
      <Progress bsJs={{ progressValue: 100 }} aria-label="Basic example" />
    </div>
  )
}

export const BarSizingWidth: StoryFn = () => {
  return (
    <div className="bd-example">
      <Progress
        aria-label="Basic example"
        bsJs={{ progressValue: 0 }}
        brProgressBarProps={{ bsJs: { size: { width: '75' } } }}
      />
    </div>
  )
}

export const BarSizingHeight: StoryFn = () => {
  return (
    <div className="bd-example">
      <Progress
        bsJs={{ progressValue: 25 }}
        style={{ height: '1px' }}
        aria-label="Example 1px high"
      />
      <Progress
        bsJs={{ progressValue: 25 }}
        style={{ height: '20px' }}
        aria-label="Example 20px high"
      />
    </div>
  )
}

export const Labels: StoryFn = () => {
  return (
    <div className="bd-example">
      <Progress aria-label="Example with label" bsJs={{ progressValue: 25 }}>
        25%
      </Progress>
      <hr />
      <Progress
        aria-label="Example with label"
        bsJs={{ progressValue: 10 }}
        brProgressBarProps={{
          bsJs: { color: 'dark', overflow: 'visible' }
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
        bsJs={{ progressValue: 25 }}
        brProgressBarProps={{ bsJs: { background: 'success' } }}
      />
      <Progress
        aria-label="Info example"
        bsJs={{ progressValue: 50 }}
        brProgressBarProps={{ bsJs: { background: 'info' } }}
      />
      <Progress
        aria-label="Warning example"
        bsJs={{ progressValue: 75 }}
        brProgressBarProps={{ bsJs: { background: 'warning' } }}
      />
      <Progress
        aria-label="Danger example"
        bsJs={{ progressValue: 100 }}
        brProgressBarProps={{ bsJs: { background: 'danger' } }}
      />
      <hr />
      <Progress
        aria-label="Success example"
        bsJs={{ progressValue: 25 }}
        brProgressBarProps={{ bsJs: { background: 'success' } }}
      >
        25%
      </Progress>
      <Progress
        aria-label="Info example"
        bsJs={{ progressValue: 50 }}
        brProgressBarProps={{ bsJs: { background: 'info', color: 'dark' } }}
      >
        50%
      </Progress>
      <Progress
        aria-label="Warning example"
        bsJs={{ progressValue: 75 }}
        brProgressBarProps={{ bsJs: { background: 'warning', color: 'dark' } }}
      >
        75%
      </Progress>
      <Progress
        aria-label="Danger example"
        bsJs={{ progressValue: 100 }}
        brProgressBarProps={{ bsJs: { background: 'danger' } }}
      >
        100%
      </Progress>
      <hr />
      <Progress
        aria-label="Warning example"
        bsJs={{ progressValue: 75 }}
        brProgressBarProps={{ bsJs: { color: 'bg-warning' } }}
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
        <Progress aria-label="Segment one" bsJs={{ progressValue: 15, isStacked: true }} />
        <Progress
          aria-label="Segment two"
          bsJs={{ progressValue: 30, isStacked: true }}
          brProgressBarProps={{ bsJs: { background: 'success' } }}
        />
        <Progress
          aria-label="Segment three"
          bsJs={{ progressValue: 20, isStacked: true }}
          brProgressBarProps={{ bsJs: { background: 'info' } }}
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
        bsJs={{ progressValue: 10 }}
        brProgressBarProps={{ bsJs: { striped: true } }}
      />
      <Progress
        aria-label="Success striped example"
        bsJs={{ progressValue: 25 }}
        brProgressBarProps={{ bsJs: { striped: true, background: 'success' } }}
      />
      <Progress
        aria-label="Info striped example"
        bsJs={{ progressValue: 50 }}
        brProgressBarProps={{ bsJs: { striped: true, background: 'info' } }}
      />
      <Progress
        aria-label="Warning striped example"
        bsJs={{ progressValue: 75 }}
        brProgressBarProps={{ bsJs: { striped: true, background: 'warning' } }}
      />
      <Progress
        aria-label="Danger striped example"
        bsJs={{ progressValue: 100 }}
        brProgressBarProps={{ bsJs: { striped: true, background: 'danger' } }}
      />
    </div>
  )
}

export const AnimatedStripes: StoryFn = () => {
  return (
    <div className="bd-example">
      <Progress
        aria-label="Animated striped example"
        bsJs={{ progressValue: 75 }}
        brProgressBarProps={{ bsJs: { striped: true, animated: true } }}
      />
    </div>
  )
}
