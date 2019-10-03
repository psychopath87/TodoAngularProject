import { Component, OnInit } from '@angular/core';
import {userData} from '../users/users.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  filteredData:any[];
  constructor(private router:Router, private activatedRoute:ActivatedRoute) { 
    this.filteredData = userData;
  }

  ngOnInit() {
  }

}
