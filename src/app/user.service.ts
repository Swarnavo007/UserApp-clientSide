import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UpdateUser } from './update-user';
import { IUser } from './user';
import { UserData } from './user-data';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url='http://localhost:4000/user/users';


  constructor(private http:HttpClient) { }

  getUsers():Observable<IUser[]>{
    // console.log(this.http.get<IUser[]>(this._url));
    return this.http.get<IUser[]>(this._url);
  }

  postUser(user:UserData){
    return this.http.post<any>(this._url,user);
  }

  deleteUser(id:any){
    return this.http.delete<any>(`${this._url}/?id=${id}`);
  }

  updateUser(id:any,info:UpdateUser){
    return this.http.patch<any>(`${this._url}/?id=${id}`,info);
  }
}
