import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.palette.gray[600]};
    scrollbar-color: ${({ theme }) => theme.palette.gray[300]};

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.palette.gray[300]};
      border-radius: 20px;
    }
  }

  body, button, input, textarea {
    font-family: 'Inter', sans-serif;
  }
`
