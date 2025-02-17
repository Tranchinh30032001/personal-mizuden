/* eslint-disable no-unused-vars */
import { QueryClient, QueryCache, MutationCache } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      suspense: true,
      retry: 0
    }
  },
  // show error for requests in general
  queryCache: new QueryCache({
    onError: (error) => {
      // handling error
    }
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      // handling error
    }
  })
})

export default queryClient
