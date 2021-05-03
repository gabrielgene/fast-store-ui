module.exports = {
  apps: [
    {
      name: 'next',
      script: 'yarn',
      args: 'prod',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
