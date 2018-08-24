import { Component, OnInit, Input } from '@angular/core';
import { ApiService, Comment } from '../api.service';

@Component({
  selector: 'app-comment-component',
  templateUrl: './comment-component.component.html',
  styleUrls: ['./comment-component.component.css']
})

export class CommentComponentComponent implements OnInit {
	@Input() postId: string;
	comments: Comment[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {}

  ngOnChanges(postId: string) {
   this.getComments();
  }

  getComments(): void {
  	this.apiService.getComments(this.postId).subscribe(comments => {
      this.comments = comments;
      console.log(this.comments)
    });
  }

}
