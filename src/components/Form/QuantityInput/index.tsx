import { Minus, Plus } from 'phosphor-react'
import { QuantityContainer } from './styles'
import { ButtonHTMLAttributes } from 'react'

interface QuantityInputProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  quantity: number
  incrementQuantity: () => void
  decrementQuantity: () => void
}

export function QuantityInput({
  quantity,
  incrementQuantity,
  decrementQuantity,
  ...rest
}: QuantityInputProps) {
  const parseQuantityToText = String(quantity).padStart(2, '0')
  return (
    <QuantityContainer>
      <button {...rest} onClick={decrementQuantity}>
        <Minus size={14} />
      </button>
      <span>{parseQuantityToText}</span>
      <button onClick={incrementQuantity}>
        <Plus size={14} />
      </button>
    </QuantityContainer>
  )
}
