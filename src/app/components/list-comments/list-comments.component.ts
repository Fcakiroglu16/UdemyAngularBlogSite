import { Component, OnInit } from "@angular/core";
import { CommentService } from "src/app/services/comment.service";
import { ActivatedRoute } from "@angular/router";
import { Comment } from "src/app/models/comment";

@Component({
  selector: "app-list-comments",
  templateUrl: "./list-comments.component.html",
  styleUrls: ["./list-comments.component.css"]
})
export class ListCommentsComponent implements OnInit {
  comments: Comment[] = [];
  loading: boolean;

  constructor(
    private commentService: CommentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loading = true;
    let id = Number(this.route.snapshot.paramMap.get("id"));

    this.commentService.commentList(id).subscribe(data => {
      this.comments = data;
      this.loading = false;
    });
  }
}
