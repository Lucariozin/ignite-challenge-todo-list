import styled from 'styled-components'

export const TaskSummaryContainer = styled.div`
  width: 100%;
  max-width: 48rem;
  margin: 5.5rem auto 0;
  padding: 0 1rem;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-top: 4rem;
  }
`

export const TaskListContainer = styled.main`
  width: 100%;
  max-width: 48rem;
  margin: 1.5rem auto 3rem auto;
  padding: 0 1rem;
`
