function validateServiceTime(req, res, next) {
    const data = new Date(req.time);
    const hora = data.getHours();

    if (hora >= 8 && hora < 18) {
        return next();
    } else {
    res.status(403).json({
      message: "Acesso negado",
    });
  }
}

module.exports = validateServiceTime;  