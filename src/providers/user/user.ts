import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';

const httpOptions ={
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

 private url: string = 'http://localhost:3000/api/users';

  constructor(public http: HttpClient) {}

  //Set up a simple observable.
  public getUsers(): Observable<User> {
    return this.http.get<User>(this.url);
  }



  public getUser(id: string): Observable<User> {
    return this.http.get<User>(this.url + `/view/${id}`);
  }
  
 public createUser(): void{
   console.log('Create User');
 }
 public editUser(): void{
   console.log('Edit User');
 }
 public deleteUser(): void{
   console.log('Delete User');
 }
}
