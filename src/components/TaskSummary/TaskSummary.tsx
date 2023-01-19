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
  return (
    <Container>
      <CreatedTasksContainer>
        <CreatedTasksText>Tarefas criadas</CreatedTasksText>
        <CreatedTasksAmount>0</CreatedTasksAmount>
      </CreatedTasksContainer>

      <CompletedTasksContainer>
        <CompletedTasksText>Concluídas</CompletedTasksText>
        <CompletedTasksAmount>0</CompletedTasksAmount>
      </CompletedTasksContainer>
    </Container>
  )
}
