import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {userData} from '../users/users.component';
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {

  filteredData:any[];
  constructor(private router:Router, private activatedRoute:ActivatedRoute) { 
    this.filteredData = userData;
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap : ParamMap) => {
      const userId = paramMap.get('userId');
      this.filteredData = userData.filter((user) => {
        return user.id === userId;
      });

    });
    console.log(this.filteredData);
  }

}
