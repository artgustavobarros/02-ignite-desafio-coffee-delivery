import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const HomeContainer = styled.div``

export const Content = styled.main`
  > h1 {
    ${mixins.fonts.titleL}
  }
`

export const Catalog = styled.section`
  display: flex;
  align-items: center;
  margin-top: 5rem;
  gap: 5rem 3.65rem;
  flex-wrap: wrap;
`
