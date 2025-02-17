import { FormProvider, useForm } from 'react-hook-form'
import Select from '@/components/ui/Select/Select'

export default {
  title: 'Components/Select',
  component: Select,
  decorators: [
    (Story) => {
      const methods = useForm() // Tạo form context giả lập
      return (
        <FormProvider {...methods}>
          <Story />
        </FormProvider>
      )
    }
  ],
  args: {
    label: 'Select an option',
    name: 'exampleSelect',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' }
    ]
  }
}

// Tạo các biến thể (Stories)
export const Default = (args) => <Select {...args} />
export const WithPreselectedValue = (args) => <Select {...args} value='option2' />
