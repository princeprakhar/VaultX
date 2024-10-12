  const express = require('express');
  const userRouter = require('./user');

  const router = express.Router();
  // Add the userRouter to the app
  router.use('/user', userRouter);
  module.exports = router;