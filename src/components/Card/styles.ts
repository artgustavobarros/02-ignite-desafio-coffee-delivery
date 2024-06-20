import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const CardContainer = styled.section`
  width: 16rem;
  padding-inline: 1.25rem;
  height: 19.375rem;
  background-color: ${({ theme }) => theme.base_card};
  border-radius: 6px 36px 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Details = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  > img {
    margin-top: -3.75rem;
  }

  ul {
    display: flex;
    gap: 0.25rem;
    list-style: none;

    li {
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.yellow_light};
      color: ${({ theme }) => theme.yellow_dark};
      padding: 0.25rem 0.5rem;
      border-radius: 100px;

      ${mixins.fonts.tag}
    }
  }

  > h1 {
    ${mixins.fonts.titleS}
    color: ${({ theme }) => theme.base_subtitle}
  }

  > p {
    color: ${({ theme }) => theme.base_label};
    ${mixins.fonts.textS}
    text-align: center;
  }
`
export const Order = styled.article`
  margin-top: 2.06rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  > h2 {
    color: ${({ theme }) => theme.base_text};
    ${mixins.fonts.titleM}
    margin-right: .5rem;

    span {
      ${mixins.fonts.textS}
    }
  }

  > button {
    border: none;
    outline: none;
    border-radius: 6px;
    padding: 0.5rem;
    width: 2.375rem;
    height: 2.375rem;
    background-color: ${({ theme }) => theme.purple};
    color: ${({ theme }) => theme.white};
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: ${({ theme }) => theme.purple_dark};
    }
  }
`
