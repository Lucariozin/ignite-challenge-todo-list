import { useTasks } from '@contexts/Tasks'

import { TaskItem } from './components/TaskItem'

import {
  Clipboard,
  Container,
  NoTasksContainer,
  NoTasksText,
  NoTasksTextStrong,
  TaskListContainer,
} from './TaskList.styles'

export const TaskList = () => {
  const { tasks } = useTasks()

  console.log('Tasks', tasks)

  const taskListIsEmpty = !tasks.length

  return (
    <Container>
      {taskListIsEmpty ? (
        <NoTasksContainer>
          <Clipboard src="/img/clipboard.svg" alt="" width={56} height={56} />

          <NoTasksText>
            <NoTasksTextStrong>Você ainda não tem tarefas cadastradas</NoTasksTextStrong>
            Crie tarefas e organize seus itens a fazer
          </NoTasksText>
        </NoTasksContainer>
      ) : (
        <TaskListContainer>
          {tasks.map(({ id, name, completionDate }) => (
            <TaskItem key={id} id={id} name={name} completionDate={completionDate} />
          ))}
        </TaskListContainer>
      )}
    </Container>
  )
}
