'use strict';

// チャットルームに入室する
function enter() {
    // 入力されたユーザ名を取得する
    const userName = $('#userName').val();
    const nospacingUserName = userName.replace(/\s+/g, "");
    const nokaigyouUserName = nospacingUserName.replace(/\n+/g, "");
    // ユーザ名が未入力でないかチェックする
    if (nokaigyouUserName === "") {
        alert('ユーザ名を入力してください');
        return;
    }


    $('form').submit();
}
