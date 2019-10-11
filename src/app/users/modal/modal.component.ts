import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserserviceService } from '../service/userservice.service';
import { User } from '../model/user';
import { ToastService } from 'src/app/service/toast.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

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

  myForm: FormGroup;

  constructor(public activeModal: NgbActiveModal, 
    private userService: UserserviceService, 
    private toastService: ToastService,
    private formBuilder:FormBuilder) { 
      this.myForm = this.formBuilder.group({
        firstname:['',[Validators.required,Validators.minLength(5),Validators.maxLength(30)]],
        lastname:['',[Validators.required,Validators.minLength(5),Validators.maxLength(30)]],
        occupy:['',[Validators.required,Validators.pattern('^([a-zA-Z]{2,40} +[a-zA-Z]{2,40})$')]],
        profpic:['',[Validators.required,Validators.minLength(5),Validators.pattern('(http(s?):)|([/|.|\w|\s])*\.(?:jpg|png)')]]
      });
    }

  ngOnInit() {
    this.modal_title=this.user?"Edit User":"Create New User";
    this.firstname=this.user?this.user.firstName:"";
    this.lastname=this.user?this.user.lastName:"";
    this.occupy=this.user?this.user.occupation:"";
    this.profpic=this.user?this.user.profile_picture:"";
  }

  get profile():AbstractControl{
    return this.myForm.get('profpic');
  }
  
  get lname():AbstractControl{
    return this.myForm.get('lastname');
  }

  get fname():AbstractControl{
    return this.myForm.get('firstname');
  }

  get oc():AbstractControl{
    return this.myForm.get('occupy');
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
      this.activeModal.close(updated);
    }else{
      var newuser:User={
        firstName:this.firstname,
        lastName:this.lastname,
        occupation:this.occupy,
        profile_picture:this.profpic
      };
      this.activeModal.close(newuser);
    }
  }

}
