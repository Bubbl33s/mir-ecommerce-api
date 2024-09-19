import { Request, Response } from "express";
import { CategoryService } from "../services/categoryService";

export class CategoryController {
  static async getCategories(_: Request, res: Response) {
    try {
      const categories = await CategoryService.getCategories();
      res.json(categories);
    } catch (error) {
      console.error("Error getting categories:", error);
      res.status(500).send("Error getting categories");
    }
  }

  static async getCategoryById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const category = await CategoryService.getCategoryById(Number(id));
      res.json(category);
    } catch (error) {
      console.error("Error getting category by id:", error);
      res.status(500).send("Error getting category by id");
    }
  }
}
