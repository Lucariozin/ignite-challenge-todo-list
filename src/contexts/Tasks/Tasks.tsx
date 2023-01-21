import { createContext, useEffect, useReducer } from 'react'
import { Task, TasksContextState, TasksProviderProps } from './Tasks.types'

import { reducer } from './Tasks.reducer'

const initialState: TasksContextState = {
  tasks: [],
  dispatch: () => {},
}

export const TasksContext = createContext<TasksContextState>(initialState)

export const TasksProvider = ({ children }: TasksProviderProps) => {
  const tasksLocalStorageId = 'ignite-challenge-todo-list:tasks:01'

  const [state, dispatch] = useReducer(reducer, initialState)

  const value: TasksContextState = {
    ...state,
    dispatch,
  }

  useEffect(() => {
    const tasksFromLocalStorage = localStorage.getItem(tasksLocalStorageId)

    if (!tasksFromLocalStorage) return

    const parsedTasks: Task[] = JSON.parse(tasksFromLocalStorage)

    if (!parsedTasks.length) return

    const formattedTasks = parsedTasks.map((task) => ({
      ...task,
      startDate: new Date(task.startDate),
      completionDate: task.completionDate ? new Date(task.completionDate) : undefined,
      deletionDate: task.deletionDate ? new Date(task.deletionDate) : undefined,
    }))

    dispatch({ type: 'SET_ALL_TASKS', payload: { tasks: formattedTasks } })
  }, [])

  useEffect(() => {
    if (!state.tasks.length) return

    const tasksToJSON = JSON.stringify(state.tasks)

    localStorage.setItem(tasksLocalStorageId, tasksToJSON)
  }, [state.tasks])

  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
}
