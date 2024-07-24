import { Request, Response } from "express";
import { PostService } from "../services/PostService";

export class PostController {
  constructor(private postService: PostService) {}

  getPosts(req: Request, res: Response) {
    return this.postService.getPosts(req, res);
  }

  getPost(req: Request, res: Response) {
    return this.postService.getPost(req, res);
  }

  createPost(req: Request, res: Response) {
    return this.postService.createPost(req, res);
  }

  updatePost(req: Request, res: Response) {
    return this.postService.updatePost(req, res);
  }

  deletePost(req: Request, res: Response) {
    return this.postService.deletePost(req, res);
  }
}
