import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  toasts: any[] = [];
 
  // Push new Toasts to array with content and options
  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  } 
 
  // Callback method to remove Toast DOM element from view
  remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
  
  showStandard() {
    this.show('I am a standard toast', {
      delay: 100000000000,
      autohide: false
    });
  }

  showPrimary() {
    this.show('Successfully Added!', {
      classname: 'bg-primary text-light p-1',
      delay: 2000 ,
      autohide: true,
      headertext: 'Toast Header'
    });
  }
 
  showSuccess() {
    this.show('Successfully Added!', {
      classname: 'bg-success text-light p-1',
      delay: 2000 ,
      autohide: true,
      headertext: 'Toast Header'
    });
  }
  
  showError() {
    this.show('Deleted Successfully!', {
      classname: 'bg-danger text-light p-1',
      delay: 9999 ,
      autohide: true,
      headertext: 'Error!!!'
    });
  }
 
  showCustomToast(customTpl) {
    this.show(customTpl, {
      classname: 'bg-info text-light p-1',
      delay: 3000,
      autohide: true
    });
  }
}
