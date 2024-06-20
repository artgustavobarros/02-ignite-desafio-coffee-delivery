import { HeroContainer, Tags, Text } from './styles'
import heroImg from '../../assets/hero-img.svg'
import heroBackground from '../../assets/hero-background.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function Brand() {
  const theme = useTheme()

  return (
    <HeroContainer>
      <img src={heroBackground} alt="" id="background" />
      <div>
        <Text>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </Text>
        <Tags>
          <li>
            <span>
              <ShoppingCart
                size={32}
                weight="fill"
                color={theme.background}
                style={{ backgroundColor: theme.yellow_dark }}
              />
            </span>
            Compra simples e segura
          </li>
          <li>
            <span>
              <Package
                size={32}
                weight="fill"
                color={theme.background}
                style={{ backgroundColor: theme.base_text }}
              />
            </span>
            Embalagem mantém o café intacto
          </li>
          <li>
            <span>
              <Timer
                size={32}
                weight="fill"
                color={theme.background}
                style={{ backgroundColor: theme.yellow }}
              />
            </span>
            Entrega rápida e rastreada
          </li>
          <li>
            <span>
              <Coffee
                size={32}
                weight="fill"
                color={theme.background}
                style={{ backgroundColor: theme.purple }}
              />
            </span>
            O café chega fresquinho até você
          </li>
        </Tags>
      </div>
      <img
        src={heroImg}
        alt="Copo de café na diagonal com um fundo que contém imagens do grão de café inteiro, triturado e moído"
      />
    </HeroContainer>
  )
}
