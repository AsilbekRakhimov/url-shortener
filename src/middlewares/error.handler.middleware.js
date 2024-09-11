export const ErrorHandlerMiddleware = (err, __, res, _) => {
  if (err.isError) {
    res.status(400).send({
      name: err.name,
      message: err.message,
    });
    return;
  }

  res.status(500).send({
    name: "Server error",
    message: "Server bilan bog'liq xatolik",
  });
};
