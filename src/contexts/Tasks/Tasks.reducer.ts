import { v4 } from 'uuid'

import { Task, TasksContextState } from './Tasks.types'
import { Action, ActionFunctionParams, ActionTypes } from './Tasks.actions'

// eslint-disable-next-line
const actionFunctionsObj: { [K in ActionTypes]: (params: ActionFunctionParams) => TasksContextState } = {
  ADD_NEW_TASK: ({ state, payload }) => {
    if (!payload?.taskName) return state

    const { taskName } = payload

    const newTask: Task = {
      id: v4(),
      name: taskName,
    }

    const newTaskList = [newTask, ...state.tasks]

    return { ...state, tasks: newTaskList }
  },
  REMOVE_TASK: ({ state, payload }) => {
    return state
  },
  MARK_TASK_AS_COMPLETED: ({ state, payload }) => {
    if (!payload?.taskId) return state

    const { taskId } = payload

    const newTaskList = state.tasks.map((task) => (taskId === task.id ? { ...task, completionDate: new Date() } : task))

    return { ...state, tasks: newTaskList }
  },
  MARK_TASK_AS_IN_PROGRESS: ({ state, payload }) => {
    return state
  },
}

export const reducer = (state: TasksContextState, action: Action) => {
  const { type, payload } = action

  const actionFunction = actionFunctionsObj[type]

  if (!actionFunction) return state

  const newState = actionFunction({ state, payload })

  return newState
}
