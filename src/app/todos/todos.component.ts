import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  title = 'Todos List';

  searchText: string;
  filteredData: any[];
  constructor(private router:Router, private activatedRoute:ActivatedRoute) { 
    this.filteredData = this.todoData;
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap : ParamMap) => {
      const userId = paramMap.get('userId');
      if(userId){
        this.filteredData = this.todoData.filter((todo) => {
          return todo.owner_id === userId;
        });
      }else{
        this.filteredData = this.todoData;
      }
    });
  }

  todoData = [
    {
      id: "1",
      name: "Task 1",
      description: "Write web application",
      status: "ON_GOING",
      owner_id:"1",
      owner: "Ted Ian Osias"
    },
    {
      id: "2",
      name: "Task 2",
      description: "Develop Full Stack Application",
      status: "ON_GOING",
      owner_id:"2",
      owner: "A A"
    },
    {
      id: "3",
      name: "Task 3",
      description: "Buy some milk",
      status: "FINISHED",
      owner_id:"3",
      owner: "B B"
    },
    {
      id: "4",
      name: "Task 4",
      description: "Go to the store",
      status: "FINISHED",
      owner_id:"4",
      owner: "C C"
    },
    {
      id: "5",
      name: "Task 5",
      description: "Pay the bills",
      status: "PENDING",
      owner_id:"5",
      owner: "D D"
    },
    {
      id: "6",
      name: "Task 6",
      description: "Feed the dog",
      status: "PENDING",
      owner_id:"6",
      owner: "E E"
    },
    {
      id: "7",
      name: "Task 7",
      description: "Water the plants",
      status: "UNFINISHED",
      owner_id:"7",
      owner: "F F"
    },
    {
      id: "8",
      name: "Task 8",
      description: "Buy some groceries",
      status: "ON_GOING",
      owner_id:"8",
      owner: "G G"
    },
    {
      id: "9",
      name: "Task 9",
      description: "Clean the house",
      status: "FINISHED",
      owner_id:"9",
      owner: "H H"
    },
    {
      id: "10",
      name: "Task 10",
      description: "Deliver orders to client",
      status: "FINISHED",
      owner_id:"10",
      owner: "I I"
    }
  ];

  onSearch(){

    const searchText = this.searchText.toLowerCase();

    if(this.searchText){
      this.filteredData = this.todoData.filter((todo) => {
        return todo.name.toLowerCase().includes(searchText) ||
        todo.description.toLowerCase().includes(searchText) ||
        todo.status.toLowerCase().includes(searchText) ||
        todo.owner.toLowerCase().includes(searchText);
      });
    }else{
      this.filteredData = this.todoData;
    }
  }

  onUpdate(todo){
    console.log(todo);
  }

  onDelete(todo){
    console.log(todo);
  }

}
