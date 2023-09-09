import classNames from 'classnames'
import { CSSProperties, Fragment } from 'react'

import { ImageProps } from '../../components/content/Image/Image'

/** Class used in Bootstrap docs for image placeholders */
export const stylesBdPlaceholderImg: CSSProperties = {
  fontSize: '1.125rem',
  WebkitUserSelect: 'none',
  MozUserSelect: 'none',
  userSelect: 'none',
  textAnchor: 'middle'
}

export function placeholderImgSvgProps(props: ImageProps<'svg'> = {}): ImageProps<'svg'> {
  const { className, ...rest } = props

  return {
    as: 'svg',
    width: '100%',
    height: '250',
    xmlns: 'http://www.w3.org/2000/svg',
    role: 'img',
    preserveAspectRatio: 'xMidYMid slice',
    focusable: false,
    className: classNames('bd-placeholder-img', className),
    ...rest
  }
}
export function PlaceholderImgSvgChildren(props: { text: string }) {
  const { text } = props
  return (
    <Fragment>
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="#868e96"></rect>
      <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
        {text}
      </text>
    </Fragment>
  )
}
