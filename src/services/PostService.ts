import { Request, Response } from "express";
import { prisma } from "../db";

export class PostService {
  async createPost(req: Request, res: Response) {
    try {
      const data = req.body;

      const post = await prisma.post.create({
        data: {
          ...data,
        },
      });

      return res.status(200).json({ post });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
