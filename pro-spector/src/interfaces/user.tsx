export interface iUserProviderFunctions {
  authenticated: boolean;
  register_user: (data: any) => void;
  login: (data: any) => void;
  logout: () => void;
}

export interface iUserProviderProps {
  children: React.ReactNode;
}

export interface iLogin {
  username: string;
  password: string;
}

export interface iRegisterUser {
  completeName: string;
  email: string;
  phone: string;
  password: string;
}

