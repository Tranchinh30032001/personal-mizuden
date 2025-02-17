import Checkbox from '@/components/ui/Checkbox/Checkbox'
import { FormProvider, useForm } from 'react-hook-form'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
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
    defaultValues: { exampleCheckbox: [] }
  })
  return <FormProvider {...methods}>{children}</FormProvider>
}

// Template chung cho các Story
const Template = (args) => (
  <FormWrapper>
    <Checkbox {...args} />
  </FormWrapper>
)

// Story mặc định
export const Default = Template.bind({})
Default.args = {
  label: 'Choose options',
  name: 'exampleCheckbox',
  options: [
    { label: 'Option A', value: 'A' },
    { label: 'Option B', value: 'B' }
  ],
  direction: 'row'
}

// Story hiển thị với lỗi
export const WithError = Template.bind({})
WithError.args = {
  ...Default.args,
  name: 'errorCheckbox'
}
WithError.decorators = [
  (Story) => (
    <FormWrapper>
      <div className='text-red-500'>
        <Story />
        <p className='errorMessage'>You must select at least one option</p>
      </div>
    </FormWrapper>
  )
]

// Story với nhiều tùy chọn (10 lựa chọn, hiển thị theo cột)
export const ManyOptionsRow = Template.bind({})
ManyOptionsRow.args = {
  label: 'Choose multiple option222222222222222222222s',
  name: 'manyOptionsCheckbox',
  options: Array.from({ length: 3 }, (_, i) => ({
    label: `Option ${i + 1}`,
    value: `${i + 1}`
  })),
  direction: 'row'
}

// Story hiển thị theo cột
export const ColLayout = Template.bind({})
ColLayout.args = {
  ...Default.args,
  direction: 'col'
}

// Story với nhiều tùy chọn (10 lựa chọn, hiển thị theo cột)
export const ManyOptionsCol = Template.bind({})
ManyOptionsCol.args = {
  label: 'Choose multiple options111111111111111111111111111',
  name: 'manyOptionsCheckbox',
  options: Array.from({ length: 10 }, (_, i) => ({
    label: `Option ${i + 1}`,
    value: `${i + 1}`
  })),
  direction: 'col'
}
