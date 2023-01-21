import { useCallback, useContext } from 'react'

import { TasksContext } from './Tasks'
import { UseTasksState } from './Tasks.types'

export const useTasks = (): UseTasksState => {
  const { dispatch, ...state } = useContext(TasksContext)

  const createNewTask = useCallback(
    ({ taskName }: { taskName?: string }) => {
      if (!taskName) return

      dispatch({ type: 'ADD_NEW_TASK', payload: { taskName } })
    },
    [dispatch],
  )

  const completeTask = useCallback(
    ({ taskId }: { taskId?: string }) => {
      if (!taskId) return

      dispatch({ type: 'MARK_TASK_AS_COMPLETED', payload: { taskId } })
    },
    [dispatch],
  )

  const restartTask = useCallback(
    ({ taskId }: { taskId?: string }) => {
      if (!taskId) return

      dispatch({ type: 'MARK_TASK_AS_IN_PROGRESS', payload: { taskId } })
    },
    [dispatch],
  )

  const removeTask = useCallback(
    ({ taskId }: { taskId?: string }) => {
      if (!taskId) return

      dispatch({ type: 'REMOVE_TASK', payload: { taskId } })
    },
    [dispatch],
  )

  return { ...state, createNewTask, completeTask, restartTask, removeTask }
}
