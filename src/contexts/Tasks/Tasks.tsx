import { createContext, useCallback, useContext, useReducer } from 'react'
import { TasksContextState, TasksProviderProps, UseTasksState } from './Tasks.types'

import { reducer } from './Tasks.reducer'

const initialState: TasksContextState = {
  tasks: [],
  dispatch: () => {},
}

const TasksContext = createContext<TasksContextState>(initialState)

export const TasksProvider = ({ children }: TasksProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value: TasksContextState = {
    ...state,
    dispatch,
  }

  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
}

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
