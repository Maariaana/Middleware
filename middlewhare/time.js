function time(req, res, next) {
  const time = Date();
  console.log('Time: ', time);
  req.time = time
  next();
}
module.exports = time;