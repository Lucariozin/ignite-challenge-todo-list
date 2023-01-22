import { Task } from '../Tasks.types'

const tasksLocalStorageId = 'ignite-challenge-todo-list:tasks:01'

export const setTasksOnLocalStorage = (tasks: Task[]) => {
  const tasksToJSON = JSON.stringify(tasks)

  localStorage.setItem(tasksLocalStorageId, tasksToJSON)
}

export const getTasksFromLocalStorage = (): Task[] | undefined => {
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

  return formattedTasks
}
