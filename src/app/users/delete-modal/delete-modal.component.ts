import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../model/user';
import { UserserviceService } from '../service/userservice.service';
import { ToastService } from 'src/app/service/toast.service';
import { TodosService } from 'src/app/todos/service/todos-service.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {

  @Input()
  user:User;

  constructor(public activeModal: NgbActiveModal, 
    private userService:UserserviceService, 
    private toastService:ToastService,
    private todoService:TodosService) { }

  ngOnInit() {
  }

  onDelete(){
    // this.userService.deleteUser(this.user);
    this.todoService.deleteTodoByUserId(this.user.id);
    this.activeModal.close("deleted");
    this.toastService.showError();
  }

}
