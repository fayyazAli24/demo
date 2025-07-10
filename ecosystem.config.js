// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'express-app',
      script: './src/index.js',
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    }
  ]
};
