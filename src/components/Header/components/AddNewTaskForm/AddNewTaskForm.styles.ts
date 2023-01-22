import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
`

export const Input = styled.input`
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

  ${({ theme }) => theme.breakpoints.down('sm')} {
    height: 3rem;
    font-size: 0.875rem;
  }
`

export const Button = styled.button`
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

  ${({ theme }) => theme.breakpoints.down('sm')} {
    height: 2.875rem;
  }
`

export const ButtonText = styled.span`
  font-size: 0.875rem;
  font-weight: 700;
  margin-bottom: 2px;
`
