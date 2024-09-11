import { BaseError } from "./base.error.js";

export class ConflictError extends BaseError {
  constructor(message) {
    super();
    this.status = 403;
    this.name = "Conflict error";
    this.message = message;
  }
}
