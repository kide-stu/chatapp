'use strict';


// メモを画面上に表示する
function memo() {


    //ユーザ名を取得
    const userName = $('#userName').val();
    const myIcon = $('#userIcon').val();
    
    // 入力されたメッセージを取得
    const message = $('#message').val();
    //メッセージのスペースを除去
    const nospacemessage = message.replace(/\s+/g, "");
    //メッセージの改行を除去
    const nokaigyoumessage = nospacemessage.replace(/\n+/g, "");

    
    //メッセージが空でないか判別
    if (nokaigyoumessage !== ""){
        // メモの内容を表示
        $('#thread').prepend('<p class="memo"> <img src="' + myIcon + '"alt=""style="width: 45px;height: 45px;border-radius: 22.5px;border: 1px solid lightgray;margin-right: 10px;">メモ:&ensp;' + message +'</p>');
        // テキストボックスの初期化
        $('#message').val('');
    }
    else {
        alert("投稿文を入力してください");
    }

    return false;
}
