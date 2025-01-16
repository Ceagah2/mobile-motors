export interface CardProps {
  height?: string;
  codigo: string;
  nome: string;
  hasNavigation?: boolean;
  navigation?: () => void
}