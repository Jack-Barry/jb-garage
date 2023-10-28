import { Decorator } from '@storybook/react'

import { BrElement } from '../../components/utils/BrElement'

export function linkToBootstrapDocs(href: string, text?: string): Decorator {
  return function (Story, Context) {
    return (
      <BrElement bsJs={{ display: 'flex', flex: { column: true }, spacing: { gap: '2' } }}>
        <BrElement bsJs={{ text: { align: 'end' } }}>
          <a href={href} target="_blank">
            Bootstrap Docs: {text || Context.name}
          </a>
        </BrElement>
        <BrElement as="hr" bsJs={{ spacing: { margin: { top: '0' } } }} />
        <Story />
      </BrElement>
    )
  }
}
