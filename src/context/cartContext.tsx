import { ReactNode, createContext, useReducer } from 'react'
import { FormInputs } from '../pages/Cart'
import { orderReducer } from '../reducers/order/reducer'
import {
  addNewItemAction,
  changeExistentItem,
  createNewClientAction,
  decrementQuantityAction,
  incrementQuantityAction,
  removeItemAction,
} from '../reducers/order/actions'

export const CartContext = createContext({})

interface CartProviderProps {
  children: ReactNode
}

export interface ItemProps {
  name: string
  img: string
  price: string
  quantity: number
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, dispatch] = useReducer(orderReducer, {
    items: [] as ItemProps[],
    client: null,
  })

  function addItens(name: string, img: string, quantity: number) {
    const existsItemOnArray = cart.items.find((item) => item.name === name)
    if (!existsItemOnArray) {
      const newItem = {
        name,
        img,
        price: String(9.9),
        quantity: quantity - 1,
      }
      dispatch(addNewItemAction(newItem))
    }
    dispatch(changeExistentItem(name, quantity))
  }

  function removeItens(name: string) {
    dispatch(removeItemAction(name))
  }

  function incrementItemQuantity(name: string) {
    dispatch(incrementQuantityAction(name))
  }

  function decrementItemQuantity(name: string) {
    dispatch(decrementQuantityAction(name))
  }

  const totalItensOnCart = cart.items.length

  function createNewClient(data: FormInputs) {
    dispatch(createNewClientAction(data))
  }

  console.log(cart)
  return (
    <CartContext.Provider
      value={{
        items: cart.items,
        totalItensOnCart,
        addItens,
        removeItens,
        incrementItemQuantity,
        decrementItemQuantity,
        createNewClient,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
