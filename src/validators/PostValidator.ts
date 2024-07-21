import { NextFunction, Request, Response } from "express";
import { ErrorService } from "../services/ErrorService";
import { postCreateSchema } from "../schemas/post/postCreateSchema";

export class PostValidator {
  constructor(private errorService: ErrorService) {}

  createPostValidation(req: Request, res: Response, next: NextFunction) {
    return this.errorService.handleErrorMessage(
      postCreateSchema,
      req,
      res,
      next
    );
  }
}
