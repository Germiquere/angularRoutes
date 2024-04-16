import { User } from './user.interface';

export interface AutoLoginResponse {
  ok: boolean;
  user: User;
}
