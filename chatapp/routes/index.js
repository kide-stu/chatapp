'use strict';

const { application } = require('express');
const express = require('express');
const router = express.Router();

// ログイン画面の表示
router.get('/', function (request, response, next) {
    response.render('index');
});

// チャット画面の表示
router.post('/room', function (request, response, next) {
    console.log('ユーザ名：' + request.body.userName);
    const userIcon = request.body['index-icon-select'];
    console.log('選択したアイコン：' + userIcon);
    response.render('room', { userName: request.body.userName, userIcon: userIcon });

});


// ユーザー登録画面の表示
router.get('/signup', function (request, response, next) {
    response.render('signup');
})


// ユーザー登録
router.post('/signup', function (request, response, next) {

    const username = request.body.userName;
    const password = request.body.password;

    const sqlite3 = require("sqlite3").verbose();
    const db = new sqlite3.Database("./db/users.db");

    db.serialize(() => {
        db.get('select count(*) from users where username=?', username, function (err, data) {
            if (err) {
                throw err;
            }
            console.log(data['count(*)']);
            let count = data['count(*)'];

            if (count > 0) {
                console.log("既にユーザーは存在します");
            } else {
                console.log("ユーザー登録開始");
                //パスワードを暗号化する
                const bcrypto = require("bcrypt");
                let hashedPassword = bcrypto.hashSync(password, 10);
                console.log("ハッシュ化完了");
                console.log(hashedPassword);


                // ユーザーとパスワードを登録する
                db.run("insert into users(username, password) values(?, ?)", username, hashedPassword);
                console.log("ユーザー登録終了");
            }
        });
    })

    response.render('signup');
});


module.exports = router;


