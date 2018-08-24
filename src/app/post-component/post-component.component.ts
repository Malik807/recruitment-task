import { Component, OnInit } from '@angular/core';
import { ApiService, Post } from '../api.service';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})

export class PostComponentComponent implements OnInit {
	dataIsAvailable: boolean;
	selectedPostId: string;
  posts: Post[];


  constructor(private apiService: ApiService) {
    this.dataIsAvailable = false;
  }

  ngOnInit(): void {
    this.apiService.getPosts().subscribe(posts => {
      this.posts = posts;
      this.dataIsAvailable = true;
    });
  }

  onSelect(selectedPostId: string): void {
  	this.selectedPostId = selectedPostId;
  }

}
