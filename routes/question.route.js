const { Router } = require('express')
const Question = require('../models/Question')
const config = require('../config/default.json')
const auth = require('../middleware/auth.middleware')
const router = Router()

// /api/question/add
router.post('/add', auth, async (req, res) => {
  try {
    const { title, trueAnswer, falseAnswer1, falseAnswer2, category } = req.body

    if (!title || !trueAnswer || !falseAnswer1 || !falseAnswer2) {
      return res.status(500).json({ message: 'Не все поля были заполнены' })
    }

    const newQuestion = new Question({
      title,
      trueAnswer,
      falseAnswer1,
      falseAnswer2,
      category,
      owner: req.user.userId,
    })

    await newQuestion.save()

    res.status(201).json({ newQuestion, message: 'Вопрос добавлен' })
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

// /api/question/*all
router.get('/', auth, async (req, res) => {
  try {
    const questions = await Question.find({ owner: req.user.userId })
    res.json(questions)
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так' })
  }
})

router.get('/:id', auth, async (req, res) => {
  try {
    const question = await Question.findById(req.params.id)
    res.json(question)
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так' })
  }
})

module.exports = router
