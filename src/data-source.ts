import "reflect-metadata"
import { DataSource } from "typeorm"
import "dotenv/config"
require("dotenv").config()

/* Explicando código abaixo:
  * Estamos utilizando um ternário para controlar a configuração
    do DataSource do typeorm.

  * Utilizamos uma variavel de ambiente para controlar isso pois
    para conseguir manipular mesmo em um ambiente de produção.

  * O banco em que fazemos os testes é o SQLite e precisamos 
    das configurações pré definidas abaixo para que os testes executem
    de forma correta.
*/

export const AppDataSource =
  process.env.NODE_ENV === "test"
    ? new DataSource({
        type: "sqlite",
        database: ":memory:",
        entities: ["src/entities/*.ts"],
        synchronize: true,
      })
    : new DataSource({
        type: "mysql",
        host: process.env.HOST,
        port: 3306,
        username: process.env.MYSQL_USER,
        password: process.env.PASSWORD,
        database: process.env.DB,
        synchronize: true,
        logging: true,
        entities: ["src/entities/*.ts"],
        migrations: ["src/migrations/*.ts"],
      })
