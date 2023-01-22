import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 12.5rem;
  background-color: ${({ theme }) => theme.palette.gray[700]};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    height: 9rem;
  }
`

export const Logo = styled.img`
  user-select: none;
`

export const AddNewTaskFormContainer = styled.div`
  width: 100%;
  max-width: 48rem;
  padding: 0 1rem;

  position: absolute;
  margin-bottom: -12.4rem;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-bottom: -9rem;
  }
`
