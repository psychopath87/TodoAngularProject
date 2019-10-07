import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { ModalComponent } from './modal/modal.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';

const routes: Routes = [
    { 
        path:'',    
        component:UsersComponent
    },
    {
        path:':userId',
        component:UsersComponent
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
    entryComponents: [
        ModalComponent,
        DeleteModalComponent
      ]
})

export class UsersRoutingModule{}