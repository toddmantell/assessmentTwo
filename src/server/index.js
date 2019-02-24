const server = require('express')();
const dev = process.env.NODE_ENV !== 'production';
const app = require('next')({dev});

server.get('', () => {});
