/* eslint-disable indent */
import { useState, useEffect } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import Radio from '../ui/Radio/Radio'
import Select from '../ui/Select/Select'
import Input from '../ui/Input/Input'
import DropdownInput from '../ui/Dropdown/DropdownInput'
import SectionWrapper from '../containers/SectionWrapper'

// House types
const HOUSE_TYPES = {
  ASSIST: 'アシストハウス',
  SPACE: 'スペースハウス'
}

const MAX_FLOOR = 20
const MIN_FLOOR = 5

// Default values
const defaultValues = {
  houseType: 'ASSIST',
  floors: '1',
  size: '54',
  number1Floor: '',
  number2Floor: '',
  note: ''
}

export const HouseInfo = ({ label }) => {
  // Form setup
  const methods = useForm({
    defaultValues
  })

  const { watch, setValue } = methods
  const [isNoteManuallyEdited, setIsNoteManuallyEdited] = useState(false)

  // Watch form values
  const houseType = watch('houseType')
  const floors = watch('floors')
  const size = watch('size')
  const buildingCount = watch('buildingCount')

  // Get floor options based on house type
  const getFloorOptions = () => {
    return houseType === 'ASSIST'
      ? [
          { value: '1', label: '1階' },
          { value: '2', label: '2階' }
        ]
      : [
          { value: '2', label: '2階' },
          { value: '3', label: '3階' }
        ]
  }

  // Generate note based on configurations
  const generateNote = () => {
    if (houseType === 'ASSIST') {
      const floorSuffix = floors === '1' ? 'A' : 'B'
      return `${size}-${buildingCount}${floorSuffix}`
    } else {
      return `SP-${floors}`
    }
  }

  // Handle house type change
  useEffect(() => {
    // Reset floors when house type changes
    setValue('floors', houseType === 'ASSIST' ? '1' : '2')

    // Reset note manual edit flag
    setIsNoteManuallyEdited(false)
  }, [houseType, setValue])

  // Update note when configurations change
  useEffect(() => {
    if (!isNoteManuallyEdited) {
      setValue('note', generateNote())
    }
  }, [houseType, floors, size, buildingCount, isNoteManuallyEdited, setValue, generateNote])

  const options = Array.from({ length: MAX_FLOOR - MIN_FLOOR + 1 }, (_, i) => MIN_FLOOR + i)

  return (
    <FormProvider {...methods}>
      <SectionWrapper label={label}>
        {/* House Type Selection */}
        <Radio
          name='houseType'
          label='ハウス種類'
          direction='col'
          options={[
            { value: 'ASSIST', label: HOUSE_TYPES.ASSIST },
            { value: 'SPACE', label: HOUSE_TYPES.SPACE }
          ]}
        />

        <div className='flex items-center gap-4'>
          {/* Floor Selection */}
          <Select name='floors' label='階数' options={getFloorOptions()} />

          {/* Size Selection */}
          <Select
            name='size'
            label='サイズ'
            options={[
              { value: '54', label: '54型' },
              { value: '72', label: '72型' }
            ]}
            disabled={houseType === 'SPACE'}
          />
        </div>

        <div className='flex items-center gap-4'>
          {/* Floor Selection */}
          <DropdownInput
            name='number1Floor'
            label='棟数（1F）'
            options={options}
            disabled={houseType === 'SPACE'}
          />

          {/* Size Selection */}
          <DropdownInput
            name='number2Floor'
            label='棟数（2F）'
            options={options}
            disabled={houseType === 'SPACE'}
          />
        </div>

        {/* Notes */}
        <Input
          name='note'
          label='ハウス備考'
          placeholder='House notes'
          onChange={(e) => {
            setValue('note', e.target.value)
            setIsNoteManuallyEdited(true)
          }}
        />
      </SectionWrapper>
    </FormProvider>
  )
}

export default HouseInfo
