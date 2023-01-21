import { Dispatch, ReactNode } from 'react'
import { Action } from './Tasks.actions'

export type Task = {
  id: string
  name: string
  completionDate?: Date
}

export interface TasksContextState {
  tasks: Task[]
  dispatch: Dispatch<Action>
}

export interface UseTasksState {
  tasks: Task[]
  createNewTask: (params: { taskName?: string }) => void
  completeTask: (params: { taskId?: string }) => void
  restartTask: (params: { taskId?: string }) => void
}

export interface TasksProviderProps {
  children: ReactNode
}
