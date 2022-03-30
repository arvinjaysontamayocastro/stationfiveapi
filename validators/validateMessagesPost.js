module.exports = (req, res, next) => {
  try {
      if(req.body && req.body.conversation_id && req.body.message) {

        next();
      }
      else {
        res.status(400).json({ message: "Invalid Format" });
      }
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
