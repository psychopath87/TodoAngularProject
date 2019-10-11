import { Component, OnInit, Input } from '@angular/core';
import { Todos } from '../model/todos';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserserviceService } from 'src/app/users/service/userservice.service';
import { Page } from 'src/app/users/model/page';
import { User } from 'src/app/users/model/user';

declare const $:any;

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
  owner_id:string;
  modal_title:string;
  uData:User[];


  constructor(public activeModal: NgbActiveModal,
    private userService:UserserviceService) { }

  ngOnInit() {
    this.modal_title = this.todo?"Edit Todo":"Create New Todo";
    this.name = this.todo?this.todo.name:"";
    this.description = this.todo?this.todo.description:"";
    this.status = this.todo?this.todo.status:"";
    this.owner_id = this.todo?this.todo.owner.id:"";
    this.userService.getRestUsers(10,1).subscribe((users:Page<User>) => {
      this.uData = users.content;
    });
    $(function () {
      $('.selectpicker').selectpicker();
    });
  }

  onUpdate(){
    if(this.todo){
      var update : Todos={
        id:this.todo.id,
        name:this.name,
        description:this.description,
        status:this.status,
        owner:{
          id : this.owner_id
        }
      };
      this.activeModal.close(update);
    }else{
      var newtodo : Todos={
        name:this.name,
        description:this.description,
        status:this.status,
        owner:{
          id:this.owner_id
        }
      };
      this.activeModal.close(newtodo);
    }
  }

}
