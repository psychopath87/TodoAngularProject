import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent} from './users.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UsersRoutingModule } from './users-routing.module';
import { ModalComponent } from './modal/modal.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';



@NgModule({
  declarations: [UsersComponent, ModalComponent, DeleteModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    UsersRoutingModule,
    NgbModalModule
  ]
})
export class UsersModule { }
