import Title from '@/components/ui/Title/Title'

export default {
  title: 'Components/ui/Title',
  component: Title,
  tags: ['autodocs']
}

const Template = (args) => <Title {...args} />

export const Default = Template.bind({}, {
  children: 'Nothing special'
})
