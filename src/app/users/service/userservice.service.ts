import { Injectable, TemplateRef } from '@angular/core';
import { User } from '../model/user';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Page } from '../model/page';
import { HttpClient,HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {


  constructor(private httpClient:HttpClient) { }

  /**
   * START OF REST API'S
   */
  getRestUsers(page_size:number,page_number:number):Observable<Page<User>>{
    let params = new HttpParams().set('page',(--page_number).toString()).set('size',page_size.toString());
    return this.httpClient.get<Page<User>>(`${environment.API_URL}/users`,{params});
  }

  getRestUser(userId:number){
    return this.httpClient.get<User>(`${environment.API_URL}/users/${userId}`);
  }

  addRestUser(user):Observable<User>{
    console.log(user);
    // return null;
    return this.httpClient.post<User>(`${environment.API_URL}/users`,user);
  }

  updateRestUser(user:User):Observable<User>{
    if(!user){
      return;
    }
    return this.httpClient.put<User>(`${environment.API_URL}/users/${user.id}`,user);
  }

  deleteRestUser(userId:number):Observable<User>{
    if(!userId){
      return;
    }
    return this.httpClient.delete<User>(`${environment.API_URL}/users/${userId}`);
  }

}
