import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { status, Todo, TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  category:String[]=[];
  taskName:String='';
  taskDesc:String='';
  taskCat:String='';
  status:status=status.Pending;
  created:Date=new Date;
  todo:Todo={} as Todo;
 
  list:any[]=[];
  constructor(private todoService:TodoService,private router:Router,private toastr:ToastrService) {
    this.getCategory();
  }

  getCategory() {
    this.todoService.getCategoryList().subscribe((data)=>{
    this.category=data;
    console.log(this.category);
    })
  }

  addTask(){
    this.todo.taskName=this.taskName;
    this.todo.taskDescription=this.taskDesc;
    this.todo.taskCategory=this.taskCat;
    this.todo.completed=this.status;
    this.todo.createdAt=this.created;
    this.todoService.addtodolist(this.todo).subscribe();
    this.todoService.getList();
    this.taskName='';
    this.taskDesc='';
    this.taskCat=''
    this.toastr.info("Task Added Successfully")

  }



  ngOnInit(): void {

  }

}
