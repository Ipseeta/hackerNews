const fetch = require('isomorphic-fetch');
exports.fetchNews = function (req, res) {
    fetch('https://api.hnpwa.com/v0/news/1.json', {
        headers: {
            'User-Agent': 'hackernews',
            accept: 'application/json',
            'Content-Type': 'application/json',
        },
        method: 'get',
    })
        .then(res => res.json())
        .then(content => {
            res.render('index', { newsArr: content });
        });
}
exports.fetchLatestNews = function (req, res) {
    fetch('https://api.hnpwa.com/v0/newest/1.json', {
        headers: {
            'User-Agent': 'hackernews',
            accept: 'application/json',
            'Content-Type': 'application/json',
        },
        method: 'get',
    })
        .then(res => res.json())
        .then(content => {
            res.render('index', { newsArr: content });
        });
}
exports.ask = function (req, res) {
    fetch('https://api.hnpwa.com/v0/ask/1.json', {
        headers: {
            'User-Agent': 'hackernews',
            accept: 'application/json',
            'Content-Type': 'application/json',
        },
        method: 'get',
    })
        .then(res => res.json())
        .then(content => {
            res.render('index', { newsArr: content });
        });
}

exports.show = function (req, res) {
    fetch('https://api.hnpwa.com/v0/show/1.json', {
        headers: {
            'User-Agent': 'hackernews',
            accept: 'application/json',
            'Content-Type': 'application/json',
        },
        method: 'get',
    })
        .then(res => res.json())
        .then(content => {
            res.render('index', { newsArr: content });
        });
}
exports.jobs = function (req, res) {
    fetch('https://api.hnpwa.com/v0/jobs/1.json', {
        headers: {
            'User-Agent': 'hackernews',
            accept: 'application/json',
            'Content-Type': 'application/json',
        },
        method: 'get',
    })
        .then(res => res.json())
        .then(content => {
            res.render('index', { newsArr: content });
        });
}