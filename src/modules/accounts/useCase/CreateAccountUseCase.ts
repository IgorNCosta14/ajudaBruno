import { inject, injectable } from "tsyringe";
import { ICreateAccountDTO } from "../dtos/ICreateAccountDTO";
import { Account } from "../entities/Account";
import { IAccountsRepository } from "../repositories/IAccountsRepository";

@injectable()
class CreateAccountUseCase {
    constructor(
        @inject("AccountsRepository")
        private accountsRepository: IAccountsRepository
    ) {}

    async execute({
        name,
        email,
        cpf
    }:ICreateAccountDTO): Promise<Account> {
        const newAccount = this.accountsRepository.create({
            name,
            email,
            cpf
        })

        return newAccount
    }
}

export { CreateAccountUseCase }