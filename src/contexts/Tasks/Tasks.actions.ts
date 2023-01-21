import { Task, TasksContextState } from './Tasks.types'

export type ActionTypes =
  | 'SET_ALL_TASKS'
  | 'ADD_NEW_TASK'
  | 'REMOVE_TASK'
  | 'MARK_TASK_AS_COMPLETED'
  | 'MARK_TASK_AS_IN_PROGRESS'

export type Payload = {
  taskName?: string
  taskId?: string
  tasks?: Task[]
}

export interface Action {
  type: ActionTypes
  payload?: Payload
}

export interface ActionFunctionParams {
  state: TasksContextState
  payload?: Payload
}
