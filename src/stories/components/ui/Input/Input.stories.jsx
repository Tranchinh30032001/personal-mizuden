import Input from '@/components/ui/Input/Input'

export default {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: {
        type: 'radio',
        options: ['col', 'row']
      }
    },
    label: {
      control: 'text'
    },
    className: {
      control: 'text'
    }
  }
}

const Template = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Username',
  direction: 'col'
}

export const WithCustomClasses = Template.bind({})
WithCustomClasses.args = {
  label: 'Email',
  direction: 'row',
  className: 'border-blue-500'
}

export const WithCustomClassesLong = Template.bind({})
WithCustomClassesLong.args = {
  label: 'Email11111111111111111111122222222222222222222',
  direction: 'row'
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Password',
  direction: 'col',
  disabled: true
}
