import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes=[
    {
        path:'users',
        loadChildren:'./users/users.module#UsersModule'
    },
    {
        path:'',
        redirectTo:'users',
        pathMatch:'full'
    },
    {
        path:'todos',
        loadChildren:'./todos/todos.module#TodosModule'
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}