import TimePicker from '@/components/ui/DateTime/TimePicker'
import { useForm, FormProvider } from 'react-hook-form'

export default {
  title: 'Components/TimePicker',
  component: TimePicker,
  argTypes: {
    label: { control: 'text' },
    name: { control: 'text' },
    className: { control: 'text' },
    disabled: { control: 'boolean' },
    options: { control: 'object' }
  }
}

const Template = (args) => {
  const methods = useForm({
    defaultValues: {
      [args.name]: args.options?.[0]?.value || ''
    }
  })

  return (
    <FormProvider {...methods}>
      <TimePicker {...args} />
    </FormProvider>
  )
}

export const Default = Template.bind({})
Default.args = {
  label: 'Chọn giờ',
  name: 'time',
  options: [
    { value: '08:00', label: '08:00' },
    { value: '09:00', label: '09:00' },
    { value: '10:00', label: '10:00' }
  ]
}
