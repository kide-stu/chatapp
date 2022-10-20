'use strict';

module.exports = function (socket, io) {
    // 投稿メッセージを送信する
    
    // sendMessageEvent
    // ソケットから投稿を受信
    // receiveMessageEvent
    // 全部のソケットに送信する
    socket.on('sendMessageEvent', function (message,userName,Icon,toName) {
        
    //時刻の取得
    require('date-utils');
    let dt = new Date();
    let formatted = dt.toFormat("HH24:MI");

        io.sockets.emit('receiveMessageEvent',message,userName,formatted,Icon,toName);
    });
};
