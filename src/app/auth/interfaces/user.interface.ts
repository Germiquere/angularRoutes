export interface User {
  _id: string;
  id: string;
  name: string;
  email: string;
  address?: string;
  phone?: number;
  type: string;
  creationStatus: string;
  accessStatus: string;
  token: string;
}
