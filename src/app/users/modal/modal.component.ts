import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserserviceService } from '../service/userservice.service';
import { User } from '../model/user';
import { stringify } from '@angular/compiler/src/util';
import { ToastService } from 'src/app/service/toast.service';
import { TodosService } from 'src/app/todos/service/todos-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input()
  user:User;
  firstname:string;
  lastname:string;
  occupy:string;
  profpic:string
  modal_title:string;
  // updatedUser:User;

  constructor(public activeModal: NgbActiveModal, 
    private userService: UserserviceService, 
    private toastService: ToastService) { }

  ngOnInit() {
    this.modal_title=this.user?"Edit User":"Create New User";
    this.firstname=this.user?this.user.firstName:"";
    this.lastname=this.user?this.user.lastName:"";
    this.occupy=this.user?this.user.occupation:"";
    this.profpic=this.user?this.user.profile_picture:"";
  }

  onUpdate(){
    if(this.user){
      var updated:User={
        id:this.user.id,
        firstName:this.firstname,
        lastName:this.lastname,
        occupation:this.occupy,
        profile_picture:this.profpic
      };
      //this.userService.updateUser(updated);
      this.activeModal.close(updated);
      // this.toastService.showCustomToast('Successfully Updated User!');
    }else{
      var newuser:User={
        firstName:this.firstname,
        lastName:this.lastname,
        occupation:this.occupy,
        profile_picture:this.profpic
      };
      // this.userService.addUser(newuser);
      this.activeModal.close(newuser);
      console.log(newuser);
      this.toastService.showSuccess();
    }
  }

}
