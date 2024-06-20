import styled from 'styled-components'
import { mixins } from '../../../styles/mixins'

export const RadioContainer = styled.label`
  width: 100%;
  background-color: ${({ theme }) => theme.base_button};
  border-radius: 6px;
  border: 1px solid 'transparent';
  padding: 1rem;
  display: flex;
  gap: 0.75rem;
  width: 100%;
  align-items: center;
  justify-content: center;
  ${mixins.fonts.buttonM}

  &[data-state="true"] {
    background-color: ${({ theme }) => theme.purple_light};
    border-color: ${({ theme }) => theme.purple};
  }

  transition: all.2s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.base_hover};
  }

  input {
    display: none;
  }
`
