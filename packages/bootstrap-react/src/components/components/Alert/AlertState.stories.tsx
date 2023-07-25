import { Meta, StoryFn } from '@storybook/react'
import { useAlert } from './useAlert'
import Alert from './Alert'
import classNames from 'classnames'
import CloseButton from '../CloseButton/CloseButton'

const meta: Meta = {
  title: 'Alert/Controlled State',
  tags: ['autodocs']
}

export default meta

export const Example: StoryFn = () => {
  const alert = useAlert({
    onDismissed() {
      window.alert('Controlled state alert has been dismissed')
    }
  })
  console.log({ isAnimating: alert.isAnimating, isDismissed: alert.isDismissed })

  return (
    <Alert brDismissible brAlert={alert} className={classNames('alert-warning fade')}>
      If you need to have more control over or access to the alert state outside of the component,
      try the <code>useAlert</code> hook. You'll have access to properties like{' '}
      <code>isAnimating</code>, <code>isDismissed</code>, an <code>alertRef</code> and a{' '}
      <code>close</code> function.
      <CloseButton onClick={alert.close} />
    </Alert>
  )
}
