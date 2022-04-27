import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { NavComponent } from './components/nav/nav.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TexttransformPipe } from './pipes/texttransform.pipe';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { environment } from '../environments/environment';

const routes:Routes=[
  {path:'',component:TodoFormComponent},
  {path:'addtask',component:TodoFormComponent},
  {path:'todo/:id',component:TodoListComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    NavComponent,
    TodoListComponent,
    TexttransformPipe,

  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:2000,
      progressBar:true,
      progressAnimation:'increasing',
    }),
    FormsModule,
    HttpClientModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
