import { useEffect, useState } from 'react'
import Car1 from '../../../../../assets/img/car1.png'
import Car2 from '../../../../../assets/img/car2.png'
import Car3 from '../../../../../assets/img/car3.png'
import { CardProps } from './Card.interface'
import * as S from './Card.styles'

export const Card = ({codigo, nome, hasNavigation, navigation, height}: CardProps) => {
  const [carImage, setCarImage] = useState<string>('')

  useEffect(() => {
    const randomCarImage = () => {
      const carImages = [Car1, Car2, Car3]
      const randomIndex = Math.floor(Math.random() * carImages.length)
      setCarImage(carImages[randomIndex])
    }
    randomCarImage()
  },[])
  return(
    <S.Container onPress={hasNavigation ? navigation : null} height={height} >
      <S.Image source={carImage} />
      <S.Name>Model: {nome}</S.Name>
      <S.Code>Code: {codigo}</S.Code>
    </S.Container>
  )
}