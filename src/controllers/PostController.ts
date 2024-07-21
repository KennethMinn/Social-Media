import { Request, Response } from "express";
import { PostService } from "../services/PostService";

export class PostController {
  constructor(private postService: PostService) {}

  createPost(req: Request, res: Response) {
    return this.postService.createPost(req, res);
  }
}
