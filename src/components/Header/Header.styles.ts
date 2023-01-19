import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 12.5rem;
  background-color: ${({ theme }) => theme.palette.gray[700]};
`

export const Logo = styled.img`
  user-select: none;
`
