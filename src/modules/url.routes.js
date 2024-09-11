import {Router} from "express";
import urlController from "./url.controller.js";

const router = Router();

router.post("/shortUrl", urlController.createUrlShort);
router.get("/:url", urlController.redirecturl);

export default router;