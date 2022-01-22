module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a09286c5566dce593f099cce8a200c7c'),
  },
});
