import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 5.875rem;
  > div {
    max-width: 36.75rem;
  }

  #background {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    width: calc(100vw - 17px);
  }
`

export const Text = styled.article`
  > h1 {
    ${mixins.fonts.titleXL}
    color: ${({ theme }) => theme.base_title};
    margin-bottom: 1rem;
  }

  > p {
    ${mixins.fonts.textL}
    color: ${({ theme }) => theme.base_subtitle};
  }
`

export const Tags = styled.ul`
  list-style: none;
  margin-top: 4.125rem;
  display: flex;
  gap: 1.25rem 2.5rem;
  flex-wrap: wrap;

  > li {
    ${mixins.fonts.textM}
    width: auto;
    min-width: 15rem;
    color: ${({ theme }) => theme.base_text};
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 2rem;
      height: 2rem;
      margin-right: 0.75rem;
      padding: 0.34375rem;
      border-radius: 50%;
    }
  }
`
