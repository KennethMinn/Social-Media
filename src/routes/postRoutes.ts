import { postController } from "./../controllers/PostController";
import { Router } from "express";
import { authMiddleware } from "../middlewares/AuthMiddleware";
import { postValidator } from "../validators/PostValidator";
const router = Router();

router.use(authMiddleware.verifyToken.bind(authMiddleware)); //prefix middleware for post

router.get("/posts", postController.getPosts.bind(postController));

router.get("/post/:postId", postController.getPost.bind(postController));

router.post(
  "/post",
  postValidator.createPostValidation.bind(postValidator),
  postController.createPost.bind(postController)
);

router.put(
  "/post/:postId",
  postValidator.udpatePostValidation.bind(postValidator),
  postController.updatePost.bind(postController)
);

router.delete("/post/:postId", postController.deletePost.bind(postController));

export const postRoutes = router;
