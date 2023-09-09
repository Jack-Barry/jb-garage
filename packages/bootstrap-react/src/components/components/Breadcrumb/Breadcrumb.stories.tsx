import { Meta, StoryFn } from '@storybook/react'

import BreadcrumbItem from './BreadcrumbItem'
import BreadcrumbList from './BreadcrumbList'
import Breadcrumbs from './Breadcrumbs'

const meta: Meta = {
  title: 'Breadcrumb',
  tags: ['autodocs']
}

export default meta
export const Example: StoryFn = () => {
  return (
    <div>
      <Breadcrumbs>
        <BreadcrumbList>
          <BreadcrumbItem brBreadcrumbItemActive>Home</BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumbs>

      <Breadcrumbs>
        <BreadcrumbList>
          <BreadcrumbItem>
            <a href="#">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem brBreadcrumbItemActive>Library</BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumbs>

      <Breadcrumbs>
        <BreadcrumbList>
          <BreadcrumbItem>
            <a href="#">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#">Library</a>
          </BreadcrumbItem>
          <BreadcrumbItem brBreadcrumbItemActive>Data</BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumbs>
    </div>
  )
}

export const Dividers: StoryFn = () => {
  return (
    <div>
      <Breadcrumbs brBreadcrumbsDivider="'>'">
        <BreadcrumbList>
          <BreadcrumbItem>
            <a href="#">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem brBreadcrumbItemActive>Library</BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumbs>
      <hr />
      <Breadcrumbs brBreadcrumbsDivider="url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;)">
        <BreadcrumbList>
          <BreadcrumbItem>
            <a href="#">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem brBreadcrumbItemActive>Library</BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumbs>
      <hr />
      <Breadcrumbs brBreadcrumbsDivider="''">
        <BreadcrumbList>
          <BreadcrumbItem>
            <a href="#">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem brBreadcrumbItemActive>Library</BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumbs>
    </div>
  )
}
