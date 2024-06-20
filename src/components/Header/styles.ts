import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const HeaderContainer = styled.header`
  padding-block: 2rem;
  width: 100vw;
  padding-inline: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.background};

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000000;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;

  color: ${({ theme }) => theme.purple_dark};
  background-color: ${({ theme }) => theme.purple_light};

  border-radius: 6px;
`
export const CartContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  border-radius: 6px;
  border: none;

  background-color: ${({ theme }) => theme.yellow_light};
  color: ${({ theme }) => theme.yellow_dark};

  cursor: pointer;
  outline: none;

  transition: all 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.yellow};
    color: ${({ theme }) => theme.yellow_light};
  }

  > span {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.yellow_dark};
    color: ${({ theme }) => theme.white};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem;
    ${mixins.fonts.textS}
    font-weight: bold;
    transform: translate(70%, -70%);
    position: absolute;
  }
`
