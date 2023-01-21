import { createContext, useReducer } from 'react'
import { TasksContextState, TasksProviderProps } from './Tasks.types'

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

  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
}
