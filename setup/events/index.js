const { sio } = require('../dependencies');
// const session = require('../sessions');
const ioEvents = require('./events');


const init = (server, session)=>{
    let io = sio(server);

    io.use((socket, next) => {
        session(socket.request, {}, next);
    });

    ioEvents(io);

    return server;
};

module.exports = init;