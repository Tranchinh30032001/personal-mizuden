import { format, parseISO, isValid, parse } from 'date-fns'
import { ja } from 'date-fns/locale'

/**
 * Formats a date into slash format (yyyy/MM/dd)
 * Handles multiple input formats:
 * - Japanese format (yyyy年MM月dd日)
 * - Timestamp format (yyyyMMddHHmmss)
 * - ISO string
 * - Date object
 * - yyyy/MM/dd string
 *
 * @param value - The date input in various formats
 * @returns {string} Formatted date in yyyy/MM/dd format or empty string if invalid
 */
export const formatDateToSlashFormat = (value) => {
  if (!value) return '' // Return empty string if value is null, undefined, or empty

  let date = null

  if (typeof value === 'string') {
    // Case 1: Check if value is already in "yyyy/MM/dd" format
    const slashFormatPattern = /^\d{4}\/\d{2}\/\d{2}$/
    if (slashFormatPattern.test(value)) {
      return value // If already formatted, return as is
    }

    // Case 2: If value is in "yyyyMMddHHmmss" format, parse it
    if (/^\d{14}$/.test(value)) {
      date = parse(value, 'yyyyMMddHHmmss', new Date())
    } else {
      // Case 3: Try parsing using the Date constructor
      date = new Date(value)

      // Case 4: If invalid, try parsing as an ISO string
      if (isNaN(date.getTime())) {
        date = parseISO(value)
      }

      // Case 5: If still invalid, try parsing as "yyyy/MM/dd"
      if (!isValid(date)) {
        date = parse(value, 'yyyy/MM/dd', new Date())
      }
    }
  } else if (value instanceof Date) {
    date = value
  }

  // If date is still invalid, return empty string
  if (!date || !isValid(date)) return ''

  // Format the date to slash format: yyyy/MM/dd
  return format(date, 'yyyy/MM/dd', { locale: ja })
}
