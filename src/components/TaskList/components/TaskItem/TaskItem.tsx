import * as Checkbox from '@radix-ui/react-checkbox'
import { Check, Trash } from 'phosphor-react'

import { CheckboxContainer, Container, DeleteTaskButton, TaskName } from './TaskItem.styles'

interface TaskItemProps {
  name: string
  id: string
  completionDate?: Date
}

export const TaskItem = ({ name, id, completionDate }: TaskItemProps) => {
  const isCompleted = !!completionDate

  const handleCheckedChange = () => {
    console.log('Hello')
  }

  return (
    <Container isCompleted={isCompleted}>
      <CheckboxContainer checked={isCompleted} onCheckedChange={handleCheckedChange}>
        <Checkbox.Indicator>{isCompleted && <Check size={12} weight="bold" />}</Checkbox.Indicator>
      </CheckboxContainer>

      <TaskName>{name}</TaskName>

      <DeleteTaskButton>
        <Trash size={18} weight="bold" />
      </DeleteTaskButton>
    </Container>
  )
}
