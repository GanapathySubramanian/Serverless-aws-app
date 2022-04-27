import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  category:String[]=['Movies','Sports','Travels','Studies','Others']
  @Input('total') totalTaskCount:number=0;
  @Input('pending') pendingTaskCount:number=0;
  @Input('completed')completedTaskCount:number=0;
  list:any[]=[];


  constructor(private todo:TodoService,private router:Router,private route:ActivatedRoute) {
      this.getCategory();
      this.getlist();
   }

  getCategory() {
    this.todo.getCategoryList().subscribe((data)=>{
      this.category=data;
    })
  }

  getlist() {
    this.todo.list.subscribe(data=>{
      this.list=data;
      console.log(this.list);

    })
  }



  ngOnInit(): void {
  
  }




}
