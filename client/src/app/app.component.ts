import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodolistApp';

  totalTaskCount:number=0;
  pendingTaskCount:number=0;
  completedTaskCount:number=0;

  list:any[]=[];
  constructor(private todo:TodoService,private router:Router) {
    this.getlist();
  
   }


  getlist() {
    this.todo.getList()
    this.todo.list.subscribe(data=>{
      this.list=data;
      this.calculateCount(this.list);
    })
  }

  calculateCount(list: any[]) {
    this.totalTaskCount=0;
    this.pendingTaskCount=0;
    this.completedTaskCount=0;
    for(let i=0;i<list.length;i++){
        this.totalTaskCount++;
      if(list[i].completed=='completed'){
        this.completedTaskCount=this.completedTaskCount+1;
      }
      if(list[i].completed=='pending'){
        this.pendingTaskCount=this.pendingTaskCount+1;
      }
    }
  }


}
