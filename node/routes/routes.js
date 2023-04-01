import express, { Router } from 'express'
import { CreateBlog, delateBlog, getAllBlogs, getBlog, updateBlog } from '../controllers/BlogController.js'
const router = express.Router()

router.get('/',getAllBlogs)
router.get('/:id',getBlog)
router.post('/',CreateBlog)
router.put('/:id',updateBlog)
router.delete('/:id',delateBlog)

export default router