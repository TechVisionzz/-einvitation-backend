module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4b8fcbfd55d26524aab9d709bd63da27'),
  },
});
