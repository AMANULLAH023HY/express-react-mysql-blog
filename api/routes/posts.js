import express from 'express';
import { addPostsController, deletePostsController, getPostsController, getSinglePostsController, updatePostsController } from '../Controller/posts.js';

const router = express.Router();

router.get("/",getPostsController);
router.get("/:id",getSinglePostsController);
router.post("/",addPostsController);
router.delete("/delete/:id",deletePostsController);
router.put("/:id",updatePostsController);


export default router;
