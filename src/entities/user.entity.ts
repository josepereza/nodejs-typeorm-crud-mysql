import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("users_database")
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  age: number

  @Column()
  created_at: Date //date: Date ${date.toDateString()} ("Maddison", new Date());

  @Column()
  updated_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
