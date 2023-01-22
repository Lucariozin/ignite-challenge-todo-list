import { useCallback, useContext } from 'react'

import { TasksContext } from './Tasks.context'
import { UseTasksState } from './Tasks.types'

export const useTasks = (): UseTasksState => {
  const { dispatch, ...state } = useContext(TasksContext)

  const sortedTaskList = state.tasks
    .filter((task) => !task.deletionDate)
    .sort((a, b) => b.startDate.getTime() - a.startDate.getTime())

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

  return { ...state, tasks: sortedTaskList, createNewTask, completeTask, restartTask, removeTask }
}
