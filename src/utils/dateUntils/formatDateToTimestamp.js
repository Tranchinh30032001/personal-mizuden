import { format, parseISO, isValid } from 'date-fns'

/**
 * Converts a date value into "yyyyMMddHHmmss" format.
 *
 * @param value - The date input, which can be a string or Date object.
 * @returns The formatted string in "yyyyMMddHHmmss" format or an empty string if invalid.
 */
export const formatDateToTimestamp = (value) => {
  if (!value) return '' // Handle null/undefined cases

  let date = null

  if (typeof value === 'string') {
    // Try parsing using the Date constructor
    date = new Date(value)

    // If invalid, try parsing as an ISO string
    if (isNaN(date.getTime())) {
      date = parseISO(value)
    }
  } else if (value instanceof Date) {
    date = value
  }

  // If date is still invalid, return an empty string
  if (!date || !isValid(date)) return ''

  // Convert to "yyyyMMddHHmmss" format
  return format(date, 'yyyyMMddHHmmss')
}
