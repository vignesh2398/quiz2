const express = require('express');
const {getQuestion, createQuestion, updateQuestion, deleteQuestion} = require('../controllers/functionforquiz');
const router =express.Router();

router.route('/getQuestions').get(getQuestion);
router.route('/CreateQuestion').post(createQuestion);
router.route('/updateQuestion/:id').put(updateQuestion);
router.route('/deleteQuestion/:id').delete(deleteQuestion);


module.exports=router;