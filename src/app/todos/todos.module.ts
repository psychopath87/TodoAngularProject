import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TodoRoutingModule } from './todos-routing.module';



@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TodoRoutingModule
  ]
})
export class TodosModule { }
