import mongoose from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  title: { type: String, required: true, unique: true, lowercase: true, maxlength: 60 },
  slug: { type: String, required: true, unique: true, lowercase: true, maxlength: 60 },
  summary: { type: String, maxlength: 120 },
  author: { type: String, required: true, lowercase: true },
  body: { type: String, lowercase: true },
  tags: [{ type: String, lowercase: true }]
}, { timestamps: true })

export default mongoose.model('Blog', _schema)