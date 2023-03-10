import { useTasks } from '@contexts/Tasks'

import {
  CompletedTasksAmount,
  CompletedTasksContainer,
  CompletedTasksText,
  Container,
  CreatedTasksAmount,
  CreatedTasksContainer,
  CreatedTasksText,
} from './TaskSummary.styles'

export const TaskSummary = () => {
  const { tasks } = useTasks()

  const createdTasks = tasks.length
  const completedTasks = tasks.filter((task) => task.completionDate).length

  const completedTasksAgainstAllTasksText = createdTasks > 0 ? `${completedTasks} de ${createdTasks}` : '0'

  return (
    <Container>
      <CreatedTasksContainer>
        <CreatedTasksText>Tarefas criadas</CreatedTasksText>
        <CreatedTasksAmount>{createdTasks}</CreatedTasksAmount>
      </CreatedTasksContainer>

      <CompletedTasksContainer>
        <CompletedTasksText>Concluídas</CompletedTasksText>
        <CompletedTasksAmount>{completedTasksAgainstAllTasksText}</CompletedTasksAmount>
      </CompletedTasksContainer>
    </Container>
  )
}
