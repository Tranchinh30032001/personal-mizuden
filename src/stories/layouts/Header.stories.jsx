import Header from '@/layouts/Header'

export default {
  title: 'Layouts/Header',
  component: Header,
  tags: ['autodocs']
}

const Template = (args) => <Header {...args} />

export const Default = Template.bind({})
