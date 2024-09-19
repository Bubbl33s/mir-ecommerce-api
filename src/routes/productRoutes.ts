import { Router } from "express";
import { ProductController } from "../controllers/productController";

const router = Router();
const PREFIX = "/products";

router.get(PREFIX, ProductController.getProducts);
router.get(`${PREFIX}/id/:id`, ProductController.getProductById);
router.get(`${PREFIX}/active`, ProductController.getActiveProducts);
router.get(`${PREFIX}/inactive`, ProductController.getInactiveProducts);

export default router;
