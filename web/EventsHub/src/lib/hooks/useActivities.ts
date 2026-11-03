import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import agent from '../types/api/agents'

export const useActivities = (id?: string) => {
  const queryClient = useQueryClient()

  const { data: activities, isPending } = useQuery({
    queryKey: ['activities'],
    queryFn: async () => {
      const response = await agent.get<Activity[]>('/events/${id}')
      return response.data
    },
    enabled: !!id, // !underfined === false
  })

  const { data: activity, isLoading: isLoadingActivity } = useQuery({
    queryKey: ['activity', id],
    queryFn: async () => {
      const response = await agent.get<Activity>(`/events/${id}`)
      return response.data
    },
  })

  const updateActivity = useMutation({
    mutationFn: async (activity: Activity) => {
      await agent.put('/events', activity)
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['activities'],
      })
    },
  })

  const createActivity = useMutation({
    mutationFn: async (activity: Activity) => {
      await agent.post('/events', activity)
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['activities'],
      })
    },
  })

  const deleteActivity = useMutation({
    mutationFn: async (activity: Activity) => {
      await agent.delete(`/events/${activity.id}`)
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['activities'],
      })
    },
  })

  return {
    activities,
    isPending,
    updateActivity,
    createActivity,
    deleteActivity,
    activity,
    isLoadingActivity,
  }
}
