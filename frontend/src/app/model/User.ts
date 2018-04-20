import { BaseEntity } from './BaseEntity';

export class User extends BaseEntity {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

export class UserResponse {
  users: Array<User>;
  total: number;
}
