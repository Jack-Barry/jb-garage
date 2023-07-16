import { Decorator } from '@storybook/react'

export function linkToBootstrapDocs(href: string, text?: string): Decorator {
  return function (Story, Context) {
    return (
      <div className="d-flex flex-column gap-2">
        <div className="text-end">
          <a href={href} target="_blank">
            Bootstrap Docs: {text || Context.name}
          </a>
        </div>
        <hr className="mt-0" />
        <Story />
      </div>
    )
  }
}
