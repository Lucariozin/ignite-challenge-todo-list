import styled from 'styled-components'

export const Container = styled.div``

export const NoTasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  border-top: 1px solid ${({ theme }) => theme.palette.gray[400]};
  border-radius: 8px;
`

export const Clipboard = styled.img`
  margin-top: 4rem;
  user-select: none;
`

export const NoTasksText = styled.p`
  text-align: center;
  line-height: 1.4rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.palette.gray[300]};
`

export const NoTasksTextStrong = styled.strong`
  display: block;
`
