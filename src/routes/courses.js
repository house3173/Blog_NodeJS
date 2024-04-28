const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.post('/handle-form', courseController.handleForm);
router.post('/:id/update', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id/delete', courseController.delete);
router.delete('/:id/removeTrash', courseController.removeTrash);
router.get('/:id/edit', courseController.edit);
router.get('/:slug', courseController.show);


module.exports = router;
