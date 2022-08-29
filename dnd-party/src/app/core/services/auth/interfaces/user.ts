export interface Roles {
  player?: boolean;
  master?: boolean;
  admin?: boolean;
}

export interface User {
  uid: string;
  email: string;
  roles: Roles;
}
