'use strict';

// 入室メッセージをサーバに送信する
// 入力されたユーザ名を取得する
const userName = $('#userName').val();
// 入室メッセージイベントを送信する
if (userName !== '') {

    socket.emit('sendMyNameEvent', userName);
}



// サーバから受信した入室メッセージを画面上に表示する
socket.on('recieveMyNameEvent', function (userName, formatted) {
    const keyuserName = userName;
    const myuserName = $('#userName').val();
    if (myuserName !== userName) {
        $('#thread').prepend('<p>' + userName + 'さんが入室しました。' +  ":&ensp;"+ '<' + formatted + '>' + '</p>');
        $('#thread').prepend('<img class="stamp" src="stamp_nyusitu_man.png" style="width: 160px; height: 160px;border-radius: 40px;margin-right: 20px;">');
        socket.emit('sendmemberEvent', myuserName, keyuserName);
    }


});

