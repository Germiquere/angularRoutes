import { User } from './user.interface';

export interface LoginResponse {
  ok: boolean;
  user: User;
}
