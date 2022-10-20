'use strict';

module.exports = function(socket, io) {
    socket.on('sendStampEvent', function(stamp, userName, Icon) {
        require('date-utils');
        let dt = new Date();
        let formatted = dt.toFormat("HH24:MI");
        io.sockets.emit('receiveStampEvent', stamp, userName, Icon, formatted);
    });
};