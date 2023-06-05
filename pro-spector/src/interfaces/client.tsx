export interface iClient {
  id: number;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface iClientContact {
  id: number;
  clientId: number;
  client: iClient;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}
