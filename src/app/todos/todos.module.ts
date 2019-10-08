import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TodoRoutingModule } from './todos-routing.module';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { ModalComponent } from './modal/modal.component';
import { NgbModalModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [TodosComponent, DeleteModalComponent, ModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TodoRoutingModule,
    NgbModalModule,
    NgbPaginationModule
  ]
})
export class TodosModule { }
