/**
 * Generates time options in 15-minute intervals for a 24-hour period
 * Example: "00:00", "00:15", "00:30", "00:45", "01:00", etc.
 *
 * @returns {Array<{value: string, label: string}>} Array of time options
 * value format: "HHMMSS" (e.g., "000000")
 * label format: "HH:MM" (e.g., "00:00")
 */
export const generateQuarterHourOptions = () =>
  Array.from({ length: 24 * 4 }, (_, i) => {
    const hour = Math.floor(i / 4)
    const minute = (i % 4) * 15
    return {
      value: `${hour.toString().padStart(2, '0')}${minute.toString().padStart(2, '0')}00`,
      label: `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
    }
  })

/**
 * Generates an array of years within a specified range
 *
 * @param {number} fromYear - Start year (inclusive)
 * @param {number} toYear - End year (exclusive)
 * @returns {Array<number>} Array of years
 */
export const generateYears = (fromYear, toYear) => {
  const years = []
  for (let year = fromYear; year < toYear; year++) {
    years.push(year)
  }
  return years
}

/**
 * Generates hour options for a 24-hour period (00-23)
 * Used in time picker components
 *
 * @returns {Array<{value: string, label: string}>} Array of hour options
 * Both value and label are padded with leading zeros (e.g., "00", "01", ..., "23")
 */
export const generateHourOptions = () =>
  Array.from({ length: 24 }, (_, i) => ({
    value: i.toString().padStart(2, '0'),
    label: i.toString().padStart(2, '0')
  }))

/**
 * Generates minute options in 5-minute intervals from 00 to 55
 * Used in time picker components for selecting minutes
 *
 * @returns {Array<{value: string, label: string}>} Array of minute options where:
 * - value: "mmss" format (e.g., "0000", "0500", ..., "5500")
 * - label: "mm" format (e.g., "00", "05", ..., "55")
 */
export const generateMinuteOptions = () =>
  Array.from({ length: 12 }, (_, i) => {
    const minute = i * 5
    return {
      value: `${minute.toString().padStart(2, '0')}00`, // Add "00" seconds
      label: minute.toString().padStart(2, '0') // Just show minutes
    }
  })

/**
 * Splits a datetime string into separate date and time components
 * @param {string} value - Input datetime string (YYYYMMDDHHMMSS, YYYYMMDD, or HHMMSS format)
 * @returns {Object} Object containing separated date and time strings
 */
export const parseDateTime = (value = '') => {
  // Return empty strings for both date and time if no value provided
  if (!value) return { date: '', time: '' }

  // Check if string contains only time (HHMMSS format - 6 digits)
  const isTimeOnly = value.length === 6
  // Check if string contains only date (YYYYMMDD format - 8 digits)
  const isDateOnly = value.length === 8
  // Check if string contains both date and time (YYYYMMDDHHMMSS format - 14 digits)
  const isDateTime = value.length === 14

  // Handle time-only format: return empty date and full time string
  if (isTimeOnly) return { date: '', time: value }
  // Handle date-only format: return full date string and empty time
  if (isDateOnly) return { date: value, time: '' }
  // Handle full datetime format: split into date (first 8 chars) and time (remaining 6 chars)
  if (isDateTime)
    return {
      date: value.slice(0, 8),
      time: value.slice(8)
    }

  // Return empty strings if input format doesn't match any expected format
  return { date: '', time: '' }
}

