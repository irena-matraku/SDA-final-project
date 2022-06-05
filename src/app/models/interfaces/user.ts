import { Role } from "../enum/role";


export interface User {
  id: number,
  name: string,
  lastName: string,
  email: string,
  password: string,
  role: Role
}

export type Users = Array<User>;
