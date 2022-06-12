import { Project } from "./project";
import { User } from "./user";

export interface Member extends User {
    tasks?: Task;
    projects?: Project;
    members?: Members;
}
  

export type Members = Array<Member>;
  