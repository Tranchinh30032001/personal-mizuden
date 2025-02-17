/* eslint-disable indent */
import { useCallback, useMemo, useState } from 'react'
import { format, startOfWeek, endOfWeek, startOfMonth, endOfMonth } from 'date-fns'
import { ja } from 'date-fns/locale'
import { VIEW_CALENDAR_TYPE } from '@/constants/global'

/**
 * Custom hook to manage calendar logic.
 *
 * @param {Object} calendarRef - A reference to the FullCalendar instance.
 * @returns {Object} An object containing the current view, current date, events, and various handlers and utilities for the calendar.
 * @property {string} currentView - The current view of the calendar (e.g., 'timeGridWeek', 'dayGridMonth').
 * @property {Date} currentDate - The current date displayed in the calendar.
 * @property {Array} events - The list of events in the calendar.
 * @property {Function} formatHeaderDate - Formats the header date based on the current view.
 * @property {Function} handleViewChange - Handles the change of the calendar view.
 * @property {Function} handleDateChange - Handles the date change for the calendar.
 * @property {Function} handleDateSelect - Handles the selection of a date range on the calendar.
 * @property {Function} handleEventClick - Handles the click event on a calendar event.
 * @property {Function} renderDayHeader - Renders a custom header for a day in the calendar.
 */
const useCalendarLogic = (calendarRef) => {
  const [currentView, setCurrentView] = useState(VIEW_CALENDAR_TYPE.WEEK)
  const [currentDate, setCurrentDate] = useState(new Date())
  const [events, setEvents] = useState([])

  /**
   * Calculates the date range based on the current view and date.
   *
   * @returns {Object} An object containing the start and end dates of the range.
   * @property {Date} start - The start date of the range. If the current view is 'timeGridWeek',
   * it returns the start of the week; otherwise, it returns the start of the month.
   * @property {Date} end - The end date of the range. If the current view is 'timeGridWeek',
   * it returns the end of the week; otherwise, it returns the end of the month.
   *
   * @param {string} currentView - The current view mode, either 'timeGridWeek' or another view.
   * @param {Date} currentDate - The current date used to calculate the range.
   */
  const dateRange = useMemo(
    () => ({
      start:
        currentView === VIEW_CALENDAR_TYPE.WEEK
          ? startOfWeek(currentDate, { locale: ja })
          : startOfMonth(currentDate),
      end:
        currentView === VIEW_CALENDAR_TYPE.WEEK
          ? endOfWeek(currentDate, { locale: ja })
          : endOfMonth(currentDate)
    }),
    [currentView, currentDate]
  )

  /**
   * Formats the header date based on the current view.
   *
   * If the current view is 'timeGridWeek', it returns a string representing the start and end dates
   * of the week in the format 'yyyy年M月d日 - yyyy年M月d日'.
   * Otherwise, it returns the current date in the format 'yyyy年M月'.
   *
   * @returns {string} The formatted date string.
   */
  const formatHeaderDate = useCallback(() => {
    return currentView === VIEW_CALENDAR_TYPE.WEEK
      ? `${format(dateRange.start, 'yyyy年M月d日', { locale: ja })} - ${format(
          dateRange.end,
          'yyyy年M月d日',
          { locale: ja }
        )}`
      : format(currentDate, 'yyyy年M月', { locale: ja })
  }, [currentView, dateRange, currentDate])

  /**
   * Handles the change of the calendar view.
   *
   * This function updates the current view state and changes the view
   * of the calendar using the FullCalendar API.
   *
   * @param {string} newView - The new view to be set (e.g., 'dayGridMonth', 'timeGridWeek', 'timeGridDay').
   */
  const handleViewChange = useCallback((newView) => {
    setCurrentView(newView)
    calendarRef.current?.getApi().changeView(newView)
  }, [])

  /**
   * Handles the date change for the calendar.
   *
   * @param {string} direction - The direction to change the date.
   *                             Accepts 'prev' for previous date, 'next' for next date,
   *                             or any other value to set the date to today.
   */
  const handleDateChange = useCallback((direction) => {
    const calendarApi = calendarRef.current?.getApi()
    if (direction === 'prev') calendarApi?.prev()
    else if (direction === 'next') calendarApi?.next()
    else calendarApi?.today()
    setCurrentDate(calendarApi?.getDate() || new Date())
  }, [])

  /**
   * Handles the selection of a date range on the calendar.
   * Prompts the user to enter a title for the new event.
   * If a title is provided, creates a new event with the selected date range and a random background color,
   * then adds it to the list of events.
   * Finally, unselects the date range on the calendar view.
   *
   * @param {Object} selectInfo - Information about the selected date range.
   * @param {Date} selectInfo.startStr - The start date of the selected range in string format.
   * @param {Date} selectInfo.endStr - The end date of the selected range in string format.
   * @param {boolean} selectInfo.allDay - Indicates if the event is an all-day event.
   * @param {Object} selectInfo.view - The calendar view object.
   */
  const handleDateSelect = useCallback(
    (selectInfo) => {
      const title = prompt('イベントのタイトルを入力してください')
      if (!title) return

      const newEvent = {
        id: String(events.length + 1),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      }
      setEvents((prev) => [...prev, newEvent])
    },
    [events]
  )

  /**
   * Handles the click event on a calendar event.
   * Prompts the user for confirmation to delete the event.
   * If confirmed, removes the event from the calendar and updates the state.
   *
   * @param {Object} clickInfo - Information about the clicked event.
   * @param {Object} clickInfo.event - The event object that was clicked.
   * @param {string} clickInfo.event.title - The title of the event.
   * @param {string} clickInfo.event.id - The unique identifier of the event.
   */
  const handleEventClick = useCallback((clickInfo) => {
    if (confirm(`「${clickInfo.event.title}」を削除してもよろしいですか？`)) {
      clickInfo.event.remove()
      setEvents((prev) => prev.filter((event) => event.id !== clickInfo.event.id))
    }
  }, [])

  /**
   * Renders a custom header for a day in the calendar.
   *
   * @param {Date} date - The date object representing the day to be rendered.
   * @returns {JSX.Element} A JSX element containing the formatted day header.
   */
  const renderDayHeader = (date) => (
    <div className='custom-day-header'>
      <div className='day-number'>{format(date, 'd')} 日</div>
    </div>
  )

  return {
    currentView,
    currentDate,
    events,
    formatHeaderDate,
    handleViewChange,
    handleDateChange,
    handleDateSelect,
    handleEventClick,
    renderDayHeader
  }
}

export default useCalendarLogic
