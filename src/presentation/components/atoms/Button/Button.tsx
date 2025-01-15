import { ButtonProps } from './Button.interface'
import * as S from './Button.styles'

export const Button = ({title, bgColor, textColor, ...rest}: ButtonProps) => { 
  return(
    <S.Container 
      bgColor={bgColor}
      {...rest}
    >
      <S.ButtonText textColor={textColor}>{title}</S.ButtonText>
    </S.Container>
  )
}