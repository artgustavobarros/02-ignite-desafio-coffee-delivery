import { CardContainer, Details, Order } from './styles'
import { ShoppingCart } from 'phosphor-react'
import { CardProps } from './types'
import { QuantityInput } from '../Form/QuantityInput'
import { useCart } from '../../hook/use-cart'
import { useState } from 'react'

export function Card({ data }: CardProps) {
  const { addItens } = useCart()
  const [quantity, setQuantity] = useState(1)

  function onIncrementQuantity() {
    if (quantity < 99) {
      setQuantity((state) => state + 1)
    }
  }

  function onDecrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  function handleAddItensToCart() {
    addItens(data.name, data.src, quantity)
  }
  return (
    <CardContainer>
      <Details>
        <img src={data.src} alt="" />
        <ul>
          {data.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <h1>{data.name}</h1>
        <p>{data.details}</p>
      </Details>
      <Order>
        <h2>
          <span>R$ </span>9,90
        </h2>
        <QuantityInput
          quantity={quantity}
          incrementQuantity={onIncrementQuantity}
          decrementQuantity={onDecrementQuantity}
        />
        <button type="button" onClick={handleAddItensToCart}>
          <ShoppingCart weight="fill" />
        </button>
      </Order>
    </CardContainer>
  )
}
