import { NextFunction, Request, Response } from "express";
import { ErrorService } from "../services/ErrorService";
import { postCreateSchema } from "../schemas/post/postCreateSchema";
import { postUpdateSchema } from "../schemas/post/postUpdateSchema";

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

  udpatePostValidation(req: Request, res: Response, next: NextFunction) {
    return this.errorService.handleErrorMessage(
      postUpdateSchema,
      req,
      res,
      next
    );
  }
}
