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
        component:UsersComponent
    },
    {
        path:'todos',
        component:TodosComponent
    },
    {
        path:'todos/:userId',
        component:TodosComponent
    },
    {
        path:'user-details/:userId',
        component:UserdetailsComponent
    },
    {
        path:'newtodo',
        component:TodoComponent
    },
    {
        path:'newuser',
        component:NewuserComponent
    },
    {
        path:'',
        redirectTo:'users',
        pathMatch:'full'
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}