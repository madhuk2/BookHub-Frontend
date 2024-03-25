import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //we are creating the base api so that we can just add the required method url pattern whenever required 
  private baseApi='http://localhost:8080/user/'

//for calling backend through the apis by get or post request all the relevant classes are defined in HttpClient
  constructor(private http:HttpClient) {
      
   }
   //when the api will hit the backend the response from the backend is extracted by Observable
   //for signup the data will be going as an obect of the user class so we are writting here user as the parameter
   signup(user:User):Observable<any>{
      return this.http.post<any>(this.baseApi+'addOrUpdate',user)
       
   }
}
