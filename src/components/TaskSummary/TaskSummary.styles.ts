import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const CreatedTasksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const CompletedTasksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const CreatedTasksText = styled.span`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.blue[400]};
`

export const CompletedTasksText = styled.span`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.purple[400]};
`

const tasksAmount = styled.span`
  padding: 2px 8px;
  font-size: 0.75rem;
  font-weight: 700;

  color: ${({ theme }) => theme.palette.gray[200]};
  background-color: ${({ theme }) => theme.palette.gray[400]};

  border-radius: 1rem;
  user-select: none;
`

export const CreatedTasksAmount = styled(tasksAmount)``

export const CompletedTasksAmount = styled(tasksAmount)``
