import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../model/user';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {

  @Input()
  user:User;

  constructor(public activeModal: NgbActiveModal, private userService:UserserviceService) { }

  ngOnInit() {
  }

  onDelete(user){
    this.userService.deleteUser(user);
    this.activeModal.close("deleted");
  }

}
