import Logo from '../../../../assets/img/logo.png'
import * as S from './Header.styles'

export const HeaderWithLogo = () => {
  return(
    <S.Header>
      <S.Logo source={Logo}/>
      <S.Title>Mobile motors</S.Title>
      <S.SubTitle>Find your car, anywhere in the planet.</S.SubTitle>
    </S.Header>
  )
}