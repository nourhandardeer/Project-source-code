const notFound = (req, res, next) => {
    const error = new Error("Out of stock" ) ;
    res.status(404);
    //passes control to the next middleware in the stack.
    next(error);
};

const errorHandler = (err, req, res, next) => {
    //200 successful res, 500 internal server error
      const status = res.status === 200 ? 500 : res.status;
      res.status(status).json({
        error: {
          status: status,
          message: err.message,
        },
});
};
export {notFound, errorHandler};