import { Meta, StoryFn } from '@storybook/react'

import PageItem from './PageItem'
import PageLink from './PageLink'
import Pagination from './Pagination'

const meta: Meta = {
  title: 'Pagination',
  tags: ['autodocs']
}

export default meta

export const Overview: StoryFn = () => {
  return (
    <nav aria-label="Page navigation example">
      <Pagination>
        <PageItem>
          <PageLink href="#">Previous</PageLink>
        </PageItem>
        <PageItem>
          <PageLink href="#">1</PageLink>
        </PageItem>
        <PageItem>
          <PageLink href="#">2</PageLink>
        </PageItem>
        <PageItem>
          <PageLink href="#">3</PageLink>
        </PageItem>
        <PageItem>
          <PageLink href="#">Next</PageLink>
        </PageItem>
      </Pagination>
    </nav>
  )
}

export const WorkingWithIcons: StoryFn = () => {
  return (
    <nav aria-label="Page navigation example">
      <Pagination>
        <PageItem>
          <PageLink href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </PageLink>
        </PageItem>
        <PageItem>
          <PageLink href="#">1</PageLink>
        </PageItem>
        <PageItem>
          <PageLink href="#">2</PageLink>
        </PageItem>
        <PageItem>
          <PageLink href="#">3</PageLink>
        </PageItem>
        <PageItem>
          <PageLink href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </PageLink>
        </PageItem>
      </Pagination>
    </nav>
  )
}

export const DisabledAndActiveStates: StoryFn = () => {
  return (
    <div>
      <nav aria-label="...">
        <Pagination>
          <PageItem brPageItemDisabled>
            <PageLink>Previous</PageLink>
          </PageItem>
          <PageItem>
            <PageLink href="#">1</PageLink>
          </PageItem>
          <PageItem brPageItemActive aria-current="page">
            <PageLink href="#">2</PageLink>
          </PageItem>
          <PageItem>
            <PageLink href="#">3</PageLink>
          </PageItem>
          <PageItem>
            <PageLink href="#">Next</PageLink>
          </PageItem>
        </Pagination>
      </nav>
      <hr />
      <nav aria-label="...">
        <Pagination>
          <PageItem brPageItemDisabled>
            <PageLink as="span">Previous</PageLink>
          </PageItem>
          <PageItem>
            <PageLink href="#">1</PageLink>
          </PageItem>
          <PageItem brPageItemActive aria-current="page">
            <PageLink as="span">2</PageLink>
          </PageItem>
          <PageItem>
            <PageLink href="#">3</PageLink>
          </PageItem>
          <PageItem>
            <PageLink href="#">Next</PageLink>
          </PageItem>
        </Pagination>
      </nav>
    </div>
  )
}

export const Sizing: StoryFn = () => {
  return (
    <div>
      <nav aria-label="...">
        <Pagination brPaginationSize="lg">
          <PageItem brPageItemActive aria-current="page">
            <PageLink as="span">1</PageLink>
          </PageItem>
          <PageItem>
            <PageLink href="#">2</PageLink>
          </PageItem>
          <PageItem>
            <PageLink href="#">3</PageLink>
          </PageItem>
        </Pagination>
      </nav>
      <hr />
      <nav aria-label="...">
        <Pagination brPaginationSize="sm">
          <PageItem brPageItemActive aria-current="page">
            <PageLink as="span">1</PageLink>
          </PageItem>
          <PageItem>
            <PageLink href="#">2</PageLink>
          </PageItem>
          <PageItem>
            <PageLink href="#">3</PageLink>
          </PageItem>
        </Pagination>
      </nav>
    </div>
  )
}

export const Alignment: StoryFn = () => {
  return (
    <div>
      <nav aria-label="Page navigation example">
        <Pagination className="justify-content-center">
          <PageItem brPageItemDisabled>
            <PageLink>Previous</PageLink>
          </PageItem>
          <PageItem>
            <PageLink href="#">1</PageLink>
          </PageItem>
          <PageItem>
            <PageLink href="#">2</PageLink>
          </PageItem>
          <PageItem>
            <PageLink href="#">3</PageLink>
          </PageItem>
          <PageItem>
            <PageLink href="#">Next</PageLink>
          </PageItem>
        </Pagination>
      </nav>
      <hr />
      <nav aria-label="Page navigation example">
        <Pagination className="justify-content-end">
          <PageItem brPageItemDisabled>
            <PageLink>Previous</PageLink>
          </PageItem>
          <PageItem>
            <PageLink href="#">1</PageLink>
          </PageItem>
          <PageItem>
            <PageLink href="#">2</PageLink>
          </PageItem>
          <PageItem>
            <PageLink href="#">3</PageLink>
          </PageItem>
          <PageItem>
            <PageLink href="#">Next</PageLink>
          </PageItem>
        </Pagination>
      </nav>
    </div>
  )
}
