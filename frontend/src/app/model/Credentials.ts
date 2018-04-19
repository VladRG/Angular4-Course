export class Credentials {
  username: string;
  password: string;
}

export class RegisterCredentials extends Credentials {
  constructor() {
    super();
  }

  firstName: string;
  lastName: string;
}
