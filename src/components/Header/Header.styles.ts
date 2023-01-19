import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 12.5rem;
  background-color: ${({ theme }) => theme.palette.gray[700]};
`

export const Logo = styled.img`
  user-select: none;
`

export const AddNewTaskForm = styled.form`
  display: flex;
  gap: 8px;

  width: 100%;
  max-width: 48rem;
  padding: 0 1rem;

  position: absolute;
  margin-bottom: -12.4rem;
`

export const AddNewTaskInput = styled.input`
  display: block;
  width: 100%;
  height: 3.375rem;
  padding: 0 1rem;

  font-size: 1rem;
  color: ${({ theme }) => theme.palette.gray[300]};
  background-color: ${({ theme }) => theme.palette.gray[500]};

  outline: none;
  border: 1px solid ${({ theme }) => theme.palette.gray[700]};
  border-radius: 8px;
  transition: border-color 0.1s;

  &:focus-visible {
    border-color: ${({ theme }) => theme.palette.purple[500]};
  }
`

export const AddNewTaskButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 100%;
  max-width: 5.625rem;
  height: 3.25rem;

  color: ${({ theme }) => theme.palette.gray[100]};
  background-color: ${({ theme }) => theme.palette.blue[500]};

  border: 0;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.palette.blue[400]};
  }

  &:focus-visible {
    background-color: ${({ theme }) => theme.palette.blue[400]};
    outline: 1px solid ${({ theme }) => theme.palette.purple[500]};
    outline-offset: 2px;
  }
`

export const AddNewTaskText = styled.span`
  font-size: 0.875rem;
  font-weight: 700;
  margin-bottom: 2px;
`
