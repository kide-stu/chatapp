'use strict';



module.exports = function (server) {

    const socketIo = require('socket.io')(server, { wsEngine: 'ws' });
    const io = socketIo.listen(server);


    io.sockets.on('connection', function (socket) {
        // 投稿モジュールの呼出
        require('./publish')(socket, io);

        // 入室モジュールの呼出
        require('./enter')(socket, io);

        // 退室モジュールの呼出
        require('./exit')(socket);

        //スタンプモジュールの呼出
        require('./stamp')(socket, io);

        //メンバーモジュールの呼出
        require('./member')(socket, io);

    });
};
