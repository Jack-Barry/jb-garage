import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'

export type TableProps = Omit<BrElementProps<'table'>, 'as'> & {
  /** Apply Bootstrap striped style to table */
  brStriped?: boolean
  /** Apply Bootstrap striped columns style to table */
  brStripedCols?: boolean
  /** Apply Bootstrap table row hover style to table */
  brHover?: boolean
  /** Apply Bootstrap border styling to table */
  brBordered?: boolean
  /** Apply Bootstrap borderless styling to table */
  brBorderless?: boolean
  /** Apply Bootstrap small styling to table */
  brSmall?: boolean
  /** Place `caption` element at top of table */
  brCaptionTop?: boolean
}

export default function Table(props: TableProps) {
  const {
    className,
    brStriped,
    brStripedCols,
    brHover,
    brBordered,
    brBorderless,
    brSmall,
    brCaptionTop,
    ...rest
  } = props

  return (
    <BrElement
      as="table"
      className={classNames(
        'table',
        {
          'table-striped': brStriped,
          'table-striped-columns': brStripedCols,
          'table-hover': brHover,
          'table-bordered': brBordered,
          'table-borderless': brBorderless,
          'table-sm': brSmall,
          'caption-top': brCaptionTop
        },
        className
      )}
      {...rest}
    />
  )
}
