import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'

export type TableProps = Omit<BrElementProps<'table'>, 'as'> & {
  /** Apply Bootstrap striped style to table */
  brTableStriped?: boolean
  /** Apply Bootstrap striped columns style to table */
  brTableStripedCols?: boolean
  /** Apply Bootstrap table row hover style to table */
  brTableRowHover?: boolean
  /** Apply Bootstrap border styling to table */
  brTableBordered?: boolean
  /** Apply Bootstrap borderless styling to table */
  brTableBorderless?: boolean
  /** Apply Bootstrap small styling to table */
  brTableSmall?: boolean
  /** Place `caption` element at top of table */
  brTableCaptionTop?: boolean
}

export default function Table(props: TableProps) {
  const {
    className,
    brTableStriped,
    brTableStripedCols,
    brTableRowHover,
    brTableBordered,
    brTableBorderless,
    brTableSmall,
    brTableCaptionTop,
    ...rest
  } = props

  return (
    <BrElement
      as="table"
      className={classNames(
        'table',
        {
          'table-striped': brTableStriped,
          'table-striped-columns': brTableStripedCols,
          'table-hover': brTableRowHover,
          'table-bordered': brTableBordered,
          'table-borderless': brTableBorderless,
          'table-sm': brTableSmall,
          'caption-top': brTableCaptionTop
        },
        className
      )}
      {...rest}
    />
  )
}
