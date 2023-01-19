import { AddNewTaskForm } from './components/AddNewTaskForm'

import { AddNewTaskFormContainer, Container, Logo } from './Header.styles'

export const Header = () => {
  return (
    <Container>
      <Logo src="/img/ignite-challenge-todo-list-logo.svg" alt="" width={126} height={48} />

      <AddNewTaskFormContainer>
        <AddNewTaskForm />
      </AddNewTaskFormContainer>
    </Container>
  )
}
