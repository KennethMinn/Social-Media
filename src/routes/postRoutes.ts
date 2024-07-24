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

router.get(
  "/posts",
  authMiddleware.verifyToken.bind(authMiddleware),
  postController.getPosts.bind(postController)
);

router.get(
  "/post/:postId",
  authMiddleware.verifyToken.bind(authMiddleware),
  postController.getPost.bind(postController)
);

router.post(
  "/post",
  authMiddleware.verifyToken.bind(authMiddleware),
  postValidator.createPostValidation.bind(postValidator),
  postController.createPost.bind(postController)
);

router.put(
  "/post/:postId",
  authMiddleware.verifyToken.bind(authMiddleware),
  postValidator.udpatePostValidation.bind(postValidator),
  postController.updatePost.bind(postController)
);

router.delete(
  "/post/:postId",
  authMiddleware.verifyToken.bind(authMiddleware),
  postController.deletePost.bind(postController)
);

export const postRoutes = router;
