
class ApiError extends Error {
  statusCode: number
  errors: any
  constructor(
    statusCode: number,
    message = "Soemthing went wrong!",
    errors = [],
    stack = ""
  ) {
    super(message)
    this.statusCode = statusCode
    this.message = message
    console.log(message);
    this.errors = errors
    if (stack) {
      this.stack = stack
    } else {
      Error.captureStackTrace(this, this.constructor)
    }
  }
};
export default ApiError;