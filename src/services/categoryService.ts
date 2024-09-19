import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class CategoryService {
  static async getCategories() {
    return prisma.categories.findMany();
  }

  static async getCategoryById(id: number) {
    return prisma.categories.findUnique({
      where: { id },
    });
  }
}
