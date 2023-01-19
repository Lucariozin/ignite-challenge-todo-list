import { PlusCircle } from 'phosphor-react'

import { AddNewTaskButton, AddNewTaskForm, AddNewTaskInput, AddNewTaskText, Container, Logo } from './Header.styles'

export const Header = () => {
  return (
    <Container>
      <Logo src="/img/ignite-challenge-todo-list-logo.svg" alt="" width={126} height={48} />

      <AddNewTaskForm>
        <AddNewTaskInput type="text" />

        <AddNewTaskButton type="submit">
          <AddNewTaskText>Criar</AddNewTaskText>
          <PlusCircle size={21} weight="bold" />
        </AddNewTaskButton>
      </AddNewTaskForm>
    </Container>
  )
}
