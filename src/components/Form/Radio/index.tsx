import { Icon } from 'phosphor-react'
import { RadioContainer } from './styles'
import { useTheme } from 'styled-components'
import { InputHTMLAttributes, LegacyRef, forwardRef } from 'react'

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: Icon
  value: string
  content: string
  isSelected: boolean
}

export const RadioForm = forwardRef(function RadioForm(
  { icon: Icon, content, value, isSelected, ...rest }: RadioProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  const theme = useTheme()

  return (
    <RadioContainer data-state={isSelected}>
      <input
        type="radio"
        value={value}
        {...rest}
        ref={ref}
        name="paymentMethod"
      />
      <Icon size={16} color={theme.purple} />
      <span>{content}</span>
    </RadioContainer>
  )
})
