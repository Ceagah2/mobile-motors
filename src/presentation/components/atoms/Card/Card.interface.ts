export interface CardProps {
  codigo: string;
  nome: string;
  hasNavigation?: boolean;
  navigation?: () => void
}