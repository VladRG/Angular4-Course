import { BaseEntity, ResponseBase } from './BaseEntity';

export class User extends BaseEntity {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

export class UserResponse extends ResponseBase<User> {
  users: Array<User>;
  total: number;
}
