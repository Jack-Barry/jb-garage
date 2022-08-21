// Code generated by prismic-ts-codegen. DO NOT EDIT.

import type * as prismicT from '@prismicio/types'
import type * as prismic from '@prismicio/client'

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType]
}
/** Content for About Page documents */
interface AboutPageDocumentData {
  /**
   * Page Content field in *About Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_page.page_content
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  page_content: prismicT.RichTextField
}
/**
 * About Page document from Prismic
 *
 * - **API ID**: `about_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutPageDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithoutUID<
    Simplify<AboutPageDocumentData>,
    'about_page',
    Lang
  >
/** Content for Blog Post documents */
interface BlogPostDocumentData {
  /**
   * Post Title field in *Blog Post*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.post_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  post_title: prismicT.TitleField
  /**
   * post_tldr field in *Blog Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Post TL;DR
   * - **API ID Path**: blog_post.post_tldr
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  post_tldr: prismicT.KeyTextField
  /**
   * Social Media Image field in *Blog Post*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.social_media_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  social_media_image: prismicT.LinkField
  /**
   * Post Content field in *Blog Post*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.post_content
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  post_content: prismicT.RichTextField
  /**
   * Slice Zone field in *Blog Post*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.body[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  body: prismicT.SliceZone<BlogPostDocumentDataBodySlice>
}
/**
 * Primary content in Blog Post → Slice Zone → `blog_post` → Primary
 *
 */
interface BlogPostDocumentDataBodyBlogPostSlicePrimary {
  /**
   * Title field in *Blog Post → Slice Zone → `blog_post` → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.body[].blog_post.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismicT.TitleField
  /**
   * TL;DR field in *Blog Post → Slice Zone → `blog_post` → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.body[].blog_post.primary.tldr
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  tldr: prismicT.KeyTextField
  /**
   * Social Media Image field in *Blog Post → Slice Zone → `blog_post` → Primary*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.body[].blog_post.primary.social_media_image1
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  social_media_image1: prismicT.LinkToMediaField
}
/**
 * Item in Blog Post → Slice Zone → `blog_post` → Items
 *
 */
export interface BlogPostDocumentDataBodyBlogPostSliceItem {
  /**
   * Content field in *Blog Post → Slice Zone → `blog_post` → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.body[].blog_post.items[].content
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  content: prismicT.RichTextField
}
export type BlogPostDocumentDataBodyBlogPostSlice = prismicT.Slice<
  'blog_post',
  Simplify<BlogPostDocumentDataBodyBlogPostSlicePrimary>,
  Simplify<BlogPostDocumentDataBodyBlogPostSliceItem>
>
/**
 * Slice for *Blog Post → Slice Zone*
 *
 */
type BlogPostDocumentDataBodySlice =
  | BlogPostDocumentDataBodyBlogPostSlice
  | CodeBlockSlice
  | BlogPostSectionSlice
/**
 * Blog Post document from Prismic
 *
 * - **API ID**: `blog_post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogPostDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithUID<
    Simplify<BlogPostDocumentData>,
    'blog_post',
    Lang
  >
/** Content for Home Page documents */
interface HomePageDocumentData {
  /**
   * Welcome Message field in *Home Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home_page.welcome_message
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  welcome_message: prismicT.RichTextField
  /**
   * Slice Zone field in *Home Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<HomePageDocumentDataSlicesSlice>
}
/**
 * Slice for *Home Page → Slice Zone*
 *
 */
type HomePageDocumentDataSlicesSlice = RichTextCardSlice
/**
 * Home Page document from Prismic
 *
 * - **API ID**: `home_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomePageDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithoutUID<
    Simplify<HomePageDocumentData>,
    'home_page',
    Lang
  >
/** Content for Journal Entry documents */
interface JournalEntryDocumentData {
  /**
   * Date field in *Journal Entry*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: journal_entry.date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/date
   *
   */
  date: prismicT.DateField
  /**
   * Gratitude List field in *Journal Entry*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: What are 10 things I'm grateful for?
   * - **API ID Path**: journal_entry.gratitude_list
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  gratitude_list: prismicT.RichTextField
  /**
   * Emphasis on Others field in *Journal Entry*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Who was I impressed by or did I learn something interesting about recently?
   * - **API ID Path**: journal_entry.emphasis_on_others
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  emphasis_on_others: prismicT.RichTextField
  /**
   * Target field in *Journal Entry*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Who do I want to be by the end of the year?
   * - **API ID Path**: journal_entry.target
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  target: prismicT.RichTextField
  /**
   * status field in *Journal Entry*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Who am I today?
   * - **API ID Path**: journal_entry.status
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  status: prismicT.RichTextField
  /**
   * focus field in *Journal Entry*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: What should I focus on today to move toward my goals?
   * - **API ID Path**: journal_entry.focus
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  focus: prismicT.RichTextField
}
/**
 * Journal Entry document from Prismic
 *
 * - **API ID**: `journal_entry`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type JournalEntryDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithoutUID<
    Simplify<JournalEntryDocumentData>,
    'journal_entry',
    Lang
  >
export type AllDocumentTypes =
  | AboutPageDocument
  | BlogPostDocument
  | HomePageDocument
  | JournalEntryDocument
/**
 * Primary content in BlogPostSection → Primary
 *
 */
interface BlogPostSectionSliceDefaultPrimary {
  /**
   * Content field in *BlogPostSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post_section.primary.content
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  content: prismicT.RichTextField
}
/**
 * Default variation for BlogPostSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: `BlogPostSection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BlogPostSectionSliceDefault = prismicT.SharedSliceVariation<
  'default',
  Simplify<BlogPostSectionSliceDefaultPrimary>,
  never
>
/**
 * Slice variation for *BlogPostSection*
 *
 */
type BlogPostSectionSliceVariation = BlogPostSectionSliceDefault
/**
 * BlogPostSection Shared Slice
 *
 * - **API ID**: `blog_post_section`
 * - **Description**: `BlogPostSection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BlogPostSectionSlice = prismicT.SharedSlice<
  'blog_post_section',
  BlogPostSectionSliceVariation
>
/**
 * Primary content in CodeBlock → Primary
 *
 */
interface CodeBlockSliceDefaultPrimary {
  /**
   * Code field in *CodeBlock → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: code_block.primary.code
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  code: prismicT.RichTextField
}
/**
 * Default variation for CodeBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: `CodeBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CodeBlockSliceDefault = prismicT.SharedSliceVariation<
  'default',
  Simplify<CodeBlockSliceDefaultPrimary>,
  never
>
/**
 * Slice variation for *CodeBlock*
 *
 */
type CodeBlockSliceVariation = CodeBlockSliceDefault
/**
 * CodeBlock Shared Slice
 *
 * - **API ID**: `code_block`
 * - **Description**: `CodeBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CodeBlockSlice = prismicT.SharedSlice<
  'code_block',
  CodeBlockSliceVariation
>
/**
 * Primary content in RichTextCard → Primary
 *
 */
interface RichTextCardSliceDefaultPrimary {
  /**
   * Message field in *RichTextCard → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: rich_text_card.primary.message
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  message: prismicT.RichTextField
}
/**
 * Default variation for RichTextCard Slice
 *
 * - **API ID**: `default`
 * - **Description**: `RichTextCard`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type RichTextCardSliceDefault = prismicT.SharedSliceVariation<
  'default',
  Simplify<RichTextCardSliceDefaultPrimary>,
  never
>
/**
 * Slice variation for *RichTextCard*
 *
 */
type RichTextCardSliceVariation = RichTextCardSliceDefault
/**
 * RichTextCard Shared Slice
 *
 * - **API ID**: `rich_text_card`
 * - **Description**: `RichTextCard`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type RichTextCardSlice = prismicT.SharedSlice<
  'rich_text_card',
  RichTextCardSliceVariation
>
declare module '@prismicio/client' {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>
  }
}
