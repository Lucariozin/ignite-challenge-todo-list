import styled, { css } from 'styled-components'
import * as Checkbox from '@radix-ui/react-checkbox'

interface ContainerProps {
  isCompleted: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  width: 100%;
  min-height: 4.5rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.palette.gray[500]};

  border-radius: 8px;
  border: 1px solid ${({ theme, isCompleted }) => (isCompleted ? theme.palette.gray[500] : theme.palette.gray[400])};
`

export const CheckboxContainer = styled(Checkbox.Root)`
  width: 1.125rem;
  height: 1.125rem;
  margin-top: 2px;
  margin-left: 2px;
  flex-shrink: 0;

  color: ${({ theme }) => theme.palette.gray[100]};
  border-radius: 50%;

  background-color: ${({ theme, checked }) => (checked ? theme.palette.purple[500] : 'transparent')};
  border: 2px solid ${({ theme, checked }) => (checked ? theme.palette.purple[500] : theme.palette.blue[400])};
  outline: 0;

  outline-color: transparent;
  cursor: pointer;
  transition: outline 0.1s, filter 0.1s, border-color 0.2s;

  &:hover {
    ${({ theme, checked }) => {
      if (checked) return ''

      return css`
        border: 2px solid ${theme.palette.blue[500]};
      `
    }}

    filter: brightness(1.2) blur(0.6px);
  }

  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.palette.purple[500]};
    outline-offset: 2px;
    filter: brightness(1.2) blur(0.6px);
  }
`

export const TaskName = styled.p`
  font-size: 0.875rem;
  line-height: 1.1rem;
  color: ${({ theme }) => theme.palette.gray[100]};
`

export const DeleteTaskButton = styled.button`
  margin: 2px 2px 0 auto;
  font-size: 0;
  border: 0;
  border-radius: 2px;
  color: ${({ theme }) => theme.palette.gray[300]};
  background-color: transparent;

  transition: color 0.2s, outline-color 0.1s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.palette.red[100]};
  }

  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.palette.red[100]};
    outline-offset: 1px;
    color: ${({ theme }) => theme.palette.red[100]};
  }
`
