import * as Checkbox from '@radix-ui/react-checkbox'
import { Check, Trash } from 'phosphor-react'

import { useTasks } from '@contexts/Tasks'

import { CheckboxContainer, Container, DeleteTaskButton, TaskName } from './TaskItem.styles'

interface TaskItemProps {
  name: string
  id: string
  completionDate?: Date
}

export const TaskItem = ({ name, id, completionDate }: TaskItemProps) => {
  const { completeTask, restartTask } = useTasks()

  const isCompleted = !!completionDate

  const handleCheckedChange = () => {
    if (!isCompleted) {
      completeTask({ taskId: id })
      return
    }

    restartTask({ taskId: id })
  }

  return (
    <Container isCompleted={isCompleted}>
      <CheckboxContainer
        checked={isCompleted}
        onCheckedChange={handleCheckedChange}
        onKeyDown={(e) => e.key === 'Enter' && handleCheckedChange()}
      >
        <Checkbox.Indicator>{isCompleted && <Check size={12} weight="bold" />}</Checkbox.Indicator>
      </CheckboxContainer>

      <TaskName isCompleted={isCompleted}>{name}</TaskName>

      <DeleteTaskButton>
        <Trash size={18} weight="bold" />
      </DeleteTaskButton>
    </Container>
  )
}
