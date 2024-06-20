import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const SuccessContainer = styled.section`
  > div {
    margin-bottom: 2.5rem;
    h1 {
      ${mixins.fonts.titleL};
      color: ${({ theme }) => theme.yellow_dark};
    }

    p {
      ${mixins.fonts.textL};
      color: ${({ theme }) => theme.base_subtitle};
    }
  }
`

export const SuccessGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6.56rem;

  > div {
    border: 1px solid transparent;
    background-origin: border-box;
    background-image: ${({ theme }) =>
      `linear-gradient(to bottom right, ${theme.yellow}, ${theme.purple})`};
    border-radius: 0.375rem 2.25rem;
    align-self: center;
  }
`

export const Content = styled.section`
  background-color: ${({ theme }) => theme.background};
  padding: 2.5rem;
  border-radius: 0.375rem 2.25rem;
  display: flex;
  flex-direction: column;
`

export const Tag = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 1.75rem;

  svg {
    border-radius: 50%;
    padding: 0.5rem;
  }

  p {
    ${mixins.fonts.textM};
    color: ${({ theme }) => theme.base_text};
  }

  strong {
    ${mixins.fonts.textM};
    font-weight: bold;
    color: ${({ theme }) => theme.base_text};
  }
`
