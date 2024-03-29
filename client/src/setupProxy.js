const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/admin/api',
        createProxyMiddleware({
            target: 'http://localhost:3000',
            changeOrigin: true,
            headers: { Connection: 'keep-alive' },
        }),
    );
};
