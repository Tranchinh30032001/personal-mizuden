import { memo } from 'react'

const WeekDayHeader = () => {
  return (
    <div className='flex items-center'>
      <div className='w-12 border-b-[2px] border-gray-400 h-12'></div>
      <div className='week-day-header flex-1'>
        {['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'].map(
          (day, index) => (
            <div key={index} className='week-day-cell font-semibold'>
              {day}
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default memo(WeekDayHeader)
