export interface iLogin {
  email: string;
  password: string;
}

export interface iRegisterUser {
  email: string;
  name: string;
  password: string;
  admin: boolean;
}