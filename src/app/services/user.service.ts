import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';
import { Users } from '../users/list-users/list-users.component';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  //TODO: Use original WEB API as baseURL
  baseUrl: string = 'https://my-json-server.typicode.com/sunsiva/AnthologyMemberInfo/';
  constructor(private http: HttpClient) {}
   
  listUsers():Observable<Users[]>  
    {
        return this.http.get<Users[]>(this.baseUrl+'users');
    }

    viewUser(id:string)
    {
       return this.http.get(this.baseUrl + 'users/'+id);
    }
   
    addUser(userObj: any)
    {
      return this.http.post(this.baseUrl + 'users', userObj);
    }

    deleteUser(id: any){
      return this.http.delete(this.baseUrl + 'users/'+id);
    }

    updateUser(id: any, userObj: any)
    {
      return this.http.put(this.baseUrl + 'users/'+id, userObj);
    }
}
