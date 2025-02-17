import Breadcrumbs from '@/components/shared/Breadcrumbs'
import { MemoryRouter } from 'react-router-dom'

export default {
  title: 'Components/Shared/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
}

const Template = (args) => <Breadcrumbs {...args} />

export const Default = Template.bind({}, {
  crumbs: [
    { title: 'Home', to: '/', state: 1 },
    { title: 'Products', to: '/products', state: 2 },
    { title: 'Product 1', to: '/products/1', state: 3 }
  ]
})
