import { useRef } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import jaLocale from '@fullcalendar/core/locales/ja'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import ContentContainer from '@/components/containers/ContentContainer'
import useCalendarLogic from './hooks/useCalendarLogic'
import CalendarToolbar from './components/CalendarToolbar'
import WeekDayHeader from './components/WeekDayHeader'
import './style.css'
import { VIEW_CALENDAR_TYPE } from '@/constants/global'
import { cn } from '@/utils/cn'

const Calendar = () => {
  const calendarRef = useRef(null)
  const {
    currentView,
    events,
    formatHeaderDate,
    handleViewChange,
    handleDateChange,
    handleDateSelect,
    handleEventClick,
    renderDayHeader
  } = useCalendarLogic(calendarRef)

  return (
    <>
      {/* Breadcrumbs for navigation */}
      <Breadcrumbs
        crumbs={[
          { to: '/portal', title: 'ポータル' },
          { to: '', title: '備品センター予定' }
        ]}
      />
      <ContentContainer>
        {/* Toolbar for calendar controls */}
        <CalendarToolbar
          currentView={currentView}
          formatHeaderDate={formatHeaderDate}
          handleViewChange={handleViewChange}
          handleDateChange={handleDateChange}
        />

        {/* Conditionally render WeekDayHeader if the current view is week */}
        {currentView === VIEW_CALENDAR_TYPE.WEEK ? <WeekDayHeader /> : ''}

        <div className={cn('calendar-scroll-container -mt-[1px]')}>
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView={currentView}
            headerToolbar={false}
            locale={jaLocale}
            slotMinTime='01:00'
            slotMaxTime='24:00'
            allDaySlot={false}
            editable
            selectable
            selectMirror
            dayMaxEvents
            weekends
            events={events}
            select={handleDateSelect}
            eventClick={handleEventClick}
            dayHeaderClassNames={`${currentView === VIEW_CALENDAR_TYPE.MONTH && 'hidden'}`}
            dayHeaderContent={({ date }) => renderDayHeader(date)}
            slotLabelFormat={{ hour: '2-digit', minute: '2-digit', hour12: false }}
            height={`${currentView === VIEW_CALENDAR_TYPE.MONTH ? '100%' : 'auto'}`}
          />
        </div>
      </ContentContainer>
    </>
  )
}

export default Calendar
