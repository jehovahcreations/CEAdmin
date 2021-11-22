module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', '15.207.216.233'),
        srv: env.bool('DATABASE_SRV', false),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'comboExpert'),
        username: env('DATABASE_USERNAME', 'comboexpert'),
        password: env('DATABASE_PASSWORD', '123456'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', 'comboExpert'),
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  },
});
