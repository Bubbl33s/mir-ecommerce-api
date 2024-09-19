import { Request, Response } from "express";
import { ProductService } from "../services/productService";

export class ProductController {
  static async getProducts(_: Request, res: Response) {
    try {
      const products = await ProductService.getProducts();
      res.json(products);
    } catch (error) {
      console.error("Error getting products:", error);
      res.status(500).send("Error getting products");
    }
  }

  static async getProductById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const product = await ProductService.getProductById(Number(id));
      res.json(product);
    } catch (error) {
      console.error("Error getting product by id:", error);
      res.status(500).send("Error getting product by id");
    }
  }

  static async getActiveProducts(_: Request, res: Response) {
    try {
      const products = await ProductService.getActiveProducts();
      res.json(products);
    } catch (error) {
      console.error("Error getting active products:", error);
      res.status(500).send("Error getting active products");
    }
  }

  static async getInactiveProducts(_: Request, res: Response) {
    try {
      const products = await ProductService.getInactiveProducts();
      res.json(products);
    } catch (error) {
      console.error("Error getting inactive products:", error);
      res.status(500).send("Error getting inactive products");
    }
  }
}
