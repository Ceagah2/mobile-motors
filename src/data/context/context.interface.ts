export interface UserContextData {
  userName: string | null;
  saveUserName: (name: string) => Promise<void>;
  clearUserName: () => Promise<void>;
}