import { getRepository, Repository } from "typeorm";
import { ICreateBalanceDTO } from "../dtos/ICreateBalanceDTO";
import { AccountBalance } from "../entities/AccountBalance";
import { IAccountsBalanceRepository } from "./IAccountBalanceRepository";

class AccountBalanceRepository implements IAccountsBalanceRepository {
    private repository: Repository<AccountBalance>;

    constructor() {
        this.repository = getRepository(AccountBalance);
    }

    async create({
        id,
        account_id,
        balance,
        created_at,
        updated_at
    }: ICreateBalanceDTO): Promise<AccountBalance> {
        const newBalance = this.repository.create({
            id,
            account_id,
            balance,
            created_at,
            updated_at
        });

        await this.repository.save(newBalance);

        return newBalance
    }
}

export { AccountBalanceRepository }