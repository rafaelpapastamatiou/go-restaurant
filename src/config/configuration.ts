export const configuration = () => ({
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  database: {
    database: 'gorestaurant.sqlite',
    logging: process.env.DB_LOGGING
      ? process.env.DB_LOGGING === 'true'
        ? true
        : false
      : false,
  },
});
