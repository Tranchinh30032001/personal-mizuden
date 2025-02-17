/* eslint-disable no-unused-vars */
import FieldWrapper from '@/components/containers/FieldWrapper'
import { useState, useRef, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { FaAngleDown } from 'react-icons/fa'

const DropdownInput = ({ name, label, options }) => {
  const { register, setValue, watch } = useFormContext()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const value = watch(name)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleSelectOption = (option) => {
    setValue(name, option.toString())
    setIsOpen(false)
  }

  return (
    <div className='relative w-full' ref={dropdownRef}>
      <FieldWrapper label={label} name={name}>
        <input
          {...register(name)}
          onFocus={() => setIsOpen(false)}
          className='inputCustom pr-10'
          type='text'
        />
        <button
          type='button'
          className='absolute right-0 top-3 px-2 py-4'
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaAngleDown size={16} />
        </button>
      </FieldWrapper>
      {isOpen && (
        <ul className='absolute z-10 w-full mt-1 max-h-60 overflow-auto bg-white border border-gray-300 rounded shadow-lg'>
          {options.map((option) => (
            <li
              key={option}
              className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
              onClick={() => handleSelectOption(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DropdownInput
