import { createContext, ReactNode, useContext, useReducer } from 'react'

type Task = {
  id: string
  name: string
  completionDate?: Date
}

interface TasksContextState {
  tasks: Task[]
}

const initialState: TasksContextState = {
  tasks: [],
}

const TasksContext = createContext<TasksContextState>(initialState)

interface TasksProviderProps {
  children: ReactNode
}

type ActionTypes = 'ADD_NEW_TASK' | 'REMOVE_TASK' | 'MARK_TASK_AS_COMPLETED' | 'MARK_TASK_AS_IN_PROGRESS'

type Payload = {
  taskName?: string
  taskId?: string
}

interface Action {
  type: ActionTypes
  payload?: Payload
}

interface ActionFunctionParams {
  state: TasksContextState
  payload?: Payload
}

const actionFunctionsObj: { [K in ActionTypes]: (params: ActionFunctionParams) => TasksContextState } = {
  ADD_NEW_TASK: ({ state, payload }) => {
    return state
  },
  REMOVE_TASK: ({ state, payload }) => {
    return state
  },
  MARK_TASK_AS_COMPLETED: ({ state, payload }) => {
    return state
  },
  MARK_TASK_AS_IN_PROGRESS: ({ state, payload }) => {
    return state
  },
}

const reducer = (state: TasksContextState, action: Action) => {
  const { type, payload } = action

  const actionFunction = actionFunctionsObj[type]

  if (!actionFunction) return state

  const newState = actionFunction({ state, payload })

  return newState
}

export const TasksProvider = ({ children }: TasksProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <TasksContext.Provider value={state}>{children}</TasksContext.Provider>
}

export const useTasks = () => useContext(TasksContext)
