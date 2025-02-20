import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  standalone: false,
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts: any= [];

  handelPost(post :any){
    console.log(post);
    this.posts.push(post);
    
  }
  

  editHandel(post: any){
    console.log(post);
    const newTitle =prompt('Edit Post : your new title')
    post.title =newTitle;
    const newCaption = prompt('Edit Post : your new caption');
    post.caption= newCaption;

  }
  deleteHandel(post:any){
    console.log(post);
    this.posts = this.posts.filter((p: any) => p !== post);
  }

}

