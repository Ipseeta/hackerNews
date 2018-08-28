const express = require('express'),
    router = express.Router(),
    NewsController = require('../controllers/news.controller');

router.route('/').get(NewsController.fetchNews);
router.route('/latest').get(NewsController.fetchLatestNews);
router.route('/ask').get(NewsController.ask);
router.route('/show').get(NewsController.show);
router.route('/jobs').get(NewsController.jobs);

module.exports = router;