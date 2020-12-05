import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUsersRequestDTO } from "./CreateUserDTO";
import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";

export class CreateUseCase {
    constructor(
        private usersReoisitory: IUsersRepository,
        private mailProvider: IMailProvider,
    ) {}

    async execute(data: ICreateUsersRequestDTO){
       const userAlredyExists = await this.usersReoisitory.findByEmail(data.email); 
       
       if (userAlredyExists) {
           throw new Error('User alredy exists.');
        }
        
        const user = new User(data);
        
        await this.usersReoisitory.save(user);

        await this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email,
            },
            from: {
                name: 'Equipe dos Devs mais tops do BR!',
                email: 'lp@devs.com',
            },
            subject: 'Seja bem-vindo à plataforma',
            body: '<p> Você já pode fazer login em nossa plataforma</p>'
        })
    }


}