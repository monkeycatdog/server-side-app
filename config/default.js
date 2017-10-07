module.exports = {
    dbConfig: {
        mongoDb: {
            connection: {
                host: 'mongodb://localhost/',
                user: '',
                port: '',
                password: '',
                db: 'test'
            },
            tables: {}
        },
        redis: {}
    },
    server: {
        port: 8080
    },
    session: {
        secret: "cat",
        key: "sid-cat",
        cookie: {
            path: "/",
            httponly: true,
            maxAge: 600000
        }
    }
};