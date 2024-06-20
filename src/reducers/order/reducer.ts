import { produce } from 'immer'
import { ItemProps } from '../../context/cartContext'
import { FormInputs } from '../../pages/Cart'
import { Action } from './actions'

interface CartProps {
  client?: FormInputs | null
  items: ItemProps[]
}

export function orderReducer(state: CartProps, action: Action) {
  switch (action.type) {
    case 'ADD_NEW_ITEM':
      return produce(state, (draft) => {
        draft.items.push(action.payload.newItem)
      })

    case 'CHANGE_EXISTENT_ITEM': {
      const currentItemIndex = state.items.findIndex(
        (item) => item.name === action.payload.name,
      )

      if (currentItemIndex < 0) return state

      return produce(state, (draft) => {
        draft.items[currentItemIndex].quantity = action.payload.quantity
      })
    }

    case 'REMOVE_ITEM': {
      const currentItemIndex = state.items.findIndex(
        (item) => item.name === action.payload.name,
      )

      if (currentItemIndex < 0) return state

      return produce(state, (draft) => {
        draft.items.slice(currentItemIndex, 1)
      })
    }

    case 'INCREMENT_QUANTITY': {
      const currentItemIndex = state.items.findIndex(
        (item) => item.name === action.payload.name,
      )

      if (currentItemIndex < 0) return state

      return produce(state, (draft) => {
        draft.items[currentItemIndex].quantity++
      })
    }

    case 'DECREMENT_QUANTITY': {
      const currentItemIndex = state.items.findIndex(
        (item) => item.name === action.payload.name,
      )

      if (currentItemIndex < 0) return state

      return produce(state, (draft) => {
        draft.items[currentItemIndex].quantity--
      })
    }

    case 'NEW_CLIENT':
      return produce(state, (draft) => {
        draft.client = action.payload.data
      })

    default:
      return state
  }
}
