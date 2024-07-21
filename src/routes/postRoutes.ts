import { PostController } from "./../controllers/PostController";
import { Router } from "express";
import { AuthMiddleware } from "../middlewares/AuthMiddleware";
import { AuthService } from "../services/AuthService";
import { PostService } from "../services/PostService";
import { PostValidator } from "../validators/PostValidator";
import { ErrorService } from "../services/ErrorService";

//services
const authService = new AuthService();
const postService = new PostService();
const errorService = new ErrorService();

//controllers
const postController = new PostController(postService);

//validators
const postValidator = new PostValidator(errorService);

//middlewares
const authMiddleware = new AuthMiddleware(authService);

const router = Router();

router.post(
  "/post",
  authMiddleware.verifyToken.bind(authMiddleware),
  postValidator.createPostValidation.bind(postValidator),
  postController.createPost.bind(postController)
);

export const postRoutes = router;
