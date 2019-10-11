import { User } from 'src/app/users/model/user';

export interface Todos {
    id?:string,
    name:string,
    description:string
    status:string,
    owner:User
}
