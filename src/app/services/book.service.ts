import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  // http get request for fetching all the books
  getBooks():Observable<any>{
    return this.http.get(environment.baseUrl);
  }

  // http get request for fetching particular book details by id
  getBookDetails(bookId:any):Observable<any>{
    return this.http.get(environment.baseUrl+bookId);
  }

// http post request for adding books
  addBooks(data:object):Observable<any>{
    return this.http.post(environment.baseUrl,data);
  }

  // http delete request for deleting books by id
  deleteBooks(bookId:number):Observable<any>{
    return this.http.delete(environment.baseUrl+bookId)
  }

  // http put request for updating a book by id
  updateBoocks(bookId:number,bookDetails:any):Observable<any>{
    return this.http.put(environment.baseUrl+bookId,bookDetails);
  }

  // http get request for fetching(searching) books by their name
  searchBooks(name:string):Observable<any>{
    return this.http.get(environment.baseUrl+'?name='+name);
  }
}