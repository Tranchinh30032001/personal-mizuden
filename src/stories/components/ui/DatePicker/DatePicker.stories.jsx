import DatePicker from '@/components/ui/DateTime/DatePicker'
import { useForm, FormProvider } from 'react-hook-form'
export default {
  title: 'Components/DatePicker',
  component: DatePicker,
  argTypes: {
    disabled: { control: 'boolean' }
  }
}

const Template = (args) => {
  const methods = useForm()

  return (
    <FormProvider {...methods}>
      <form>
        <DatePicker {...args} />
      </form>
    </FormProvider>
  )
}

export const Default = Template.bind({})
Default.args = {
  name: 'date'
}

export const Disabled = Template.bind({})
Disabled.args = {
  name: 'date',
  disabled: true
}
