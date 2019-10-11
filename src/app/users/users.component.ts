import { Component, OnInit, Input } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { UserserviceService } from "./service/userservice.service";
import { User } from "./model/user";
import { ModalComponent } from "./modal/modal.component";
import { DeleteModalComponent } from "./delete-modal/delete-modal.component";
import { createOfflineCompileUrlResolver } from "@angular/compiler";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { Page } from "./model/page";
import { concat, of } from "rxjs";
import { delay, catchError } from "rxjs/operators";
import { ToastService } from "../service/toast.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  @Input() firstName;
  @Input() lastName;
  @Input() occupation;
  @Input() profilePicture;

  title = "User List";

  searchText: string;
  filteredData: User[];
  userData: User[];
  filteredLength: number;

  itemsPerPage = this.activatedRoute.snapshot.queryParamMap.has("size")
    ? parseInt(this.activatedRoute.snapshot.queryParamMap.get("size"))
    : 5;
  currentPage = this.activatedRoute.snapshot.queryParamMap.has("page")
    ? parseInt(this.activatedRoute.snapshot.queryParamMap.get("page"))
    : 1;
  collectionSize: number;

  constructor(
    public modalService: NgbModal,
    private userService: UserserviceService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const userId = paramMap.get("userId");
      if (userId) {
        this.userService
          .getRestUsers(this.itemsPerPage, this.currentPage)
          .subscribe((result: Page<User>) => {
            this.collectionSize = result.totalElements;
            this.userData = result.content;
            this.filteredData = this.userData.filter(user => {
              return user.id == userId;
            });
            this.filteredDataLength();
          });
      } else {
        this.fetchAll();
      }
    });
  }

  filteredDataLength() {
    this.filteredLength = this.filteredData.length;
  }

  fetchAll() {
    this.userService
      .getRestUsers(this.itemsPerPage, this.currentPage)
      .subscribe((result: Page<User>) => {
        this.collectionSize = result.totalElements;
        this.userData = result.content;
        this.filteredData = this.userData;
        this.filteredDataLength();
        this.router.navigate(["/users"], {
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
      this.router.navigate(["/users"], {
        queryParams: {
          q: this.searchText,
          page: this.currentPage,
          size: 10
        }
      });
      this.filteredData = this.userData.filter(user => {
        return (
          user.firstName.toLowerCase().includes(searchText) ||
          user.lastName.toLowerCase().includes(searchText) ||
          user.occupation.toLowerCase().includes(searchText)
        );
      });
      this.filteredDataLength();
    } else {
      this.filteredData = this.userData;
      this.filteredDataLength();
    }
  }

  newUser() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.result.then(res => {
      if (res) {
        this.userService.addRestUser(res).subscribe(() => {
          this.fetchAll();
          this.toastService.showSuccess();
        });
      }
    });
  }

  users: User;
  onUpdate(user) {
    this.userService.getRestUser(user.id).subscribe((restuser: User) => {
      const modalRef = this.modalService.open(ModalComponent);
      modalRef.componentInstance.user = restuser;
      modalRef.result.then(res => {
        if (res) {
          this.userService.updateRestUser(res).subscribe(() => {
            this.toastService.showCustomToast("Successfully Updated User!");
            this.fetchAll();
          });
        }
      });
    });
  }

  onDelete(user) {
    // console.log(user);
    this.users = user;
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.user = user;
    modalRef.componentInstance.firstName = user.firstName;
    modalRef.componentInstance.lastName = user.lastName;
    modalRef.result.then(res => {
      if (res) {
        this.userService.deleteRestUser(res).subscribe(() => {
          this.toastService.showError();
          this.fetchAll();
        });
      }
    });
  }
}
