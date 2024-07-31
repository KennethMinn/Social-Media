import { Request, Response } from "express";
import { prisma } from "../db";

export class PostService {
  async getPosts(req: Request, res: Response) {
    try {
      const posts = await prisma.post.findMany({
        include: {
          author: true,
        },
      });

      return res.status(200).json({ posts });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  async getPost(req: Request, res: Response) {
    try {
      const { postId } = req.params;

      const post = await prisma.post.findUnique({
        where: {
          id: Number(postId),
        },
        include: {
          author: {
            select: {
              id: true,
              email: true,
              createdAt: true,
            },
          },
        },
      });

      return res.status(200).json({ post });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  async createPost(req: Request, res: Response) {
    try {
      const data = req.body;

      const post = await prisma.post.create({
        data,
      });

      return res.status(200).json({ post });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  async updatePost(req: Request, res: Response) {
    try {
      const { postId } = req.params;
      const { title } = req.body;

      const post = await prisma.post.update({
        where: {
          id: Number(postId),
        },
        data: {
          title,
        },
      });

      return res.status(200).json({ post });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  async deletePost(req: Request, res: Response) {
    try {
      const { postId } = req.params;

      await prisma.post.delete({
        where: {
          id: Number(postId),
        },
      });

      return res.status(200).json({ message: "post deleted successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}

export const postService = new PostService();
