import { Router } from 'express';
import validateJOI from '../middlewares/validateJOI.js';
import {
  createPost,
  deletePost,
  getAllPosts,
  getSinglePost,
  updatePost
} from '../controllers/posts.js';
import { postSchema } from '../joi/schemas.js';

const postsRouter = Router();

postsRouter.route('/').get(getAllPosts).post(validateJOI(postSchema), createPost);

postsRouter.route('/:id').get(getSinglePost).put(updatePost).delete(deletePost);

export default postsRouter;
