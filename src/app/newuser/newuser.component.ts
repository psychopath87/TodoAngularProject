import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.scss']
})
export class NewuserComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onCancel(){
    this.router.navigateByUrl("/users");
  }

}
