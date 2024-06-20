import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const CartContainer = styled.div`
  display: grid;
  grid-template-columns: 40rem 28rem;
  gap: 2rem;
`
const BaseSection = styled.section`
  > legend {
    color: ${({ theme }) => theme.base_subtitle};
    ${mixins.fonts.titleXS}
    margin-bottom: 1rem;
  }

  > section {
    background: ${({ theme }) => theme.base_card};
    border-radius: 6px;
    padding: 2.5rem;
    margin-bottom: 0.75rem;
  }
`

export const Order = styled(BaseSection)``

export const OrderHeader = styled.header`
  display: flex;
  gap: 0.71rem;
  margin-bottom: 2rem;

  h2 {
    color: ${({ theme }) => theme.base_subtitle};
    ${mixins.fonts.textM}
  }

  p {
    color: ${({ theme }) => theme.base_text};
    ${mixins.fonts.textS}
  }
`
export const OrderContent = styled.section`
  display: grid;
  grid-template-areas:
    'cep . .'
    'rua rua rua'
    'numero complemento complemento'
    'bairro cidade uf';
  gap: 1rem 0.75rem;
  grid-template-columns: 12.5rem auto 3.75rem;
`

export const PaymentMethod = styled.section``

export const Radios = styled.div`
  display: flex;
  gap: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Checkout = styled(BaseSection)``

export const Item = styled.section`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.base_button};
  padding-bottom: 1.5rem;
  > img {
    width: 4rem;
    height: 4rem;
  }

  > div {
    p {
      ${mixins.fonts.textS}
      color: ${({ theme }) => theme.base_subtitle};
    }
  }

  > p {
    ${mixins.fonts.textM}
    font-weight: bold;
    color: ${({ theme }) => theme.base_subtitle};
  }
`

export const CheckoutButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;

  > button {
    background-color: ${({ theme }) => theme.base_button};
    border-radius: 6px;
    border: none;
    outline: none;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    ${mixins.fonts.buttonM}

    transition: 0.2s;
    &:hover {
      background-color: ${({ theme }) => theme.base_hover};
    }
  }
`

export const Amount = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-block: 1.25rem;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      ${mixins.fonts.textS};
      color: ${({ theme }) => theme.base_text};
    }
  }

  div:nth-child(3) {
    p {
      ${mixins.fonts.textL};
      font-weight: bold;
      color: ${({ theme }) => theme.base_subtitle};
    }
  }
`
export const Confirm = styled.button`
  background-color: ${({ theme }) => theme.yellow};
  width: 100%;
  height: 2.85rem;
  color: ${({ theme }) => theme.white};
  border-radius: 6px;
  ${mixins.fonts.buttonG};
`
