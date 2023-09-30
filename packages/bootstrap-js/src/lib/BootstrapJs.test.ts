import { BootstrapJs } from './BootstrapJs'
import { ALL_BREAKPOINTS_KEY } from './constants'
import { emptyStyles } from './utils/emptyStyles'

describe('BootstrapJs Class', () => {
  let bs: BootstrapJs

  beforeEach(() => {
    bs = new BootstrapJs()
  })

  describe('Content Utils: Images', () => {
    test('returns empty object when no value is provided', () => {
      expect(bs.bsJs<'image'>({ [ALL_BREAKPOINTS_KEY]: { image: undefined } })).toStrictEqual(
        emptyStyles()
      )
      expect(bs.bsJs<'image'>({ [ALL_BREAKPOINTS_KEY]: { image: {} } })).toStrictEqual(
        emptyStyles()
      )
    })

    test('sets expected class when fluid is true', () => {
      expect(bs.bsJs<'image'>({ [ALL_BREAKPOINTS_KEY]: { image: { fluid: true } } })).toStrictEqual(
        {
          classes: {
            'img-fluid': true
          },
          inlineStyles: {},
          dataAttributes: {}
        }
      )
    })

    test('sets expected class when thumbnail is true', () => {
      expect(
        bs.bsJs<'image'>({ [ALL_BREAKPOINTS_KEY]: { image: { thumbnail: true } } })
      ).toStrictEqual({
        classes: {
          'img-thumbnail': true
        },
        inlineStyles: {},
        dataAttributes: {}
      })
    })
  })

  describe('Content Utils: Tables', () => {
    test('returns empty object when no value is provided', () => {
      expect(bs.bsJs<'table'>({ [ALL_BREAKPOINTS_KEY]: { table: undefined } })).toStrictEqual(
        emptyStyles()
      )
      expect(bs.bsJs<'table'>({ [ALL_BREAKPOINTS_KEY]: { table: {} } })).toStrictEqual(
        emptyStyles()
      )
    })

    test('sets expected classes', () => {
      expect(
        bs.bsJs<'table'>({
          [ALL_BREAKPOINTS_KEY]: {
            table: {
              striped: true,
              stripedCols: true,
              rowHover: true,
              bordered: true,
              borderless: true,
              small: true,
              captionTop: true
            }
          }
        })
      ).toStrictEqual({
        classes: {
          'table-striped': true,
          'table-striped-columns': true,
          'table-hover': true,
          'table-bordered': true,
          'table-borderless': true,
          'table-sm': true,
          'caption-top': true
        },
        inlineStyles: {},
        dataAttributes: {}
      })
    })
  })

  describe('Content Utils: Table Entry', () => {
    test('returns empty object when no value is provided', () => {
      expect(
        bs.bsJs<'table-entry'>({ [ALL_BREAKPOINTS_KEY]: { tableEntry: undefined } })
      ).toStrictEqual(emptyStyles())
      expect(bs.bsJs<'table-entry'>({ [ALL_BREAKPOINTS_KEY]: { tableEntry: {} } })).toStrictEqual(
        emptyStyles()
      )
    })

    test('sets expected classes', () => {
      expect(
        bs.bsJs<'table-entry'>({
          [ALL_BREAKPOINTS_KEY]: {
            tableEntry: {
              active: true
            }
          }
        })
      ).toStrictEqual({
        classes: {
          'table-active': true
        },
        inlineStyles: {},
        dataAttributes: {}
      })
    })
  })

  describe('Content Utils: Table Group', () => {
    test('returns empty object when no value is provided', () => {
      expect(
        bs.bsJs<'table-group'>({ [ALL_BREAKPOINTS_KEY]: { tableGroup: undefined } })
      ).toStrictEqual(emptyStyles())
      expect(bs.bsJs<'table-group'>({ [ALL_BREAKPOINTS_KEY]: { tableGroup: {} } })).toStrictEqual(
        emptyStyles()
      )
    })

    test('sets expected classes', () => {
      expect(
        bs.bsJs<'table-group'>({
          [ALL_BREAKPOINTS_KEY]: {
            tableGroup: {
              groupDivider: true
            }
          }
        })
      ).toStrictEqual({
        classes: {
          'table-group-divider': true
        },
        inlineStyles: {},
        dataAttributes: {}
      })
    })
  })
})
