import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Todo, TodoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class
TodoListComponent implements OnInit {


  list:Todo[]=[];
  category:any="";
  total:number=0;
  pending:number=0;
  completed:number=0;
  userEmail:any=null;

  constructor(private todo:TodoService,private route: ActivatedRoute,private router:Router,private toastr:ToastrService) {
    console.log("todolist constructor");
    this.getlist();
    this.route.paramMap.subscribe((params) => {
      this.category = params.get('id');
      console.log(this.category);
      
    })
  }

  ngOnInit(): void {
  }

   getlist() {
     this.todo.getList();
      this.todo.list.subscribe(data=>{
      this.list=data;
      })
    }

  topending(id:any){
    this.todo.topending(id);
    this.toastr.warning("Task Moved to TodoList")

  }
  toCompleted(id:any){
    this.todo.tocompleted(id);
    this.toastr.success("Task Moved to CompletedList")

  }
    remove(id:any){
    this.todo.remove(id);
    this.toastr.error("Task Removed Successfully")
  }


}
