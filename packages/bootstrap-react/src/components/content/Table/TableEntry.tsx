import classNames from 'classnames'
import { BrElement, BrElementProps } from '../../utils/BrElement'

type TableEntryElementType = 'tr' | 'td' | 'th' | 'thead' | 'tbody' | 'tfoot'
export type TableEntryProps<T extends TableEntryElementType> = BrElementProps<
  T,
  {
    /** Type of HTML element to render */
    as?: T
    /** Apply Bootstrap table row active style to row */
    brTableEntryActive?: boolean
  }
>

export default function TableEntry<T extends TableEntryElementType = 'tr'>(
  props: TableEntryProps<T>
) {
  const { as = 'tr' as TableEntryElementType, className, brTableEntryActive, ...rest } = props

  return (
    <BrElement
      as={as}
      className={classNames(
        {
          'table-active': brTableEntryActive
        },
        className
      )}
      {...rest}
    />
  )
}
