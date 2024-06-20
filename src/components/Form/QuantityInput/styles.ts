import styled from 'styled-components'
import { mixins } from '../../../styles/mixins'

export const QuantityContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  gap: 0.25rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.base_button};

  button {
    background-color: transparent;
    display: flex;
    align-items: center;

    transition: all 0.2s;

    color: ${({ theme }) => theme.purple};
  }

  button svg {
    &:hover {
      color: ${({ theme }) => theme.purple_dark};
    }
  }

  span {
    ${mixins.fonts.textM}
    color: ${({ theme }) => theme.base_title};
  }
`
