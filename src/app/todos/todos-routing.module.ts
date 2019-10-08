import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos.component';
import { ModalComponent } from './modal/modal.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';

const routes: Routes = [
    { 
        path:'',    
        component:TodosComponent
    },
    {
        path:':userId',
        component:TodosComponent
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

export class TodoRoutingModule{}