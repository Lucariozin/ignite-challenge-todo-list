import { createContext, useEffect, useReducer } from 'react'
import { TasksContextState, TasksProviderProps } from './Tasks.types'

import { getTasksFromLocalStorage, setTasksOnLocalStorage } from './persistence/localStorage'

import { reducer } from './Tasks.reducer'

const initialState: TasksContextState = {
  tasks: [],
  dispatch: () => {},
}

export const TasksContext = createContext<TasksContextState>(initialState)

export const TasksProvider = ({ children }: TasksProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value: TasksContextState = {
    ...state,
    dispatch,
  }

  useEffect(() => {
    const tasksFromLocalStorage = getTasksFromLocalStorage()

    if (!tasksFromLocalStorage) return

    dispatch({ type: 'SET_ALL_TASKS', payload: { tasks: tasksFromLocalStorage } })
  }, [])

  useEffect(() => {
    if (!state.tasks.length) return

    setTasksOnLocalStorage(state.tasks)
  }, [state.tasks])

  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
}
