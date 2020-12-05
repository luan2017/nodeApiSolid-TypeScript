import { User } from "../entities/User";

export interface IUsersRepository {
    findByEmail(email: string): Promise<User>; // retornar um usuário
    save(user: User): Promise<void>; // retornar vazio
}