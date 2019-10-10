import { Component, OnInit, Input } from '@angular/core';
import { Todos } from '../model/todos';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserserviceService } from 'src/app/users/service/userservice.service';
import { ToastService } from 'src/app/service/toast.service';
import { TodosService } from '../service/todos-service.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {

  @Input()
  todo:Todos;
  constructor(public activeModal: NgbActiveModal, 
    private toastService:ToastService,
    private todoService:TodosService) { }

  ngOnInit() {
  }

  onDelete(){
    // this.todoService.deleteTodo(this.todo);
    this.activeModal.close(this.todo);
    console.log(this.todo);
    // this.toastService.showError();
  }

}
