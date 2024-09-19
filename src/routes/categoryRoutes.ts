import { Router } from "express";
import { CategoryController } from "../controllers/categoryController";

const router = Router();
const PREFIX = "/categories";

router.get(PREFIX, CategoryController.getCategories);
router.get(`${PREFIX}/id/:id`, CategoryController.getCategoryById);

export default router;
