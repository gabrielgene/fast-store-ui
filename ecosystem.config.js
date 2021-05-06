module.exports = {
  apps: [
    {
      name: 'next',
      script: 'yarn',
      args: 'start',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
