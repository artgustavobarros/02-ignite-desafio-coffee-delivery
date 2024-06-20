import styled from 'styled-components'
import { mixins } from '../../../styles/mixins'

export const Box = styled.div``

export const InputContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.base_button};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.base_input};
  &:focus {
    border-color: ${({ theme }) => theme.yellow_dark};
  }

  span {
    font-size: 0.75rem;
    font-family: 'Roboto';
    font-style: italic;
    color: ${({ theme }) => theme.base_text};
    position: absolute;
    padding-left: 17rem;
    display: inline;

    &[data-state='false'] {
      display: none;
    }
  }

  input {
    position: relative;
    width: 100%;
    padding: 0.75rem;
    border: 1px solid ${({ theme }) => theme.base_button};
    border-radius: 4px;
    background-color: ${({ theme }) => theme.base_input};
    outline: none;
    color: ${({ theme }) => theme.base_text};

    &:placeholder {
      ${mixins.fonts.textS}
      color: ${({ theme }) => theme.base_label}
    }

    &:focus {
      border-color: ${({ theme }) => theme.yellow_dark};
    }
  }
`
