module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3849ec46540e9f700ae568292ed56ea9'),
  },
});
