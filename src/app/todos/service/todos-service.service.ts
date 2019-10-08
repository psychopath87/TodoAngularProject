import { Injectable } from '@angular/core';
import { Status } from './status.enum';
import { Todos } from '../model/todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  todoData = [
    {
      id: "1",
      name: "Task 1",
      description: "Write web application",
      status: Status.ON_GOING,
      owner_id:"1",
      owner: "Ted Ian Osias"
    },
    {
      id: "2",
      name: "Task 2",
      description: "Develop Full Stack Application",
      status: Status.ON_GOING,
      owner_id:"2",
      owner: "A A"
    },
    {
      id: "3",
      name: "Task 3",
      description: "Buy some milk",
      status: Status.FINISHED,
      owner_id:"3",
      owner: "B B"
    },
    {
      id: "4",
      name: "Task 4",
      description: "Go to the store",
      status: Status.FINISHED,
      owner_id:"4",
      owner: "C C"
    },
    {
      id: "5",
      name: "Task 5",
      description: "Pay the bills",
      status: Status.PENDING,
      owner_id:"5",
      owner: "D D"
    },
    {
      id: "6",
      name: "Task 6",
      description: "Feed the dog",
      status: Status.PENDING,
      owner_id:"6",
      owner: "E E"
    },
    {
      id: "7",
      name: "Task 7",
      description: "Water the plants",
      status: Status.UNFINISHED,
      owner_id:"7",
      owner: "F F"
    },
    {
      id: "8",
      name: "Task 8",
      description: "Buy some groceries",
      status: Status.ON_GOING,
      owner_id:"8",
      owner: "G G"
    },
    {
      id: "9",
      name: "Task 9",
      description: "Clean the house",
      status: Status.FINISHED,
      owner_id:"9",
      owner: "H H"
    },
    {
      id: "10",
      name: "Task 10",
      description: "Deliver orders to client",
      status: Status.FINISHED,
      owner_id:"10",
      owner: "I I"
    }
  ];

  todo:Todos;
  getTodos(){
    const tData : Todos[] = this.todoData;
    return tData;
  }

  getTodosPaginate(page_size:number, page_number:number){
    --page_number;
    return this.getTodos().slice(page_number * page_size,(page_number+1) * page_size);
  }

  getTodo(findtodo){
    return this.todo = this.getTodos().find(x => {
      return x.id === findtodo;
    });
  }

  updateTodo(todo){
    let findtodo = this.getTodo(todo.id);
    let index = this.getTodos().indexOf(findtodo);
    console.log(index);
    this.getTodos()[index] = todo;
  }

  deleteTodo(todo){
    let findtodo = this.getTodo(todo.id);
    let index = this.getTodos().indexOf(findtodo);
    this.getTodos().splice(index,1)[0]; 
  }

  deleteTodoByUserId(user){
    let findtodo = this.getTodos().find(x =>{
      return x.owner_id === user;
    });
    let index = this.getTodos().indexOf(findtodo);
    this.getTodos().splice(index,1)[0];
  }

  addTodo(todo){
    var tid:string;
    tid = (parseInt(this.getTodos()[this.getTodos().length-1].id)+1).toString();
    todo.id = tid;
    this.getTodos().push(todo);
  }
}
