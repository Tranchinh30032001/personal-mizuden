import { useEffect, useState } from 'react'

/**
 * Custom hook for handling media queries in React
 * @param query - CSS media query string
 * @returns boolean indicating if the media query matches
 */
const useMediaQuery = (query) => {
  // Initialize with the current match state
  const [matches, setMatches] = useState(() => {
    // Check if window is available (for SSR compatibility)
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return false
  })

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)

    // Update matches state when media query changes
    const updateMatches = (event) => {
      setMatches(event.matches)
    }

    // Set initial value
    setMatches(mediaQuery.matches)

    // Add event listener using modern API
    mediaQuery.addEventListener('change', updateMatches)

    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', updateMatches)
    }
  }, [query])

  return matches
}

export default useMediaQuery
