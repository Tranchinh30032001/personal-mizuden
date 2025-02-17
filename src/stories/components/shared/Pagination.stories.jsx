import { useState } from 'react'
import Pagination from '@/components/shared/Pagination'

export default {
  title: 'Components/Shared/Pagination',
  component: Pagination,
  tags: ['autodocs']
}

const Template = (args) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage || 1)
  return <Pagination {...args} currentPage={currentPage} setCurrentPage={setCurrentPage} />
}

export const Default = Template.bind({})
Default.args = {
  totalPage: 10
}

export const WithFewPages = Template.bind({})
WithFewPages.args = {
  totalPage: 5,
  currentPage: 3
}

export const OnFirstPage = Template.bind({})
OnFirstPage.args = {
  totalPage: 20
}

export const OnMiddlePage = Template.bind({})
OnMiddlePage.args = {
  totalPage: 10,
  currentPage: 4
}

export const OnMiddle2Page = Template.bind({})
OnMiddle2Page.args = {
  totalPage: 15,
  currentPage: 6
}

export const OnLastPage = Template.bind({})
OnLastPage.args = {
  totalPage: 10,
  currentPage: 10
}
