import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';
import { UserdetailsModule } from './userdetails/userdetails.module';
import { TodoComponent } from './todo/todo.component';
import { TodoModule } from './todo/todo.module';
import { NewuserModule } from './newuser/newuser.module';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    UsersModule,
    TodosModule,
    UserdetailsModule,
    TodoModule,
    NewuserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
