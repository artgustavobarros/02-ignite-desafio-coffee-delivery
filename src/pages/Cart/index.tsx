import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import {
  Amount,
  CartContainer,
  Checkout,
  CheckoutButtons,
  Confirm,
  Item,
  Order,
  OrderContent,
  OrderHeader,
  PaymentMethod,
  Radios,
} from './styles'
import { useTheme } from 'styled-components'
import { InputForm } from '../../components/Form/Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { RadioForm } from '../../components/Form/Radio'
import { QuantityInput } from '../../components/Form/QuantityInput'
import { useCart } from '../../hook/use-cart'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { convertValueToCurrency } from '../../utils/convert-number-to-currency'
import { useNavigate } from 'react-router-dom'

const cartFormInputsSchemaValidation = zod.object({
  cep: zod.string().min(1),
  rua: zod.string().min(1),
  numero: zod.string().min(1),
  complemento: zod.string().optional(),
  bairro: zod.string().min(1),
  cidade: zod.string().min(1),
  uf: zod.string().min(1),
  paymentMethod: zod.enum(['credit', 'debit', 'cash']),
})

export type FormInputs = zod.infer<typeof cartFormInputsSchemaValidation>

export function Cart() {
  const theme = useTheme()
  const navigate = useNavigate()
  const { register, watch, handleSubmit } = useForm<FormInputs>({
    resolver: zodResolver(cartFormInputsSchemaValidation),
  })
  const {
    items,
    removeItens,
    incrementItemQuantity,
    decrementItemQuantity,
    createNewClient,
  } = useCart()

  const selectedPaymentMethod = watch('paymentMethod')

  function handleRemomveItens(name: string) {
    removeItens(name)
  }

  const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
    createNewClient(data)
    navigate('/cart/success')
  }

  const totalOfItens = items.reduce((acc, value) => {
    return (acc += Number(value.price) * Number(value.quantity))
  }, 0)

  const shippingPrice = 3.5

  return (
    <CartContainer>
      <form id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
        <Order>
          <legend>Complete seu pedido</legend>
          <section>
            <OrderHeader>
              <MapPinLine size={22} color={theme.yellow_dark} />
              <span>
                <h2>Endereço de entrega</h2>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </span>
            </OrderHeader>
            <OrderContent>
              <InputForm
                placeholder="CEP"
                containerProps={{ style: { gridArea: 'cep' } }}
                {...register('cep')}
              />
              <InputForm
                placeholder="Rua"
                containerProps={{ style: { gridArea: 'rua' } }}
                {...register('rua')}
              />
              <InputForm
                placeholder="Número"
                containerProps={{ style: { gridArea: 'numero' } }}
                {...register('numero')}
              />
              <InputForm
                placeholder="Complemento"
                opcional
                containerProps={{ style: { gridArea: 'complemento' } }}
                {...register('complemento')}
              />
              <InputForm
                placeholder="Bairro"
                containerProps={{ style: { gridArea: 'bairro' } }}
                {...register('bairro')}
              />
              <InputForm
                placeholder="Cidade"
                containerProps={{ style: { gridArea: 'cidade' } }}
                {...register('cidade')}
              />
              <InputForm
                placeholder="UF"
                containerProps={{ style: { gridArea: 'uf' } }}
                {...register('uf')}
              />
            </OrderContent>
          </section>
          <PaymentMethod>
            <OrderHeader>
              <CurrencyDollar size={22} color={theme.purple} />
              <span>
                <h2>Pagamento</h2>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </span>
            </OrderHeader>
            <Radios>
              <RadioForm
                icon={CreditCard}
                content="CARTÃO DE CRÉDITO"
                value="credit"
                isSelected={selectedPaymentMethod === 'credit'}
                {...register('paymentMethod')}
              />
              <RadioForm
                icon={Bank}
                content="CARTÃO DE DÉBITO"
                value="debit"
                isSelected={selectedPaymentMethod === 'debit'}
                {...register('paymentMethod')}
              />
              <RadioForm
                icon={Money}
                content="DINHEIRO"
                value="cash"
                isSelected={selectedPaymentMethod === 'cash'}
                {...register('paymentMethod')}
              />
            </Radios>
          </PaymentMethod>
        </Order>
      </form>
      <Checkout>
        <legend>Cafés selecionados</legend>
        <section>
          {items &&
            items.map((item) => (
              <Item key={item.name}>
                <img src={item.img} alt="exemplo" />
                <div>
                  <p>{item.name}</p>
                  <CheckoutButtons>
                    <QuantityInput
                      type="button"
                      quantity={item.quantity}
                      incrementQuantity={() => incrementItemQuantity(item.name)}
                      decrementQuantity={() =>
                        decrementItemQuantity(item.name)
                      }
                    />
                    <button
                      type="button"
                      onClick={() => handleRemomveItens(item.name)}
                    >
                      <Trash color={theme.purple} />
                      REMOVER
                    </button>
                  </CheckoutButtons>
                </div>
                <p>R$ 9,90</p>
              </Item>
            ))}
          <Amount>
            <div>
              <p>Total de items</p>
              <p>{convertValueToCurrency(totalOfItens)}</p>
            </div>
            <div>
              <p>Entrega</p>
              <p>{convertValueToCurrency(shippingPrice)}</p>
            </div>
            <div>
              <p>Total</p>
              <p>{convertValueToCurrency(totalOfItens + shippingPrice)}</p>
            </div>
          </Amount>
          <Confirm type="submit" form="order">
            CONFIRMAR PEDIDO
          </Confirm>
        </section>
      </Checkout>
    </CartContainer>
  )
}
