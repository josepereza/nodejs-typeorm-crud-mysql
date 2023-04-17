export interface ICreateUser {
  name: string
  email: string
  password: string
  age: number
  created_at?: string
  updated_at?: string
}

export interface IUserID {
  id: string
}

export interface IUserUpdate {
  name?: string
  password?: string
  email?: string
  age?: number
  updated_at?: Date
  id: string
}
