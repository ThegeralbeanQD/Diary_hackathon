const { Router } = require('express');

const diaryController = require('../controllers/diaries');
// const authenticator = require('../middleware/authenticator.js');

const diaryRouter = Router();

diaryRouter.get("/", diaryController.index);

module.exports = diaryRouter


