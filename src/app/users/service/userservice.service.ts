import { Injectable, TemplateRef } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor() { }

  user:User;
  usersData = [
    {
      id: "1",
      firstName: "Ted Ian",
      lastName: "Osias",
      occupation: "Software Engineer",
      profilePicture:
        "https://i.pinimg.com/originals/1f/62/51/1f6251d4e9ab99d8bd84a4548a6f902e.jpg"
    },
    {
      id: "2",
      firstName: "A",
      lastName: "A",
      occupation: "Front End",
      profilePicture:
        "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fustechportal.com%2Fwp-content%2Fuploads%2F2018%2F09%2FBadBoy-aa0abf31-2fa4-4664-b468-62fcd3876f0f-498x1024.jpg&f=1&nofb=1"
    },
    {
      id: "3",
      firstName: "B",
      lastName: "B",
      occupation: "Back End",
      profilePicture:
        "https://images.unsplash.com/photo-1559815435-13978747eecd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
    },
    {
      id: "4",
      firstName: "C",
      lastName: "C",
      occupation: "Full Stack",
      profilePicture:
        "https://i.pinimg.com/originals/1f/62/51/1f6251d4e9ab99d8bd84a4548a6f902e.jpg"
    },
    {
      id: "5",
      firstName: "D",
      lastName: "D",
      occupation: "Designer",
      profilePicture:
        "https://i.pinimg.com/originals/1f/62/51/1f6251d4e9ab99d8bd84a4548a6f902e.jpg"
    },
    {
      id: "6",
      firstName: "E",
      lastName: "E",
      occupation: "Analyst",
      profilePicture:
        "https://i.pinimg.com/originals/1f/62/51/1f6251d4e9ab99d8bd84a4548a6f902e.jpg"
    },
    {
      id: "7",
      firstName: "F",
      lastName: "F",
      occupation: "Project Manager",
      profilePicture:
        "https://i.pinimg.com/originals/1f/62/51/1f6251d4e9ab99d8bd84a4548a6f902e.jpg"
    },
    {
      id: "8",
      firstName: "G",
      lastName: "G",
      occupation: "QA Engineer",
      profilePicture:
        "https://i.pinimg.com/originals/1f/62/51/1f6251d4e9ab99d8bd84a4548a6f902e.jpg"
    },
    {
      id: "9",
      firstName: "H",
      lastName: "H",
      occupation: "Technical Writer",
      profilePicture:
        "https://i.pinimg.com/originals/1f/62/51/1f6251d4e9ab99d8bd84a4548a6f902e.jpg"
    },
    {
      id: "10",
      firstName: "I",
      lastName: "I",
      occupation: "Junior Programmer",
      profilePicture:
        "https://i.pinimg.com/originals/1f/62/51/1f6251d4e9ab99d8bd84a4548a6f902e.jpg"
    }
  ];

  getUsers(){
    const uData : User[] = this.usersData;
    return uData;
  }

  getUsersPaginate(page_size:number, page_number:number){
    --page_number;
    return this.getUsers().slice(page_number * page_size,(page_number+1) * page_size);
  }

  getUser(finduser){
    return this.user = this.getUsers().find(x =>{
      return x.id == finduser;
    });
  }

  updateUser(user){
    let finduser = this.getUser(user.id);
    let index = this.getUsers().indexOf(finduser);
    this.getUsers()[index] = user;
  }
  
  deleteUser(user){
    let finduser = this.getUser(user.id);
    let index = this.getUsers().indexOf(finduser);
    this.getUsers().splice(index,1)[0];
  }

  addUser(user){
    var uid:string;
    uid = (parseInt(this.getUsers()[this.getUsers().length-1].id)+1).toString();
    console.log(uid);
    user.id=uid;
    this.getUsers().push(user);
  }

}
