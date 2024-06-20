import {
  HTMLAttributes,
  InputHTMLAttributes,
  LegacyRef,
  forwardRef,
  useState,
} from 'react'
import { Box, InputContainer } from './styles'

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
  opcional?: boolean
  containerProps: HTMLAttributes<HTMLDivElement>
}

export const InputForm = forwardRef(function InputForm(
  { containerProps, opcional, ...rest }: InputFormProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  const [showSpan, setShowSpan] = useState(true)

  function handleSpanLabelFocused() {
    setShowSpan(false)
  }
  function handleSpanLabelBlurred() {
    setShowSpan(true)
  }

  return (
    <Box {...containerProps}>
      <InputContainer>
        <input
          {...rest}
          ref={ref}
          onFocus={handleSpanLabelFocused}
          onBlur={handleSpanLabelBlurred}
        />
        {opcional && <span data-state={showSpan}>Opcional</span>}
      </InputContainer>
    </Box>
  )
})
