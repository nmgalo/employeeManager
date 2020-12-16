const notFound = (req, res, next) => {
  res.send("<h1>You weren't supposed to do that</h1>");
  res.status(404);
};

module.exports = notFound;
