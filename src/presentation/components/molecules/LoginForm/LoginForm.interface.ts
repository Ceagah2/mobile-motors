export interface FormProps {
  onSubmit: (data: { user: string; password: string }) => void;
}