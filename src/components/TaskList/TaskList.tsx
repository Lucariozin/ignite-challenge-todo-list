import { Clipboard, Container, NoTasksContainer, NoTasksText, NoTasksTextStrong } from './TaskList.styles'

export const TaskList = () => {
  return (
    <Container>
      <NoTasksContainer>
        <Clipboard src="/img/clipboard.svg" alt="" width={56} height={56} />

        <NoTasksText>
          <NoTasksTextStrong>Você ainda não tem tarefas cadastradas</NoTasksTextStrong>
          Crie tarefas e organize seus itens a fazer
        </NoTasksText>
      </NoTasksContainer>
    </Container>
  )
}
