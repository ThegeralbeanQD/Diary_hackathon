const { Router } = require('express');

const diaryController = require('../controllers/diaries');
// const authenticator = require('../middleware/authenticator.js');

const diaryRouter = Router();

diaryRouter.get("/", diaryController.index);
diaryRouter.get("/:id", diaryController.show);
diaryRouter.post('/', diaryController.create);
diaryRouter.delete('/:id', diaryController.destroy);


module.exports = diaryRouter

