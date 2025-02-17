import ContentContainer from '@/components/containers/ContentContainer'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import Button from '@/components/ui/Button/Button'
// import Select from '@/components/ui/Select/Select'
// import Title from '@/components/ui/Title/Title'
// import { createWorkSchema } from '@/schemas/work/create'
// import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import PropertyInfoSection from './components/PropertyInfoSection'
import HouseSpecSection from './components/HouseSpecSection'
import ScheduleSection from './components/ScheduleSection'

const RegisterWork = () => {
  const form = useForm()
  // const form = useForm({
  //   resolver: zodResolver(createWorkSchema),
  //   defaultValues: {
  //     status: '仮登録',

  //   }
  // })

  const onSubmit = form.handleSubmit(() => {
    // console.log(data)
  })

  return (
    <>
      <Breadcrumbs
        crumbs={[
          { to: '/portal', title: 'ポータル' },
          { to: '/work', title: '案件一覧' },
          { to: '/work/create', title: '案件登録' }
        ]}
      />
      <ContentContainer className='flex flex-col p-0'>
        <FormProvider {...form}>
          <form onSubmit={onSubmit} className='flex-1 flex flex-col'>
            <div className='flex-1 grid grid-cols-11 p-4 gap-8'>
              <div className='col-span-4'>
                <PropertyInfoSection />
              </div>
              <div className='col-span-3'>
                <HouseSpecSection />
              </div>
              <div className='col-span-4'>
                <ScheduleSection />
              </div>
            </div>

            <div className='mt-auto flex gap-2 px-3.5 py-2.5 bg-bottom-button-container'>
              <Button className='w-24 border-none' type='submit'>
                登 録
              </Button>
              <Button className='w-28 border-none bg-gray-container text-gray-primary hover:bg-white'>
                キャンセル
              </Button>
            </div>
          </form>
        </FormProvider>
      </ContentContainer>
    </>
  )
}

export default RegisterWork
