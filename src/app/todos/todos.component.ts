import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute, Params, ParamMap } from "@angular/router";
import { TodosService } from "./service/todos-service.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalComponent } from "./modal/modal.component";
import { Todos } from "./model/todos";
import { DeleteModalComponent } from "./delete-modal/delete-modal.component";
import { Page } from "./model/page";
import { ToastService } from "../service/toast.service";
import { UserserviceService } from "../users/service/userservice.service";
import { User } from "../users/model/user";
import { catchError } from 'rxjs/operators';

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.scss"]
})
export class TodosComponent implements OnInit {
  @Input() name;
  @Input() description;
  @Input() status;
  @Input() owner_id;
  @Input() owner;

  title = "Todos List";

  searchText: string;
  filteredData: any[];
  todoData: any[];
  filteredLength:number;

  itemsPerPage = this.activatedRoute.snapshot.queryParamMap.has("size")
    ? parseInt(this.activatedRoute.snapshot.queryParamMap.get("size"))
    : 5;
  currentPage = this.activatedRoute.snapshot.queryParamMap.has("page")
    ? parseInt(this.activatedRoute.snapshot.queryParamMap.get("page"))
    : 1;
  collectionSize: number;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private todoService: TodosService,
    public modalService: NgbModal,
    private toastService: ToastService,
    public userService: UserserviceService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const userId = paramMap.get("userId");
      if (userId) {
        this.todoService
        .getRestTodos(this.itemsPerPage, this.currentPage, parseInt(userId))
        .subscribe((todos: Page<Todos>) => {
          this.collectionSize = todos.totalElements;
          this.todoData = todos.content;
          this.filteredData = this.todoData.filter((todo:Todos) => {
            return todo.owner.id == userId;
          });
          this.filteredDataLength();
        });
      } else {
        this.fetchAll();
      }
    });
  }

  filteredDataLength(){
    this.filteredLength = this.filteredData.length;
  }

  fetchAll() {
    this.todoService
      .getRestTodos(this.itemsPerPage, this.currentPage)
      .subscribe((todos: Page<Todos>) => {
        this.collectionSize = todos.totalElements;
        this.todoData = todos.content;
        this.filteredData = this.todoData;
        this.filteredDataLength();
        this.router.navigate(["/todos"], {
          queryParams: {
            page: this.currentPage,
            size: this.itemsPerPage
          }
        });
      });
  }

  paginate(event) {
    this.fetchAll();
  }

  onSearch() {
    const searchText = this.searchText.toLowerCase();

    if (this.searchText) {
      this.router.navigate(["/todos"], {
        queryParams: {
          q: this.searchText,
          page: this.currentPage,
          size: 10
        }
      });
      this.filteredData = this.todoData.filter(todo => {
        return (
          todo.name.toLowerCase().includes(searchText) ||
          todo.description.toLowerCase().includes(searchText) ||
          todo.status.toLowerCase().includes(searchText)
        );
      });
      this.filteredDataLength();
    } else {
      this.filteredData = this.todoData;
      this.filteredDataLength();
    }
  }

  newTodo() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.result.then(res => {
      if (res) {
        this.todoService.addRestTodos(res).subscribe(() => {
          this.fetchAll();
          this.toastService.showPrimary();
        },err =>{
          this.toastService.showErrorTodo();
        });
      }
    });
  }

  todos: Todos;
  onUpdate(todo) {
    this.todos = todo;
    console.log(todo);
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.todo = todo;
    modalRef.result.then(res => {
      if (res) {
        this.todoService.updateRestTodos(res).subscribe(() => {
          this.toastService.showCustomToast("Successfully Updated Todo!");
          this.fetchAll();
        },err =>{
          this.toastService.showErrorTodo();
        });
      }
    });
  }

  onDelete(todo) {
    // console.log(user);
    this.todos = todo;
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.todo = todo;
    modalRef.componentInstance.name = todo.name;
    modalRef.result.then(res => {
      if (res) {
        this.todoService.deleteRestTodos(res.id).subscribe(() => {
          this.toastService.showError();
          this.fetchAll();
        });
      }
    });
  }
}
