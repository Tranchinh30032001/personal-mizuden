import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import Button from '../ui/Button/Button'
import FieldWrapper from '../containers/FieldWrapper'

/**
 * AddressPostCode component allows users to input a postal code, fetch the corresponding address
 * from an external API, and display the address in a read-only input field.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.label - The name of the postal code field in the form context
 * @param {string} props.nameZip - The name of the postal code field in the form context
 * @param {string} props.nameAddress - The name of the address field in the form context
 * @description
 * - The component uses `useFormContext` to interact with form state.
 * - It validates and formats the postal code input.
 * - It fetches the address from the ZipCloud API based on the postal code.
 * - It handles loading state and displays appropriate messages for errors or missing addresses.
 */
const AddressPostCode = ({ label, nameZip, nameAddress }) => {
  const { setValue, watch } = useFormContext()
  const [isFetching, setIsFetching] = useState(false)
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)

  /**
   * Handles changes to the postal code input field.
   * - Removes any non-numeric characters from the input.
   * - Limits the input to a maximum of 7 digits.
   * - Updates the form state with the cleaned and truncated postal code.
   * - Enables the fetch button only if the postal code has exactly 7 digits.
   */
  const handleZipChange = (e) => {
    let value = e.target.value.replace(/\D/g, '') // Only keep numeric characters
    if (value.length > 7) value = value.slice(0, 7) // Limit to 7 digits
    setValue(nameZip, value) // Update form state
    setIsButtonDisabled(value.length !== 7) // Enable button if exactly 7 digits
  }

  /**
   * Handles the blur event on the ZIP code input field.
   * Formats the ZIP code to include a hyphen after the third digit if the length is 7.
   */
  const handleZipBlur = () => {
    let value = watch(nameZip)
    if (value.length === 7) {
      setValue(nameZip, `${value.slice(0, 3)}-${value.slice(3)}`)
    }
  }

  /**
   * Handles the focus event on the ZIP code input field.
   * Removes any hyphen characters from the ZIP code.
   */
  const handleZipFocus = () => {
    let value = watch(nameZip)
    setValue(nameZip, value.replace('-', ''))
  }
  /**
   * Fetches the address based on the provided zip code.
   *
   * This function retrieves the address information from the ZipCloud API using the zip code
   * obtained from the `watch` function. It updates the address field with the fetched address
   * or an appropriate error message if the address is not found or an error occurs during the fetch.
   */
  const fetchAddress = async () => {
    const zipCode = watch(nameZip).replace('-', '')
    setIsFetching(true)
    try {
      const response = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipCode}`)
      const data = await response.json()
      if (data.results && data.results.length > 0) {
        const { address1, address2, address3 } = data.results[0]
        setValue(nameAddress, `${address1}${address2}${address3}`)
      } else {
        setValue(nameAddress, '住所が見つかりません')
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setValue(nameAddress, 'エラーが発生しました')
    } finally {
      setIsFetching(false)
    }
  }

  return (
    <FieldWrapper label={label}>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
          <input
            type='text'
            value={watch(nameZip) || ''}
            onChange={handleZipChange}
            onBlur={handleZipBlur}
            onFocus={handleZipFocus}
            placeholder='郵便番号'
            className='w-24 inputCustom'
          />
          <Button
            onClick={fetchAddress}
            disabled={isButtonDisabled || isFetching}
            className='w-24 !btn-sm'
          >
            {isFetching ? '取得中...' : '住所引用'}
          </Button>
        </div>
        <input type='text' value={watch(nameAddress) || ''} disabled className='inputCustom' />
      </div>
    </FieldWrapper>
  )
}

export default AddressPostCode
