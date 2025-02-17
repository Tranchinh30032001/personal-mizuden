import { useEffect } from 'react'
import { useLocation, useOutletContext } from 'react-router-dom'

/**
 * Custom hook to trigger the `onLoaded` callback when the page has finished loading.
 *
 * @param component - The component (typically a page or part of a page) that needs to be passed
 * to the `onLoaded` callback when the page has finished loading.
 */
const usePageLoad = (component) => {
  const { pathname } = useLocation()
  const context = useOutletContext()

  useEffect(() => {
    // Check if `onLoaded` function is available in the context and call it if exists.
    if (context?.onLoaded) {
      // Trigger the `onLoaded` callback, passing `component` as an argument.
      // `component` is typically a component that will be handled when the page is done loading.
      context.onLoaded( component)
    }
  }, [pathname]) // Re-run when context or component changes
}

export default usePageLoad
