import { Component, EventEmitter, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post-form',
  standalone: false,
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent {

  @Output() postCreated = new EventEmitter<any>();
  
  post = {
    userName : '',
    title:'' ,
    caption : ''
  }
  
  submitPost(){
    const obj = {
      userName :this.post.userName,
      title:this.post.title ,
      caption : this.post.caption ,
      
    }
    this.postCreated.emit(obj); 
    

  }
  

 
}
