import { FormEvent, useState } from 'react'
import { PlusCircle } from 'phosphor-react'

import { useTasks } from '@contexts/Tasks'

import { Button, ButtonText, Container, Input } from './AddNewTaskForm.styles'

export const AddNewTaskForm = () => {
  const [taskName, setTaskName] = useState('')
  const { createNewTask } = useTasks()

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!taskName.length) return

    createNewTask({ taskName })
  }

  return (
    <Container onSubmit={handleFormSubmit}>
      <Input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />

      <Button type="submit">
        <ButtonText>Criar</ButtonText>
        <PlusCircle size={21} weight="bold" />
      </Button>
    </Container>
  )
}
