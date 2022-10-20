'use strict';

// 投稿メッセージをサーバに送信する
function publish() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    //アイコンを取得
    const Icon = $('#userIcon').val();
    // 入力されたメッセージを取得
    let message = $('#message').val();


    //@の位置の取得
    const search = '@';
    const flag = -1;
    let toName = "";
    let search2 = message.indexOf(search);
    let search3 = message.lastIndexOf(search);
    if (flag == search2 || flag == search3) {
    }
    else {
        toName = message.substring(search2 +1, search3 );
        message = message.substring(search3+1);
    }

    //メッセージのスペースを除去
    const nospacemessage = message.replace(/\s+/g, "");
    //メッセージの改行を除去
    const nokaigyoumessage = nospacemessage.replace(/\n+/g, "");
    //メッセージの改行をタグに書き換え
    message = message.replace(/\n+/g, "<br>");
    //メッセージのスペースをタグに書き換え
    message = message.replace(/\s+/g, "&ensp;");


    // 投稿内容を送信
    //メッセージが空でないかの判別
    if (nokaigyoumessage !== "") {
        if ( nokaigyoumessage === '/member') {
            socket.emit('sendnowmemberEvent', userName);
            $('#message').val('');

        }
        else {
            // sendMessageEvent
            socket.emit('sendMessageEvent', message, userName, Icon, toName);
            $('#message').val('');
        }
    }

    else {
        alert("投稿文を入力してください");
    }


    return false;
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('receiveMessageEvent', function (message, userName, formatted,Icon, toName) {

    const myUserName = $('#userName').val();
    const myIcon = $('#userIcon').val();
    if (toName == '') {
        if (myUserName === userName && myIcon == Icon) {
            $('#thread').prepend('<div class="mymessage">&ensp;<small><'+formatted+'></small>&ensp;<div class="message">'+message+'</div><div class="name-and-icon"><img class="icon" src="'+myIcon+'">私</div></div>');
        } else {
            $('#thread').prepend('<div class="othersmessage"><div class="name-and-icon"><img class="icon" src="'+Icon+'">'+userName+'</div><div class="message">'+message+'</div>&ensp;<small><'+formatted+'></small>&ensp;</div>');
        }

    }
    else if (toName == myUserName || userName == myUserName) {
        if (myUserName === userName && myIcon == Icon) {
            $('#thread').prepend('<div class="mymessage">&ensp;<small><'+formatted+'></small>&ensp;<div class="message">(ダイレクトメッセージ)'+message+'</div><div class="name-and-icon"><img class="icon" src="'+myIcon+'">私</div></div>');
        } else {
            $('#thread').prepend('<div class="othersmessage"><div class="name-and-icon"><img class="icon" src="'+Icon+'">'+userName+'</div><div class="message">(ダイレクトメッセージ)'+message+'</div>&ensp;<small><'+formatted+'></small>&ensp;</div>');
        }
    }
    else {

    }

});



$('#message').keydown(function (event) {
    if (event.ctrlKey && event.keyCode === 13) {
        publish()
    }
})
