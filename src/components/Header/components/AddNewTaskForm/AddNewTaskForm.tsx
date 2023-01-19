import { PlusCircle } from 'phosphor-react'
import { Button, ButtonText, Container, Input } from './AddNewTaskForm.styles'

export const AddNewTaskForm = () => {
  return (
    <Container>
      <Input type="text" />

      <Button type="submit">
        <ButtonText>Criar</ButtonText>
        <PlusCircle size={21} weight="bold" />
      </Button>
    </Container>
  )
}
