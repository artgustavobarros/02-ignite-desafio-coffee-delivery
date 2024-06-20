import { useContext } from 'react'
import { CartContext, ItemProps } from '../context/cartContext'
import { FormInputs } from '../pages/Cart'

interface useCartProps {
  items: ItemProps[]
  totalItensOnCart: number
  addItens: (name: string, img: string, quantity: number) => void
  removeItens: (name: string) => void
  incrementItemQuantity: (name: string) => void
  decrementItemQuantity: (name: string) => void
  createNewClient: (data: FormInputs) => void
}

export const useCart = () => useContext(CartContext) as useCartProps
