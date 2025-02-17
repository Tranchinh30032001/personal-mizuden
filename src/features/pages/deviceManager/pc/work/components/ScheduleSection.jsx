import SectionWrapper from '@/components/containers/SectionWrapper'
import DatePicker from '@/components/ui/DateTime/DatePicker'
import DateRangePicker from '@/components/ui/DateTime/DateRangePicker'
import HourMinutePicker from '@/components/ui/DateTime/HourMinutePicker'
import Input from '@/components/ui/Input/Input'
import Radio from '@/components/ui/Radio/Radio'
import Select from '@/components/ui/Select/Select'
import Textarea from '@/components/ui/Textarea/Textarea'
import Title from '@/components/ui/Title/Title'

const ScheduleSection = () => {
  return (
    <section>
      <SectionWrapper label='日程情報'>
        <Select
          name='1'
          label='建方日程調整状況'
          options={[
            { value: 0, label: '仮登録' },
            { value: 1, label: '仮登録1' }
          ]}
          className='w-40'
        />
        <DateRangePicker label='建方希望日' nameFrom='1' nameTo='2' className='w-40' />
        <Input label='建方希望日 備考' name='input' />
        <Radio
          label='朝礼'
          name='radio1'
          options={[
            { label: 'Option 1', value: '1' },
            { label: 'Option 2', value: '2' }
          ]}
        />
        <Radio
          label='朝礼'
          name='radio2'
          options={[
            { label: 'Option 1', value: '1' },
            { label: 'Option 2', value: '2' },
            { label: 'Option 3', value: '3' }
          ]}
        />
        <Radio
          label='教育実施時間'
          name='radio3'
          options={[
            { label: 'Option 1', value: '1' },
            { label: 'Option 2', value: '2' },
            { label: 'Option 3', value: '3' }
          ]}
        >
          <HourMinutePicker name='33j' />
        </Radio>

        <DatePicker name='datepicker' label='返却予定日' className='w-40' />

        <div>
          <Title>連絡事項</Title>
          <Textarea name='texarea' className='mt-1' />
        </div>
      </SectionWrapper>
    </section>
  )
}

export default ScheduleSection
