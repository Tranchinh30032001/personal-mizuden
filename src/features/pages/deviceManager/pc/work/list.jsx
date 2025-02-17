/* eslint-disable no-console */
import { FormProvider, useForm } from 'react-hook-form'
import 'react-datepicker/dist/react-datepicker.css'
import ContentContainer from '@/components/containers/ContentContainer'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import Title from '@/components/ui/Title/Title'
import DatePicker from '@/components/ui/DateTime/DatePicker'
import Input from '@/components/ui/Input/Input'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const workSchena = z.object({
  test: z.string(),
  date: z.date({
    required_error: '日付を選択してください', // Date is required
    invalid_type_error: '有効な日付を入力してください' // Invalid date format
  })
})

const Work = () => {
  const form = useForm({
    resolver: zodResolver(workSchena),
    defaultValues: {
      date: null,
      test: ''
    }
  })

  const onSubmit = form.handleSubmit((data) => {
    console.log(data)
  })

  return (
    <>
      <Breadcrumbs
        crumbs={[
          { to: '/portal', title: 'ポータル' },
          { to: '/search', title: '案件一覧' }
        ]}
      />
      <ContentContainer>
        <Title>絞込み条件</Title>
        <FormProvider {...form}>
          <form onSubmit={onSubmit}>
            <Input name='test' type='text' className='w-48' />
            <DatePicker name='date' />
            <button type='submit'>Test</button>
          </form>
        </FormProvider>
      </ContentContainer>
    </>
  )
}

export default Work
