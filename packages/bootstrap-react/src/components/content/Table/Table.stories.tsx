import type { Meta, StoryFn } from '@storybook/react'

import Table from './Table'
import { Fragment } from 'react'
import TableRow from './TableRow'
import TableData from './TableData'
import TableHeader from './TableHeader'
import TableHead from './TableHead'
import TableBody from './TableBody'
import TableFoot from './TableFoot'
import ResponsiveTableWrapper from './ResponsiveTableWrapper'

const meta: Meta<typeof Table> = {
  component: Table,
  tags: ['autodocs']
}

export default meta
export const Overview: StoryFn<typeof Table> = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader scope="col">#</TableHeader>
          <TableHeader scope="col">First</TableHeader>
          <TableHeader scope="col">Last</TableHeader>
          <TableHeader scope="col">Handle</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableHeader scope="row">1</TableHeader>
          <TableData>Mark</TableData>
          <TableData>Otto</TableData>
          <TableData>@mdo</TableData>
        </TableRow>
        <TableRow>
          <TableHeader scope="row">2</TableHeader>
          <TableData>Jacob</TableData>
          <TableData>Thornton</TableData>
          <TableData>@fat</TableData>
        </TableRow>
        <TableRow>
          <TableHeader scope="row">3</TableHeader>
          <TableData colSpan={2}>Larry the Bird</TableData>
          <TableData>@twitter</TableData>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export const Variants: StoryFn = () => {
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader scope="col">Class</TableHeader>
            <TableHeader scope="col">Heading</TableHeader>
            <TableHeader scope="col">Heading</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableHeader scope="row">Default</TableHeader>
            <TableData>Cell</TableData>
            <TableData>Cell</TableData>
          </TableRow>
          <TableRow className="table-primary">
            <TableHeader scope="row">Primary</TableHeader>
            <TableData>Cell</TableData>
            <TableData>Cell</TableData>
          </TableRow>
          <VariantExample variant="secondary" />
          <VariantExample variant="success" />
          <VariantExample variant="danger" />
          <VariantExample variant="warning" />
          <VariantExample variant="info" />
          <VariantExample variant="light" />
          <VariantExample variant="dark" />
        </TableBody>
      </Table>
    </div>
  )
}

function VariantExample(props: { variant: string }) {
  const { variant } = props
  return (
    <TableRow className={`table-${variant}`}>
      <TableHeader scope="row">
        {variant[0].toUpperCase()}
        {variant.slice(1)}
      </TableHeader>
      <TableData>Cell</TableData>
      <TableData>Cell</TableData>
    </TableRow>
  )
}

export const StripedRows: StoryFn = () => {
  return (
    <Table brStriped>
      <TableExampleContent />
    </Table>
  )
}

export const StripedColumns: StoryFn = () => {
  return (
    <Table brStripedCols>
      <TableExampleContent />
    </Table>
  )
}

export const StripedVariants: StoryFn = () => {
  return (
    <div>
      <Table className="table-dark" brStriped>
        <TableExampleContent />
      </Table>
      <hr />
      <Table className="table-dark" brStripedCols>
        <TableExampleContent />
      </Table>
      <hr />
      <Table className="table-success" brStriped>
        <TableExampleContent />
      </Table>
      <hr />
      <Table className="table-success" brStripedCols>
        <TableExampleContent />
      </Table>
    </div>
  )
}

export const HoverableRows: StoryFn = () => {
  return (
    <div>
      <Table brHover>
        <TableExampleContent />
      </Table>
      <hr />
      <Table className="table-dark" brHover>
        <TableExampleContent />
      </Table>
      <hr />
      <Table brHover brStriped>
        <TableExampleContent />
      </Table>
    </div>
  )
}

export const TableActive: StoryFn = () => {
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow brActive>
            <TableHeader scope="col">#</TableHeader>
            <TableHeader scope="col">First</TableHeader>
            <TableHeader scope="col">Last</TableHeader>
            <TableHeader scope="col">Handle</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableHeader scope="row">1</TableHeader>
            <TableData>Mark</TableData>
            <TableData>Otto</TableData>
            <TableData>@mdo</TableData>
          </TableRow>
          <TableRow>
            <TableHeader scope="row">2</TableHeader>
            <TableData>Jacob</TableData>
            <TableData>Thornton</TableData>
            <TableData>@fat</TableData>
          </TableRow>
          <TableRow>
            <TableHeader scope="row">3</TableHeader>
            <TableData colSpan={2} brActive>
              Larry the Bird
            </TableData>
            <TableData>@twitter</TableData>
          </TableRow>
        </TableBody>
      </Table>
      <hr />
      <Table className="table-dark">
        <TableHead>
          <TableRow brActive>
            <TableHeader scope="col">#</TableHeader>
            <TableHeader scope="col">First</TableHeader>
            <TableHeader scope="col">Last</TableHeader>
            <TableHeader scope="col">Handle</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableHeader scope="row">1</TableHeader>
            <TableData>Mark</TableData>
            <TableData>Otto</TableData>
            <TableData>@mdo</TableData>
          </TableRow>
          <TableRow>
            <TableHeader scope="row">2</TableHeader>
            <TableData>Jacob</TableData>
            <TableData>Thornton</TableData>
            <TableData>@fat</TableData>
          </TableRow>
          <TableRow>
            <TableHeader scope="row">3</TableHeader>
            <TableData colSpan={2} brActive>
              Larry the Bird
            </TableData>
            <TableData>@twitter</TableData>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export const BorderedTables: StoryFn = () => {
  return (
    <div>
      <Table brBordered>
        <TableExampleContent />
      </Table>
      <hr />
      <Table brBordered className="border-primary">
        <TableExampleContent />
      </Table>
    </div>
  )
}

export const TablesWithoutBorders: StoryFn = () => {
  return (
    <div>
      <Table brBorderless>
        <TableExampleContent />
      </Table>
      <hr />
      <Table className="table-dark" brBorderless>
        <TableExampleContent />
      </Table>
    </div>
  )
}

export const SmallTables: StoryFn = () => {
  return (
    <div>
      <Table brSmall>
        <TableExampleContent />
      </Table>
      <hr />
      <Table className="table-dark" brSmall>
        <TableExampleContent />
      </Table>
    </div>
  )
}

export const TableGroupDividers: StoryFn = () => {
  return (
    <Table>
      <TableExampleHead />
      <TableBody brGroupDivider>
        <TableRow>
          <TableHeader scope="row">1</TableHeader>
          <TableData>Mark</TableData>
          <TableData>Otto</TableData>
          <TableData>@mdo</TableData>
        </TableRow>
        <TableRow>
          <TableHeader scope="row">2</TableHeader>
          <TableData>Jacob</TableData>
          <TableData>Thornton</TableData>
          <TableData>@fat</TableData>
        </TableRow>
        <TableRow>
          <TableHeader scope="row">3</TableHeader>
          <TableData colSpan={2}>Larry the Bird</TableData>
          <TableData>@twitter</TableData>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export const Nesting: StoryFn = () => {
  return (
    <Table brStriped brBordered>
      <TableHead>
        <TableRow>
          <TableHeader scope="col">#</TableHeader>
          <TableHeader scope="col">First</TableHeader>
          <TableHeader scope="col">Last</TableHeader>
          <TableHeader scope="col">Handle</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableHeader scope="row">1</TableHeader>
          <TableData>Mark</TableData>
          <TableData>Otto</TableData>
          <TableData>@mdo</TableData>
        </TableRow>
        <TableRow>
          <TableData colSpan={4}>
            <Table brMargin={{ bottom: 0 }}>
              <TableHead>
                <TableRow>
                  <TableHeader scope="col">Header</TableHeader>
                  <TableHeader scope="col">Header</TableHeader>
                  <TableHeader scope="col">Header</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableHeader scope="row">A</TableHeader>
                  <TableData>First</TableData>
                  <TableData>Last</TableData>
                </TableRow>
                <TableRow>
                  <TableHeader scope="row">B</TableHeader>
                  <TableData>First</TableData>
                  <TableData>Last</TableData>
                </TableRow>
                <TableRow>
                  <TableHeader scope="row">C</TableHeader>
                  <TableData>First</TableData>
                  <TableData>Last</TableData>
                </TableRow>
              </TableBody>
            </Table>
          </TableData>
        </TableRow>
        <TableRow>
          <TableHeader scope="row">3</TableHeader>
          <TableData>Larry</TableData>
          <TableData>the Bird</TableData>
          <TableData>@twitter</TableData>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export const AnatomyTableHead: StoryFn = () => {
  return (
    <div>
      <Table>
        <TableHead className="table-light">
          <TableRow>
            <TableHeader scope="col">#</TableHeader>
            <TableHeader scope="col">First</TableHeader>
            <TableHeader scope="col">Last</TableHeader>
            <TableHeader scope="col">Handle</TableHeader>
          </TableRow>
        </TableHead>
        <TableExampleBody />
      </Table>
      <hr />
      <Table>
        <TableHead className="table-dark">
          <TableRow>
            <TableHeader scope="col">#</TableHeader>
            <TableHeader scope="col">First</TableHeader>
            <TableHeader scope="col">Last</TableHeader>
            <TableHeader scope="col">Handle</TableHeader>
          </TableRow>
        </TableHead>
        <TableExampleBody />
      </Table>
    </div>
  )
}

export const AnatomyTableFoot: StoryFn = () => {
  return (
    <Table>
      <TableHead className="table-light">
        <TableRow>
          <TableHeader scope="col">#</TableHeader>
          <TableHeader scope="col">First</TableHeader>
          <TableHeader scope="col">Last</TableHeader>
          <TableHeader scope="col">Handle</TableHeader>
        </TableRow>
      </TableHead>
      <TableExampleBody />
      <TableFoot>
        <TableRow>
          <TableData>Footer</TableData>
          <TableData>Footer</TableData>
          <TableData>Footer</TableData>
          <TableData>Footer</TableData>
        </TableRow>
      </TableFoot>
    </Table>
  )
}

export const Captions: StoryFn = () => {
  return (
    <div>
      <Table brSmall>
        <caption>List of users</caption>
        <TableExampleContent />
      </Table>
      <hr />
      <Table brCaptionTop>
        <caption>List of users</caption>
        <TableExampleContent />
      </Table>
    </div>
  )
}

export const ResponsiveTablesAlwaysResponsive: StoryFn = () => {
  return (
    <ResponsiveTableWrapper brResponsive>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader scope="col">#</TableHeader>
            <TableHeader scope="col">Heading</TableHeader>
            <TableHeader scope="col">Heading</TableHeader>
            <TableHeader scope="col">Heading</TableHeader>
            <TableHeader scope="col">Heading</TableHeader>
            <TableHeader scope="col">Heading</TableHeader>
            <TableHeader scope="col">Heading</TableHeader>
            <TableHeader scope="col">Heading</TableHeader>
            <TableHeader scope="col">Heading</TableHeader>
            <TableHeader scope="col">Heading</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableHeader scope="row">1</TableHeader>
            <TableData>Cell</TableData>
            <TableData>Cell</TableData>
            <TableData>Cell</TableData>
            <TableData>Cell</TableData>
            <TableData>Cell</TableData>
            <TableData>Cell</TableData>
            <TableData>Cell</TableData>
            <TableData>Cell</TableData>
            <TableData>Cell</TableData>
          </TableRow>
          <TableRow>
            <TableHeader scope="row">2</TableHeader>
            <TableData>Cell</TableData>
            <TableData>Cell</TableData>
            <TableData>Cell</TableData>
            <TableData>Cell</TableData>
            <TableData>Cell</TableData>
            <TableData>Cell</TableData>
            <TableData>Cell</TableData>
            <TableData>Cell</TableData>
            <TableData>Cell</TableData>
          </TableRow>
          <TableRow>
            <TableHeader scope="row">3</TableHeader>
            <TableData>Cell</TableData>
            <TableData>Cell</TableData>
            <TableData>Cell</TableData>
            <TableData>Cell</TableData>
            <TableData>Cell</TableData>
            <TableData>Cell</TableData>
            <TableData>Cell</TableData>
            <TableData>Cell</TableData>
            <TableData>Cell</TableData>
          </TableRow>
        </TableBody>
      </Table>
    </ResponsiveTableWrapper>
  )
}

export const ResponsiveTablesBreakpointSpecific: StoryFn = () => {
  return (
    <div>
      <ResponsiveTableWrapper brResponsiveSm>
        <ResponsiveTableExample />
      </ResponsiveTableWrapper>
      <hr />
      <ResponsiveTableWrapper brResponsiveMd>
        <ResponsiveTableExample />
      </ResponsiveTableWrapper>
      <hr />
      <ResponsiveTableWrapper brResponsiveLg>
        <ResponsiveTableExample />
      </ResponsiveTableWrapper>
      <hr />
      <ResponsiveTableWrapper brResponsiveXl>
        <ResponsiveTableExample />
      </ResponsiveTableWrapper>
      <hr />
      <ResponsiveTableWrapper brResponsiveXxl>
        <ResponsiveTableExample />
      </ResponsiveTableWrapper>
    </div>
  )
}

function TableExampleContent() {
  return (
    <Fragment>
      <TableExampleHead />
      <TableExampleBody />
    </Fragment>
  )
}

function TableExampleHead() {
  return (
    <TableHead>
      <TableRow>
        <TableHeader scope="col">#</TableHeader>
        <TableHeader scope="col">First</TableHeader>
        <TableHeader scope="col">Last</TableHeader>
        <TableHeader scope="col">Handle</TableHeader>
      </TableRow>
    </TableHead>
  )
}

function TableExampleBody() {
  return (
    <TableBody>
      <TableRow>
        <TableHeader scope="row">1</TableHeader>
        <TableData>Mark</TableData>
        <TableData>Otto</TableData>
        <TableData>@mdo</TableData>
      </TableRow>
      <TableRow>
        <TableHeader scope="row">2</TableHeader>
        <TableData>Jacob</TableData>
        <TableData>Thornton</TableData>
        <TableData>@fat</TableData>
      </TableRow>
      <TableRow>
        <TableHeader scope="row">3</TableHeader>
        <TableData colSpan={2}>Larry the Bird</TableData>
        <TableData>@twitter</TableData>
      </TableRow>
    </TableBody>
  )
}

function ResponsiveTableExample() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader scope="col">#</TableHeader>
          <TableHeader scope="col">Heading</TableHeader>
          <TableHeader scope="col">Heading</TableHeader>
          <TableHeader scope="col">Heading</TableHeader>
          <TableHeader scope="col">Heading</TableHeader>
          <TableHeader scope="col">Heading</TableHeader>
          <TableHeader scope="col">Heading</TableHeader>
          <TableHeader scope="col">Heading</TableHeader>
          <TableHeader scope="col">Heading</TableHeader>
          <TableHeader scope="col">Heading</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableHeader scope="row">1</TableHeader>
          <TableData>Cell</TableData>
          <TableData>Cell</TableData>
          <TableData>Cell</TableData>
          <TableData>Cell</TableData>
          <TableData>Cell</TableData>
          <TableData>Cell</TableData>
          <TableData>Cell</TableData>
          <TableData>Cell</TableData>
          <TableData>Cell</TableData>
        </TableRow>
        <TableRow>
          <TableHeader scope="row">2</TableHeader>
          <TableData>Cell</TableData>
          <TableData>Cell</TableData>
          <TableData>Cell</TableData>
          <TableData>Cell</TableData>
          <TableData>Cell</TableData>
          <TableData>Cell</TableData>
          <TableData>Cell</TableData>
          <TableData>Cell</TableData>
          <TableData>Cell</TableData>
        </TableRow>
        <TableRow>
          <TableHeader scope="row">3</TableHeader>
          <TableData>Cell</TableData>
          <TableData>Cell</TableData>
          <TableData>Cell</TableData>
          <TableData>Cell</TableData>
          <TableData>Cell</TableData>
          <TableData>Cell</TableData>
          <TableData>Cell</TableData>
          <TableData>Cell</TableData>
          <TableData>Cell</TableData>
        </TableRow>
      </TableBody>
    </Table>
  )
}