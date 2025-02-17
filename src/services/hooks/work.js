import api from '@/configs/axios'
import ENDPOINTS from '@/configs/endpoints'
import KEYS from '@/constants/reactQueryKeys'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export const useCreateWorkMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: [KEYS.MUTATION.CREATE_WORK],
    mutationFn: async (payload) => {
      const res = await api.post(ENDPOINTS.work.create, payload)
      return res
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === KEYS.QUERY.WORKS
      })
    }
  })
}

export const useDeleteWorkMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: [KEYS.MUTATION.DELETE_WORK],
    mutationFn: async ({ workId, payload }) => {
      const res = await api.post(ENDPOINTS.work.delete(workId), payload)
      return res
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === KEYS.QUERY.WORKS
      })
    }
  })
}

export const useEditWorkMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: [KEYS.MUTATION.EDIT_WORK],
    mutationFn: async ({ workId, payload }) => {
      const res = await api.post(ENDPOINTS.work.edit(workId), payload)
      return res
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === KEYS.QUERY.WORKS
      })
    }
  })
}

export const useDeletePermanentWorkMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: [KEYS.MUTATION.DELETE_PERMANENT_WORK],
    mutationFn: async ({ workId }) => {
      const res = await api.post(ENDPOINTS.work.deletePermanent(workId))
      return res
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === KEYS.QUERY.WORKS
      })
    }
  })
}

export const useSearchWorkMutation = () => {
  return useMutation({
    mutationKey: [KEYS.MUTATION.SEARCH_WORK],
    mutationFn: async ({ payload }) => {
      const res = await api.post(ENDPOINTS.work.search, payload)
      return res
    }
  })
}

export const useSearchWorkStatusMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: [KEYS.MUTATION.DELETE_WORK],
    mutationFn: async ({ payload }) => {
      const res = await api.post(ENDPOINTS.work.searchStatus, payload)
      return res
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === KEYS.QUERY.WORKS
      })
    }
  })
}

export const useGetWorkQuery = (workId) => {
  return useQuery({
    queryKey: [KEYS.QUERY.WORKS, workId],
    queryFn: async () => {
      const res = await api.get(ENDPOINTS.work.info(workId))
      return res
    }
  })
}

export const useCreateWorkSearchMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: [KEYS.MUTATION.CREATE_WORK_SEARCH],
    mutationFn: async ({ employeeId, payload }) => {
      const res = await api.post(ENDPOINTS.workSearch(employeeId).create, payload)
      return res
    },
    onSuccess: (_, params) => {
      queryClient.invalidateQueries({
        predicate: query => {
          return query.queryKey[0] === KEYS.QUERY.WORK_SEARCHES
          || query.queryKey[1] === params.employeeId
        }
      })
    }
  })
}

export const useEditWorkSearchMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: [KEYS.MUTATION.EDIT_WORK_SEARCH],
    mutationFn: async ({ employeeId, searchPartternId, payload }) => {
      const res = await api.post(ENDPOINTS.workSearch(employeeId).edit(searchPartternId), payload)
      return res
    },
    onSuccess: (_, params) => {
      queryClient.invalidateQueries({
        predicate: query => {
          return query.queryKey[0] === KEYS.QUERY.WORK_SEARCHES
          || query.queryKey[1] === params.employeeId
        }
      })
    }
  })
}

export const useDelPermanentWorkSearchMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: [KEYS.MUTATION.DELETE_PERMANENT_WORK_SEARCH],
    mutationFn: async ({ employeeId, searchPartternId }) => {
      const res = await api.post(ENDPOINTS.workSearch(employeeId).deletePermanent(searchPartternId))
      return res
    },
    onSuccess: (_, params) => {
      queryClient.invalidateQueries({
        predicate: query => {
          return query.queryKey[0] === KEYS.QUERY.WORK_SEARCHES
          || query.queryKey[1] === params.employeeId
        }
      })
    }
  })
}

export const useGetWorkSearchesQuery = (employeeId) => {
  return useQuery({
    queryKey: [KEYS.QUERY.WORK_SEARCHES, employeeId],
    queryFn: async () => {
      const res = await api.get(ENDPOINTS.workSearch(employeeId).getAll)
      return res
    }
  })
}
