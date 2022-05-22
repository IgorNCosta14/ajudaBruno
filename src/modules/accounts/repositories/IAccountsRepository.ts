import { ICreateAccountDTO } from "../dtos/ICreateAccountDTO";
import { Account } from "../entities/Account";

export interface IAccountsRepository {
    create(data: ICreateAccountDTO): Promise<Account>
}