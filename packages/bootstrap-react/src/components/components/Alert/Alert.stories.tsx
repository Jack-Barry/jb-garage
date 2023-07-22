import { Meta, StoryFn } from '@storybook/react'
import Alert from './Alert'
import { useState } from 'react'
import Button from '../Button/Button'
import AlertLink from './AlertLink'
import AlertHeading from './AlertHeading'
import { BrElement } from '../../utils/BrElement'
import Image from '../../content/Image/Image'
import { useAlert } from './useAlert'
import classNames from 'classnames'
import CloseButton from '../CloseButton/CloseButton'

const meta: Meta = {
  title: 'Alert',
  tags: ['autodocs']
}

export default meta

export const Examples: StoryFn = () => {
  return (
    <div>
      <Alert className="alert-primary">A simple primary alert—check it out!</Alert>
      <Alert className="alert-secondary">A simple secondary alert—check it out!</Alert>
      <Alert className="alert-success">A simple success alert—check it out!</Alert>
      <Alert className="alert-danger">A simple danger alert—check it out!</Alert>
      <Alert className="alert-warning">A simple warning alert—check it out!</Alert>
      <Alert className="alert-info">A simple info alert—check it out!</Alert>
      <Alert className="alert-light">A simple light alert—check it out!</Alert>
      <Alert className="alert-dark">A simple dark alert—check it out!</Alert>
    </div>
  )
}

export const LiveExample: StoryFn = () => {
  const [alerts, setAlerts] = useState<string[]>([])

  function addAlert() {
    setAlerts((prev) => [...prev, crypto.randomUUID()])
  }

  function removeAlert(id: string) {
    setAlerts((prev) => prev.filter((alert) => alert !== id))
  }

  return (
    <div>
      {alerts.map((alert) => (
        <Alert key={alert} className="alert-success" brDismissible>
          <div>Alert {alert}</div>
          <CloseButton
            onClick={() => {
              removeAlert(alert)
            }}
          />
        </Alert>
      ))}
      <Button className="btn-primary" id="liveAlertBtn" onClick={addAlert}>
        Show live alert
      </Button>
    </div>
  )
}

export const LinkColor: StoryFn = () => {
  return (
    <div>
      <Alert className="alert-primary">
        A simple primary alert with <AlertLink href="#">an example link</AlertLink>. Give it a click
        if you like.
      </Alert>
      <AlertLinkExample variant="secondary" />
      <AlertLinkExample variant="success" />
      <AlertLinkExample variant="danger" />
      <AlertLinkExample variant="warning" />
      <AlertLinkExample variant="info" />
      <AlertLinkExample variant="light" />
      <AlertLinkExample variant="dark" />
    </div>
  )
}

function AlertLinkExample(props: { variant: string }) {
  const { variant } = props

  return (
    <Alert className={`alert-${variant}`}>
      A simple {variant} alert with <AlertLink href="#">an example link</AlertLink>. Give it a click
      if you like.
    </Alert>
  )
}

export const AdditionalContent: StoryFn = () => {
  return (
    <Alert className="alert-success">
      <AlertHeading>Well done!</AlertHeading>
      <p>
        Aww yeah, you successfully read this important alert message. This example text is going to
        run a bit longer so that you can see how spacing within an alert works with this kind of
        content.
      </p>
      <hr />
      <BrElement as="p" brMargin={{ bottom: 0 }}>
        Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
      </BrElement>
    </Alert>
  )
}

export const Icons: StoryFn = () => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
        <symbol id="check-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
        </symbol>
        <symbol id="info-fill" viewBox="0 0 16 16">
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
        </symbol>
        <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </symbol>
      </svg>

      <Alert className="alert-primary d-flex align-items-center" role="alert">
        <Image
          as="svg"
          brMargin={{ end: 2 }}
          className="bi flex-shrink-0"
          role="img"
          aria-label="Info:"
        >
          <use xlinkHref="#info-fill" />
        </Image>
        <div>An example alert with an icon</div>
      </Alert>
      <Alert className="alert-success d-flex align-items-center" role="alert">
        <Image
          as="svg"
          brMargin={{ end: 2 }}
          className="bi flex-shrink-0"
          role="img"
          aria-label="Success:"
        >
          <use xlinkHref="#check-circle-fill" />
        </Image>
        <div>An example success alert with an icon</div>
      </Alert>
      <Alert className="alert-warning d-flex align-items-center" role="alert">
        <Image
          as="svg"
          brMargin={{ end: 2 }}
          className="bi flex-shrink-0"
          role="img"
          aria-label="Warning:"
        >
          <use xlinkHref="#exclamation-triangle-fill" />
        </Image>
        <div>An example warning alert with an icon</div>
      </Alert>
      <Alert className="alert-danger d-flex align-items-center" role="alert">
        <Image
          as="svg"
          brMargin={{ end: 2 }}
          className="bi flex-shrink-0"
          role="img"
          aria-label="Danger:"
        >
          <use xlinkHref="#exclamation-triangle-fill" />
        </Image>
        <div>An example danger alert with an icon</div>
      </Alert>
    </div>
  )
}

export const Dismissing: StoryFn = () => {
  const alert = useAlert({
    onDismissed() {
      console.log('alert was dismissed')
    }
  })

  return (
    <div>
      <Alert brDismissible brAlert={alert} className={classNames('alert-warning fade')}>
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <CloseButton onClick={alert.close} />
      </Alert>
    </div>
  )
}
