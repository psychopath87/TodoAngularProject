import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { TodosComponent } from './todos/todos.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { TodoComponent } from './todo/todo.component';
import { NewuserComponent } from './newuser/newuser.component';

const routes: Routes=[
    {
        path:'users',
        loadChildren:'./users/users.module#UsersModule'
    },
    {
        path:'todos',
        loadChildren:'./todos/todos.module#TodosModule'
    }//,
    // {
    //     path:'user-details/:userId',
    //     component:UserdetailsComponent
    // },
    // {
    //     path:'newtodo',
    //     component:TodoComponent
    // },
    // {
    //     path:'newuser',
    //     component:NewuserComponent
    // }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}