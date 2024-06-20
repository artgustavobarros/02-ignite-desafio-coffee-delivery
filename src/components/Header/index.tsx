import { CartContainer, HeaderContainer, Location } from './styles'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { useCart } from '../../hook/use-cart'

export function Header() {
  const { totalItensOnCart } = useCart()
  return (
    <HeaderContainer>
      <Link to="/">
        <img
          src={logo}
          alt="Logo com um desenho de um copo de café com um foguete a esquerda e texto Coffee Delivery a direita"
        />
      </Link>
      <div>
        <Location>
          <MapPin weight="fill" />
          <p>Porto Alegre, RS</p>
        </Location>
        <CartContainer to="/cart">
          <ShoppingCart weight="fill" />
          <span>{totalItensOnCart}</span>
        </CartContainer>
      </div>
    </HeaderContainer>
  )
}
