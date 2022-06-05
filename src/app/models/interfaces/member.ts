import { User } from "./user";

export interface Member extends User {
    tasks?: Task;
}
  

export type Members = Array<Member>;
  