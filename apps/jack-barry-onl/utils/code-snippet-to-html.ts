import { remark } from 'remark'
import html from 'remark-html'
import prism from 'remark-prism'

export default async function codeSnippetToHtml(
  markdown: string,
  language: string
) {
  const result = await remark()
    // https://github.com/sergioramos/remark-prism/issues/265
    .use(html, { sanitize: false })
    .use(prism)
    .process(`\`\`\`${language || 'shell'}\n${markdown}\n\`\`\``)
  return result.toString()
}
