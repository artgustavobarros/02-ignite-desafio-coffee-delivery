import { ItemProps } from '../../context/cartContext'
import { FormInputs } from '../../pages/Cart'

enum ActionTypes {
  ADD_NEW_ITEM = 'ADD_NEW_ITEM',
  CHANGE_EXISTENT_ITEM = 'CHANGE_EXISTENT_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREMENT_QUANTITY = 'INCREMENT_QUANTITY',
  DECREMENT_QUANTITY = 'DECREMENT_QUANTITY',
  NEW_CLIENT = 'NEW_CLIENT',
}

export type Action =
  | {
      type: ActionTypes.ADD_NEW_ITEM
      payload: {
        newItem: ItemProps
      }
    }
  | {
      type: ActionTypes.CHANGE_EXISTENT_ITEM
      payload: {
        name: string
        quantity: number
      }
    }
  | {
      type:
        | ActionTypes.REMOVE_ITEM
        | ActionTypes.INCREMENT_QUANTITY
        | ActionTypes.DECREMENT_QUANTITY
      payload: {
        name: string
      }
    }
  | {
      type: ActionTypes.NEW_CLIENT
      payload: {
        data: FormInputs
      }
    }

export function addNewItemAction(newItem: ItemProps) {
  return {
    type: ActionTypes.ADD_NEW_ITEM,
    payload: { newItem },
  } satisfies Action
}

export function changeExistentItem(name: string, quantity: number) {
  return {
    type: ActionTypes.CHANGE_EXISTENT_ITEM,
    payload: { name, quantity },
  } satisfies Action
}

export function removeItemAction(name: string) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: { name },
  } satisfies Action
}

export function incrementQuantityAction(name: string) {
  return {
    type: ActionTypes.INCREMENT_QUANTITY,
    payload: { name },
  } satisfies Action
}

export function decrementQuantityAction(name: string) {
  return {
    type: ActionTypes.DECREMENT_QUANTITY,
    payload: { name },
  } satisfies Action
}

export function createNewClientAction(data: FormInputs) {
  return {
    type: ActionTypes.NEW_CLIENT,
    payload: { data },
  } satisfies Action
}
