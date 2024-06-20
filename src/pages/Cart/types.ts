import * as zod from 'zod'

export const newOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1),
  rua: zod.string().min(1),
  numero: zod.string().min(1),
  complemento: zod.string().optional(),
  bairro: zod.string().min(1),
  cidade: zod.string().min(1),
  uf: zod.string().min(1),
  paymentMethod: zod.enum(['credit', 'debit', 'cash']),
})

export type NewOrderFormDataProps = zod.infer<
  typeof newOrderFormValidationSchema
>
