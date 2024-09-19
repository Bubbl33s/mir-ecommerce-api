import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Conexión exitosa
prisma
  .$connect()
  .then(() => {
    console.log("🚀 Conexión a la base de datos exitosa");
  })
  .catch((error) => {
    console.error("❌ Error al conectar con la base de datos:", error);
    process.exit(1); // Cierra el proceso si hay un error de conexión
  });

export default prisma;
