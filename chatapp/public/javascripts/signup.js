'use strict';

// ユーザ―名とパスワードをデータベースに登録する
function signup() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    const nospacingUserName = userName.replace(/\s+/g, "");
    const nokaigyouUserName = nospacingUserName.replace(/\n+/g, "");

    // パスワードを取得
    const password = $('#password').val();
    const nospacingPassword = password.replace(/\s+/g, "");
    const nokaigyouPassword = nospacingPassword.replace(/\n+/g, "");

    // ユーザ名が未入力でないかチェックする
    if (nokaigyouUserName === "") {
        alert('ユーザ名を入力してください');
        return;
    }

    // パスワードが未入力でないかチェックする
    if (nokaigyouPassword === "") {
        alert('パスワードを入力してください');
        return;
    }

    // クライアントサイド
    $('form').submit();

}

