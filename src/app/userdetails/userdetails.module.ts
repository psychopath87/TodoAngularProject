import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdetailsComponent } from './userdetails.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [UserdetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class UserdetailsModule { }
