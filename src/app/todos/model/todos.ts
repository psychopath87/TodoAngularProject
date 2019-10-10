export interface Todos {
    id?:string,
    name:string,
    description:string
    status:string,
    owner:{
        id : string,
        firstName?: string,
        lastName?: string,
        occupation?: string,
        profile_picture?: string
    }
}
