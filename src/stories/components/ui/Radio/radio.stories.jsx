import Radio from '@/components/ui/Radio/Radio'
import { FormProvider, useForm } from 'react-hook-form'

export default {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {
    label: { control: 'text' },
    name: { control: 'text' },
    options: { control: 'object' },
    direction: { control: 'radio', options: ['row', 'col'] },
    className: { control: 'text' }
  }
}

// Wrapper cung cấp React Hook Form context
const FormWrapper = ({ children }) => {
  const methods = useForm({
    defaultValues: { exampleRadio: '' }
  })
  return <FormProvider {...methods}>{children}</FormProvider>
}

// Template chung cho các Story
const Template = (args) => (
  <FormWrapper>
    <Radio {...args} />
  </FormWrapper>
)

// Story mặc định
export const Default = Template.bind({})
Default.args = {
  label: 'Choose an option',
  name: 'exampleRadio',
  options: [
    { label: 'Option A', value: 'A' },
    { label: 'Option B', value: 'B' }
  ],
  direction: 'col'
}

// Story với lỗi hiển thị
export const WithError = Template.bind({})
WithError.args = {
  ...Default.args,
  name: 'errorRadio'
}
WithError.decorators = [
  (Story) => (
    <FormWrapper>
      <div className='text-red-500'>
        <Story />
        <p className='errorMessage'>This field is required</p>
      </div>
    </FormWrapper>
  )
]

// Story hiển thị theo hàng ngang
export const RowLayout = Template.bind({})
RowLayout.args = {
  ...Default.args,
  direction: 'row'
}

// Story với nhiều option (3 lựa chọn, hiển thị theo cột)
export const ThreeOptionsCol = Template.bind({})
ThreeOptionsCol.args = {
  label: 'Select one',
  name: 'threeOptionsRadio',
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' }
  ],
  direction: 'col'
}

// Story với nhiều option (5 lựa chọn, hiển thị theo cột)
export const FiveOptionsCol = Template.bind({})
FiveOptionsCol.args = {
  label: 'Pick your favorite',
  name: 'fiveOptionsRadio',
  options: [
    { label: 'Option A', value: 'A' },
    { label: 'Option B', value: 'B' },
    { label: 'Option C', value: 'C' },
    { label: 'Option D', value: 'D' },
    { label: 'Option E', value: 'E' }
  ],
  direction: 'col'
}

// Story với nhiều option (10 lựa chọn, hiển thị theo cột)
export const ManyOptionsCol = Template.bind({})
ManyOptionsCol.args = {
  label: 'Choose one of many options',
  name: 'manyOptionsRadioCol',
  options: Array.from({ length: 10 }, (_, i) => ({
    label: `Option ${i + 1}`,
    value: `${i + 1}`
  })),
  direction: 'col'
}
