import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class ProductService {
  static async getProducts() {
    return prisma.products.findMany();
  }

  static async getProductById(id: number) {
    return prisma.products.findUnique({
      where: { id },
    });
  }

  static async getActiveProducts() {
    return prisma.products.findMany({
      where: { is_deleted: false },
    });
  }

  static async getInactiveProducts() {
    return prisma.products.findMany({
      where: { is_deleted: true },
    });
  }
}
