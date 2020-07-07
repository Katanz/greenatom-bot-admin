const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  title: { type: String, required: true },
  trueAnswer: { type: String, required: true },
  falseAnswer1: { type: String, required: true },
  falseAnswer2: { type: String, required: true },
  category: { type: String, required: true },
  owner: { type: Types.ObjectId, ref: 'User' },
})

module.exports = model('Question', schema)
