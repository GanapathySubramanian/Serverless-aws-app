import { keyframes } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import {  BehaviorSubject, Observable ,of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  category:Observable<string[]> = of(['Movies','Sports','Travels','Studies','Others']);
  todo:Todo={} as Todo;
  baseUrl='https://luhzrnprbf.execute-api.us-east-1.amazonaws.com/dev';
  listItems:Todo[]=[];
  // private sourceSubject = new Subject<Todo[]>();
  // sourceMessage = this.sourceSubject.asObservable();
  list:BehaviorSubject<Todo[]>=new BehaviorSubject<Todo[]>(this.listItems);

  constructor(private http:HttpClient) {
  }


  getCategoryList():Observable<String[]>{
    return this.category;
  }

  addtodolist(todo:any):Observable<any>{
    this.todo=todo;
    console.log(this.todo)
    return this.http.post(this.baseUrl,this.todo);
  }

  topending(key:any){
    let temp={completed:'pending'}
    this.http.post(`${this.baseUrl}/todo/${key}`,temp).subscribe(res=>{
      console.log(res);
      this.getList();
    })
  }

  tocompleted(key:any){
    let temp={completed:'completed'};
    this.http.post(`${this.baseUrl}/todo/${key}`,temp).subscribe(res=>{
      console.log(res);

      this.getList();
    })
  }
  remove(key:any){
    this.http.delete(`${this.baseUrl}/todo/${key}`).subscribe(res=>{
      this.getList();
    })
  }
  getList(){
    console.log("iam called");

    this.http.get(`${this.baseUrl}/todos`).subscribe((data: any) => {
      this.listItems = [];
      if (data) {
      console.log(data);
      this.listItems=data;
      this.list.next(this.listItems)
      }
    });
  }


}

export interface Todo{
  id:Optional;
  taskName:String;
  taskDescription:String;
  taskCategory:String;
  completed:status;
  createdAt:Date;

}

export enum status{
  Pending='pending',
  Completed='completed'
}
