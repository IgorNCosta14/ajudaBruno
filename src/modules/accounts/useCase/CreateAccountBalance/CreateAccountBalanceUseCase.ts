import { inject, injectable } from "tsyringe";
import { ICreateBalanceDTO } from "../../dtos/ICreateBalanceDTO";
import { IAccountsBalanceRepository } from "../../repositories/IAccountBalanceRepository";

@injectable()
class CreateAccountBalanceUseCase {
    constructor(
        @inject("AccountBalanceRepository")
        private accountBalanceRepository: IAccountsBalanceRepository
    ) {}
    
    async execute({ account_id, balance }:ICreateBalanceDTO) {
        const newBalance = this.accountBalanceRepository.create({ account_id, balance })

        return newBalance;
    } 
}

export { CreateAccountBalanceUseCase }