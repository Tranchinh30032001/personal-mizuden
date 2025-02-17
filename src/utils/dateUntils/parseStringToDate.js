import { parseISO, parse, isValid } from 'date-fns'

/**
 * Converts a date string into a Date object.
 *
 * @param value - The date input string in various formats.
 * @returns A Date object if valid, otherwise null.
 */
export const parseStringToDate = (value) => {
  // Case1: If value is already a Date object, return as is
  if (value instanceof Date) {
    return isValid(value) ? value : null
  }

  if (!value || typeof value !== 'string') return null

  let date = null

  // Case 2: Check if value is in "yyyyMMddHHmmss" format
  if (/^\d{14}$/.test(value)) {
    date = parse(value, 'yyyyMMddHHmmss', new Date())
  }
  // Case 3: Check if value is in "yyyy年MM月dd日" format
  else if (/^\d{4}年\d{2}月\d{2}日$/.test(value)) {
    date = parse(value, 'yyyy年MM月dd日', new Date())
  }
  // Case 4: Try parsing as an ISO string
  else {
    date = new Date(value)
    if (isNaN(date.getTime())) {
      date = parseISO(value)
    }
  }

  return isValid(date) ? date : null
}
