import express from 'express'
import _blogService from '../services/blogService.js'

export default class BlogController {

  async getAllBlogs(req, res, next) {
    try {
      let blogs = await _blogService.find()
      res.send(blogs)
    } catch (err) { next(err) }
  }

  // async getBlogsByTitle(req, res, next) {
  //   try {
  //     let blogByTitle = await _blogService.find({ blog: req.query.slug })
  //     res.send()
  //   } catch (err) { next(err) }
  // }

  async getBlogsByTag(req, res, next) {
    try {
      let blogsByTag = await _blogService.find({ blog: req.query.tag })
      res.send()
    } catch (err) { next(err) }
  }

  async getBlogById(req, res, next) {
    try {
      let blogById = await _blogService.findById(req.params.blogId)
      res.send(blogById)
      if (!blogById) {
        return res.status(400).send("Blog not found")
      }
    } catch (err) { next() }
  }

  async createBlog(req, res, next) {
    try {
      let blog = await _blogService.create(req.body)
      res.send(blog)
    } catch (err) { next(err) }
  }

  async editBlog(req, res, next) {
    try {
      let editBlogById = await _blogService.findById(req.params.blogId)
      res.send(editBlogById)
    } catch (err) { next(err) }
  }

  async deleteBlog(req, res, next) {
    try {
      let blog = await _blogService.findByIdAndDelete(req.params.blogId)
      res.send("deleted")
    } catch (err) { next(err) }
  }

  constructor() {
    this.router = express.Router()
      .get('', this.getAllBlogs)
      //      .get('', this.getBlogsByTitle)
      .get('', this.getBlogsByTag)
      .get('/:blogId', this.getBlogById)
      .post('', this.createBlog)
      .put('/:blogId', this.editBlog)
      .delete('/:blogId', this.deleteBlog)
  }
}