import socket from 'socket.io-client';

export default class Socket {
    constructor(baseURL, getAccessToken) {
        this.io = socket(baseURL, {
            auth: (cb) => cb({ token: getAccessToken }),
            // 중요 한 번 더 보셈
            // auth 아닌 query 사용 시 브라우저에서 토큰이 보일 수 있음..
            // handshake 안에 있는 auth 사용. 보안을 위해
        });

        this.io.on('connect_error', (err) => {
            console.log('socket error', err.message);
        });
    }

    onSync(event, callback) {
        if(!this.io.connected) {
            this.io.connect();
        }

        this.io.on(event, (message) => callback(message));
        return () => this.io.off(event);
    }
}