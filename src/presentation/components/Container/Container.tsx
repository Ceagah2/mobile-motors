import { IContainer } from './Container.interface';
import * as S from './Container.styles';

export const Container = (props: IContainer) => {
  return <S.MainContainer>{props.children}</S.MainContainer>;
};