import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postsarr: any[];
  
  constructor(private service: PostService) { 
    
  }

  createPost1(inp: HTMLInputElement){
    let post={title: inp.value } ;
    inp.value=' ';
    
    this.service.createPost(post).subscribe(response =>{
      post['id'] = response.json().id;
      this.postsarr.splice(0,0,post);
      console.log(response.json());
    }, error => {
      alert('An unexpected error occured !!!');
      console.log(error);
    });
  }

  updatePost(post){
    this.service.updatePost(post).subscribe(response => {
      console.log(response.json());
    }, error => {
      alert('An unexpected error occured !!!');
      console.log(error);
    });
    
  }
  deletePost(post){
    this.service.deletePost(post.id).subscribe(response => {
      let index = this.postsarr.indexOf(post);
      this.postsarr.splice(index, 1);
    }, error => {
      alert('An unexpected error occured !!!');
      console.log(error);
    });
  }

  ngOnInit() {
    this.service.getPost().subscribe(response => {
      console.log(response.json());
      this.postsarr=response.json();
    }, error => {
      alert('An unexpected error occured !!!');
      console.log(error);
    });
  }

}
