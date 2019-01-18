const validate = (decoded, request, callback) => {
  const userId = decoded.userId || {};
  if (!userId) return callback(null, false, userId);
  const credentials = {
    userId, // 可通过 credentials.userId 获取到 userId
  };
  return callback(null, true, credentials);
};

module.exports = (server) => {
  server.auth.strategy('jwt', 'jwt', {
    key: process.env.JWT_SECRET,
    validateFunc: validate,
    verifyOptions: {
      subject: 'blog user token',
    },
  });
  server.auth.default('jwt');
};