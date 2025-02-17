import { memo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Button from '@/components/ui/Button/Button'
import Select from '@/components/ui/Select/Select'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'
import { VIEW_CALENDAR_TYPE } from '@/constants/global'

const CalendarToolbar = ({ currentView, formatHeaderDate, handleViewChange, handleDateChange }) => {
  /* Initializes the form form using the `useForm` hook from `react-hook-form`*/
  const form = useForm({ defaultValues: { viewType: currentView } })

  // Define the options for the view type select dropdown
  const viewOptions = [
    { value: VIEW_CALENDAR_TYPE.WEEK, label: '週表示' }, // Weekly view option
    { value: VIEW_CALENDAR_TYPE.MONTH, label: '月表示' } // Monthly view option
  ]

  return (
    <div className='flex justify-between items-center pb-2'>
      <div className='flex items-center gap-2'>
        <Button className='text-white w-fit'>予定追加</Button>
        <Button className='text-white w-fit'>休み追加</Button>
        <Button onClick={() => handleDateChange('today')} className='bg-white text-black w-fit'>
          今日
        </Button>
        <Button
          onClick={() => handleDateChange('prev')}
          className='bg-white text-gray-primary w-fit'
        >
          <FaAngleLeft size={24} />
        </Button>
        <Button
          onClick={() => handleDateChange('next')}
          className='bg-white text-gray-primary w-fit'
        >
          <FaAngleRight size={24} />
        </Button>
        <span className='ml-4 text-xl font-semibold text-gray-primary'>{formatHeaderDate()}</span>
      </div>
      <div>
        <FormProvider {...form}>
          <Select
            name='viewType'
            options={viewOptions}
            className='w-32'
            onChange={(e) => handleViewChange(e.target.value)}
          />
        </FormProvider>
      </div>
    </div>
  )
}

export default memo(CalendarToolbar)
