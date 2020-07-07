const express = require('express');
const router = express.Router();

// import controller methods
const { create, update, list, read, remove } = require('../controllers/post');
const { requireSignin } = require('../controllers/auth');

// routes
router.post('/post', requireSignin, create);
router.get('/posts', list);
router.get('/post/:slug', read);
router.put('/post/:slug', requireSignin, update);
router.delete('/post/:slug', requireSignin, remove);

module.exports = router;
