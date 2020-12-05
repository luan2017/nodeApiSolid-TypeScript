import { MailtrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const postgresUsersRepository = new PostgresUsersRepository()
const mailtrapMailProvider = new MailtrapMailProvider()

const createUserUseCase = new CreateUseCase(
    postgresUsersRepository,
    mailtrapMailProvider,
)

const createUseController = new CreateUserController(
    createUserUseCase
)

export { createUseController, createUserUseCase }