'use strict';
//サーバに画像のURLを送信する
 function stamp() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    const Icon = $('#userIcon').val();
    let stamp = "stamp_ukareru_woman.png";
    socket.emit('sendStampEvent', stamp, userName, Icon);

    return false;
}
function stampangry() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    const Icon = $('#userIcon').val();
    let stamp = "stamp_okoru_man.png";
    socket.emit('sendStampEvent', stamp, userName, Icon);

    return false;
}
function stamppien() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    const Icon = $('#userIcon').val();
    let stamp = "stamp_pien_woman.png";
    socket.emit('sendStampEvent', stamp, userName, Icon);

    return false;
}
function stampyorosiku() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    const Icon = $('#userIcon').val();
    let stamp = "stamp_yoroshiku.png";
    socket.emit('sendStampEvent', stamp, userName, Icon);

    return false;
}
function stamptoutoi() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    const Icon = $('#userIcon').val();
    let stamp = "stamp_toutoi.png";
    socket.emit('sendStampEvent', stamp, userName, Icon);

    return false;
}
function stampthankyou() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    const Icon = $('#userIcon').val();
    let stamp = "stamp_thank_you.png";
    socket.emit('sendStampEvent', stamp, userName, Icon);

    return false;
}function stamptasukaru() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    const Icon = $('#userIcon').val();
    let stamp = "stamp_tasukarimashita.png";
    socket.emit('sendStampEvent', stamp, userName, Icon);

    return false;
}function stamphapiba() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    const Icon = $('#userIcon').val();
    let stamp = "stamp_happy_birthday_people.png";
    socket.emit('sendStampEvent', stamp, userName, Icon);

    return false;
}function stampkansou() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    const Icon = $('#userIcon').val();
    let stamp = "stamp_kojinno_kansoudesu.png";
    socket.emit('sendStampEvent', stamp, userName, Icon);

    return false;
}
function stampyorokobi() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    const Icon = $('#userIcon').val();
    let stamp = "stamp_yorokobi_man.png";
    socket.emit('sendStampEvent', stamp, userName, Icon);

    return false;
}
function stampkuyasi() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    const Icon = $('#userIcon').val();
    let stamp = "stamp_kuyashii_woman.png";
    socket.emit('sendStampEvent', stamp, userName, Icon);

    return false;
}function stampmoetuki() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    const Icon = $('#userIcon').val();
    let stamp = "stamp_moetsuki_man.png";
    socket.emit('sendStampEvent', stamp, userName, Icon);

    return false;
}
//サーバーから受信したスタンプを画面上に表示する
socket.on('receiveStampEvent', function(stamp, userName, Icon, formatted) {
    //自分のユーザ名を取得
    const myuserName = $('#userName').val();
    const myIcon = $('#userIcon').val();
    if (myuserName == userName && myIcon == Icon) {
        $('#thread').prepend('<div class="mymessage">&ensp;<small><'+formatted+'></small>&ensp;<img class="stamp" src="' + stamp + '" style="width: 160px; height: 160px;border-radius: 40px;margin-right: 20px;"><div class="name-and-icon"><img class="icon" src="'+myIcon+'">私</div></div>');
    }
    else {
        $('#thread').prepend('<div class="othersmessage"><div class="name-and-icon"><img class="icon" src="'+Icon+'">'+userName+'</div><img class="stamp" src="' + stamp + '" style="width: 160px; height: 160px;border-radius: 40px;margin-right: 20px;">&ensp;<small><'+formatted+'></small>&ensp;</div>');
    }
    
});