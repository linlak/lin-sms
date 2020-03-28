const PROXY_CONFIG = [{
    context: [
        "/api",
        "/images",
        "/storage",
        "/broadcasting",
        "/developers",
    ],
    target: "http://localhost",
    secure: false,
    // changeOrigin: true,
}];

module.exports = PROXY_CONFIG;