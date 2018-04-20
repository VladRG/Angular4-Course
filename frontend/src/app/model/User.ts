export class User {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

export class UserResponse {
  users: Array<User>;
  total: number;
}
