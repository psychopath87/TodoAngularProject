import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { TodosService } from './service/todos-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { Todos } from './model/todos';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  @Input() name;
  @Input() description;
  @Input() status;
  @Input() owner_id;
  @Input() owner;

  title = 'Todos List';

  searchText: string;
  filteredData: any[];
  todoData:any[];

  itemsPerPage = this.activatedRoute.snapshot.queryParamMap.has('size')?parseInt(this.activatedRoute.snapshot.queryParamMap.get('size')):5;
  currentPage = this.activatedRoute.snapshot.queryParamMap.has('page')?parseInt(this.activatedRoute.snapshot.queryParamMap.get('page')):1;
  collectionSize :number;

  constructor(private router:Router, 
    private activatedRoute:ActivatedRoute, 
    private todoService:TodosService,
    public modalService:NgbModal) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap : ParamMap) => {
      const userId = paramMap.get('userId');
      if(userId){
        this.filteredData = this.todoService.getTodos().filter((todo) => {
          return todo.owner_id === userId;
        });
      }else{
        this.fetchAll();
      }
    });
  }

  fetchAll(){
    this.todoData = this.todoService.getTodosPaginate(this.itemsPerPage, this.currentPage);
    this.collectionSize = this.todoService.getTodos().length;
    this.filteredData = this.todoData;
    this.router.navigate(["/todos"],{
      queryParams: {
        page:this.currentPage,
        size:this.itemsPerPage
      }
    });
  }

  paginate(event){
    this.fetchAll();
  }

  onSearch(){

    const searchText = this.searchText.toLowerCase();

    if(this.searchText){
      this.router.navigate(["/todos"],{
        queryParams: {
          q:this.searchText,
          page:this.currentPage,
          size:10
        }
      });
      this.filteredData = this.todoService.getTodos().filter((todo) => {
        return todo.name.toLowerCase().includes(searchText) ||
        todo.description.toLowerCase().includes(searchText) ||
        todo.status.toLowerCase().includes(searchText) ||
        todo.owner.toLowerCase().includes(searchText);
      });
    }else{
      this.filteredData = this.todoService.getTodos();
    }
  }

  newTodo(){
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.result.then(res => {
      if(res==="added"){
        this.fetchAll();
      }
    });
  }

  todos:Todos;
  onUpdate(todo){
    // this.users = this.userService.getUser(user.id);
    this.todos = todo;
    console.log(todo);
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.todo = todo;
    modalRef.result.then(res => {
      if(res==="updated"){
        this.fetchAll();
      }
    });
  }

  onDelete(todo){
    // console.log(user);
    this.todos = todo;
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.todo = todo;
    modalRef.componentInstance.name = todo.name;
    modalRef.result.then(res =>{
      if(res==="deleted"){
        this.fetchAll();
      }
    });
  }

}
