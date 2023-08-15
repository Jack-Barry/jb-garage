import { BrElement } from '@jb-garage/bootstrap-react/components/utils/BrElement'
import { Decorator } from '@storybook/react'

export function linkToBootstrapDocs(href: string, text?: string): Decorator {
  return function (Story, Context) {
    return (
      <BrElement brUtilsDisplay="flex" className="flex-column gap-2">
        <div className="text-end">
          <a href={href} target="_blank">
            Bootstrap Docs: {text || Context.name}
          </a>
        </div>
        <BrElement as="hr" brUtilsSpacing={{ margin: { top: '0' } }} />
        <Story />
      </BrElement>
    )
  }
}
