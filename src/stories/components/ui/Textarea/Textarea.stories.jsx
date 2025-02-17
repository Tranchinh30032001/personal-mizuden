import Textarea from '@/components/ui/Textarea/Textarea'
import { FormProvider, useForm } from 'react-hook-form'

export default {
  title: 'Components/Textarea',
  component: Textarea,
  decorators: [
    (Story) => {
      const methods = useForm({
        defaultValues: { message: '' },
        mode: 'onBlur'
      })

      return (
        <FormProvider {...methods}>
          <Story />
        </FormProvider>
      )
    }
  ]
}

const Template = (args) => <Textarea {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Your message',
  name: 'message',
  rows: 4,
  placeholder: 'Type something...'
}

export const WithError = Template.bind({})
WithError.args = {
  label: 'Your message',
  name: 'message',
  rows: 4,
  placeholder: 'Type something...',
  className: 'border-red-500'
}
