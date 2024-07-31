import { postController } from "./../controllers/PostController";
import { Router } from "express";
import { authMiddleware } from "../middlewares/AuthMiddleware";
import { postValidator } from "../validators/PostValidator";
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
