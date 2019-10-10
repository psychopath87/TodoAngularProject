import { Injectable } from '@angular/core';
import { Status } from './status.enum';
import { Todos } from '../model/todos';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Page } from '../model/page';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private httpClient:HttpClient) { }

  getRestTodos(page_size:number,page_number:number,id?:number):Observable<Page<Todos>>{
    let params = new HttpParams().set('page',(--page_number).toString()).set('size',page_size.toString());
    return this.httpClient.get<Page<Todos>>(`${environment.API_URL}/todos?id=${id}`,{params});
  }

  getRestTodo(todosId:number){
    return this.httpClient.get<Todos>(`${environment.API_URL}/todos/${todosId}`);
  }

  addRestTodos(todos):Observable<Todos>{
    // return null;
    return this.httpClient.post<Todos>(`${environment.API_URL}/todos`,todos);
  }

  updateRestTodos(todos:Todos):Observable<Todos>{
    return this.httpClient.put<Todos>(`${environment.API_URL}/todos/${todos.id}`,todos);
  }

  deleteRestTodos(todosId:number):Observable<Todos>{
    if(!todosId){
      return;
    }
    return this.httpClient.delete<Todos>(`${environment.API_URL}/todos/${todosId}`);
  }

}
