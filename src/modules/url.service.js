import { ConflictError } from "../errors/conflict.error.js";
import { urlSchema } from "./url.schema.js";

class UrlService {
  #_model;
  constructor() {
    this.#_model = urlSchema;
  }

  async createShortUrl({ full_url }) {
    try {
      const url = await this.#_model.create({
        full_url,
      });
      return url;
    } catch (error) {
      throw new ConflictError(error.message);
    }
  }

  async redirectUrl(url) {
    try {
      const foundedUrl = await this.#_model.findOne({
        short_url: url,
      });
      return foundedUrl;
    } catch (error) {
      throw new ConflictError(error.message);
    }
  }
}

export default new UrlService();
