import urlService from "./url.service.js";

class UrlController {
  #_service;
  constructor() {
    this.#_service = urlService;
  }

  createUrlShort = async (req, res, next) => {
    try {
      const url = await this.#_service.createShortUrl(req.body);
      if (!url) {
        res.status(400).send({
          message: "Bad request",
        });
        return;
      }
      res.redirect(`/?new_url=${url.short_url}`)
    } catch (error) {
      next(error);
    }
  };

  redirecturl = async (req, res, next) => {
    try {
      const url = await this.#_service.redirectUrl(req.params.url);
      if (!url) {
        res.status(404).send({ message: "Not found" });
        return;
      }
            
      res.redirect(`${url.full_url}`);
    } catch (error) {
      next(error);
    }
  };
}

export default new UrlController();
