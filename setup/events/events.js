
module.exports = (io)=>{
    console.log('io');

    io.on('connection', (client)=>{
        console.log('connection io: ', client.request.session);

        client.emit('event', 'hello');

        client.on('update', (data) => {
            console.log('socket on: ', data.toString());
        });

        client.on('disconnect', () => {});
    });
};