const fetch = require('isomorphic-fetch');
exports.fetchUser = function (req, res) {

    fetch('https://api.hnpwa.com/v0/user/'+req.params.user + '.json', {
        headers: {
            'User-Agent': 'hackernews',
            accept: 'application/json',
            'Content-Type': 'application/json',
        },
        method: 'get',
    })
        .then(res => res.json())
        .then(content => {
            if(content === null){
                res.render('user', { user: content, status: 500 });
            }else{
                res.render('user', { user: content, status: 200 });
            }
        });
}