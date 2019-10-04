import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserserviceService } from './service/userservice.service';
import { User } from './model/user';
import { ModalComponent } from './modal/modal.component';


// export const userData = [
//   {
//     id: "1",
//     firstName: "Ted Ian",
//     lastName: "Osias",
//     occupation: "Software Engineer",
//     profilePicture:
//       "https://i.pinimg.com/originals/1f/62/51/1f6251d4e9ab99d8bd84a4548a6f902e.jpg"
//   },
//   {
//     id: "2",
//     firstName: "A",
//     lastName: "A",
//     occupation: "Front End",
//     profilePicture:
//       "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fustechportal.com%2Fwp-content%2Fuploads%2F2018%2F09%2FBadBoy-aa0abf31-2fa4-4664-b468-62fcd3876f0f-498x1024.jpg&f=1&nofb=1"
//   },
//   {
//     id: "3",
//     firstName: "B",
//     lastName: "B",
//     occupation: "Back End",
//     profilePicture:
//       "https://images.unsplash.com/photo-1559815435-13978747eecd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
//   },
//   {
//     id: "4",
//     firstName: "C",
//     lastName: "C",
//     occupation: "Full Stack",
//     profilePicture:
//       "https://i.pinimg.com/originals/1f/62/51/1f6251d4e9ab99d8bd84a4548a6f902e.jpg"
//   },
//   {
//     id: "5",
//     firstName: "D",
//     lastName: "D",
//     occupation: "Designer",
//     profilePicture:
//       "https://i.pinimg.com/originals/1f/62/51/1f6251d4e9ab99d8bd84a4548a6f902e.jpg"
//   },
//   {
//     id: "6",
//     firstName: "E",
//     lastName: "E",
//     occupation: "Analyst",
//     profilePicture:
//       "https://i.pinimg.com/originals/1f/62/51/1f6251d4e9ab99d8bd84a4548a6f902e.jpg"
//   },
//   {
//     id: "7",
//     firstName: "F",
//     lastName: "F",
//     occupation: "Project Manager",
//     profilePicture:
//       "https://i.pinimg.com/originals/1f/62/51/1f6251d4e9ab99d8bd84a4548a6f902e.jpg"
//   },
//   {
//     id: "8",
//     firstName: "G",
//     lastName: "G",
//     occupation: "QA Engineer",
//     profilePicture:
//       "https://i.pinimg.com/originals/1f/62/51/1f6251d4e9ab99d8bd84a4548a6f902e.jpg"
//   },
//   {
//     id: "9",
//     firstName: "H",
//     lastName: "H",
//     occupation: "Technical Writer",
//     profilePicture:
//       "https://i.pinimg.com/originals/1f/62/51/1f6251d4e9ab99d8bd84a4548a6f902e.jpg"
//   },
//   {
//     id: "10",
//     firstName: "I",
//     lastName: "I",
//     occupation: "Junior Programmer",
//     profilePicture:
//       "https://i.pinimg.com/originals/1f/62/51/1f6251d4e9ab99d8bd84a4548a6f902e.jpg"
//   }
// ];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  title = 'User List';

  searchText: string;
  filteredData: any[];
  userData: any[];
  constructor(public modalService: NgbModal, private userService: UserserviceService){
    this.userData = userService.getUsers();
    this.filteredData = this.userData;
  }

  ngOnInit(){
    
  }

  onSearch(){

    const searchText = this.searchText.toLowerCase();

    if(this.searchText){
      this.filteredData = this.userData.filter((user) => {
        return user.firstName.toLowerCase().includes(searchText) ||
        user.lastName.toLowerCase().includes(searchText) ||
        user.occupation.toLowerCase().includes(searchText);
      });
    }else{
      this.filteredData = this.userData;
    }
  }

  users:User;
  onUpdate(user){
    // this.users = this.userService.getUser(user.id);
    this.users = user;
    // console.log(this.userService.getUser(users.id));
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.firstName = this.users.firstName;
    modalRef.componentInstance.lastName = this.users.lastName;
    modalRef.componentInstance.occupation = this.users.occupation;
    modalRef.componentInstance.profilePicture = this.users.profilePicture;
  }

  onDelete(user){
    console.log(user);
  }

}
