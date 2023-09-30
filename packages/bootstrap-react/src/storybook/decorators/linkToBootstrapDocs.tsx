import { Decorator } from '@storybook/react'

import { BrElement } from '../../components/utils/BrElement'

export function linkToBootstrapDocs(href: string, text?: string): Decorator {
  return function (Story, Context) {
    return (
      <BrElement
        bsJs={{ bsJsAll: { display: 'flex', flex: { column: true }, spacing: { gap: '2' } } }}
      >
        <div className="text-end">
          <a href={href} target="_blank">
            Bootstrap Docs: {text || Context.name}
          </a>
        </div>
        <BrElement as="hr" bsJs={{ bsJsAll: { spacing: { margin: { top: '0' } } } }} />
        <Story />
      </BrElement>
    )
  }
}
