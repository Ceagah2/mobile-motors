import { ContainerProps } from './Container.interface';
import * as S from './Container.styles';

export const Container = (props: ContainerProps) => {
  return <S.MainContainer>{props.children}</S.MainContainer>;
};