import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ModalComponent } from './users/modal/modal.component';
import { NgbModalModule, NgbModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from './users/delete-modal/delete-modal.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModalModule,
    NgbModule,
    NgbToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
