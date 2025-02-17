/* An object representing the different roles in the system. */
export const ROLES = {
  SALE: 'SALE',
  DEVICE_MANAGER: 'DEVICE_MANAGER'
}

/* An object representing the media query breakpoints for different devices. */
export const MEDIA_QUERY = {
  MOBILE: '(width < 768px)',
  TABLET: '(769px <= width < 1024px)',
  DESKTOP: '(1025px <= width)'
}

/* An object representing the types of devices.*/
export const DEVICE = {
  MOBILE: 'MOBILE',
  TABLET: 'TABLET',
  DESKTOP: 'DESKTOP'
}

/* An object representing the types of calendar views.*/
export const VIEW_CALENDAR_TYPE = {
  WEEK: 'timeGridWeek', // default view
  MONTH: 'dayGridMonth'
}
