import { Content, SuccessContainer, SuccessGrid, Tag } from './styles'
import sucessHero from '../../assets/success-hero.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function Success() {
  const theme = useTheme()
  return (
    <SuccessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>
      <SuccessGrid>
        <div>
          <Content>
            <Tag>
              <MapPin
                size={32}
                weight="fill"
                color={theme.white}
                style={{ background: theme.purple }}
              />
              <article>
                <p>
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
              </article>
            </Tag>
            <Tag>
              <Timer
                size={32}
                color={theme.white}
                weight="fill"
                style={{ background: theme.yellow }}
              />
              <article>
                <p>Previsão de entrega</p>
                <p>
                  <strong>20 min - 30 min</strong>
                </p>
              </article>
            </Tag>
            <Tag>
              <CurrencyDollar
                size={32}
                color={theme.white}
                weight="fill"
                style={{ background: theme.yellow_dark }}
              />
              <article>
                <p>Pagamento na entrega</p>
                <p>
                  <strong>Cartão de crédito</strong>
                </p>
              </article>
            </Tag>
          </Content>
        </div>

        <img src={sucessHero} alt="" />
      </SuccessGrid>
    </SuccessContainer>
  )
}
