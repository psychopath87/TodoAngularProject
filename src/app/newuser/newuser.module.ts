import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewuserComponent } from './newuser.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [NewuserComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class NewuserModule { }
