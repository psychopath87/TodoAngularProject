import { Component, OnInit, Input } from '@angular/core';
import { Todos } from '../model/todos';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TodosService } from '../service/todos-service.service';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input()
  todo:Todos;
  name:string;
  description:string;
  status:string;
  owner_id:string
  owner:string;
  modal_title:string;

  constructor(public activeModal: NgbActiveModal, 
    private todoService:TodosService, private toastService: ToastService) { }

  ngOnInit() {
    this.modal_title = this.todo?"Edit Todo":"Create New Todo";
    this.name = this.todo?this.todo.name:"";
    this.description = this.todo?this.todo.description:"";
    this.status = this.todo?this.todo.status:"";
    this.owner_id = this.todo?this.todo.owner_id:"";
    this.owner = this.todo?this.todo.owner:"";
  }

  onUpdate(){
    if(this.todo){
      var update : Todos={
        id:this.todo.id,
        name:this.name,
        description:this.description,
        status:this.status,
        owner_id:this.owner_id,
        owner:this.owner
      };
      this.todoService.updateTodo(update);
      console.log(update);
      console.log(this.todoService.getTodo(update.id));
      this.activeModal.close("updated");
      this.toastService.showCustomToast('Successfully Updated Todo!');
    }else{
      var newtodo : Todos={
        id:"",
        name:this.name,
        description:this.description,
        status:this.status,
        owner_id:this.owner_id,
        owner:this.owner
      };
      this.todoService.addTodo(newtodo);
      this.activeModal.close("added");
      this.toastService.showPrimary();
    }
  }

}
