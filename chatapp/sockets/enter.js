'use strict';

module.exports = function (socket, io) {
    // 入室メッセージをクライアントに送信する
    socket.on('sendMyNameEvent', function (userName) {
        if (!userName) {
            return
        }        
        //時刻の取得
        require('date-utils');
        let dt = new Date();
        let formatted = dt.toFormat("HH24:MI");

        io.sockets.emit('recieveMyNameEvent', userName , formatted);
    });

};
