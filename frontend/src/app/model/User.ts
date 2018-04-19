export class User {
  firstName: string;
  lastName: string;
  username: string;
}

export class UserResponse {
  users: Array<User>;
  total: number;
}
