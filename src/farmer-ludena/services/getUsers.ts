import { users } from "../users"

export interface IUser {
    id: string
    name: string
    role: string
    email: string
    image: string
}

export const getUsers = async () => {
    const allUsers:IUser[] = users.map((user) => (
        {
          ...user,
          role: user.role || 'Rol no asignado',
          email: user.email || 'Correo no registrado'
        }
      ))
      
    return allUsers
}